import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Press & Media Coverage — FMS Franchise in the News | FMS Franchise',
  description: 'FMS Franchise Marketing Systems press coverage, expert commentary, and media mentions. Read how leading franchise publications and business media cover FMS and franchise industry trends.',
};

const PRESS_ITEMS = [
  {
    outlet: 'Entrepreneur Magazine',
    icon: '📰',
    year: '2024',
    headline: 'How to Know If Your Business Is Ready to Franchise',
    summary: 'FMS President Chris Conner shares the six criteria that determine whether a business concept is truly franchise-ready, including proven profitability, systemizable operations, and brand differentiation.',
    type: 'Expert Commentary',
  },
  {
    outlet: 'Franchise Times',
    icon: '🗞️',
    year: '2024',
    headline: 'FMS Franchise Hits 900+ Brand Milestone After 25 Years',
    summary: 'Franchise Times profiles FMS Franchise\'s growth trajectory, detailing how the firm built a 67-person team and guided over 900 businesses through the franchise development process.',
    type: 'Company Feature',
  },
  {
    outlet: 'Fox Business',
    icon: '📺',
    year: '2023',
    headline: 'Service Franchises Lead Growth for 4th Straight Year',
    summary: 'FMS franchise analysts provide context on the continued strength of the service franchise sector, explaining the economic and demographic drivers behind the category\'s outperformance.',
    type: 'Expert Commentary',
  },
  {
    outlet: 'Franchise Update Media',
    icon: '🏆',
    year: '2023',
    headline: 'FMS Digital Launches New Franchise SEO Practice',
    summary: 'Franchise Update Media covers FMS Digital\'s expansion into franchise-specialized SEO and GEO services, designed to help franchise brands capture both traditional search and AI-driven results.',
    type: 'Product Launch',
  },
  {
    outlet: 'Inc. Magazine',
    icon: '💼',
    year: '2023',
    headline: 'The Hidden Costs of Franchising Your Business',
    summary: 'Inc. Magazine interviews FMS for a reality-check piece on franchise development costs, featuring the firm\'s transparent breakdown of legal, marketing, and support infrastructure investment required.',
    type: 'Expert Commentary',
  },
  {
    outlet: 'IFA Annual Convention',
    icon: '🎪',
    year: '2024',
    headline: 'FMS Presents: Generative AI and the Future of Franchise Marketing',
    summary: 'FMS executives present at the International Franchise Association\'s annual convention on how generative AI is changing franchise lead generation, content strategy, and franchise sales.',
    type: 'Conference Presentation',
  },
];

const TYPE_COLORS: Record<string, string> = {
  'Expert Commentary': '#35a84a',
  'Company Feature': '#eebc4a',
  'Product Launch': '#38bdf8',
  'Conference Presentation': '#a78bfa',
};

export default function PressMediaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/about-us">About</a><span>›</span>
            <span>Press &amp; Media Coverage</span>
          </div>
          <span className="eyebrow" style={{ color: '#eebc4a' }}>In the News</span>
          <h1>FMS Franchise Press &amp; Media Coverage</h1>
          <p>FMS Franchise has been featured in leading business and franchise publications for 25+ years. Our consultants are available for expert commentary, interviews, and media requests on franchise industry topics.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <a href="mailto:info@fmsfranchise.com" className="btn btn-gold btn-lg">Media Inquiry</a>
            <Link href="/about-us/contact" className="btn btn-outline-white">Contact FMS</Link>
          </div>
        </div>
      </div>

      {/* ── Media Highlights ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Recent Coverage</span>
            <h2>FMS in the Media</h2>
            <p>From franchise trade publications to national business media, FMS franchise expertise is regularly featured across top outlets.</p>
          </div>
          <div className="grid-2" style={{ gap: '2rem' }}>
            {PRESS_ITEMS.map((item, i) => (
              <div key={i} className="card" style={{ padding: '2rem', borderTop: `4px solid ${TYPE_COLORS[item.type] || '#35a84a'}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 800, color: '#2d4135', fontSize: '0.95rem', fontFamily: 'Montserrat, sans-serif' }}>{item.outlet}</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.78rem' }}>{item.year}</div>
                    </div>
                  </div>
                  <span style={{ background: TYPE_COLORS[item.type] || '#35a84a', color: '#fff', fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.65rem', borderRadius: '999px', flexShrink: 0 }}>
                    {item.type}
                  </span>
                </div>
                <h3 style={{ fontSize: '1rem', color: '#2d4135', marginBottom: '0.65rem', lineHeight: 1.4 }}>&ldquo;{item.headline}&rdquo;</h3>
                <p style={{ color: '#4a5568', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expert Spokespeople ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Expert Voices</span>
            <h2>FMS Franchise Experts Available for Media</h2>
            <p>Our consultants provide authoritative commentary on franchise development, franchise marketing, franchise law, and industry trends.</p>
          </div>
          <div className="grid-3" style={{ gap: '2rem' }}>
            {[
              {
                name: 'Chris Conner',
                title: 'President, FMS Franchise',
                expertise: 'Franchise development strategy, FDD structure, multi-unit expansion, international franchising',
                avatar: 'CC',
              },
              {
                name: 'FMS Digital Team',
                title: 'FMS Digital Marketing Division',
                expertise: 'Franchise SEO, franchise lead generation, GEO for franchise brands, franchise website strategy',
                avatar: 'FD',
              },
              {
                name: 'FMS Consulting Team',
                title: '20+ Franchise Development Consultants',
                expertise: 'Industry-specific franchise development, franchisee selection, operations manual development, training systems',
                avatar: 'FC',
              },
            ].map((person) => (
              <div key={person.name} className="card" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #35a84a, #2d4135)', margin: '0 auto 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontWeight: 900, fontSize: '1.1rem', fontFamily: 'Montserrat, sans-serif' }}>{person.avatar}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>{person.name}</h3>
                <div style={{ color: '#35a84a', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.75rem' }}>{person.title}</div>
                <p style={{ color: '#4a5568', fontSize: '0.87rem', lineHeight: 1.7, margin: 0 }}>
                  <strong>Expert on:</strong> {person.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media Kit ── */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow-light">For Journalists</span>
          <h2 style={{ color: '#fff', marginTop: '0.75rem' }}>Media Resources</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '1rem auto 2rem' }}>
            Need company background, executive bios, brand assets, or statistics on the franchise industry? Contact our media team for quick turnaround on press requests.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:info@fmsfranchise.com" className="btn btn-gold btn-lg">Send Media Inquiry</a>
            <Link href="/about-us" className="btn btn-outline-white">About FMS</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow eyebrow-gold">Not a Journalist?</span>
          <h2>Interested in Franchising Your Business?</h2>
          <p>If you found us through the press and want to explore franchising your business, schedule a free consultation with our team. No sales pressure — just expert guidance.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">Get Free Consultation</Link>
            <a href="tel:8006100292" className="btn btn-outline-white">Call 800-610-0292</a>
          </div>
        </div>
      </section>
    </>
  );
}
