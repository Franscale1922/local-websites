import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Area | Premier Electrical Services — Skagit to Seattle, WA',
  description: 'Premier Electrical Services serves Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. Based in Mount Vernon, WA. Licensed, bonded, A+ BBB.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const COUNTIES = [
  {
    name: 'Skagit County',
    href: '/service-area/skagit-county',
    cities: ['Mount Vernon', 'Burlington', 'Anacortes', 'Sedro-Woolley', 'La Conner', 'Concrete', 'Hamilton', 'Lyman'],
    note: 'Our home base. Primary service area.',
    icon: '🏠',
  },
  {
    name: 'Whatcom County',
    href: '/service-area/whatcom-county',
    cities: ['Bellingham', 'Ferndale', 'Lynden', 'Blaine', 'Birch Bay', 'Everson', 'Nooksack'],
    note: 'Regular service area.',
    icon: '⚡',
  },
  {
    name: 'Island County',
    href: '/service-area/island-county',
    cities: ['Oak Harbor', 'Camano Island', 'Coupeville', 'Langley', 'Freeland'],
    note: 'Whidbey and Camano Island coverage.',
    icon: '🏝️',
  },
  {
    name: 'San Juan County',
    href: '/service-area/san-juan-county',
    cities: ['Friday Harbor', 'Eastsound', 'Roche Harbor', 'Lopez Village'],
    note: 'Island service — scheduling by project.',
    icon: '⛵',
  },
  {
    name: 'Snohomish County',
    href: '/service-area',
    cities: ['Everett', 'Marysville', 'Arlington', 'Stanwood', 'Monroe', 'Mukilteo'],
    note: 'Extended service area.',
    icon: '🔌',
  },
  {
    name: 'King County',
    href: '/service-area',
    cities: ['Seattle', 'Kirkland', 'Redmond', 'Bothell', 'Kenmore'],
    note: 'Extended service area — select projects.',
    icon: '🌆',
  },
];

export default function ServiceAreaPage() {
  return (
    <main>
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service-area" className="nav-link--active">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h1>Serving the Greater Puget Sound — Bellingham to Seattle.</h1>
          <p className="page-hero-sub">
            Based in Mount Vernon, WA. We serve residential and commercial customers across six counties — from the San Juan Islands to King County.
          </p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="area-grid" style={{ alignItems: 'start' }}>
            <div>
              <span className="eyebrow">Counties We Serve</span>
              <h2 style={{ marginBottom: '36px' }}>Find Your Area</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {COUNTIES.map(c => (
                  <div key={c.name} style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{c.icon}</div>
                    <h3 style={{ marginBottom: '4px' }}>{c.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.note}</p>
                    <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '16px' }}>
                      {c.cities.join(' · ')}
                    </p>
                    {c.href !== '/service-area' ? (
                      <a href={c.href} className="service-link">View {c.name} →</a>
                    ) : (
                      <a href="/contact" className="service-link">Get a Quote →</a>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="area-map" style={{ minHeight: '420px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341076.54706738576!2d-122.64133373671978!3d48.27244854254849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5484b6b027cfe07f%3A0xe24eba44eab793c2!2sMount%20Vernon%2C%20WA%2098273!5e0!3m2!1sen!2sus!4v1710783200000!5m2!1sen!2sus"
                title="Premier Electrical Services service area"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ height: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>In Our Service Area? Let&apos;s Talk.</h2>
            <p>Free estimates on most projects. We respond same day.</p>
          </div>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Service Areas</h4><ul>
            <li><a href="/service-area/skagit-county">Skagit County</a></li>
            <li><a href="/service-area/whatcom-county">Whatcom County</a></li>
            <li><a href="/service-area/island-county">Island County</a></li>
            <li><a href="/service-area/san-juan-county">San Juan County</a></li>
          </ul></div>
          <div className="footer-col"><h4>Contact</h4><ul>
            <li><a href={PHONE_TEL}>{PHONE}</a></li>
            <li><a href="/contact">Free Estimate</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Premier Electrical Services</span>
          <span><a href={PHONE_TEL}>{PHONE}</a> · Lic. PREMIES821LL</span>
        </div>
      </footer>
    </main>
  );
}
