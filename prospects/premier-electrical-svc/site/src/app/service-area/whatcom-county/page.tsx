import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrician in Whatcom County, WA | Premier Electrical Services',
  description: 'Licensed electrical contractors serving Bellingham, Ferndale, Lynden, Blaine, and all of Whatcom County. Panel upgrades, EV charging, historic home rewiring. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function WhatcomCountyPage() {
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
          <div className="page-hero-icon">⚡</div>
          <h1>Electrical Contractors Serving Whatcom County, WA</h1>
          <p className="page-hero-sub">
            Licensed, bonded, A+ BBB — serving Bellingham, Ferndale, Lynden, Blaine, and all of Whatcom County. Panel upgrades, EV chargers, historic home rewiring, and more.
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
              <span className="eyebrow">Whatcom County Service</span>
              <h2>Award-Winning Electrical Work, North of Skagit.</h2>
              <p className="service-intro">
                Premier Electrical Services regularly works throughout Whatcom County — from Bellingham&apos;s historic Fairhaven and Columbia neighborhoods down to Ferndale, Lynden, and points north to Blaine. Three-time &ldquo;Best of the Best&rdquo; winner in Skagit Valley, A+ BBB rated.
              </p>
              <p className="service-intro">
                Bellingham has a significant inventory of pre-1960 homes — particularly in Fairhaven, Sunnyland, and Columbia neighborhoods — that often have original knob-and-tube or aluminum wiring. This is exactly the work we do best. We also serve the newer residential developments in Ferndale and Lynden frequently for panel upgrades, EV charger installs, and generator connections.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Cities We Serve</h3>
              <ul className="included-list">
                {['Bellingham', 'Ferndale', 'Lynden', 'Blaine', 'Birch Bay', 'Everson', 'Sumas', 'Nooksack', 'Sudden Valley', 'Birchwood'].map(b => (
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

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>In Whatcom County? Let&apos;s Talk.</h2>
            <p>Free estimates on most projects. Same-day response.</p>
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
            <p className="footer-tagline">A+ BBB Rating. Lic. PREMIES821LL. Serving Skagit, Whatcom, and surrounding counties.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/ev-charging">EV Charging</a></li>
            <li><a href="/services/historic-home-rewiring">Historic Home Rewiring</a></li>
            <li><a href="/services/generator-installation">Generators</a></li>
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
