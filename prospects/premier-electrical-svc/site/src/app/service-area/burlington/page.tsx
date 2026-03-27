import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrician in Burlington, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Burlington, WA — panel upgrades, EV charging, generator installation, residential wiring, and commercial electrical. Award-winning Skagit County contractor. Call (360) 421-5230.',
  alternates: { canonical: '/service-area/burlington' },
  openGraph: { images: [{ url: '/images/hero-skagit.jpg', width: 1200, height: 630, alt: 'Burlington WA — Premier Electrical Services service area' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function BurlingtonPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Area', item: '/service-area' },
          { '@type': 'ListItem', position: 3, name: 'Burlington', item: '/service-area/burlington' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/service-area" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-skagit.jpg"
          alt="Burlington Washington — Skagit County residential neighborhoods"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Burlington, WA
          </div>
          <h1>Burlington Electrician. Residential, Commercial, and Everything In Between.</h1>
          <p className="county-hero-sub">
            Burlington is one of the fastest-growing communities in Skagit County. Premier Electrical Services has worked in Burlington homes and businesses for years — from established neighborhoods to new construction along Samish Way and the commercial corridor.
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
              <span className="eyebrow">Serving Burlington</span>
              <h2>Burlington Residents and Businesses Trust Premier Electrical.</h2>
              <p className="service-intro">
                Burlington&rsquo;s housing stock ranges from post-war homes that may have outdated panels or aluminum wiring to recently built subdivisions on the east side of I-5. We work on all of it. For homeowners in older Burlington neighborhoods, panel upgrades and wiring assessments are often the starting point. For newer homes, EV charger installation and additional circuit work are the most common calls.
              </p>
              <p className="service-intro">
                Burlington also has a significant commercial corridor — retail centers, restaurants, and light industrial along Samish Way and Cascade Mall vicinity. We handle commercial tenant improvements, restaurant wiring, and new commercial construction alongside our residential work.
              </p>
              <p className="service-intro">
                We&rsquo;re based in Mount Vernon — five minutes from Burlington — which means same-day response on most service calls. Free estimates on most projects.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Services in Burlington</h3>
              <ul className="included-list">
                {[
                  'Electrical panel upgrades & fuse box replacement',
                  'EV charging station installation',
                  'Generator hookups & transfer switches',
                  'Residential wiring — new construction & rewires',
                  'Commercial electrical & tenant improvements',
                  'Hot tub & spa wiring',
                  'Outbuilding & shop wiring',
                  'Service calls & electrical repairs',
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
          { label: 'Based 5 Min Away', sub: 'Mount Vernon, WA', svg: <svg key="l" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
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
            <h2>In Burlington? We&rsquo;re Five Minutes Away.</h2>
            <p>Free estimates, same-day service calls, permitted work every time. Your neighborhood electricians.</p>
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
