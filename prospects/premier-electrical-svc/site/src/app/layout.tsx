import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Premier Electrical Services | Licensed Electrician | Mount Vernon, WA',
  description: 'Licensed, bonded electricians serving Bellingham to Seattle. Panel upgrades, EV charging, generators & more. 3-time Best of the Best winner. Free estimates.',
  openGraph: {
    type: 'website',
    title: 'Premier Electrical Services | Licensed Electrician | Mount Vernon, WA',
    description: 'Licensed, bonded electricians serving Bellingham to Seattle. Panel upgrades, EV charging, generators & more. 3-time Best of the Best winner.',
    url: 'https://premierelectricalsvc.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        {/* DEMO MODE: Remove noindex line above when site goes live */}

        {/* LocalBusiness JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              "name": "Premier Electrical Services",
              "description": "Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. Panel upgrades, EV charging, generators, and more.",
              "url": "https://premierelectricalsvc.com",
              "telephone": "+13604215230",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1500 East College Way Ste A PMB 291",
                "addressLocality": "Mount Vernon",
                "addressRegion": "WA",
                "postalCode": "98273",
                "addressCountry": "US"
              },
              "areaServed": [
                "Skagit County",
                "Whatcom County",
                "San Juan County",
                "Island County",
                "King County",
                "Snohomish County"
              ],
              "priceRange": "$$",
              "hasCredential": "PREMIES821LL",
              "award": [
                "Best of the Best — Skagit Valley 2023",
                "Best of the Best — Skagit Valley 2024",
                "Best of the Best — Skagit Valley 2025"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
