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
        {/* MOBILE STICKY BAR — visible only on ≤768px */}
        <div className="fms-sticky-bar">
          <a href="tel:+18006100292" className="fms-sticky-call">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/>
            </svg>
            800-610-0292
          </a>
          <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="fms-sticky-consult">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Free Consultation
          </a>
        </div>
        <SiteNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
