import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'PSI Automation | Custom Vane Air Motors — 1/4 to 70 HP | Sandpoint, Idaho',
    template: '%s | PSI Automation — Vane Air Motors',
  },
  description: 'Custom-engineered pneumatic vane air motors from 1/4 to 70 HP. No minimum quantity. Field-serviceable. 35+ years manufacturing in Sandpoint, Idaho. Talk to an engineer today.',
  keywords: ['pneumatic air motors', 'vane air motors', 'custom air motors', 'industrial air motors', 'PSI Automation', 'Sandpoint Idaho'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    siteName: 'PSI Automation',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
