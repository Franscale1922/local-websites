import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lighting & Outbuilding Wiring | Premier Electrical Services — Skagit County, WA',
  description: 'Indoor and outdoor lighting, landscape lighting, detached garages, shops, ADUs, barns, and hot tub wiring in Skagit and surrounding counties. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function LightingUpgradesPage() {
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
          <div className="page-hero-icon">💡</div>
          <h1>Lighting, Outbuildings & Specialty Wiring — We Handle It All.</h1>
          <p className="page-hero-sub">
            Detached garages. Shops. Barns. ADUs. Hot tubs. Landscape lighting. Security lighting. If it needs power and it&apos;s on your property, we can wire it — correctly, with permits when required, and code-compliant every time.
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
              <h2>Whatever&apos;s on Your Property, We Can Power It.</h2>
              <p className="service-intro">
                Lighting and specialty wiring covers a wide range — and we do all of it in Skagit, Whatcom, San Juan, and Island counties. Interior lighting upgrades: recessed cans, under-cabinet LED, dimmer conversions, and ceiling fan installs. Exterior work: security lights, pathway and landscape lighting, coach lights, and motion sensors.
              </p>
              <p className="service-intro">
                Outbuildings are a specialty of ours. Rural Skagit County has thousands of properties with detached garages, workshops, barns, and agricultural buildings that need dedicated electrical service — properly subpaneled, with enough capacity for a welder, compressor, or grow lights. We know these jobs and we approach them correctly.
              </p>
              <p className="service-intro">
                Hot tub and spa wiring is another common call. A hot tub needs a dedicated 240V GFCI circuit installed correctly — not a DIY job, and not something to have an unlicensed handyman tackle. We do it right.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What We Handle</h3>
              <ul className="included-list">
                {[
                  'Indoor lighting upgrades (recessed, dimmer, fan)',
                  'Exterior security and landscape lighting',
                  'Detached garage and workshop wiring',
                  'Barn and agricultural building electrical',
                  'ADU and accessory structure power',
                  'Hot tub and spa wiring (240V GFCI)',
                  'Subpanel installation for outbuildings',
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

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Have a Project in Mind?</h2>
            <p>Whether it&apos;s a barn subpanel or a hot tub circuit, we give you a clear quote before any work starts.</p>
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
            <p className="footer-tagline">Licensed, bonded electricians. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/lighting-upgrades">Lighting & Outbuildings</a></li>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/ev-charging">EV Charging</a></li>
            <li><a href="/services/historic-home-rewiring">Historic Home Rewiring</a></li>
          </ul></div>
          <div className="footer-col"><h4>Contact</h4><ul>
            <li><a href={PHONE_TEL}>{PHONE}</a></li>
            <li><a href="/contact">Free Estimate</a></li>
            <li><a href="/faq">FAQ</a></li>
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
