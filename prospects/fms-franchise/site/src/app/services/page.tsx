import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Customized Franchise Services for Success | FMS Franchise',
  description: 'FMS offers tailored franchise services designed to meet your business needs, ensuring effective development programs for your franchise success.',
  openGraph: {
    title: 'Customized Franchise Services for Success | FMS Franchise',
    description: 'FMS offers tailored franchise services designed to meet your business needs, ensuring effective development programs for your franchise success.',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
