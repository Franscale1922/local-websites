import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recognition | Premier Electrical Services — Awards & Accreditations',
  description: '3-time Best of the Best winner in Skagit Valley, A+ BBB Rating, Expertise.com Top Pick in both Bellingham and Mount Vernon. See why homeowners trust Premier Electrical Services.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const AWARDS = [
  {
    img: '/images/award-2025.png',
    alt: 'Best of the Best 2025 Winner — Skagit Valley',
    title: 'Best of the Best — 2025',
    sub: 'Skagit Valley Community Award',
    body: 'Voted Best of the Best in Skagit Valley for 2025 — the third consecutive year. This award is chosen by community members, not a panel of judges. Real customers, real votes.',
  },
  {
    img: '/images/award-2024.png',
    alt: 'Best of the Best 2024 Winner — Skagit Valley',
    title: 'Best of the Best — 2024',
    sub: 'Skagit Valley Community Award',
    body: 'Recognized again in 2024 for the second year running. We didn\'t ask people to vote. They did it because the work held up and the experience was worth recommending.',
  },
  {
    img: '/images/award-2023.png',
    alt: 'Best of the Best 2023 Winner — Skagit Valley',
    title: 'Best of the Best — 2023',
    sub: 'Skagit Valley Community Award',
    body: 'Our first Best of the Best win in Skagit Valley. Started a streak. Three in a row says something about consistency — not just a good year.',
  },
  {
    img: '/images/award-bbb.png',
    alt: 'BBB Accredited Business A+ Rating',
    title: 'BBB Accredited — A+ Rating',
    sub: 'Better Business Bureau · Since 2022',
    body: 'Accredited by the Better Business Bureau with an A+ rating since 2022. The BBB evaluates complaint history, licensing, transparency, and business practices. We meet every standard.',
  },
  {
    img: '/images/award-expertise-bellingham.png',
    alt: 'Expertise.com Best Electricians in Bellingham',
    title: 'Best Electricians — Bellingham',
    sub: 'Expertise.com Independent Ranking',
    body: 'Named one of the best electricians in Bellingham by Expertise.com — earning A+ scores for both Reputation and Professionalism. Expertise evaluates dozens of criteria before making their selection.',
  },
  {
    img: '/images/award-expertise-mountvernon.png',
    alt: 'Expertise.com Best Electricians in Mount Vernon',
    title: 'Best Electricians — Mount Vernon',
    sub: 'Expertise.com Independent Ranking',
    body: 'Also ranked among the best electricians in our home city of Mount Vernon. Independent validation from an organization that scores electricians across experience, reviews, and licensing.',
  },
];

const CREDENTIALS = [
  'Licensed — Lic. PREMIES821LL',
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
            We don&apos;t chase awards. These came from customers voting, agencies vetting, and inspectors signing off. Six individual recognitions — and counting.
          </p>
          <div className="page-hero-ctas">
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Get a Free Estimate</a>
          </div>
        </div>
      </section>

      {/* AWARD CARDS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1080px' }}>

          {/* Section intro */}
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span className="eyebrow">Our Track Record</span>
            <h2 style={{ marginTop: '8px' }}>Six Independent Recognitions</h2>
            <p style={{ color: 'var(--color-neutral-mid)', maxWidth: '560px', margin: '12px auto 0', fontSize: '1rem', lineHeight: 1.7 }}>
              Each recognition below is independently awarded — not purchased, not self-reported. Community votes, accreditation bodies, and ranking organizations.
            </p>
          </div>

          {/* Award grid — 3 columns on desktop */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {AWARDS.map((award) => (
              <div key={award.title} style={{
                background: 'var(--color-surface)',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '36px 28px 32px',
                boxShadow: '0 4px 18px rgba(13, 31, 60, 0.08), 0 1px 4px rgba(13, 31, 60, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}>
                {/* Badge image */}
                <div style={{ width: '148px', height: '148px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={award.img}
                    alt={award.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Sub label */}
                <div style={{
                  fontSize: '0.72rem', fontWeight: 700,
                  letterSpacing: '0.09em', textTransform: 'uppercase',
                  color: 'var(--color-accent)', marginBottom: '8px',
                }}>
                  {award.sub}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.15rem', fontWeight: 800,
                  color: 'var(--color-primary)', marginBottom: '14px',
                  lineHeight: 1.2,
                }}>
                  {award.title}
                </h3>

                {/* Body */}
                <p style={{
                  color: 'var(--color-neutral-mid)',
                  lineHeight: 1.7, fontSize: '0.9rem', margin: 0,
                }}>
                  {award.body}
                </p>
              </div>
            ))}
          </div>

          {/* CREDENTIALS STRIP */}
          <div style={{
            marginTop: '64px',
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
          <div style={{
            background: 'var(--color-tinted)', borderRadius: '12px',
            padding: '40px', textAlign: 'center', marginTop: '40px',
            border: '1.5px solid var(--color-border)',
            boxShadow: '0 4px 18px rgba(13, 31, 60, 0.08), 0 1px 4px rgba(13, 31, 60, 0.04)',
          }}>
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
