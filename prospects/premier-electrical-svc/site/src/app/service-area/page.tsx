'use client';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';


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
      <SiteNav alwaysScrolled activePath="/service-area" />

      {/* HERO — Aerial Skagit Valley at golden hour */}
      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-service-area.jpg"
          alt="Aerial view of Skagit Valley farmland with Cascade Mountains at golden hour"
          loading="eager"
          style={{ objectPosition: 'center 35%' }}
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Bellingham to Seattle, Six Counties Covered
          </div>
          <h1>We Come to You. Wherever You Are in Western Washington.</h1>
          <p className="county-hero-sub">
            Based in Mount Vernon. Serving Skagit, Whatcom, San Juan, Island, Snohomish, and King counties. Residential and commercial. Licensed, bonded, A+ BBB.
          </p>
          <div className="county-hero-ctas">
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
                  <a key={c.name} href={c.href !== '/service-area' ? c.href : '/contact'} style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    display: 'block',
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(245,166,35,0.25)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,166,35,0.5)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,0,0,0.06)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{c.icon}</div>
                    <h3 style={{ marginBottom: '4px' }}>{c.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.note}</p>
                    <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '16px' }}>
                      {c.cities.join(' · ')}
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent)', marginTop: '8px' }}>
                      {c.href !== '/service-area' ? `View ${c.name} →` : 'Get a Quote →'}
                    </span>
                  </a>
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

      <SiteFooter />
    </main>
  );
}
