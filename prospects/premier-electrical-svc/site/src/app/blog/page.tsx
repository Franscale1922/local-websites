import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrical Tips & Guides | Premier Electrical Services — Skagit & Whatcom County, WA',
  description: 'Practical guides on panel upgrades, EV chargers, generators, and home electrical safety from Premier Electrical Services. Licensed electricians based in Mount Vernon, WA.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const POSTS = [
  {
    slug: 'panel-upgrade-signs',
    eyebrow: 'Electrical Panels',
    title: 'How to Know if Your Electrical Panel Needs Upgrading',
    summary: 'Seven clear signs your panel is running out of capacity — and when it becomes a safety issue, not just an inconvenience.',
    date: 'March 2025',
    readTime: '6 min read',
  },
  {
    slug: 'ev-charger-cost-guide',
    eyebrow: 'EV Charging',
    title: 'EV Charger Installation Cost Guide for Washington Homeowners',
    summary: 'What drives the price of a Level 2 EV charger install — panel capacity, run distance, permits, and what rebates you can claim in Washington State.',
    date: 'March 2025',
    readTime: '7 min read',
  },
  {
    slug: 'knob-and-tube-wiring',
    eyebrow: 'Older Homes',
    title: 'Knob-and-Tube Wiring: What Skagit County Homeowners Need to Know',
    summary: 'The facts about knob-and-tube — what is actually dangerous, what insurers care about, and what you can do about it without replacing everything.',
    date: 'March 2025',
    readTime: '8 min read',
  },
  {
    slug: 'generator-sizing-guide',
    eyebrow: 'Backup Power',
    title: 'Generator Sizing Guide for the Pacific Northwest',
    summary: 'How to figure out what size generator you actually need — essential circuits vs. whole-home coverage — and the right way to connect it safely.',
    date: 'March 2025',
    readTime: '7 min read',
  },
];

export default function BlogIndexPage() {
  return (
    <main>
      <style>{`
        .blog-card { transition: box-shadow 0.2s, transform 0.2s; }
        .blog-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.10); transform: translateY(-2px); }
      `}</style>
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/recognition">Recognition</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/blog" className="nav-link--active">Blog</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="services-page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-about.jpg" alt="Electrician working on a residential panel in Skagit County" className="services-page-hero-bg" />
        <div className="services-page-hero-overlay" />
        <div className="services-page-hero-content">
          <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Guides & Resources</span>
          <h1>Straight Talk About Your Home Electrical.</h1>
          <p style={{ maxWidth: '560px', marginBottom: '28px', color: 'rgba(255,255,255,0.88)' }}>
            Practical information from licensed electricians — what things actually cost, when it's a real problem, and how to make smart decisions before you pick up the phone.
          </p>
          <div className="hero-ctas">
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Get a Free Estimate</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px', marginTop: '48px' }}>
            {POSTS.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article className="blog-card" style={{
                  border: '1px solid rgba(0,0,0,0.09)',
                  borderRadius: '12px',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  background: '#fff',
                }}>
                  <span className="eyebrow" style={{ color: 'var(--color-accent)', fontSize: '0.72rem' }}>{post.eyebrow}</span>
                  <h2 style={{ fontSize: '1.2rem', lineHeight: '1.35', margin: '0' }}>{post.title}</h2>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', flex: 1 }}>{post.summary}</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem', color: '#999', marginTop: '8px' }}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', marginTop: '4px' }}>
                    Read the guide →
                  </span>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ background: 'var(--color-primary)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '4px' }}>3x Best of the Best</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.72)' }}>Skagit Valley — 2023 · 2024 · 2025</div>
            </div>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '4px' }}>A+ BBB Rating</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.72)' }}>Licensed, Bonded &amp; Insured</div>
            </div>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '4px' }}>Based in Mount Vernon</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.72)' }}>Lic. PREMIES821LL</div>
            </div>
          </div>
        </div>
      </section>

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
            <li><a href="/services/residential-wiring">Residential Wiring</a></li>
            <li><a href="/services/commercial-wiring">Commercial Wiring</a></li>
          </ul></div>
          <div className="footer-col"><h4>Resources</h4><ul>
            <li><a href="/blog">Electrical Guides</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/service-area">Service Area</a></li>
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
