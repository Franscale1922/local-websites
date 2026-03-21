import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recognition | Premier Electrical Services — Awards & Accreditations',
  description: '3-time Best of the Best winner in Skagit Valley, A+ BBB Rating, Expertise.com Top Pick. See why homeowners across Skagit and Whatcom counties trust Premier Electrical Services.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const AWARDS = [
  {
    year: '2023 · 2024 · 2025',
    title: 'Best of the Best — 3 Years Running',
    body: 'Voted Best of the Best in Skagit Valley three consecutive years. This award is decided by the community — real customers, real votes. Three years in a row says something.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
      </svg>
    ),
  },
  {
    year: 'Skagit County',
    title: 'Voted 1 of 3 Best Electricians',
    body: "Independently ranked among the top three electricians in Skagit County. Not a paid listing — a competitive selection based on reputation, reviews, and quality of work.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    year: 'Since 2022',
    title: 'BBB Accredited — A+ Rating',
    body: 'Accredited by the Better Business Bureau with an A+ rating since 2022. The BBB evaluates complaint history, transparency, licensing, and business practices. We meet every standard.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    year: 'Bellingham & Mount Vernon',
    title: 'Expertise.com Top Pick',
    body: "Named one of Expertise.com's Best Electricians in both Bellingham and Mount Vernon — earning A+ scores for Reputation and Professionalism. Expertise evaluates electricians across dozens of criteria before making their selection.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
      </svg>
    ),
  },
];

const CREDENTIALS = [
  'Licensed Electrician — Lic. PREMIES821LL',
  'Bonded & Insured in Washington State',
  '100% Recommended on Facebook',
  'Nearly 60 Years Combined Experience',
];

export default function RecognitionPage() {
  return (
    <main>
      {/* NAV */}
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/recognition" className="nav-link--active">Recognition</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
            </svg>
          </div>
          <h1>Recognized by the Community We Serve</h1>
          <p className="page-hero-sub">
            We don&apos;t chase awards. These came from customers voting, agencies vetting, and inspectors signing off. Three years in a row.
          </p>
          <div className="page-hero-ctas">
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Get a Free Estimate</a>
          </div>
        </div>
      </section>

      {/* AWARDS GRID */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '28px' }}>
            {AWARDS.map((award) => (
              <div key={award.title} style={{
                background: 'var(--color-surface)',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '36px 32px',
                boxShadow: '0 4px 18px rgba(13, 31, 60, 0.08), 0 1px 4px rgba(13, 31, 60, 0.04)',
              }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '14px',
                  background: 'var(--color-tinted)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-accent)', marginBottom: '20px',
                }}>
                  {award.icon}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '8px' }}>
                  {award.year}
                </div>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-primary)' }}>{award.title}</h2>
                <p style={{ color: 'var(--color-neutral-mid)', lineHeight: 1.7, margin: 0 }}>{award.body}</p>
              </div>
            ))}
          </div>

          {/* CREDENTIALS STRIP */}
          <div style={{
            marginTop: '56px',
            background: 'var(--color-primary)',
            borderRadius: 'var(--radius-md)',
            padding: '36px 40px',
            display: 'flex', flexWrap: 'wrap', gap: '20px 40px',
            alignItems: 'center', justifyContent: 'center',
          }}>
            {CREDENTIALS.map((c) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{c}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: 'var(--color-tinted)', borderRadius: '12px', padding: '40px', textAlign: 'center', marginTop: '40px', border: '1.5px solid var(--color-border)', boxShadow: '0 4px 18px rgba(13, 31, 60, 0.08), 0 1px 4px rgba(13, 31, 60, 0.04)' }}>
            <h2 style={{ marginBottom: '10px' }}>Ready to Work With an Award-Winning Team?</h2>
            <p style={{ color: 'var(--color-neutral-mid)', marginBottom: '28px', fontSize: '1rem' }}>
              Call us or request a free estimate. We respond same day on most requests.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
              <a href="/contact" className="btn btn-secondary">Get a Free Estimate</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
          <div className="footer-col"><h4>Company</h4><ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/recognition">Recognition</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Free Estimate</a></li>
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
