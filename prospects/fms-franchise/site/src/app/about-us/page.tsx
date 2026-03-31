import type { Metadata } from 'next';
import Link from 'next/link';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Learn More About Franchise Marketing Systems | FMS Franchise',
  description: 'Franchise Marketing Systems is a franchise marketing firm with professional franchise consultants. Contact us at 800-610-0292 to learn how we can help.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
