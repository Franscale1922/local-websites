# Website Launch Playbook
## From Prospect Identified → Live Site → Post-Launch

> **Purpose:** A complete, step-by-step checklist so neither Kelsey nor an agent ever has to remember what comes next. Run through this document in order for every single site. Check off each item as it's done.
>
> **Status key:** `[ ]` not done · `[/]` in progress · `[x]` done

---

## Phase 0 — Prospect Qualification

> Before building anything, confirm this is worth building.

- [ ] **Business passes lead scoring** — score ≥ 70 using `score-leads.js`
- [ ] **Website is genuinely bad** — old design, slow load, or mobile-broken (audit with `audit-urls.js`)
- [ ] **Business is independently owned** — not a franchise, chain, or national brand
- [ ] **Business has Google presence** — at least 15+ reviews, verifiable location
- [ ] **Owner is findable** — name + email available or findable via Apollo/Clay
- [ ] **Create prospect folder:** `mkdir -p prospects/[slug]`
- [ ] **Create `research.md`** — fill in: Business Name, Category, Location, Owner, Website, Phone, Place ID

**Tool:** `node tools/score-leads.js`
**Output:** `prospects/[slug]/research.md` (started)

---

## Phase 1 — Discovery & Research

> Gather all available intelligence about the business before writing a word.

- [ ] **Scrape existing site** — extract all readable content from their current website

  ```bash
  node tools/scrape-existing-site.js --slug [slug] --url https://theirsite.com
  ```
  Output: `prospects/[slug]/existing-copy.txt`

- [ ] **Pull Google reviews** — fetch business details + top reviews via Places API

  ```bash
  node tools/scrape-reviews.js --slug [slug] --place-id "ChIJXXXXXXXXXXXX"
  ```
  How to find Place ID: search on [Google Maps](https://maps.google.com) → extract from URL, or use [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)

  Output: `prospects/[slug]/google-reviews.json`

- [ ] **Fill in `research.md`** — complete the business overview, website audit score, and key differentiator based on what you found

**Quality gate:** Do you understand this business well enough to write like them? If not, spend 5 more minutes on their Google listing, Facebook, and any press coverage.

---

## Phase 2 — Voice Brief & Copy Generation

> AI generates the brand voice and all website copy.

- [ ] **Generate Voice Brief** — Claude analyzes reviews + existing copy to define tone archetype and brand voice

  ```bash
  node tools/generate-voice-brief.js --slug [slug]
  ```
  Output: `prospects/[slug]/voice-brief.json` + updates `research.md`

- [ ] **Review Voice Brief** — open `voice-brief.json` and verify:
  - Tone archetype feels accurate (Warm Neighbor / Rugged Expert / Polished Pro / Playful Local)
  - Best customer quote actually captures something real
  - Confidence score ≥ 0.6 (if lower, add more research before proceeding)
  - Edit manually if anything is off

- [ ] **Generate website copy** — Claude writes all headlines, sub-copy, about sections, CTAs using the Voice Brief

  ```bash
  node tools/generate-copy.js --slug [slug]
  ```
  Output: `prospects/[slug]/generated-copy.json`

- [ ] **Review generated copy** — read every piece. Ask: "Would the owner of this specific business actually say this?" If anything sounds generic or corporate, rewrite it.

---

## Phase 3 — Template Selection & Build

> Pick the right template, apply the copy, get it running locally.

### 3.1 — Choose the right template

| Template | Use for |
|---|---|
| `outdoor-adventure` | Fishing guides, rafting, hiking, hunting outfitters |
| `restaurant` | Restaurants, cafes, bars, food trucks, bakeries |
| `lodging` | Hotels, B&Bs, cabins, vacation rentals, hostels |
| `professional-services` | Dental, medical, legal, financial, chiropractic |
| `retail-boutique` | Shops, galleries, boutiques, specialty retail |
| `auto-services` | Auto shops, tire stores, body shops, dealerships |

- [ ] **Apply copy to template:**

  ```bash
  node tools/apply-copy.js --slug [slug] --template [template-name]
  ```
  Output: `prospects/[slug]/site/` — a complete Next.js project

### 3.2 — Customize the site

- [ ] **Install dependencies** and start local dev server:

  ```bash
  cd prospects/[slug]/site && npm install && npm run dev
  # Site is live at http://localhost:3000
  ```

- [ ] **Update the `SITE` config object** in `src/app/page.tsx`:
  - Business name, logo, tagline
  - Real phone, email, address
  - Real hours of operation
  - Real services/menu items (not placeholders)
  - Geo coordinates (for JSON-LD schema)
  - Google Place ID (for reviews link)

- [ ] **Update `layout.tsx`** — fill in the `LocalBusiness` JSON-LD schema:
  - `"name"` → actual business name
  - `"telephone"` → real phone number
  - `"address"` → real street address, city, postal code
  - `"openingHoursSpecification"` → real hours
  - `"aggregateRating"` → rating and review count from Google
  - `"url"` → will be their final domain (can set now even if not live)

- [ ] **Update `layout.tsx` metadata:**
  ```tsx
  export const metadata: Metadata = {
    title: 'Business Name | Service Type | City, MT',
    description: '150–160 char description with primary keyword.',
    alternates: { canonical: 'https://finaldomain.com' },
  };
  ```
  Remove the `<meta name="robots" content="noindex, nofollow" />` line — that was demo-only.

### 3.3 — SEO & Quality Checks

- [ ] **Title tag** — under 60 characters, primary keyword in first half
- [ ] **Meta description** — 150–160 characters, reads like a reason to click
- [ ] **H1 tag** — exactly one per page, contains business name or primary keyword
- [ ] **Alt text** — every `<img>` has a descriptive `alt=""` attribute
- [ ] **Phone numbers** — all formatted as `tel:+14065550100` links
- [ ] **Address** — consistent format in nav, footer, and JSON-LD schema
- [ ] **Google Maps embed** — add if there's a contact/location section
- [ ] **DemoBanner props** — fill in real `businessName`, `offerPrice`, `contactEmail`, `contactPhone`

---

## Phase 4 — Pre-Launch QA

> Run through this locally before spending any time on deployment.

### 4.1 — Visual QA

- [ ] **Desktop** — browser at full width, everything renders as intended
- [ ] **Mobile** — Chrome DevTools → mobile breakpoint (375px) — no overflow, no broken layout
- [ ] **Tablet** — check 768px and 1024px breakpoints
- [ ] **Dark mode** — briefly check if OS dark mode breaks anything
- [ ] **All CTAs work** — every button and link either scrolls to a section or opens a tel/mailto

### 4.2 — Performance QA

- [ ] **Run Lighthouse locally:**
  ```bash
  # In a new tab:
  npm run build && npm run start
  # Then in Chrome: DevTools → Lighthouse → Analyze page load
  ```
  Target scores before deploying:
  - ✅ Performance ≥ 90
  - ✅ Accessibility ≥ 90
  - ✅ Best Practices ≥ 90
  - ✅ SEO = 100

  If Performance < 90:
  - Check for unoptimized images (use `next/image` not `<img>` for photos)
  - Check for render-blocking fonts
  - Verify `next.config.mjs` image optimization is enabled

- [ ] **Validate JSON-LD schema:** paste the page source at [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] **Test Open Graph tags:** paste the URL at [opengraph.xyz](https://www.opengraph.xyz/) after deployment

---

## Phase 5 — Vercel Deployment

> Deploy the demo site so it has a real, shareable URL.

### 5.1 — First-time Vercel setup (once per machine)

- [ ] Install Vercel CLI if not already installed:
  ```bash
  npm install -g vercel
  ```
- [ ] Authenticate:
  ```bash
  vercel login
  # Choose GitHub as the auth method
  ```

### 5.2 — Deploy the demo

- [ ] **Auto-deploy using the pipeline script:**
  ```bash
  node tools/deploy-demo.js --slug [slug]
  ```
  This does: `vercel --prod` → captures URL → writes it back to `research.md`

  **Manual alternative:**
  ```bash
  cd prospects/[slug]/site
  vercel --prod --name [slug]-demo
  # Copy the URL that prints after deployment
  ```

- [ ] **Verify the live URL loads correctly** — open it, check all sections, confirm it looks right on your phone
- [ ] **Copy the Vercel URL** into `prospects/[slug]/research.md` under `## Demo URL`

### 5.3 — Environment Variables (demo phase)

For the demo, no environment variables are needed — it's static Next.js.

**When the client buys the site and you transfer it to their account:**
- [ ] Log in to [vercel.com](https://vercel.com) → Project → Settings → Environment Variables
- [ ] Add any needed variables (contact form webhook, analytics, etc.)
- [ ] Redeploy after adding variables: `vercel --prod` from the site directory

---

## Phase 6 — Outreach Campaign

> The demo is live. Now send the email.

- [ ] **Verify owner email** — confirm via Apollo, LinkedIn, or the website's contact page
- [ ] **Write the `{{GENUINE_OBSERVATION}}`** — the specific, personal detail about their business. This is the most important variable. Do not use a generic compliment.
- [ ] **Fill all email variables** from `email-templates/README.md`
- [ ] **Send Email 1** via Resend (or N8N workflow if automated)
- [ ] **Log in CRM (Google Sheet):** mark status as `EMAILED_1`, log date sent
- [ ] **Set Day 4 reminder** for Email 2 (if no reply)
- [ ] **Set Day 10 reminder** for Email 3 (if no reply)
- [ ] **Monitor for replies** — hot reply (interest) goes immediately to phone/SMS

---

## Phase 7 — Client Sold. Time to Transfer.

> They said yes. Now make it real.

### 7.1 — Domain Setup

- [ ] **Get their domain login credentials** (GoDaddy, Namecheap, Squarespace, etc.)
- [ ] **Add custom domain in Vercel:**
  - Vercel project → Settings → Domains → Add domain
  - Vercel will show you two DNS records to add
- [ ] **In their domain registrar:**
  - Add `A` record: `@ → 76.76.21.21` (Vercel's IP)
  - Add `CNAME` record: `www → cname.vercel-dns.com`
  - Or follow the exact records Vercel shows you — these can vary
- [ ] **Wait for DNS propagation** — usually 5–30 minutes. Check at [dnschecker.org](https://dnschecker.org)
- [ ] **Verify SSL is active** — Vercel auto-provisions SSL. Confirm the site loads on `https://`
- [ ] **Verify `www` redirects to root** (or vice versa) — test both `www.domain.com` and `domain.com`
- [ ] **Update `canonical` URL** in `layout.tsx` to the final domain and redeploy

### 7.2 — Remove Demo Notice

- [ ] **Remove `DemoBanner`** from the layout (or comment it out)
- [ ] **Remove noindex tag** if it was left in during demo phase
- [ ] **Confirm robots.txt does NOT block crawlers:**
  ```
  User-agent: *
  Allow: /
  Sitemap: https://domain.com/sitemap.xml
  ```

### 7.3 — Generate sitemap.xml

Next.js auto-generates sitemaps. Verify it's working:

- [ ] Visit `https://domain.com/sitemap.xml` — confirm it returns an XML file
- [ ] If not present, add `src/app/sitemap.ts`:
  ```ts
  import { MetadataRoute } from 'next';
  export default function sitemap(): MetadataRoute.Sitemap {
    return [
      { url: 'https://domain.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
      { url: 'https://domain.com/#about', lastModified: new Date(), priority: 0.8 },
      { url: 'https://domain.com/#services', lastModified: new Date(), priority: 0.8 },
    ];
  }
  ```
- [ ] Redeploy if sitemap was just added

### 7.4 — Google Search Console

> This is how Google knows the site exists and how we track rankings.

- [ ] **Go to** [search.google.com/search-console](https://search.google.com/search-console)
- [ ] **Add property** → Choose URL prefix → Enter `https://domain.com`
- [ ] **Verify ownership** — easiest method: HTML tag
  - Copy the `<meta name="google-site-verification" content="XXXX">` tag
  - Add it to `layout.tsx` inside `<head>`:
    ```tsx
    <meta name="google-site-verification" content="PASTE_CODE_HERE" />
    ```
  - Redeploy → return to Search Console → click Verify
- [ ] **Submit sitemap:**
  - Left sidebar → Sitemaps → Enter `sitemap.xml` → Submit
- [ ] **Request indexing for homepage:**
  - Enter `https://domain.com` in the search bar at top → click "Request Indexing"
- [ ] **Note:** First data appears in Search Console within 3–7 days

### 7.5 — Google Analytics 4

> This tracks real visitors. Set it up even if the client doesn't ask — it's free and protects you from "the site gets no traffic" complaints.

- [ ] **Create a GA4 property:**
  - Go to [analytics.google.com](https://analytics.google.com)
  - Admin → Create Property → Enter business name, timezone (Mountain Time), currency (USD)
  - Choose "Web" as platform → Enter domain → Create stream
  - **Copy the Measurement ID** — it looks like `G-XXXXXXXXXX`

- [ ] **Install the GA4 snippet** in `layout.tsx`:
  ```tsx
  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `,
    }}
  />
  ```
  Replace `G-XXXXXXXXXX` with the real Measurement ID.

- [ ] **Or use Vercel Analytics** (simpler, no snippet):
  - Vercel project → Analytics tab → Enable
  - Add `@vercel/analytics` package: `npm install @vercel/analytics`
  - Add to `layout.tsx`: `import { Analytics } from '@vercel/analytics/react';`
  - Render `<Analytics />` in the body

- [ ] **Verify it's working:** Visit the live site, then check Analytics → Realtime — you should see yourself

### 7.6 — Google Business Profile (if client doesn't have one)

> If the business doesn't have a Google Business Profile yet, help them set one up. It's free and critically important for map rankings.

- [ ] Go to [business.google.com](https://business.google.com)
- [ ] Click "Manage now" → search for the business → either claim it or create new
- [ ] **Add the website URL** — their new Vercel/custom domain
- [ ] **Verify the listing** — Google will mail a postcard with a code (5–7 days) or allow phone/video verification

---

## Phase 8 — Post-Launch Handoff

> The site is live. Make sure the client can actually use it.

### 8.1 — Handoff Document

Prepare a simple one-page handoff for the client containing:

- [ ] **Live URL** + domain registrar login reminder
- [ ] **Vercel login info** (or transfer project to their Vercel account)
- [ ] **Google Search Console** — share access with their Google account
- [ ] **Google Analytics** — share access with their Google account
- [ ] **How to update content** — simple instructions for changing phone, hours, address
- [ ] **Contact for changes** — how they reach you if they want something updated

### 8.2 — Transfer Vercel Project (if requested)

- [ ] Vercel project → Settings → Transfer → Choose their Vercel team/account
- [ ] They'll need a Vercel account (free Hobby tier works for one site)
- [ ] After transfer, verify the custom domain still resolves

---

## Phase 9 — 30-Day Post-Launch Check

> Set a calendar reminder for 30 days after launch. Run through this.

- [ ] **Search Console check** — any crawl errors? Any pages not indexed?
- [ ] **Lighthouse re-run** — confirm scores haven't dropped (especially if assets were changed)
- [ ] **Phone number test** — call the number on the site. Does it work?
- [ ] **Contact form test** — submit a test inquiry if there's a form
- [ ] **Mobile check** — load on your actual phone. Nothing broken?
- [ ] **Google "site:domain.com"** — verify Google has indexed it
- [ ] **Check for manual actions** — Search Console → Security & Manual Actions → Manual Actions (should say "No issues")

---

## Quick Reference — Tools & Commands

```bash
# Full pipeline, in order:
node tools/scrape-existing-site.js --slug [slug] --url https://theirsite.com
node tools/scrape-reviews.js --slug [slug] --place-id "ChIJXXXX"
node tools/generate-voice-brief.js --slug [slug]
node tools/generate-copy.js --slug [slug]
node tools/apply-copy.js --slug [slug] --template [template]
cd prospects/[slug]/site && npm install && npm run dev   # preview
node tools/deploy-demo.js --slug [slug]                  # go live
```

---

## Quick Reference — Accounts Needed

| Account | Used for | Who owns it |
|---|---|---|
| [vercel.com](https://vercel.com) | Hosting all demo + live sites | Kelsey |
| [resend.com](https://resend.com) | Sending outreach emails | Kelsey |
| [console.anthropic.com](https://console.anthropic.com) | Claude API for copy | Kelsey |
| [console.cloud.google.com](https://console.cloud.google.com) | Places API, PageSpeed API | Kelsey |
| [search.google.com/search-console](https://search.google.com/search-console) | SEO tracking per site | Kelsey (share with client post-launch) |
| [analytics.google.com](https://analytics.google.com) | Traffic analytics per site | Kelsey (share with client post-launch) |
| [business.google.com](https://business.google.com) | Google Business Profiles | Client |

---

## Environment Variables Reference

See [`.env.example`](../.env.example) for full list. The minimum set for running the full pipeline:

```bash
ANTHROPIC_API_KEY=...        # generate-voice-brief.js, generate-copy.js
GOOGLE_PLACES_API_KEY=...    # scrape-reviews.js
GOOGLE_PAGESPEED_API_KEY=... # audit-urls.js
VERCEL_TOKEN=...             # deploy-demo.js
RESEND_API_KEY=...           # email sends
```

---

## Common Problems & Fixes

| Problem | Fix |
|---|---|
| `vercel --prod` fails | Run `vercel login` first; confirm `VERCEL_TOKEN` is set |
| Lighthouse Performance < 90 | Check images: use `next/image` instead of raw `<img>` tags |
| Google Search Console won't verify | Re-add the meta tag to layout.tsx, rebuild, and redeploy before verifying |
| DNS not propagating | Wait 30 minutes; use [dnschecker.org](https://dnschecker.org) to confirm |
| Sitemap not found | Add `src/app/sitemap.ts` (see Phase 7.3 above) and redeploy |
| GA4 not tracking | Confirm Measurement ID is correct; check browser console for errors |
| JSON-LD schema errors | Validate at [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
