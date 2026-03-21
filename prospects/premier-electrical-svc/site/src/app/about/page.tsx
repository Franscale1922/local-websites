import type { Metadata } from 'next';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'About Premier Electrical Services | Award-Winning Electricians — Skagit Valley, WA',
  description: 'Nearly 60 years of combined electrical experience. Three-time Best of the Best Skagit Valley. A+ BBB rating. Licensed, bonded, insured. Based in Mount Vernon, WA.',
  alternates: { canonical: '/about' },
  openGraph: { images: [{ url: '/images/hero-about-portrait.jpg', width: 1200, height: 630, alt: 'Premier Electrical Services team in Mount Vernon, WA' }] },
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
          <li><a href="/recognition">Recognition</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-about-portrait.jpg"
          alt="Premier Electrical Services owner on job site"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>
            3× Best of the Best · Skagit Valley
          </div>
          <h1>The Electricians Skagit Valley Keeps Calling Back.</h1>
          <p className="county-hero-sub">
            Three-time Best of the Best. A+ BBB. Nearly 60 years of combined experience. Based in Mount Vernon — and proud of it.
          </p>
          <div className="county-hero-ctas">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about-work.jpg" alt="Premier Electrical Services licensed electrician" />
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
          <span className="eyebrow">Our Story</span>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>Built on Decades of Hands-On Experience.</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: 0 }}>We didn&apos;t get here by doing easy jobs. We got here by doing the ones others turned down.</p>
          <div className="why-grid" style={{ marginTop: '48px' }}>
            {[
              { num: '60+', title: 'Years of Combined Experience.', desc: 'Our team has worked on homes from the 1920s to new construction — everything from knob-and-tube replacement in historic Anacortes craftsmans to full commercial buildouts in Burlington.' },
              { num: '3×', title: 'Best of the Best — Three Years Running.', desc: 'We\'ve won Skagit Valley\'s Best of the Best award in 2023, 2024, and 2025. That doesn\'t come from marketing. It comes from customers who called us back and told their neighbors.' },
              { num: 'A+', title: 'Better Business Bureau Rated.', desc: 'Our A+ BBB rating reflects the way we handle every job — from estimate to inspection. We\'re fully licensed (Lic. PREMIES821LL), bonded, and insured in Washington State.' },
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

      <SiteFooter />
    </main>
  );
}
