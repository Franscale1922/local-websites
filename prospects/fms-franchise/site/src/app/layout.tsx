import type { Metadata } from 'next';
import './globals.css';
import SiteNav from './components/SiteNav';
import Footer from './components/Footer';
// fonts are loaded via @import in globals.css

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fmsfranchise.com'),
  title: {
    template: '%s | FMS Franchise Marketing Systems',
    default: 'Franchise Marketing Systems — Full-Service Franchise Consulting',
  },
  description: 'FMS is the only full-service franchise consulting firm that handles development, sales, and marketing under one roof. 900+ brands franchised since 2009.',
  openGraph: {
    siteName: 'FMS Franchise Marketing Systems',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/icons/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FMS Franchise Marketing Systems — Full-Service Franchise Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/icons/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/icons/favicon.ico',
  },
  keywords: ['franchise consulting', 'franchise development', 'franchise marketing', 'how to franchise your business', 'franchise sales'],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://www.fmsfranchise.com/#organization',
  name: 'Franchise Marketing Systems',
  alternateName: ['FMS Franchise', 'FMS'],
  url: 'https://www.fmsfranchise.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.fmsfranchise.com/wp-content/uploads/2021/08/FMS-logo.png',
    width: 300,
    height: 75,
  },
  telephone: '+1-800-610-0292',
  email: 'info@FranchiseMarketingSystems.com',
  foundingDate: '2009',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 67 },
  description: 'Full-service franchise consulting firm specializing in franchise development, franchise sales, and franchise marketing. 979+ brands franchised, 11,340 franchise units sold, 234 successful exits since 2009.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6110 McFarland Station Dr, Unit 105',
    addressLocality: 'Alpharetta',
    addressRegion: 'GA',
    postalCode: '30004',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    'International',
  ],
  knowsAbout: [
    'Franchise Development',
    'Franchise Disclosure Document (FDD)',
    'Franchise Sales',
    'Franchise Marketing',
    'How to Franchise a Business',
    'Franchise Operations Manuals',
    'Territory Mapping',
    'Franchise Business Plans',
    'International Franchising',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Franchise Consulting Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Franchise Development', url: 'https://www.fmsfranchise.com/services/franchise-development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Franchise Sales', url: 'https://www.fmsfranchise.com/services/franchise-sales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Franchise Business Plans', url: 'https://www.fmsfranchise.com/services/franchise-business-plans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Franchise Territory Mapping', url: 'https://www.fmsfranchise.com/services/franchise-territory-mapping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Franchise Marketing', url: 'https://www.fmsfranchise.com/services/marketing-your-franchise' } },
    ],
  },
  sameAs: [
    'https://twitter.com/FranchiseMkting',
    'https://www.facebook.com/FranchiseMarketingSystems',
    'https://www.linkedin.com/company/fmsfranchise/',
    'https://www.youtube.com/@franchisemarketingsystems3808',
    'https://www.instagram.com/franchisemarketingsystems',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.fmsfranchise.com/#website',
  name: 'FMS Franchise Marketing Systems',
  url: 'https://www.fmsfranchise.com',
  publisher: { '@id': 'https://www.fmsfranchise.com/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://www.fmsfranchise.com/?s={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Mobile sticky CTA bar — CSS only, defined in globals.css */}
        <div className="fms-sticky-bar">
          <a href="tel:+18006100292" className="fms-sticky-call">
            📞 800-610-0292
          </a>
          <a href="/franchise-your-business" className="fms-sticky-consult">
            Franchise My Business
          </a>
        </div>
        <SiteNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
