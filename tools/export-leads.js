#!/usr/bin/env node
/**
 * export-leads.js
 *
 * Syncs all scored leads from leads/*.json into the Google Sheet CRM.
 * Creates/updates a structured "Build Queue" tab and a "Raw Leads" tab.
 *
 * Usage:
 *   node tools/export-leads.js                        # sync all leads files
 *   node tools/export-leads.js --file leads/discovered-2026-03-18-restaurant.json
 *   node tools/export-leads.js --clear                # wipe sheet and re-sync from scratch
 *
 * One-time setup required — see SETUP.md or run with --help for instructions.
 *
 * Env:
 *   GOOGLE_SHEET_ID              — the spreadsheet ID (already in .env.example)
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL — e.g. local-websites@my-project.iam.gserviceaccount.com
 *   GOOGLE_SERVICE_ACCOUNT_KEY   — path to credentials JSON, e.g. ./credentials/service-account.json
 */

import { google } from 'googleapis';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const LEADS_DIR = new URL('../leads', import.meta.url).pathname;
const SHEET_ID  = process.env.GOOGLE_SHEET_ID;
const SA_EMAIL  = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const SA_KEY    = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

if (process.argv.includes('--help')) {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║           Google Sheets Setup — One-Time, ~10 Minutes           ║
╚══════════════════════════════════════════════════════════════════╝

1. Go to: https://console.cloud.google.com/
   Select your project (the one with Places & PageSpeed APIs)

2. APIs & Services → Library → search "Google Sheets API" → Enable it

3. APIs & Services → Credentials → Create Credentials → Service Account
   - Name: "local-websites-sheets"
   - Click Create and Continue → Done
   - Click the service account → Keys tab → Add Key → JSON
   - Save the downloaded file to: ./credentials/service-account.json
   (That path is in .gitignore — it will never be committed)

4. Open the JSON file, copy the "client_email" value.
   It looks like: local-websites-sheets@your-project.iam.gserviceaccount.com

5. Open your Google Sheet:
   https://docs.google.com/spreadsheets/d/1IYmFkLbhNKqLLbBc4rbh16JrY6Js_-LKMUEaejq9-pw
   Share → paste that email → set to Editor → Send

6. Add to your .env file:
   GOOGLE_SHEET_ID=1IYmFkLbhNKqLLbBc4rbh16JrY6Js_-LKMUEaejq9-pw
   GOOGLE_SERVICE_ACCOUNT_EMAIL=local-websites-sheets@your-project.iam.gserviceaccount.com
   GOOGLE_SERVICE_ACCOUNT_KEY=./credentials/service-account.json

7. Run: node tools/export-leads.js

That's it. The sheet will update every time you run this command.
`);
  process.exit(0);
}

// ─── Validate env ─────────────────────────────────────────────────────────────

function validateEnv() {
  const missing = [];
  if (!SHEET_ID)  missing.push('GOOGLE_SHEET_ID');
  if (!SA_EMAIL)  missing.push('GOOGLE_SERVICE_ACCOUNT_EMAIL');
  if (!SA_KEY)    missing.push('GOOGLE_SERVICE_ACCOUNT_KEY');

  if (missing.length) {
    console.error('\n❌ Missing environment variables:', missing.join(', '));
    console.error('   Run: node tools/export-leads.js --help for setup instructions\n');
    process.exit(1);
  }

  if (!existsSync(SA_KEY)) {
    console.error(`\n❌ Service account key not found at: ${SA_KEY}`);
    console.error('   Run: node tools/export-leads.js --help for setup instructions\n');
    process.exit(1);
  }
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

function getAuthClient() {
  const keyFile = JSON.parse(readFileSync(SA_KEY, 'utf8'));
  return new google.auth.JWT(
    keyFile.client_email,
    null,
    keyFile.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  );
}

// ─── Sheet helpers ────────────────────────────────────────────────────────────

async function ensureSheetExists(sheets, title) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
  const existing = meta.data.sheets.find(s => s.properties.title === title);
  if (existing) return existing.properties.sheetId;

  const resp = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: {
      requests: [{ addSheet: { properties: { title } } }],
    },
  });
  return resp.data.replies[0].addSheet.properties.sheetId;
}

async function clearSheet(sheets, sheetTitle) {
  await sheets.spreadsheets.values.clear({
    spreadsheetId: SHEET_ID,
    range: `${sheetTitle}!A:Z`,
  });
}

async function writeRows(sheets, sheetTitle, rows) {
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `${sheetTitle}!A1`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: rows },
  });
}

async function applyHeaderFormatting(sheets, sheetId) {
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: {
      requests: [
        // Bold header row
        {
          repeatCell: {
            range: { sheetId, startRowIndex: 0, endRowIndex: 1 },
            cell: {
              userEnteredFormat: {
                textFormat: { bold: true, fontSize: 11 },
                backgroundColor: { red: 0.12, green: 0.16, blue: 0.29 }, // dark navy
              },
            },
            fields: 'userEnteredFormat(textFormat,backgroundColor)',
          },
        },
        // Freeze first row
        {
          updateSheetProperties: {
            properties: { sheetId, gridProperties: { frozenRowCount: 1 } },
            fields: 'gridProperties.frozenRowCount',
          },
        },
        // Auto-resize columns
        {
          autoResizeDimensions: {
            dimensions: { sheetId, dimension: 'COLUMNS', startIndex: 0, endIndex: 16 },
          },
        },
      ],
    },
  });
}

// ─── Data loading ─────────────────────────────────────────────────────────────

function loadAllLeads() {
  if (!existsSync(LEADS_DIR)) return [];
  const files = readdirSync(LEADS_DIR).filter(f => f.endsWith('.json'));
  const allLeads = [];
  for (const file of files) {
    const data = JSON.parse(readFileSync(join(LEADS_DIR, file), 'utf8'));
    allLeads.push(...(data.leads || []));
  }
  return allLeads;
}

function loadFileLeads(filepath) {
  const fullPath = filepath.startsWith('/') ? filepath : join(LEADS_DIR, filepath);
  if (!existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    process.exit(1);
  }
  const data = JSON.parse(readFileSync(fullPath, 'utf8'));
  return data.leads || [];
}

// ─── Format rows for the sheet ────────────────────────────────────────────────

const BUILD_QUEUE_HEADERS = [
  'Status', 'Business Name', 'Category', 'Lead Score', 'Audit Score',
  'Rating', 'Reviews', 'Has Website', 'Website', 'Phone', 'Address',
  'Notes', 'Assigned To', 'Demo URL', 'Date Discovered', 'Date Emailed',
];

const RAW_LEADS_HEADERS = [
  'Business Name', 'Category', 'Lead Score', 'Audit Score', 'Label',
  'Rating', 'Reviews', 'Website', 'No Website Flag', 'Phone', 'Address',
  'PageSpeed Mobile', 'SEO Score', 'SSL', 'Site Age', 'Status',
  'Suppress Reason', 'Place ID', 'Google URL', 'Discovered At',
];

function formatBuildQueueRow(lead) {
  return [
    lead.leadScoreLabel || (lead.status === 'SUPPRESSED' ? '🚫 Suppressed' : '⬜ Unscored'),
    lead.name || '',
    lead.category || '',
    lead.leadScore ?? '',
    lead.auditScore ?? '',
    lead.rating ?? '',
    lead.reviewCount ?? '',
    lead.noWebsiteFlag ? '❌ No website' : '✅ Has website',
    lead.website || '',
    lead.phone || '',
    lead.address || '',
    '',  // Notes — manual column
    '',  // Assigned To — manual column
    '',  // Demo URL — filled after deployment
    lead.discoveredAt ? lead.discoveredAt.split('T')[0] : '',
    '',  // Date Emailed — manual column
  ];
}

function formatRawRow(lead) {
  return [
    lead.name || '',
    lead.category || '',
    lead.leadScore ?? '',
    lead.auditScore ?? '',
    lead.leadScoreLabel || lead.auditScoreLabel || '',
    lead.rating ?? '',
    lead.reviewCount ?? '',
    lead.website || '',
    lead.noWebsiteFlag ? 'YES' : 'NO',
    lead.phone || '',
    lead.address || '',
    lead.pagespeed?.mobile ?? '',
    lead.pagespeed?.seo ?? '',
    lead.ssl ? 'YES' : 'NO',
    lead.siteAge ?? '',
    lead.status || '',
    lead.suppressReason || '',
    lead.placeId || '',
    lead.googleUrl || '',
    lead.discoveredAt ? lead.discoveredAt.split('T')[0] : '',
  ];
}

// ─── Main sync ────────────────────────────────────────────────────────────────

async function sync(leads) {
  validateEnv();
  const auth = getAuthClient();
  const sheets = google.sheets({ version: 'v4', auth });

  console.log(`\n📊 Syncing ${leads.length} leads to Google Sheet...`);

  // ── Build Queue tab ──────────────────────────────────────────────────────
  const buildQueueId = await ensureSheetExists(sheets, 'Build Queue');
  await clearSheet(sheets, 'Build Queue');

  const scoredLeads = leads
    .filter(l => l.leadScore !== null && l.status !== 'SUPPRESSED')
    .sort((a, b) => (b.leadScore || 0) - (a.leadScore || 0));

  const suppressedLeads = leads.filter(l => l.status === 'SUPPRESSED');
  const unscoredLeads   = leads.filter(l => l.leadScore === null && l.status !== 'SUPPRESSED');

  const buildQueueRows = [
    BUILD_QUEUE_HEADERS,
    ...scoredLeads.map(formatBuildQueueRow),
    // Separator row
    ...(suppressedLeads.length ? [['── SUPPRESSED ──', ...Array(15).fill('')]] : []),
    ...suppressedLeads.map(formatBuildQueueRow),
    ...(unscoredLeads.length ? [['── UNSCORED ──', ...Array(15).fill('')]] : []),
    ...unscoredLeads.map(formatBuildQueueRow),
  ];

  await writeRows(sheets, 'Build Queue', buildQueueRows);
  await applyHeaderFormatting(sheets, buildQueueId);
  console.log(`   ✓ Build Queue tab — ${scoredLeads.length} scored, ${suppressedLeads.length} suppressed, ${unscoredLeads.length} unscored`);

  // ── Raw Leads tab ────────────────────────────────────────────────────────
  const rawLeadsId = await ensureSheetExists(sheets, 'Raw Leads');
  await clearSheet(sheets, 'Raw Leads');

  const rawRows = [
    RAW_LEADS_HEADERS,
    ...leads.sort((a, b) => (b.leadScore || b.auditScore || 0) - (a.leadScore || a.auditScore || 0))
             .map(formatRawRow),
  ];

  await writeRows(sheets, 'Raw Leads', rawRows);
  await applyHeaderFormatting(sheets, rawLeadsId);
  console.log(`   ✓ Raw Leads tab — ${leads.length} total records`);

  console.log(`\n✅ Synced to Google Sheet:`);
  console.log(`   https://docs.google.com/spreadsheets/d/${SHEET_ID}`);
  console.log(`\n🎯 Top build targets:`);
  scoredLeads.slice(0, 5).forEach(l => {
    const site = l.noWebsiteFlag ? '⚠️  NO WEBSITE' : (l.website || '').replace(/^https?:\/\//, '').slice(0, 40);
    console.log(`   ${l.leadScore}/100 — ${l.name} | ${site}`);
  });
}

// ─── Entry point ─────────────────────────────────────────────────────────────

async function run() {
  const fileArg = getArg('--file');
  const clear   = process.argv.includes('--clear');
  const leads   = fileArg ? loadFileLeads(fileArg) : loadAllLeads();

  if (leads.length === 0) {
    console.error('No leads found. Run discover-leads.js → audit-urls.js → score-leads.js first.');
    process.exit(1);
  }

  if (clear) {
    console.log('--clear flag: wiping sheet before re-sync...');
  }

  await sync(leads);
}

run().catch(err => {
  if (err.message?.includes('invalid_grant') || err.message?.includes('PERMISSION_DENIED')) {
    console.error('\n❌ Google auth failed. Check that:');
    console.error('   1. GOOGLE_SERVICE_ACCOUNT_KEY path points to the right JSON file');
    console.error('   2. The service account email has Editor access to the Sheet');
    console.error('   3. Google Sheets API is enabled in your Cloud project');
    console.error('\n   Run: node tools/export-leads.js --help for setup steps');
  } else {
    console.error('Error:', err.message);
  }
  process.exit(1);
});
