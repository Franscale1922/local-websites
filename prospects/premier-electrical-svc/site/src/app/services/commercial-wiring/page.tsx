import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Electrical Services | Premier Electrical Services — Skagit County, WA',
  description: 'Commercial wiring, tenant improvements, code compliance, and commercial electrical systems in Skagit, Whatcom, Snohomish, and King counties. Licensed commercial electricians. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function CommercialWiringPage() {
  return (
    <main>
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo"><img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" /></a>
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
          <div className="page-hero-icon">🏢</div>
          <h1>Commercial Electrical Services — Code-Compliant, Done on Schedule.</h1>
          <p className="page-hero-sub">
            Restaurants, daycares, retail buildouts, offices, and multi-tenant commercial spaces. We&apos;ve wired them all across Skagit, Whatcom, and Snohomish counties. Licensed commercial work — not residential thinking applied to commercial problems.
          </p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Request a Commercial Quote</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <div className="service-page-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&q=85"
          alt="Commercial electrical wiring installation"
          loading="eager"
        />
      </div>
      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-body">
              <span className="eyebrow">The Service</span>
              <h2>Commercial Electrical Isn&apos;t Just Residential at Scale.</h2>
              <p className="service-intro">
                Commercial properties have different wiring requirements, different load profiles, and different code implications than residential. We work directly with property owners, general contractors, and tenants on new buildouts, tenant improvements, and ongoing maintenance.
              </p>
              <p className="service-intro">
                From Mount Vernon to Everett, we&apos;ve handled the electrical on restaurants (hood exhaust tie-ins, commercial refrigeration, dishwasher circuits), daycares (GFCI compliance, arc-fault coverage), office remodels (panel additions, data and communications rough-in), and retail spaces (exterior signage power, track lighting, POS outlet placement).
              </p>
              <p className="service-intro">
                We coordinate with your GC and your local AHJ (Authority Having Jurisdiction), pull the required permits, and deliver a finished package that passes inspection. No re-dos.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What We Handle</h3>
              <ul className="included-list">
                {[
                  'New commercial construction wiring',
                  'Tenant improvement electrical (TI buildouts)',
                  'Restaurant and food service wiring',
                  'Retail lighting, signage power, POS circuits',
                  'Office electrical remodels',
                  'Fire suppression system wiring',
                  'Exterior security and parking lot lighting',
                  'Panel upgrades and subpanels for commercial spaces',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Request a Commercial Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Industries We Serve</span>
          <h2>We Know Your Industry&apos;s Electrical Requirements.</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🍽️', title: 'Restaurants & Food Service', desc: 'Hood suppression tie-ins, commercial refrigeration, dishwashers, separate circuits for cooking equipment. We know the health department requirements.' },
              { icon: '🏥', title: 'Daycares & Healthcare', desc: 'GFCI and AFCI requirements are more extensive in childcare and healthcare settings. We stay current on NEC and state amendments.' },
              { icon: '🏬', title: 'Retail & Storefront', desc: 'Track lighting, exterior signage, interior feature lighting, accessible outlet placement, and POS-ready circuits throughout.' },
              { icon: '🏗️', title: 'GC & Tenant Improvements', desc: 'We work cleanly alongside general contractors on TI buildouts. Coordinated scheduling, clear communication, permits in order before rough-in starts.' },
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
            <h2>Need a Commercial Electrical Contractor?</h2>
            <p>Licensed, bonded, and experienced across Skagit, Whatcom, and Snohomish counties. Let&apos;s talk about your project.</p>
          </div>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary">Request a Commercial Quote</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-logo"><img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" /></div>
            <p className="footer-tagline">Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/commercial-wiring">Commercial Wiring</a></li>
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
