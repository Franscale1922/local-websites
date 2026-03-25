---
name: cloning-site-for-prospect
description: Clones the niche master template for a specific prospect by generating a siteconfig.ts from prospect data and applying it to the template. Use when the user says "clone the site for [business]" or "build a demo for [prospect slug]".
---

# Clone Site for Prospect

## When to use this skill
- User says "clone the site for [business name]"
- User provides a prospect slug and wants a demo built
- Running volume clone batch across multiple prospects

## Workflow

- [ ] Verify prospect exists in `prospects/[slug]/research.md`
- [ ] Verify master template exists for niche
- [ ] Scrape prospect's existing website for raw data
- [ ] Generate voice brief
- [ ] Generate copy JSON
- [ ] Run apply-copy.js to produce siteconfig.ts
- [ ] Validate config against gemini.md schema
- [ ] Start dev server and visually confirm output
- [ ] Report any fields that fallback to placeholder values

## Instructions

### Step 1 — Validate prerequisites
```bash
# Confirm research.md exists and is filled out
cat prospects/[slug]/research.md

# Confirm master template is present
ls templates/[niche]/
```
If `research.md` is missing or empty — stop and ask the user to complete it first.

### Step 2 — Scrape prospect site
```bash
node tools/scrape-existing-site.js [prospect-website-url]
# Output saved to prospects/[slug]/assets/scraped-content.json
```

### Step 3 — Generate voice brief and copy
```bash
node tools/generate-voice-brief.js [slug]
node tools/generate-copy.js [slug]
# Outputs: prospects/[slug]/voice-brief.json, generated-copy.json
```

### Step 4 — Apply copy to template
```bash
node tools/apply-copy.js [slug]
# Produces: prospects/[slug]/site/src/config/siteconfig.ts
```

### Step 5 — Validate schema completeness
Open `prospects/[slug]/site/src/config/siteconfig.ts` and verify:
- [ ] No field is still set to `"PLACEHOLDER"` or `""` except explicitly optional fields
- [ ] `phone`, `address`, `serviceAreas` are populated
- [ ] `testimonials` has at least 2 entries (real or plausibly constructed)
- [ ] `primaryColor` matches their brand (check logo or existing site)
- [ ] `logoUrl` points to a real file in `assets/`

If a field is missing, check the scraped content and research.md before flagging to user.

### Step 6 — Visual confirm
```bash
cd prospects/[slug]/site && npm run dev -- --port 3030
```
Open http://localhost:3030 and verify:
- [ ] Business name displays correctly everywhere
- [ ] Hero image loads (not broken)
- [ ] Phone number is clickable
- [ ] No `[PLACEHOLDER]` text visible on any page

## Resources
- `tools/apply-copy.js` — `node tools/apply-copy.js --help`
- `tools/generate-copy.js` — `node tools/generate-copy.js --help`
- `tools/generate-voice-brief.js` — `node tools/generate-voice-brief.js --help`
- Schema definition: `prospects/[niche-master]/gemini.md`
