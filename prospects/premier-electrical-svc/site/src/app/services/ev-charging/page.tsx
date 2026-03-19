import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EV Charging Station Installation | Premier Electrical Services — Skagit & Puget Sound, WA',
  description: 'Level 2 EV charger installation in Skagit, Whatcom, Snohomish, and King counties. Tesla Wall Connector, JuiceBox, ChargePoint. Permitted & code-compliant. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function EVChargingPage() {
  return (
    <main>
      <div className="demo-banner">🔍 Demo site — built for Premier Electrical Services. Not the live site.</div>
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo"><div className="nav-logo-icon">⚡</div>Premier Electrical Services</a>
        <ul className="nav-links">
          <li><a href="/services" className="nav-link--active">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="page-hero">
        <div className="container">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="page-hero-icon">🚗</div>
          <h1>EV Charging Station Installation — Permitted, Clean, Ready to Charge.</h1>
          <p className="page-hero-sub">
            Washington ranks among the top EV markets in the country. We install Level 2 home charging stations across Skagit, Whatcom, Snohomish, and King counties — the right way, the first time.
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
              <span className="eyebrow">The Service</span>
              <h2>Charge Faster. Pay Less. Do It Right.</h2>
              <p className="service-intro">
                A standard 120V outlet adds about 4–5 miles of range per hour. A Level 2 charger adds 25–30 miles per hour — meaning a full overnight charge instead of plugging in for two days. Most EV owners make the switch within the first few months.
              </p>
              <p className="service-intro">
                We install Tesla Wall Connectors, JuiceBox units, ChargePoint Home Flex, and other Level 2 chargers in residential garages, carports, and commercial parking structures. Every install is permitted, inspected, and code-compliant. We don&apos;t cut corners behind your walls.
              </p>
              <p className="service-intro">
                If your existing panel doesn&apos;t have enough capacity, we&apos;ll tell you upfront and can handle the upgrade at the same time. No surprises.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What&apos;s Included</h3>
              <ul className="included-list">
                {[
                  'Tesla Wall Connector installs',
                  'JuiceBox, ChargePoint, Clipper Creek installs',
                  'Dedicated 50A or 60A NEMA 14-50 circuits',
                  'Conduit runs (indoor & outdoor/weatherproof)',
                  'Panel capacity check — upgrade if needed',
                  'Permit pulled, inspection scheduled',
                  'Clean, professional finish — no exposed wiring',
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

      <section className="section section--navy">
        <div className="container">
          <span className="eyebrow">How It Works</span>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>Simple Process. No Guesswork.</h2>
          <div className="process-grid">
            {[
              { num: '01', icon: '📞', title: 'Call or Submit a Request', desc: 'Tell us your EV make, garage setup, and whether you already have a charger in mind. We respond same day.' },
              { num: '02', icon: '📋', title: 'Free On-Site Assessment', desc: 'We look at your panel, the run distance to your garage or parking spot, and give you a clear quote. No vague ranges.' },
              { num: '03', icon: '✅', title: 'Install, Permit & Inspect', desc: 'We install the charger, pull the permit, and coordinate the inspection. Done in a day on most homes.' },
            ].map((step, i, arr) => (
              <div key={step.num} className="process-step">
                {i < arr.length - 1 && <div className="process-connector" />}
                <div className="process-icon-wrap"><div className="process-icon">{step.icon}</div></div>
                <div className="process-num">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Frequently Asked</span>
          <h2>EV Charger Questions</h2>
          <div className="faq-list" style={{ marginTop: '36px', maxWidth: '780px' }}>
            {[
              { q: 'How much does EV charger installation cost?', a: 'Most Level 2 home charger installs run $400–$1,200 for labor depending on run distance, permit requirements, and panel capacity. The charger itself costs extra depending on the brand. We give you a full cost picture before starting.' },
              { q: 'Do I need to upgrade my panel for an EV charger?', a: 'Not always. If your panel has available capacity (most 200A panels do), we can add a dedicated circuit without upgrading. If you have an older 100A panel or it\'s already near capacity, we\'ll let you know and can handle the upgrade at the same time.' },
              { q: 'Do I need a permit for EV charger installation?', a: 'Yes — in Washington State, Level 2 charger installations require a permit. We handle that for you. It ensures the install is safe and protects your homeowner&apos;s insurance.' },
              { q: 'How long does installation take?', a: 'Most residential installs take 2–4 hours. If a panel upgrade is needed, plan a full day.' },
            ].map(f => (
              <div key={f.q} className="faq-item-static">
                <h3 className="faq-q-static">{f.q}</h3>
                <p className="faq-a-static">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Ready to Charge at Home?</h2>
            <p>Free estimate. We handle the permit. Installed and inspected in a day on most homes.</p>
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
            <li><a href="/services/commercial-wiring">Commercial Wiring</a></li>
          </ul></div>
          <div className="footer-col"><h4>Contact</h4><ul>
            <li><a href={PHONE_TEL}>{PHONE}</a></li>
            <li><a href="/contact">Free Estimate</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Premier Electrical Services · All rights reserved</span>
          <span><a href={PHONE_TEL}>{PHONE}</a> · Lic. PREMIES821LL</span>
        </div>
      </footer>
    </main>
  );
}
