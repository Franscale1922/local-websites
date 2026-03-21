import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Electrician in Skagit County, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Mount Vernon, Burlington, Anacortes, Sedro-Woolley, La Conner, and all of Skagit County. Panel upgrades, EV charging, historic home rewiring. Call (360) 421-5230.',
  alternates: { canonical: '/service-area/skagit-county' },
  openGraph: { images: [{ url: '/images/hero-skagit.jpg', width: 1200, height: 630, alt: 'Skagit Valley tulip fields — Premier Electrical Services home county' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function SkagitCountyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Area', item: '/service-area' },
          { '@type': 'ListItem', position: 3, name: 'Skagit County', item: '/service-area/skagit-county' },
        ],
      }) }} />

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

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-skagit.jpg"
          alt="Skagit Valley tulip fields in bloom with the North Cascades in the background"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Skagit County, WA
          </div>
          <h1>Skagit County&apos;s Three-Time Best of the Best Electricians.</h1>
          <p className="county-hero-sub">
            Based in Mount Vernon. Serving Mount Vernon, Burlington, Anacortes, Sedro-Woolley, La Conner, Concrete, and every corner of Skagit County.
          </p>
          <div className="county-hero-ctas">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-body">
              <span className="eyebrow">Our Home County</span>
              <h2>We Know Skagit County — Every Neighborhood, Every Housing Era.</h2>
              <p className="service-intro">
                Premier Electrical Services is based in Mount Vernon and has been doing electrical work throughout Skagit County for years. We&apos;re the area&apos;s three-time &ldquo;Best of the Best&rdquo; award winner — 2023, 2024, and 2025 — and carry an A+ rating with the Better Business Bureau.
              </p>
              <p className="service-intro">
                Skagit County has a unique mix of housing stock — historic craftsman homes in Anacortes and Sedro-Woolley, post-war neighborhoods in Burlington, rural agricultural properties in Concrete and Hamilton, and modern construction throughout the Mount Vernon corridor. We work on all of it. We specialize in the complex, older properties that other electricians decline, and we handle everything from service calls to full rewires.
              </p>
              <p className="service-intro">
                If you&apos;re in Mount Vernon, Burlington, Anacortes, Sedro-Woolley, La Conner, Bow, Concrete, Hamilton, or anywhere in Skagit County — we serve your area with same-day response on most requests.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Cities We Serve in Skagit County</h3>
              <ul className="included-list">
                {[
                  'Mount Vernon (home base)',
                  'Burlington',
                  'Anacortes',
                  'Sedro-Woolley',
                  'La Conner',
                  'Concrete',
                  'Hamilton',
                  'Lyman',
                  'Bow',
                  'Bay View',
                  'Clear Lake',
                  'Big Lake',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Skagit County Specialties</span>
          <h2>Services Most Requested in Our Home County</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3"/><path d="M12 10v-2"/></svg>, title: 'Historic Home Rewiring', desc: 'Anacortes, Sedro-Woolley, and parts of Mount Vernon have significant pre-1960 housing. We specialize in knob-and-tube replacement and older-home upgrades — the work other electricians pass on.' },
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="7" y1="6" x2="7" y2="18"/><line x1="12" y1="6" x2="12" y2="18"/><line x1="17" y1="6" x2="17" y2="18"/><line x1="2" y1="11" x2="22" y2="11"/><circle cx="7" cy="8" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><circle cx="17" cy="8" r="1" fill="currentColor"/></svg>, title: 'Panel Upgrades', desc: 'From Skagit PUD territory to co-op service areas, we handle the utility coordination, the permit, and the inspection. One call covers it all.' },
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="15" height="13" rx="2"/><path d="M16 10h2a2 2 0 012 2v3a2 2 0 01-2 2h-2"/><path d="M5 6V4"/><path d="M9 6V4"/><path d="M11 13l-3 5h4l-3 5"/></svg>, title: 'EV Charging', desc: "Washington State EV ownership is growing fast. We've installed Level 2 chargers on homes from Burlington to Anacortes, properly permitted every time." },
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="22" height="11" rx="2"/><path d="M5 7V5a1 1 0 011-1h3a1 1 0 011 1v2"/><path d="M19 7V5a1 1 0 00-1-1h-3a1 1 0 00-1 1v2"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 10v-3"/><path d="M12 14v3"/></svg>, title: 'Generator Hookups', desc: 'Rural Skagit properties — from properties on Chuckanut to farms near Concrete — see extended outages in winter. A transfer switch is the right answer.' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-number">{w.svg}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="trust-strip">
        {[
          { svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>, label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025' },
          { svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>, label: 'A+ BBB Rating', sub: 'Licensed, Bonded & Insured' },
          { svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Based in Mount Vernon', sub: 'Serving All of Skagit County' },
          { svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, label: 'Same-Day Response', sub: 'Most service requests' },
        ].map(t => (
          <div key={t.label} className="trust-strip-item">
            <div className="trust-strip-icon">{t.svg}</div>
            <div className="trust-strip-text"><span>{t.label}</span>{t.sub}</div>
          </div>
        ))}
      </div>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>In Skagit County? We&apos;re Your Electricians.</h2>
            <p>Free estimates on most projects. We show up when we say we will. We do the job right.</p>
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
