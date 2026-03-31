import type { Metadata } from 'next';
import LeadershipClient from './LeadershipClient';

export const metadata: Metadata = {
  title: 'Our Leadership of Franchise Consultants | FMS Franchise',
  description: "Meet FMS aka Franchise Marketing Systems' expert leadership team of Franchise Consultants who help you thrive your business.",
  openGraph: {
    title: 'Our Leadership of Franchise Consultants | FMS Franchise',
    description: "Meet FMS aka Franchise Marketing Systems' expert leadership team of Franchise Consultants who help you thrive your business.",
  },
};

export default function LeadershipPage() {
  return <LeadershipClient />;
}
