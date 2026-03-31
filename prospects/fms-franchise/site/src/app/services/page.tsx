import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Customized Franchise Services for Success | FMS Franchise',
  description: 'FMS provides end-to-end franchise services: development, FDD preparation, franchise sales, territory mapping, bookkeeping support, and full-service digital marketing. 900+ brands built.',
  openGraph: {
    title: 'Customized Franchise Services for Success | FMS Franchise',
    description: 'End-to-end franchise services: development, sales, territory mapping, and digital marketing. 900+ brands franchised by FMS.',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
