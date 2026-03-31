import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

export const metadata: Metadata = {
  title: 'Franchise Your Business | Franchise Development Consulting | FMS',
  description: 'FMS helps proven business owners franchise their concept and scale with independent owner-operators. 979 brands franchised, 234 successful exits. Free feasibility assessment.',
};

export default function HomePage() {
  return <HomePageClient />;
}
