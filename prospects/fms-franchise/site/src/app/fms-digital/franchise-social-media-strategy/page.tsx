import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Social Media Strategy for Growth & Leads | FMS Digital',
  description: 'Franchise social media strategy that drives organic growth, brand consistency, and lead generation across multi-location franchise systems.',
};

const PLATFORMS = [
  { platform: 'Facebook & Meta', icon: '📘', use: 'Primary franchise recruitment advertising, local community building, franchisee recruitment retargeting.' },
  { platform: 'Instagram', icon: '📸', use: 'Visual brand storytelling, lifestyle content, franchisee spotlights, and user-generated content aggregation.' },
  { platform: 'LinkedIn', icon: '💼', use: 'B2B franchise lead generation, executive brand building, and corporate franchise buyer targeting.' },
  { platform: 'YouTube', icon: '▶️', use: 'Franchisee testimonials, brand culture videos, and \"day in the life\" franchise recruitment content.' },
  { platform: 'TikTok', icon: '🎵', use: 'Brand awareness, younger franchise buyer outreach, and viral product/service content.' },
  { platform: 'Google Business', icon: '🗺️', use: 'Local SEO for franchisee locations, review management, and local search visibility optimization.' },
];

const WHAT_WE_DO = [
  { title: 'Corporate Social Strategy', desc: 'Brand-level social media content calendar, voice guidelines, and posting strategy — driving franchise recruitment awareness and brand trust.' },
  { title: 'Franchisee Social Toolkits', desc: 'Ready-to-use content templates and brand-approved assets franchisees can publish locally without creating brand drift.' },
  { title: 'Paid Social Advertising', desc: 'Meta Ads, LinkedIn Ads, and TikTok campaigns targeted at franchise buyer demographics — with A/B testing and ongoing optimization.' },
  { title: 'Community Management', desc: 'Engagement monitoring, comment management, and brand reputation protection across all active social channels.' },
  { title: 'Performance Reporting', desc: 'Monthly reporting on reach, engagement, lead yield, and cost-per-lead from social channels — tied directly to franchise development goals.' },
  { title: 'Social Listening', desc: 'Monitoring brand mentions, competitor activity, and industry conversations to identify opportunities and protect brand reputation.' },
];

export default function SocialMediaPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 60%, #0d2b4e 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <a href="/fms-digital" style={{ color: 'rgba(255,255,255,0.6)' }}>FMS Digital</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Social Media Strategy</span>
          </div>
          <span className="eyebrow" style={{ color: '#38bdf8' }}>FMS Digital Services</span>
          <h1 style={{ color: '#fff' }}>Franchise Social Media Strategy for Growth & Leads</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '680px' }}>
            Social media isn't just brand awareness — for franchises, it's a lead generation engine, a franchisee recruitment tool, and a brand consistency system. FMS builds social strategies that drive organic growth, brand consistency, and qualified leads across multi-location franchise systems.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Social Audit</a>
            <Link href="/fms-digital" className="btn btn-outline-white btn-lg">FMS Digital Overview</Link>
          </div>
        </div>
      </div>

      {/* What we do */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Social Media Services</span>
            <h2>What FMS Digital Does for Your Social Presence</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {WHAT_WE_DO.map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#38bdf8', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Platforms We Manage</span>
            <h2>The Right Channel for Every Franchise Audience</h2>
            <div className="divider" />
            <p>Different franchise audiences live on different platforms. FMS maps your franchise recruitment and brand awareness strategy to the channels where your buyers actually are.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.25rem', marginTop: '3rem' }}>
            {PLATFORMS.map(p => (
              <div key={p.platform} style={{ display: 'flex', gap: '1.25rem', background: '#fff', borderRadius: '14px', padding: '1.5rem 1.75rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', flexShrink: 0, lineHeight: 1 }}>{p.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>{p.platform}</div>
                  <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.65 }}>{p.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consistency callout */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-light">The Multi-Location Challenge</span>
            <h2 style={{ color: '#fff', marginBottom: '1.25rem' }}>Keeping 30 Franchisees on Brand Across 30 Social Feeds</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              When every franchisee is creating their own content, posting their own photos, and writing their own captions — your brand becomes 30 different things to 30 different markets. That's not good for brand equity, and it's not good for system-wide growth.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              FMS builds branded social toolkits that give franchisees what they need to post locally — without going off-brand. On-brand templates, pre-approved copy, content libraries, and posting guidelines that keep every location unified while allowing local personalization.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book a Social Strategy Call</a>
              <Link href="/our-clients" className="btn btn-outline-white btn-lg">See Our Clients</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Turn Social Media Into a Lead Machine</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Get a free social media audit for your franchise brand and find out exactly what's working, what isn't, and where the opportunity is.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Audit</a>
            <Link href="/about-us/contact" className="btn btn-outline-white btn-lg">Contact FMS Digital</Link>
          </div>
        </div>
      </section>
    </>
  );
}
