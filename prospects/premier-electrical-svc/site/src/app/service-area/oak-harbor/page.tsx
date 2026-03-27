import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrician in Oak Harbor, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Oak Harbor and Whidbey Island — panel upgrades, EV charging, generator installation, historic home rewiring, and service calls. Island County contractor. Call (360) 421-5230.',
  alternates: { canonical: '/service-area/oak-harbor' },
  openGraph: { images: [{ url: '/images/hero-island.jpg', width: 1200, height: 630, alt: 'Oak Harbor WA — Premier Electrical Services Island County service' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function OakHarborPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Area', item: '/service-area' },
          { '@type': 'ListItem', position: 3, name: 'Oak Harbor', item: '/service-area/oak-harbor' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/service-area" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-skagit.jpg"
          alt="Oak Harbor Whidbey Island Washington — Island County"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Oak Harbor, WA · Whidbey Island
          </div>
          <h1>Oak Harbor Electrician. Whidbey Island Properties Done Right.</h1>
          <p className="county-hero-sub">
            Premier Electrical Services serves Oak Harbor and all of Island County — including the full length of Whidbey Island. Island properties have unique electrical considerations that require experience. We bring it.
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
              <span className="eyebrow">Serving Oak Harbor & Whidbey Island</span>
              <h2>Island Properties Have Unique Electrical Needs. We Know Them.</h2>
              <p className="service-intro">
                Oak Harbor is the largest city on Whidbey Island, home to Naval Air Station Whidbey Island and a mix of residential neighborhoods ranging from mid-century post-war homes to newer subdivisions. The island&rsquo;s homes face specific challenges: salt air corrosion, frequent storm outages that make generator installation particularly valuable, and older wiring systems in properties that have been held in families for generations.
              </p>
              <p className="service-intro">
                We serve Oak Harbor, Coupeville, Langley, Freeland, and properties across the length of Whidbey Island. We also serve Camano Island — a short bridge from the mainland — which is one of our most active service areas for generator installation and rural property wiring.
              </p>
              <p className="service-intro">
                For island residents, generator installation is one of our most-requested services. Extended outages during winter storms are a fact of life on Whidbey and Camano — a properly-wired standby or portable generator is the right answer.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Services in Oak Harbor &amp; Island County</h3>
              <ul className="included-list">
                {[
                  'Generator installation & transfer switches',
                  'Electrical panel upgrades',
                  'EV charging station installation',
                  'Historic & older home rewiring',
                  'Hot tub & spa wiring',
                  'Outbuilding & rural property wiring',
                  'Marine-adjacent weatherproof wiring',
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
          { label: '3× Best of the Best', sub: 'Skagit Valley Community Award', svg: <svg key="t" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg> },
          { label: 'Island County Coverage', sub: 'Whidbey Island & Camano Island', svg: <svg key="i" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
          { label: 'Generator Specialists', sub: 'Island outage preparedness', svg: <svg key="g" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="15" height="13" rx="2"/><path d="M16 10h2a2 2 0 012 2v3a2 2 0 01-2 2h-2"/><path d="M11 13l-3 5h4l-3 5"/></svg> },
          { label: 'A+ BBB · Lic. PREMIES821LL', sub: 'Licensed, Bonded & Insured', svg: <svg key="b" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg> },
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
            <h2>On Whidbey or Camano Island? Call Premier Electrical.</h2>
            <p>We serve Island County — Oak Harbor to Langley, Camano Island to Coupeville. Free estimates, permitted work, ready before storm season.</p>
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
