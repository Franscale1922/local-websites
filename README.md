# Local Websites — Website Prospecting Business

> Find badly designed websites. Build something stunning. Offer it to them for a flat fee.

This monorepo contains everything needed to run the Whitefish-area website prospecting business: lead research playbooks, website build templates, outreach campaign scripts, and per-prospect demo sites.

---

## How It Works

1. **Find** high-revenue local businesses with poor websites (see `playbooks/lead-discovery.md`)
2. **Research** — score the business and their site against the qualification criteria
3. **Build** a beautiful replacement using the appropriate industry template
4. **Pitch** — send the 3-touch cold email sequence with a live Vercel demo link

---

## Folder Structure

```
local-websites/
├── README.md
├── playbooks/
│   ├── agentic-pipeline.md          ← Full automation architecture
│   ├── lead-discovery.md            ← How to find and score prospects
│   ├── website-build.md             ← Build workflow, QA checklist, voice brief
│   └── outreach-campaign.md         ← Cold email sequences + personalization guide
├── templates/
│   ├── gemini.md                    ← Project Constitution template (copy per niche)
│   ├── research-template.md
│   ├── build-plan-template.md
│   ├── client-intake-template.md
│   ├── outdoor-adventure/
│   ├── restaurant/
│   ├── lodging/
│   ├── professional-services/
│   ├── retail-boutique/
│   └── auto-services/
├── .agent/
│   ├── workflows/
│   │   ├── launch-site.md           ← /launch-site slash command
│   │   ├── client-intake.md         ← /client-intake slash command
│   │   └── push.md                  ← /push slash command
│   └── skills/
│       ├── niche-research/          ← Competitor analysis + conversion patterns
│       ├── clone-site/              ← Generate siteconfig.ts + apply to template
│       ├── deploy-demo/             ← Vercel deploy + CRM update
│       └── uiux-audit/              ← Accessibility, performance, SEO checklist
├── prospects/
│   └── [business-slug]/
│       ├── gemini.md                ← Project Constitution (copied from templates/)
│       ├── task_plan.md             ← Phase checklist (B.L.A.S.T. Protocol 0)
│       ├── findings.md              ← Competitor research output
│       ├── progress.md              ← Session log, errors, results
│       ├── research.md              ← Lead score + website audit + voice brief
│       ├── assets/                  ← Pulled photos, logos
│       └── site/                    ← The actual Next.js demo site
└── tools/
    ├── discover-leads.js
    ├── score-leads.js
    ├── audit-urls.js
    ├── digital-audit.js
    ├── scrape-existing-site.js
    ├── scrape-reviews.js
    ├── generate-voice-brief.js
    ├── generate-copy.js
    ├── apply-copy.js               ← Clone engine (reads siteconfig.ts schema)
    ├── deploy-demo.js
    ├── send-email.js
    ├── update-crm.js
    └── run-pipeline.js
```

---

## Target Geography

**Center:** Whitefish, MT  
**Radius:** ~45-minute drive  
**Covers:** Kalispell · Columbia Falls · Bigfork · Lakeside · Polson · West Glacier · Hungry Horse · Libby

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Hosting/Previews | Vercel |
| CDN | Cloudflare |
| Fonts | Google Fonts |
| Email | Resend + React Email |
| Lead Research | Apify + Clay + Apollo |
| Automation | N8N |

---

## Pricing

| Tier | Deliverable | Price |
|---|---|---|
| Starter | 5-page, standard template, 1 revision round | $1,500 |
| Professional | 8-page, custom design, forms/bookings | $2,800 |
| Premium | Full custom, e-commerce or reservations | $5,000+ |
| Monthly Retainer | Hosting + maintenance | $150–$300/mo |
