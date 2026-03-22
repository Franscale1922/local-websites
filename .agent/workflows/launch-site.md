---
description: Full website launch process — from prospect identification through post-launch verification. Run this workflow for every site build.
---

# Website Launch Workflow

> **Full guide:** [`playbooks/website-launch-playbook.md`](../../playbooks/website-launch-playbook.md)
> Run through each phase in order. **Never skip ahead. Hard gates are non-negotiable.**

---

## 📋 TWO-STAGE OVERVIEW

Every website build has two distinct stages with different inputs, goals, and workflows.

| | Stage 1 — Demo (this workflow) | Stage 2 — Personalization ([client-intake.md](./client-intake.md)) |
|---|---|---|
| **Trigger** | Prospect identified | Client says yes (CONVERTED) |
| **Input** | Public information only | Owner directly |
| **Goal** | Close the sale | Deliver the production site |
| **Output** | Live demo URL | Live production site on their domain |
| **Flexibility** | Structured — follows this workflow | Flexible — adapts to whatever the owner provides |

This file covers **Stage 1 only.** When the client converts, switch to the `/client-intake` workflow.

---

## ⚠️ HARD RULES — Read Before Starting

> These apply to every build, no exceptions.

1. **Multi-page is the default.** Every demo site must be a full multi-page website unless the client's *existing* live site is a single page. The goal of every demo is: *"Aside from your personal touches, this site is virtually complete and ready to deploy."* A single-page demo never achieves that.

2. **LLM Research Gate is mandatory.** You must complete Phase 1.5 (LLM Research) before writing a single line of page code. No exceptions. The research informs architecture decisions, section priorities, and competitive positioning.

3. **Standard page set for every professional-services build:**
   - `/` — Homepage (hero, trust, intro, service summary, reviews, CTA)
   - `/services` — Services overview (all service categories)
   - `/services/[slug]` — Individual service pages (one per core service)
   - `/about` — Full about page (team, awards, story, credentials)
   - `/service-area` — Full service area page (counties, cities, map)
   - `/contact` — Standalone contact page (form, phone, map)
   - `/faq` — FAQ page (full accordion, by category if needed)

   Add more pages as the industry warrants (e.g. `/gallery`, `/projects`, `/blog`).

4. **🎨 BRAND COLORS ARE NON-NEGOTIABLE — USE THE CLIENT'S COLORS, ALWAYS.**
   The client has an emotional connection to their existing brand. A site that looks like a completely different company reduces conversion. Before writing a single CSS variable:
   - Screenshot their existing website, logo, social media, or any public-facing asset
   - Extract the actual hex colors (primary, secondary, accent) — use a color picker if needed
   - Use those exact colors as your design system base
   - **Never invent a palette.** Generic navy + orange, navy + yellow, blue + white are not brand colors — they are defaults. Defaulting is not acceptable.
   - If the client has NO existing brand whatsoever (no site, no logo, no social): note this explicitly, then choose colors based on industry feel AND document your reasoning in `build-plan.md` for human review.

5. **🔢 STATISTICS MUST BE LARGE, COLORFUL, AND IMPRESSIVE — NO EXCEPTIONS.**
   Callout stats (years in business, units sold, HP range, locations, etc.) are among the highest-converting elements on any B2B or service page. They must be designed to stop the eye:
   - **Number size:** minimum `3.5rem`, ideally `4–5rem` or larger. Never smaller.
   - **Number color:** use the primary brand accent color — never white-on-dark or grey-on-white
   - **Labels:** `0.75rem+`, uppercase, high contrast — never muted or faded
   - **Never blend in.** If the stat could be missed on a quick scroll, it is wrong. Make it impossible to ignore.

6. **🎯 ICONS MUST BE SIZED AND STYLED TO HAVE VISUAL WEIGHT — NO TINY EMOJI.**
   Icons that are undersized or unstyled read as clipart and undermine credibility. Every icon used on the site must follow these rules:
   - **Container minimum size:** 72px × 72px for standalone icons (audience, category, feature). 56px for card/inline use.
   - **Icon size inside container:** minimum 2rem for standalone, 1.8rem for card use
   - **Container treatment:** must use a colored background — brand-tinted (e.g. `rgba(primary, 0.10)`), solid brand color, or gradient. A plain grey/white background is not acceptable.
   - **Hover state:** icons must respond to hover — scale transform, color fill, or shadow glow minimum
   - **Color on hover:** the container should fill with the brand primary color on hover, icon becomes white

7. **🤖 GENERATE CUSTOM AI ILLUSTRATIONS — NEVER USE EMOJI AS ICONS.**
   Emoji render as generic OS-level clipart and immediately signal a low-effort, template-built site. They destroy credibility with B2B clients. Every icon on the site must be a custom AI-generated illustration:
   - **Use the `generate_image` tool** to create all section icons before building any page that contains icon sets
   - **Style prompt formula:** `"A custom flat cartoon illustration of [SUBJECT], clean modern bold graphic style, [PRIMARY COLOR] and [SECONDARY COLOR] color palette, [INDUSTRY] feel, white background, square format, centered composition, no text, high quality vector-style illustration"`
   - Generate icons in parallel (all in one batch) — do not generate one at a time
   - Copy generated PNGs to `public/icons/` in the site directory
   - Reference via `<img src="/icons/[name].png" />` — never render emoji strings directly in JSX
   - Each icon must have descriptive `alt` text for accessibility
   - Minimum image resolution: 512×512 (the generator default is sufficient)
   - Icons should all share a consistent style and color palette — generate all icons in a single session so they feel like a cohesive set

---

## Phase 0 — Qualify the Prospect

1. Run lead scorer: `node tools/score-leads.js`
2. Confirm score ≥ 70, business is independently owned, owner email is findable
3. Create prospect folder: `mkdir -p prospects/[slug]`
4. Create `prospects/[slug]/research.md` from `templates/research-template.md`
5. Update CRM: `node tools/update-crm.js --slug [slug] --status DISCOVERED`

---

## Phase 1 — Discovery

// turbo
6. Run forensic digital audit: `node tools/digital-audit.js --slug [slug] --business "Name" --city "City"`
   - Searches for articles, social media, owner identity, press mentions, personality signals
   - Output: `prospects/[slug]/digital-audit.json` and `prospects/[slug]/owner-intel.md`

7. **[HUMAN STEP]** Read `owner-intel.md`. Do you have a picture of the owner as a real person?
   - If social profiles found: spend 3 min scrolling their last 10–15 posts — note hobbies, pets, family, tone
   - If owner name not found: check state SOS business registry

// turbo
8. Scrape existing site copy: `node tools/scrape-existing-site.js --slug [slug] --url https://theirsite.com`
   Output: `prospects/[slug]/existing-copy.txt`

9. **[AGENT STEP]** Full site inventory — browse the existing site and populate `## Site Inventory` in `research.md`:
   - List every page URL and its H1/page title
   - Map the navigation structure (top-level items, dropdowns)
   - List all CTAs and what they link to (phone, form, booking tool, etc.)
   - Identify every third-party integration (booking system, payment link, live chat, maps embed, review badges)
   - List all social profiles linked in header/footer
   - Note existing brand colors (use browser color picker or page source) and fonts
   - Note any awards, certifications, or trust badges displayed
   - Record: single-page or multi-page? How many pages total?

   **Edge case — no existing website:** Set site inventory to "No existing website." Default to full standard page set. Demo scope is even more important when they have nothing.

   **Edge case — existing site is behind a login or paywall:** Note it. Scrape whatever is publicly accessible. Flag the gap.

// turbo
10. Pull Google reviews: `node tools/scrape-reviews.js --slug [slug] --place-id "ChIJXXXX"`
    Output: `prospects/[slug]/google-reviews.json`

11. **[HUMAN STEP]** Fill in `research.md` — audit score, key differentiator, existing site architecture confirmed.

12. Update CRM: `node tools/update-crm.js --slug [slug] --status AUDITED`

---

## Phase 1.5 — LLM Research Gate 🛑 HARD STOP

> **Do not proceed to Phase 1.75 until all LLM research is received and logged.**

This phase runs before any design or copy work. Its output shapes the architecture, section decisions, and competitive positioning of the site.

13. **[AGENT STEP]** Generate the LLM research prompt:
    ```
    See: .agent/llm-research-prompt.md
    Fill in: [INDUSTRY], [BUSINESS_TYPE], [LOCATION], [PROSPECT_NAME]
    Output goes to: prospects/[slug]/llm-research.md
    ```

14. **[HUMAN STEP]** Copy the generated prompt and run it in **all four** of the following:
    - ChatGPT (GPT-4o or latest)
    - Claude (Sonnet or latest)
    - Perplexity (with web search enabled)
    - Gemini (Advanced)

15. **[HUMAN STEP]** Paste each model's full response into `prospects/[slug]/llm-research.md` under the appropriate section header.

16. **[AGENT STEP]** Read `llm-research.md` and extract a synthesis. Cross-reference with the site inventory from Phase 1:
    - Top must-have structural sections for this industry (vs. what currently exists)
    - Design/UX patterns from award-winning sites
    - Industry-specific trust signals
    - Competitor weaknesses to exploit
    - Recommended page structure — start from standard set, expand based on LLM research
    - Record synthesis in `research.md` under `## LLM Research Synthesis`

---

## Phase 1.75 — Build Plan Gate 🛑 HARD STOP

> **Do not write a single line of page code until the build plan is approved by the user.**

17. **[AGENT STEP]** Copy `templates/build-plan-template.md` → `prospects/[slug]/build-plan.md`

18. **[AGENT STEP]** Fill in every section of `build-plan.md` using:
    - `research.md` (site inventory, audit, owner intel)
    - `llm-research.md` (industry patterns, competitor gaps)
    - `google-reviews.json` (tone and trust signal direction)
    - `voice-brief.json` (once generated in Phase 2)

    The build plan must specify:
    - Every page to be built (route + rationale)
    - Homepage section order (with rationale)
    - What to preserve from the existing site
    - Third-party integrations to replicate
    - Brand direction (colors, fonts, tone archetype)
    - Scope tradeoffs (what is excluded from Stage 1 and why)

19. **[HUMAN STEP]** Review `prospects/[slug]/build-plan.md`. Approve or request changes.
    - **Approved?** → Proceed to Phase 2
    - **Changes needed?** → Agent updates `build-plan.md`, re-present for approval
    - Do not begin building until you explicitly say "approved" or equivalent

---

## Phase 2 — Voice Brief & Copy

// turbo
14. Generate voice brief: `node tools/generate-voice-brief.js --slug [slug]`

15. **[HUMAN STEP]** Review `voice-brief.json` — does the tone archetype feel right? Confidence ≥ 0.6?

// turbo
16. Generate copy: `node tools/generate-copy.js --slug [slug]`

17. **[HUMAN STEP]** Read `generated-copy.json` — does it sound like this specific business?

---

## Phase 3 — Build the Site

18. Select template (restaurant / lodging / professional-services / retail-boutique / auto-services / outdoor-adventure)

19. **Confirm page architecture** against the standard page set in Hard Rules above. Add any industry-specific pages flagged in LLM Research Synthesis.

19a. **🎨 SET BRAND COLORS BEFORE ANY CSS — HARD STOP.**
    Before touching `globals.css` or any design file:
    - Pull up the client's existing website screenshot (captured in Phase 1, Step 9)
    - Identify: primary color (dominant nav/header), secondary color (accent/CTA), background treatment
    - Convert to hex. If the existing site has no clear palette, check their logo, Google Business profile cover photo, or social media header
    - Open `globals.css` and set `--color-primary`, `--color-secondary`, `--color-accent` to the extracted values
    - Document the color decisions in `build-plan.md` under `## Brand Direction`
    - ⛔ Do not proceed to any page builds until this is locked in

// turbo
20. Apply copy: `node tools/apply-copy.js --slug [slug] --template [template]`

21. Install and run locally:
    ```bash
    cd prospects/[slug]/site && npm install && npm run dev
    ```

22. **[HUMAN STEP]** Open `http://localhost:3000` and fill in the `SITE` config in each page file:
    - Real phone, email, address
    - Real business hours
    - Real service list — individual service pages must each have their own content
    - Remove any placeholder text

23. Update `layout.tsx`:
    - Fill in `LocalBusiness` JSON-LD schema with real business data
    - Update title tag and meta description
    - Remove `noindex` meta tag

24. **[HUMAN STEP]** Verify all routes render:
    - Visit every page URL in the browser
    - Check nav links work on all pages
    - Confirm no 404s

---

## Phase 4 — QA Before Deploying

25. Desktop QA — check full-width layout on all pages
26. Mobile QA — Chrome DevTools → 375px, confirm nothing broken on all pages
27. Run Lighthouse:
    ```bash
    npm run build && npm run start  # then run Lighthouse in Chrome DevTools
    ```
    **Required:** Performance ≥ 90, SEO = 100, Accessibility ≥ 90
28. Validate JSON-LD: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
29. Confirm nav is present and consistent across all pages

---

## Phase 5 — Deploy Demo to Vercel

// turbo
30. Deploy: `node tools/deploy-demo.js --slug [slug]`

31. **[HUMAN STEP]** Open the Vercel URL on your phone. Does it look right on every page?
32. Copy demo URL into `research.md` under `## Demo URL`

---

## Phase 6 — Send Outreach

33. **[HUMAN STEP]** Verify owner's email via Apollo / LinkedIn / site contact page
34. **[HUMAN STEP]** Write the `{{GENUINE_OBSERVATION}}` — specific, personal, true
35. Fill all email variables from `email-templates/README.md`
36. Send Email 1 via Resend
37. Log in Google Sheet CRM: status = `EMAILED_1`
38. Set Day 4 reminder for Email 2 (if no reply)
39. Set Day 10 reminder for Email 3 (if no reply)

---

## Phase 7 — Client Converts (They Said Yes) → Switch to /client-intake

> ⚠️ **Stage 1 ends here. Stage 2 begins.** Run the `/client-intake` workflow for all post-sale work. The steps below cover the technical launch sequence only — the intake, personalization, and owner review loop are in `client-intake.md`.

### 7a — Choose the Delivery Pathway

40. **[HUMAN STEP]** Run `/client-intake` first to gather owner information before making any production changes.

41. **[HUMAN STEP]** Ask the client: *"Do you have someone who manages your website?"*
    - **Pathway A — Self-managed or you host (retainer):** Continue to 7b
    - **Pathway B — Hand-off to their existing developer:**
      ```bash
      # For Vercel/Netlify-capable developers (most):
      node tools/package-site.js --slug [slug] --mode zip

      # For cPanel/FTP/shared hosting:
      node tools/package-site.js --slug [slug] --mode static
      ```
      Send `prospects/[slug]/deliverable/` folder to their team. You're done with technical work.
      Skip to Phase 10 (handoff doc).

### 7b — Domain Setup (Pathway A only)
41. In Vercel: Project → Settings → Domains → Add domain
42. In client's domain registrar — add DNS records shown by Vercel:
    - `A` record: `@ → 76.76.21.21`
    - `CNAME` record: `www → cname.vercel-dns.com`
43. Wait for DNS propagation (5–30 min). Check: [dnschecker.org](https://dnschecker.org)
44. Confirm `https://` works and SSL certificate is active
45. Update `canonical` URL in `layout.tsx` to the final domain → redeploy

### 7b — Remove Demo Elements

46. Remove `DemoBanner` from `layout.tsx`
47. Confirm `robots.txt` allows crawlers: `User-agent: * / Allow: /`

### 7c — Sitemap

48. Visit `https://domain.com/sitemap.xml` — confirm it returns XML
49. If missing: add `src/app/sitemap.ts` (see playbook Phase 7.3) → redeploy

---

## Phase 8 — Google Search Console

50. Go to [search.google.com/search-console](https://search.google.com/search-console)
51. Add property: URL prefix → `https://domain.com`
52. Verify via HTML meta tag:
    - Copy the `<meta name="google-site-verification" content="XXXX">` tag
    - Add to `layout.tsx` inside `<head>` → redeploy → verify in GSC
53. Submit sitemap: Sitemaps → Enter `sitemap.xml` → Submit
54. Request indexing: search `https://domain.com` in GSC top bar → Request Indexing

---

## Phase 9 — Google Analytics 4

55. Go to [analytics.google.com](https://analytics.google.com)
56. Admin → Create Property → enter business name, timezone, USD
57. Choose Web → enter domain → Create stream → copy `G-XXXXXXXXXX` Measurement ID
58. Add GA4 snippet to `layout.tsx` (see playbook Phase 7.5) → redeploy
59. Verify: visit live site, check GA4 Realtime — you should see yourself

---

## Phase 10 — Client Handoff

60. Prepare handoff doc with: live URL, domain login reminder, Vercel access, GSC access, GA4 access, how to update content, how to reach you
61. Share GSC access with client's Google account
62. Share GA4 access with client's Google account

---

## Phase 11 — 30-Day Check (set a calendar reminder)

63. Search Console: any crawl errors or unindexed pages?
64. Lighthouse re-run: scores still ≥ 90?
65. Test phone number — does it still work?
66. `site:domain.com` in Google — is it indexed?
67. GA4 — is traffic showing up?
68. Mobile visual check — still looks good on all pages?
