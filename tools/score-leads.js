#!/usr/bin/env node
/**
 * score-leads.js
 *
 * Combines audit scores + business quality signals into a single lead score (0–100).
 * Higher score = higher priority to build for.
 *
 * Can run against a discovered leads JSON file (from audit-urls.js output)
 * or manually against a small list of prospects.
 *
 * Usage:
 *   # Score an audited leads file:
 *   node tools/score-leads.js --file leads/discovered-2026-03-18-restaurant.json
 *
 *   # Score all files in leads/:
 *   node tools/score-leads.js --all
 *
 *   # Print current build queue (all scored leads, ranked):
 *   node tools/score-leads.js --queue
 *
 * Output:
 *   Enriches the JSON file with leadScore on each prospect.
 *   Prints a ranked build queue sorted by lead score.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const LEADS_DIR = new URL('../leads', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

// ─── Scoring rubric (0–100 total) ────────────────────────────────────────────
// Philosophy: we score OPPORTUNITY — how bad is their site AND how good is their business?
// Bad site + good business = highest priority. Perfect site = skip.

// Category LTV weights — based on research: low complexity + high ticket + local decision maker = top priority
const CATEGORY_WEIGHTS = {
  // TIER 1 — Ideal: simple info site, high-ticket jobs, sole owner decides (score 26-30)
  'home-services':         30,  // HVAC, plumbing, electrical, roofing — emergency + high ticket
  'trades-construction':   28,  // general contractors, excavation, masonry, fencing
  'outdoor-guides':        27,  // fishing/hunting guides — Flathead Valley goldmine
  'professional-services': 26,  // dentists, lawyers, CPAs, insurance, vets
  'landscaping':           25,  // landscaping, lawn care, tree service, pressure washing
  'wellness':              24,  // chiropractors, massage therapists, physical therapy

  // TIER 2 — Good fit, slightly more complexity
  'auto-services':         18,  // auto repair, body shops — simple but commodity
  'specialty-trades':      17,  // painters, flooring, window/door, cabinet makers

  // TIER 3 — Discoverable but often too complex to sell easily
  'lodging':               12,  // often wants real booking engine
  'outdoor-adventure':     10,  // tourist attractions — mixed complexity
  'restaurant':            8,   // avoid: menus, ordering systems, food photos
  'retail-boutique':       6,   // avoid: e-commerce expected
};

function scoreWebsiteNeed(lead) {
  // Support both the legacy noWebsiteFlag and the websiteStatus field from discover-leads.js
  const noSite = lead.noWebsiteFlag || lead.websiteStatus === 'NO_WEBSITE';
  if (noSite) return 50; // max — no website at all
  return Math.round((lead.auditScore || 0) * 0.5);
}

function scoreBusinessQuality({ rating, reviewCount, category }) {
  let score = 0;

  // Rating (0–15 pts): high rating = worth building for (they have happy customers to show off)
  if (rating >= 4.5) score += 15;
  else if (rating >= 4.0) score += 12;
  else if (rating >= 3.5) score += 7;
  else score += 0; // below 3.5 = too risky, skip

  // Review count (0–20 pts): more reviews = more established = higher LTV
  if (reviewCount >= 200) score += 20;
  else if (reviewCount >= 100) score += 16;
  else if (reviewCount >= 50)  score += 12;
  else if (reviewCount >= 25)  score += 7;
  else if (reviewCount >= 10)  score += 3;

  // Category weight (0–25 pts)
  score += (CATEGORY_WEIGHTS[category] || 12);

  return score; // max: 15 + 20 + 25 = 60, but capped at 50 below
}

function calculateLeadScore(lead) {
  // Score any lead that has basic business data (rating + reviewCount).
  // If not yet audited, websiteNeed defaults to 0 (will improve after audit).
  // This means scored leads will appear in the Sheet immediately after discovery.
  const hasBusinessData = (lead.rating || lead.reviewCount);
  if (!hasBusinessData) return null;

  const websiteNeed     = scoreWebsiteNeed(lead);                         // 0–50
  const businessQuality = Math.min(50, scoreBusinessQuality(lead));       // 0–50

  return Math.min(100, websiteNeed + businessQuality);
}

function leadScoreLabel(score) {
  if (score === null) return '⬜ Not scored';
  if (score >= 80) return '🔴 Build first';
  if (score >= 65) return '🟠 Build soon';
  if (score >= 50) return '🟡 Watch';
  return '🟢 Skip';
}

// ─── Suppression gates ────────────────────────────────────────────────────────
// These mark a lead as SUPPRESSED regardless of score

function shouldSuppress(lead) {
  // Already contacted
  if (lead.status === 'EMAILED_1' || lead.status === 'CONVERTED' || lead.status === 'NOT_INTERESTED') {
    return `Already in outreach (${lead.status})`;
  }
  // Great site — no point (only suppress post-audit)
  const noSite = lead.noWebsiteFlag || lead.websiteStatus === 'NO_WEBSITE';
  if (lead.auditScore !== null && lead.auditScore < 25 && !noSite) {
    return 'Site quality too high (score < 25)';
  }
  // Too few reviews (not established)
  if ((lead.reviewCount || 0) < 10) {
    return 'Too few Google reviews (< 10)';
  }
  // Low rating (risky client, unhappy customers)
  if ((lead.rating || 0) > 0 && (lead.rating || 0) < 3.5) {
    return 'Rating too low (< 3.5 stars)';
  }
  return null;
}

// ─── Score a file ─────────────────────────────────────────────────────────────

function scoreFile(filepath) {
  const fullPath = filepath.startsWith('/') ? filepath : join(LEADS_DIR, filepath);

  if (!existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    return;
  }

  const data = JSON.parse(readFileSync(fullPath, 'utf8'));
  const leads = data.leads || [];

  let updated = 0;
  let suppressed = 0;

  for (const lead of leads) {
    const suppressReason = shouldSuppress(lead);
    if (suppressReason) {
      lead.status = 'SUPPRESSED';
      lead.suppressReason = suppressReason;
      suppressed++;
      continue;
    }

    const score = calculateLeadScore(lead);
    if (score !== null) {
      lead.leadScore = score;
      lead.leadScoreLabel = leadScoreLabel(score);
      if (lead.status === 'DISCOVERED' || lead.status === 'AUDITED') {
        lead.status = 'SCORED';
      }
      updated++;
    }
  }

  data.meta.scoredAt = new Date().toISOString();
  writeFileSync(fullPath, JSON.stringify(data, null, 2));

  printBuildQueue(leads, fullPath);
  console.log(`\n   Scored: ${updated} | Suppressed: ${suppressed}`);
}

// ─── Print build queue ────────────────────────────────────────────────────────

function printBuildQueue(leads, filepath) {
  const queue = [...leads]
    .filter(l => l.leadScore !== null && l.status !== 'SUPPRESSED')
    .sort((a, b) => b.leadScore - a.leadScore);

  console.log(`\n${'═'.repeat(95)}`);
  console.log(`BUILD QUEUE — ${filepath.split('/leads/')[1] || 'all files'}`);
  console.log(`${'═'.repeat(95)}`);
  console.log(`${'BUSINESS'.padEnd(33)} ${'SCORE'.padEnd(7)} ${'LABEL'.padEnd(16)} ${'RATING'.padEnd(8)} ${'REVIEWS'.padEnd(9)} ${'WEBSITE'}`);
  console.log(`${'─'.repeat(95)}`);

  for (const lead of queue) {
    const name    = lead.name.slice(0, 31).padEnd(33);
    const score   = String(lead.leadScore).padEnd(7);
    const label   = (lead.leadScoreLabel || '').padEnd(16);
    const rating  = String(lead.rating || '—').padEnd(8);
    const reviews = String(lead.reviewCount || 0).padEnd(9);
    const site    = lead.noWebsiteFlag ? '⚠️  NO WEBSITE' : (lead.website || '').replace(/^https?:\/\//, '').slice(0, 30);
    console.log(`${name} ${score} ${label} ${rating} ${reviews} ${site}`);
  }

  console.log(`${'═'.repeat(95)}`);

  const buildFirst = queue.filter(l => l.leadScore >= 80);
  const buildSoon  = queue.filter(l => l.leadScore >= 65 && l.leadScore < 80);

  if (buildFirst.length) {
    console.log(`\n🎯 Build-first targets (score ≥ 80):\n`);
    buildFirst.slice(0, 5).forEach(l => {
      console.log(`   → ${l.name} (${l.rating}★ · ${l.reviewCount} reviews · ${l.leadScore}/100)`);
      if (l.noWebsiteFlag) console.log(`     ⚠️  Has NO website — you're not replacing anything, you're creating`);
      else console.log(`     ${l.website}`);
    });
  }

  console.log(`\nNext: copy a slug from above, then:`);
  console.log(`   cp templates/research-template.md prospects/[slug]/research.md`);
  console.log(`   node tools/digital-audit.js --slug [slug] --business "Name" --city "City"`);
}

// ─── Print full queue across all files ───────────────────────────────────────

function printFullQueue() {
  if (!existsSync(LEADS_DIR)) {
    console.error('No leads/ directory. Run discover-leads.js first.');
    return;
  }

  const files = readdirSync(LEADS_DIR).filter(f => f.endsWith('.json'));
  const allLeads = [];

  for (const file of files) {
    const data = JSON.parse(readFileSync(join(LEADS_DIR, file), 'utf8'));
    allLeads.push(...(data.leads || []));
  }

  printBuildQueue(allLeads, 'all files');
}

// ─── Entry point ─────────────────────────────────────────────────────────────

function run() {
  const fileArg  = getArg('--file');
  const runAll   = process.argv.includes('--all');
  const runQueue = process.argv.includes('--queue');

  if (fileArg) {
    scoreFile(fileArg);
  } else if (runAll) {
    if (!existsSync(LEADS_DIR)) {
      console.error('No leads/ directory. Run discover-leads.js first.');
      return;
    }
    const files = readdirSync(LEADS_DIR).filter(f => f.endsWith('.json'));
    files.forEach(f => scoreFile(join(LEADS_DIR, f)));
  } else if (runQueue) {
    printFullQueue();
  } else {
    console.error('Usage:');
    console.error('  node tools/score-leads.js --file leads/discovered-2026-03-18-restaurant.json');
    console.error('  node tools/score-leads.js --all');
    console.error('  node tools/score-leads.js --queue   ← show full build queue');
  }
}

run();
