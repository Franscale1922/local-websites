import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Outsourced Franchise Support Services for Growth | FMS Franchise',
  description: 'Enhance your franchise with outsourced franchise support services. FMS provides essential training, management systems, and ongoing support to help your franchise network thrive.',
};

const SERVICES = [
  {
    icon: '📋',
    title: 'Franchise Operations Manual Development',
    desc: 'Comprehensive operations manual writing and design — the foundational document that standardizes every process, system, and expectation across your entire franchise network.',
  },
  {
    icon: '🎓',
    title: 'Franchisee Training Program Development',
    desc: 'Complete initial training programs covering operations, marketing, customer service, hiring, and the brand standards your franchisees need to open and run successfully.',
  },
  {
    icon: '🤝',
    title: 'Ongoing Franchisee Support Systems',
    desc: 'Field support visits, franchisee performance reviews, compliance auditing, and relationship management — keeping your network healthy, happy, and growing.',
  },
  {
    icon: '📊',
    title: 'Performance Benchmarking & Reporting',
    desc: 'System-wide performance benchmarking, franchisee KPI reporting, and data-driven analysis to identify which units need support and which are ready to expand.',
  },
  {
    icon: '📱',
    title: 'Technology & CRM Systems',
    desc: 'Franchise management software selection, CRM setup, training portals, and technology infrastructure to support a growing multi-unit franchise network.',
  },
  {
    icon: '📣',
    title: 'Franchisee Marketing Support',
    desc: 'Local marketing toolkits, co-op advertising systems, national marketing fund management, and brand compliance monitoring across the network.',
  },
  {
    icon: '⚖️',
    title: 'Franchise Compliance Management',
    desc: 'FDD renewal support, state registration management, franchise agreement compliance, and royalty reporting frameworks that protect your system legally.',
  },
  {
    icon: '🏆',
    title: 'Franchisee Recognition & Culture',
    desc: 'Franchisee conventions, annual conferences, recognition programs, and culture-building initiatives that drive network cohesion, retention, and referrals.',
  },
];

const WHO_WE_SERVE = [
  { stage: 'Emerging Franchisors (1–15 units)', desc: 'Building the foundational support infrastructure — manuals, training, technology, and compliance — while you\'re still small enough to get it right.' },
  { stage: 'Growing Systems (15–75 units)', desc: 'Scaling your support staff, standardizing performance monitoring, and building the systems that prevent cracks as your network expands.' },
  { stage: 'Established Brands (75+ units)', desc: 'Optimizing performance, managing compliance complexity, supporting international expansion, and continually improving your support infrastructure.' },
];

export default function OutsourcedFranchiseSupportPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/services">Services</Link>
            <span>›</span>
            <span>Outsourced Franchise Support</span>
          </div>
          <span className="eyebrow">FMS Services</span>
          <h1>Outsourced Franchise Support Services for Growth</h1>
          <p style={{ maxWidth: '680px' }}>
            Most new franchisors lack the internal team to support a growing franchise network. FMS provides the complete franchise support infrastructure — operations, training, compliance, performance management, and franchisee relations — so you can grow without building a large corporate overhead.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Consultation</a>
            <Link href="/services/management-support" className="btn btn-outline btn-lg">Management & Support</Link>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What We Provide</span>
            <h2>Outsourced Franchise Support Services</h2>
            <div className="divider" />
            <p>Think of FMS as your outsourced franchise support department — covering every function a growing franchisor needs without the cost of building it internally.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Who We Serve</span>
            <h2>Franchise Support for Every Stage of Growth</h2>
            <div className="divider" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
            {WHO_WE_SERVE.map((w, i) => (
              <div key={w.stage} style={{ display: 'flex', gap: '1.5rem', background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ flexShrink: 0, width: '52px', height: '52px', borderRadius: '12px', background: '#2d4135', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 900, color: '#c8a84b' }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{w.stage}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why outsource */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '960px', margin: '0 auto' }}>
            <div>
              <span className="eyebrow eyebrow-light">Why Outsource?</span>
              <h2 style={{ color: '#fff', marginBottom: '1.25rem' }}>The Right Move for Growing Franchisors</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Building an internal franchise support team is expensive. A franchise operations director alone costs $90,000–$150,000+ per year before benefits and overhead. By the time you've staffed compliance, training, marketing support, and technology — you're well over $500K annually in overhead costs.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                FMS provides the entire infrastructure at a fraction of that cost — and because our team has active experience across hundreds of franchise systems, your brand benefits from best practices most emerging franchisors never gain.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { stat: '5x', label: 'Lower than building internally' },
                { stat: '900+', label: 'Systems of experience behind every decision' },
                { stat: 'Zero', label: 'HR overhead for your support team' },
                { stat: '67', label: 'Specialists available to your brand' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 900, color: '#c8a84b', flexShrink: 0, minWidth: '60px' }}>{s.stat}</div>
                  <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Build Your Franchise Support System</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            FMS provides the complete franchise support infrastructure you need to grow — without building it from scratch internally.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Consultation</a>
            <Link href="/services/management-support" className="btn btn-outline-white btn-lg">Management & Support Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
