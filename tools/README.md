# Tools Reference

All pipeline scripts live here. Run from the project root.

---

## Discovery Pipeline

### `discover-leads.js` — Find businesses via Google Places API
```bash
node tools/discover-leads.js --all --radius 50000
node tools/discover-leads.js --category restaurant
npm run discover                  # shortcut (all categories)
npm run discover:restaurant       # single category
```
Output: `leads/discovered-[date]-[category].json`

### `audit-urls.js` — Score each website (PageSpeed + SSL + age)
```bash
node tools/audit-urls.js --all
node tools/audit-urls.js --file leads/discovered-*.json
node tools/audit-urls.js --url https://somesite.com
npm run audit
```
Output: enriches same leads JSON with `auditScore` (0–100)

### `score-leads.js` — Final lead scoring + suppression
```bash
node tools/score-leads.js --all
node tools/score-leads.js --queue              # print build queue
npm run score
npm run queue
```
Output: enriches leads JSON with `leadScore`, prints ranked table

### `export-leads.js` — Sync to Google Sheet CRM
```bash
node tools/export-leads.js
npm run export
```
Output: "Build Queue" and "Raw Leads" tabs in the Google Sheet

### `npm run sweep` — Runs all four steps in sequence
```bash
npm run sweep
```

---

## Prospect Pipeline (per-slug)

### `digital-audit.js` — Forensic web research
```bash
node tools/digital-audit.js --slug [slug] --business "Name" --city "City"
npm run digital-audit -- --slug [slug] --business "Name" --city "City"
```
Output: `prospects/[slug]/digital-audit.json`, `owner-intel.md`

### `scrape-existing-site.js` — Extract existing website copy
```bash
node tools/scrape-existing-site.js --slug [slug] --url https://theirsite.com
npm run scrape -- --slug [slug] --url https://theirsite.com
```
Output: `prospects/[slug]/existing-copy.txt`

### `scrape-reviews.js` — Pull Google reviews
```bash
node tools/scrape-reviews.js --slug [slug] --place-id "ChIJXXXXX"
npm run reviews -- --slug [slug] --place-id "ChIJXXXXX"
```
Output: `prospects/[slug]/google-reviews.json`

### `generate-voice-brief.js` — AI brand voice analysis
```bash
node tools/generate-voice-brief.js --slug [slug]
npm run voice -- --slug [slug]
```
Output: `prospects/[slug]/voice-brief.json`, updates `research.md`

### `generate-copy.js` — AI website copy generation
```bash
node tools/generate-copy.js --slug [slug]
npm run copy -- --slug [slug]
```
Output: `prospects/[slug]/generated-copy.json`

### `apply-copy.js` — Merge copy into template
```bash
node tools/apply-copy.js --slug [slug] --template restaurant
npm run apply -- --slug [slug] --template restaurant
```
Templates: `restaurant`, `lodging`, `professional-services`, `retail-boutique`, `auto-services`, `outdoor-adventure`
Output: `prospects/[slug]/site/` — complete Next.js project

### `deploy-demo.js` — Deploy to Vercel
```bash
node tools/deploy-demo.js --slug [slug]
npm run deploy -- --slug [slug]
```
Output: live URL written to `prospects/[slug]/research.md`

### `run-pipeline.js` — Run all steps for a slug in order
```bash
node tools/run-pipeline.js --slug [slug]
node tools/run-pipeline.js --slug [slug] --from voice   # resume from step
node tools/run-pipeline.js --slug [slug] --dry-run      # preview only
npm run pipeline -- --slug [slug]
```
Steps: digital-audit → scrape → reviews → voice → copy → apply → deploy → crm

---

## Outreach & CRM

### `send-email.js` — Send outreach email
```bash
node tools/send-email.js --slug [slug] --email 1
node tools/send-email.js --slug [slug] --email 2 --dry-run
npm run email:send -- --slug [slug] --email 1
```

### `update-crm.js` — Update lead status in Google Sheet
```bash
node tools/update-crm.js --slug [slug] --status EMAILED_1
node tools/update-crm.js --slug [slug] --status HOT --note "Replied asking for price"
node tools/update-crm.js --slug [slug] --demo "https://demo.vercel.app"
npm run crm:update -- --slug [slug] --status EMAILED_1
```
Valid statuses: `DISCOVERED` → `AUDITED` → `SCORED` → `EMAILED_1` → `EMAILED_2` → `EMAILED_3` → `REPLIED` → `HOT` → `CONVERTED` → `NOT_INTERESTED` → `SUPPRESSED`

---

## Delivery

### `package-site.js` — Package site for client delivery
```bash
node tools/package-site.js --slug [slug] --mode zip       # Next.js source
node tools/package-site.js --slug [slug] --mode static    # static HTML/CSS
node tools/package-site.js --slug [slug] --mode vercel-link
npm run package -- --slug [slug] --mode zip
```
Output: `prospects/[slug]/deliverable/` with handoff docs

---

## Dashboard

### `check-status.js` — Prospect pipeline dashboard
```bash
node tools/check-status.js
node tools/check-status.js --setup    # validate env vars
npm run status
```

---

## Required Environment Variables

| Variable | Used by |
|---|---|
| `ANTHROPIC_API_KEY` | generate-copy, generate-voice-brief, digital-audit |
| `GOOGLE_PLACES_API_KEY` | discover-leads, scrape-reviews |
| `GOOGLE_PAGESPEED_API_KEY` | audit-urls |
| `BRAVE_SEARCH_API_KEY` | digital-audit |
| `VERCEL_TOKEN` | deploy-demo |
| `RESEND_API_KEY` | send-email |
| `GOOGLE_SHEET_ID` | export-leads, update-crm |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | export-leads, update-crm |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | export-leads, update-crm |

See `SETUP.md` for step-by-step instructions to acquire each key.
