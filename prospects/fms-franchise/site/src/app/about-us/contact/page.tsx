import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Our Expert Franchise Consultants | FMS Franchise',
  description: 'Contact Franchise Marketing Systems to get the help you need to franchise your business. Reach our expert consultants at 800-610-0292 or info@fmsfranchise.com.',
  openGraph: {
    title: 'Contact Our Expert Franchise Consultants | FMS Franchise',
    description: 'Contact Franchise Marketing Systems to get the help you need to franchise your business.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
