#!/usr/bin/env node
/**
 * score-leads.js
 * Lead scoring calculator for business prospects.
 * 
 * Usage: node tools/score-leads.js
 * Edit the PROSPECTS array below with your research data.
 * Outputs sorted, color-coded results showing who to build for first.
 */

// ─── CONFIGURE YOUR PROSPECTS HERE ───────────────────────────────────────────
const PROSPECTS = [
  // Example format:
  // {
  //   name: 'Big Mountain Dental',
  //   category: 'dental',        // dental|lodge|restaurant|tour|legal|retail|auto|other
  //   reviewCount: 147,
  //   rating: 4.6,
  //   hasStorefront: true,       // physical downtown/visible location
  //   websiteScore: 3,           // your manual visual score 1–10
  //   notes: 'WordPress 2016, no mobile version',
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

const HIGH_LTV_CATEGORIES = ['dental', 'lodge', 'legal', 'tour', 'medical', 'chiro'];
const MEDIUM_LTV_CATEGORIES = ['restaurant', 'retail', 'auto', 'realtor'];

function scoreReviews(count) {
  if (count >= 200) return 5;
  if (count >= 50) return 3;
  return 1;
}

function scoreRating(rating) {
  return rating >= 4.0 ? 2 : 0;
}

function scoreCategory(category) {
  if (HIGH_LTV_CATEGORIES.includes(category)) return 2;
  if (MEDIUM_LTV_CATEGORIES.includes(category)) return 1;
  return 0;
}

function scoreStorefront(hasStorefront) {
  return hasStorefront ? 1 : 0;
}

function totalBusinessScore(p) {
  return scoreReviews(p.reviewCount) + scoreRating(p.rating) + scoreCategory(p.category) + scoreStorefront(p.hasStorefront);
}

function qualifies(businessScore, websiteScore) {
  return businessScore >= 6 && websiteScore <= 5;
}

function scoreToBuild(businessScore, websiteScore) {
  // Higher business score + lower website score = higher priority
  return businessScore + (10 - websiteScore);
}

function run() {
  if (PROSPECTS.length === 0) {
    console.log('No prospects configured. Edit the PROSPECTS array in tools/score-leads.js');
    return;
  }

  const scored = PROSPECTS.map(p => ({
    ...p,
    businessScore: totalBusinessScore(p),
    buildScore: scoreToBuild(totalBusinessScore(p), p.websiteScore),
    qualified: qualifies(totalBusinessScore(p), p.websiteScore),
  })).sort((a, b) => b.buildScore - a.buildScore);

  const qualified = scored.filter(p => p.qualified);
  const notQualified = scored.filter(p => !p.qualified);

  console.log('\n📊 Lead Scoring Results\n');
  console.log('═'.repeat(90));
  console.log('⭐ QUALIFIED FOR BUILD QUEUE\n');

  if (qualified.length === 0) {
    console.log('  No qualified prospects yet.\n');
  } else {
    console.log(`${'Business'.padEnd(30)} ${'Biz Score'.padEnd(10)} ${'Web Score'.padEnd(10)} ${'Priority'.padEnd(10)} Notes`);
    console.log('─'.repeat(90));
    qualified.forEach(p => {
      console.log(`${p.name.padEnd(30)} ${String(p.businessScore + '/10').padEnd(10)} ${String(p.websiteScore + '/10').padEnd(10)} ${String(p.buildScore).padEnd(10)} ${p.notes || ''}`);
    });
  }

  console.log('\n─'.repeat(90));
  console.log('✗ NOT QUALIFIED\n');
  if (notQualified.length === 0) {
    console.log('  All prospects qualified!\n');
  } else {
    notQualified.forEach(p => {
      const reason = p.businessScore < 6
        ? `Business score too low (${p.businessScore}/10)`
        : `Website score too high (${p.websiteScore}/10 — site might already be decent)`;
      console.log(`  ${p.name}: ${reason}`);
    });
  }

  console.log('\n═'.repeat(90));
  console.log(`\nSummary: ${qualified.length} qualified, ${notQualified.length} not qualified, ${scored.length} total\n`);
}

run();
