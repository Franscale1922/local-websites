import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Electrical Services | Premier Electrical Services — Skagit & Puget Sound, WA',
  description: 'Complete electrical services in Skagit, Whatcom, Island, San Juan, King, and Snohomish counties. Panel upgrades, EV charging, generators, historic home rewiring, commercial wiring, and more.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const SERVICES = [
  { icon: '⚡', title: 'Panel Upgrades', href: '/services/panel-upgrades', desc: 'Fuse boxes, 100A → 200A upgrades, subpanels. All permitted and inspector-approved.' },
  { icon: '🚗', title: 'EV Charging Stations', href: '/services/ev-charging', desc: 'Level 2 home chargers — Tesla Wall Connector, JuiceBox, ChargePoint. Permitted install, clean finish.' },
  { icon: '🔌', title: 'Generator Installation', href: '/services/generator-installation', desc: 'Standby and portable generator hookups with proper transfer switches. Built for PNW outage season.' },
  { icon: '🏚️', title: 'Historic & Older Home Rewiring', href: '/services/historic-home-rewiring', desc: 'Knob-and-tube, aluminum wiring, cloth-covered wire. The work other electricians decline. Our specialty.' },
  { icon: '🏢', title: 'Commercial Wiring', href: '/services/commercial-wiring', desc: 'Tenant improvements, restaurants, retail, offices, and new commercial construction. Coordinated with your GC.' },
  { icon: '💡', title: 'Lighting & Outbuildings', href: '/services/lighting-upgrades', desc: 'Indoor & outdoor lighting, landscape lighting, detached garages, barns, shops, ADUs, hot tub wiring.' },
  { icon: '🔍', title: 'Repairs & Service Calls', href: '/services/service-calls', desc: 'Tripped breakers, mystery outages, suspect prior work. We diagnose it, fix it, explain it — same day on most calls.' },
];

export default function ServicesPage() {
  return (
    <main>
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
          <div className="page-hero-icon">⚡</div>
          <h1>Electrical Services Across the Greater Puget Sound</h1>
          <p className="page-hero-sub">
            From panel upgrades to historic home rewires to EV chargers — specialty work is our thing. Nearly 60 years of combined experience. Three-time Best of the Best. A+ BBB.
          </p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h2>We Handle the Jobs Others Skip.</h2>
          <p style={{ color: '#4a5568', marginBottom: '48px', fontSize: '1rem' }}>
            Every service includes a free estimate, permitted work where required, and inspector-approved completion. We don&apos;t cut corners behind your walls.
          </p>
          <div className="services-grid services-grid--3col">
            {SERVICES.map(s => (
              <a href={s.href} key={s.title} className="service-card service-card--link">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-link">Learn more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="trust-strip">
        {[
          { icon: '🏆', label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025' },
          { icon: '🏅', label: 'A+ BBB Rating', sub: 'Licensed, Bonded & Insured' },
          { icon: '⚡', label: '60 Yrs Combined Experience', sub: 'Residential & Commercial' },
          { icon: '💬', label: 'Free Estimates', sub: 'On most projects — no surprises' },
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
            <h2>Not Sure Which Service You Need?</h2>
            <p>Call us and describe what&apos;s happening. We&apos;ll tell you straight what the problem likely is — no upsell, no runaround.</p>
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
            {SERVICES.map(s => <li key={s.title}><a href={s.href}>{s.title}</a></li>)}
          </ul></div>
          <div className="footer-col"><h4>Contact</h4><ul>
            <li><a href={PHONE_TEL}>{PHONE}</a></li>
            <li><a href="/contact">Free Estimate</a></li>
            <li><a href="/about">About Us</a></li>
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
