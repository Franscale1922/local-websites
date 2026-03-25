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

**1. CSS classes used in JSX but never defined in the stylesheet**

Don't try to diff full class lists — it's noisy. Instead, grep for the specific wrapper class names on any button pair or CTA container and verify that each one has a definition in globals.css:
```bash
# Find every className used on div elements wrapping buttons
grep -rn 'className="[^"]*cta[^"]*"' src/app --include="*.tsx"
grep -rn 'className="[^"]*hero[^"]*"' src/app --include="*.tsx"

# Then verify each unique class name exists in CSS
grep -n ".class-name-here" src/app/globals.css
```
If a class is used in JSX but returns no result in CSS → it has no styles, silent failure.

**2. Bare button siblings with inline `marginRight` (no flex wrapper)**
```bash
grep -rn 'marginRight' src/app --include="*.tsx"
```
If `marginRight` appears on an `<a className="btn">` element (not an icon/SVG), it's a bare sibling that needs a flex container.

**3. Inline flex wrappers without media query overrides**
```bash
grep -rn "display: 'flex'" src/app --include="*.tsx"
```
Any inline `display: 'flex'` wrapping a pair of buttons should have a corresponding `@media` override in globals.css. If it's missing → the buttons rely entirely on `flexWrap: 'wrap'` which does NOT force full-width stacking.

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

## CSS Pattern Reference (Example from Premier Electrical Template)

> **Note:** These class names are specific to the Premier Electrical template. When auditing other sites, identify the equivalent button container classes already in use and check whether *those* have proper mobile overrides — don't assume these names will match.

The correct pattern for any button pair container:

```css
/* Desktop: side-by-side flex row */
.your-cta-wrapper {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
}

/* Mobile: MUST force column stacking — flexWrap alone is not enough */
@media (max-width: 480px) {
  .your-cta-wrapper { flex-direction: column; }
  .your-cta-wrapper .btn { width: 100%; text-align: center; justify-content: center; }
}
```

In the Premier Electrical template specifically, the standard classes are `.about-ctas`, `.page-hero-ctas`, `.inline-ctas`, `county-hero-ctas`, and `cta-strip-actions`.

**Never use bare inline `style={{ marginRight: '12px' }}` on sibling button elements.** Always wrap pairs in a named container class.

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
- `/contact`
- Any service sub-pages (`/services/panel-upgrades`, etc.)
- Any county/region sub-pages (`/service-area/skagit-county`, etc.)

### Step 5 — Check at 768px (tablet breakpoint)
Resize to 768px × 1024px. The same button pair issues can appear here if only a 480px override was added.

### Step 6 — Desktop sanity check at 1280px
Confirm all fixed sections still render correctly side-by-side on desktop.

---

## Reporting Format

```markdown
## Mobile Layout Audit — [Site Name] — [Date]

### Issues Found
| Page | Section | Issue | 375px | 768px | Fix Applied |
|------|---------|-------|-------|-------|-------------|

### Sections Verified Clean
| Page | 375px | 768px | 1280px |
|------|-------|-------|--------|
| Home | PASS | PASS | PASS |
| /services | PASS | PASS | PASS |
| ... | | | |

### Screenshots
[embed screenshots of any FAIL or WARNING sections]
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
