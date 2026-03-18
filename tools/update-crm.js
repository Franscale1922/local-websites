#!/usr/bin/env node
/**
 * update-crm.js
 *
 * Updates a lead's status and notes in the Google Sheet CRM from the CLI.
 * Finds the row by business name or place ID and updates the Status column.
 *
 * Usage:
 *   node tools/update-crm.js --slug flathead-fish-seafood --status EMAILED_1
 *   node tools/update-crm.js --slug flathead-fish-seafood --status HOT --note "Replied asking for price"
 *   node tools/update-crm.js --slug flathead-fish-seafood --demo "https://demo.vercel.app"
 *
 * Valid statuses:
 *   DISCOVERED → AUDITED → SCORED → EMAILED_1 → EMAILED_2 → EMAILED_3
 *   → REPLIED → HOT → CONVERTED → NOT_INTERESTED → SUPPRESSED
 *
 * Env: GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_KEY, GOOGLE_SERVICE_ACCOUNT_EMAIL
 */

import { google } from 'googleapis';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;
const SHEET_ID      = process.env.GOOGLE_SHEET_ID;
const SA_KEY_PATH   = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

const VALID_STATUSES = [
  'DISCOVERED', 'AUDITED', 'SCORED', 'EMAILED_1', 'EMAILED_2', 'EMAILED_3',
  'REPLIED', 'HOT', 'CONVERTED', 'NOT_INTERESTED', 'SUPPRESSED',
];

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG       = getArg('--slug');
const NEW_STATUS = getArg('--status');
const NOTE       = getArg('--note');
const DEMO_URL   = getArg('--demo');

if (!SLUG) {
  console.error('Usage: node tools/update-crm.js --slug [slug] --status [STATUS]');
  console.error(`Valid statuses: ${VALID_STATUSES.join(', ')}`);
  process.exit(1);
}

if (!SHEET_ID || !SA_KEY_PATH || !existsSync(SA_KEY_PATH)) {
  console.error('Missing Google Sheets credentials. Run: node tools/export-leads.js --help');
  process.exit(1);
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

function getAuth() {
  const key = JSON.parse(readFileSync(SA_KEY_PATH, 'utf8'));
  return new google.auth.JWT(key.client_email, null, key.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']);
}

// ─── Read business name from research.md ─────────────────────────────────────

function getBusinessName() {
  const researchPath = join(PROSPECTS_DIR, SLUG, 'research.md');
  if (!existsSync(researchPath)) return SLUG;
  const md = readFileSync(researchPath, 'utf8');
  const m  = md.match(/\*\*Name:\*\*\s*(.+)/);
  return m ? m[1].trim() : SLUG;
}

// ─── Column index map (Build Queue tab) ──────────────────────────────────────
// Must match the columns in export-leads.js BUILD_QUEUE_HEADERS
const COL = {
  STATUS:   0, NAME: 1, CATEGORY: 2, LEAD_SCORE: 3, AUDIT_SCORE: 4,
  RATING: 5, REVIEWS: 6, HAS_WEBSITE: 7, WEBSITE: 8, PHONE: 9,
  ADDRESS: 10, NOTES: 11, ASSIGNED_TO: 12, DEMO_URL: 13,
  DATE_DISCOVERED: 14, DATE_EMAILED: 15,
};

function statusLabel(status) {
  const map = {
    EMAILED_1: '📤 Emailed 1', EMAILED_2: '📤 Emailed 2', EMAILED_3: '📤 Emailed 3',
    REPLIED:   '💬 Replied',   HOT:       '🔥 Hot',        CONVERTED: '✅ Converted',
    NOT_INTERESTED: '🚫 Not Interested', SUPPRESSED: '🚫 Suppressed',
    SCORED: '⭐ Scored', DISCOVERED: '🔍 Discovered', AUDITED: '📊 Audited',
  };
  return map[status] || status;
}

// ─── Find row by business name ────────────────────────────────────────────────

async function findRow(sheets, businessName) {
  const resp = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'Build Queue!B:B',  // Name column
  });

  const rows  = resp.data.values || [];
  const lower = businessName.toLowerCase();

  for (let i = 0; i < rows.length; i++) {
    if ((rows[i][0] || '').toLowerCase().includes(lower) ||
        lower.includes((rows[i][0] || '').toLowerCase())) {
      return i + 1; // 1-indexed row number
    }
  }
  return null;
}

// ─── Update specific cells ────────────────────────────────────────────────────

async function updateCell(sheets, row, col, value) {
  const colLetter = String.fromCharCode(65 + col);
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `Build Queue!${colLetter}${row}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [[value]] },
  });
}

// ─── Also update research.md ──────────────────────────────────────────────────

function updateResearchMd(status, demoUrl, note) {
  const researchPath = join(PROSPECTS_DIR, SLUG, 'research.md');
  if (!existsSync(researchPath)) return;

  let md = readFileSync(researchPath, 'utf8');

  if (status) {
    md = md.replace(/- \*\*CRM status:\*\* .+/, `- **CRM status:** ${status}`);
  }
  if (demoUrl) {
    md = md.replace(/## Demo URL\s*\n.+/, `## Demo URL\n${demoUrl}`);
  }

  writeFileSync(researchPath, md);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const businessName = getBusinessName();
  console.log(`\n📊 Updating CRM: ${businessName}`);

  if (NEW_STATUS && !VALID_STATUSES.includes(NEW_STATUS)) {
    console.error(`Invalid status: ${NEW_STATUS}`);
    console.error(`Valid: ${VALID_STATUSES.join(', ')}`);
    process.exit(1);
  }

  const auth   = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  const rowNum = await findRow(sheets, businessName);
  if (!rowNum) {
    console.warn(`   ⚠️  "${businessName}" not found in Build Queue tab.`);
    console.warn('   Run npm run export to sync leads to the sheet first.');
    // Still update research.md locally
    updateResearchMd(NEW_STATUS, DEMO_URL, NOTE);
    return;
  }

  console.log(`   Found at row ${rowNum}`);

  const updates = [];

  if (NEW_STATUS) {
    await updateCell(sheets, rowNum, COL.STATUS, statusLabel(NEW_STATUS));
    updates.push(`Status → ${statusLabel(NEW_STATUS)}`);

    // If emailing, log the date
    if (NEW_STATUS.startsWith('EMAILED')) {
      const date = new Date().toISOString().split('T')[0];
      await updateCell(sheets, rowNum, COL.DATE_EMAILED, date);
      updates.push(`Date Emailed → ${date}`);
    }
  }

  if (NOTE) {
    await updateCell(sheets, rowNum, COL.NOTES, NOTE);
    updates.push(`Notes → "${NOTE}"`);
  }

  if (DEMO_URL) {
    await updateCell(sheets, rowNum, COL.DEMO_URL, DEMO_URL);
    updates.push(`Demo URL → ${DEMO_URL}`);
  }

  // Update research.md locally too
  updateResearchMd(NEW_STATUS, DEMO_URL, NOTE);

  console.log(`   ✅ Updated:`);
  updates.forEach(u => console.log(`      • ${u}`));
  console.log(`\n   Sheet: https://docs.google.com/spreadsheets/d/${SHEET_ID}`);
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
