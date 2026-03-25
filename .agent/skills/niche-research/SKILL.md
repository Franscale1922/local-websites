---
name: researching-niche-competitors
description: Analyzes the top-performing businesses in a local service niche to extract website conversion patterns. Use when the user asks to research a niche, analyze competitors, or prepare to build a master template for a service category like HVAC, landscaping, or pest control.
---

# Niche Research

## When to use this skill
- User says "research [niche]" or "analyze competitors for [niche]"
- User is preparing to build a master template for a new niche
- User wants to know what top performers in a category do differently

## Workflow

- [ ] Run discover-leads.js to pull top 30 businesses in niche + region
- [ ] Sort by review count descending — top 10 are the research subjects
- [ ] Run scrape-existing-site.js on top 5 URLs
- [ ] Run competitor analysis prompt (see Instructions)
- [ ] Extract siteconfig.ts schema fields from patterns
- [ ] Write output to `findings.md` and `gemini.md`

## Instructions

### Step 1 — Pull leads
```bash
node tools/discover-leads.js --niche "[niche]" --region "[City, State]"
node tools/score-leads.js
```
Sort output by `reviewCount` descending.

### Step 2 — Scrape top 5 sites
```bash
node tools/scrape-existing-site.js [url1]
node tools/scrape-existing-site.js [url2]
# repeat for top 5
```

### Step 3 — Competitor analysis prompt (run in Claude/Gemini)
```
You are analyzing [niche] business websites to find conversion patterns.

Here are the scraped contents of the top 5 highest-reviewed [niche] businesses 
in [region]: [paste scrape outputs]

Answer the following:
1. What 10 things do these high-performers have on their websites that 
   the lowest-reviewed businesses in the niche typically don't?
2. What specific copy patterns appear? (headlines, CTAs, guarantees)
3. What trust signals do they use? (licenses, years in business, reviews)
4. What local SEO signals are present? (neighborhoods, city references)
5. What sections are universal vs. optional?

Respond as a JSON object with keys: patterns[], copyExamples[], trustSignals[], 
localSignals[], universalSections[], optionalSections[]
```

### Step 4 — Output to findings.md
Write the full JSON output plus a human-readable summary of the top 10 patterns to:
`prospects/[niche-master]/findings.md`

### Step 5 — Draft siteconfig.ts schema
Based on the patterns, list every field that will vary per clone. Write to `gemini.md`.

## Resources
- `tools/discover-leads.js` — `node tools/discover-leads.js --help`
- `tools/scrape-existing-site.js` — `node tools/scrape-existing-site.js --help`
- `tools/score-leads.js` — `node tools/score-leads.js --help`
