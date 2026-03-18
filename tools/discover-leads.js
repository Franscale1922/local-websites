#!/usr/bin/env node
/**
 * discover-leads.js
 *
 * Finds local businesses in a geographic radius that are likely candidates
 * for a website upgrade. Uses the Google Places API (Nearby Search + Place Details)
 * to pull real businesses with real website URLs, ratings, and review counts.
 *
 * Pipeline:
 *   1. Query Google Places Nearby Search by category + radius from a lat/lng center
 *   2. For each result, fetch place details to get the website URL
 *   3. Pre-filter obvious non-targets (chains, franchises, no website, too few reviews)
 *   4. Output a leads JSON file ready for audit-urls.js to score
 *
 * Usage:
 *   # Discover restaurants within 45 min (~50km) of Whitefish:
 *   node tools/discover-leads.js --category restaurant --radius 50000
 *
 *   # Multiple categories at once:
 *   node tools/discover-leads.js --category lodging,restaurant,auto_repair --radius 50000
 *
 *   # Custom center point (default is Whitefish, MT):
 *   node tools/discover-leads.js --category restaurant --lat 48.4105 --lng -114.3352
 *
 *   # Run a full sweep across all target categories:
 *   node tools/discover-leads.js --all --radius 50000
 *
 * Output:
 *   leads/discovered-[date]-[category].json
 *
 * Env: GOOGLE_PLACES_API_KEY
 * Cost: ~$0.017 per Nearby Search call + $0.017 per Details call
 *       A full sweep of 6 categories ≈ $1.00–2.00 total
 *       Free $200/month credit covers everything at this scale
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

const LEADS_DIR = new URL('../leads', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error('Missing GOOGLE_PLACES_API_KEY. Get one at https://console.cloud.google.com');
  console.error('Enable: Places API (New) — free $200/month credit is more than enough.');
  process.exit(1);
}

// ─── Configuration ────────────────────────────────────────────────────────────

// Default center: Whitefish, MT — adjust if expanding territory
const DEFAULT_LAT = 48.4105;
const DEFAULT_LNG = -114.3352;
const DEFAULT_RADIUS = 50000; // 50km ≈ 45-minute drive radius

// All target categories mapped to Google Places (New) types
// Tier 1 — High value: low complexity, high ticket, local owner decides
// Tier 2 — Medium value: good fit but slightly more complexity
// Tier 3 — Low priority: kept for market awareness, not primary targets
const CATEGORY_MAP = {

  // ── TIER 1: IDEAL TARGETS ──────────────────────────────────────────────────

  'home-services': [              // Emergency + high ticket. Mobile-first, click-to-call.
    'plumber',
    'electrician',
    'hvac_contractor',
    'roofing_contractor',
    'pest_control',
    'garage_door',
    'locksmith',
  ],

  'trades-construction': [        // Project-based, visual portfolios, sole owner.
    'general_contractor',
    'construction_company',
    'excavating_contractor',
    'masonry_contractor',
    'fence_contractor',
    'concrete_contractor',
    'well_drilling_contractor',
  ],

  'outdoor-guides': [             // Flathead Valley goldmine. Premium day rates, clients research hard.
    'guide_service',
    'hunting_area',
    'fishing_store',
    'outdoor_sports_store',
    'canoe_kayak_rental',
    'boat_rental',
  ],

  'professional-services': [      // High LTV. Simple credibility site. No booking needed.
    'dentist',
    'lawyer',
    'insurance_agency',
    'accountant',
    'physiotherapist',
    'veterinary_care',
    'surveyor',
  ],

  'landscaping': [                // Seasonal + visual. Before/after galleries.
    'landscaping_service',
    'lawn_care_service',
    'tree_service',
    'pressure_washing',
    'snow_removal',
    'gardener',
  ],

  'wellness': [                   // Solo operators. Referral + search hybrid.
    'chiropractor',
    'massage_therapist',
    'massage',
    'spa',
    'physical_therapist',
  ],

  // ── TIER 2: GOOD FIT ───────────────────────────────────────────────────────

  'auto-services': [
    'car_repair',
    'auto_body_shop',
    'car_dealer',
    'car_wash',
    'auto_parts_store',
  ],

  'specialty-trades': [           // Painters, flooring, windows — visual + high ticket.
    'painter',
    'flooring_contractor',
    'flooring_store',
    'window_installation_service',
    'cabinet_maker',
    'handyman',
    'upholstery_shop',
  ],

  // ── TIER 3: MARKET AWARENESS (low priority build targets) ──────────────────

  restaurant:           ['restaurant', 'cafe', 'bakery', 'bar', 'meal_takeaway', 'brunch_restaurant'],
  lodging:              ['lodging', 'campground', 'rv_park'],
  'retail-boutique':    ['clothing_store', 'jewelry_store', 'book_store', 'gift_shop', 'florist', 'home_goods_store', 'furniture_store', 'pet_store'],
  'outdoor-adventure':  ['tourist_attraction', 'travel_agency', 'park', 'rv_park', 'campground'],
};

// Known national/regional chains to suppress (partial name match, case-insensitive)
const CHAIN_BLOCKLIST = [
  'mcdonald', 'subway', 'wendy', 'burger king', 'taco bell', 'pizza hut',
  'domino', 'dairy queen', 'kfc', 'chipotle', 'starbucks', 'dunkin',
  'holiday inn', 'best western', 'comfort inn', 'super 8', 'days inn',
  'hampton inn', 'courtyard', 'marriott', 'hilton', 'motel 6', 'quality inn',
  'jiffy lube', 'midas', 'firestone', 'goodyear', 'pep boys', 'autozone',
  'o\'reilly', 'advance auto', "jiffy lube",
  'walmart', 'target', 'costco', 'home depot', 'lowe\'s',
  'uhaul', 'enterprise', 'hertz', 'avis',
  'edward jones', 'h&r block', 'liberty tax',
  'great clips', 'supercuts', 'sport clips',
];

// ─── Google Places API (New) calls ───────────────────────────────────────────

const delay = ms => new Promise(r => setTimeout(r, ms));

const NEARBY_URL    = 'https://places.googleapis.com/v1/places:searchNearby';
const DETAILS_BASE  = 'https://places.googleapis.com/v1/places';

async function nearbySearch(lat, lng, radius, type, pageToken = null) {
  const body = {
    includedTypes: [type],
    maxResultCount: 20,
    locationRestriction: {
      circle: {
        center: { latitude: lat, longitude: lng },
        radius: parseFloat(radius),
      },
    },
  };
  if (pageToken) body.pageToken = pageToken;

  const resp = await fetch(NEARBY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': API_KEY,
      // nextPageToken is auto-returned — do NOT include in FieldMask
      // places.name is the resource name (places/ChIJ...) used for detail calls
      'X-Goog-FieldMask': 'places.name,places.displayName,places.rating,places.userRatingCount,places.businessStatus,places.types',
    },
    body: JSON.stringify(body),
  });

  const data = await resp.json();

  if (data.error) {
    console.error(`\n   ❌ API Error [${data.error.status}]: ${data.error.message}`);
    return { results: [] };
  }

  // Normalize to the shape the rest of the script expects
  return {
    results: (data.places || []).map(p => ({
      place_id: p.name,   // resource name (places/ChIJ...) — used in detail URL
      name:     p.displayName?.text || '',
      rating:               p.rating,
      user_ratings_total:   p.userRatingCount,
      business_status:      p.businessStatus,
      types:                p.types || [],
    })),
    next_page_token: data.nextPageToken || null,
  };
}


async function getPlaceDetails(placeId) {
  // placeId is already the full resource name: "places/ChIJ..."
  // Strip the "places/" prefix to build the URL correctly
  const rawId = placeId.startsWith('places/') ? placeId.slice('places/'.length) : placeId;
  const url = `${DETAILS_BASE}/${rawId}`;

  const resp = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': 'displayName,formattedAddress,nationalPhoneNumber,websiteUri,rating,userRatingCount,types,businessStatus,googleMapsUri',
    },
  });

  const data = await resp.json();

  if (data.error) {
    console.error(`\n   ❌ Place Details Error: ${data.error.message}`);
    return null;
  }

  return {
    name:                     data.displayName?.text,
    formatted_address:        data.formattedAddress,
    formatted_phone_number:   data.nationalPhoneNumber,
    website:                  data.websiteUri,
    rating:                   data.rating,
    user_ratings_total:       data.userRatingCount,
    types:                    data.types,
    business_status:          data.businessStatus,
    url:                      data.googleMapsUri,
  };
}


// ─── Email scraping ──────────────────────────────────────────────────────────

// Domains/patterns that appear in HTML but are not real contact emails
const EMAIL_BLOCKLIST = [
  // Placeholder / template emails
  'example.com', 'domain.com', 'yourdomain', 'mystore.com',
  // Error reporting / platform internals
  'sentry.io', 'sentry-next', 'wixpress.com',
  // Website builder support addresses
  'wix.com', 'squarespace.com', 'webador.com', 'godaddy.com', 'weebly.com',
  // Corporate chain contacts (not local)
  'inspirebrands.com',
  // Code / asset false positives
  'jquery', 'schema.org', '@2x', '.png', '.jpg', '.svg',
];

function extractEmail(html) {
  if (!html) return null;

  // Prefer mailto: links — most likely to be intentional contact emails
  const mailtoMatches = [...html.matchAll(/mailto:([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})/gi)];
  for (const m of mailtoMatches) {
    const email = m[1].toLowerCase();
    if (!EMAIL_BLOCKLIST.some(b => email.includes(b))) return m[1];
  }

  // Fall back to generic email regex in page text
  const genericMatches = [...html.matchAll(/\b([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})\b/g)];
  for (const m of genericMatches) {
    const email = m[1].toLowerCase();
    if (!EMAIL_BLOCKLIST.some(b => email.includes(b))) return m[1];
  }

  return null;
}

async function fetchPage(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const resp = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LeadResearch/1.0)' },
    });
    clearTimeout(timeout);
    if (!resp.ok) return null;
    return await resp.text();
  } catch {
    clearTimeout(timeout);
    return null;
  }
}

async function scrapeEmail(websiteUrl) {
  if (!websiteUrl) return null;
  try {
    const base = new URL(websiteUrl);

    // 1. Try homepage
    const homeHtml = await fetchPage(websiteUrl);
    const homeEmail = extractEmail(homeHtml);
    if (homeEmail) return homeEmail;

    // 2. Try /contact page
    const contactUrl = new URL('/contact', base).href;
    const contactHtml = await fetchPage(contactUrl);
    const contactEmail = extractEmail(contactHtml);
    if (contactEmail) return contactEmail;

    // 3. Try /contact-us
    const contactUsUrl = new URL('/contact-us', base).href;
    const contactUsHtml = await fetchPage(contactUsUrl);
    return extractEmail(contactUsHtml);
  } catch {
    return null;
  }
}

// ─── Filtering logic ──────────────────────────────────────────────────────────

function isChain(name) {
  const lower = name.toLowerCase();
  return CHAIN_BLOCKLIST.some(chain => lower.includes(chain));
}

function shouldSkip(place) {
  // Skip permanently closed businesses
  if (place.business_status === 'CLOSED_PERMANENTLY') return 'closed';
  // Skip chains
  if (isChain(place.name)) return 'chain';
  // Skip businesses with very few reviews (not established enough)
  if ((place.user_ratings_total || 0) < 10) return 'too_few_reviews';
  return null;
}

function hasWebsite(details) {
  return !!details?.website;
}

function websiteIsWorthBuilding(website) {
  if (!website) return false;
  const lower = website.toLowerCase();
  // Skip if they're already on a modern platform that suggests recent build
  if (lower.includes('squarespace.com') || lower.includes('wix.com') || lower.includes('shopify.com')) {
    // Still worth checking — Squarespace/Wix sites can look terrible
    return true;
  }
  // Skip Facebook Pages used as websites — no point building for these, they need a real site
  if (lower.includes('facebook.com')) return false;
  return true;
}

// ─── Main discovery function ──────────────────────────────────────────────────

async function discoverCategory(categoryName, placeTypes, lat, lng, radius) {
  console.log(`\n🔍 Searching: ${categoryName} within ${(radius/1000).toFixed(0)}km of ${lat}, ${lng}`);
  
  const allPlaces = new Map(); // placeId → basic place data
  
  // Search each place type for this category
  for (const placeType of placeTypes) {
    process.stdout.write(`   [type: ${placeType}] `);
    let data = await nearbySearch(lat, lng, radius, placeType);
    let page = 1;
    
    while (true) {
      const results = data.results || [];
      results.forEach(p => allPlaces.set(p.place_id, p));
      process.stdout.write(`${results.length} `);
      
      // Handle pagination (up to 3 pages = 60 results per type)
      if (data.next_page_token && page < 3) {
        await delay(2000); // Google requires a short delay before using page token
        data = await nearbySearch(lat, lng, radius, placeType, data.next_page_token);
        page++;
      } else {
        break;
      }
    }
    console.log('');
    await delay(200);
  }

  console.log(`   Total unique places found: ${allPlaces.size}`);
  
  // Fetch details for each place
  const leads = [];
  let fetched = 0;
  let skipped = 0;

  for (const [placeId, place] of allPlaces) {
    const skipReason = shouldSkip(place);
    if (skipReason) {
      skipped++;
      continue;
    }

    process.stdout.write(`   [details] ${place.name.slice(0, 40).padEnd(40)} `);

    const details = await getPlaceDetails(placeId);
    await delay(100); // polite rate limiting

    const website = details?.website || null;

    // Scrape contact email from their website (homepage → /contact → /contact-us)
    const email = await scrapeEmail(website);

    // Build the lead object
    const lead = {
      placeId,
      name: details?.name || place.name,
      address: details?.formatted_address || '',
      phone: details?.formatted_phone_number || null,
      email: email || null,
      website: website || null,
      websiteStatus: !website ? 'NO_WEBSITE' : (websiteIsWorthBuilding(website) ? 'WORTH_AUDITING' : 'SKIP'),
      googleUrl: details?.url || null,
      rating: place.rating || null,
      reviewCount: place.user_ratings_total || 0,
      category: categoryName,
      placeTypes: place.types || [],
      discoveredAt: new Date().toISOString(),
      auditScore: null,        // filled by audit-urls.js
      leadScore: null,         // filled by score-leads.js
      status: 'DISCOVERED',
    };

    leads.push(lead);
    fetched++;
    const siteDisplay = website ? `✓ ${website.replace(/^https?:\/\//, '').slice(0, 28)}` : '— no website          ';
    const emailDisplay = email ? ` 📧 ${email}` : '';
    process.stdout.write(`${siteDisplay}${emailDisplay}\n`);
  }

  console.log(`   Fetched details: ${fetched} | Skipped: ${skipped}`);
  return leads;
}

// ─── Export ───────────────────────────────────────────────────────────────────

function exportLeads(leads, categoryName) {
  if (!existsSync(LEADS_DIR)) mkdirSync(LEADS_DIR, { recursive: true });
  
  const date = new Date().toISOString().split('T')[0];
  const filename = `discovered-${date}-${categoryName}.json`;
  const filepath = join(LEADS_DIR, filename);
  
  writeFileSync(filepath, JSON.stringify({ 
    meta: {
      category: categoryName,
      discoveredAt: new Date().toISOString(),
      totalFound: leads.length,
      withWebsite: leads.filter(l => l.website).length,
      withoutWebsite: leads.filter(l => !l.website).length,
    },
    leads 
  }, null, 2));
  
  return filepath;
}

function printSummary(leads, categoryName, filepath) {
  const withSite = leads.filter(l => l.website);
  const noSite   = leads.filter(l => !l.website);
  const highRated = withSite.filter(l => (l.rating || 0) >= 4.0 && (l.reviewCount || 0) >= 20);

  console.log(`\n📊 ${categoryName} Summary`);
  console.log(`   Total businesses found:   ${leads.length}`);
  console.log(`   Have a website:           ${withSite.length}`);
  console.log(`   No website at all:        ${noSite.length}  ← immediate opportunity`);
  console.log(`   High-rated + established: ${highRated.length}  ← best prospects`);
  console.log(`   Saved to: leads/${filepath.split('/leads/')[1]}`);
  console.log(`\nNext: node tools/audit-urls.js --file leads/${filepath.split('/leads/')[1]}`);
}

// ─── Entry point ─────────────────────────────────────────────────────────────

async function run() {
  const lat    = parseFloat(getArg('--lat') || DEFAULT_LAT);
  const lng    = parseFloat(getArg('--lng') || DEFAULT_LNG);
  const radius = parseInt(getArg('--radius') || DEFAULT_RADIUS);
  const runAll = process.argv.includes('--all');
  const catArg = getArg('--category');

  let categoriesToRun = [];

  if (runAll) {
    categoriesToRun = Object.keys(CATEGORY_MAP);
    console.log(`🗺️  Full sweep: ${categoriesToRun.join(', ')}`);
  } else if (catArg) {
    categoriesToRun = catArg.split(',').map(c => c.trim().toLowerCase());
    const invalid = categoriesToRun.filter(c => !CATEGORY_MAP[c]);
    if (invalid.length) {
      console.error(`Unknown categories: ${invalid.join(', ')}`);
      console.error(`Valid: ${Object.keys(CATEGORY_MAP).join(', ')}`);
      process.exit(1);
    }
  } else {
    console.error('Usage: node tools/discover-leads.js --category [name] --radius [meters]');
    console.error(`       node tools/discover-leads.js --all`);
    console.error(`Categories: ${Object.keys(CATEGORY_MAP).join(', ')}`);
    process.exit(1);
  }

  console.log(`\n🏔️  Lead Discovery — Flathead Valley & Surroundings`);
  console.log(`   Center: ${lat}, ${lng} | Radius: ${(radius/1000).toFixed(0)}km (~${Math.round(radius/1000 * 0.621)} miles)`);

  for (const categoryName of categoriesToRun) {
    const placeTypes = CATEGORY_MAP[categoryName];
    const leads = await discoverCategory(categoryName, placeTypes, lat, lng, radius);
    const filepath = exportLeads(leads, categoryName);
    printSummary(leads, categoryName, filepath);
    
    if (categoriesToRun.length > 1) await delay(1000);
  }
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
