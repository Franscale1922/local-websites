#!/usr/bin/env node
/**
 * audit-urls.js
 *
 * Batch website quality scorer. Takes a leads JSON file from discover-leads.js
 * and enriches each lead with PageSpeed scores, age estimates, and a final
 * audit score (0–100). Higher score = worse site = better prospect for us.
 *
 * Usage:
 *   # Score a discovered leads file:
 *   node tools/audit-urls.js --file leads/discovered-2026-03-18-restaurant.json
 *
 *   # Score a single URL manually:
 *   node tools/audit-urls.js --url https://somesite.com
 *
 *   # Score all unaudited files in leads/:
 *   node tools/audit-urls.js --all
 *
 * Output:
 *   Overwrites the input file with audit scores added to each lead.
 *   Also prints a ranked table sorted by audit score (worst sites first).
 *
 * Env: GOOGLE_PAGESPEED_API_KEY (same as GOOGLE_PLACES_API_KEY key works if enabled)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const LEADS_DIR = new URL('../leads', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const PAGESPEED_KEY = process.env.GOOGLE_PAGESPEED_API_KEY || process.env.GOOGLE_PLACES_API_KEY || '';
const delay = ms => new Promise(r => setTimeout(r, ms));

// ─── Individual check functions ───────────────────────────────────────────────

async function checkPageSpeed(url) {
  if (!url || !PAGESPEED_KEY) return { mobile: null, desktop: null, lcp: null, fcp: null };
  try {
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${PAGESPEED_KEY}`;
    const resp = await fetch(apiUrl, { signal: AbortSignal.timeout(15000) });
    if (!resp.ok) return { mobile: null };
    const data = await resp.json();
    const lhr = data?.lighthouseResult;
    return {
      mobile: Math.round((lhr?.categories?.performance?.score || 0) * 100),
      seo:    Math.round((lhr?.categories?.seo?.score || 0) * 100),
      a11y:   Math.round((lhr?.categories?.accessibility?.score || 0) * 100),
      lcp:    lhr?.audits?.['largest-contentful-paint']?.displayValue || null,
      fcp:    lhr?.audits?.['first-contentful-paint']?.displayValue || null,
    };
  } catch {
    return { mobile: null };
  }
}

async function checkWayback(url) {
  if (!url) return null;
  try {
    const domain = new URL(url).hostname;
    const resp = await fetch(`https://archive.org/wayback/available?url=${domain}`, {
      signal: AbortSignal.timeout(8000),
    });
    const data = await resp.json();
    const ts = data?.archived_snapshots?.closest?.timestamp;
    if (!ts) return null;
    const year = parseInt(ts.substring(0, 4));
    return year;
  } catch {
    return null;
  }
}

async function checkSSL(url) {
  if (!url) return false;
  try {
    const resp = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(6000) });
    return url.startsWith('https://') && resp.ok;
  } catch {
    return false;
  }
}

async function detectMobileFriendly(url) {
  // Rough proxy: check if viewport meta tag exists via PageSpeed audit
  // (PageSpeed SEO score reflects mobile-friendliness)
  return null; // will be inferred from PageSpeed SEO score
}

// ─── Audit scoring ────────────────────────────────────────────────────────────
// Higher = worse site = better prospect for us
// Max: 100

function calculateAuditScore({ mobilePerf, seoScore, hasSSL, siteAge, hasWebsite }) {
  if (!hasWebsite) return 100; // No website = instant 100, highest priority

  let score = 0;

  // Performance (0–40 points)
  // Worst performer = 40 pts, perfect performer = 0 pts
  if (mobilePerf === null) score += 20; // unknown = moderate
  else if (mobilePerf < 30)  score += 40;
  else if (mobilePerf < 50)  score += 32;
  else if (mobilePerf < 65)  score += 22;
  else if (mobilePerf < 80)  score += 12;
  else if (mobilePerf < 90)  score += 5;
  else score += 0; // ≥ 90, likely fine

  // SEO quality (0–20 pts) — bad SEO = bad site
  if (seoScore === null) score += 10;
  else if (seoScore < 50)  score += 20;
  else if (seoScore < 70)  score += 14;
  else if (seoScore < 85)  score += 7;
  else score += 0;

  // No SSL (0–20 pts) — red flag for any modern business
  if (!hasSSL) score += 20;

  // Site age from Wayback (0–20 pts) — older first appearance = older design era
  if (siteAge !== null) {
    const age = new Date().getFullYear() - siteAge;
    if (age >= 8)      score += 20;
    else if (age >= 5) score += 14;
    else if (age >= 3) score += 7;
    else score += 0;
  } else {
    score += 8; // unknown age = moderate
  }

  return Math.min(100, score);
}

function auditScoreLabel(score) {
  if (score >= 80) return '🔴 Hot';
  if (score >= 60) return '🟠 Warm';
  if (score >= 40) return '🟡 Weak';
  return '🟢 Skip';
}

// ─── Single URL audit ─────────────────────────────────────────────────────────

async function auditUrl(url) {
  const [pagespeed, wayback, ssl] = await Promise.all([
    checkPageSpeed(url),
    checkWayback(url),
    checkSSL(url),
  ]);

  const auditScore = calculateAuditScore({
    mobilePerf: pagespeed.mobile,
    seoScore:   pagespeed.seo,
    hasSSL:     ssl,
    siteAge:    wayback,
    hasWebsite: !!url,
  });

  return {
    auditScore,
    auditScoreLabel: auditScoreLabel(auditScore),
    pagespeed,
    ssl,
    siteAge: wayback,
    auditedAt: new Date().toISOString(),
  };
}

// ─── Audit a leads file ───────────────────────────────────────────────────────

async function auditFile(filepath) {
  const fullPath = filepath.startsWith('/') ? filepath : join(LEADS_DIR, filepath);

  if (!existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    process.exit(1);
  }

  const data = JSON.parse(readFileSync(fullPath, 'utf8'));
  const leads = data.leads || [];
  const toAudit = leads.filter(l => l.auditScore === null && l.websiteStatus !== 'SKIP');

  console.log(`\n📊 Auditing ${toAudit.length} sites in ${fullPath.split('/leads/')[1]}`);
  if (!PAGESPEED_KEY) console.warn('   ⚠️  No GOOGLE_PAGESPEED_API_KEY — skipping performance scores');

  const BATCH_SIZE = 5; // audit 5 at a time, then pause
  for (let i = 0; i < leads.length; i++) {
    const lead = leads[i];

    if (lead.auditScore !== null || lead.websiteStatus === 'SKIP') {
      process.stdout.write(`   [skip] ${lead.name.slice(0, 35).padEnd(35)} — already audited\n`);
      continue;
    }

    process.stdout.write(`   [${String(i+1).padStart(3)}] ${lead.name.slice(0, 35).padEnd(35)} `);

    if (!lead.website) {
      // No website — instant maximum score
      lead.auditScore = 100;
      lead.auditScoreLabel = '🔴 Hot';
      lead.pagespeed = null;
      lead.ssl = false;
      lead.siteAge = null;
      lead.noWebsiteFlag = true;
      lead.auditedAt = new Date().toISOString();
      process.stdout.write(`[NO WEBSITE] → 100/100 🔴 Hot\n`);
    } else {
      const result = await auditUrl(lead.website);
      Object.assign(lead, result);
      const perf = result.pagespeed?.mobile ?? '—';
      const ssl  = result.ssl ? '🔒' : '⚠️ ';
      process.stdout.write(`perf:${String(perf).padEnd(4)} seo:${String(result.pagespeed?.seo ?? '—').padEnd(4)} ${ssl} age:${result.siteAge ?? '?'} → ${result.auditScore}/100 ${result.auditScoreLabel}\n`);
      await delay(500); // don't hammer PageSpeed API
    }

    // Save progress every batch in case of interruption
    if ((i + 1) % BATCH_SIZE === 0) {
      writeFileSync(fullPath, JSON.stringify(data, null, 2));
    }
  }

  // Final save
  data.meta.auditedAt = new Date().toISOString();
  writeFileSync(fullPath, JSON.stringify(data, null, 2));

  printRankedResults(leads, fullPath);
}

// ─── Print ranked results ─────────────────────────────────────────────────────

function printRankedResults(leads, filepath) {
  const ranked = [...leads]
    .filter(l => l.auditScore !== null)
    .sort((a, b) => b.auditScore - a.auditScore);

  console.log(`\n${'━'.repeat(90)}`);
  console.log(`${'BUSINESS'.padEnd(35)} ${'SCORE'.padEnd(8)} ${'LABEL'.padEnd(12)} ${'REVIEWS'.padEnd(8)} ${'WEBSITE'.padEnd(30)}`);
  console.log(`${'━'.repeat(90)}`);

  for (const lead of ranked) {
    const name  = lead.name.slice(0, 33).padEnd(35);
    const score = String(lead.auditScore).padEnd(8);
    const label = (lead.auditScoreLabel || '').padEnd(12);
    const rev   = String(lead.reviewCount || 0).padEnd(8);
    const site  = (lead.website || '(no website)').replace(/^https?:\/\//, '').slice(0, 28).padEnd(30);
    console.log(`${name} ${score} ${label} ${rev} ${site}`);
  }

  console.log(`${'━'.repeat(90)}`);

  const hot  = ranked.filter(l => l.auditScore >= 80);
  const warm = ranked.filter(l => l.auditScore >= 60 && l.auditScore < 80);
  const noSite = ranked.filter(l => l.noWebsiteFlag);

  console.log(`\n🎯 Results:`);
  console.log(`   🔴 Hot prospects (score ≥ 80):     ${hot.length}`);
  console.log(`   🟠 Warm prospects (score 60–79):   ${warm.length}`);
  console.log(`   📵 No website at all:              ${noSite.length}`);
  console.log(`\n   Saved: ${filepath.split('/leads/')[1]}`);
  console.log(`\nNext: node tools/score-leads.js --file ${filepath.split('/')[filepath.split('/').length - 1]}`);
}

// ─── Single URL mode ──────────────────────────────────────────────────────────

async function auditSingleUrl(url) {
  console.log(`\n🔍 Auditing: ${url}`);
  const result = await auditUrl(url);
  console.log(`\nPerformance (mobile): ${result.pagespeed?.mobile ?? 'N/A'}/100`);
  console.log(`SEO score:            ${result.pagespeed?.seo ?? 'N/A'}/100`);
  console.log(`SSL:                  ${result.ssl ? '✅ Yes' : '❌ No'}`);
  console.log(`Wayback first seen:   ${result.siteAge ? `~${result.siteAge}` : 'Unknown'}`);
  console.log(`Audit score:          ${result.auditScore}/100 ${result.auditScoreLabel}`);
}

// ─── Entry point ─────────────────────────────────────────────────────────────

async function run() {
  const fileArg = getArg('--file');
  const urlArg  = getArg('--url');
  const runAll  = process.argv.includes('--all');

  if (urlArg) {
    await auditSingleUrl(urlArg);
  } else if (fileArg) {
    await auditFile(fileArg);
  } else if (runAll) {
    if (!existsSync(LEADS_DIR)) {
      console.error('No leads/ directory. Run discover-leads.js first.');
      process.exit(1);
    }
    const files = readdirSync(LEADS_DIR).filter(f => f.startsWith('discovered-') && f.endsWith('.json'));
    if (!files.length) {
      console.error('No discovered-*.json files in leads/. Run discover-leads.js first.');
      process.exit(1);
    }
    for (const file of files) {
      await auditFile(join(LEADS_DIR, file));
    }
  } else {
    console.error('Usage:');
    console.error('  node tools/audit-urls.js --file leads/discovered-2026-03-18-restaurant.json');
    console.error('  node tools/audit-urls.js --url https://somesite.com');
    console.error('  node tools/audit-urls.js --all');
    process.exit(1);
  }
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
