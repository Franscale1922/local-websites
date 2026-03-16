# Agentic Pipeline: Full System Architecture

How to run this business at scale with maximum automation and minimum manual effort.

---

## The Three Agent Loops

```
┌─────────────────────────────────────────────────────────────────────────┐
│  LOOP 1: DISCOVERY          LOOP 2: BUILD              LOOP 3: OUTREACH │
│                                                                         │
│  Apify scraper         →   AI copy generation     →   N8N email seq.   │
│  Website audit API     →   Template customization  →   Apollo/Clay      │
│  Lead scoring script   →   Vercel auto-deploy      →   Response mgmt   │
│  Google Sheet CRM      →   QA checklist agent      →   Follow-up logic │
└─────────────────────────────────────────────────────────────────────────┘
```

All three loops feed into a single **Google Sheet CRM** that is the source of truth for every prospect.

---

## Loop 1: Discovery (Mostly Automated)

### Step 1A — Scrape Business Listings (Apify)

**Apify Actors to run weekly:**
- `compass/crawler-google-places` — Google Maps business data
- `bebity/yelp-scraper` — Yelp reviews and business data

**Scheduled run:** Every Monday, auto-scrape these query batches:
```
dental office near Whitefish MT
restaurant near Bigfork MT
lodge near Glacier National Park
chiropractor near Kalispell MT
outdoor tours near Whitefish MT
law firm near Kalispell MT
boutique near Whitefish MT
auto repair near Columbia Falls MT
fishing guide near Flathead Lake MT
vacation rental near Flathead Lake MT
```

**Apify output → Google Sheets** via Apify webhook → N8N → append rows to `Prospects` sheet.

---

### Step 1B — Auto-Qualify Website Quality (Node.js tool)

Once a prospect row lands in the sheet, N8N triggers `tools/audit-urls.js` on their website URL. Results write back to the sheet:

| Auto-checked field | Tool |
|---|---|
| SSL/HTTPS | fetch HEAD request |
| Mobile PageSpeed score | Google PageSpeed Insights API |
| Tech stack | BuiltWith API (free tier) |
| Last Wayback snapshot | Wayback Machine API |
| **Auto-qualify flag** | Formula: BizScore ≥ 6 AND WebScore ≤ 5 |

---

### Step 1C — Visual Scoring (AI Agent)

For auto-qualified prospects, N8N triggers a screenshot + GPT-4o visual score:

**N8N workflow:**
1. Pull URL from qualified row
2. Use Browserless.io (or Puppeteer) to capture full-page screenshot
3. POST screenshot to OpenAI Vision API with prompt:
   > "Score this business website 1–10 on visual quality and modern design. 10 = stunning professional modern. 1 = outdated cluttered unprofessional. Respond with JSON: {score: N, era: 'YYYY', issues: ['...', '...']}"
4. Write score + issues back to Google Sheet
5. If visual score ≤ 5 → mark `Status: BUILD QUEUE`

---

### CRM: Google Sheet Structure

| Column | Source |
|---|---|
| Business Name | Apify |
| Category | Apify |
| Address | Apify |
| Phone | Apify |
| Website URL | Apify |
| Review Count | Apify |
| Rating | Apify |
| Owner Name | Clay enrichment |
| Owner Email | Apollo.io |
| Biz Score (auto) | score-leads.js |
| SSL | audit-urls.js |
| Mobile PageSpeed | PageSpeed API |
| Visual Score (AI) | GPT-4o Vision |
| AI Issues | GPT-4o Vision |
| **Status** | Auto-set: REVIEW / BUILD QUEUE / IN BUILD / DEMO LIVE / EMAILED / SOLD / PASSED |
| Demo URL | Manual (after build + deploy) |
| Offer Price | Manual |
| Email 1 Sent | N8N |
| Email 2 Sent | N8N |
| Email 3 Sent | N8N |
| Reply | N8N |
| Outcome | Manual |
| Revenue | Manual |

---

## Loop 2: Build (AI-Assisted, Human-Reviewed)

The build process is semi-agentic — AI does the heavy lifting, human does final QA and approval before deploy.

### Step 2A — Auto-Generate Voice Brief (AI Agent)

When a prospect moves to `BUILD QUEUE`, N8N triggers:

1. **Pull data:** Google reviews (via Places API), social media posts (via Apify Instagram/FB scraper), existing website copy (via Firecrawl or Jina.ai reader)
2. **Feed to Claude/GPT** with this prompt:
   > "You are analyzing a local business to build a voice brief for their new website. Here is their existing website copy: [COPY]. Here are their top 10 Google reviews: [REVIEWS]. Based on this research, fill out: Tone Archetype (Warm Neighbor/Rugged Expert/Polished Pro/Playful Local), 3 vibe words, the best quote from a customer review, and what the owner would never say. Respond in JSON."
3. Write Voice Brief back to a `voice-brief` tab in Google Sheet

---

### Step 2B — Auto-Generate Copy (AI Agent)

Using the Voice Brief, an AI agent generates all website copy:

```
Prompt template (run via Claude API or GPT-4 API):

"You are writing website copy for [BUSINESS NAME], a [CATEGORY] in [CITY], MT.
Tone: [ARCHETYPE]. Vibe: [3 WORDS]. Customer language: '[QUOTE]'.
Write in their voice — not generic or corporate.

Generate:
1. Hero headline (6–10 words)
2. Hero subheadline (1–2 sentences)
3. Three value propositions (title + 2-sentence description each)
4. About section (4–5 sentences, first person, tells their story)
5. Primary CTA button text
6. Secondary CTA button text
7. Page <title> tag (includes business name, primary service, city, MT)
8. Meta description (150–160 chars, includes primary keyword)

Respond in JSON."
```

Output JSON is saved to `prospects/[slug]/generated-copy.json`.

---

### Step 2C — Template Customization (Semi-Agentic)

A Node.js script reads `generated-copy.json` and patches it into the SITE config object in `page.tsx`:

```bash
node tools/apply-copy.js prospects/flathead-fish-seafood/generated-copy.json
```

This script:
1. Reads the template `page.tsx`
2. Finds the `SITE = { ... }` block
3. Replaces all content fields with generated copy
4. Saves output to `prospects/[slug]/site/src/app/page.tsx`

Human reviews the result, adjusts tone if needed (~15 min), then:

---

### Step 2D — Auto-Deploy to Vercel (Automated)

```bash
node tools/deploy-demo.js prospects/flathead-fish-seafood
```

This script:
1. Runs `vercel --prod --yes` from the site directory
2. Captures the deployment URL
3. Writes the URL back to the Google Sheet (`Demo URL` column)
4. Updates status to `DEMO LIVE`
5. Triggers Loop 3 outreach

---

## Loop 3: Outreach (Fully Automated)

### Step 3A — Find Owner Contact (Clay + Apollo)

When status = `DEMO LIVE`, N8N:
1. Sends business domain to **Clay** → enriches with owner name, LinkedIn profile
2. Sends to **Apollo.io** → finds direct email
3. Writes owner name + email back to Google Sheet
4. If email found → proceed. If not → flag for manual research.

---

### Step 3B — 3-Touch Email Sequence (N8N + Gmail/Resend)

N8N workflow (triggered when `Owner Email` + `Demo URL` both populated):

```
Day 0  → Send Email 1 (The Hook)
         └─ If reply within 4 days → route to REPLIED workflow
Day 4  → Check: no reply? → Send Email 2 (Follow-Up)
         └─ If reply → route to REPLIED workflow
Day 10 → Check: no reply? → Send Email 3 (The Closer)
         └─ Update status to EMAILED/NO RESPONSE
```

**Email personalization** pulls directly from Google Sheet columns:
- `[FIRST NAME]` from Clay enrichment
- `[BUSINESS NAME]` from Apify data
- `[DEMO LINK]` from Vercel deploy
- `[PRICE]` from offer tier column

---

### Step 3C — Reply Handling

When a reply comes in (N8N Gmail trigger on reply-to thread):
1. Classify reply with GPT: `{type: "interested" | "not_interested" | "question" | "wrong_person"}`
2. If `interested` → notify you via Telegram/Slack DM + flag row in sheet
3. If `question` → draft a suggested reply using GPT → notify you to review + send
4. If `not_interested` → update status to `PASSED`, archive
5. If `wrong_person` → flag for manual re-research

---

## Scripts to Build (tools/)

| Script | Status | What It Does |
|---|---|---|
| `audit-urls.js` | ✅ Built | Batch SSL + PageSpeed + Wayback check |
| `score-leads.js` | ✅ Built | Lead priority scoring |
| `apply-copy.js` | ⬜ TODO | Patches AI-generated copy into template SITE object |
| `deploy-demo.js` | ⬜ TODO | Auto-deploys to Vercel, captures URL |
| `scrape-reviews.js` | ⬜ TODO | Pulls Google reviews via Places API |
| `generate-voice-brief.js` | ⬜ TODO | Calls Claude API to produce Voice Brief JSON |
| `generate-copy.js` | ⬜ TODO | Calls Claude API to produce full site copy JSON |

---

## N8N Workflows to Build

| Workflow | Trigger | Actions |
|---|---|---|
| `weekly-scrape` | Cron (every Monday 8am) | Run Apify actors → append to Google Sheet |
| `auto-audit` | New row in sheet | Run audit-urls.js → write scores back |
| `visual-score` | Biz score ≥ 6 | Screenshot → GPT-4o Vision → write back |
| `enrich-contact` | Status = DEMO LIVE | Clay + Apollo → write owner name/email |
| `email-sequence` | Email populated | 3-touch sequence with Day 0/4/10 timing |
| `reply-classifier` | Gmail reply received | GPT classify → notify or draft response |

---

## Tech Requirements

| Tool | Purpose | Cost |
|---|---|---|
| Apify | Business scraping | ~$50/mo |
| Clay | Contact enrichment | ~$150/mo |
| Apollo.io | Email finding | Free tier / ~$50/mo |
| N8N Cloud | Workflow automation | ~$24/mo |
| Google PageSpeed API | Performance audit | Free |
| BuiltWith API | Tech stack detection | Free tier |
| Browserless.io | Screenshot for AI vision | ~$25/mo |
| OpenAI API (GPT-4o) | Visual scoring + copy gen | Usage-based ~$20–40/mo |
| Claude API | Copy generation (primary) | Usage-based ~$10–30/mo |
| Vercel | Demo site hosting | Free (hobby) or $20/mo (Pro) |
| Resend | Outreach emails | Free tier / $20/mo |

**Estimated monthly automation cost: ~$300–400/mo**
At $1,500–2,800/sale, one close per month covers all tooling.
