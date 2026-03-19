import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrician in Skagit County, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Mount Vernon, Burlington, Anacortes, Sedro-Woolley, La Conner, and all of Skagit County. Panel upgrades, EV charging, historic home rewiring. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function SkagitCountyPage() {
  return (
    <main>
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
          <div className="page-hero-icon">🏠</div>
          <h1>Skagit County&apos;s Three-Time Best of the Best Electricians.</h1>
          <p className="page-hero-sub">
            Based in Mount Vernon. Serving Mount Vernon, Burlington, Anacortes, Sedro-Woolley, La Conner, Concrete, and every corner of Skagit County.
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
              { icon: '🏚️', title: 'Historic Home Rewiring', desc: 'Anacortes, Sedro-Woolley, and parts of Mount Vernon have significant pre-1960 housing. We specialize in knob-and-tube replacement and older-home upgrades — the work other electricians pass on.' },
              { icon: '⚡', title: 'Panel Upgrades', desc: 'From Skagit PUD territory to co-op service areas, we handle the utility coordination, the permit, and the inspection. One call covers it all.' },
              { icon: '🚗', title: 'EV Charging', desc: 'Washington State EV ownership is growing fast. We\'ve installed Level 2 chargers on homes from Burlington to Anacortes, properly permitted every time.' },
              { icon: '🔌', title: 'Generator Hookups', desc: 'Rural Skagit properties — from properties on Chuckanut to farms near Concrete — see extended outages in winter. A transfer switch is the right answer.' },
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

      <div className="trust-strip">
        {[
          { icon: '🏆', label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025' },
          { icon: '🏅', label: 'A+ BBB Rating', sub: 'Licensed, Bonded & Insured' },
          { icon: '📍', label: 'Based in Mount Vernon', sub: 'Serving All of Skagit County' },
          { icon: '💬', label: 'Same-Day Response', sub: 'Most service requests' },
        ].map(t => (
          <div key={t.label} className="trust-strip-item">
            <div className="trust-strip-icon">{t.icon}</div>
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

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-logo"><div className="footer-brand-icon">⚡</div><div className="footer-brand-name">Premier Electrical Services</div></div>
            <p className="footer-tagline">Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/ev-charging">EV Charging</a></li>
            <li><a href="/services/generator-installation">Generators</a></li>
            <li><a href="/services/historic-home-rewiring">Historic Home Rewiring</a></li>
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
