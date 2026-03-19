import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrician on Whidbey & Camano Island | Premier Electrical Services',
  description: 'Licensed electricians serving Oak Harbor, Camano Island, Coupeville, Langley, and all of Island County. Panel upgrades, EV charging, older home wiring. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function IslandCountyPage() {
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
          src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1800&q=85"
          alt="Pacific Northwest coastline and forested shores representing Island County, Washington"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Island County, WA
          </div>
          <h1>Electrical Contractors Serving Whidbey &amp; Camano Island</h1>
          <p className="county-hero-sub">
            Oak Harbor, Camano Island, Coupeville, Langley, Freeland. We serve Island County homeowners and businesses — licensed, bonded, A+ BBB.
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
              <span className="eyebrow">Island County Service</span>
              <h2>Island Living Has Different Electrical Challenges. We Know Them.</h2>
              <p className="service-intro">
                Homes on Whidbey and Camano Island often face challenges that mainland properties don&apos;t — aging housing stock, older electrical infrastructure, well pumps that make generator hookups critical, and extended outages when storms roll through. We serve Island County regularly and understand the specific needs of island properties.
              </p>
              <p className="service-intro">
                From Oak Harbor to Coupeville to Langley, we handle panel upgrades, historic home rewires, EV charger installations, and generator hookups. If you&apos;re on a well, a generator transfer switch is especially important — and we install those correctly.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Cities We Serve</h3>
              <ul className="included-list">
                {['Oak Harbor', 'Camano Island', 'Coupeville', 'Langley', 'Freeland', 'Greenbank', 'Clinton', 'Bayview Corner', 'Stanwood (Snohomish border)'].map(b => (
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
          <span className="eyebrow">Island County Specialties</span>
          <h2>Services Most Requested on Whidbey &amp; Camano</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🔌', title: 'Generator Hookups', desc: 'Island properties lose power more often than mainland ones — and if you\'re on a well, that means no water too. A properly installed transfer switch protects your home and keeps your well pump running when the grid goes down.' },
              { icon: '🏚️', title: 'Historic Home Rewiring', desc: 'Whidbey Island has a high density of pre-1960 homes, many with original wiring systems. Coupeville, Langley, and South Whidbey properties frequently need full or partial rewires. This is work we do often and do well.' },
              { icon: '⚡', title: 'Panel Upgrades', desc: 'Older Island County homes regularly need panel upgrades — both to accommodate modern loads and because original panels are no longer insurable. We handle permits and utility coordination with PUD 1 of Island County.' },
              { icon: '🚗', title: 'EV Charging', desc: 'Ferry commuters and Whidbey Island residents are adopting EVs at a high rate. We install Level 2 home chargers throughout Island County — permitted, inspected, and installed correctly the first time.' },
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
            <h2>On the Island? We Come to You.</h2>
            <p>Free estimates, same-day response on most requests. Licensed, bonded, A+ BBB.</p>
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
            <p className="footer-tagline">A+ BBB Rating. Lic. PREMIES821LL. Serving Island County and surrounding areas.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/generator-installation">Generator Hookups</a></li>
            <li><a href="/services/ev-charging">EV Charging</a></li>
            <li><a href="/services/historic-home-rewiring">Older Home Rewiring</a></li>
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
