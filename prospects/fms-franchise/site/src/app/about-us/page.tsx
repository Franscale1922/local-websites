import type { Metadata } from 'next';
import Link from 'next/link';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About FMS Franchise — 900+ Brands Franchised Since 2009 | FMS',
  description: 'FMS Franchise Marketing Systems is the only full-service franchise development, sales, and marketing firm under one roof. 67-person team. 900+ brands franchised. Founded 2009.',
  openGraph: {
    title: 'About FMS Franchise Marketing Systems',
    description: 'The only full-service franchise consulting firm. 67-person team. 900+ brands franchised since 2009. Full-service: development, sales, and marketing.',
    url: 'https://site-ruby-five-98.vercel.app/about-us',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'FMS Franchise — About Us' }],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
