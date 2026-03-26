---
name: auditing-site-uiux
description: Runs a full UI/UX, accessibility, performance, and SEO audit on a locally running site. Use when the user says "audit the site", "run the UI/UX check", or after completing the master template build before the first clone run. Should be run once on the master template — fixes carry into all clones.
---

# UI/UX Pro Max Audit

## When to use this skill
- Master template is built and running locally
- User says "audit the site" or "run the UX checklist"
- After significant design changes to any prospect site

> **Run on the master template once. Do not re-run on every clone.**

## Workflow

- [ ] Confirm dev server is running on localhost
- [ ] Audit accessibility
- [ ] Audit performance
- [ ] Audit interaction quality
- [ ] Audit mobile responsiveness
- [ ] Audit SEO and structured data
- [ ] Apply all fixes
- [ ] Re-confirm all checklist items pass
- [ ] Document changes made

## Instructions

### Step 1 — Start dev server
```bash
cd prospects/[slug]/site
npm run dev -- --port 3030
```
Open http://localhost:3030 in browser.

### Step 2 — Accessibility
- [ ] All interactive elements have `focus-visible` style (not just browser default outline)
- [ ] Color contrast ≥ 4.5:1 for all text (check with browser DevTools)
- [ ] All images have descriptive `alt` text (not empty, not "image")
- [ ] Form inputs have associated `<label>` elements
- [ ] Logical heading hierarchy: one `<h1>`, then `<h2>`, then `<h3>`
- [ ] No keyboard trap anywhere in the page

### Step 3 — Performance
- [ ] Hero image uses `priority` prop (Next.js Image) or `fetchpriority="high"`
- [ ] Below-fold images use lazy loading
- [ ] No render-blocking scripts in `<head>`
- [ ] PageSpeed mobile score ≥ 85 (run: https://pagespeed.web.dev/)
- [ ] Web fonts use `display: swap`

### Step 4 — Interaction Quality
- [ ] All clickable elements have `cursor: pointer`
- [ ] Buttons have `:hover` and `:active` states
- [ ] Links have `:hover` color change
- [ ] Animations respect `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
  ```
- [ ] Touch targets ≥ 44×44px on mobile (buttons, nav links, phone numbers)
- [ ] CTA button is sticky on mobile (bottom bar pattern)

### Step 5 — Mobile Responsiveness
Test at 375px, 768px, 1280px, 1440px widths.
- [ ] No horizontal scroll at any width
- [ ] Navigation collapses to hamburger at mobile
- [ ] Grid layouts collapse to single column on mobile
- [ ] Hero text is readable (not overlapping hero image text)
- [ ] Phone number is `<a href="tel:...">` — tap-to-call
- [ ] **Grid orphan check:** any grid with 4 items uses 4-col, not 3-col
- [ ] **Pill text wrapping:** all badge/pill text stays on one line at 375px

### Step 5b — Pill & Badge Contrast
For every section: do a visual squint test on each pill, badge, credential tag, or eyebrow label.
- [ ] Pill background is visibly distinct from parent section background
- [ ] Every pill has both a `background` color AND a `border`
- [ ] Light sections: pills use `var(--color-accent-light)` or white — never `var(--color-surface-tinted)` on tinted sections
- [ ] Dark/hero sections: pills use `rgba(255,255,255,0.10)` style — never a light surface color
- [ ] Pill text color has sufficient contrast against pill background

### Step 5c — Heading Typography
- [ ] No `h1` or `h2` has a single widow word alone on the last line (check at 1440px and 390px)
- [ ] All `h1` and `h2` have `text-wrap: balance` in `globals.css`

### Step 6 — SEO & Structured Data
- [ ] `<title>` tag: `[Business Name] | [Primary Service] | [City], MT`
- [ ] Meta description: 150–160 chars, includes primary keyword
- [ ] One `<h1>` per page, keyword-optimized
- [ ] Open Graph tags present (`og:title`, `og:description`, `og:image`)
- [ ] `LocalBusiness` JSON-LD schema in `<head>`:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "...", "telephone": "...", "address": {...}
  }
  ```
- [ ] `sitemap.ts` generates and returns valid XML
- [ ] Favicon renders (no 404 in console)

### Step 7 — Document changes
After all fixes, write a summary to `progress.md`:
```
## UI/UX Audit — [date]
### Fixed
- ...
### Warnings (not blocking)
- ...
### Score before/after
- Mobile PageSpeed: X → Y
```

## Resources
- PageSpeed Insights: https://pagespeed.web.dev/
- Contrast checker: https://webaim.org/resources/contrastchecker/
- Schema validator: https://validator.schema.org/
