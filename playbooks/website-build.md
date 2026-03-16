# Playbook: Website Build

Step-by-step process for building a demo website for a qualified prospect.

---

## Before You Start

Make sure `prospects/[business-slug]/research.md` is fully filled out, including:
- [ ] Voice Brief completed
- [ ] Assets gathered (photos, logo, services list)
- [ ] Template type selected
- [ ] Color direction noted

---

## Build Workflow

### Step 1 — Set Up the Project (15 min)

```bash
# From the local-websites root
cp -r templates/[industry] prospects/[business-slug]/site
cd prospects/[business-slug]/site
npm install
npm run dev
```

Rename the project in `package.json`:
```json
{
  "name": "[business-slug]-demo"
}
```

---

### Step 2 — Brand Voice Discovery (30 min)

Pull from `research.md`. This is the most important step. Every word written for this site needs to pass through the Voice Brief filter.

**Research checklist:**
- [ ] Read their Google/Yelp review responses (owner voice)
- [ ] Read their 10 best customer reviews (customer language)
- [ ] Check their Instagram/Facebook captions (their own voice)
- [ ] Note any "About" section copy on their current site
- [ ] Look for any press mentions, awards, or notable history

**Tone Arch Types — pick one:**

| Archetype | Feels Like | Good For |
|---|---|---|
| **Warm Neighbor** | Welcoming, conversational, community-rooted | Restaurants, boutiques, family services |
| **Rugged Expert** | Confident, blunt, earned credibility | Outdoor guides, auto shops, ranching |
| **Polished Pro** | Clean, precise, trust-focused | Dental, legal, financial, medical |
| **Playful Local** | Fun, personality-forward, insider winks | Bars, coffee shops, adventure tourism |

**Voice Brief:**
```
Business: _______________
Tone Archetype: _______________
3 vibe words: ___, ___, ___
Best customer review quote: "___"
What the owner would never say: ___
This voice is NOT: corporate / generic / sales-y / formal
```

---

### Step 3 — Generate Copy (30–45 min)

Use Claude or GPT-4o with the Voice Brief as context.

**Master copy prompt:**
```
You are writing website copy for [Business Name], a [business type] in [city, MT].

Tone archetype: [Archetype]
Their vibe in 3 words: [word1], [word2], [word3]
Best customer quote: "[quote]"
This voice is NOT: corporate, generic, or sales-y.

Write the following, each in this exact voice:
1. Hero headline (6–10 words, punchy)
2. Hero subheadline (1–2 sentences, expands the headline)
3. Three value propositions (each: short title + 1-2 sentence description)
4. About section opening paragraph (3-4 sentences, first person from owner's perspective)
5. Primary CTA button text (3–5 words)
6. Secondary CTA button text (3–5 words)

Key differentiator to emphasize: [their main thing]
```

**Quality check after generation:**
> "Would someone who knows this business read this and say *'Yeah, that sounds exactly like them'*?"
> If NO → rewrite. Remove any word that could appear on any generic business website.

---

### Step 4 — Customize the Template (2–4 hrs)

**Color system** — update `styles/tokens.css`:
```css
:root {
  --color-primary: #[HEX];        /* Main brand color */
  --color-accent: #[HEX];         /* CTA, highlights */
  --color-neutral-dark: #[HEX];   /* Text */
  --color-neutral-light: #[HEX];  /* Backgrounds */
  --color-surface: #[HEX];        /* Cards, surfaces */
}
```

**Color selection guidance:**
- Research their existing brand (logo, social media, signage photos)
- If no brand exists: choose based on industry + location feel
- Montana outdoor → forest greens, slate blues, warm creams
- Professional services → navy, charcoal, clean white
- Restaurant/bar → warm amber, deep burgundy, cream
- Boutique → soft sage, dusty rose, natural linen

**Typography** — update font import in `app/layout.js`:
- Warm Neighbor → `Lato` or `Nunito`
- Rugged Expert → `Barlow` or `Oswald`
- Polished Pro → `Inter` or `DM Sans`
- Playful Local → `Poppins` or `Quicksand`

**Content swap checklist:**
- [ ] Business name (all occurrences)
- [ ] Hero headline and subheadline
- [ ] Value proposition titles and descriptions
- [ ] About section copy
- [ ] Services/menu/offerings list
- [ ] Phone number
- [ ] Address
- [ ] Hours of operation
- [ ] CTA button text
- [ ] Footer links (Google Maps, social media)
- [ ] `<title>` tag → `[Business Name] | [Primary Service] | [City], MT`
- [ ] Meta description (150-160 chars)
- [ ] Open Graph title and description

**Photography:**
- Pull best photos from Google Maps (right-click → save), Instagram, Facebook
- Use Next/Image for all photos with appropriate `alt` text
- If photos are poor quality, consider `unsplash.com` with location-matched search as placeholder
- Always prioritize real photos of the actual business

---

### Step 5 — QA Checklist (30 min)

**Functionality:**
- [ ] All links work (nav, CTAs, footer)
- [ ] Contact form submits correctly (test with real email)
- [ ] Phone number is click-to-call on mobile
- [ ] Map embed loads
- [ ] Social links open correctly

**Performance:**
- [ ] Run PageSpeed Insights (target mobile score > 85)
- [ ] Images are optimized (Next/Image handles this)
- [ ] No render-blocking resources

**Design:**
- [ ] Looks correct on iPhone 12 (375px wide)
- [ ] Looks correct on iPad (768px)
- [ ] Looks correct on desktop (1440px)
- [ ] No text overflow or layout breaks

**Content:**
- [ ] No placeholder text remaining (`[BUSINESS NAME]`, `Lorem ipsum`, etc.)
- [ ] All copy has been through the Voice Brief filter
- [ ] Photos have correct `alt` text
- [ ] Business hours are accurate

**SEO:**
- [ ] Unique `<title>` tag
- [ ] Meta description set
- [ ] H1 present and keyword-optimized
- [ ] LocalBusiness JSON-LD schema in `<head>`
- [ ] Sitemap generates on build

---

### Step 6 — Deploy to Vercel (15 min)

```bash
# From the site directory
vercel --prod
```

Copy the live preview URL. This is the link that goes in the cold email.

**URL format:** `[business-slug]-demo.vercel.app`

Update `prospects/[business-slug]/research.md`:
```
Demo URL: https://[business-slug]-demo.vercel.app
Deploy Date: [DATE]
```

---

### Step 7 — Final Send Check

Before triggering the email sequence:

- [ ] Demo URL loads (test in incognito)
- [ ] Open Graph preview looks good (test with https://metatags.io)
- [ ] Owner email is confirmed (not info@ or contact@)
- [ ] Personalization variables filled in the email template
- [ ] Price tier selected and appropriate

---

## LocalBusiness Schema Template

Add this to `app/layout.js` or `app/page.js` inside a `<script type="application/ld+json">` tag:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Business Name]",
  "image": "[primary image URL]",
  "url": "[their domain]",
  "telephone": "[phone]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[street]",
    "addressLocality": "[city]",
    "addressRegion": "MT",
    "postalCode": "[zip]",
    "addressCountry": "US"
  },
  "openingHours": ["Mo-Fr 09:00-17:00"],
  "priceRange": "$$"
}
```

---

## Design Anti-Patterns to Avoid

These are the things that make websites look bad. Never include them in a demo:

| Anti-pattern | Why It's Bad | Fix |
|---|---|---|
| Stock photo obviously not the business | Feels fake, impersonal | Use their actual photos or matched unsplash |
| Carousel/slider on hero | Slow, outdated UX | Single full-bleed hero image |
| Centered body text blocks | Hard to read, amateurish | Left-align body text |
| Every font weight the same | Flat hierarchy | Use weight contrast: 700 for headings, 400 for body |
| Too many colors | Chaotic | Stick to 3-color palette |
| No whitespace | Claustrophobic | 80px+ section padding |
| Generic CTA text ("Click Here", "Learn More") | No motivation | Specific CTAs ("Book a Table", "Plan Your Trip") |
| No social proof | Untrustworthy | Always include real Google reviews or testimonials |
