#!/usr/bin/env node
/**
 * check-status.js
 *
 * Prospect dashboard — shows all active prospects at a glance with their
 * current pipeline stage, what's overdue, and what needs attention.
 *
 * Usage:
 *   node tools/check-status.js
 *   npm run status
 *
 * Also validates environment setup:
 *   node tools/check-status.js --setup
 */

import { existsSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;

// ─── Environment checker ──────────────────────────────────────────────────────

const REQUIRED_ENV = [
  { key: 'ANTHROPIC_API_KEY',            label: 'Claude API',          used: 'generate-copy, voice-brief, digital-audit' },
  { key: 'GOOGLE_PLACES_API_KEY',         label: 'Google Places',       used: 'discover-leads, scrape-reviews' },
  { key: 'GOOGLE_PAGESPEED_API_KEY',       label: 'Google PageSpeed',    used: 'audit-urls' },
  { key: 'BRAVE_SEARCH_API_KEY',           label: 'Brave Search',        used: 'digital-audit' },
  { key: 'VERCEL_TOKEN',                   label: 'Vercel',              used: 'deploy-demo' },
  { key: 'RESEND_API_KEY',                 label: 'Resend Email',        used: 'send-email' },
  { key: 'GOOGLE_SHEET_ID',               label: 'Google Sheet CRM',    used: 'export-leads, update-crm' },
  { key: 'GOOGLE_SERVICE_ACCOUNT_KEY',    label: 'Sheets Auth Key',     used: 'export-leads, update-crm' },
  { key: 'GOOGLE_SERVICE_ACCOUNT_EMAIL',  label: 'Sheets Auth Email',   used: 'export-leads, update-crm' },
];

function checkEnv() {
  console.log('\n🔑 Environment Variables\n');
  let allGood = true;
  for (const { key, label, used } of REQUIRED_ENV) {
    const val = process.env[key];
    const hasVal = val && val.length > 10 && !val.includes('XXXX') && !val.includes('xxxxxxx');
    const icon = hasVal ? '✅' : '❌';
    console.log(`   ${icon} ${label.padEnd(22)} (${key})`);
    if (!hasVal) allGood = false;
  }
  if (allGood) {
    console.log('\n   All environment variables set. You\'re ready to run the pipeline.');
  } else {
    console.log('\n   ⚠️  Missing some variables. See SETUP.md for instructions.');
  }
}

// ─── Prospect reader ──────────────────────────────────────────────────────────

function getField(md, key) {
  const m = md.match(new RegExp(`\\*\\*${key}:\\*\\*\\s*(.+)`));
  return m ? m[1].trim() : null;
}

function getPipelineStage(dir) {
  const f = (filename) => existsSync(join(dir, filename));
  const md = existsSync(join(dir, 'research.md')) ? readFileSync(join(dir, 'research.md'), 'utf8') : '';
  const hasDemoUrl = md.includes('## Demo URL') && !md.includes('(pending deployment)');
  const emailStatus = getField(md, 'CRM status') || getField(md, 'Delivery pathway');

  if (emailStatus === 'CONVERTED') return { stage: 'CONVERTED', icon: '🏆', label: 'CONVERTED' };
  if (hasDemoUrl && emailStatus?.includes('EMAILED_3')) return { stage: 'EMAILED_3', icon: '📬', label: 'Email 3 Sent' };
  if (hasDemoUrl && emailStatus?.includes('EMAILED_2')) return { stage: 'EMAILED_2', icon: '📬', label: 'Email 2 Sent' };
  if (hasDemoUrl && emailStatus?.includes('EMAILED_1')) return { stage: 'EMAILED_1', icon: '📤', label: 'Email 1 Sent' };
  if (hasDemoUrl) return { stage: 'DEPLOYED', icon: '🚀', label: 'Demo Live' };
  if (f('site/src/app/page.tsx'))  return { stage: 'BUILT',    icon: '🏗️ ', label: 'Site Built' };
  if (f('generated-copy.json'))    return { stage: 'COPY',     icon: '✍️ ', label: 'Copy Done' };
  if (f('voice-brief.json'))       return { stage: 'VOICE',    icon: '🎙️ ', label: 'Voice Brief' };
  if (f('google-reviews.json'))    return { stage: 'REVIEWS',  icon: '⭐', label: 'Reviews Pulled' };
  if (f('digital-audit.json'))     return { stage: 'AUDITED',  icon: '🔍', label: 'Audited' };
  if (f('research.md'))            return { stage: 'RESEARCH', icon: '📝', label: 'Research' };
  return                                   { stage: 'NEW',      icon: '🆕', label: 'New' };
}

function getDaysSinceEmailed(md) {
  const m = md.match(/\| (\d{4}-\d{2}-\d{2}) \| [123] \| Resend \| Sent/);
  if (!m) return null;
  const emailed = new Date(m[1]);
  const now = new Date();
  return Math.floor((now - emailed) / (1000 * 60 * 60 * 24));
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function printDashboard() {
  if (!existsSync(PROSPECTS_DIR)) {
    console.log('\n📭 No prospects yet. Run npm run discover to find prospects.\n');
    return;
  }

  const slugs = readdirSync(PROSPECTS_DIR).filter(d =>
    existsSync(join(PROSPECTS_DIR, d, 'research.md'))
  );

  if (slugs.length === 0) {
    console.log('\n📭 No prospects with research.md yet.\n');
    return;
  }

  const prospects = slugs.map(slug => {
    const dir = join(PROSPECTS_DIR, slug);
    const md  = readFileSync(join(dir, 'research.md'), 'utf8');
    return {
      slug,
      name:    getField(md, 'Name')     || slug,
      stage:   getPipelineStage(dir),
      daysSinceEmailed: getDaysSinceEmailed(md),
      crmStatus: getField(md, 'CRM status'),
    };
  });

  // Sort: most advanced stage first
  const stageOrder = ['CONVERTED','EMAILED_3','EMAILED_2','EMAILED_1','DEPLOYED','BUILT','COPY','VOICE','REVIEWS','AUDITED','RESEARCH','NEW'];
  prospects.sort((a, b) => stageOrder.indexOf(a.stage.stage) - stageOrder.indexOf(b.stage.stage));

  console.log('\n' + '═'.repeat(70));
  console.log('PROSPECT DASHBOARD');
  console.log('═'.repeat(70));
  console.log(`${'BUSINESS'.padEnd(30)} ${'STAGE'.padEnd(15)} ${'DAYS'.padEnd(8)} NEXT ACTION`);
  console.log('─'.repeat(70));

  const attention = [];

  for (const p of prospects) {
    const days    = p.daysSinceEmailed !== null ? `${p.daysSinceEmailed}d` : '—';
    const overdue = p.daysSinceEmailed !== null && p.daysSinceEmailed >= 4 &&
                    ['EMAILED_1', 'EMAILED_2'].includes(p.stage.stage);

    let nextAction = '';
    if (p.stage.stage === 'RESEARCH')   nextAction = 'node tools/run-pipeline.js --slug ' + p.slug;
    if (p.stage.stage === 'AUDITED')    nextAction = '--from scrape';
    if (p.stage.stage === 'REVIEWS')    nextAction = '--from voice';
    if (p.stage.stage === 'VOICE')      nextAction = '--from copy';
    if (p.stage.stage === 'COPY')       nextAction = '--from apply';
    if (p.stage.stage === 'BUILT')      nextAction = '--from deploy';
    if (p.stage.stage === 'DEPLOYED')   nextAction = 'npm run email:send -- --slug ' + p.slug + ' --email 1';
    if (p.stage.stage === 'EMAILED_1' && p.daysSinceEmailed >= 4) nextAction = '⚠️  SEND EMAIL 2';
    if (p.stage.stage === 'EMAILED_2' && p.daysSinceEmailed >= 6) nextAction = '⚠️  SEND EMAIL 3';
    if (p.stage.stage === 'EMAILED_3')  nextAction = 'Wait for reply or close';
    if (p.stage.stage === 'CONVERTED')  nextAction = 'Deliver site';

    console.log(`${p.stage.icon} ${p.name.slice(0, 28).padEnd(29)} ${p.stage.label.padEnd(15)} ${days.padEnd(8)} ${nextAction}`);
    if (overdue) attention.push(p);
  }

  console.log('═'.repeat(70));
  console.log(`\n${prospects.length} prospects total`);

  if (attention.length) {
    console.log('\n🔔 Needs Attention:\n');
    for (const p of attention) {
      const emailNum = p.stage.stage === 'EMAILED_1' ? 2 : 3;
      console.log(`   ${p.name} — overdue for Email ${emailNum}`);
      console.log(`   npm run email:send -- --slug ${p.slug} --email ${emailNum}\n`);
    }
  }
}

// ─── Entry ────────────────────────────────────────────────────────────────────

if (process.argv.includes('--setup')) {
  checkEnv();
} else {
  printDashboard();
  if (process.argv.includes('-e') || process.argv.includes('--env')) {
    checkEnv();
  }
}
