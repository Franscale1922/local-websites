import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrician in Snohomish County, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Everett, Marysville, Arlington, Stanwood, Monroe, and all of Snohomish County. Panel upgrades, EV charging, older home rewiring. Call (360) 421-5230.',
  alternates: { canonical: '/service-area/snohomish-county' },
  openGraph: { images: [{ url: '/images/hero-service-area.jpg', width: 1200, height: 630, alt: 'Premier Electrical Services serving Snohomish County, WA' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function SnohomishCountyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Area', item: '/service-area' },
          { '@type': 'ListItem', position: 3, name: 'Snohomish County', item: '/service-area/snohomish-county' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/service-area" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-service-area.jpg"
          alt="Pacific Northwest landscape with mountains — Snohomish County service area"
          loading="eager"
          style={{ objectPosition: 'center 40%' }}
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Snohomish County, WA
          </div>
          <h1>Electrical Contractors Serving Snohomish County, WA</h1>
          <p className="county-hero-sub">
            Everett, Marysville, Arlington, Stanwood, Monroe, Mukilteo — and everywhere in between. Licensed, bonded, A+ BBB. Serving Snohomish County for panel upgrades, EV chargers, older home rewiring, and more.
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
              <span className="eyebrow">Snohomish County Service</span>
              <h2>Award-Winning Electrical Work, South of Skagit.</h2>
              <p className="service-intro">
                Premier Electrical Services serves Snohomish County as part of our extended service area along the Puget Sound corridor. Based in Mount Vernon, we work throughout Snohomish County regularly — from Stanwood and Marysville in the north down to Everett, Monroe, and into the eastern areas of the county.
              </p>
              <p className="service-intro">
                Snohomish County has a wide mix of housing stock — older neighborhoods in Everett with pre-1970 wiring, growing residential developments in Marysville, rural acreage properties in Arlington and Monroe that benefit from generator hookups, and dense suburban areas around Mukilteo and Lynnwood. We work on all of it.
              </p>
              <p className="service-intro">
                Three-time &ldquo;Best of the Best&rdquo; award winner in Skagit Valley. A+ rated with the Better Business Bureau. Licensed (Lic. PREMIES821LL), bonded, and insured in Washington State.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Cities We Serve in Snohomish County</h3>
              <ul className="included-list">
                {[
                  'Everett',
                  'Marysville',
                  'Arlington',
                  'Stanwood',
                  'Monroe',
                  'Mukilteo',
                  'Lynnwood',
                  'Bothell',
                  'Mill Creek',
                  'Lake Stevens',
                  'Sultan',
                  'Granite Falls',
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
          <span className="eyebrow">Snohomish County Specialties</span>
          <h2>Services Most Requested in Snohomish County</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { svg: <svg key="p" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="7" y1="6" x2="7" y2="18"/><line x1="12" y1="6" x2="12" y2="18"/><line x1="17" y1="6" x2="17" y2="18"/><line x1="2" y1="11" x2="22" y2="11"/><circle cx="7" cy="8" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><circle cx="17" cy="8" r="1" fill="currentColor"/></svg>, title: 'Panel Upgrades', desc: 'Northern Snohomish County cities like Marysville, Stanwood, and Arlington are growing fast — which means panels that weren\'t sized for today\'s loads. We handle upgrades, subpanels, and utility coordination from first call to final inspection.' },
              { svg: <svg key="h" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3"/><path d="M12 10v-2"/></svg>, title: 'Older Home Rewiring', desc: 'Everett\'s older neighborhoods — near downtown and along the waterfront — have a significant stock of pre-1960 homes with knob-and-tube or aluminum wiring. This is exactly the work we specialize in.' },
              { svg: <svg key="e" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="15" height="13" rx="2"/><path d="M16 10h2a2 2 0 012 2v3a2 2 0 01-2 2h-2"/><path d="M5 6V4"/><path d="M9 6V4"/><path d="M11 13l-3 5h4l-3 5"/></svg>, title: 'EV Charging', desc: 'Snohomish County\'s proximity to Boeing, tech campuses, and the urban I-5 corridor drives high EV adoption. We\'ve installed Level 2 chargers throughout the county — properly permitted every time.' },
              { svg: <svg key="g" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="22" height="11" rx="2"/><path d="M5 7V5a1 1 0 011-1h3a1 1 0 011 1v2"/><path d="M19 7V5a1 1 0 00-1-1h-3a1 1 0 00-1 1v2"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 10v-3"/><path d="M12 14v3"/></svg>, title: 'Generator Hookups', desc: 'Rural Snohomish County properties in Arlington, Sultan, and Granite Falls see extended outages during storm season. A properly installed transfer switch ensures your generator powers your home safely — without backfeeding the grid.' },
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
          { svg: <svg key="a" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>, label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025' },
          { svg: <svg key="b" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>, label: 'A+ BBB Rating', sub: 'Licensed, Bonded & Insured' },
          { svg: <svg key="c" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Serving Snohomish County', sub: 'Everett to Arlington & Beyond' },
          { svg: <svg key="d" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, label: 'Same-Day Response', sub: 'Most service requests' },
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
            <h2>In Snohomish County? Let&apos;s Talk.</h2>
            <p>Free estimates on most projects. Same-day response. We show up when we say we will.</p>
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
