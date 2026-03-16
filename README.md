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
├── README.md                    ← You are here
├── playbooks/
│   ├── lead-discovery.md        ← How to find and score prospects
│   ├── website-build.md         ← Build workflow, QA checklist, voice brief
│   └── outreach-campaign.md     ← Cold email sequences + personalization guide
├── templates/
│   ├── outdoor-adventure/       ← Tours, guides, Glacier gateway businesses
│   ├── restaurant/              ← Food & beverage
│   ├── lodging/                 ← Hotels, lodges, vacation rentals
│   ├── professional-services/   ← Dental, legal, chiropractic, finance
│   ├── retail-boutique/         ← Shops, galleries, boutiques
│   └── auto-services/           ← Shops, dealerships
├── prospects/
│   └── [business-slug]/
│       ├── research.md          ← Lead score + website audit + voice brief
│       ├── assets/              ← Pulled photos, logos
│       └── site/                ← The actual Next.js demo site
└── tools/
    ├── audit-urls.js            ← Batch website quality checker
    └── score-leads.js           ← Lead scoring calculator
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
