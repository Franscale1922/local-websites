import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrician in Anacortes, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Anacortes, WA — historic home rewiring, panel upgrades, EV charging, generator installation, and service calls. Award-winning local contractor. Call (360) 421-5230.',
  alternates: { canonical: '/service-area/anacortes' },
  openGraph: { images: [{ url: '/images/hero-skagit.jpg', width: 1200, height: 630, alt: 'Anacortes WA — Premier Electrical Services service area' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function AnacortesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Area', item: '/service-area' },
          { '@type': 'ListItem', position: 3, name: 'Anacortes', item: '/service-area/anacortes' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/service-area" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-skagit.jpg"
          alt="Anacortes Washington — San Juan Island gateway with Fidalgo Island homes"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Anacortes, WA
          </div>
          <h1>Anacortes Electrician. Historic Homes, Island Properties, Modern Installs.</h1>
          <p className="county-hero-sub">
            Anacortes has some of the oldest housing stock in Skagit County — and some of the most complex electrical work. Premier Electrical Services specializes in the older homes, island properties, and marine-adjacent structures that other electricians pass on.
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
              <span className="eyebrow">Serving Anacortes</span>
              <h2>Anacortes Has Unique Electrical Challenges. We Know Them.</h2>
              <p className="service-intro">
                Anacortes is one of the older communities in Skagit County, and its housing stock reflects it. Many homes in the Avenue neighborhoods and along the waterfront were built in the early-to-mid 20th century — meaning knob-and-tube wiring, aluminum branch circuits, and outdated panels are common. We specialize in exactly this work.
              </p>
              <p className="service-intro">
                Beyond historic homes, Anacortes is a gateway to the San Juan Islands — and island properties come with their own electrical considerations: weatherproof wiring, marine-adjacent corrosion, generator dependency, and long runs to outbuildings. We serve Guemes Island and properties accessible by water or ferry.
              </p>
              <p className="service-intro">
                Anacortes homeowners can count on same-day response on most service calls, free estimates on most projects, and permitted work that passes WA State inspection the first time.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Services in Anacortes</h3>
              <ul className="included-list">
                {[
                  'Historic & older home rewiring (knob-and-tube)',
                  'Electrical panel upgrades',
                  'EV charging station installation',
                  'Generator installation & transfer switches',
                  'Hot tub & spa wiring',
                  'Marine-adjacent & weatherproof wiring',
                  'Outbuilding & ADU electrical',
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
          { label: 'Historic Home Specialists', sub: 'Knob-and-tube, aluminum wiring', svg: <svg key="h" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
          { label: 'A+ BBB · Lic. PREMIES821LL', sub: 'Licensed, Bonded & Insured', svg: <svg key="b" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg> },
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
            <h2>In Anacortes? We Serve the Whole Island.</h2>
            <p>Old wiring, modern installs, or island properties — free estimates, same-day response, permitted work every time.</p>
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
