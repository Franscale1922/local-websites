import type { Metadata } from 'next';
import OurClientsClient from './OurClientsClient';

export const metadata: Metadata = {
  title: 'Discover Our Clients and Their Franchise Success Stories | FMS Franchise',
  description: 'Explore how our clients discover growth through franchising with Franchise Marketing Systems, helping over 700 businesses thrive in the franchise industry.',
  openGraph: {
    title: 'Discover Our Clients and Their Franchise Success Stories | FMS Franchise',
    description: 'Explore how our clients discover growth through franchising with Franchise Marketing Systems, helping over 700 businesses thrive in the franchise industry.',
  },
};

export default function OurClientsPage() {
  return <OurClientsClient />;
}
