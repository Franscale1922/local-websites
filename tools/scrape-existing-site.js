#!/usr/bin/env node
/**
 * scrape-existing-site.js
 * 
 * Extracts readable text content from a prospect's existing website
 * using Jina.ai's free reader API (no auth required for basic use).
 * 
 * Output saved to prospects/[slug]/existing-copy.txt
 * 
 * Usage:
 *   node tools/scrape-existing-site.js --slug flathead-fish-seafood --url https://flatheadfishandseafood.com
 * 
 * No API key required for Jina Reader (basic tier).
 * For higher volume: set JINA_API_KEY env variable.
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG = getArg('--slug');
const URL_ARG = getArg('--url');

if (!SLUG || !URL_ARG) {
  console.error('Usage: node tools/scrape-existing-site.js --slug [slug] --url [existing-site-url]');
  process.exit(1);
}

// Pages to scrape — home + common secondary pages
const PAGES_TO_TRY = ['', '/about', '/about-us', '/our-story', '/services', '/menu', '/contact'];

async function scrapePageWithJina(pageUrl) {
  const jinaUrl = `https://r.jina.ai/${pageUrl}`;
  const headers = { 'Accept': 'text/plain' };
  if (process.env.JINA_API_KEY) headers['Authorization'] = `Bearer ${process.env.JINA_API_KEY}`;

  try {
    const resp = await fetch(jinaUrl, { headers, signal: AbortSignal.timeout(10000) });
    if (!resp.ok) return null;
    const text = await resp.text();
    return text.trim().slice(0, 2000); // cap per page
  } catch {
    return null;
  }
}

async function run() {
  const baseUrl = URL_ARG.replace(/\/$/, '');
  console.log(`\n🌐 Scraping existing site: ${baseUrl}`);

  const PROSPECT_DIR = join(PROSPECTS_DIR, SLUG);
  if (!existsSync(PROSPECT_DIR)) mkdirSync(PROSPECT_DIR, { recursive: true });

  const sections = [];
  let successCount = 0;

  for (const path of PAGES_TO_TRY) {
    const fullUrl = baseUrl + path;
    process.stdout.write(`   Fetching ${fullUrl || '/'} ... `);
    const content = await scrapePageWithJina(fullUrl);

    if (content && content.length > 100) {
      sections.push(`=== PAGE: ${fullUrl || '/'} ===\n${content}`);
      process.stdout.write('✓\n');
      successCount++;
    } else {
      process.stdout.write('skip\n');
    }

    // Small delay to be polite to the server
    await new Promise(r => setTimeout(r, 800));
  }

  if (sections.length === 0) {
    console.log('\n⚠️  Could not scrape any pages. This may be behind JS rendering.');
    console.log('   Fallback: manually copy page text into prospects/' + SLUG + '/existing-copy.txt');
    process.exit(0);
  }

  const combined = sections.join('\n\n');
  const outputPath = join(PROSPECT_DIR, 'existing-copy.txt');
  writeFileSync(outputPath, combined);

  console.log(`\n✅ Scraped ${successCount} pages → prospects/${SLUG}/existing-copy.txt`);
  console.log(`   Total content: ${combined.length} characters`);
  console.log('');
  console.log(`Next: node tools/generate-voice-brief.js --slug ${SLUG}`);
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
