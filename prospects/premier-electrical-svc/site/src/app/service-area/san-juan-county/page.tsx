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
      <div className="demo-banner">🔍 Demo site — built for Premier Electrical Services. Not the live site.</div>
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo"><div className="nav-logo-icon">⚡</div>Premier Electrical Services</a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service-area" className="nav-link--active">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="page-hero">
        <div className="container">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="page-hero-icon">⛵</div>
          <h1>Electricians Serving San Juan County &amp; the Islands</h1>
          <p className="page-hero-sub">
            Friday Harbor, Eastsound, Roche Harbor, Lopez Village. We serve San Juan County properties — by appointment for island projects.
          </p>
          <div className="page-hero-ctas">
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
            <div className="footer-brand-logo"><div className="footer-brand-icon">⚡</div><div className="footer-brand-name">Premier Electrical Services</div></div>
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
