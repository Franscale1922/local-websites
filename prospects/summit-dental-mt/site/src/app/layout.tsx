import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://summitdentalmt.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Summit Dental Group | Kalispell, MT: Veteran-Owned Family Dentist',
    template: '%s | Summit Dental Group',
  },
  description: 'Veteran-owned dental practice in Kalispell, MT. Dr. Mark Vanzant, DMD: 4.8\u2605 Google rating, 469 reviews. Accepting TRICARE, ADDP & most insurance. Same-day emergency care.',
  openGraph: {
    type: 'website',
    siteName: 'Summit Dental Group',
    title: 'Summit Dental Group | Kalispell, MT: Veteran-Owned Family Dentist',
    description: 'Veteran-owned dental practice in Kalispell, MT. 4.8★ Google rating. TRICARE accepted. Same-day emergency care available.',
    url: '/',
    images: [
      {
        url: '/images/hero-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Summit Dental Group — Veteran-Owned Dental Practice in Kalispell, MT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summit Dental Group | Kalispell, MT',
    description: 'Veteran-owned dental practice in Kalispell, MT. 4.8★ Google rating, 469 reviews. TRICARE accepted.',
    images: ['/images/hero-homepage.jpg'],
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
              "areaServed": [
                "Kalispell, MT",
                "Whitefish, MT",
                "Columbia Falls, MT",
                "Bigfork, MT",
                "Polson, MT",
                "Ronan, MT",
                "Flathead Valley, MT"
              ],
              "employee": {
                "@type": "Person",
                "name": "Mark A. Vanzant",
                "honorificPrefix": "Dr.",
                "honorificSuffix": "DMD",
                "jobTitle": "Owner & Lead Dentist",
                "description": "Dr. Mark Vanzant, DMD is a United States Air Force veteran with three combat deployments and an active member of the Montana Army National Guard. He is the founder and owner of Summit Dental Group in Kalispell, MT, specializing in family, cosmetic, implant, and sedation dentistry.",
                "alumniOf": "University of Florida College of Dentistry"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Dental Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dental Implants", "url": `${SITE_URL}/services/dental-implants` } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Dentistry", "url": `${SITE_URL}/services/emergency-dentistry` } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cosmetic Dentistry", "url": `${SITE_URL}/services/cosmetic-dentistry` } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sedation Dentistry", "url": `${SITE_URL}/services/sedation-dentistry` } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Teeth Whitening", "url": `${SITE_URL}/services/teeth-whitening` } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crowns & Bridges", "url": `${SITE_URL}/services/crowns-bridges` } }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "ratingCount": "469",
                "reviewCount": "469"
              },
              "sameAs": [
                "https://www.facebook.com/summitdentalmt",
                "https://www.instagram.com/summitdentalgroupmt/",
                "https://www.youtube.com/channel/UC3VM6TKW9jtcZGuPyxv_bBw/featured",
                "https://www.yelp.com/biz/summit-dental-group-kalispell"
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
          &nbsp;. Same-day appointments available
        </div>
        {children}
      </body>
    </html>
  );
}
