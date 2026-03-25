import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://summitdentalmt.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Summit Dental Group | Kalispell, MT — Veteran-Owned Family Dentist',
    template: '%s | Summit Dental Group',
  },
  description: 'Veteran-owned dental practice in Kalispell, MT. Dr. Mark Vanzant, DMD — 4.8★ Google rating, 469 reviews. Accepting TRICARE, ADDP & most insurance. Same-day emergency care.',
  openGraph: {
    type: 'website',
    siteName: 'Summit Dental Group',
    title: 'Summit Dental Group | Kalispell, MT — Veteran-Owned Family Dentist',
    description: 'Veteran-owned dental practice in Kalispell, MT. 4.8★ Google rating. TRICARE accepted. Same-day emergency care available.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summit Dental Group | Kalispell, MT',
    description: 'Veteran-owned dental practice in Kalispell, MT. 4.8★ Google rating, 469 reviews. TRICARE accepted.',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Summit Dental Group",
              "description": "Veteran-owned dental practice serving Kalispell and the Flathead Valley. General, cosmetic, implant, and sedation dentistry. TRICARE and most insurance accepted.",
              "url": SITE_URL,
              "telephone": "+14067524545",
              "image": `${SITE_URL}/images/hero-homepage.jpg`,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "203 Business Center Loop, Suite C",
                "addressLocality": "Kalispell",
                "addressRegion": "MT",
                "postalCode": "59901",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.1936,
                "longitude": -114.3120
              },
              "openingHours": ["Tu-Fr 08:00-17:00"],
              "priceRange": "$$",
              "medicalSpecialty": "Dentistry",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "ratingCount": "469",
                "reviewCount": "469"
              },
              "sameAs": [
                "https://www.facebook.com/summitdentalmt"
              ]
            })
          }}
        />
      </head>
      <body>
        {/* Emergency top bar */}
        <div className="emergency-bar">
          🦷 Dental Emergency? Call us now:{' '}
          <a href="tel:+14067524545">(406) 752-4545</a>
          &nbsp;— Same-day appointments available
        </div>
        {children}
      </body>
    </html>
  );
}
