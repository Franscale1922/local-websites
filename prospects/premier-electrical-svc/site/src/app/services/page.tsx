import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Electrical Services | Premier Electrical Services — Skagit & Puget Sound, WA',
  description: 'Complete electrical services in Skagit, Whatcom, Island, San Juan, King, and Snohomish counties. Panel upgrades, EV charging, generators, historic home rewiring, commercial wiring, and more.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const SERVICES = [
  {
    title: 'Panel Upgrades',
    href: '/services/panel-upgrades',
    desc: "Fuse boxes, 100A \u2192 200A upgrades, subpanels. All permitted and inspector-approved. We coordinate with your utility so you're not left figuring it out.",
    img: '/images/svc-panel.jpg',
    tag: 'Most Requested',
  },
  {
    title: 'EV Charging Stations',
    href: '/services/ev-charging',
    desc: "Level 2 home chargers: Tesla Wall Connector, JuiceBox, ChargePoint. Permitted install, clean finish. We'll assess your panel before we ever pick up a drill.",
    img: '/images/svc-ev-charging.jpg',
    tag: 'Fast Growing',
  },
  {
    title: 'Generator Installation',
    href: '/services/generator-installation',
    desc: 'Standby and portable generator hookups with proper transfer switches. Built for PNW outage season. Permanent Generac installs or temporary hookups.',
    img: '/images/svc-generator.jpg',
    tag: null,
  },
  {
    title: 'Historic & Older Home Rewiring',
    href: '/services/historic-home-rewiring',
    desc: 'Knob-and-tube, aluminum wiring, cloth-covered wire. The work other electricians decline — our specialty. We know older homes, and we know how to bring them up to code safely.',
    img: '/images/svc-historic.jpg',
    tag: 'Our Specialty',
  },
  {
    title: 'Commercial Wiring',
    href: '/services/commercial-wiring',
    desc: 'Tenant improvements, restaurants, retail, offices, and new commercial construction. Coordinated with your GC — we keep the project on schedule.',
    img: '/images/svc-commercial.jpg',
    tag: null,
  },
  {
    title: 'Lighting & Outbuildings',
    href: '/services/lighting-upgrades',
    desc: 'Indoor & outdoor lighting, landscape lighting, detached garages, barns, shops, ADUs, hot tub wiring. If it needs power, we run it.',
    img: '/images/svc-lighting.jpg',
    tag: null,
  },
  {
    title: 'Repairs & Service Calls',
    href: '/services/service-calls',
    desc: 'Tripped breakers, mystery outages, suspect prior work. We diagnose it, fix it, explain it — same day on most calls. No runaround, no vague estimates.',
    img: '/images/svc-service-calls.jpg',
    tag: 'Same-Day Available',
  },
  {
    title: 'Residential Wiring',
    href: '/services/residential-wiring',
    desc: 'New construction, remodels, complete rewires, rough-in, and trim-out. Nearly 60 years of combined experience means we\'ve built them and rewired them — we know how they\'re supposed to work.',
    img: '/images/svc-residential.jpg',
    tag: null,
  },
];

export default function ServicesPage() {
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
          <li><a href="/recognition">Recognition</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      {/* PAGE HERO — full bleed with electrician photo */}
      <section className="services-page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-services.jpg"
          alt="Premier Electrical Services electrician working on panel"
          className="services-page-hero-bg"
        />
        <div className="services-page-hero-overlay" />
        <div className="services-page-hero-content">
          <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>What We Do</span>
          <h1>Electrical Services Across the Greater Puget Sound</h1>
          <p>
            From panel upgrades to historic home rewires to EV chargers — specialty work is our thing.
            Nearly 60 years of combined experience. Three-time Best of the Best. A+ BBB.
          </p>
          <div className="page-hero-ctas" style={{ marginTop: '32px' }}>
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      {/* SERVICES — image card grid */}
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <p style={{ color: '#4a5568', marginBottom: '56px', fontSize: '1rem', maxWidth: '60ch' }}>
            Every service includes a free estimate, permitted work where required, and inspector-approved completion.
            We don&apos;t cut corners behind your walls.
          </p>
          <div className="svc-img-grid">
            {SERVICES.map(s => (
              <a href={s.href} key={s.title} className="svc-img-card">
                <div className="svc-img-card-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} loading="lazy" />
                  {s.tag && <span className="svc-img-tag">{s.tag}</span>}
                </div>
                <div className="svc-img-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="service-link">Learn more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        {[
          { label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025', svg: <svg key="t" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg> },
          { label: 'A+ BBB Rating', sub: 'Licensed, Bonded & Insured', svg: <svg key="b" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg> },
          { label: '60 Yrs Combined Experience', sub: 'Residential & Commercial', svg: <svg key="e" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
          { label: 'Free Estimates', sub: 'On most projects — no surprises', svg: <svg key="f" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> },
        ].map(t => (
          <div key={t.label} className="trust-strip-item">
            <div className="trust-strip-icon">{t.svg}</div>
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
            <div className="footer-brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" />
            </div>
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
