import type { Metadata } from 'next';
import './globals.css';

// Set NEXT_PUBLIC_SITE_URL in Vercel environment variables to your deploy URL.
// At DNS cutover, update it to https://premierelectricalsvc.com — no code changes needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premierelectricalsvc.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Premier Electrical Services | Licensed Electrician | Mount Vernon, WA',
    template: '%s | Premier Electrical Services',
  },
  description: 'Licensed, bonded electricians serving Bellingham to Seattle. Panel upgrades, EV charging, generators & more. 3-time Best of the Best winner. Free estimates.',
  openGraph: {
    type: 'website',
    siteName: 'Premier Electrical Services',
    title: 'Premier Electrical Services | Licensed Electrician | Mount Vernon, WA',
    description: 'Licensed, bonded electricians serving Bellingham to Seattle. Panel upgrades, EV charging, generators & more. 3-time Best of the Best winner.',
    url: '/',
    images: [
      {
        url: '/images/hero-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Premier Electrical Services — Licensed Electricians in Mount Vernon, WA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Electrical Services | Licensed Electrician | Mount Vernon, WA',
    description: 'Licensed, bonded electricians serving Bellingham to Seattle. Panel upgrades, EV charging, generators & more. 3-time Best of the Best winner.',
    images: ['/images/hero-homepage.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
              "@type": "ElectricalContractor",
              "name": "Premier Electrical Services",
              "description": "Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. Panel upgrades, EV charging, generators, historic home rewiring, and more.",
              "url": SITE_URL,
              "telephone": "+13604215230",
              "email": "premier@premierelectricalsvc.com",
              "image": `${SITE_URL}/images/hero-homepage.jpg`,
              "logo": `${SITE_URL}/logo.svg`,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1500 East College Way Ste A PMB 291",
                "addressLocality": "Mount Vernon",
                "addressRegion": "WA",
                "postalCode": "98273",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.4202,
                "longitude": -122.3346
              },
              "openingHours": ["Mo-Fr 08:00-18:00"],
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Skagit County, WA" },
                { "@type": "AdministrativeArea", "name": "Whatcom County, WA" },
                { "@type": "AdministrativeArea", "name": "San Juan County, WA" },
                { "@type": "AdministrativeArea", "name": "Island County, WA" },
                { "@type": "AdministrativeArea", "name": "King County, WA" },
                { "@type": "AdministrativeArea", "name": "Snohomish County, WA" },
                { "@type": "City", "name": "Mount Vernon, WA" },
                { "@type": "City", "name": "Burlington, WA" },
                { "@type": "City", "name": "Anacortes, WA" },
                { "@type": "City", "name": "Sedro-Woolley, WA" },
                { "@type": "City", "name": "La Conner, WA" },
                { "@type": "City", "name": "Concrete, WA" },
                { "@type": "City", "name": "Bellingham, WA" },
                { "@type": "City", "name": "Ferndale, WA" },
                { "@type": "City", "name": "Lynden, WA" },
                { "@type": "City", "name": "Oak Harbor, WA" },
                { "@type": "City", "name": "Camano Island, WA" },
                { "@type": "City", "name": "Stanwood, WA" },
                { "@type": "City", "name": "Marysville, WA" },
                { "@type": "City", "name": "Everett, WA" },
                { "@type": "City", "name": "Kirkland, WA" }
              ],
              "priceRange": "$$",
              "hasCredential": "PREMIES821LL",
              "award": [
                "Best of the Best — Skagit Valley 2021",
                "Best of the Best — Skagit Valley 2023",
                "Best of the Best — Skagit Valley 2024",
                "Best of the Best — Skagit Valley 2025"
              ],
              "sameAs": [
                "https://www.facebook.com/premierelectricalsvc",
                "https://www.bbb.org/us/wa/mount-vernon/profile/electrical-contractors/premier-electrical-services-inc-1296-1000135427"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "ratingCount": "47",
                "reviewCount": "47"
              },
              "employee": {
                "@type": "Person",
                "name": "Premier Electrical Services Owner",
                "jobTitle": "Master Electrician",
                "hasCredential": {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "License",
                  "name": "Washington State Electrical Contractor License",
                  "identifier": "PREMIES821LL",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "Washington State Department of Labor & Industries"
                  }
                },
                "worksFor": { "@type": "ElectricalContractor", "name": "Premier Electrical Services" }
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
