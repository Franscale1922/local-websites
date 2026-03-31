import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Website Design That Converts Leads | FMS Digital',
  description: 'Franchise website design built to generate leads, integrate CRM systems, and support scalable growth. Conversion-focused websites for multi-location franchise brands.',
};

const FEATURES = [
  { icon: '🎯', title: 'Conversion-First Architecture', desc: 'Every page, headline, and CTA is engineered to move a franchise prospect from curiosity to qualified inquiry — not just look good.' },
  { icon: '📱', title: 'Mobile-First Responsive Design', desc: 'Fully responsive across all devices. Over 60% of franchise research happens on mobile — your site needs to perform there first.' },
  { icon: '🔗', title: 'CRM Integration', desc: 'Seamless integration with HubSpot, Salesforce, FranConnect, and other CRM systems — capturing leads directly into your existing pipeline.' },
  { icon: '⚡', title: 'Speed Optimized', desc: 'Lightning-fast load times because every second of delay costs you leads. Core Web Vitals optimized for both UX and SEO performance.' },
  { icon: '🔍', title: 'SEO-Ready Architecture', desc: 'Built with franchise SEO best practices baked in: proper schema markup, franchise page structure, local SEO optimization, and site hierarchy.' },
  { icon: '📊', title: 'Analytics & Tracking', desc: 'Google Analytics 4, Meta Pixel, LinkedIn Insight Tag, and conversion tracking configured from day one — so you know exactly where leads come from.' },
];

const SITE_TYPES = [
  {
    type: 'Franchise Recruitment Site',
    desc: 'Dedicated franchise.yourbrand.com sites built to attract and convert franchise buyers.',
    bullets: ['Franchise opportunity overview', 'Investment & territory info', 'Franchisee success stories', 'Inquiry & application forms', 'FDD request integration'],
    color: '#1a3d5c',
  },
  {
    type: 'Corporate Brand Site',
    desc: 'Full consumer-facing websites with a franchise portal section — one site, two audiences.',
    bullets: ['Consumer-facing homepage', 'Franchise discovery section', 'Location finder', 'Franchisee tools portal', 'News & media room'],
    color: '#0d2b4e',
  },
  {
    type: 'Franchisee Location Sites',
    desc: 'Template-based local sites deployed across your entire network — consistent brand, local SEO.',
    bullets: ['On-brand templates', 'Local SEO optimization', 'Easy franchisee management', 'Service & location pages', 'Review integration'],
    color: '#1a3d4a',
  },
];

export default function WebsiteDesignPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 60%, #0d2b4e 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <a href="/fms-digital" style={{ color: 'rgba(255,255,255,0.6)' }}>FMS Digital</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Website Design</span>
          </div>
          <span className="eyebrow" style={{ color: '#38bdf8' }}>FMS Digital Services</span>
          <h1 style={{ color: '#fff' }}>Franchise Website Design That Converts Leads</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '680px' }}>
            Franchise website design built to generate leads, integrate CRM systems, and support scalable growth. Conversion-focused websites designed specifically for multi-location franchise brands — not generic business templates.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Web Consultation</a>
            <Link href="/our-clients/fmsdigital-portfolio" className="btn btn-outline-white btn-lg">View Portfolio</Link>
          </div>
        </div>
      </div>

      {/* Site types */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Website Types</span>
            <h2>Sites We Build for Franchise Brands</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {SITE_TYPES.map(st => (
              <div key={st.type} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div style={{ background: st.color, padding: '1.5rem 1.75rem' }}>
                  <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>{st.type}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.6 }}>{st.desc}</p>
                </div>
                <div style={{ padding: '1.5rem 1.75rem' }}>
                  {st.bullets.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.45rem 0', borderBottom: '1px solid #f0f0f0', fontSize: '0.875rem', color: '#4a5568' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', flexShrink: 0 }} />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Built Different</span>
            <h2>What Every FMS Website Includes</h2>
            <div className="divider" />
            <p>Every FMS website is built by a team with deep franchising domain expertise — not handed to a generic web agency that has never built a franchise lead generation system.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Your Website Should Be Your Best Salesperson</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            If your website isn't generating qualified franchise leads every week, it's working against your growth plan. Let's fix that.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Website Audit</a>
            <Link href="/our-clients/fmsdigital-portfolio" className="btn btn-outline-white btn-lg">View Our Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
