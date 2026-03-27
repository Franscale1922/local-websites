import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrician in Mount Vernon, WA | Premier Electrical Services',
  description: 'Premier Electrical Services is based in Mount Vernon, WA. Licensed electricians for panel upgrades, EV charging, historic home rewiring, generators, and repairs. 3× Best of the Best. Call (360) 421-5230.',
  alternates: { canonical: '/service-area/mount-vernon' },
  openGraph: { images: [{ url: '/images/hero-skagit.jpg', width: 1200, height: 630, alt: 'Mount Vernon WA — Premier Electrical Services home base' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function MountVernonPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Area', item: '/service-area' },
          { '@type': 'ListItem', position: 3, name: 'Mount Vernon', item: '/service-area/mount-vernon' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/service-area" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-skagit.jpg"
          alt="Mount Vernon Washington — Skagit Valley with North Cascades"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Mount Vernon, WA
          </div>
          <h1>Mount Vernon&rsquo;s Electricians. Based Here, Three-Time Award Winners.</h1>
          <p className="county-hero-sub">
            Premier Electrical Services is headquartered in Mount Vernon and serves the entire city — from the Riverside neighborhood to College Way corridor. Licensed, bonded, and the area&rsquo;s three-time Best of the Best winner.
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
              <span className="eyebrow">Our Home Base</span>
              <h2>We Know Mount Vernon. Every Neighborhood, Every Housing Era.</h2>
              <p className="service-intro">
                Mount Vernon is where Premier Electrical Services is based — 1500 East College Way, right in the heart of the city. When you call us, you&rsquo;re calling your neighbors. We&rsquo;ve worked in Mount Vernon homes from the older craftsman-era houses along Riverside Drive to newer construction in the College Way corridor and east-side subdivisions.
              </p>
              <p className="service-intro">
                Mount Vernon residents trust us because we show up when we say we will, give clear estimates, and do permitted work that passes inspection. We&rsquo;ve won the Skagit Valley Best of the Best award three years running — 2023, 2024, and 2025 — and carry an A+ BBB rating. That&rsquo;s not a paid placement. Those are community votes and third-party evaluations.
              </p>
              <p className="service-intro">
                Same-day response on most service calls. Free estimates on most projects. If you&rsquo;re in Mount Vernon, call us directly.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Services in Mount Vernon</h3>
              <ul className="included-list">
                {[
                  'Electrical panel upgrades & fuse box replacement',
                  'EV charging station installation',
                  'Generator hookups & transfer switches',
                  'Historic & older home rewiring',
                  'Hot tub & spa wiring',
                  'Detached garage & shop wiring',
                  'Commercial electrical & TI buildouts',
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
          { label: 'Based in Mount Vernon', sub: 'Lic. PREMIES821LL', svg: <svg key="l" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
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
            <h2>In Mount Vernon? Call Your Neighbors.</h2>
            <p>Free estimates. We show up, do the work right, and pass the inspection. That&rsquo;s what three wins in a row looks like.</p>
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
