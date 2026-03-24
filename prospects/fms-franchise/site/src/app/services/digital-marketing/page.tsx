import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing for Franchises — Franchise Marketing Solutions',
  description: 'FMS provides franchise-specific digital marketing: lead generation, branding, website design, and co-op marketing programs for franchisors and franchisees.',
};

const SUB_SERVICES = [
  {
    title: 'Lead Generation',
    href: '/services/digital-marketing/lead-generation',
    desc: 'Paid search, SEO, portal advertising, and inbound marketing programs specifically designed to drive qualified franchise inquiry leads into your pipeline.',
    bullets: ['Franchise Portal Advertising', 'Google / Meta Paid Campaigns', 'SEO for Franchise Terms', 'Lead Scoring & Routing', 'CRM Integration'],
  },
  {
    title: 'Branding & Marketing',
    href: '/services/digital-marketing/branding-marketing',
    desc: 'Brand identity systems, franchise marketing collateral, and co-op marketing programs that let your franchisees market locally while protecting your brand nationally.',
    bullets: ['Brand Identity & Style Guide', 'Franchisee Marketing Kits', 'Co-Op Marketing Programs', 'Social Media Strategy', 'Franchise Sales Presentations'],
  },
  {
    title: 'Website Design',
    href: '/services/digital-marketing',
    desc: 'Franchise-ready website design — corporate franchisor sites optimized for franchise sales leads, plus local franchisee site templates that maintain brand consistency.',
    bullets: ['Corporate Franchisor Website', 'Franchisee Location Sites', 'Franchise Sales Landing Pages', 'SEO-Optimized Architecture', 'Performance Optimization'],
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/services">Services</a><span>›</span>
            <span>Digital Marketing</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Service</span>
          <h1>Franchise Digital Marketing</h1>
          <p>Franchise marketing is not regular marketing. Lead generation for franchise sales, co-op programs for 50+ franchisees, and brand protection at scale — FMS handles it all.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Free Consultation</Link>
            <Link href="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Sub-services */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Marketing Services</span>
            <h2>Three Areas of Franchise Marketing</h2>
            <div className="divider" />
            <p>FMS handles franchise marketing from two distinct angles: marketing to attract new franchisees (B2B) and marketing to attract new customers for existing franchisees (B2C co-op).</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {SUB_SERVICES.map(svc => (
              <div key={svc.title} style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', padding: '1.75rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💻</div>
                  <h3 style={{ color: '#fff', fontSize: '1.15rem' }}>{svc.title}</h3>
                </div>
                <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.75, marginBottom: '1.25rem' }}>{svc.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
                    {svc.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: '#4a5568' }}>
                        <span style={{ color: '#3cb85e', fontWeight: 900, flexShrink: 0 }}>✓</span>{b}
                      </li>
                    ))}
                  </ul>
                  <Link href={svc.href} className="btn btn-green" style={{ marginTop: '1.5rem', justifyContent: 'center' }}>Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why franchise-specific */}
      <section className="section section-dark">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-light">The FMS Difference</span>
              <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>Why Franchise Marketing Is Different</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                A general digital marketing agency will run your Google Ads and call it franchise marketing. It's not. Franchise marketing has two audiences (prospects AND existing franchisees), two different goals (signing & supporting), and one brand to protect across all of them simultaneously.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Two-Audience Expertise', desc: 'We run campaigns targeting franchise buyers (B2B) and franchisee customer campaigns (B2C) with different messaging, channels, and KPIs.' },
                  { label: 'Brand Protection at Scale', desc: 'As your franchisee count grows, brand consistency becomes impossible without a system. FMS builds the system.' },
                  { label: 'Co-Op Marketing Programs', desc: 'We design and manage co-op marketing programs that give franchisees local marketing support while keeping national brand integrity.' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#3cb85e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 900, color: '#fff', flexShrink: 0, marginTop: '2px' }}>✓</div>
                    <div>
                      <div style={{ color: '#e8b736', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.2rem' }}>{item.label}</div>
                      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.65 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                { num: '900+', label: 'Brands Marketed' },
                { num: '67', label: 'Marketing Experts' },
                { num: '15+', label: 'Years in Franchise Marketing' },
                { num: '7', label: 'Global Markets' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.75rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', fontWeight: 900, color: '#e8b736', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.4rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready for Franchise-Specific Marketing?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Book a free consultation and get a marketing assessment specific to your franchise development stage.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
