import type { Metadata } from 'next';
import Link from 'next/link';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About FMS Franchise — 900+ Brands Franchised Since 2009 | FMS',
  description: 'FMS Franchise Marketing Systems is the only full-service franchise development, sales, and marketing firm under one roof. 67-person team. 900+ brands franchised. Founded 2009.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
