import type { Metadata } from 'next';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';

export const metadata: Metadata = {
  title: 'Recognition | Premier Electrical Services — Awards & Accreditations',
  description: 'Four-time Best of the Best Skagit Valley winner, Skagit\'s Best Finalist, Expertise.com Top Pick, and BBB Accredited A+. See why homeowners across Skagit and Whatcom counties trust Premier Electrical Services.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const AWARDS = [
  {
    img: '/images/real-award-2025-winner.jpg',
    alt: '2025 Best of the Best Skagit Valley Winner',
    title: 'Best of the Best — 2025 Winner',
    sub: 'Skagit Publishing · goskagit.com',
    body: 'The Official Community Choice Awards — voted on by Skagit Valley residents. Our most recent win and four years in the running.',
  },
  {
    img: '/images/real-award-2024-winner.jpg',
    alt: '2024 Best of the Best Skagit Valley Winner',
    title: 'Best of the Best — 2024 Winner',
    sub: 'Skagit Publishing · goskagit.com',
    body: 'Three wins in a row. When the community keeps voting the same way, that tells you something.',
  },
  {
    img: '/images/real-award-2023-winner.png',
    alt: '2023 Best of the Best Skagit Valley Winner',
    title: 'Best of the Best — 2023 Winner',
    sub: 'Skagit Publishing · goskagit.com',
    body: 'Two-time winner heading into 2023. Real customers casting real votes — this isn\'t a paid placement.',
  },
  {
    img: '/images/real-award-2022-finalist.png',
    alt: '2022 Best of the Best Skagit Valley Finalist',
    title: 'Best of the Best — 2022 Finalist',
    sub: 'Skagit Publishing · goskagit.com',
    body: 'Our first year as a finalist, and it turned out to be the start of a streak. Real customers casting real votes. Not a paid placement.',
  },
  {
    img: '/images/real-award-2021-winner.jpg',
    alt: '2021 Best of the Best Skagit Valley Winner',
    title: 'Best of the Best — 2021 Winner',
    sub: 'Skagit Publishing · goskagit.com',
    body: 'Our first Best of the Best win — voted by Skagit Valley community members. Started the streak that\'s now four wins and counting.',
  },
  {
    img: '/images/real-award-skagits-best-2021.png',
    alt: "Skagit's Best Finalist 2021 — goskagit.com",
    title: "Skagit's Best Finalist — 2021",
    sub: 'GoSkagit.com Community Award',
    body: "Named a Skagit's Best Finalist in 2021 by goSkagit.com, separate from the Best of the Best awards. Two different award bodies, one consistent result.",
  },
  {
    img: '/images/real-award-expertise-bellingham.png',
    alt: 'Expertise.com Best Electricians in Bellingham 2021',
    title: 'Best Electricians in Bellingham',
    sub: 'Expertise.com · 2021',
    body: 'Independently ranked among the best electricians in Bellingham — earning A+ scores for Reputation and Professionalism. Expertise evaluates dozens of criteria before selecting finalists.',
  },
  {
    img: '/images/real-award-bbb.png',
    alt: 'BBB Accredited Business',
    title: 'BBB Accredited Business — A+ Rating',
    sub: 'Better Business Bureau · Since 2022',
    body: 'Accredited by the Better Business Bureau with an A+ rating since 2022. The BBB evaluates complaint history, licensing, transparency, and business standards. We meet every one.',
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
      <SiteNav alwaysScrolled activePath="/recognition" />

      {/* HERO — team photo */}
      <section className="services-page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-recognition.jpg" alt="Premier Electrical Services team in front of branded truck" className="services-page-hero-bg" />
        <div className="services-page-hero-overlay" />
        <div className="services-page-hero-content">
          <h1>Recognized by the Community We Serve</h1>
          <p style={{ maxWidth: '560px', marginBottom: '28px', color: 'rgba(255,255,255,0.88)' }}>
            We don&apos;t chase awards. These came from customers voting, agencies vetting, and inspectors signing off.
          </p>
          <div className="hero-ctas">
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
            <h2 style={{ marginTop: '8px' }}>Eight Independent Recognitions</h2>
            <p style={{ color: 'var(--color-neutral-mid)', maxWidth: '560px', margin: '12px auto 0', fontSize: '1rem', lineHeight: 1.7 }}>
              Each recognition below is independently awarded — not purchased, not self-reported. Community votes, accreditation bodies, and ranking organizations.
            </p>
          </div>

          {/* Award grid — 4 columns on desktop */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '28px',
          }}>
            {AWARDS.map((award) => (
              <div key={award.title} style={{
                background: 'var(--color-surface)',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '28px 22px 26px',
                boxShadow: '0 4px 18px rgba(13, 31, 60, 0.08), 0 1px 4px rgba(13, 31, 60, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}>
                {/* Real badge image */}
                <div style={{ width: '140px', height: '160px', marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={award.img}
                    alt={award.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Sub label */}
                <div style={{
                  fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--color-accent)', marginBottom: '6px',
                }}>
                  {award.sub}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1rem', fontWeight: 800,
                  color: 'var(--color-primary)', marginBottom: '10px',
                  lineHeight: 1.25,
                }}>
                  {award.title}
                </h3>

                {/* Body */}
                <p style={{
                  color: 'var(--color-neutral-mid)',
                  lineHeight: 1.65, fontSize: '0.87rem', margin: 0,
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
      <SiteFooter />
    </main>
  );
}
