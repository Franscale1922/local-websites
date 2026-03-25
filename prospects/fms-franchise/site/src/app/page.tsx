import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

export const metadata: Metadata = {
  title: 'Franchise Marketing Systems — Turn Your Business Into a Franchise',
  description: 'FMS helps proven SMB owners franchise their concept and scale with independent owner-operators. 979 brands franchised, 234 successful exits. Free feasibility assessment.',
};

export default function HomePage() {
  return <HomePageClient />;
}
