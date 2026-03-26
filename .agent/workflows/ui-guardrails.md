---
description: UI layout guardrails — prevent pill wrapping, invisible pills, heading widows, and orphaned grid items on every build
---

# UI Layout Guardrails

These rules must be applied to **every site build** before launch. They address the most common recurring visual defects found across all prospect sites.

---

## 1. Text Wrap: No Heading Widows

**Problem:** A single word alone on the last line of a heading looks unbalanced and unprofessional.

**Rule:** Apply `text-wrap: balance` to all `h1` and `h2` elements globally.

```css
h1 { text-wrap: balance; }
h2 { text-wrap: balance; }
```

Apply in `globals.css` alongside font-size declarations. Do not override or omit this in component-level styles.

---

## 2. Pills & Badges: No Internal Line Wrapping

**Problem:** Badge/pill elements (hero eyebrow pills, credential tags, insurance tags) wrap their text to two lines inside the pill, creating irregular, amoeba-shaped containers.

**Rule:** Every pill/badge component must include `white-space: nowrap`.

```css
.hero-badge,
.credential-badge,
.doctor-cred,
.insurance-item,
.veterans-plan,
.footer-veteran-badge {
  white-space: nowrap;
}
```

**Mobile exception:** If the pill text is legitimately long and must scale down, reduce `font-size` and `padding` at `@media (max-width: 480px)` — never allow the text itself to wrap. If the text genuinely can't fit on one line at mobile, split it into two separate pills.

---

## 3. Grid Orphan Prevention

**Problem:** When a 3-column grid contains 4, 7, 10 items, you get a lonely orphaned card on the last row (e.g., a single step card below a row of 3).

**Rule:** Match grid column count to item count:

| Items | Grid Columns |
|-------|-------------|
| 2     | 2-col |
| 3     | 3-col |
| 4     | **4-col** (not 3-col) |
| 5     | 2+3 or use `auto-fit, minmax()` |
| 6     | 3-col |
| 8     | 4-col |

For process/step grids specifically, default to `repeat(4, 1fr)` since most flows have 4 steps. Collapse to `repeat(2, 1fr)` at tablet and `1fr` at mobile.

```css
.process-grid { grid-template-columns: repeat(4, 1fr); }
@media (max-width: 768px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .process-grid { grid-template-columns: 1fr; } }
```

---

## 4. Mobile Card Width: Min-Width Floor

**Problem:** Side-by-side cards on mobile become too narrow to display text legibly, forcing words to wrap on every other character.

**Rule:** Any card grid must collapse to a single column at `≤480px` if the card contains more than a heading.

```css
@media (max-width: 480px) {
  .why-grid,
  .implant-benefit-grid,
  .services-grid,
  .reviews-grid {
    grid-template-columns: 1fr;
  }
}
```

Never use a 2-column grid for content-heavy cards at ≤480px.

---

## 5. Eyebrow / Label Consistency

**Problem:** Inner page eyebrows use a different accent-line pattern than the homepage, creating an inconsistent brand feel.

**Rule:** All eyebrow-style labels use the same CSS class `.eyebrow` with a single `::before` pseudo-element line. Never add inline decorative elements (dashes, spans with lines) instead of the class.

```css
.eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--color-accent); margin-bottom: 14px;
}
.eyebrow::before {
  content: ''; display: block;
  width: 24px; height: 2px;
  background: var(--color-accent);
}
```

---

## 6. Inline Flex Items: Always `flex-shrink: 0` on Icons

**Problem:** SVG icons inside flex rows collapse when sibling text gets long, causing misaligned or missing icons.

**Rule:** Any icon inside a flex row gets `flex-shrink: 0`.

```css
.insurance-item svg,
.hero-trust-item svg,
.veterans-plan svg { flex-shrink: 0; }
```

---

## 7. Pill Contrast: Background Must Never Match Section Background

**Problem:** A pill or badge placed inside a section that shares the same background color becomes invisible — the pill shape disappears and only the text floats, or both pill and text vanish entirely.

**Common failure patterns:**
- `background: var(--color-surface-tinted)` pill inside a `.section--tinted` section
- `background: rgba(255,255,255,0.06)` pill on a light `#FDFBF7` page background
- `background: var(--color-surface)` pill on a white `.section`

**Rule:** Every pill/badge must have a background that is visibly distinct from its parent section. Use this reference:

| Section Background | Safe Pill Style |
|---|---|
| Light cream `#FDFBF7` / white | `background: var(--color-surface-tinted)` + `border: 1px solid var(--color-border)` — OR use an accent-tinted pill |
| Tinted `#F5F3EF` (`.section--tinted`) | `background: var(--color-surface)` (white) + `border: 1px solid var(--color-border)` — never use tinted-on-tinted |
| Dark slate `var(--color-primary)` | `background: rgba(255,255,255,0.10)` + `border: 1px solid rgba(255,255,255,0.2)` |
| Dark `#1a2533` (`.section--dark`) | `background: rgba(255,255,255,0.08)` + `border: 1px solid rgba(255,255,255,0.15)` |
| Accent copper `var(--color-accent)` | `background: rgba(255,255,255,0.18)` + `border: 1px solid rgba(255,255,255,0.35)` |
| Hero overlay (dark image) | `background: rgba(200,121,65,0.15)` + `border: 1px solid rgba(200,121,65,0.4)` (copper-tinted) |

**Mandatory:** Every pill class must always have both a `background` AND a `border`. A border alone on a same-color background is often still invisible — always pair them.

```css
/* ✅ Correct — always contrast + border */
.credential-badge {
  background: var(--color-accent-light);   /* warm off-white on light sections */
  border: 1px solid rgba(200,121,65,0.2);
}

/* ❌ Wrong — tinted on tinted */
.some-badge {
  background: var(--color-surface-tinted); /* same as section — invisible pill */
}
```

---

## Pre-Launch Checklist

Before every site goes to Vercel, verify:

- [ ] View `h1` on homepage at 1440px — no single widow word on last line
- [ ] View hero pill/badge at 390px mobile — text stays on one line
- [ ] Check any grid with 4 items — uses 4-col, not 3-col
- [ ] Check any grid with 2-col cards at 390px — collapses to 1-col
- [ ] All eyebrow labels use `.eyebrow` class, not custom inline spans
- [ ] **Scan every pill/badge — does it visually appear against its section background?** Check on light, tinted, dark, and hero sections
- [ ] Run the mobile-layout-audit skill before deploy
