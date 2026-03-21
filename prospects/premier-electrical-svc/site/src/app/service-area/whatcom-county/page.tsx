import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Electrician in Whatcom County, WA | Premier Electrical Services',
  description: 'Licensed electrical contractors serving Bellingham, Ferndale, Lynden, Blaine, and all of Whatcom County. Panel upgrades, EV charging, historic home rewiring. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function WhatcomCountyPage() {
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
          src="/images/hero-whatcom.jpg"
          alt="Bellingham Bay waterfront at golden hour with mountains behind"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Whatcom County, WA
          </div>
          <h1>Electrical Contractors Serving Whatcom County, WA</h1>
          <p className="county-hero-sub">
            Licensed, bonded, A+ BBB — serving Bellingham, Ferndale, Lynden, Blaine, and all of Whatcom County. Panel upgrades, EV chargers, historic home rewiring, and more.
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

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Whatcom County Specialties</span>
          <h2>Services Most Requested in Whatcom County</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3"/><path d="M12 10v-2"/></svg>, title: 'Historic Home Rewiring', desc: "Bellingham's Fairhaven, Columbia, and Sunnyland neighborhoods have a significant concentration of pre-1950 homes — many with original knob-and-tube or cloth-insulated wiring. We specialize in exactly this work." },
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="7" y1="6" x2="7" y2="18"/><line x1="12" y1="6" x2="12" y2="18"/><line x1="17" y1="6" x2="17" y2="18"/><line x1="2" y1="11" x2="22" y2="11"/><circle cx="7" cy="8" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><circle cx="17" cy="8" r="1" fill="currentColor"/></svg>, title: 'Panel Upgrades', desc: "From Bellingham's older neighborhoods to newer Ferndale and Lynden developments, we handle panel upgrades of every size — including the utility coordination and permit that comes with it." },
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="15" height="13" rx="2"/><path d="M16 10h2a2 2 0 012 2v3a2 2 0 01-2 2h-2"/><path d="M5 6V4"/><path d="M9 6V4"/><path d="M11 13l-3 5h4l-3 5"/></svg>, title: 'EV Charging', desc: "Whatcom County's proximity to the border and its university population drives high EV adoption. We've installed Level 2 chargers throughout Bellingham and Ferndale, properly permitted every time." },
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="22" height="11" rx="2"/><path d="M5 7V5a1 1 0 011-1h3a1 1 0 011 1v2"/><path d="M19 7V5a1 1 0 00-1-1h-3a1 1 0 00-1 1v2"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 10v-3"/><path d="M12 14v3"/></svg>, title: 'Generator Hookups', desc: "Properties in Lynden, Birch Bay, and rural Whatcom County see regular outages. A whole-home transfer switch means your generator does its job safely — and your utility doesn't get back-fed." },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-number">{w.svg}</div>
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
            <h2>In Whatcom County? Let&apos;s Talk.</h2>
            <p>Free estimates on most projects. Same-day response.</p>
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
