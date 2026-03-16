# Playbook: Lead Discovery

Finding high-revenue local businesses with bad websites within 45 minutes of Whitefish, MT.

---

## Step 1 — Identify Business Categories

Prioritize by likely revenue and typical website quality:

| Priority | Category | Revenue Signal | Typical Site Quality |
|---|---|---|---|
| ⭐⭐⭐ | Hotels / Lodges / Vacation Rentals | Room rates × occupancy | Usually outdated, slow |
| ⭐⭐⭐ | Dental / Chiro / Medical | Patient volume | Very often terrible |
| ⭐⭐⭐ | Outdoor / Adventure Tours | TripAdvisor rank | Often DIY/outdated |
| ⭐⭐ | Restaurants & Bars | Review volume | Mixed quality |
| ⭐⭐ | Real Estate Brokerages | Listing count | Template-heavy |
| ⭐⭐ | Law Firms | Avvo/Martindale rating | Almost always ugly |
| ⭐ | Retail Boutiques | Instagram presence | Variable |
| ⭐ | Auto Shops / Dealerships | Google reviews | Usually poor |

---

## Step 2 — Source the Leads

### Google Maps / Apify Scraper
Use the **Apify Google Maps Scraper** actor.

**Search queries to run:**
```
dental office near Whitefish MT
chiropractor near Kalispell MT
lodge near Glacier National Park
restaurant near Bigfork MT
outdoor tours near Whitefish MT
law firm near Kalispell MT
vacation rental near Flathead Lake MT
boutique near Whitefish MT
auto repair near Columbia Falls MT
```

**Pull these fields per business:**
- Business name
- Owner name (if available)
- Website URL
- Phone number
- Address
- Review count
- Average rating
- Business category

### Secondary Sources
- **Yelp** — especially for restaurants and services
- **TripAdvisor** — lodging and tours
- **Montana Secretary of State Business Registry** — local-only businesses without Google presence: https://biz.sosmt.gov/search

---

## Step 3 — Score Each Business (Revenue Proxy)

Score each on a 10-point scale. Minimum to advance: **6/10**.

| Criterion | Points |
|---|---|
| Review count > 200 | 5 pts |
| Review count 50–199 | 3 pts |
| Review count < 50 | 1 pt |
| Rating ≥ 4.0 | 2 pts |
| High-LTV category (dental, lodging, legal, tours) | 2 pts |
| Medium-LTV category (restaurant, retail, auto) | 1 pt |
| Physical storefront or downtown location | 1 pt |

---

## Step 4 — Website Quality Audit

### Automated Checks (run for each URL)
| Check | Tool | Bad Threshold |
|---|---|---|
| Mobile performance score | Google PageSpeed API | < 65 |
| HTTPS/SSL | SSL check | No SSL = auto-qualify |
| Technology stack / age | BuiltWith or Wappalyzer | Old WordPress theme = qualify |
| Last redesign | Wayback Machine API | No update in 3+ years = qualify |

### Visual Audit (manual screenshot review)
Score the site 1–10 on visual quality. Qualify if score ≤ 5.

Checklist:
- [ ] Mobile responsive?
- [ ] Modern typography (not default system fonts or 2010 web fonts)?
- [ ] Cohesive, modern color palette?
- [ ] Professional photography (not stock or blurry)?
- [ ] Clear call-to-action above the fold?
- [ ] Clean, simple navigation?
- [ ] No Flash, dated sliders, pop-up ads, or text-heavy clutter?
- [ ] Fast load time (< 3 sec on mobile)?

**GPT-4o visual scoring prompt:**
> "Here is a screenshot of a local business website. Score it 1-10 on visual quality and modern design. 10 = stunning, professional, modern. 1 = outdated, cluttered, unprofessional. Give a one-sentence explanation."

---

## Step 5 — Qualify and Advance

**Advance to build queue when:**
- Business score ≥ 6/10 AND
- Website visual score ≤ 5/10

**Create a prospect folder:**
```
prospects/[business-slug]/
├── research.md     ← fill out the template below
└── assets/         ← pull public photos here
```

---

## Prospect Research Template

Copy this into `prospects/[business-slug]/research.md`:

```markdown
# [Business Name] — Prospect Research

## Business Info
- **Name:** 
- **Category:** 
- **Location:** 
- **Website:** 
- **Phone:** 
- **Owner Name:** 

## Business Score
| Criterion | Score |
|---|---|
| Review count | /5 |
| Rating | /2 |
| Category LTV | /2 |
| Location | /1 |
| **Total** | **/10** |

## Website Audit
- **URL:** 
- **Mobile PageSpeed:** /100
- **SSL:** Yes / No
- **Last redesign estimate:** 
- **Tech stack:** 
- **Visual score:** /10
- **Visual notes:** 

## Qualification
- [ ] Business score ≥ 6 → YES / NO (score: ___)
- [ ] Website score ≤ 5 → YES / NO (score: ___)
- [ ] **QUALIFIED FOR BUILD:** YES / NO

## Voice Brief
- **Tone Archetype:** Warm Neighbor / Rugged Expert / Polished Pro / Playful Local
- **3 vibe words:** ___, ___, ___
- **What their best customers say:** "___"
- **What the owner would never say:** ___
- **Key differentiator:** 

## Assets Gathered
- [ ] Photos (Google Maps / Instagram / Facebook)
- [ ] Logo
- [ ] Existing copy (from current site)
- [ ] Business hours
- [ ] Services list

## Build Notes
- **Template to use:** 
- **Color direction:** 
- **Special features needed:** 
```
