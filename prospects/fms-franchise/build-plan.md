# FMS Franchise — Next.js Replica Build Plan

**Project:** Pixel-faithful replica of fmsfranchise.com  
**Stack:** Next.js 14 (App Router) · TypeScript · Inline CSS · Vercel deployment  
**Dev server:** `cd prospects/fms-franchise/site && npm run dev` → http://localhost:3001  
**GitHub:** github.com/Franscale1922/local-websites → `prospects/fms-franchise/`

---

## Page Build Status

### ✅ Core Pages (Done)

| Page | Route | Status |
|---|---|---|
| Homepage | `/` | ✅ DONE — 5 YouTube embeds, logo slider, hero |
| About Us | `/about-us` | ✅ DONE — YouTube + local video (about-2.mp4) |
| Franchise Your Business | `/franchise-your-business` | ✅ DONE — Lead-gen form, client grid |
| Services (index) | `/services` | ✅ DONE — 9 service cards with hover lift |
| Our Clients | `/our-clients` | ✅ DONE — 50+ brand tiles |
| Leadership | `/about-us/leadership` | ✅ DONE — 10 bio cards |

### ✅ Services Sub-Pages (Done)

| Page | Route | Status |
|---|---|---|
| Franchise Development | `/services/franchise-development` | ✅ DONE |
| Franchise Sales | `/services/franchise-sales` | ✅ DONE |
| Management & Support | `/services/management-support` | ✅ DONE |
| Franchise Business Plan | `/services/franchise-business-plan` | ✅ DONE |
| Franchise Business Plans | `/services/franchise-business-plans` | ✅ REDIRECT → /services/franchise-business-plan |
| Efficiency Audit | `/services/efficiency-audit` | ✅ DONE |
| Territory Mapping | `/services/franchise-territory-mapping` | ✅ DONE |
| Bookkeeping Support | `/services/franchise-bookkeeping-support` | ✅ DONE |
| Marketing Overview | `/services/marketing-your-franchise` | ✅ REDIRECT → /services |
| SEO Services | `/services/marketing-your-franchise/seo` | ✅ DONE |
| Outsourced Support | `/outsourced-franchise-support-services` | ✅ DONE |

### ✅ FMS Digital Section (Done)

| Page | Route | Status |
|---|---|---|
| FMS Digital | `/fms-digital` | ✅ DONE |
| Lead Generation | `/fms-digital/lead-generation` | ✅ DONE |
| Branding & Marketing | `/fms-digital/franchise-branding-services` | ✅ DONE |
| Website Design | `/fms-digital/website-design` | ✅ DONE |
| Success Stories | `/fms-digital/franchise-success-stories` | ✅ DONE |
| Social Media | `/fms-digital/franchise-social-media-strategy` | ✅ DONE |
| Tradeshows | `/fms-digital/franchise-tradeshows-lead-generation` | ✅ DONE |
| Portfolio | `/our-clients/fmsdigital-portfolio` | ✅ DONE |

### ✅ Learn Hub (Done)

| Page | Route | Status |
|---|---|---|
| Learn (index) | `/learn` | ✅ DONE |
| What is Franchising? | `/learn/what-is-franchising` | ✅ DONE |
| Why Franchising? | `/learn/why-franchise` | ✅ DONE |
| Why Franchising (alias) | `/learn/why-franchising` | ✅ REDIRECT → /learn/why-franchise |
| Industry Facts | `/learn/franchise-industry-facts` | ✅ DONE |
| Industry Facts (alias) | `/learn/industry-facts` | ✅ REDIRECT → /learn/franchise-industry-facts |
| How-to Guides (index) | `/learn/how-to-guides` | ✅ DONE |
| How to Start a Franchise | `/learn/how-to-guides/how-to-start-a-franchise` | ✅ DONE |
| How to Write Ops Manual | `/learn/how-to-guides/how-to-write-a-franchise-operations-manual` | ✅ DONE |
| How to Franchise Your Business | `/learn/how-to-franchise-your-business` | ✅ DONE |
| Resources | `/learn/resources` | ✅ DONE |
| State Guidelines | `/learn/state-guidelines` | ✅ DONE |
| State Guidelines (alias) | `/learn/resources/state-guidelines` | ✅ REDIRECT → /learn/state-guidelines |
| Franchising Guidelines (alias) | `/learn/resources/franchising-guidelines` | ✅ REDIRECT → /learn/resources |
| FAQs | `/learn/faq` | ✅ DONE |
| FAQs (alias) | `/learn/faqs` | ✅ REDIRECT → /learn/faq |
| Webinars | `/webinars` | ✅ DONE |

### ✅ Industries (Done)

| Page | Route | Status |
|---|---|---|
| Industries (index) | `/industries` | ✅ DONE |
| Health & Beauty | `/industries/health-beauty` | ✅ DONE |
| Children | `/industries/children` | ✅ DONE |
| Food & Beverage | `/industries/food-beverage` | ✅ DONE |
| Retail | `/industries/retail` | ✅ DONE |
| Real Estate | `/industries/real-estate` | ✅ DONE |
| Services | `/industries/services` | ✅ DONE |
| Automotive | `/industries/automotive` | ✅ DONE |
| Home-Based | `/industries/home-based` | ✅ DONE |
| Home-Based (alias) | `/industries/home-based-franchises` | ✅ REDIRECT → /industries/home-based |
| Education | `/industries/education` | ✅ DONE |
| Healthcare | `/industries/healthcare` | ✅ DONE |
| Home Services | `/industries/home-services` | ✅ DONE |

### ✅ Clients & Proof (Done)

| Page | Route | Status |
|---|---|---|
| Our Clients | `/our-clients` | ✅ DONE |
| Testimonials | `/our-clients/testimonials` | ✅ DONE |
| Case Studies | `/case-studies` | ✅ DONE |

### ✅ Lead Capture & Tools (Done)

| Page | Route | Status |
|---|---|---|
| Franchise Feasibility Q | `/franchise-feasibility-questionnaire` | ✅ DONE — multi-step form |
| Feasibility (alias) | `/feasibility-questionnaire` | ✅ DONE |
| ROI Calculator | `/roi-calculator` | ✅ DONE — interactive 5-year model |
| Franchise Readiness Assessment | `/franchise-readiness-assessment` | ✅ DONE — 10-question scored assessment |
| Refer a Client | `/refer-a-client` | ✅ DONE |

### ✅ About / Company (Done)

| Page | Route | Status |
|---|---|---|
| About Us | `/about-us` | ✅ DONE |
| About (alias) | `/about` | ✅ REDIRECT → /about-us |
| Leadership | `/about-us/leadership` | ✅ DONE |
| Meet the Team | `/meet-the-team` | ✅ DONE |
| Team (alias) | `/team` | ✅ DONE |
| Contact | `/contact` | ✅ DONE |
| About-Us Contact | `/about-us/contact` | ✅ DONE |
| Locations | `/locations` | ✅ DONE |
| Events | `/event` | ✅ DONE |
| News | `/news` | ✅ DONE |
| Blog (canonical) | `/blog` | ✅ DONE — dynamic [slug] route |
| Blog (alias) | `/about-us/blog` | ✅ REDIRECT → /blog |
| Press & Media | `/insights-on-franchise-marketing-systems-press` | ✅ DONE |

### 🔲 Remaining (Low Priority)

| Page | Route | Status | Notes |
|---|---|---|---|
| Digital Marketing Index | `/services/digital-marketing` | 🔲 Stub | Has page, needs content review |
| Franchise Blog Posts | `/blog/[slug]` | 🔲 Partial | Dynamic template built, no real posts |

---

## SEO Architecture

- **Root layout title template:** `'%s | FMS Franchise Marketing Systems'`
- **Interactive pages** (ROI Calculator, Readiness Assessment): metadata in sibling `layout.tsx`
- **Redirect pages**: no metadata (correct — redirects don't need it)
- **All content pages**: unique `export const metadata` with title + description
- **Total pages with metadata:** ~65 unique content pages + dynamic blog template

---

## Route Alias / Redirect Map

| Incoming URL | Redirects To | Reason |
|---|---|---|
| `/about` | `/about-us` | Legacy duplicate |
| `/about-us/blog` | `/blog` | Canonical URL consolidation |
| `/learn/faqs` | `/learn/faq` | URL normalization |
| `/learn/industry-facts` | `/learn/franchise-industry-facts` | URL normalization |
| `/learn/why-franchising` | `/learn/why-franchise` | URL normalization |
| `/learn/resources/state-guidelines` | `/learn/state-guidelines` | URL normalization |
| `/learn/resources/franchising-guidelines` | `/learn/resources` | URL normalization |
| `/services/franchise-business-plans` | `/services/franchise-business-plan` | URL normalization |
| `/services/marketing-your-franchise` | `/services` | No standalone parent page |
| `/industries/home-based-franchises` | `/industries/home-based` | URL normalization |

---

## Video Registry

| # | Page | Embed Type | YouTube ID / File |
|---|---|---|---|
| 1 | Homepage Hero | YouTube | `SWM3XFxTNcs` — Chris Conner intro |
| 2 | Homepage Process | YouTube | `uLh_iITjQ6Q` — Step-by-step process |
| 3 | Homepage Testimonial | YouTube | `E7AY_KrqePA` — MF Gyros |
| 4 | Homepage Testimonial | YouTube | `Y_OkkRZGOAo` — Bagel Hole |
| 5 | Homepage Testimonial | YouTube | `GmiHv1yDbLw` — Green Home Solutions |
| 6 | About Us | YouTube | `2JgdVcRwv18` — Team Introduction |
| 7 | About Us | Local MP4 | `/public/about-2.mp4` — ⚠️ NEEDS MANUAL COPY |

**Action required:** Copy `About 2.mp4` from `/Users/kelseystuart/local-websites/About 2.mp4` to `/Users/kelseystuart/local-websites/prospects/fms-franchise/site/public/about-2.mp4`

---

## Design System

| Token | Value |
|---|---|
| Primary Green (dark) | `#2c4a2e` / `#1a3a1c` |
| Secondary Green (mid) | `#4a7c59` |
| Gold / Accent | `#c8a84b` |
| Background Off-white | `#f8f8f6` |
| Text Dark | `#1a3a1c` |
| Text Mid | `#555` |
| Heading Font | Montserrat (Google Fonts) |
| Body Font | Source Sans 3 (Google Fonts) |

All styles are **inline** — no Tailwind, no CSS modules. Every hover effect uses `onMouseEnter` / `onMouseLeave`. 'use client' pages that need metadata use a sibling `layout.tsx`.

---

## File Structure

```
prospects/fms-franchise/
├── build-plan.md                  ← this file (updated 2026-03-31)
├── SESSION-PROMPT.md              ← LLM continuation prompt
└── site/
    ├── public/
    │   ├── fms-logo.svg
    │   └── about-2.mp4            ← ⚠️ needs manual copy
    └── src/app/
        ├── layout.tsx             ← global nav + footer + title template
        ├── globals.css
        ├── page.tsx               ← homepage
        ├── components/
        │   ├── HomePageClient.tsx
        │   └── SiteNav.tsx
        ├── about-us/              ✅ + /leadership, /contact, /blog (redirect)
        ├── about/                 ✅ redirect → /about-us
        ├── blog/                  ✅ index + [slug] dynamic route
        ├── case-studies/          ✅
        ├── contact/               ✅
        ├── event/                 ✅
        ├── feasibility-questionnaire/ ✅
        ├── fms-digital/           ✅ + 6 sub-pages
        ├── franchise-feasibility-questionnaire/ ✅
        ├── franchise-readiness-assessment/ ✅ (layout.tsx handles metadata)
        ├── franchise-your-business/ ✅
        ├── industries/            ✅ + 12 sub-pages
        ├── insights-on-franchise-marketing-systems-press/ ✅
        ├── learn/                 ✅ + all sub-pages + redirects
        ├── locations/             ✅
        ├── meet-the-team/         ✅
        ├── news/                  ✅
        ├── our-clients/           ✅ + /testimonials, /fmsdigital-portfolio
        ├── outsourced-franchise-support-services/ ✅
        ├── refer-a-client/        ✅
        ├── roi-calculator/        ✅ (layout.tsx handles metadata)
        ├── services/              ✅ + 9 sub-pages + /marketing-your-franchise/seo
        ├── team/                  ✅
        └── webinars/              ✅
```

---

## Session History

| Date | Work Completed |
|---|---|
| 2026-03-31 | Initial build — Next.js 14 project scaffolded, global nav/footer, design system |
| 2026-03-31 | Homepage built with all 5 YouTube video embeds wired |
| 2026-03-31 | About Us, Franchise Your Business, Services, Our Clients, Leadership built |
| 2026-03-31 | GitHub push: 36 files, 5,958 insertions |
| 2026-03-31 | 17 more pages added: SEO sub-page, how-to guides, industries/services, blog/[slug] dynamic template, event/news/press, 6 route aliases |
| 2026-03-31 | /our-clients (upgraded), /testimonials, /case-studies, /fms-digital + sub-pages |
| 2026-03-31 | /locations, /services/franchise-sales |
| 2026-03-31 | /about-us/contact, /franchise-feasibility-questionnaire |
| 2026-03-31 | Full SEO pass: layout.tsx metadata for 'use client' pages, /about redirect, /services/marketing-your-franchise redirect |
| 2026-03-31 | **Final state: 76 pages built, all nav links resolve, SEO metadata on all content pages** |

---

## Deployment (Vercel)

- Target: Vercel Pro (personal account)
- Build command: `npm run build`
- Output dir: `.next`
- Run from: `prospects/fms-franchise/site`
- Status: ✅ **DEPLOYED TO PRODUCTION — 2026-03-31**
- **Production URL:** https://site-ruby-five-98.vercel.app
- **Inspect URL:** https://vercel.com/franscale1922s-projects/site/2u4K1txdBLDNgvj3hQjPNBa5t2X4
- Vercel project: `franscale1922s-projects/site`

### Pre-Deployment Checklist
- [x] Run `npm run build` — 89 pages, zero errors ✅
- [x] `vercel deploy --prod` from `prospects/fms-franchise/site/` ✅
- [x] Live URL confirmed ✅
- [ ] Copy `About 2.mp4` to `public/about-2.mp4` — file not found on disk, pending client asset
