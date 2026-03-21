import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Electrical Panel Upgrades | Premier Electrical Services — Skagit County, WA',
  description: 'Expert electrical panel upgrades in Skagit, Whatcom, and Snohomish counties. Fuse boxes, 200-amp upgrades, subpanels. Licensed, bonded, A+ BBB. Call (360) 421-5230.',
  alternates: { canonical: '/services/panel-upgrades' },
  openGraph: { images: [{ url: '/images/svc-panel.jpg', width: 1200, height: 630, alt: 'Electrical panel upgrade by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function PanelUpgradesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much does an electrical panel upgrade cost?', acceptedAnswer: { '@type': 'Answer', text: 'Most residential panel upgrades in Washington State run between $1,500 and $4,000 depending on amperage, panel location, the need to run new service entrance cable, and whether a utility disconnect is required. We provide free, no-pressure estimates.' } },
          { '@type': 'Question', name: 'Do I need a permit for a panel upgrade?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In Washington State, panel upgrades require a permit and inspection. We pull the permit, schedule the inspection, and coordinate with your utility. You\'re not left to figure that out yourself.' } },
          { '@type': 'Question', name: 'How long does a panel upgrade take?', acceptedAnswer: { '@type': 'Answer', text: 'Most residential panel upgrades take one full day. Your power will be out 4–8 hours. We coordinate with PSE, PUD, or your co-op to minimize downtime.' } },
          { '@type': 'Question', name: 'Will a panel upgrade let me add an EV charger?', acceptedAnswer: { '@type': 'Answer', text: 'Usually yes — that\'s one of the most common reasons people upgrade. If you\'re at 100A and want a Level 2 charger plus other modern loads, 200A is often the right move. We\'ll assess your full load and tell you exactly what you need.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'Panel Upgrades', item: '/services/panel-upgrades' },
        ],
      }) }} />

      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/services" className="nav-link--active">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/svc-panel.jpg"
          alt="Electrician performing electrical panel upgrade"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Panel Upgrades · Licensed &amp; Permitted
          </div>
          <h1>Electrical Panel Upgrades. Done Right the First Time.</h1>
          <p className="county-hero-sub">
            Tripped breakers, flickering lights, or a fuse box that hasn&apos;t been touched since 1978. We upgrade residential and commercial panels across Skagit, Whatcom, and surrounding counties.
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
              <span className="eyebrow">The Service</span>
              <h2>When Your Panel Can&apos;t Keep Up, Your Home Can&apos;t Either.</h2>
              <p className="service-intro">
                Most homes built before 1990 weren&apos;t designed for the electrical load we put on them today — EV chargers, air fryers, home offices, heat pumps. An undersized or outdated panel means tripped breakers, potential fire hazards, and an inability to add circuits for new appliances or renovations.
              </p>
              <p className="service-intro">
                We upgrade electrical panels on homes and businesses throughout Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. Whether you have an original fuse box, a 60-amp main that needs to become 200-amp, or you just need a subpanel added to a detached garage, we handle it. Every install is permitted and inspector-approved.
              </p>
              <p className="service-intro">
                Older fuse box? That&apos;s our specialty. We see them regularly on homes in Anacortes, Sedro-Woolley, and the historic neighborhoods of Bellingham — and we know exactly how to bring them up to code safely.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What&apos;s Included</h3>
              <ul className="included-list">
                {[
                  '100A, 150A, or 200A main panel upgrades',
                  'Fuse box to breaker panel conversions',
                  'Subpanel installations for garages, shops, additions',
                  'Tandem breaker and double-tapped breaker corrections',
                  'AFCI and GFCI breaker installation',
                  'Panel labeling and load calculations',
                  'Permit pulled and inspection coordinated',
                  'A+ BBB rated, Lic. PREMIES821LL',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Schedule This Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Signs You Need an Upgrade</span>
          <h2>How Do You Know It&apos;s Time?</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🔄', title: 'Breakers Trip Regularly', desc: 'If a breaker trips every time you run the microwave and the hair dryer at the same time, your panel is overloaded — not your appliances.' },
              { icon: '🏚️', title: 'You Have a Fuse Box', desc: 'Fuse panels are outdated, often uninsurable, and a fire risk. Modern breakers are resettable — fuses are not. Time to upgrade.' },
              { icon: '⚡', title: 'You\'re Adding a Major Appliance', desc: 'Adding an EV charger, hot tub, central AC, or heat pump? You likely need either a panel upgrade or subpanel to support it safely.' },
              { icon: '🔮', title: 'Lights Flicker or Dim', desc: 'Lights dimming when large appliances start up is a sign of an inadequate supply — the panel is struggling to keep up with demand.' },
              { icon: '🏠', title: 'Selling or Buying a Home', desc: 'Home inspectors flag undersized and outdated panels. Upgrading before listing protects your sale price and avoids last-minute repair demands from buyers.' },
              { icon: '🛡️', title: 'You Want Peace of Mind', desc: 'An upgraded panel means modern breakers, correct wire sizing, and inspector-approved work. Less worry about what\'s behind your walls.' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-number">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Frequently Asked</span>
          <h2>Panel Upgrade Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'How much does an electrical panel upgrade cost?', a: 'Most residential panel upgrades in Washington State run between $1,500 and $4,000 depending on amperage, panel location, the need to run new service entrance cable, and whether a utility disconnect is required. We provide free, no-pressure estimates.' },
              { q: 'Do I need a permit for a panel upgrade?', a: 'Yes. In Washington State, panel upgrades require a permit and inspection. We pull the permit, schedule the inspection, and coordinate with your utility. You\'re not left to figure that out yourself.' },
              { q: 'How long does a panel upgrade take?', a: 'Most residential panel upgrades take one full day. Your power will be out 4–8 hours. We coordinate with PSE, PUD, or your co-op to minimize downtime.' },
              { q: 'Will a panel upgrade let me add an EV charger?', a: 'Usually yes — that\'s one of the most common reasons people upgrade. If you\'re at 100A and want a Level 2 charger plus other modern loads, 200A is often the right move. We\'ll assess your full load and tell you exactly what you need.' },
            ]} />
          </div>
        </div>
      </section>


      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Ready to Get Your Panel Sorted?</h2>
            <p>Free estimate. We pull the permit. We handle the inspection. You just keep the lights on.</p>
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
