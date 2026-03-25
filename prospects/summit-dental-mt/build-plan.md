# Summit Dental Group — Build Plan

**Slug:** summit-dental-mt
**Owner:** Dr. Mark A. Vanzant, DMD
**Location:** 203 Business Center Loop, Suite C, Kalispell, MT 59901
**Phone:** (406) 752-4545

---

## Situation Summary

Summit Dental Group has a **single-page website** with no SEO value, no service pages, no dedicated content for their strongest differentiators (veteran-owned, TRICARE acceptance, 4.8★ Google rating). The market leader (Montana Dental Works) runs on **Wix** with 660+ reviews. A custom-built Next.js demo site will immediately signal a premium, differentiated practice and serve as the pitch vehicle.

**Key differentiators to lead with:**
1. Veteran-owned (USAF — 3 combat deployments, active Montana Army National Guard)
2. ⭐ 4.8 / 5 from 469 Google reviews — exceptional social proof
3. Two doctors: Dr. Vanzant + Dr. Hoffner (laser, general, sedation, Botox for Bruxism)
4. TRICARE / ADDP acceptance (military insurance)
5. Premium office amenities: coffee bar, massage chairs, gift bags for new patients
6. 15+ services including same-day emergency, implants, veneers, TMJ, pediatric, full-mouth restoration

---

## Brand Direction

> ⚠️ **[HUMAN STEP]** — Brand colors not yet confirmed. Please visit summitdentalmt.com with a color picker and drop the hex values for the nav/header and primary CTA button color here before Phase 3 begins. If colors can't be extracted, use the Gemini-researched palette below as the fallback.

**Fallback palette (Gemini / cross-model consensus — Montana-authentic biophilic design):**
| Role | Hex | Use |
|---|---|---|
| Background | `#F9F9F9` / `#FDFBF7` | Warm cream — not sterile white |
| Primary accent | `#3A506B` (Slate River Blue) | Nav, headers, trust elements |
| Secondary accent | `#2C4C3B` (Deep Alpine Green) | Section accents, badges |
| CTA buttons | `#C87941` (Muted Copper) | Book Now, call CTAs |
| Body text | `#222222` / `#4A4A4A` | Accessible, warm charcoal |

**Typography:**
- Headings: **Playfair Display** or **Merriweather** (serif — authority + trust)
- Body: **Inter** or **Source Sans Pro** — 16–18px, 1.6 line-height
- Hierarchy: H1 48–56px · H2 32–40px · H3 24–28px

**Tone:** Neighborly, confident, non-corporate. "Montana gentle." Military precision without boasting. Not a chain.

---

## Page Architecture

All 4 LLMs converged on a hub-and-spoke multi-page structure. This demo will include the highest-priority pages:

### Demo Page Set (Stage 1 — Pitch)

| Route | Page | Priority |
|---|---|---|
| `/` | Homepage | 🔴 Core |
| `/about` | About — Dr. Vanzant + Dr. Hoffner | 🔴 Core |
| `/services` | Services Hub | 🔴 Core |
| `/services/dental-implants` | Dental Implants | 🔴 High-intent |
| `/services/emergency-dentistry` | Emergency Dentistry | 🔴 High-intent |
| `/services/cosmetic-dentistry` | Cosmetic Dentistry | 🔴 High-intent |
| `/services/sedation-dentistry` | Sedation & Comfort | 🟡 Important |
| `/services/teeth-whitening` | Teeth Whitening | 🟡 Important |
| `/services/crowns-bridges` | Crowns & Bridges | 🟡 Important |
| `/veterans-military` | Veterans & Military (TRICARE/ADDP) | 🔴 Differentiator |
| `/new-patients` | New Patient Info + Insurance | 🔴 Core |
| `/smile-gallery` | Before & After Gallery | 🟡 Trust builder |
| `/faq` | FAQ (accordion, schema-ready) | 🟡 SEO |
| `/contact` | Contact + Map + Hours | 🔴 Core |

> **Additional pages for Stage 2 (post-conversion):** General dentistry sub-pages (cleanings, fillings, extractions), root canal, TMJ, pediatric, dentures/partials, blog, area-served pages (Whitefish, Columbia Falls, Bigfork), in-house membership plan, privacy policy, sitemap.

---

## Homepage Section Order

Cross-model consensus on section sequence:

1. **Sticky nav** — logo left, nav center/right, "Book Now" CTA button (copper), hamburger on mobile
2. **Emergency top bar** — "Dental Emergency? Call (406) 752-4545" — always visible
3. **Hero** — full-bleed (video placeholder/image), headline, subheadline, dual CTAs + trust badges
4. **Social proof trust bar** — "⭐ 4.8 / 5 — 469 Google Reviews · Veteran-Owned · TRICARE Accepted"
5. **Value prop grid** — 4-icon USP section (Gentle Care · Military Precision · Modern Tech · Family Friendly)
6. **Services grid** — symptom-first language, 3-column desktop / 1-column mobile
7. **Meet the Doctors** — Dr. Vanzant bio card + Dr. Hoffner card → links to `/about`
8. **Patient testimonials** — 3–5 rotating Google review quotes (curated by theme)
9. **Before & After preview** — 3 case teasers → link to `/smile-gallery`
10. **Insurance / TRICARE callout** — accepted insurance logos, TRICARE badge, CareCredit
11. **New Patient CTA section** — "Welcome to Summit" offer + appointment form
12. **Footer** — NAP, hours, social links, quick nav, legal

---

## Homepage Hero Copy

**Primary headline:** *"Gentle, Expert Dentistry for the Whole Flathead Valley"*
**Subheadline:** *"Veteran-owned. Two experienced doctors. Serving Kalispell and beyond."*
**CTA 1:** Book Your Appointment
**CTA 2:** Call (406) 752-4545
**Trust badges below CTAs:** ⭐ 4.8 Google Rating · Veteran-Owned · TRICARE Accepted · Same-Day Emergency Care

---

## Services Grid — Symptom-First Language

| Display Label | Points to | Rationale |
|---|---|---|
| Replace Missing Teeth | `/services/dental-implants` | High-intent, high-revenue |
| Dental Emergency? We're Here | `/services/emergency-dentistry` | Urgent need, 89% higher conversion |
| Transform Your Smile | `/services/cosmetic-dentistry` | Cosmetic hub |
| Nervous About Dentistry? | `/services/sedation-dentistry` | Anxiety patients — major segment |
| Whiter Smile, Fast | `/services/teeth-whitening` | Quick win cosmetic |
| Fix a Broken Tooth | `/services/crowns-bridges` | Restorative |
| Care for the Whole Family | `/services` (pediatric section) | Family practice breadcrumb |
| TMJ & Jaw Pain Relief | `/services` (TMJ section) | Differentiator service |

---

## Veterans & Military Page — Content Outline

This is the **highest-impact differentiator page** in the entire site. All 4 models agreed.

1. **Hero headline:** *"We know military insurance can be complicated. We handle it for you."*
2. Dr. Vanzant's service story (UF → USAF → 3 OIF/OEF deployments → Montana Army National Guard)
3. **Accepted Plans** (prominently displayed):
   - TRICARE Active Duty Dental Program (ADDP) — via United Concordia
   - TRICARE Dental Program (TDP) — for dependents and non-activated Guard/Reserve
   - United Concordia (UCCI)
   - Dept of Defense military plans
4. **"How to Use Your Benefits Here"** — 3-step plain-language guide
   - Step 1: Confirm eligibility (50-mile remote rule or DTF-referral)
   - Step 2: Obtain your ACN from United Concordia (or let us help you)
   - Step 3: Book your appointment — we handle the paperwork
5. **DD Form 2813** — dental readiness exams for Guard/Reserve (offer free exams)
6. **PTSD-sensitive care** — empathetic language: "Dental visits can feel challenging. We'll go at your pace."
7. Military patient testimonials
8. Military family discount (if applicable — confirm with Dr. Vanzant)
9. Contact CTA

---

## Trust & SEO Architecture

**Schema (site-wide):**
- `Dentist` (LocalBusiness subtype): NAP, geo, hours, AggregateRating (4.8/469), services, sameAs social links
- `Service` schema per service page (references parent Dentist entity)
- `FAQPage` schema on `/faq`
- `BreadcrumbList` site-wide

**JSON-LD in `layout.tsx`:**
```json
{
  "@type": "Dentist",
  "name": "Summit Dental Group",
  "address": "203 Business Center Loop, Suite C, Kalispell, MT 59901",
  "telephone": "(406) 752-4545",
  "openingHours": "Tu-Fr 08:00-17:00",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "469" }
}
```

---

## What to Preserve from Current Site

| Element | Action |
|---|---|
| Dr. Vanzant bio text | Preserve and expand |
| Full services list (15 services) | Expand into individual pages |
| Insurance accepted list | Preserve verbatim + add TRICARE callout |
| Phone, address, hours | Carry forward exactly |
| Social profile links | Include in footer |
| Patient portal login | Link in nav ("Patient Login") |

---

## What the Demo Does NOT Include (Stage 1 Scope)

- Real patient photos (use Unsplash with consent placeholder note)
- Real before/after gallery (placeholder gallery with "See actual results at your consultation" note)
- Live booking integration (use "Request Appointment" form)
- Blog (linked as "Coming Soon" or omitted)
- Dr. Hoffner full bio (note in About: "Meet our full team in person")

---

## QA Checklist (Phase 4)

- [ ] All 14 pages render without errors
- [ ] Mobile hamburger nav works on all pages
- [ ] Phone number is click-to-call (`tel:` link) everywhere
- [ ] Emergency top bar visible on all pages
- [ ] No placeholder text (`[PLACEHOLDER]`) visible anywhere
- [ ] Lighthouse: Performance ≥ 90, SEO = 100, Accessibility ≥ 90
- [ ] JSON-LD validates at search.google.com/test/rich-results
- [ ] Mobile sticky CTA bar (Book Now + Call) on mobile viewport
- [ ] Veterans page explains TRICARE in plain language (human review)

---

## Open Items Before Build Starts

- [ ] **[HUMAN]** Confirm brand colors from existing site (or approve fallback palette above)
- [ ] **[HUMAN]** Confirm Dr. Hoffner's first name and any bio info available
- [ ] **[HUMAN]** Confirm if military discount exists or should be proposed as a recommendation
- [ ] **[AGENT]** Generate AI icon set (8 service icons) before building service pages
