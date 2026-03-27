import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrician in Bellingham, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Bellingham, WA — panel upgrades, EV charging, historic home rewiring, generator installation, and commercial electrical. Skagit County\'s award-winning contractor. Call (360) 421-5230.',
  alternates: { canonical: '/service-area/bellingham' },
  openGraph: { images: [{ url: '/images/hero-whatcom.jpg', width: 1200, height: 630, alt: 'Bellingham WA — Premier Electrical Services Whatcom County service' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function BellinghamPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Area', item: '/service-area' },
          { '@type': 'ListItem', position: 3, name: 'Bellingham', item: '/service-area/bellingham' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/service-area" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-whatcom.jpg"
          alt="Bellingham Washington — Whatcom County waterfront"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Bellingham, WA
          </div>
          <h1>Bellingham Electrician. Award-Winning Work Serving All of Whatcom County.</h1>
          <p className="county-hero-sub">
            Premier Electrical Services serves Bellingham and all of Whatcom County. Whether you&rsquo;re in Fairhaven, Sunnyland, Barkley, or the Cordata corridor — we bring the same permitted, award-winning electrical work that earned us three Best of the Best wins in Skagit Valley.
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
              <span className="eyebrow">Serving Bellingham</span>
              <h2>Bellingham Has Diverse Electrical Needs. We Meet All of Them.</h2>
              <p className="service-intro">
                Bellingham&rsquo;s housing stock spans over a century — from the Victorian-era homes of Fairhaven and early post-war bungalows in Happy Valley to modern construction in the Cordata neighborhood. Older Bellingham homes frequently have knob-and-tube wiring, original fuse boxes, and aluminum branch circuits that need professional evaluation and often replacement.
              </p>
              <p className="service-intro">
                We cover the full range: historic home rewiring, panel upgrades, EV charging installation, generator hookups, commercial tenant improvements, and emergency service calls. Bellingham is also a significant EV market — we&rsquo;ve installed Level 2 chargers throughout the city, properly permitted and inspection-approved.
              </p>
              <p className="service-intro">
                Our Whatcom County service area covers Bellingham, Ferndale, Lynden, Blaine, and the surrounding communities. Call us — same-day response on most requests.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Services in Bellingham</h3>
              <ul className="included-list">
                {[
                  'Historic & older home rewiring (knob-and-tube)',
                  'Electrical panel upgrades',
                  'EV charging station installation',
                  'Generator installation & transfer switches',
                  'Hot tub & spa wiring',
                  'Commercial electrical & tenant improvements',
                  'Outbuilding & ADU wiring',
                  'Service calls & repairs — same-day available',
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

      <div className="trust-strip">
        {[
          { label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025', svg: <svg key="t" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg> },
          { label: 'A+ BBB Rating', sub: 'Licensed, Bonded & Insured', svg: <svg key="b" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg> },
          { label: 'Whatcom County Served', sub: 'Bellingham, Ferndale, Lynden', svg: <svg key="l" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
          { label: 'Same-Day Response', sub: 'Most service requests', svg: <svg key="s" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
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
            <h2>In Bellingham? We Serve All of Whatcom County.</h2>
            <p>Free estimates, same-day service calls, permitted work every time — from Fairhaven to Ferndale.</p>
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
