import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Digital Success Stories | FMS Digital',
  description: 'Explore real franchise success stories and case studies showcasing proven marketing strategies, brand partnerships, and measurable growth results for franchisors.',
};

const STORIES = [
  {
    brand: 'The Scoop N\' Scootery',
    industry: 'Food & Beverage',
    location: 'Charlotte, NC',
    result: 'Local ice cream concept to national franchise with a complete digital ecosystem',
    services: ['Full website build', 'Lead generation system', 'National digital ad strategy', 'Franchise recruitment site'],
    url: 'https://thescoopnscooteryfranchising.com/',
    icon: '🍦',
  },
  {
    brand: 'Kids Empire',
    industry: 'Children\'s Entertainment',
    location: 'Multi-state',
    result: 'Built a national franchise recruitment presence driving consistent qualified leads',
    services: ['Franchise website', 'SEO strategy', 'Lead gen campaigns', 'Content marketing'],
    url: '#',
    icon: '🎠',
  },
  {
    brand: 'Poke Burri',
    industry: 'Food & Beverage',
    location: 'Southeast US',
    result: 'Digital marketing growth from regional concept to expanding franchise brand',
    services: ['Brand positioning', 'Digital advertising', 'Social media management', 'CRM setup'],
    url: '#',
    icon: '🐟',
  },
  {
    brand: 'Sacred Leaf CBD',
    industry: 'Health & Wellness',
    location: 'National',
    result: 'Built category authority through content and drove franchise buyer traffic',
    services: ['SEO & content', 'Paid media', 'Website redesign', 'Email automation'],
    url: '#',
    icon: '🌿',
  },
  {
    brand: 'Bloomin\' Blinds',
    industry: 'Home Services',
    location: 'National',
    result: 'Full digital presence for home-based franchise recruitment and local franchisee marketing',
    services: ['Franchise site', 'Lead generation', 'Local SEO templates', 'Social toolkits'],
    url: '#',
    icon: '🪟',
  },
  {
    brand: 'Foxtail Coffee',
    industry: 'Food & Beverage',
    location: 'Florida',
    result: 'Brand awareness campaigns and franchise recruitment system for high-growth coffee concept',
    services: ['Brand campaigns', 'Video production', 'Social strategy', 'Franchise ads'],
    url: '#',
    icon: '☕',
  },
];

const RESULTS = [
  { stat: '300%', label: 'Average lead volume increase', sub: 'in first 6 months' },
  { stat: '67%', label: 'Cost-per-lead reduction', sub: 'through optimization' },
  { stat: '900+', label: 'Franchise brands', sub: 'FMS has worked with' },
  { stat: '20+', label: 'Digital experts', sub: 'working on your account' },
];

export default function FranchiseSuccessStoriesPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 60%, #0d2b4e 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <a href="/fms-digital" style={{ color: 'rgba(255,255,255,0.6)' }}>FMS Digital</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Success Stories</span>
          </div>
          <span className="eyebrow" style={{ color: '#38bdf8' }}>FMS Digital Results</span>
          <h1 style={{ color: '#fff' }}>Franchise Digital Marketing Success Stories</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '680px' }}>
            Real franchise brands. Real growth results. Explore how FMS Digital has helped franchise systems generate leads, sell franchises, and build national brand recognition through proven digital marketing strategies.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get a Free Digital Audit</a>
            <Link href="/case-studies" className="btn btn-outline-white btn-lg">All Case Studies</Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <section style={{ background: '#0d1b2a', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {RESULTS.map(r => (
              <div key={r.stat}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', fontWeight: 900, color: '#38bdf8', lineHeight: 1 }}>{r.stat}</div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem', marginTop: '0.4rem' }}>{r.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Case Studies</span>
            <h2>Digital Marketing Results Across Industries</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {STORIES.map(story => (
              <div key={story.brand} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a3055)', padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ fontSize: '2rem', width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{story.icon}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem' }}>{story.brand}</div>
                    <div style={{ fontSize: '0.78rem', color: '#38bdf8', marginTop: '0.15rem' }}>{story.industry} · {story.location}</div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.7 }}>{story.result}</p>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '0.5rem' }}>Services Delivered</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {story.services.map(s => (
                        <span key={s} style={{ fontSize: '0.72rem', background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '999px', padding: '0.2rem 0.6rem', color: '#0d2b4e', fontWeight: 500 }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  {story.url !== '#' && (
                    <a href={story.url} target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto', fontSize: '0.82rem', fontWeight: 700, color: '#0d2b4e', textDecoration: 'none' }}>View Live Site →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Add Your Brand to the List</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            FMS Digital has helped 900+ brands generate leads, sell franchises, and grow national brand recognition. Let's write your success story next.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Digital Audit</a>
            <Link href="/fms-digital" className="btn btn-outline-white btn-lg">Explore FMS Digital</Link>
          </div>
        </div>
      </section>
    </>
  );
}
