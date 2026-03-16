import type { Metadata } from 'next';
import './globals.css';

// ─── CUSTOMIZE PER PROSPECT ──────────────────────────────────────────────────
const BUSINESS = {
  name: 'Peak Pursuits',           // Full business name
  city: 'Whitefish',
  state: 'MT',
  phone: '(406) 555-0100',
  email: 'hello@peakpursuits.com',
  description: 'Montana backcountry guide service offering hiking, skiing, and fly fishing trips in and around Glacier National Park.',
};
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Glacier National Park Guide Service | ${BUSINESS.city}, ${BUSINESS.state}`,
  description: BUSINESS.description,
  openGraph: {
    title: BUSINESS.name,
    description: BUSINESS.description,
    type: 'website',
    locale: 'en_US',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristInformationCenter',
  name: BUSINESS.name,
  description: BUSINESS.description,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main St',
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: '59937',
    addressCountry: 'US',
  },
  priceRange: '$$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
