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

## Current State (as of 2026-03-31)

**76 pages are built.** All nav links resolve. SEO metadata is in place on all content pages. The site is ready for a production build and Vercel deployment.

See `build-plan.md` for the complete page inventory and route alias map.

---

## Pages Already Built — Do NOT Rebuild

All pages are built. Do not recreate any existing routes. Check `build-plan.md` for the full list.

Key routes that are **redirects** (not content pages — this is correct):
- `/about` → `/about-us`
- `/about-us/blog` → `/blog`
- `/learn/faqs` → `/learn/faq`
- `/learn/industry-facts` → `/learn/franchise-industry-facts`
- `/learn/why-franchising` → `/learn/why-franchise`
- `/learn/resources/state-guidelines` → `/learn/state-guidelines`
- `/learn/resources/franchising-guidelines` → `/learn/resources`
- `/services/franchise-business-plans` → `/services/franchise-business-plan`
- `/services/marketing-your-franchise` → `/services`
- `/industries/home-based-franchises` → `/industries/home-based`

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

1. Every page = a `page.tsx` (server component with `export const metadata`) + optional `*Client.tsx` (client component with `'use client'` where needed)
2. **Exception:** `'use client'` pages (ROI calculator, readiness assessment) use a sibling `layout.tsx` to export metadata — do not break this pattern
3. All navigation links use `import Link from 'next/link'`
4. Hover effects are applied via `onMouseEnter` / `onMouseLeave` on the element's style object
5. No external UI libraries — pure HTML/TSX + inline styles only
6. YouTube embeds use `<iframe>` with `src="https://www.youtube.com/embed/VIDEO_ID"`, `allowFullScreen`, `width="100%"`, `height="100%"`, wrapped in an aspect-ratio container

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

---

## What Remains (Low Priority)

1. **Copy `About 2.mp4`** → `/public/about-2.mp4` (manual step, user must do this)
2. **Real blog posts** — `/blog/[slug]` dynamic template exists; populate with real articles if desired
3. **`npm run build`** — run a production build to catch any TypeScript errors before Vercel deploy
4. **`vercel deploy --prod`** — deploy from `prospects/fms-franchise/site/`

---

## Deployment Flow (When Ready)

1. Run `npm run build` from within `prospects/fms-franchise/site/` and confirm no build errors
2. Deploy to Vercel: `vercel deploy --prod` from same directory
3. Update `build-plan.md` with the live URL

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
