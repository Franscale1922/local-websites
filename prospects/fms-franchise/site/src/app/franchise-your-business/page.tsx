import type { Metadata } from 'next';
import FranchiseYourBusinessClient from './FranchiseYourBusinessClient';

export const metadata: Metadata = {
  title: 'Franchise Your Business – Free Consultation | FMS Franchise',
  description: 'Book a free franchise consultation with our experts. Learn how to expand, earn royalties, and build a scalable franchise brand from your existing business.',
  openGraph: {
    title: 'Franchise Your Business – Free Consultation | FMS Franchise',
    description: 'Book a free franchise consultation with our experts. Learn how to expand, earn royalties, and build a scalable franchise brand from your existing business.',
  },
};

export default function FranchiseYourBusinessPage() {
  return <FranchiseYourBusinessClient />;
}
