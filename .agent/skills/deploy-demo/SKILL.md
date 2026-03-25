---
name: deploying-demo-site
description: Deploys a prospect's cloned site to Vercel, captures the live URL, and updates the CRM. Use when the user says "deploy the demo for [prospect]" or after the clone-site skill has been successfully validated.
---

# Deploy Demo Site

## When to use this skill
- Clone site has been validated locally
- User says "deploy [prospect slug]" or "push the demo live"
- Running a batch deploy across multiple validated clones

## Workflow

- [ ] Confirm site passes local validation (no placeholders, no broken images)
- [ ] Run deploy-demo.js
- [ ] Capture live Vercel URL
- [ ] Verify the deployed URL loads in browser
- [ ] Check logo renders (common failure point)
- [ ] Update CRM with URL and DEMO LIVE status

## Instructions

### Step 1 — Pre-deploy check
```bash
cd prospects/[slug]/site
# Confirm build passes before deploying
npm run build
```
If build fails, fix errors before proceeding. Do not deploy a broken build.

### Step 2 — Deploy
```bash
# From the local-websites root
node tools/deploy-demo.js [slug]
```
This runs `vercel --prod --yes` from the site directory, captures the URL, and writes it to the CRM.

### Step 3 — Verify deployment
Open the returned URL in a browser. Check:
- [ ] Site loads (not Vercel 404)
- [ ] Logo image renders (most common post-deploy failure)
- [ ] Phone number visible in hero or nav
- [ ] Mobile viewport looks correct (resize browser or use DevTools)

**If logo is missing:** The logo file likely isn't committed or the path in siteconfig.ts is wrong.
```bash
# Check what's in assets
ls prospects/[slug]/site/public/
# Fix path in siteconfig.ts then redeploy
node tools/deploy-demo.js [slug]
```

### Step 4 — Update CRM
```bash
node tools/update-crm.js [slug] --status "DEMO LIVE" --demo-url "[vercel-url]"
```

### Step 5 — Report to user
Return:
- Live URL
- Any issues found and how they were fixed
- Fields that used placeholder data (flag for manual review before email send)

## Resources
- `tools/deploy-demo.js` — `node tools/deploy-demo.js --help`
- `tools/update-crm.js` — `node tools/update-crm.js --help`
