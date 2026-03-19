import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Whole-Home Generator Installation | Premier Electrical Services — Skagit County, WA',
  description: 'Standby generator installation for homes and businesses in Skagit, Whatcom, Island, and San Juan counties. Pacific Northwest power outage specialists. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function GeneratorInstallationPage() {
  return (
    <main>
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

      <section className="page-hero">
        <div className="container">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="page-hero-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h1>Whole-Home Generator Installation — Because the Power Goes Out Here.</h1>
          <p className="page-hero-sub">
            Winter storms, grid failures, fallen trees. In Western Washington, power outages aren&apos;t rare — they&apos;re a seasonal reality. A properly installed standby or portable generator means your home keeps running when the neighborhood goes dark.
          </p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <div className="service-page-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85"
          alt="Standby generator installed at residential home"
          loading="eager"
        />
      </div>
      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-body">
              <span className="eyebrow">The Service</span>
              <h2>When the Power Goes Out, You&apos;ll Be the One with Heat.</h2>
              <p className="service-intro">
                We install both portable generator hookups and permanent standby systems for homes and small businesses throughout Skagit, Whatcom, San Juan, and Island counties. Portable generators need a proper transfer switch or interlock — not an extension cord run through a window. Standby systems turn on automatically within seconds of an outage, without anyone lifting a finger.
              </p>
              <p className="service-intro">
                We size the generator for your actual load — whether that&apos;s just a few critical circuits, the whole house, or a commercial space that can&apos;t afford downtime. We handle the electrical side completely: the transfer switch, the dedicated circuit, the connection to your utility meter, and any panel modifications needed.
              </p>
              <p className="service-intro">
                We&apos;ll also tell you honestly if a generator is overkill for your situation and a battery backup system might serve you better.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What&apos;s Included</h3>
              <ul className="included-list">
                {[
                  'Whole-home standby generator connections',
                  'Portable generator transfer switch installation',
                  'Manual and automatic interlock kits',
                  'Load analysis — size it right for your home',
                  'Dedicated generator circuits and wiring',
                  'Connection to propane, natural gas, or liquid propane',
                  'Permit pulled, inspection coordinated',
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
          <span className="eyebrow">Why Western Washington Needs This</span>
          <h2>The Pacific Northwest Case for Backup Power</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🌧️', title: 'Winter Storms', desc: 'Western Washington averages 10–15 significant windstorms and winter ice events per decade. Power can be out for 2–7 days in rural Skagit and island areas.' },
              { icon: '💧', title: 'Well Pumps & Water', desc: 'Homes on wells lose water pressure within minutes of an outage. A generator keeps your pump — and your toilet — running.' },
              { icon: '🏥', title: 'Medical Equipment', desc: 'CPAP machines, oxygen concentrators, insulin refrigeration. A few hours without power isn\'t an inconvenience — it\'s a medical emergency.' },
              { icon: '💼', title: 'Home-Based Businesses', desc: 'If you work from home, a multi-day outage means lost revenue. A generator is the business continuity plan that actually works.' },
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
          <h2>Generator Installation Questions</h2>
          <div className="faq-list" style={{ marginTop: '36px', maxWidth: '780px' }}>
            {[
              { q: 'What size generator do I need?', a: 'It depends on what you want to power. A few critical circuits (heat, refrigerator, lights, well pump) might need 7,500–12,000 watts. Whole-home coverage typically starts at 20KW. We do a load analysis and tell you exactly what you need — and what you don\'t.' },
              { q: 'What\'s the difference between a transfer switch and an interlock?', a: 'Both prevent backfeed to the utility grid (a safety requirement). An interlock kit is less expensive and works with your existing panel. A transfer switch is a separate subpanel that automatically switches between grid and generator. We\'ll recommend the right option for your situation.' },
              { q: 'Do I need a permit for generator installation?', a: 'Yes — in Washington State, generator hookups require an electrical permit. We handle that, schedule the inspection, and make sure everything is done by the book.' },
              { q: 'Can you connect a generator to natural gas?', a: 'Yes. If your home has natural gas service, a permanently-piped connection is the cleanest and most convenient option — no storing fuel, no refilling. We do this connection along with the electrical hookup.' },
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
            <h2>Don&apos;t Wait for the Next Outage to Think About This.</h2>
            <p>Free estimate. We size it right, handle the permit, and have you ready before storm season.</p>
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
            <div className="footer-brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/ev-charging">EV Charging</a></li>
            <li><a href="/services/generator-installation">Generators</a></li>
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
