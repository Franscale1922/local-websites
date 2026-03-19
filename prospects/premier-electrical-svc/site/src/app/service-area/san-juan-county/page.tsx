import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrician in San Juan County, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Friday Harbor, Eastsound, Roche Harbor, and the San Juan Islands. Panel upgrades, EV charging, older home wiring. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function SanJuanCountyPage() {
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

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5?w=1800&q=85"
          alt="Pacific Northwest island waters and evergreen shores representing San Juan County, Washington"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            San Juan County, WA
          </div>
          <h1>Electricians Serving San Juan County &amp; the Islands</h1>
          <p className="county-hero-sub">
            Friday Harbor, Eastsound, Roche Harbor, Lopez Village. We serve San Juan County properties — by appointment for island projects.
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
              <span className="eyebrow">San Juan Islands Service</span>
              <h2>Island Properties Have Unique Electrical Needs. We Understand Them.</h2>
              <p className="service-intro">
                San Juan Island properties often have older electrical systems — many homes predate modern electrical code by several decades. Combine that with the challenges of island logistics, limited utility contractor coverage, and the reality of island weather events, and you have a property that needs an electrician who actually knows what they&apos;re doing.
              </p>
              <p className="service-intro">
                We serve San Juan County by project-based scheduling — typically booking island work in advance to coordinate travel efficiently. If you have a larger project (panel upgrade, rewire, generator install) or an urgent situation, call us directly and we&apos;ll work through the logistics together.
              </p>
              <p className="service-intro">
                Services most requested in San Juan County include panel upgrades and older-home rewires on Friday Harbor properties, generator installations for storm preparedness, and EV charger installs as island residents increasingly drive electric vehicles.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Areas We Serve</h3>
              <ul className="included-list">
                {[
                  'Friday Harbor (San Juan Island)',
                  'Roche Harbor',
                  'Eastsound (Orcas Island)',
                  'Lopez Village (Lopez Island)',
                  'Shaw Island',
                  'Deer Harbor',
                  'West Sound',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <div style={{ background: 'var(--color-tinted)', borderRadius: '10px', padding: '18px', marginTop: '20px' }}>
                <p style={{ fontSize: '0.88rem', color: '#4a5568', marginBottom: '12px' }}>
                  <strong>Island projects:</strong> We schedule San Juan work by appointment. Call for availability, especially for larger or urgent projects.
                </p>
                <a href={PHONE_TEL} className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', fontSize: '0.9rem' }}>
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">San Juan County Specialties</span>
          <h2>Services Most Requested in the San Juan Islands</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🔌', title: 'Generator Installations', desc: 'Island properties lose power during Pacific storms — and there\'s no quick utility fix when you\'re on San Juan, Orcas, or Lopez. A standby or portable generator with a proper transfer switch is the most impactful upgrade for island homeowners.' },
              { icon: '🏚️', title: 'Older Home Rewiring', desc: 'Many Friday Harbor, Eastsound, and Lopez Village homes were built in an era of much lower electrical demand. We handle full and partial rewires on older island properties, including homes with knob-and-tube and early aluminum branch wiring.' },
              { icon: '⚡', title: 'Panel Upgrades', desc: 'San Juan Island properties often have undersized panels — 60A or 100A panels that can\'t support modern loads, EV chargers, or heat pumps. We coordinate with the utility, pull permits, and handle the full upgrade.' },
              { icon: '🚗', title: 'EV Charging', desc: 'As ferry travel makes EVs more appealing for island residents, Level 2 home charging becomes a practical necessity. We install EV chargers throughout the San Juans — scheduled by appointment for island visits.' },
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

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>San Juan Islands Project?</h2>
            <p>Call us to discuss scheduling. We handle island work and understand the logistics.</p>
          </div>
          <div className="cta-strip-actions">
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Send a Message</a>
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
            <p className="footer-tagline">A+ BBB Rating. Lic. PREMIES821LL. Serving the greater Puget Sound region.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/generator-installation">Generator Hookups</a></li>
            <li><a href="/services/historic-home-rewiring">Older Home Rewiring</a></li>
            <li><a href="/services/ev-charging">EV Charging</a></li>
          </ul></div>
          <div className="footer-col"><h4>Service Areas</h4><ul>
            <li><a href="/service-area/skagit-county">Skagit County</a></li>
            <li><a href="/service-area/whatcom-county">Whatcom County</a></li>
            <li><a href="/service-area/island-county">Island County</a></li>
            <li><a href="/service-area/san-juan-county">San Juan County</a></li>
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
