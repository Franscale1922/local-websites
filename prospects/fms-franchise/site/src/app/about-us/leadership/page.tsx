import type { Metadata } from 'next';
import LeadershipClient from './LeadershipClient';

export const metadata: Metadata = {
  title: 'Our Leadership of Franchise Consultants | FMS Franchise',
  description: 'Meet the leadership team at Franchise Marketing Systems — senior franchise consultants with decades of experience developing, selling, and scaling franchise brands.',
  openGraph: {
    title: 'Our Leadership of Franchise Consultants | FMS Franchise',
    description: 'Senior franchise consultants with decades of experience developing and scaling franchise brands.',
  },
};

export default function LeadershipPage() {
  return <LeadershipClient />;
}
