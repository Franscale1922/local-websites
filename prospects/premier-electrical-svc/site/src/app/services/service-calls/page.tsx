import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrical Repairs & Service Calls | Premier Electrical Services — Skagit County, WA',
  description: 'Electrical troubleshooting, repairs, and service calls across Skagit, Whatcom, Island, and San Juan counties. Tripped breakers, mystery outages, suspect work. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function ServiceCallsPage() {
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
          <div className="page-hero-icon">🔍</div>
          <h1>Electrical Repairs & Service Calls — We Diagnose It, We Fix It, We Explain It.</h1>
          <p className="page-hero-sub">
            Tripped breakers that won&apos;t reset. Outlets that stopped working. Lights that flicker. Questionable work left behind by a previous contractor. We troubleshoot the problem and fix it — same day on most service calls.
          </p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Schedule a Service Call</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <div className="service-page-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=85"
          alt="Electrician troubleshooting electrical fault"
          loading="eager"
        />
      </div>
      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-body">
              <span className="eyebrow">What We Fix</span>
              <h2>If Something Feels Off, It Probably Is.</h2>
              <p className="service-intro">
                Electrical problems don&apos;t always announce themselves loudly. Sometimes it&apos;s a breaker that trips under no obvious load. Sometimes it&apos;s a dedicated circuit that worked yesterday and doesn&apos;t today. Sometimes it&apos;s an outlet that was wired backward by someone three owners ago and you&apos;re only finding out now when you plug in a surge protector and it throws a fault.
              </p>
              <p className="service-intro">
                We&apos;ve seen — and fixed — all of it. We bring the right diagnostic tools, we don&apos;t guess, and we explain what we find in plain language before we do any work. If it&apos;s a quick fix, you pay for a service call. If it&apos;s something larger, we quote it before we start.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Common Service Calls</h3>
              <ul className="included-list">
                {[
                  'Tripped breakers — reset & diagnose',
                  'Dead outlets, switches, or circuits',
                  'Flickering or buzzing lights',
                  'Burning smell from outlet or panel',
                  'GFCI outlet trips (bathroom, kitchen, exterior)',
                  'Suspect or sloppy prior contractor work',
                  'Pre-purchase electrical evaluations',
                  'Weird readings on EV chargers or appliances',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Schedule a Service Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Warning Signs</span>
          <h2>When to Call Right Away</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🔥', title: 'Burning Smell or Visible Scorch Marks', desc: 'This is a fire hazard. Stop using the outlet or switch immediately. Don\'t wait. Call us now.' },
              { icon: '⚡', title: 'Breaker That Won\'t Reset', desc: 'A breaker that trips immediately when you reset it means either the circuit is overloaded or there\'s a fault somewhere in the wiring. Either way, it needs diagnosis.' },
              { icon: '💡', title: 'Lights Dim When Appliances Run', desc: 'This typically means an inadequate panel, a loose neutral, or a shared circuit that\'s overloaded. Worth a call — it usually points to a fixable problem.' },
              { icon: '🌡️', title: 'Hot Outlets or Faceplates', desc: 'Outlets shouldn\'t feel warm. If they do, that\'s current leaking somewhere. Don\'t use the outlet. Get it looked at.' },
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
            <h2>Something Doesn&apos;t Seem Right?</h2>
            <p>Call us. We respond same day on most service calls. We pick up the phone.</p>
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
            <div className="footer-brand-logo"><img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" /></div>
            <p className="footer-tagline">Licensed, bonded electricians. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/service-calls">Service Calls</a></li>
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
