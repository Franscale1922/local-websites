import type { Metadata } from 'next';
import './globals.css';
import SiteNav from './components/SiteNav';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | FMS Franchise Marketing Systems',
    default: 'Franchise Marketing Systems — Full-Service Franchise Consulting',
  },
  description: 'FMS is the only full-service franchise consulting firm that handles development, sales, and marketing under one roof. 900+ brands franchised since 2009.',
  openGraph: {
    siteName: 'FMS Franchise Marketing Systems',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  keywords: ['franchise consulting', 'franchise development', 'franchise marketing', 'how to franchise your business', 'franchise sales'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Franchise Marketing Systems',
  alternateName: ['FMS Franchise', 'FMS'],
  url: 'https://www.fmsfranchise.com',
  logo: 'https://www.fmsfranchise.com/wp-content/uploads/2021/08/FMS-logo.png',
  telephone: '+1-800-610-0292',
  email: 'info@FranchiseMarketingSystems.com',
  foundingDate: '2009',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 67 },
  description: 'Full-service franchise consulting firm. 979+ brands franchised, 11,340 franchise units sold, 234 successful exits. Services: franchise development, franchise sales, management & support, digital marketing.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6110 McFarland Station Dr, Unit 105',
    addressLocality: 'Alpharetta',
    addressRegion: 'GA',
    postalCode: '30004',
    addressCountry: 'US',
  },
  sameAs: [
    'https://twitter.com/FranchiseMkting',
    'https://www.facebook.com/FranchiseMarketingSystems',
    'https://www.linkedin.com/company/fmsfranchise/',
    'https://www.youtube.com/@franchisemarketingsystems3808',
    'https://www.instagram.com/franchisemarketingsystems',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div style={{ paddingTop: '100px' }}>
          <SiteNav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
