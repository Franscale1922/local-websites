import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FMS Digital Portfolio | Franchise Website & Marketing Work',
  description: 'Browse the FMS Digital portfolio of franchise website design, branding, digital marketing, and lead generation work across 900+ franchise brands.',
};

const PORTFOLIO_ITEMS = [
  { brand: 'The Scoop N\' Scootery', category: 'Website + Lead Gen', url: 'https://thescoopnscooteryfranchising.com/', industry: 'Food & Beverage', desc: 'Full franchise recruitment site with lead capture, brand storytelling, and territory map integration.', icon: '🍦' },
  { brand: 'Kids Empire', category: 'Franchise Site + SEO', url: '#', industry: 'Children\'s Entertainment', desc: 'National franchise recruitment website with location finder, investment info, and integrated lead forms.', icon: '🎠' },
  { brand: 'Poke Burri', category: 'Brand + Digital Ads', url: '#', industry: 'Food & Beverage', desc: 'Complete digital brand identity and paid advertising system for franchise recruitment.', icon: '🐟' },
  { brand: 'Sacred Leaf CBD', category: 'SEO + Content', url: '#', industry: 'Health & Wellness', desc: 'Category authority content strategy and organic search traffic growth driving qualified franchise buyer leads.', icon: '🌿' },
  { brand: 'Bloomin\' Blinds', category: 'Website + Local SEO', url: '#', industry: 'Home Services', desc: 'Franchise recruitment site plus franchisee location site templates with local SEO optimization.', icon: '🪟' },
  { brand: 'Foxtail Coffee', category: 'Brand + Video', url: '#', industry: 'Food & Beverage', desc: 'Brand awareness campaign, franchise recruitment videos, and social media strategy for high-growth coffee concept.', icon: '☕' },
  { brand: 'Salty Dawg Pet Salon', category: 'Website + Social', url: '#', industry: 'Pet Services', desc: 'Franchise website design and social media management for national pet salon franchise expansion.', icon: '🐾' },
  { brand: 'Restoration 1', category: 'Lead Generation', url: '#', industry: 'Home Services', desc: 'Franchise lead generation system and digital advertising for national restoration franchise.', icon: '🏠' },
  { brand: 'Smash My Trash', category: 'Brand + Website', url: '#', industry: 'Waste Services', desc: 'Full brand identity and franchise recruitment website for innovative commercial waste reduction concept.', icon: '🗑️' },
  { brand: 'MF Gyros', category: 'Digital Marketing', url: '#', industry: 'Food & Beverage', desc: 'Local store marketing support, social media, and franchise recruitment digital strategy.', icon: '🥙' },
  { brand: 'Green Home Solutions', category: 'Website + SEO', url: '#', industry: 'Home Services', desc: 'Franchise recruitment site with local SEO templates for eco-friendly home services franchise network.', icon: '🌱' },
  { brand: 'Goshenite Energy', category: 'Brand + Lead Gen', url: '#', industry: 'Energy Services', desc: 'Brand identity refresh and digital lead generation system for energy franchise system.', icon: '⚡' },
];

const CATEGORIES = ['All Work', 'Website Design', 'Lead Generation', 'Brand Identity', 'SEO & Content', 'Social Media', 'Video Production'];

export default function FMSDigitalPortfolioPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 60%, #0d2b4e 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <a href="/our-clients" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Clients</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>FMS Digital Portfolio</span>
          </div>
          <span className="eyebrow" style={{ color: '#38bdf8' }}>FMS Digital</span>
          <h1 style={{ color: '#fff' }}>FMS Digital Portfolio</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '680px' }}>
            Browse our work across franchise website design, brand identity, lead generation, SEO, social media, and digital advertising. 900+ franchise brands served since 2009.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Digital Audit</a>
            <Link href="/fms-digital" className="btn btn-outline-white btn-lg">FMS Digital Overview</Link>
          </div>
        </div>
      </div>

      {/* Filter bar (display only) */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat, i) => (
              <span key={cat} style={{ padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600, background: i === 0 ? '#0d2b4e' : 'transparent', color: i === 0 ? '#fff' : '#718096', border: i === 0 ? 'none' : '1.5px solid #e2e8f0', cursor: 'pointer' }}>{cat}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem' }}>
            {PORTFOLIO_ITEMS.map(item => (
              <div key={item.brand} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                {/* Mock preview */}
                <div style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a3055)', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>FMS Digital Work</div>
                  </div>
                  <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '999px', padding: '0.2rem 0.6rem', color: '#38bdf8' }}>{item.category}</span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{item.brand}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.15rem' }}>{item.industry}</div>
                  </div>
                  <p style={{ fontSize: '0.83rem', color: '#718096', lineHeight: 1.65 }}>{item.desc}</p>
                  <div style={{ marginTop: 'auto' }}>
                    {item.url !== '#' ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d2b4e', textDecoration: 'none' }}>View Live Site →</a>
                    ) : (
                      <span style={{ fontSize: '0.8rem', color: '#c0c0c0' }}>Case study available on request</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Add Your Brand to Our Portfolio</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            FMS Digital delivers franchise websites, brand identity, and lead generation systems that get results. Let's build something for your brand.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Audit</a>
            <Link href="/fms-digital" className="btn btn-outline-white btn-lg">Explore FMS Digital</Link>
          </div>
        </div>
      </section>
    </>
  );
}
