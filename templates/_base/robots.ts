import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  // During demo phase (no real domain): block indexing so Google doesn't
  // index the demo URL. Remove or change to Allow once on the real domain.
  const isDemoPhase = !process.env.NEXT_PUBLIC_SITE_URL || BASE_URL.includes('vercel.app');

  return {
    rules: {
      userAgent: '*',
      allow: isDemoPhase ? undefined : '/',
      disallow: isDemoPhase ? '/' : undefined,
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
