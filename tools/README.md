# Tools — Usage Guide

All scripts in this directory are ES module Node.js scripts. Run from the project root.

## Prerequisites

Create a `.env` file by copying `.env.example`:
```bash
cp .env.example .env
# Then fill in your API keys
```

Load env vars before running scripts:
```bash
export $(cat .env | grep -v '#' | xargs)
# or use: node --env-file=.env tools/[script].js
```

---

## The Pipeline (in order)

```
1. scrape-existing-site.js   → Extract content from their old website
2. scrape-reviews.js         → Pull Google reviews via Places API
3. generate-voice-brief.js   → AI builds Voice Brief from reviews + copy
4. generate-copy.js          → AI generates full site copy from Voice Brief
5. apply-copy.js             → Patches copy into the right template
6. [manual QA]               → Review at localhost:3000, adjust as needed (~15 min)
7. deploy-demo.js            → Pushes to Vercel, captures live URL
```

---

## Individual Scripts

### `audit-urls.js`
Batch-checks a list of URLs for SSL, PageSpeed, and last redesign date.

```bash
node tools/audit-urls.js
# Edit the URLS array at the top of the file before running
```

---

### `score-leads.js`
Calculates lead scores from a list of business data objects and outputs a ranked list.

```bash
node tools/score-leads.js
# Edit the LEADS array at the top of the file
```

---

### `scrape-existing-site.js`
Extracts readable text from a prospect's existing website using Jina.ai reader.

```bash
node tools/scrape-existing-site.js --slug [slug] --url https://theirsite.com
```

Output: `prospects/[slug]/existing-copy.txt`

---

### `scrape-reviews.js`
Fetches Google Places reviews and business details for a prospect.

```bash
node tools/scrape-reviews.js --slug [slug] --place-id "ChIJXXXXXXXXXXXX"
```

How to find a Place ID:
1. Search on [Google Maps](https://maps.google.com)
2. Copy the URL — or use the [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)

Requires: `GOOGLE_PLACES_API_KEY`
Output: `prospects/[slug]/google-reviews.json`

---

### `generate-voice-brief.js`
Feeds reviews + existing copy into Claude and returns a Voice Brief JSON.

```bash
node tools/generate-voice-brief.js --slug [slug]
```

Requires: `ANTHROPIC_API_KEY`, `prospects/[slug]/google-reviews.json`
Output: `prospects/[slug]/voice-brief.json` + updates `research.md`

---

### `generate-copy.js`
Generates all website copy (headlines, sub-copy, about, CTAs, SEO meta) using the Voice Brief.

```bash
node tools/generate-copy.js --slug [slug]
```

Requires: `ANTHROPIC_API_KEY`, Voice Brief section in `prospects/[slug]/research.md`
Output: `prospects/[slug]/generated-copy.json`

---

### `apply-copy.js`
Copies the correct template into `prospects/[slug]/site/` and patches the SITE config with generated copy.

```bash
node tools/apply-copy.js --slug [slug] --template restaurant
```

Available templates: `outdoor-adventure`, `restaurant`, `lodging`, `professional-services`, `retail-boutique`, `auto-services`

Then preview:
```bash
cd prospects/[slug]/site && npm install && npm run dev
```

---

### `deploy-demo.js`
Deploys the site to Vercel and saves the URL back to `research.md`.

```bash
node tools/deploy-demo.js --slug [slug]
```

Requires: `VERCEL_TOKEN`, Vercel CLI installed (`npm i -g vercel`)

---

### `scaffold-template.sh`
Creates a new template folder with base config files.

```bash
chmod +x tools/scaffold-template.sh
./tools/scaffold-template.sh my-new-template
```

---

## Full Pipeline Example

```bash
# 1. Set env vars
export $(cat .env | grep -v '#' | xargs)

# 2. Create the prospect folder (done once)
mkdir -p prospects/big-sky-brewery

# 3. Run the pipeline
node tools/scrape-existing-site.js --slug big-sky-brewery --url https://bigskybrewing.com
node tools/scrape-reviews.js --slug big-sky-brewery --place-id "ChIJXXXXXXXXXXXX"
node tools/generate-voice-brief.js --slug big-sky-brewery
node tools/generate-copy.js --slug big-sky-brewery
node tools/apply-copy.js --slug big-sky-brewery --template restaurant

# 4. Review at localhost:3000
cd prospects/big-sky-brewery/site && npm install && npm run dev

# 5. Deploy when ready
node tools/deploy-demo.js --slug big-sky-brewery
```
