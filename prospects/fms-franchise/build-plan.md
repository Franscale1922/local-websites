# FMS Franchise — Next.js Replica Build Plan

**Project:** Pixel-faithful replica of fmsfranchise.com  
**Stack:** Next.js 14 (App Router) · TypeScript · Inline CSS · Vercel deployment  
**Dev server:** `cd prospects/fms-franchise/site && npm run dev` → http://localhost:3001  
**GitHub:** github.com/Franscale1922/local-websites → `prospects/fms-franchise/`

---

## Page Build Status

| Page | Route | Status | Notes |
|---|---|---|---|
| Homepage | `/` | ✅ DONE | All 5 YouTube embeds wired |
| About Us | `/about-us` | ✅ DONE | YouTube + local video (about-2.mp4) |
| Franchise Your Business | `/franchise-your-business` | ✅ DONE | Lead-gen form, client grid, 3-column benefits |
| Services | `/services` | ✅ DONE | 9 service cards with hover lift |
| Our Clients | `/our-clients` | ✅ DONE | 50+ brand tiles roster |
| Leadership | `/about-us/leadership` | ✅ DONE | 10 bio cards with initials avatars |
| Franchise Development | `/services/franchise-development` | 🔲 TODO | Key sub-page |
| Franchise Sales | `/services/franchise-sales` | 🔲 TODO | |
| Management & Support | `/services/management-support` | 🔲 TODO | |
| Franchise Business Plans | `/services/franchise-business-plans` | 🔲 TODO | |
| Efficiency Audit | `/services/efficiency-audit` | 🔲 TODO | |
| Territory Mapping | `/services/franchise-territory-mapping` | 🔲 TODO | |
| Bookkeeping Support | `/services/franchise-bookkeeping-support` | 🔲 TODO | |
| Outsourced Support | `/outsourced-franchise-support-services` | 🔲 TODO | |
| Learn Hub | `/learn` | 🔲 TODO | |
| What is Franchising? | `/learn/what-is-franchising` | 🔲 TODO | |
| Why Franchising? | `/learn/why-franchising` | 🔲 TODO | |
| Industry Facts | `/learn/industry-facts` | 🔲 TODO | |
| How to Start a Franchise | `/learn/how-to-guides/how-to-start-a-franchise` | 🔲 TODO | |
| FAQs | `/learn/faqs` | 🔲 TODO | |
| Franchising Guidelines | `/learn/resources/franchising-guidelines` | 🔲 TODO | |
| State Guidelines | `/learn/resources/state-guidelines` | 🔲 TODO | |
| ROI Calculator | `/roi-calculator` | 🔲 TODO | Interactive calculator |
| Feasibility Questionnaire | `/franchise-feasibility-questionnaire` | 🔲 TODO | Multi-step form |
| FMS Digital | `/fms-digital` | 🔲 TODO | |
| Lead Generation | `/fms-digital/lead-generation` | 🔲 TODO | |
| Branding & Marketing | `/fms-digital/franchise-branding-services` | 🔲 TODO | |
| Website Design | `/fms-digital/website-design` | 🔲 TODO | |
| SEO & Advertising | `/services/marketing-your-franchise/seo` | 🔲 TODO | |
| Social Media | `/fms-digital/franchise-social-media-strategy` | 🔲 TODO | |
| Our Team | `/meet-the-team` | 🔲 TODO | Full team roster |
| Contact | `/about-us/contact` | 🔲 TODO | Contact form page |
| Locations | `/locations` | 🔲 TODO | US & international map |
| Testimonials | `/our-clients/testimonials` | 🔲 TODO | |
| Case Studies | `/case-studies` | 🔲 TODO | |
| Blog | `/about-us/blog` | 🔲 TODO | WordPress → Next.js migration |
| News | `/news` | 🔲 TODO | |
| Industries (10 sub-pages) | `/industries/*` | 🔲 TODO | Health, Food, Children, etc. |
| Events | `/event` | 🔲 TODO | |
| FMS Sourcing | External → fmssourcing.com | N/A | External link |
| Franchise Funding Solutions | External → franchisefundingsolutions.com | N/A | External link |

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

---

## File Structure

```
prospects/fms-franchise/
├── BUILD-PLAN.md                  ← this file
├── SESSION-PROMPT.md              ← LLM continuation prompt
└── site/
    ├── public/
    │   ├── fms-logo.svg
    │   └── about-2.mp4            ← ⚠️ needs manual copy
    └── src/app/
        ├── layout.tsx             ← global nav + footer
        ├── globals.css
        ├── page.tsx               ← homepage
        ├── components/
        │   └── HomePageClient.tsx ← homepage client component
        ├── about-us/
        │   ├── page.tsx
        │   ├── AboutPageClient.tsx
        │   └── leadership/
        │       ├── page.tsx
        │       └── LeadershipClient.tsx
        ├── franchise-your-business/
        │   ├── page.tsx
        │   └── FranchiseYourBusinessClient.tsx
        ├── services/
        │   ├── page.tsx
        │   └── ServicesClient.tsx
        └── our-clients/
            ├── page.tsx
            └── OurClientsClient.tsx
```

---

## Session History

| Date | Work Completed |
|---|---|
| 2026-03-31 | Initial build — Next.js 14 project scaffolded, global nav/footer, design system |
| 2026-03-31 | Homepage built with all 5 YouTube video embeds wired (SWM3XFxTNcs, uLh_iITjQ6Q, E7AY_KrqePA, Y_OkkRZGOAo, GmiHv1yDbLw) |
| 2026-03-31 | About Us page built with YouTube embed (2JgdVcRwv18) + local video slot (about-2.mp4) |
| 2026-03-31 | Franchise Your Business, Services, Our Clients, Leadership pages built and verified |
| 2026-03-31 | GitHub push: 36 files, 5,958 insertions |

---

## Deployment (Vercel)

- Target: Vercel Pro (personal account)
- Build command: `npm run build`
- Output dir: `.next`
- Run from: `prospects/fms-franchise/site`
- Status: 🔲 Not yet deployed — pending core page completion
