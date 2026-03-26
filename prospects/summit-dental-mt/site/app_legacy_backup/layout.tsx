import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileSticky from './components/MobileSticky';

export const metadata: Metadata = {
  title: {
    default: 'Summit Dental Group | Kalispell, MT Dentist | Dr. Mark Vanzant DMD',
    template: '%s | Summit Dental Group — Kalispell, MT',
  },
  description:
    'Veteran-owned dental practice serving Kalispell and the Flathead Valley. Dr. Mark Vanzant DMD offers gentle family, cosmetic, and emergency dentistry. TRICARE & most insurance accepted. 4.8★ rated.',
  keywords: [
    'dentist kalispell mt',
    'kalispell dentist',
    'flathead valley dentist',
    'veteran dentist kalispell',
    'tricare dentist kalispell',
    'cosmetic dentist kalispell',
    'dental implants kalispell',
    'emergency dentist kalispell',
    'family dentist kalispell',
    'summit dental group',
    'Dr Mark Vanzant DMD',
  ],
  authors: [{ name: 'Summit Dental Group' }],
  creator: 'Summit Dental Group',
  metadataBase: new URL('https://summitdentalmt.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://summitdentalmt.com',
    siteName: 'Summit Dental Group',
    title: 'Summit Dental Group | Kalispell, MT Dentist',
    description:
      'Veteran-owned dental practice in Kalispell, MT. Gentle family, cosmetic & emergency care. TRICARE accepted. ⭐ 4.8/5 on Google.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': 'https://summitdentalmt.com/#dentist',
  name: 'Summit Dental Group',
  image: 'https://summitdentalmt.com/images/office.jpg',
  description:
    'Veteran-owned dental practice offering gentle family, cosmetic, restorative, and emergency dentistry in Kalispell, Montana. Accepts TRICARE, ADDP, and most major insurance plans.',
  url: 'https://summitdentalmt.com',
  telephone: '+14067524545',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '203 Business Center Loop, Suite C',
    addressLocality: 'Kalispell',
    addressRegion: 'MT',
    postalCode: '59901',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.1974,
    longitude: -114.3155,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '469',
    bestRating: '5',
  },
  sameAs: [
    'https://www.facebook.com/summitdentalmt',
    'https://www.instagram.com/summitdentalmt',
    'https://www.yelp.com/biz/summit-dental-group-kalispell',
  ],
  founder: {
    '@type': 'Physician',
    name: 'Dr. Mark A. Vanzant, DMD',
    description: 'U.S. Air Force Veteran with 3 combat deployments. Active Montana Army National Guard. Doctor of Medical Dentistry from the University of Florida.',
  },
  paymentAccepted: ['TRICARE', 'ADDP', 'United Concordia', 'Delta Dental', 'Aetna', 'MetLife', 'Cigna', 'CareCredit', 'Cash', 'Check', 'Credit Card'],
  currenciesAccepted: 'USD',
  areaServed: ['Kalispell MT', 'Whitefish MT', 'Columbia Falls MT', 'Bigfork MT', 'Flathead Valley MT'],
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
        <div
          className="emergency-bar"
          role="banner"
          aria-label="Emergency dental care notice"
        >
          🦷 Dental Emergency?{' '}
          <a href="tel:+14067524545" aria-label="Call Summit Dental Group for emergency care">
            Call (406) 752-4545
          </a>{' '}
          — Same-Day Appointments Available
        </div>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileSticky />
      </body>
    </html>
  );
}
