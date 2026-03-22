# Build Plan: PSI Automation
## Stage 1 — Demo Site Blueprint

> **Approval required before any code is written.**

- **Slug:** psi-automation
- **Industry:** Industrial pneumatic air motor manufacturer (B2B)
- **Date:** 2026-03-21
- **Template:** professional-services (adapted for engineering/technical B2B)
- **Research sources:** Site inventory + digital audit + Gemini + Perplexity + ChatGPT (Claude pending)

---

## Site Intelligence Summary

- **Current site URL:** http://psiautomation.com/index.html
- **Overall assessment:** ~2002-era HTML table layout — completely non-responsive, broken on mobile, zero social proof, no visual hierarchy. Actively suppresses conversions from the inbound engineer traffic it already receives. The underlying business is strong (35+ years, NASA-cited silencer research, 70 HP vane motor capability that no major competitor can match) — but the site communicates none of it.
- **Current page count:** ~10 pages (HTML + ColdFusion backend)
- **Mobile status:** Completely broken (table-based, no viewport meta, no responsive CSS)
- **Key connectivity:** RFQ inquiry form, YouTube video, 3DPublisher CAD downloads, Visa/MC payment logos
- **Social profiles:** None (PSI Idaho has no social media presence)

---

## What to Preserve from the Current Site

- [x] **"Size Your Air Motor" tool** — rebuild as a purpose-built static sizing tool in the new site (no links to old ColdFusion pages)
- [x] **Motor Selection Guide** — rebuild as a properly structured HTML page with a spec table and filter (no links to old motor-select.cfm)
- [x] **Product line hierarchy** — motor types and HP ranges fully rebuilt from existing site content
- [x] **NASA safety silencer reference** — use as a technical credibility signal
- [x] **"Application engineers always available"** — this is a primary CTA throughout
- [x] **Toll-free number 800-392-3602** — in header and every page
- [x] **Email sales@psiautomation.com** — fast path for engineers who prefer email
- [x] **"35 years" longevity claim** — strong industrial trust signal
- [x] **Target industries list** — aerospace, automotive, chemical, mining, petroleum

---

## Page Architecture

> Research consensus: industry application pages are *critical* for SEO and for engineers to self-select into relevant content. Not optional.

| Page | Route | Priority | Rationale |
|---|---|---|---|
| Homepage | `/` | Critical | Conversion hub — 70HP hero, dual CTA, industries grid, trust strip |
| Products / Vane Air Motors | `/products` | Critical | Main product overview with HP range navigation |
| Custom Solutions | `/custom-solutions` | Critical | PSI's #1 differentiator — custom, no minimums, engineer-direct |
| Engineering & Selection | `/engineering` | Critical | Motor selector tool (links to existing), selection guide, sizing resources |
| Applications Hub | `/applications` | Critical | Parent page for all industry verticals |
| Aerospace Applications | `/applications/aerospace` | High | Power-to-weight, stall resistance, custom alloy options |
| Automotive Applications | `/applications/automotive` | High | Continuous operation, gearbox integration, robotics |
| Chemical Applications | `/applications/chemical` | High | Stainless steel, oil-free, corrosion resistance |
| Mining Applications | `/applications/mining` | High | Hazardous environments, extreme durability, field-serviceable |
| Petroleum Applications | `/applications/petroleum` | High | 70 HP emphasis, remote operation, underbalanced drilling |
| Why Air Motors vs Electric | `/resources/why-air-motors` | High | Highest-converting educational page for niche manufacturers |
| Control Systems | `/products/control-systems` | Medium | Companion products — engineers need complete system design |
| Safety Silencers | `/products/safety-silencers` | Medium | NASA-cited; trust signal + niche product |
| Resources / Technical Hub | `/resources` | Medium | Datasheets, CAD downloads, technical articles, video |
| About | `/about` | Medium | 35+ years, formerly Pneumatic Systems Inc., engineering story |
| Contact / RFQ | `/contact` | Critical | RFQ form, phone, email, address, map |

**Total pages: 16** — All multi-page. Application vertical pages are a critical SEO and conversion investment informed by all 3 LLM research responses. Stage 1 versions can be condensed (1 page each) and expanded in Stage 2.

> ⚠️ **Note on application pages for Stage 1:** Each `/applications/[vertical]` page will be a single-section content block (industry overview + relevant motor features + "Talk to an Engineer" CTA). Not full case studies — those are Stage 2.

---

## Homepage Section Order

> All 3 LLM responses agree on this sequence. The 70 HP range and field-serviceable differentiator must appear within the first scroll.

1. **Hero** — Headline option A: *"1/4 HP to 70 HP. Custom-Engineered Vane Air Motors for the Toughest Industrial Applications."* | Option B: *"Where Electric Motors Fail, Our Air Motors Run."* | Dual CTA: [Size Your Motor →] [Request a Quote →]. Dark industrial background, real or generated motor-in-application imagery.

2. **Trust Strip** — Five facts in a horizontal band: `35+ Years Manufacturing` | `1/4 to 70 HP` | `Custom — No Minimums` | `Field-Serviceable` | `Sandpoint, Idaho`

3. **What We Build** — 3–4 product category cards: Vane Air Motors, Custom Solutions, Control Systems, Safety Silencers

4. **Industry Applications Grid** — 5 visual cards (Aerospace, Automotive, Chemical, Mining, Petroleum) each linking to dedicated vertical page. Engineers self-segment here.

5. **"Size Your Motor" Tool CTA** — Full-width feature band: *"Know your torque and speed requirement? Find the right motor in minutes."* Button links to existing PSI sizing tool.

6. **Why Air Motors vs. Electric** — 3–4 differentiator columns: explosion-proof, no overheating, chemical resistance, lighter than hydraulic. Links to `/resources/why-air-motors`.

7. **Why PSI** — 4 differentiators with icons: `1/4–70 HP Range` | `Custom, No Minimum Quantity` | `Field-Serviceable Design` | `35+ Years in Industry`

8. **Resources Preview** — Latest datasheets, CAD download callout, video link. Engineers expect a resource hub.

9. **Footer CTA** — *"Talk to an Application Engineer."* Phone number + email + condensed contact form (Name, Company, Phone, Application — 4 fields).

10. **Footer** — NAP, nav links, phone, email, copyright.

---

## Brand Direction

> All 3 LLM responses converge on: dark anchored palette, single warm accent for CTAs, geometric sans-serif typography.

- **Tone Archetype:** **Rugged Expert** — technical, authoritative, specific. Engineers talking to engineers. No marketing fluff. Every vague adjective replaced with a spec or proof point.
- **Primary Color:** `#1A2E4A` (deep navy) — industrial authority, precision, trust
- **Accent Color:** `#E85D04` (industrial orange) — warm, high-visibility, used exclusively for CTAs and hover states. Aligns with Parker Hannifin, Caterpillar accent conventions.
- **Supporting Color:** `#F4F6F8` (light steel gray background for content sections)
- **Typography:** `Inter` — geometric, technical, legible at dense spec table sizes. Bold 800+ weight for headlines. Tabular numerals for spec data.
- **Photo approach:** Industrial product photography style. Generated industrial hero image for Stage 1 demo. Stage 2 replaces with real product photos from owner.

> ⚠️ **Flag for Stage 2:** PSI has no logo file or color system online. Colors and typography above are agent-selected from LLM research consensus. Owner confirms or replaces in Stage 2.

---

## Third-Party Integrations to Replicate

| Integration | Type | Where | Notes |
|---|---|---|---|
| Motor sizing tool | Built-in | /engineering | Rebuilt from scratch as a static HTML form with input fields (torque, speed, HP, environment) that outputs recommended motor configurations. No ColdFusion dependency. |
| Motor Selection Guide | Built-in | /engineering | Rebuilt as a native HTML spec table with filter/sort UI. Data sourced from existing site motor specs. |
| YouTube product video | Video embed | /resources, About | Surface existing YouTube video — embed only, no link to old site |
| 3DPublisher CAD downloads | Link (external) | /resources, Product pages | Link to CAD files hosted externally — acceptable since it's not the old PSI site itself |
| Contact/RFQ form | Built-in | /contact, Homepage | 4–5 fields: Name, Company, Email, Application Description, optional file mention. Static in Stage 1, real handler in Stage 2. No phone number field. |
| Payment logos | Visual only | /contact | Visa/MC/AmEx/Discover — display only |
| Google Maps embed | Map | /contact | 3717 Omni Park Taxiway, Sandpoint ID 83864 |

---

## Competitive Positioning

Every LLM identified the same pattern: most industrial air motor sites look like 2003 and offer no self-serve tools. PSI already has rare advantages that competitors can't easily replicate. This demo will lead with what no competitor can say: **custom vane motors from 1/4 to 70 HP with no minimum quantity and no return-to-factory for service.** The 70 HP ceiling is where vane technology reaches physical limits that force competitors to abandon the platform — PSI is uniquely capable here, and the site will say so in the first six words an engineer reads.

Benchmark sites to reference: **Atlas Copco** (motor selector architecture), **Chicago Pneumatic** (Expert Corner educational hub), **Festo** (parametric product filtering), **Kongskilde** (dual-path buyer segmentation).

---

## Scope Decisions & Tradeoffs

- **ALL pages rebuilt from scratch** — no links to any existing PSI Automation pages (psiautomation.com). Every page is purpose-built in the new Next.js site.
- **Motor schematics, drawings, and technical diagrams** — reusable from the existing site. No acceptable replacement exists for real product drawings. Pages are rebuilt around them, not linked from them.
- **Hero/lifestyle imagery** — rebuilt with generated industrial imagery. Stage 2 replaces with real product photography.

- **Motor sizing tool (Stage 1):** Built as a native static HTML form — engineer inputs HP requirements, operating environment, torque target; page outputs suggested motor configuration category and directs to the RFQ form. Full interactive calculator is Stage 2.
- **Motor Selection Guide (Stage 1):** Built as a native HTML page with a spec table showing motor series, HP range, max torque, speed range, and mounting options. Real faceted filter/sort UI is Stage 2.
- **Application vertical pages (Stage 1):** One section each — industry context + relevant motor advantages + CTA. Full case studies are Stage 2.
- **Real product photos:** Not publicly available. Stage 1 uses generated industrial imagery. Stage 2 replaces with real photos.
- **RFQ form backend:** Static form in Stage 1 (no submission handler — displays a success message). Real handler (Formspree, Resend, etc.) is Stage 2.
- **Owner photo/team section:** No owner identity confirmed. About page is company-focused. Stage 2 adds personal story after owner intake.
- **Competitor cross-reference tool, CO2 calculator, 3D CAD viewer:** Stage 2.

---

## Human Approval Required

**Approve this plan before any code is written.**

- [ ] Page architecture is correct — 16 pages including 5 industry vertical pages
- [ ] Homepage section order reflects PSI's actual priorities
- [ ] Hero headline direction feels right (A or B — or suggest your own)
- [ ] Brand direction (navy + industrial orange, Inter) is correct for a B2B precision manufacturer
- [ ] Scope tradeoffs are acceptable for Stage 1 demo
- [ ] Claude response will be added when received — may or may not change the plan

**To approve:** Reply "approved" or note any changes.

> ⚠️ **Still waiting on:** Claude response. The synthesis above is based on Gemini + Perplexity + ChatGPT. Claude will be added when you send it — if it surfaces new significant insights, I'll flag them before building.
