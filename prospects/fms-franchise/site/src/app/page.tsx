import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

export const metadata: Metadata = {
  title: 'Franchise Your Business | Franchise Consulting | FMS',
  description: 'FMS helps proven business owners franchise their concept and scale with independent owner-operators. 979 brands franchised, 234 successful exits. Free feasibility assessment.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/',
  },
  openGraph: {
    title: 'Franchise Your Business | FMS Franchise Marketing Systems',
    description: 'The only full-service franchise consulting firm handling development, sales, and marketing under one roof. 979 brands franchised. Free feasibility assessment.',
    url: 'https://www.fmsfranchise.com/',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'FMS Franchise Marketing Systems — Franchise Your Business' }],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
