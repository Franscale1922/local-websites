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
      
      {/* LocalBusiness JSON-LD Schema — update per prospect before deployment */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BUSINESS_NAME",
            "description": "BUSINESS_DESCRIPTION",
            "url": "https://DOMAIN.com",
            "telephone": "PHONE",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "STREET_ADDRESS",
              "addressLocality": "CITY",
              "addressRegion": "MT",
              "postalCode": "POSTAL_CODE",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "LAT",
              "longitude": "LNG"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "image": "https://DOMAIN.com/og-image.jpg",
            "priceRange": "72525",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "RATING",
              "reviewCount": "REVIEW_COUNT"
            }
          })
        }}
      />
    </head>
      <body>{children}</body>
    </html>
  );
}
