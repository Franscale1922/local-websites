/**
 * ABOUT PAGE
 * /about
 *
 * Full about page — team, story, awards, credentials, philosophy.
 * Replace all [PLACEHOLDERS] with real content.
 */

export const metadata = {
  title: 'About | [Business Name] — [City, State]',
  description: '[Business Name] — [One sentence about years, service, differentiator]. Licensed & insured. Serving [area] since [year].',
};

const PHONE = '(XXX) XXX-XXXX';
const PHONE_TEL = 'tel:+1XXXXXXXXXX';
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80';

const STATS = [
  { num: 'XX+', label: 'Years in Business' },
  { num: 'XXX+', label: 'Projects Completed' },
  { num: 'X.X', label: 'Google Rating' },
  { num: 'A+', label: 'BBB Rating' },
];

const CREDENTIALS = ['Licensed', 'Bonded', 'Insured', 'A+ BBB'];

const VALUES = [
  {
    icon: '✅',
    title: '[Core Value 1]',
    desc: '[One to two sentences about this value in practice, specific to how this business operates.]',
  },
  {
    icon: '🤝',
    title: '[Core Value 2]',
    desc: '[One to two sentences about this value.]',
  },
  {
    icon: '🛡️',
    title: '[Core Value 3]',
    desc: '[One to two sentences about this value.]',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Who We Are</span>
          <h1>[Punchy About Headline — e.g. "Built on Reputation. Backed by Experience."]</h1>
          <p className="page-hero-sub">[One or two sentences — founding story, mission, or key differentiator.]</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ABOUT_IMAGE} alt="[Business name] team at work" />
              <div className="award-badge">
                <div className="award-badge-year">[Award year(s)]</div>
                <div className="award-badge-title">[Award Name]</div>
                <div className="award-badge-sub">[Location / Org]</div>
              </div>
            </div>
            <div className="about-text">
              <span className="eyebrow">Our Story</span>
              <h2>[Story Headline — e.g. "Nearly Six Decades of Combined Experience."]</h2>
              <p>[Paragraph 1 — founding story, years in business, who started it and why.]</p>
              <p>[Paragraph 2 — what the team looks like today, what makes them different.]</p>
              <p>[Paragraph 3 — community ties, awards, reputation, customer interaction philosophy.]</p>
              <div className="about-stats">
                {STATS.map((s) => (
                  <div key={s.label} className="about-stat">
                    <div className="about-stat-num">{s.num}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="about-credentials">
                {CREDENTIALS.map((c) => (
                  <span key={c} className="credential-badge">{c}</span>
                ))}
              </div>
              <a href="/contact" className="btn btn-primary">Get a Free Estimate →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">How We Work</span>
          <h2>[Values Headline — e.g. "Three Things We Don&apos;t Compromise On."]</h2>
          <div className="why-grid" style={{ marginTop: '48px' }}>
            {VALUES.map((v) => (
              <div key={v.title} className="why-card">
                <div className="why-number">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Ready to work with us?</h2>
            <p>Free estimates. We pick up the phone. We show up when we say we will.</p>
          </div>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </div>
    </main>
  );
}
