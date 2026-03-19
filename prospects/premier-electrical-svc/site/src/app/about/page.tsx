import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Premier Electrical Services | Award-Winning Electricians — Skagit Valley, WA',
  description: 'Nearly 60 years of combined electrical experience. Three-time Best of the Best Skagit Valley. A+ BBB rating. Licensed, bonded, insured. Based in Mount Vernon, WA.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function AboutPage() {
  return (
    <main>
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about" className="nav-link--active">About</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-icon">🏆</div>
          <h1>The Electricians Skagit Valley Keeps Calling Back.</h1>
          <p className="page-hero-sub">
            Three-time Best of the Best. A+ BBB. Nearly 60 years of combined experience. Based in Mount Vernon — and proud of it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" alt="Premier Electrical team at work" />
              <div className="award-badge">
                <div className="award-badge-year">2023 · 2024 · 2025</div>
                <div className="award-badge-title">Best of the Best</div>
                <div className="award-badge-sub">Skagit Valley</div>
              </div>
            </div>
            <div className="about-text">
              <span className="eyebrow">Who We Are</span>
              <h2>Award-Winning. Expert in the Tricky Stuff.</h2>
              <p>
                Premier Electrical Services has earned the &ldquo;Best of the Best&rdquo; award in Skagit Valley three years running — 2023, 2024, and 2025. We also carry an A+ rating with the Better Business Bureau. That&apos;s not marketing. That&apos;s customers and inspectors saying the work holds up.
              </p>
              <p>
                Our team has nearly 60 years of combined electrical experience. We specialize in work that other electricians decline — complex properties, historic homes, older wiring systems. If the job is unusual, we&apos;ve probably seen it. If it involves knob-and-tube wiring in an 1930s Anacortes craftsman or a commercial electrical buildout in a Mount Vernon warehouse, that&apos;s exactly where we work best.
              </p>
              <p>
                100% recommended on Facebook. Not because we asked people to leave reviews — because we did the work right.
              </p>
              <div className="about-stats">
                {[
                  { num: '60+', label: 'Years Combined Experience' },
                  { num: '3×', label: 'Best of the Best Award' },
                  { num: 'A+', label: 'BBB Rating' },
                  { num: '100%', label: 'Recommended on Facebook' },
                ].map(s => (
                  <div key={s.label} className="about-stat">
                    <div className="about-stat-num">{s.num}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="about-credentials">
                {['Licensed', 'Bonded', 'Insured', 'A+ BBB', 'Lic. PREMIES821LL'].map(c => (
                  <span key={c} className="credential-badge">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <span className="eyebrow">Our Values</span>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>Three Things We Don&apos;t Compromise On.</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: 0 }}>These aren&apos;t slogans. They&apos;re the reason we&apos;ve won Best of the Best three years in a row.</p>
          <div className="why-grid" style={{ marginTop: '48px' }}>
            {[
              { num: '01', title: 'We Show Up.', desc: 'Scheduled appointment means we\'re there. No three-hour windows, no last-minute cancellations, no ghosting. Our schedule is our word.' },
              { num: '02', title: 'No Surprise Invoices.', desc: 'Free estimates on most projects. We tell you what it costs before we start — not after. What we quote is what you pay.' },
              { num: '03', title: 'Safety Is Non-Negotiable.', desc: 'We\'re not cutting corners behind your walls. Every job is done to code, every time. Every project is inspector-approved.' },
            ].map(w => (
              <div key={w.num} className="why-card" style={{ '--why-bg': 'rgba(255,255,255,0.07)' } as React.CSSProperties}>
                <div className="why-number" style={{ color: 'var(--color-accent)' }}>{w.num}</div>
                <h3 style={{ color: '#fff' }}>{w.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Our Region</span>
          <h2>Based in Mount Vernon. Serving the Entire Puget Sound Corridor.</h2>
          <p style={{ color: '#4a5568', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1rem' }}>
            We&apos;ve built our reputation in Skagit Valley — and expanded to serve homeowners and businesses from Bellingham to Seattle. If you&apos;re in Skagit, Whatcom, San Juan, Island, King, or Snohomish County, we work in your area.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/service-area" className="btn btn-secondary">View Service Area</a>
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Ready to Work with the Best?</h2>
            <p>Free estimates on most projects. We show up when we say we will. We do the job right.</p>
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
            <li><a href="/services/commercial-wiring">Commercial Wiring</a></li>
          </ul></div>
          <div className="footer-col"><h4>Contact</h4><ul>
            <li><a href={PHONE_TEL}>{PHONE}</a></li>
            <li><a href="/contact">Free Estimate</a></li>
            <li><a href="/service-area">Service Area</a></li>
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
