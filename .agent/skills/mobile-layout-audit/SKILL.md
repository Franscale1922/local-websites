---
name: mobile-layout-audit
description: Renders each page of a prospect site at 375px mobile viewport and audits for layout bugs that are invisible in code but visible when rendered. Catches omission-type bugs — missing CSS, undefined classes, lack of mobile stacking — that static code analysis and desktop-only browser checks consistently miss. Run after the initial site build, after major layout changes, or any time a visual mobile issue is reported.
---

# Mobile-First Layout Audit

## Why This Skill Exists

Standard code audits miss a specific class of bugs: **omission bugs** — layout problems caused not by broken code, but by missing mobile overrides. These bugs:

- Look completely fine when reading code
- Look fine at desktop viewport (1280px)
- Only appear when rendered at mobile width (375px)

The most common pattern: a pair of CTA buttons wrapped in `flexWrap: 'wrap'` renders side-by-side on desktop, but on mobile it wraps awkwardly — buttons don't stack cleanly, appear clipped, or render at mismatched widths.

> **Key insight:** `flexWrap: 'wrap'` alone is NOT sufficient for mobile. You need `flex-direction: column` + `width: 100%` at ≤480px to force proper full-width stacking.

---

## When to Run

- After completing the initial site build
- After any structural changes to page layouts or button groups
- When a client or user reports a visual mobile issue
- As a pre-launch checklist step (run before deploy)

---

## What to Look For

### Layer 1 — Static Code Patterns (run before opening browser)

Use grep/search to catch these in TSX and CSS files:

**1. CSS classes used in JSX but never defined in globals.css**
```bash
# Find all className= values in TSX
grep -r 'className="[^"]*"' src/ | grep -v node_modules

# Then grep each class name against globals.css
grep "class-name-here" src/app/globals.css
```
Any class used but not defined = missing styles, silent failure.

**2. Bare button siblings with inline `marginRight` (no flex wrapper)**
```bash
grep -r 'marginRight' src/
```
If `marginRight` is on a `<a>` Button element (not an icon/SVG), it's probably a bare sibling that needs a flex container.

**3. Inline flex wrappers without media query overrides**
```bash
grep -r "display: 'flex'" src/
```
Any inline `display: 'flex'` wrapping buttons should have a corresponding `@media (max-width: 480px)` override in globals.css that forces `flex-direction: column` and `width: 100%` on children.

---

### Layer 2 — Mobile Rendered Checks (375px × 812px)

Open the dev server. Resize browser to **375px wide**.

For every page, scroll the entire page and check each section. Flag anything that's:
- **FAIL**: buttons clipped, overflowing, mismatched widths, or not stacking
- **WARNING**: technically renders but looks poor on mobile
- **PASS**: stacks cleanly, full-width, readable

#### Button Pair Checklist (per section)
Every place two CTA buttons appear side-by-side on desktop must be checked:
- [ ] Do buttons stack vertically at 375px?
- [ ] Does each button span full container width?
- [ ] Are both buttons fully visible (not clipped by edge)?
- [ ] Are button labels readable (not truncated)?

#### Grid Collapse Checklist (per section)
Every multi-column grid:
- [ ] 2-col and 4-col service grids → single column at mobile
- [ ] 2-col about/area grids → single column at mobile
- [ ] 3-col review/why grids → single column at mobile
- [ ] No horizontal scroll at any scroll position

---

## Standard CSS Classes (Premier Electrical / All Sites Using This Pattern)

When fixing button layout issues, use or create these standard classes:

```css
/* Reusable CTA button pair containers */
.about-ctas    { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
.page-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
.inline-ctas   { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; justify-content: center; }

/* Mobile stacking — REQUIRED for all button pair containers */
@media (max-width: 480px) {
  .about-ctas,
  .page-hero-ctas,
  .inline-ctas { flex-direction: column; }

  .about-ctas .btn,
  .page-hero-ctas .btn,
  .inline-ctas .btn { width: 100%; text-align: center; justify-content: center; }
}
```

**Never use bare inline `style={{ marginRight: '12px' }}` on sibling button elements.** Always wrap pairs in one of these container classes.

---

## Audit Workflow

### Step 1 — Start dev server
```bash
cd prospects/[slug]/site
npm run dev
```
Note the port (usually 3000).

### Step 2 — Static grep pass
Run before opening the browser — catches the easy ones:
```bash
# Check for undefined CSS classes (spot-check key ones)
grep -r "className" src/app --include="*.tsx" | grep -oP '(?<=className=")[^"]+' | sort | uniq > /tmp/classes_used.txt
grep -oP '\.[a-z][a-zA-Z0-9_-]+\s*\{' src/app/globals.css | sed 's/[. {]//g' | sort | uniq > /tmp/classes_defined.txt
diff /tmp/classes_used.txt /tmp/classes_defined.txt

# Check for inline marginRight on buttons
grep -rn "marginRight" src/app --include="*.tsx"

# Check for inline display:flex wrappers
grep -rn "display: 'flex'" src/app --include="*.tsx"
```

### Step 3 — Set browser to 375px
Resize browser window to 375px × 812px (iPhone SE/standard mobile).

### Step 4 — Scroll every page, screenshot every section with buttons or multi-col grids

Pages to audit:
- `/` (home — most complex, most sections)
- `/services`
- `/about`
- `/faq`
- `/recognition`
- `/service-area`
- Any service sub-pages (`/services/panel-upgrades`, etc.)

### Step 5 — Check at 768px (tablet breakpoint)
Resize to 768px × 1024px. The same button pair issues can appear here if only a 480px override was added.

### Step 6 — Desktop sanity check at 1280px
Confirm all fixed sections still render correctly side-by-side on desktop.

---

## Reporting Format

```markdown
## Mobile Layout Audit — [Site Name] — [Date]

### Issues Found
| Page | Section | Issue | Fix Applied |
|------|---------|-------|-------------|

### Sections Verified (PASS)
- Home: Hero, Services grid, About, FAQ, CTA strip...

### Screenshots
[embed relevant screenshots]
```

---

## Common Fixes Reference

| Pattern Found | Fix |
|---|---|
| Bare `<a>` siblings with `marginRight` | Wrap in `<div className="about-ctas">` or `inline-ctas` |
| `className="page-hero-ctas"` — class undefined in CSS | Add definition to `globals.css` |
| Inline `style={{ display: 'flex', flexWrap: 'wrap' }}` on button pair | Replace div with `className="inline-ctas"` |
| Grid not collapsing to 1 col | Add `grid-template-columns: 1fr` inside `@media (max-width: 768px)` |
| Horizontal overflow | Find element with fixed `width` or `min-width` wider than viewport, make it `max-width: 100%` |
