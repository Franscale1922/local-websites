# FMS Franchise Website — Session Continuation Prompt

## Context

You are continuing a pixel-faithful replica of fmsfranchise.com built in Next.js 14 (App Router) with TypeScript. The project lives at:

```
/Users/kelseystuart/local-websites/prospects/fms-franchise/site
```

GitHub: `github.com/Franscale1922/local-websites` (monorepo, FMS lives under `/prospects/fms-franchise/`)

Dev server is run with:
```bash
cd /Users/kelseystuart/local-websites/prospects/fms-franchise/site && npm run dev
```
→ Accessible at **http://localhost:3001**

---

## Pages Already Built — Do NOT Rebuild

| Route | File | Status |
|---|---|---|
| `/` | `src/app/page.tsx` + `components/HomePageClient.tsx` | ✅ Done |
| `/about-us` | `src/app/about-us/page.tsx` + `AboutPageClient.tsx` | ✅ Done |
| `/about-us/leadership` | `src/app/about-us/leadership/page.tsx` + `LeadershipClient.tsx` | ✅ Done |
| `/franchise-your-business` | `src/app/franchise-your-business/page.tsx` + `FranchiseYourBusinessClient.tsx` | ✅ Done |
| `/services` | `src/app/services/page.tsx` + `ServicesClient.tsx` | ✅ Done |
| `/our-clients` | `src/app/our-clients/page.tsx` + `OurClientsClient.tsx` | ✅ Done |

---

## Design System (Strict Adherence Required)

| Token | Value |
|---|---|
| Dark Green (primary bg) | `#2c4a2e` / `#1a3a1c` |
| Mid Green (accents, hover) | `#4a7c59` |
| Gold (CTA, highlights) | `#c8a84b` |
| Off-white bg | `#f8f8f6` |
| Text dark | `#1a3a1c` |
| Text body | `#555` |
| Heading font | `Montserrat` (700 / 800 weights) |
| Body font | `Source Sans 3` |

**All styles are inline — no Tailwind, no CSS modules.** Follow the same inline style pattern used in all existing pages.

**Section anatomy:**
- Dark green hero → white content section → green/gold CTA banner (repeat pattern)
- Google Fonts already loaded in `layout.tsx`

---

## Code Conventions

1. Every page = a `page.tsx` (server component with `export const metadata`) + a `*Client.tsx` (client component with `'use client'` where needed, otherwise just a regular component)
2. All navigation links use `import Link from 'next/link'`
3. Hover effects are applied via `onMouseEnter` / `onMouseLeave` on the element's style object
4. No external UI libraries — pure HTML/TSX + inline styles only
5. YouTube embeds use `<iframe>` with `src="https://www.youtube.com/embed/VIDEO_ID"`, `allowFullScreen`, `width="100%"`, `height="100%"`, wrapped in an aspect-ratio container

---

## YouTube Videos Already Wired

| # | Page | YouTube ID | Description |
|---|---|---|---|
| 1 | Homepage Hero | `SWM3XFxTNcs` | Chris Conner intro |
| 2 | Homepage Process | `uLh_iITjQ6Q` | Process walkthrough |
| 3 | Homepage Testimonial | `E7AY_KrqePA` | MF Gyros |
| 4 | Homepage Testimonial | `Y_OkkRZGOAo` | Bagel Hole |
| 5 | Homepage Testimonial | `GmiHv1yDbLw` | Green Home Solutions |
| 6 | About Us | `2JgdVcRwv18` | Team Introduction |
| 7 | About Us | Local `about-2.mp4` | ⚠️ Needs `public/about-2.mp4` |

**If a new page needs a video embed**, ask the user:
> "Give me the URL of the live fmsfranchise.com page that has the video and I'll return the YouTube URL."

---

## Remaining Pages to Build (Priority Order)

### 🔴 HIGH — Build First

**1. `/services/franchise-development`**
Scrape live URL: https://www.fmsfranchise.com/services/franchise-development/
Full detail page for the core service. Includes: overview, step-by-step process, CTA.

**2. `/about-us/contact`**
Scrape live URL: https://www.fmsfranchise.com/about-us/contact/
Contact form page (name, email, phone, message). Include address + hours.

**3. `/franchise-feasibility-questionnaire`**
Scrape live URL: https://www.fmsfranchise.com/franchise-feasibility-questionnaire/
Multi-step lead qualification form. Critical for conversion.

**4. `/locations`**
Scrape live URL: https://www.fmsfranchise.com/locations/
Map or grid of US and international FMS offices.

### 🟡 MEDIUM — Service Sub-Pages

Build each as a detail page following the same template as `/services/franchise-development`:
- `/services/franchise-sales`
- `/services/management-support`
- `/services/marketing-your-franchise` 
- `/services/franchise-business-plans`
- `/services/efficiency-audit`
- `/services/franchise-territory-mapping`
- `/services/franchise-bookkeeping-support`
- `/outsourced-franchise-support-services`

For each: scrape `https://www.fmsfranchise.com/services/[slug]/` first.

### 🟡 MEDIUM — Learn Hub

Create an index page at `/learn` then sub-pages:
- `/learn/what-is-franchising`
- `/learn/why-franchising`
- `/learn/industry-facts`
- `/learn/faqs`
- `/learn/how-to-guides/how-to-start-a-franchise`
- `/learn/resources/franchising-guidelines`
- `/learn/resources/state-guidelines`

Scrape each from `https://www.fmsfranchise.com/learn/[slug]/`

### 🟡 MEDIUM — FMS Digital Section

- `/fms-digital` (index)
- `/fms-digital/lead-generation`
- `/fms-digital/franchise-branding-services`
- `/fms-digital/website-design`
- `/fms-digital/franchise-social-media-strategy`
- `/fms-digital/franchise-reputation-management`

### 🟢 LOWER — Blog Migration

The FMS WordPress blog at `https://www.fmsfranchise.com/about-us/blog/` has ~50+ posts.
Strategy:
1. First build the blog index page at `/about-us/blog` with placeholder cards
2. Create a dynamic route `[slug]/page.tsx` under `/about-us/blog/`
3. Migrate top 10 posts by traffic manually as static TSX files
4. Remaining posts: use a static JSON data file to drive blog card rendering

### 🟢 LOWER — Other Pages

- `/our-clients/testimonials` — video testimonial grid
- `/case-studies` — case study cards
- `/meet-the-team` — full 60+ person team roster (scrape `https://www.fmsfranchise.com/meet-the-team/`)
- `/news` — press coverage / news feed
- `/industries/*` — 10 industry sub-pages (Health & Wellness, Food & Beverage, Children's Education, etc.)
- `/event` — events calendar
- `/roi-calculator` — interactive revenue calculator (client-side math)

---

## Deployment Flow (When Ready)

1. Run `npm run build` from within `prospects/fms-franchise/site/` and confirm no build errors
2. Deploy to Vercel: `vercel deploy --prod` from same directory
3. Update `BUILD-PLAN.md` with the live URL

---

## How to Scrape a Page for Content

Use `read_url_content` tool with the live URL:
```
https://www.fmsfranchise.com/[page-slug]/
```
Extract: headlines, subheadings, body copy, bullet points, CTAs verbatim.

Then build the Next.js page using that content with the FMS design system above.

---

## Git Push Command (after each session)

```bash
cd /Users/kelseystuart/local-websites && git add -A && git commit -m "FMS: [describe what you built]" && git push
```

Or use the `/push` workflow.

---

## About the Client

**Franchise Marketing Systems (FMS)**
- Website: fmsfranchise.com
- WordPress staging: fmsfranchisstg.wpenginepowered.com
- Business: Franchise development consulting — helps business owners franchise their businesses
- Phone: 800-610-0292
- Email: info@fmsfranchise.com
- Founded: 2009 by Chris Conner, Atlanta GA
- Team size: 67 people / 28 franchise consultants
- Clients: 700+ franchise brands developed

The company has TWO active web environments:
1. **WordPress staging** (fmsfranchisstg.wpenginepowered.com) — the actual live site being served
2. **Next.js replica** (`localhost:3001`) — the full replica being built in this project

The Next.js replica is being built to demonstrate what a modern, fast, conversion-optimized rebuild of their site would look like — for a sales/demo pitch.
