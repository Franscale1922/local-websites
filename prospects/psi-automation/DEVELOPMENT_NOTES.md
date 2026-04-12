# PSI Automation — Development Notes
**Last updated:** 2026-04-12  
**Site type:** Custom industrial / B2B — NOT a template clone  
**Deployed at:** https://psi-automation.vercel.app (check Vercel dashboard for current URL)

---

## ⚠️ Do Not Clone or Overwrite

This site is protected by `.agentprotect`. Running `apply-copy.js` or the `clone-site` skill against this slug will abort automatically.

This site has **custom architecture** not shared with any template. Treat it as a standalone application.

---

## Current Site Architecture

```
prospects/psi-automation/site/src/
├── app/
│   ├── page.tsx                          Homepage — hero, motor selector CTA, trust section
│   ├── globals.css                       All styles — design system + component styles
│   ├── layout.tsx                        Metadata, fonts
│   ├── components/
│   │   ├── Nav.tsx                       ⭐ Nav with predictive model search
│   │   └── Footer.tsx
│   ├── products/
│   │   ├── page.tsx                      ⭐ Product catalog — hero search + DV series priority
│   │   └── [slug]/page.tsx               ⭐ Motor detail — variants selector + accessories
│   ├── custom-solutions/page.tsx         ⭐ Integral brakes "New" card
│   ├── engineering/page.tsx              Size-your-motor tool
│   ├── applications/[slug]/page.tsx      Industry use-case pages
│   └── resources/page.tsx
└── data/
    └── motors.ts                         ⭐ All motor data — 81+ motors + variants
```

---

## Completed Work (Phase 1 + 2)

### Phase 1 — Owner Interview Revisions (commit c6cb63f)
- **Predictive model search** — Nav dropdown + Products page hero banner
  - Live-filters motors.ts on every keystroke
  - Nav routes to `/products?q=MODEL` which pre-fills search
  - Quick-suggest chips: DV6, DVA, DV10, DV20, CDV
- **DV series priority** — Products page reordered DV → DVA → CDV (high-margin first)
  - DV card gets Featured badge + crimson border
- **"Often Ordered With" accessories** — on every motor page
  - Air Filters + Lubricators: Request a Quote
  - Safety Silencers: Contact for Availability (Robert still sourcing felt material)
- **Integral Brakes** — added to Custom Solutions page with "New" badge

### Phase 2 — Variant System (commit eff4f08)
- **MotorVariant type** added to Motor schema in motors.ts
- **Variant selector UI** on motor detail page — radio-style tabs, updates live drawing
- **Variants mapped** from schematic filenames in `public/motors/schematics/`:
  - DV10-118: Standard / B26 Shaft / D125 Shaft
  - DV10-K: Standard / KA42 Flange
  - DV20-118: Standard / C26 Shaft
  - DVA-003: Standard / U / V2 / W configuration (4 variants)
  - DV32 series: Left / Right rotation pairs
  - DV62-350: Left / Right rotation
- **11 missing motors added**: DV32 (4), DV42 (2), DV62 (1), DVAR (2)
- **DVAR series** now visible in product catalog + filter dropdown (purple badge)

---

## Pending — Waiting on Robert (Phase 2b)

These require a follow-up with the owner before implementation:

| Item | What's needed | Status |
|---|---|---|
| DV32/42/62 torque specs | Full torque/RPM table at 30/60/80 PSI | Waiting on Bob |
| DVAR-994 + DVAR-T2 specs | Same | Waiting on Bob |
| Additional variant part numbers | Are there B26/D125-style variants on DV20/DV32? | Waiting on Bob |
| Safety silencer specs | Felt material source, part number, drawing | Bob reverse-engineering |
| Accessories data file | Full list of filters/lubricators PSI sells with part numbers + drawings | Waiting on Bob |

---

## Phase 3 (Future)

When Robert is available for a second interview:

1. **Motor selector by HP + Torque + RPM** — currently only model-number search; add a "find by spec" tool that accepts torque target + RPM and surfaces matching models
2. **Accessories data file** — `src/data/accessories.ts` with real part numbers, drawings, and product descriptions; replaces the current placeholder cards
3. **Per-motor accessories** — some accessories are motor-size-specific; map which accessories apply to which series
4. **Integral brakes spec-in** — add a checkbox or tab on motor pages for "available with integral brake — contact for lead time"

---

## Design System

| Token | Value | Use |
|---|---|---|
| `--crimson` | `#8C1515` | Primary brand — CTAs, badges, accents |
| `--navy` | `#1a2744` | Text, dark sections |
| `--steel` | `#4A6FA5` | Secondary text, labels |
| `--orange` | `#E07B35` | Nav CTA, highlights |
| Font | Inter (Google Fonts) | All body + headings |

Series badge colors:
- CDV — blue (`#EDF2FF / #3B5BDB`)
- DV — green (`#E4F9F5 / #087F5B`)
- DVA — orange (`#FFF4E6 / #D9480F`)
- DVAR — purple (`#F3F0FF / #7048E8`)

---

## Business Context

- **Owner:** Robert (Bob)
- **High-margin SKUs:** DV and DVA series (4–70 HP) — $5,500–6,900 margin per unit
- **Low-margin:** CDV series (~$100–200 margin, hard to compete on price)
- **Spec-in strategy:** Engineers find PSI on the website, spec the model number into engineering drawings -> locked into facilities forever
- **Target user:** Process engineers at oil/gas, petrochemical, pump manufacturers (Conoco, BP)
- **Phone:** 800-392-3602
- **Email:** sales@psiautomation.com
