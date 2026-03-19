import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://premier-electrical-demo.vercel.app';
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/panel-upgrades`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/ev-charging`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/generator-installation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/historic-home-rewiring`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/commercial-wiring`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/lighting-upgrades`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/service-calls`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/service-area`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/service-area/skagit-county`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/service-area/whatcom-county`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/service-area/island-county`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/service-area/san-juan-county`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
