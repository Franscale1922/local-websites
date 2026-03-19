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

// All target categories mapped to Google Places (New) Table A types ONLY.
// Source: https://developers.google.com/maps/documentation/places/web-service/place-types
// NOTE: Most contractor/trade types (hvac_contractor, landscaping_service, etc.)
//       do NOT exist in the new API. Those businesses are captured via broader types
//       or through the Text Search fallback (future enhancement).
const CATEGORY_MAP = {

  // ── TIER 1: IDEAL TARGETS ──────────────────────────────────────────────────

  'home-services': [              // Confirmed valid Table A types
    'plumber',
    'electrician',
    'roofing_contractor',
    'locksmith',
    // Note: hvac_contractor, pest_control, garage_door → NOT in Places API (New)
  ],

  'trades-construction': [        // Most trade types don't exist — using closest proxies
    'moving_company',             // valid; high local trust, simple site
    'storage',                    // valid; local businesses, simple sites
    'building_materials_store',   // valid; catches lumber yards + supply houses
    'hardware_store',             // valid; local hardware/supply shops
  ],

  'outdoor-guides': [             // Flathead Valley goldmine — all confirmed valid
    'fishing_charter',
    'fishing_pond',
    'hiking_area',
    'marina',
    'adventure_sports_center',
    'ski_resort',
    'sports_activity_location',
    'sports_coaching',
  ],

  'professional-services': [      // All confirmed valid Table A types
    'dentist',
    'dental_clinic',
    'lawyer',
    'insurance_agency',
    'accounting',                 // valid (NOT 'accountant')
    'physiotherapist',
    'veterinary_care',
    'consultant',
  ],

  'landscaping': [                // landscaping_service, lawn_care, tree_service → NOT valid
    'garden_center',              // valid; catches nurseries + landscaping referrals
    // Note: actual landscapers/tree services require Text Search to find
  ],

  'wellness': [                   // All confirmed valid
    'chiropractor',
    'massage',
    'massage_spa',
    'spa',
    'wellness_center',
    'yoga_studio',
  ],

  // ── TIER 2: GOOD FIT ───────────────────────────────────────────────────────

  'auto-services': [
    'car_repair',
    'car_wash',
    'car_dealer',
    'auto_parts_store',
    'tire_shop',                  // added — valid, high local ownership
  ],

  'specialty-trades': [           // painter valid; flooring/cabinet/handyman → NOT valid
    'painter',
    'home_improvement_store',     // proxy for remodel/trade referrals
  ],

  // ── TIER 3: MARKET AWARENESS ───────────────────────────────────────────────

  restaurant:           ['restaurant', 'cafe', 'bakery', 'bar', 'meal_takeaway', 'brunch_restaurant'],
  lodging:              ['lodging', 'bed_and_breakfast', 'campground', 'rv_park', 'guest_house', 'motel'],
  'retail-boutique':    ['clothing_store', 'jewelry_store', 'book_store', 'gift_shop', 'florist', 'home_goods_store', 'furniture_store', 'pet_store'],
  'outdoor-adventure':  ['tourist_attraction', 'travel_agency', 'national_park', 'hiking_area', 'adventure_sports_center'],
};


// For categories where no Places API type exists, use keyword text search instead.
// Results are deduplicated into the same Map as nearby search results.
const TEXT_SEARCH_MAP = {
  'home-services': [
    'HVAC contractor',
    'heating and cooling contractor',
    'air conditioning repair',
    'pest control',
    'garage door repair',
    'garage door installation',
  ],
  'trades-construction': [
    'general contractor',
    'custom home builder',
    'remodeling contractor',
    'excavation contractor',
    'masonry contractor',
    'fence contractor',
    'fence installation',
    'concrete contractor',
    'well drilling',
  ],
  'landscaping': [
    'landscaping company',
    'lawn care service',
    'tree service',
    'tree removal',
    'pressure washing',
    'snow removal service',
    'sprinkler installation',
  ],
  'specialty-trades': [
    'flooring contractor',
    'flooring installation',
    'cabinet maker',
    'custom cabinets',
    'handyman service',
    'window replacement',
    'door installation',
  ],
  'outdoor-guides': [
    'fishing guide',
    'hunting guide',
    'hunting outfitter',
    'float trip guide',
    'kayak tour',
    'whitewater guide',
  ],
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
const TEXT_SEARCH_URL = 'https://places.googleapis.com/v1/places:searchText';
const DETAILS_BASE  = 'https://places.googleapis.com/v1/places';

// Shared field mask for both Nearby and Text Search
const PLACE_FIELD_MASK = 'places.name,places.displayName,places.rating,places.userRatingCount,places.businessStatus,places.types';

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
      'X-Goog-FieldMask': PLACE_FIELD_MASK,
    },
    body: JSON.stringify(body),
  });

  const data = await resp.json();

  if (data.error) {
    console.error(`\n   ❌ API Error [${data.error.status}]: ${data.error.message}`);
    return { results: [] };
  }

  return {
    results: (data.places || []).map(p => ({
      place_id: p.name,
      name:     p.displayName?.text || '',
      rating:               p.rating,
      user_ratings_total:   p.userRatingCount,
      business_status:      p.businessStatus,
      types:                p.types || [],
    })),
    next_page_token: data.nextPageToken || null,
  };
}

async function textSearch(query, lat, lng, radius) {
  const body = {
    textQuery: query,
    maxResultCount: 20,
    locationRestriction: {
      circle: {
        center: { latitude: lat, longitude: lng },
        radius: parseFloat(radius),
      },
    },
  };

  const resp = await fetch(TEXT_SEARCH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': PLACE_FIELD_MASK,
    },
    body: JSON.stringify(body),
  });

  const data = await resp.json();

  if (data.error) {
    console.error(`\n   ❌ Text Search Error [${data.error.status}]: ${data.error.message}`);
    return { results: [] };
  }

  // Same normalization as nearbySearch so the rest of the pipeline is identical
  return {
    results: (data.places || []).map(p => ({
      place_id: p.name,
      name:     p.displayName?.text || '',
      rating:               p.rating,
      user_ratings_total:   p.userRatingCount,
      business_status:      p.businessStatus,
      types:                p.types || [],
    })),
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
  
  // ── Phase 1: Nearby Search by place type ─────────────────────────────────
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

  // ── Phase 2: Text Search for contractor/trade keywords (no API type exists) ─
  const textQueries = TEXT_SEARCH_MAP[categoryName] || [];
  if (textQueries.length > 0) {
    console.log(`   [text search: ${textQueries.length} keyword queries]`);
  }
  for (const query of textQueries) {
    process.stdout.write(`   [search] "${query}" `);
    const data = await textSearch(query, lat, lng, radius);
    let newCount = 0;
    for (const place of data.results) {
      if (!allPlaces.has(place.place_id)) {
        allPlaces.set(place.place_id, place);
        newCount++;
      }
    }
    process.stdout.write(`${data.results.length} found, ${newCount} new\n`);
    await delay(300);
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
