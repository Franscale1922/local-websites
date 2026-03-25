# [Niche Name] — Project Constitution

> **This file is law.** Update it when schemas change, rules are added,
> or architecture is modified. All tools must conform to what's defined here.

---

## Niche
- **Category:** [e.g., HVAC and Heating Contractors]
- **Target Region:** Flathead Valley, MT (Whitefish, Kalispell, Columbia Falls, Bigfork, Lakeside, Polson)
- **Master Template Path:** `templates/[niche]/`

---

## siteconfig.ts Schema

Every field in this schema MUST be populated before `apply-copy.js` runs.
Fields marked `[OPTIONAL]` may be omitted if data is unavailable.

```typescript
export const SITE = {
  // ─── Identity ──────────────────────────────────────────────────────
  name: string,           // Full business name, e.g. "Flathead Valley HVAC"
  slug: string,           // kebab-case, e.g. "flathead-valley-hvac"
  logoUrl: string,        // Path relative to /public, e.g. "/logo.png"
  
  // ─── Contact ───────────────────────────────────────────────────────
  phone: string,          // Formatted: "(406) 555-0123"
  email: string,          // [OPTIONAL] Owner direct email
  address: string,        // Full street address
  city: string,           // Primary city served
  state: "MT",
  zip: string,
  
  // ─── Brand ─────────────────────────────────────────────────────────
  primaryColor: string,   // Hex, e.g. "#1e40af"
  accentColor: string,    // Hex — CTA buttons, highlights
  heroImage: string,      // Path relative to /public, e.g. "/hero.jpg"
  
  // ─── Voice & Copy ──────────────────────────────────────────────────
  tagline: string,        // 6-10 words, punchy
  subheadline: string,    // 1-2 sentences expanding the tagline
  toneArchetype: "Warm Neighbor" | "Rugged Expert" | "Polished Pro" | "Playful Local",
  
  // ─── Stats Bar ─────────────────────────────────────────────────────
  stats: Array<{
    value: string,        // e.g. "15+" or "200"
    label: string,        // e.g. "Years in Business"
  }>,
  
  // ─── Services ──────────────────────────────────────────────────────
  services: Array<{
    title: string,
    description: string,  // 1-2 sentences
    icon?: string,        // [OPTIONAL] lucide icon name
  }>,
  
  // ─── Reviews & Trust ───────────────────────────────────────────────
  rating: number,         // e.g. 4.9
  reviewCount: number,    // Total Google reviews
  testimonials: Array<{
    name: string,         // First name + last initial, e.g. "Sarah K."
    location: string,     // City, e.g. "Whitefish"
    text: string,         // The review text
    rating?: number,      // [OPTIONAL] defaults to 5
  }>,
  
  // ─── Local SEO ─────────────────────────────────────────────────────
  serviceAreas: string[], // e.g. ["Whitefish", "Kalispell", "Columbia Falls"]
  
  // ─── Schema.org ────────────────────────────────────────────────────
  schema: {
    category: string,     // e.g. "HVAC Contractor"
    priceRange: "$" | "$$" | "$$$",
  }
}
```

---

## Build Rules (Invariants)

These rules apply to every clone built from this master. No exceptions.

1. **Hero image must be a real photo.** Never use stock photography. Pull from prospect's Google Maps, Instagram, or Facebook.
2. **Phone number must be `<a href="tel:...">` on mobile.** Non-negotiable.
3. **No placeholder text may be visible** on any deployed page. Build fails if `[PLACEHOLDER]` appears in output.
4. **Testimonials must include a real name and location.** No "John D., satisfied customer."
5. **Service areas must be specific to the prospect.** Do not copy from master template.
6. **primaryColor derives from the prospect's actual brand.** Check their logo, existing site, or truck wraps.

---

## Behavioral Rules

- Voice Brief takes precedence over generic AI copy. If generated copy sounds corporate, rewrite.
- Email 1 never includes a price. The website is offered free. Price conversations happen after engagement.
- Deploy only after local validation passes. Never deploy a build with console errors.

---

## Architecture Notes

*Update this section when discoveries are made during builds.*

| Discovery | Date | Impact |
|---|---|---|
| [e.g. "Apify Places scraper throttles at >50 results per run"] | | |

---

## Maintenance Log

| Date | Change | Who |
|---|---|---|
| [date] | Created constitution | |
