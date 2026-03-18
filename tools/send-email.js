#!/usr/bin/env node
/**
 * send-email.js
 *
 * Sends a single outreach email to a prospect using the Resend API.
 * Reads prospect data from research.md and injects all personalization variables.
 * Logs the send to the prospect's research.md outreach log.
 *
 * Usage:
 *   node tools/send-email.js --slug flathead-fish-seafood --email 1
 *   node tools/send-email.js --slug flathead-fish-seafood --email 2
 *   node tools/send-email.js --slug flathead-fish-seafood --email 3
 *
 *   # Dry run — prints the rendered email without sending:
 *   node tools/send-email.js --slug flathead-fish-seafood --email 1 --dry-run
 *
 * Env: RESEND_API_KEY, EMAIL_FROM, EMAIL_REPLY_TO
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;
const EMAIL_DIR     = new URL('../email-templates', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG      = getArg('--slug');
const EMAIL_NUM = parseInt(getArg('--email') || '1');
const DRY_RUN   = process.argv.includes('--dry-run');
const TO_EMAIL  = getArg('--to');  // override recipient for testing

if (!SLUG) {
  console.error('Usage: node tools/send-email.js --slug [slug] --email [1|2|3]');
  process.exit(1);
}

if (!['1', '2', '3'].includes(String(EMAIL_NUM))) {
  console.error('--email must be 1, 2, or 3');
  process.exit(1);
}

const RESEND_KEY  = process.env.RESEND_API_KEY;
const FROM_EMAIL  = process.env.EMAIL_FROM;
const REPLY_TO    = process.env.EMAIL_REPLY_TO || FROM_EMAIL;

if (!DRY_RUN && !RESEND_KEY) {
  console.error('Missing RESEND_API_KEY. Add it to .env or run with --dry-run to preview.');
  process.exit(1);
}

const PROSPECT_DIR = join(PROSPECTS_DIR, SLUG);
if (!existsSync(PROSPECT_DIR)) {
  console.error(`No prospect folder found: prospects/${SLUG}/`);
  process.exit(1);
}

// ─── Read research.md ─────────────────────────────────────────────────────────

function readResearch() {
  const path = join(PROSPECT_DIR, 'research.md');
  if (!existsSync(path)) {
    console.error('No research.md found. Start from research-template.md.');
    process.exit(1);
  }
  return readFileSync(path, 'utf8');
}

function extractVar(md, key) {
  const m = md.match(new RegExp(`\\*\\*${key}:\\*\\*\\s*(.+)`));
  return m ? m[1].trim() : null;
}

function extractVars(md) {
  const demoUrlMatch = md.match(/## Demo URL\s*\n(.+)/);
  return {
    BUSINESS_NAME:         extractVar(md, 'Name')           || 'the business',
    FIRST_NAME:            extractVar(md, 'Owner Name')?.split(' ')[0] || 'there',
    DEMO_LINK:             demoUrlMatch?.[1]?.trim()        || 'DEMO_URL_NOT_SET',
    CATEGORY:              extractVar(md, 'Category')       || 'local business',
    REGION:                'Flathead Valley',
    YOUR_NAME:             FROM_EMAIL?.split('@')[0]?.replace(/[^a-z]/gi, ' ') || 'Kelsey Stuart',
    YOUR_TITLE:            'Web Designer, Waypoint Local',
    YOUR_EMAIL:            FROM_EMAIL                       || 'kelsey@waypointlocal.com',
    YOUR_PHONE:            '',
    YOUR_CITY:             'Whitefish',
    YOUR_ADDRESS:          'Whitefish, MT 59937',
    PRICE:                 '$1,500',
    GENUINE_OBSERVATION:   extractVar(md, 'Key differentiator') || 'what stands out about your business',
    BUSY_INDUSTRY_ACKNOWLEDGMENT: getBusyAck(extractVar(md, 'Category')),
  };
}

function getBusyAck(category) {
  const acks = {
    restaurant:            'running a restaurant keeps you moving from open to close',
    lodging:               'hospitality keeps you busy around the clock',
    'professional-services': 'your schedule fills up fast',
    'retail-boutique':     'retail keeps you on your feet all day',
    'auto-services':       'the shop doesn\'t stop',
    'outdoor-adventure':   'guiding season doesn\'t leave much desk time',
  };
  return acks[category] || 'running a business keeps you pulled in a hundred directions';
}

// ─── Load and render email template ──────────────────────────────────────────

function renderTemplate(templatePath, vars) {
  let html = readFileSync(templatePath, 'utf8');
  for (const [key, value] of Object.entries(vars)) {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    html = html.replace(regex, value || '');
  }
  // Flag any remaining unfilled vars
  const remaining = [...html.matchAll(/\{\{(\w+)\}\}/g)].map(m => m[1]);
  if (remaining.length > 0) {
    console.warn(`   ⚠️  Unfilled template variables: ${remaining.join(', ')}`);
    console.warn('      Fill these in research.md or pass --to for testing.');
  }
  return html;
}

function getSubjectLine(emailNum, businessName) {
  const subjects = {
    1: `I built a new website for ${businessName}`,
    2: `Quick follow-up — ${businessName} demo`,
    3: `Last note — ${businessName} website`,
  };
  return subjects[emailNum];
}

// ─── Log send to research.md ──────────────────────────────────────────────────

function logEmailSent(emailNum) {
  const researchPath = join(PROSPECT_DIR, 'research.md');
  let md = readFileSync(researchPath, 'utf8');
  const date = new Date().toISOString().split('T')[0];
  const statusMap = { 1: 'EMAILED_1', 2: 'EMAILED_2', 3: 'EMAILED_3' };

  // Update outreach log table
  const rowMatch = md.match(new RegExp(`(\\| \\| ${emailNum} \\| Resend \\| \\| \\|)`));
  if (rowMatch) {
    md = md.replace(rowMatch[0], `| ${date} | ${emailNum} | Resend | Sent | |`);
  }

  // Update CRM status
  md = md.replace(/- \*\*CRM status:\*\* .+/, `- **CRM status:** ${statusMap[emailNum]}`);

  writeFileSync(researchPath, md);
  console.log(`   📝 research.md updated — status: ${statusMap[emailNum]}`);
}

// ─── Send via Resend ──────────────────────────────────────────────────────────

async function sendEmail(to, subject, html) {
  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [to],
      reply_to: REPLY_TO,
      subject,
      html,
    }),
  });

  if (!resp.ok) {
    const err = await resp.json();
    throw new Error(`Resend API error: ${JSON.stringify(err)}`);
  }

  return resp.json();
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const research = readResearch();
  const vars     = extractVars(research);
  const ownerEmail = extractVar(research, 'Email') || TO_EMAIL;

  const templateFile = join(EMAIL_DIR, `email-${EMAIL_NUM}-${
    EMAIL_NUM === 1 ? 'hook' : EMAIL_NUM === 2 ? 'followup' : 'closer'
  }.html`);

  if (!existsSync(templateFile)) {
    console.error(`Template not found: ${templateFile}`);
    process.exit(1);
  }

  const subject = getSubjectLine(EMAIL_NUM, vars.BUSINESS_NAME);
  const html    = renderTemplate(templateFile, vars);

  console.log(`\n📧 Email ${EMAIL_NUM} for: ${vars.BUSINESS_NAME}`);
  console.log(`   To:      ${ownerEmail || '(no email set — add to research.md)'}`);
  console.log(`   Subject: ${subject}`);
  console.log(`   Demo:    ${vars.DEMO_LINK}`);

  if (vars.DEMO_LINK === 'DEMO_URL_NOT_SET') {
    console.error('\n❌ Demo URL not set in research.md. Run deploy-demo.js first.');
    process.exit(1);
  }

  if (!ownerEmail) {
    console.error('\n❌ No email address. Add "**Email:**" to research.md or use --to override.');
    process.exit(1);
  }

  if (DRY_RUN) {
    console.log('\n--- DRY RUN — email not sent ---');
    console.log(html.replace(/<[^>]+>/g, '').trim().slice(0, 600));
    console.log('\n(Run without --dry-run to actually send)');
    return;
  }

  const recipient = TO_EMAIL || ownerEmail;
  console.log(`\n   Sending...`);
  const result = await sendEmail(recipient, subject, html);
  console.log(`   ✅ Sent! Resend ID: ${result.id}`);
  logEmailSent(EMAIL_NUM);
  console.log(`\nNext: set a reminder for Email ${EMAIL_NUM + 1} in 4 days (if no reply)`);
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
