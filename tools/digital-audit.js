#!/usr/bin/env node
/**
 * digital-audit.js
 *
 * Forensic intelligence gathering for a prospect business.
 * Builds a comprehensive profile of:
 *   - The business (articles, press, awards, local mentions)
 *   - The owner (name, background, social presence, personal interests)
 *   - Social media accounts (Facebook, Instagram, LinkedIn, Yelp)
 *   - Online sentiment and notable moments
 *   - Visual identity clues (what their photos suggest about their personality)
 *
 * Uses Jina.ai Reader for content extraction (free, no auth required for basic use)
 * Uses Brave Search API for web search (generous free tier)
 *
 * Usage:
 *   node tools/digital-audit.js --slug flathead-fish-seafood --business "Flathead Fish & Seafood" --city "Columbia Falls" --state MT
 *
 *   # With optional owner name if already known:
 *   node tools/digital-audit.js --slug flathead-fish-seafood --business "Flathead Fish & Seafood" --owner "John Smith"
 *
 * Output:
 *   prospects/[slug]/digital-audit.json   — structured data
 *   prospects/[slug]/owner-intel.md       — human-readable intelligence profile
 *
 * Env:
 *   BRAVE_SEARCH_API_KEY  — get free key at https://api.search.brave.com (2,000 queries/mo free)
 *   ANTHROPIC_API_KEY     — for synthesizing findings into actionable intelligence
 *   JINA_API_KEY          — optional, for higher Jina rate limits
 */

import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG        = getArg('--slug');
const BUSINESS    = getArg('--business');
const CITY        = getArg('--city') || '';
const STATE       = getArg('--state') || 'MT';
const OWNER_NAME  = getArg('--owner') || null;

if (!SLUG || !BUSINESS) {
  console.error('Usage: node tools/digital-audit.js --slug [slug] --business "Business Name" --city "City" [--owner "Owner Name"]');
  process.exit(1);
}

const BRAVE_KEY    = process.env.BRAVE_SEARCH_API_KEY;
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;

if (!BRAVE_KEY) {
  console.error('⚠️  BRAVE_SEARCH_API_KEY not set. Get a free key at https://api.search.brave.com');
  console.error('   Free tier: 2,000 queries/month. More than enough for this tool.');
  process.exit(1);
}

const PROSPECT_DIR = join(PROSPECTS_DIR, SLUG);
if (!existsSync(PROSPECT_DIR)) mkdirSync(PROSPECT_DIR, { recursive: true });

// ─── Brave Search ─────────────────────────────────────────────────────────────

async function braveSearch(query, count = 10) {
  const url = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=${count}&search_lang=en&country=US&safesearch=moderate`;
  try {
    const resp = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'X-Subscription-Token': BRAVE_KEY,
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!resp.ok) {
      console.warn(`   Search failed for "${query}": ${resp.status}`);
      return [];
    }
    const data = await resp.json();
    return (data.web?.results || []).map(r => ({
      title: r.title,
      url: r.url,
      description: r.description,
      age: r.age,
    }));
  } catch {
    return [];
  }
}

// ─── Jina Reader ────────────────────────────────────────────────────────────

async function readPageContent(url, maxChars = 1500) {
  const jinaUrl = `https://r.jina.ai/${url}`;
  const headers = { 'Accept': 'text/plain' };
  if (process.env.JINA_API_KEY) headers['Authorization'] = `Bearer ${process.env.JINA_API_KEY}`;
  try {
    const resp = await fetch(jinaUrl, { headers, signal: AbortSignal.timeout(12000) });
    if (!resp.ok) return null;
    const text = await resp.text();
    return text.trim().slice(0, maxChars);
  } catch {
    return null;
  }
}

// ─── Delay helper ────────────────────────────────────────────────────────────

const delay = ms => new Promise(r => setTimeout(r, ms));

// ─── Search battery ──────────────────────────────────────────────────────────

async function runSearchBattery() {
  const locationStr = [CITY, STATE].filter(Boolean).join(', ');
  const queries = [
    // Business discovery
    `"${BUSINESS}" ${locationStr}`,
    `"${BUSINESS}" ${locationStr} review OR article OR interview`,
    `"${BUSINESS}" ${locationStr} owner OR founded OR history`,
    `"${BUSINESS}" ${locationStr} award OR recognition OR featured`,
    // Social media
    `"${BUSINESS}" site:facebook.com`,
    `"${BUSINESS}" site:instagram.com`,
    `"${BUSINESS}" site:yelp.com`,
    `"${BUSINESS}" site:tripadvisor.com`,
    // Owner (if known) or owner discovery
    ...(OWNER_NAME
      ? [
          `"${OWNER_NAME}" "${BUSINESS}"`,
          `"${OWNER_NAME}" ${locationStr} business owner`,
          `"${OWNER_NAME}" ${locationStr} interview OR article OR profile`,
          `"${OWNER_NAME}" ${locationStr} linkedin`,
        ]
      : [
          `"${BUSINESS}" owner interview OR "owner of" OR "founded by"`,
          `"${BUSINESS}" ${locationStr} "small business" owner profile`,
        ]),
    // State business records
    `"${BUSINESS}" ${STATE} Secretary of State business registration`,
    // Local press / chamber
    `"${BUSINESS}" ${locationStr} "chamber of commerce" OR "local news" OR "daily inter lake" OR "flathead beacon"`,
  ];

  const allResults = {};
  console.log(`\n🔍 Running ${queries.length} searches...\n`);

  for (const q of queries) {
    process.stdout.write(`   [search] ${q.slice(0, 70)}... `);
    const results = await braveSearch(q, 8);
    allResults[q] = results;
    process.stdout.write(`${results.length} results\n`);
    await delay(300); // polite rate limiting
  }

  return allResults;
}

// ─── Categorize and extract social media ─────────────────────────────────────

function extractSocialProfiles(allResults) {
  const profiles = {
    facebook: null,
    instagram: null,
    yelp: null,
    tripadvisor: null,
    linkedin: null,
    other: [],
  };

  const flat = Object.values(allResults).flat();

  for (const result of flat) {
    const url = result.url.toLowerCase();
    if (url.includes('facebook.com') && !profiles.facebook) {
      if (!url.includes('facebook.com/ads') && !url.includes('facebook.com/help')) {
        profiles.facebook = result.url;
      }
    }
    if (url.includes('instagram.com') && !profiles.instagram) profiles.instagram = result.url;
    if (url.includes('yelp.com/biz') && !profiles.yelp) profiles.yelp = result.url;
    if (url.includes('tripadvisor.com') && !profiles.tripadvisor) profiles.tripadvisor = result.url;
    if (url.includes('linkedin.com') && !url.includes('jobs') && !profiles.linkedin) profiles.linkedin = result.url;
  }

  return profiles;
}

// ─── Extract notable articles/press ──────────────────────────────────────────

function extractNotableArticles(allResults) {
  const flat = Object.values(allResults).flat();
  const seen = new Set();
  const articles = [];

  const NOISE_DOMAINS = ['google.com', 'facebook.com', 'instagram.com', 'yelp.com',
    'tripadvisor.com', 'yellowpages.com', 'whitepages.com', 'bbb.org', 'mapquest.com'];

  for (const result of flat) {
    if (seen.has(result.url)) continue;
    seen.add(result.url);
    const domain = new URL(result.url).hostname.replace('www.', '');
    if (NOISE_DOMAINS.some(n => domain.includes(n))) continue;
    if (result.description && result.description.length > 60) {
      articles.push({
        title: result.title,
        url: result.url,
        description: result.description,
        domain,
        age: result.age || null,
      });
    }
  }

  return articles.slice(0, 15);
}

// ─── Read best articles ───────────────────────────────────────────────────────

async function readTopArticles(articles) {
  const topArticles = articles
    .filter(a => {
      const d = a.domain;
      // Prioritize local news and interview-type sources
      return d.includes('beacon') || d.includes('interlake') || d.includes('missoulian') ||
             d.includes('montanan') || d.includes('news') || d.includes('journal') ||
             d.includes('press') || d.includes('interview') || d.includes('profile') ||
             d.includes('chamber') || d.includes('biz') || d.includes('magazine');
    })
    .slice(0, 4);

  // Also try to read their Facebook/Yelp page
  const toRead = [...topArticles, ...articles.slice(0, 2)].slice(0, 5);

  const contents = [];
  for (const article of toRead) {
    process.stdout.write(`   [read] ${article.domain} — ${article.title?.slice(0, 50)}... `);
    const content = await readPageContent(article.url, 2000);
    if (content && content.length > 200) {
      contents.push({ source: article.domain, url: article.url, title: article.title, content });
      process.stdout.write('✓\n');
    } else {
      process.stdout.write('skip (no content)\n');
    }
    await delay(1000); // be polite
  }

  return contents;
}

// ─── AI synthesis ─────────────────────────────────────────────────────────────

async function synthesizeIntelligence({ allResults, socialProfiles, articles, articleContents, ownerName }) {
  if (!ANTHROPIC_KEY) {
    console.warn('   ⚠️  ANTHROPIC_API_KEY not set — skipping AI synthesis. Raw data saved only.');
    return null;
  }

  const flat = Object.values(allResults).flat();
  const searchSnippets = flat
    .slice(0, 25)
    .map(r => `[${new URL(r.url).hostname}] ${r.title}: ${r.description || ''}`)
    .join('\n');

  const articleText = articleContents
    .map(a => `--- SOURCE: ${a.source} ---\n${a.content}`)
    .join('\n\n');

  const prompt = `You are a forensic business intelligence analyst. You've gathered extensive online research about this business and are synthesizing it into actionable intelligence for a web designer who is about to build them a custom website.

BUSINESS: ${BUSINESS}
LOCATION: ${[CITY, STATE].filter(Boolean).join(', ')}
KNOWN OWNER: ${ownerName || 'Not confirmed — may appear in search results below'}

SEARCH RESULTS (titles + snippets):
${searchSnippets}

ARTICLE/PAGE CONTENT:
${articleText || 'No full article content available.'}

SOCIAL PROFILES FOUND:
- Facebook: ${socialProfiles.facebook || 'Not found'}
- Instagram: ${socialProfiles.instagram || 'Not found'}
- Yelp: ${socialProfiles.yelp || 'Not found'}
- TripAdvisor: ${socialProfiles.tripadvisor || 'Not found'}
- LinkedIn: ${socialProfiles.linkedin || 'Not found'}

Based on everything above, produce a forensic intelligence profile. Be specific. If you found the owner's name — use it. If their photos suggest outdoor interests, dogs, family business culture — document it. If they've been featured in a local article — quote it. If there are clues about their personality in how they respond to reviews or post on social — capture it.

This profile will help a web designer build a site that feels personally connected to the owner — increasing the chance the owner will want to buy it when they see it.

Respond with ONLY valid JSON:

{
  "ownerNameConfirmed": "Full name if found, null if not",
  "ownerBackground": "What we know about the owner's background, history with this business",
  "ownerPersonalInterests": ["hobby/interest 1", "hobby/interest 2"],
  "ownerCommunicationStyle": "How do they communicate — formal/casual, verbose/terse, warm/direct?",
  "ownerPersonalitySignals": ["signal 1 with source", "signal 2 with source"],
  "businessHistory": "Founding story, how long they've been operating, key milestones",
  "localStanding": "How they're perceived in the community — any awards, recognitions, press?",
  "pressMentions": [
    { "headline": "...", "source": "...", "url": "...", "summary": "..." }
  ],
  "socialPresence": {
    "overallStrength": "strong / moderate / minimal / none",
    "primaryChannel": "facebook | instagram | yelp | none",
    "contentThemes": ["what do their posts tend to be about?"],
    "estimatedFollowing": "rough estimate or 'unknown'",
    "postingFrequency": "daily / weekly / monthly / unknown"
  },
  "brandPersonalityClues": [
    "Specific detail that reveals something about their brand personality or owner personality"
  ],
  "websitePersonalizationHooks": [
    "Specific element to include in their website that will feel personal and resonate with them"
  ],
  "warningFlags": ["anything unusual or potentially negative found online"],
  "researchConfidence": 0.0,
  "additionalSearchesToRun": ["any specific searches that should be done manually to fill gaps"]
}

researchConfidence = 0–1 based on how much solid information was found. Be honest.`;

  const client = new Anthropic({ apiKey: ANTHROPIC_KEY });
  const message = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }],
  });

  const responseText = message.content[0]?.type === 'text' ? message.content[0].text : '';
  try {
    const jsonMatch = responseText.match(/\{[\s\S]+\}/);
    return JSON.parse(jsonMatch ? jsonMatch[0] : responseText);
  } catch {
    console.warn('   ⚠️  Could not parse AI synthesis — raw response saved');
    return { rawResponse: responseText };
  }
}

// ─── Format as human-readable markdown ───────────────────────────────────────

function buildOwnerIntelMd(intel, socialProfiles, articles) {
  const sections = [`# Owner & Business Intelligence Profile\n**Business:** ${BUSINESS}\n**Location:** ${[CITY, STATE].filter(Boolean).join(', ')}\n**Generated:** ${new Date().toISOString().split('T')[0]}\n\n---\n`];

  if (intel?.ownerNameConfirmed) {
    sections.push(`## Owner\n**Name:** ${intel.ownerNameConfirmed}\n\n**Background:** ${intel.ownerBackground || 'Unknown'}\n\n**Personal Interests:** ${intel.ownerPersonalInterests?.join(', ') || 'Unknown'}\n\n**Communication Style:** ${intel.ownerCommunicationStyle || 'Unknown'}\n\n### Personality Signals\n${(intel.ownerPersonalitySignals || []).map(s => `- ${s}`).join('\n') || 'None found'}\n`);
  } else {
    sections.push(`## Owner\n**Name:** Not confirmed. Check Secretary of State search and resume searching.\n\n**Personality Signals:**\n${(intel?.ownerPersonalitySignals || []).map(s => `- ${s}`).join('\n') || '- None found yet.'}\n`);
  }

  sections.push(`## Business History\n${intel?.businessHistory || 'Not enough information found online.'}\n`);

  sections.push(`## Local Standing\n${intel?.localStanding || 'Unknown'}\n`);

  if ((intel?.pressMentions || []).length > 0) {
    sections.push(`## Press & Media Mentions\n${intel.pressMentions.map(p => `- **${p.headline}** — [${p.source}](${p.url})\n  > ${p.summary}`).join('\n')}\n`);
  }

  sections.push(`## Social Media\n| Platform | URL |\n|---|---|\n${Object.entries(socialProfiles).map(([k, v]) => `| ${k} | ${v || 'Not found'} |`).join('\n')}\n\n**Overall Strength:** ${intel?.socialPresence?.overallStrength || 'Unknown'}\n**Primary Channel:** ${intel?.socialPresence?.primaryChannel || 'Unknown'}\n**Content Themes:** ${intel?.socialPresence?.contentThemes?.join(', ') || 'Unknown'}\n**Posting Frequency:** ${intel?.socialPresence?.postingFrequency || 'Unknown'}\n`);

  if ((intel?.brandPersonalityClues || []).length > 0) {
    sections.push(`## Brand & Personality Clues\n*Use these to make the website feel personal and connected.*\n\n${intel.brandPersonalityClues.map(c => `- ${c}`).join('\n')}\n`);
  }

  if ((intel?.websitePersonalizationHooks || []).length > 0) {
    sections.push(`## Website Personalization Hooks\n*Specific elements to include that will resonate with the owner when they see the demo.*\n\n${intel.websitePersonalizationHooks.map(h => `- ${h}`).join('\n')}\n`);
  }

  if ((intel?.warningFlags || []).length > 0) {
    sections.push(`## ⚠️ Warning Flags\n${intel.warningFlags.map(f => `- ${f}`).join('\n')}\n`);
  }

  if ((intel?.additionalSearchesToRun || []).length > 0) {
    sections.push(`## Additional Research Needed\n${intel.additionalSearchesToRun.map(s => `- [ ] ${s}`).join('\n')}\n`);
  }

  if (articles.length > 0) {
    sections.push(`## All Articles Found\n${articles.slice(0, 12).map(a => `- [${a.title || a.domain}](${a.url}) — ${a.description?.slice(0, 120) || ''}`).join('\n')}\n`);
  }

  sections.push(`---\n**Research Confidence:** ${intel?.researchConfidence ? `${(intel.researchConfidence * 100).toFixed(0)}%` : 'Not assessed'}`);

  return sections.join('\n');
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function run() {
  console.log(`\n🔬 Digital Audit: ${BUSINESS} — ${CITY}, ${STATE}`);
  if (OWNER_NAME) console.log(`   Owner context: ${OWNER_NAME}`);
  console.log('');

  // 1. Run all searches
  const allResults = await runSearchBattery();

  // 2. Extract structured findings
  const socialProfiles = extractSocialProfiles(allResults);
  const articles = extractNotableArticles(allResults);

  console.log(`\n📋 Found:`);
  console.log(`   Social profiles: ${Object.values(socialProfiles).filter(Boolean).length}`);
  console.log(`   Articles/mentions: ${articles.length}`);

  // 3. Read top article content
  console.log('\n📖 Reading top articles...');
  const articleContents = await readTopArticles(articles);

  // 4. AI synthesis
  console.log('\n🤖 Synthesizing intelligence with Claude...');
  const intel = await synthesizeIntelligence({
    allResults,
    socialProfiles,
    articles,
    articleContents,
    ownerName: OWNER_NAME,
  });

  // 5. Save outputs
  const auditData = {
    generatedAt: new Date().toISOString(),
    business: BUSINESS,
    location: { city: CITY, state: STATE },
    ownerNameQueried: OWNER_NAME,
    socialProfiles,
    articles,
    articleContents: articleContents.map(a => ({ source: a.source, url: a.url, excerpt: a.content?.slice(0, 300) })),
    intelligence: intel,
    rawSearchResultCount: Object.values(allResults).flat().length,
  };

  const jsonPath = join(PROSPECT_DIR, 'digital-audit.json');
  writeFileSync(jsonPath, JSON.stringify(auditData, null, 2));

  const mdPath = join(PROSPECT_DIR, 'owner-intel.md');
  writeFileSync(mdPath, buildOwnerIntelMd(intel, socialProfiles, articles));

  // 6. Patch research.md with findings
  const researchPath = join(PROSPECT_DIR, 'research.md');
  if (existsSync(researchPath)) {
    let research = readFileSync(researchPath, 'utf8');
    const socialBlock = `\n## Digital Audit (auto-generated)\n- **Owner Name:** ${intel?.ownerNameConfirmed || 'Not confirmed'}\n- **Facebook:** ${socialProfiles.facebook || 'Not found'}\n- **Instagram:** ${socialProfiles.instagram || 'Not found'}\n- **Yelp:** ${socialProfiles.yelp || 'Not found'}\n- **Articles found:** ${articles.length}\n- **Social presence:** ${intel?.socialPresence?.overallStrength || 'Unknown'}\n- **Primary channel:** ${intel?.socialPresence?.primaryChannel || 'Unknown'}\n- **Confidence:** ${intel?.researchConfidence ? `${(intel.researchConfidence * 100).toFixed(0)}%` : 'N/A'}\n- **Key personality clue:** ${intel?.brandPersonalityClues?.[0] || 'None found'}\n- **Website hook:** ${intel?.websitePersonalizationHooks?.[0] || 'None found'}\n`;
    if (research.includes('## Digital Audit')) {
      research = research.replace(/## Digital Audit[\s\S]*?(?=\n##|$)/, socialBlock);
    } else {
      research += socialBlock;
    }
    writeFileSync(researchPath, research);
    console.log('📝 research.md updated with digital audit summary');
  }

  console.log(`\n✅ Digital audit complete`);
  console.log(`   Saved: prospects/${SLUG}/digital-audit.json`);
  console.log(`   Saved: prospects/${SLUG}/owner-intel.md`);
  if (intel?.ownerNameConfirmed) console.log(`   Owner confirmed: ${intel.ownerNameConfirmed}`);
  if (socialProfiles.facebook) console.log(`   Facebook: ${socialProfiles.facebook}`);
  if (socialProfiles.instagram) console.log(`   Instagram: ${socialProfiles.instagram}`);
  console.log(`\nNext: node tools/scrape-reviews.js --slug ${SLUG} --place-id "ChIJXXXX"`);
  console.log(`Then: node tools/generate-voice-brief.js --slug ${SLUG}`);
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
