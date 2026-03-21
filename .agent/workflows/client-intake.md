---
description: Stage 2 post-sale workflow — client intake, personalization, and production launch. Run this after CONVERTED status is set and the demo is approved.
---

# Client Intake Workflow (Stage 2)

> **Full reference:** [`playbooks/website-launch-playbook.md`](../../playbooks/website-launch-playbook.md) · Intake template: [`templates/client-intake-template.md`](../../templates/client-intake-template.md)
>
> Stage 2 begins the moment the client says yes. Stage 1 was built from public information. Stage 2 is built from the owner. Every client will bring a unique combination of information, assets, and requests. This workflow is intentionally flexible — your job is to ingest whatever is provided and translate it into changes.

---

## ⚠️ HARD RULES — Stage 2 Edition

1. **Do not touch the live demo URL during Stage 2 work.** Build changes on the local dev server. Only redeploy when a coherent batch of changes is ready.

2. **The intake document gates everything.** Do not start making edits until `prospects/[slug]/client-intake.md` has at least Sections 1–6 populated. Partial information = wrong assumptions = rework.

3. **The owner's language beats AI-generated copy every time.** If they give you words, use them. Do not paraphrase or improve their phrasing without asking.

4. **Every change gets logged.** Section 10 of `client-intake.md` is a running change log. Fill it in as you go.

5. **Batch deployments, not continuous.** Don't redeploy after every individual change. Group related changes (e.g. "all brand/color updates") and deploy as a set.

---

## Phase 1 — Intake Setup

1. Copy `templates/client-intake-template.md` → `prospects/[slug]/client-intake.md`

2. Update CRM: `node tools/update-crm.js --slug [slug] --status CONVERTED`

3. **[HUMAN STEP]** Contact the owner to schedule or begin the intake conversation. Options:
   - Live call (agent listens via transcript)
   - Owner fills out intake doc directly
   - Owner sends assets + bullet points (agent organizes them into the intake doc)
   - Any combination of the above — accept whatever format the owner provides

4. **[AGENT STEP]** Open the demo at `http://localhost:3000` — walk through every page and compare it against the intake document. For each section of the intake, note any contradictions between what's on the demo and what the owner has provided.

---

## Phase 2 — Asset Collection

5. **[HUMAN STEP]** Collect all physical assets from the owner. Create `prospects/[slug]/assets/` folder:
   ```
   prospects/[slug]/assets/
   ├── logo/          ← SVG or PNG, any variant they have
   ├── photos/        ← all business/team/work photos
   ├── docs/          ← any PDFs, service documents, licensing docs to link
   └── video/         ← any video files or YouTube/Vimeo links
   ```

6. **[AGENT STEP]** Audit what was received:
   - Logo: format OK? Need to convert to SVG or WebP?
   - Photos: resolution acceptable for hero/service images? (minimum 1200px wide)
   - Any photos needing optimization before use? (run through `next/image` — it handles most cases)

   **Edge case — no logo provided:** Flag this immediately. Options: (a) use a styled text wordmark, (b) ask owner to create one via Canva or provide their designer contact, (c) scope logo design as an add-on. Do not auto-generate a logo without owner approval.

   **Edge case — photos are poor quality:** Tell the owner honestly. Offer to supplement with Unsplash photos matched to their location and industry as placeholders, with a plan to swap real photos in as they become available.

---

## Phase 3 — Pre-Build Change Plan

7. **[AGENT STEP]** Read the full `client-intake.md`. Generate a prioritized change list:

   **Priority order:**
   - P0 — Errors or inaccuracies (wrong phone, wrong hours, wrong services)
   - P1 — Owner-flagged "must change" items
   - P2 — New pages or integrations
   - P3 — Visual updates (colors, fonts, photos)
   - P4 — Copy refinements and tone adjustments
   - P5 — New features requested but lower priority

8. **[HUMAN STEP]** Review the change list. Confirm scope and priority before any edits begin.

   **Edge case — owner scope creep:** If the owner is requesting changes significantly beyond the agreed project scope (new features, additional pages, custom functionality), flag it now. Have a scope conversation before building. Undocumented scope creates billing disputes later.

---

## Phase 4 — Build Stage 2 Changes

9. `cd prospects/[slug]/site && npm run dev` — confirm local server is running

10. Work through the change list by priority. For each change:
    - Make the edit locally
    - Verify it renders correctly in browser
    - Log the change in Section 10 of `client-intake.md`

    **Key areas to update during Stage 2:**

    ### Business Identity
    - [ ] Legal name exact match everywhere (nav, hero, footer, JSON-LD, meta title, Open Graph)
    - [ ] Tagline if provided — use in hero subheadline or footer
    - [ ] License/certification numbers — add to footer and About page
    - [ ] Insurance statement — update from generic to specific coverage if owner provided it
    - [ ] Awards not in the demo — add to About page and/or hero trust bar

    ### Services
    - [ ] Rename any services to owner's preferred terminology
    - [ ] Remove any services they don't offer
    - [ ] Add new service pages for any services not in the demo
    - [ ] Update service descriptions with owner's language where provided

    ### Team
    - [ ] Add staff section to About page if team info provided
    - [ ] Replace any placeholder names with real names + roles
    - [ ] Add owner bio in their own words
    - [ ] Replace stock/placeholder team photo with real photos

    ### Brand Assets
    - [ ] Swap in real logo (update `public/` and all `<Image>` logo references)
    - [ ] Update brand colors in `globals.css` if owner prefers different palette
    - [ ] Replace Unsplash/placeholder photos with owner-provided real photos
    - [ ] Add video to hero if provided (set as background video or section embed)

    ### Connectivity & Integrations
    - [ ] Verify all CTAs link to correct confirmed URLs (not demo placeholders)
    - [ ] Embed booking system if owner uses one (paste embed code exactly as provided)
    - [ ] Add payment link if relevant
    - [ ] Add live chat widget if requested (Facebook Messenger, Tidio, etc.)
    - [ ] Verify Google Maps embed uses correct Place ID
    - [ ] Check all social links are correct and active

    ### New Pages
    - [ ] Build any new pages requested in Section 7 of intake
    - [ ] Add new routes to `sitemap.ts`
    - [ ] Add new routes to nav (and mobile nav)
    - [ ] Confirm no orphan pages (every new page reachable from navigation)

    **Edge case — owner requests a feature that requires a backend (e.g. contact form that emails them, online booking with calendar sync):** Flag this. Static Next.js doesn't support server-side logic without a backend. Options: (a) use Formspree/Resend for form submissions, (b) embed their existing booking system, (c) scope backend work as a separate add-on. Document the decision.

---

## Phase 5 — Owner Review Round

11. **[AGENT STEP]** After completing all P0–P2 changes, deploy a staging version:
    ```bash
    node tools/deploy-demo.js --slug [slug]
    ```
    Share the Vercel URL with the owner for review.

12. **[HUMAN STEP]** Walk the owner through the updated demo. Capture all feedback in Section 9 of `client-intake.md`.

13. **[AGENT STEP]** Process the review feedback:
    - Categorize: is each piece of feedback a correction, a preference, or a scope addition?
    - Corrections → fix immediately (P0)
    - Preferences → implement and log
    - Scope additions → flag for billing conversation before implementing

14. Repeat Phase 5 until owner approves. Typical: 1–2 review rounds.

    **Edge case — owner keeps adding requests across rounds:** This is normal. Keep logging everything in the change log. If a third review round starts, have a scope conversation — is this still the original project or has it become something larger?

---

## Phase 6 — Production Launch

15. Follow Phases 7–10 of the `/launch-site` workflow:
    - Domain setup (DNS records, SSL verification)
    - Remove `DemoBanner` and `noindex` tag
    - Update `canonical` URL → redeploy
    - Verify `sitemap.xml` resolves
    - Google Search Console setup
    - Google Analytics 4 setup
    - Client handoff document

16. **[AGENT STEP]** Run a final content audit before going live:
    - No placeholder text anywhere
    - All phone numbers are click-to-call (`tel:` links)
    - All form fields have correct labels and submit correctly
    - All social links open in new tab and go to correct profiles
    - JSON-LD schema reflects final production data (not demo placeholders)
    - Lighthouse: Performance ≥ 90, SEO = 100

17. Set a 30-day post-launch calendar reminder → follow Phase 11 of `/launch-site`

---

## Handling Difficult Owner Situations

> Real edge cases from client work. Prepare for these.

**Owner is unresponsive after converting:**
- Send a structured email with a clear deadline: "I need [assets / intake info] by [date] to hold your launch timeline."
- If unresponsive > 2 weeks after payment: send a formal project pause notice. Document in `client-intake.md`.

**Owner has strong opinions about something the research says is a bad idea:**
- Respect it. This is their business. Note your recommendation in `client-intake.md`, implement their preference, and move on.
- Exception: if their request would harm SEO or performance (e.g. "I want an auto-playing music embed") — explain the impact clearly, document their override.

**Owner wants to manage the site themselves after launch:**
- Walk them through Vercel's dashboard. Show them how to contact you for edits.
- Do NOT give them direct GitHub or code access unless they are technical. Direct code changes without understanding the system will break things.

**Owner's existing domain is at a registrar you're not familiar with:**
- Every major registrar has the same two DNS record types (A record + CNAME). The specific UI differs but the values are identical. Use Vercel's domain setup docs for the exact values to enter.
- If they can't find where to add DNS records: Google "[Registrar name] add DNS record" — the registrar's own help docs walk through it.

**Owner has a site with active SEO rankings they don't want to lose:**
- Preserve URL structure where possible — don't change slugs without a redirect plan
- Do a 301 redirect audit: any URL that existed on the old site should redirect to its equivalent on the new site
- Submit the new sitemap to Google Search Console immediately after launch
- Set a 7-day follow-up to check Search Console for crawl errors
