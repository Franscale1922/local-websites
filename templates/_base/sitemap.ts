import { MetadataRoute } from 'next';

/**
 * sitemap.ts — included in all 6 templates.
 * Next.js auto-serves this at /sitemap.xml.
 *
 * IMPORTANT: Before launch, update `BASE_URL` to the client's final domain.
 * For demo phase, leave as-is — Vercel will serve it at the demo URL.
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
