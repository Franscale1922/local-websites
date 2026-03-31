// ─────────────────────────────────────────────────────────────────────────────
// CLIENT CONFIG — swap this file per client deployment
// Everything else in the app stays identical
// ─────────────────────────────────────────────────────────────────────────────

export const clientConfig = {
  // Business identity
  businessName: "Premier Electrical Services",
  niche: "electrician", // Used to flavor AI prompts: electrician | plumber | hvac | landscaper | etc.

  // Location
  primaryCity: "Mount Vernon",
  state: "WA",
  serviceAreas: [
    "Mount Vernon",
    "Burlington",
    "Anacortes",
    "Sedro-Woolley",
    "La Conner",
    "Bellingham",
    "Ferndale",
    "Lynden",
    "Oak Harbor",
    "Camano Island",
  ],

  // Services (shown in dropdown — customize per business type)
  serviceTypes: [
    "Panel Upgrade",
    "EV Charger Installation",
    "Generator Installation",
    "Electrical Service Call",
    "Lighting Upgrade",
    "Commercial Wiring",
    "Historic Home Rewiring",
    "Surge Protection",
    "Ceiling Fan Installation",
    "Hot Tub / Spa Wiring",
  ],

  // Contact & review links
  phone: "(360) 555-0100",
  googleReviewUrl: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review",
  yelpUrl: "https://yelp.com/biz/premier-electrical-mount-vernon",

  // Branding (used for the tool's UI accent color)
  brandColor: "#d4af37",
  brandColorDark: "#b8960f",
}

export type ClientConfig = typeof clientConfig
