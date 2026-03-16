import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TEMPLATE — Replace with Business Name | City, MT',
  description: 'Replace with business-specific meta description (150-160 chars with primary keyword).',
  openGraph: { type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        {/* DEMO MODE: Remove the noindex line above when site goes live */}
      
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
