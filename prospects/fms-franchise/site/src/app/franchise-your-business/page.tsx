import type { Metadata } from 'next';
import FranchiseYourBusinessClient from './FranchiseYourBusinessClient';

export const metadata: Metadata = {
  title: 'Franchise Your Business | Free Feasibility Consultation | FMS',
  description: 'Ready to franchise your business? FMS offers a free feasibility consultation. 979+ brands franchised since 2009. Franchise development, sales, and marketing under one roof.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/franchise-your-business',
  },
  openGraph: {
    title: 'Franchise Your Business | Free Feasibility Consultation | FMS',
    description: 'Ready to franchise your business? FMS offers a free feasibility consultation. 979+ brands franchised since 2009. Franchise development, sales, and marketing under one roof.',
    url: 'https://www.fmsfranchise.com/franchise-your-business',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'Franchise Your Business — FMS Franchise Marketing Systems' }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Franchise Development Consulting',
  serviceType: 'Franchise Consulting',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.fmsfranchise.com/#organization',
    name: 'Franchise Marketing Systems',
  },
  description: 'Full-service franchise development consulting: feasibility study, FDD preparation, operations manual, training program design, franchise sales support, and marketing — under one roof.',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://www.fmsfranchise.com/franchise-your-business',
  offers: {
    '@type': 'Offer',
    description: 'Free franchise feasibility consultation for qualifying business owners',
    price: '0',
    priceCurrency: 'USD',
    url: 'https://info.fmsfranchise.com/freeconsultation',
  },
};

export default function FranchiseYourBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <FranchiseYourBusinessClient />
    </>
  );
}
