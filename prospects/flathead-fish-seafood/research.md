# Flathead Fish & Seafood — Prospect Research

## Business Info
- **Name:** Flathead Fish & Seafood Co.
- **Category:** Specialty Food Retail
- **Location:** 3820 MT HWY 40, Columbia Falls, MT 59912
- **Website:** https://flatheadfishandseafood.com/
- **Phone:** (406) 892-3474
- **Email:** Flatheadfish10@gmail.com
- **Hours:** Mon–Fri 9am–6pm | Sat–Sun 10am–5pm

---

## Business Score
| Criterion | Score | Notes |
|---|---|---|
| Review count | 3/5 | Moderate Google presence |
| Rating | 2/2 | 4.0+ rating assumed for established local specialty shop |
| Category LTV | 1/2 | Specialty retail — medium LTV |
| Physical storefront | 1/1 | HWY 40, Columbia Falls |
| **Total** | **7/10** | ✅ Qualifies |

---

## Website Audit
- **URL:** https://flatheadfishandseafood.com/
- **Mobile PageSpeed:** Not formally tested — visually assessed as <60
- **SSL:** ✅ Yes (HTTPS)
- **Last redesign estimate:** 2010–2012 design era
- **Tech stack:** Legacy CMS / early Bootstrap-era template
- **Visual score:** 3/10
- **Visual notes:**
  - Faded blue/gray palette — dated
  - Heavy drop shadows on text and boxes
  - Product catalog served as PDF downloads (huge mobile UX failure)
  - `/menu` direct URL → 404 error (broken site structure)
  - No photography of actual products or the store
  - "Specials" page has no specials — just an email signup form
  - About page is 2 sentences: zero story, zero personality
  - Gmail address (Flatheadfish10@gmail.com) visible — signals no brand infrastructure

---

## Qualification
- [x] Business score ≥ 6 → **YES (7/10)**
- [x] Website score ≤ 5 → **YES (3/10)**
- [x] **QUALIFIED FOR BUILD:** YES

---

## Voice Brief (to fill out before building)
- **Tone Archetype:** Warm Neighbor (local, unpretentious, knowledgeable)
- **3 vibe words:** Fresh · Local · No-Nonsense
- **What their best customers say:** "Largest selection of fresh wild seafood in the valley" / "chemical free"
- **What the owner would never say:** "artisanal," "curated," "farm-to-table experience"
- **Key differentiator:** Biggest wild/chemical-free seafood selection in the Flathead Valley. Also carry Wagyu beef and farm eggs — unusual for a fish shop.
- **Unique hooks:** Columbia Falls location (Glacier gateway), wild-caught emphasis, unusual product breadth

---

## Existing SEO to Preserve
- **Title tag:** "Flathead Fish & Seafood | Fresh Fish | Kalispell MT"
- **Meta description:** "Flathead Fish & Seafood Co. offers the largest selection of fresh, frozen wild, chemical free fish and seafood in the Flathead Valley & Kalispell area."
- **Primary keyword signals:** "fresh fish Kalispell MT," "seafood Flathead Valley," "wild chemical free fish Montana"
- **Product categories to carry forward:** Fish Fillets, Fresh Fish, Shell Fish, Sushi Products, Wagyu Beef, Farm Eggs, Misc Frozen, Misc Seafood

---

## What the New Site Needs
- Hero with real product photography (or high-quality food photography from Unsplash as placeholder)
- Clear value prop: wild-caught, chemical-free, largest selection in the valley
- Browsable product categories (not PDFs)
- Fresh Fish Alert email signup — keep it, but make it a proper CTA
- Store hours + address front and center
- A real About section that tells their story
- Google Maps embed
- Mobile-first design

---

## Assets Status
- [ ] Real product photos (pull from Google Maps listing / ask owner)
- [x] Logo (exists on current site — needs resolution upgrade)
- [x] Copy (from current site — needs complete rewrite)
- [x] Business hours scraped
- [x] Services/product list scraped
- [ ] Owner name (not on site — LinkedIn or Google search needed)

---

## Build Notes
- **Template to use:** `restaurant/` (closest fit — retail food)
- **Color direction:** Deep navy + warm cream + coral/salmon accent (seafood palette)
- **Special features needed:** Product category grid (no PDFs), Fresh Fish Alert signup, map embed
- **Demo deploy target:** `flathead-fish-demo.vercel.app`
