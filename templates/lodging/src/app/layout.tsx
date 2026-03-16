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
      </head>
      <body>{children}</body>
    </html>
  );
}
