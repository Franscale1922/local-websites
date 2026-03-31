'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '640px', textAlign: 'center' }}>

        {/* 404 number */}
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 'clamp(80px, 15vw, 140px)',
          fontWeight: 900,
          lineHeight: 1,
          color: '#f0f0f0',
          letterSpacing: '-4px',
          marginBottom: '0.25rem',
          userSelect: 'none',
        }}>
          404
        </div>

        {/* Eyebrow */}
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#35a84a',
          marginBottom: '1rem',
        }}>
          Page Not Found
        </p>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(24px, 4vw, 36px)',
          color: '#1a2c1e',
          lineHeight: 1.25,
          marginBottom: '1rem',
        }}>
          This page doesn&apos;t exist — but your franchise could.
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: '1.05rem',
          color: '#555',
          lineHeight: 1.75,
          marginBottom: '2.5rem',
        }}>
          The link may have moved or the URL might be typed incorrectly. Here are some helpful places to go instead:
        </p>

        {/* Quick links grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.75rem',
          marginBottom: '2.5rem',
        }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Our Services', href: '/services' },
            { label: 'Franchise Your Business', href: '/franchise-your-business' },
            { label: 'About FMS', href: '/about-us' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'Contact Us', href: '/about-us/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                background: '#f8faf8',
                border: '1.5px solid #e2e8f0',
                borderRadius: '10px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '0.82rem',
                color: '#2d4135',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#35a84a';
                (e.currentTarget as HTMLElement).style.background = '#f0faf2';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
                (e.currentTarget as HTMLElement).style.background = '#f8faf8';
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/franchise-feasibility-questionnaire" className="btn btn-gold">
            Take the Free Assessment
          </Link>
          <Link href="/" className="btn btn-outline">
            ← Back to Home
          </Link>
        </div>

        {/* Phone */}
        <p style={{
          marginTop: '2rem',
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: '0.9rem',
          color: '#888',
        }}>
          Or call us directly:{' '}
          <a href="tel:+18006100292" style={{ color: '#2d4135', fontWeight: 700 }}>
            800-610-0292
          </a>
        </p>

      </div>
    </div>
  );
}
