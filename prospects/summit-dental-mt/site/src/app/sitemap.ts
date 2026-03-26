import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://summitdentalmt.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services/dental-implants', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/emergency-dentistry', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/cosmetic-dentistry', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/sedation-dentistry', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/services/teeth-whitening', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/services/crowns-bridges', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/veterans-military', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/new-patients', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/smile-gallery', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/service-area', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/blog/dental-implants-kalispell-mt', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/blog/emergency-dentist-kalispell', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/blog/tricare-dental-kalispell-mt', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/blog/sedation-dentistry-anxiety-flathead-valley', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/teeth-whitening-vs-veneers-kalispell', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/dental-insurance-benefits-end-of-year-montana', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map(r => ({
    url: `${BASE_URL}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
