import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Franchise Services — Development, Sales & Marketing | FMS',
  description: 'FMS provides end-to-end franchise services: development, FDD preparation, franchise sales, territory mapping, bookkeeping support, and full-service digital marketing. 900+ brands built.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/services',
  },
  openGraph: {
    title: 'Franchise Services | FMS Franchise Marketing Systems',
    description: 'End-to-end franchise services: development, sales, territory mapping, and digital marketing. 900+ brands franchised by FMS.',
    url: 'https://www.fmsfranchise.com/services',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'FMS Franchise Services' }],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
