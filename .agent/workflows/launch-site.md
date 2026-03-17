---
description: Full website launch process — from prospect identification through post-launch verification. Run this workflow for every site build.
---

# Website Launch Workflow

> **Full guide:** [`playbooks/website-launch-playbook.md`](../../playbooks/website-launch-playbook.md)
> Run through each phase in order. Never skip ahead.

---

## Phase 0 — Qualify the Prospect

1. Run lead scorer: `node tools/score-leads.js`
2. Confirm score ≥ 70, business is independently owned, owner email is findable
3. Create prospect folder: `mkdir -p prospects/[slug]`
4. Create `prospects/[slug]/research.md` with: Name, Category, Location, Phone, Website, Place ID

---

## Phase 1 — Discovery

// turbo
5. Run forensic digital audit: `node tools/digital-audit.js --slug [slug] --business "Name" --city "City"`
   - Searches for articles, social media, owner identity, press mentions, personality signals
   - Output: `prospects/[slug]/digital-audit.json` and `prospects/[slug]/owner-intel.md`

6. **[HUMAN STEP]** Read `owner-intel.md`. Do you have a picture of the owner as a real person?
   - If social profiles found: spend 3 min scrolling their last 10–15 posts — note hobbies, pets, family, tone
   - If owner name not found: check [biz.sosmt.gov](https://biz.sosmt.gov) (Montana SOS business registry)

// turbo
7. Scrape existing site: `node tools/scrape-existing-site.js --slug [slug] --url https://theirsite.com`

// turbo
8. Pull Google reviews: `node tools/scrape-reviews.js --slug [slug] --place-id "ChIJXXXX"`

9. **[HUMAN STEP]** Read `existing-copy.txt` and `google-reviews.json`. Fill in `research.md` with website audit score and key differentiator.

---

## Phase 2 — Voice Brief & Copy

// turbo
8. Generate voice brief: `node tools/generate-voice-brief.js --slug [slug]`

9. **[HUMAN STEP]** Review `voice-brief.json` — does the tone archetype feel right? Confidence ≥ 0.6?

// turbo
10. Generate copy: `node tools/generate-copy.js --slug [slug]`

11. **[HUMAN STEP]** Read `generated-copy.json` — does it sound like this specific business?

---

## Phase 3 — Build the Site

12. Select template (restaurant / lodging / professional-services / retail-boutique / auto-services / outdoor-adventure)

// turbo
13. Apply copy: `node tools/apply-copy.js --slug [slug] --template [template]`

14. Install and run locally:
    ```bash
    cd prospects/[slug]/site && npm install && npm run dev
    ```

15. **[HUMAN STEP]** Open `http://localhost:3000` and fill in the `SITE` config in `page.tsx`:
    - Real phone, email, address
    - Real business hours
    - Real service list or menu items
    - Remove any placeholder text

16. Update `layout.tsx`:
    - Fill in `LocalBusiness` JSON-LD schema with real business data
    - Update title tag and meta description
    - Remove `noindex` meta tag

---

## Phase 4 — QA Before Deploying

17. Desktop QA — check full-width layout
18. Mobile QA — Chrome DevTools → 375px, confirm nothing broken
19. Run Lighthouse:
    ```bash
    npm run build && npm run start  # then run Lighthouse in Chrome DevTools
    ```
    **Required:** Performance ≥ 90, SEO = 100, Accessibility ≥ 90
20. Validate JSON-LD: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

---

## Phase 5 — Deploy Demo to Vercel

// turbo
21. Deploy: `node tools/deploy-demo.js --slug [slug]`

22. **[HUMAN STEP]** Open the Vercel URL on your phone. Does it look right?
23. Copy demo URL into `research.md` under `## Demo URL`

---

## Phase 6 — Send Outreach

24. **[HUMAN STEP]** Verify owner's email via Apollo / LinkedIn / site contact page
25. **[HUMAN STEP]** Write the `{{GENUINE_OBSERVATION}}` — specific, personal, true
26. Fill all email variables from `email-templates/README.md`
27. Send Email 1 via Resend
28. Log in Google Sheet CRM: status = `EMAILED_1`
29. Set Day 4 reminder for Email 2 (if no reply)
30. Set Day 10 reminder for Email 3 (if no reply)

---

## Phase 7 — Client Converts (They Said Yes)

### 7a — Choose the Delivery Pathway

31. **[HUMAN STEP]** Ask the client: *"Do you have someone who manages your website?"*
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
32. In Vercel: Project → Settings → Domains → Add domain
33. In client's domain registrar — add DNS records shown by Vercel:
    - `A` record: `@ → 76.76.21.21`
    - `CNAME` record: `www → cname.vercel-dns.com`
34. Wait for DNS propagation (5–30 min). Check: [dnschecker.org](https://dnschecker.org)
35. Confirm `https://` works and SSL certificate is active
36. Update `canonical` URL in `layout.tsx` to the final domain → redeploy

### 7b — Remove Demo Elements

37. Remove `DemoBanner` from `layout.tsx`
38. Confirm `robots.txt` allows crawlers: `User-agent: * / Allow: /`

### 7c — Sitemap

39. Visit `https://domain.com/sitemap.xml` — confirm it returns XML
40. If missing: add `src/app/sitemap.ts` (see playbook Phase 7.3) → redeploy

---

## Phase 8 — Google Search Console

41. Go to [search.google.com/search-console](https://search.google.com/search-console)
42. Add property: URL prefix → `https://domain.com`
43. Verify via HTML meta tag:
    - Copy the `<meta name="google-site-verification" content="XXXX">` tag
    - Add to `layout.tsx` inside `<head>` → redeploy → verify in GSC
44. Submit sitemap: Sitemaps → Enter `sitemap.xml` → Submit
45. Request indexing: search `https://domain.com` in GSC top bar → Request Indexing

---

## Phase 9 — Google Analytics 4

46. Go to [analytics.google.com](https://analytics.google.com)
47. Admin → Create Property → enter business name, Mountain Time, USD
48. Choose Web → enter domain → Create stream → copy `G-XXXXXXXXXX` Measurement ID
49. Add GA4 snippet to `layout.tsx` (see playbook Phase 7.5) → redeploy
50. Verify: visit live site, check GA4 Realtime — you should see yourself

---

## Phase 10 — Client Handoff

51. Prepare handoff doc with: live URL, domain login reminder, Vercel access, GSC access, GA4 access, how to update content, how to reach you
52. Share GSC access with client's Google account
53. Share GA4 access with client's Google account

---

## Phase 11 — 30-Day Check (set a calendar reminder)

54. Search Console: any crawl errors or unindexed pages?
55. Lighthouse re-run: scores still ≥ 90?
56. Test phone number — does it still work?
57. `site:domain.com` in Google — is it indexed?
58. GA4 — is traffic showing up?
59. Mobile visual check — still looks good?
