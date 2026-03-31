import type { MetadataRoute } from 'next';

const BASE_URL = 'https://site-ruby-five-98.vercel.app';


// Priority groups
const HIGH = 1.0;
const MEDIUM = 0.8;
const LOW = 0.6;
const LOWER = 0.5;

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?: ChangeFreq;
  priority?: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: SitemapEntry[] = [
    // ── Core / Homepage ──
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: HIGH },
    { url: `${BASE_URL}/franchise-your-business`, changeFrequency: 'weekly', priority: HIGH },
    { url: `${BASE_URL}/franchise-readiness-assessment`, changeFrequency: 'monthly', priority: HIGH },
    { url: `${BASE_URL}/roi-calculator`, changeFrequency: 'monthly', priority: HIGH },
    { url: `${BASE_URL}/franchise-feasibility-questionnaire`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: MEDIUM },

    // ── Services ──
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/services/franchise-development`, changeFrequency: 'monthly', priority: HIGH },
    { url: `${BASE_URL}/services/franchise-sales`, changeFrequency: 'monthly', priority: HIGH },
    { url: `${BASE_URL}/services/franchise-business-plans`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/services/franchise-territory-mapping`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/services/management-support`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/services/efficiency-audit`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/services/franchise-bookkeeping-support`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/services/marketing-your-franchise`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/services/marketing-your-franchise/seo`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/outsourced-franchise-support-services`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/international`, changeFrequency: 'monthly', priority: MEDIUM },

    // ── FMS Digital ──
    { url: `${BASE_URL}/fms-digital`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/fms-digital/lead-generation`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/fms-digital/franchise-branding-services`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/fms-digital/website-design`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/fms-digital/franchise-social-media-strategy`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/fms-digital/franchise-tradeshows-lead-generation`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/fms-digital/franchise-success-stories`, changeFrequency: 'monthly', priority: LOW },

    // ── Industries ──
    { url: `${BASE_URL}/industries`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/home-services`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/health-beauty`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/children`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/food-beverage`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/retail`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/real-estate`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/automotive`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/home-based`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/education`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/healthcare`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/industries/services`, changeFrequency: 'monthly', priority: MEDIUM },

    // ── Learn / Education ──
    { url: `${BASE_URL}/learn`, changeFrequency: 'weekly', priority: MEDIUM },
    { url: `${BASE_URL}/learn/what-is-franchising`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/learn/why-franchise`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/learn/franchise-industry-facts`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/learn/faq`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/learn/how-to-franchise-your-business`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/learn/resources`, changeFrequency: 'monthly', priority: LOW },
    { url: `${BASE_URL}/learn/state-guidelines`, changeFrequency: 'monthly', priority: LOW },
    { url: `${BASE_URL}/learn/how-to-guides`, changeFrequency: 'weekly', priority: MEDIUM },
    { url: `${BASE_URL}/learn/how-to-guides/how-to-start-a-franchise`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/learn/how-to-guides/how-to-write-a-franchise-operations-manual`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/webinars`, changeFrequency: 'weekly', priority: MEDIUM },

    // ── Blog (only posts with full content — fallback posts are noindexed) ──
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: MEDIUM },
    { url: `${BASE_URL}/blog/how-to-franchise-your-business-2025`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/blog/mistakes-first-time-franchisors`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/blog/what-is-franchise-disclosure-document`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/blog/cost-to-franchise-business`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/blog/franchise-discovery-day-guide-for-franchisors`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/blog/how-to-franchise-your-business-in-europe-successfully`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/blog/franchise-territory-mapping-best-practices-for-2025`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/blog/franchisee-onboarding-process-guide-for-growing-franchisors`, changeFrequency: 'monthly', priority: MEDIUM },

    // ── Clients ──
    { url: `${BASE_URL}/our-clients`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/our-clients/testimonials`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/case-studies`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/our-clients/fmsdigital-portfolio`, changeFrequency: 'monthly', priority: LOW },

    // ── About ──
    { url: `${BASE_URL}/about-us`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/about-us/leadership`, changeFrequency: 'monthly', priority: LOW },
    { url: `${BASE_URL}/about-us/contact`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/about-us/blog`, changeFrequency: 'weekly', priority: LOW },
    { url: `${BASE_URL}/meet-the-team`, changeFrequency: 'monthly', priority: LOW },
    { url: `${BASE_URL}/locations`, changeFrequency: 'monthly', priority: MEDIUM },
    { url: `${BASE_URL}/event`, changeFrequency: 'weekly', priority: LOW },
    { url: `${BASE_URL}/news`, changeFrequency: 'weekly', priority: LOW },
    { url: `${BASE_URL}/insights-on-franchise-marketing-systems-press`, changeFrequency: 'monthly', priority: LOW },
    { url: `${BASE_URL}/refer-a-client`, changeFrequency: 'monthly', priority: LOWER },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified: route.lastModified ?? now,
  }));
}
