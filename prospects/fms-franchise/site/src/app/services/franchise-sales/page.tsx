import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Expert Franchise Sales Company in USA | FMS Franchise',
  description: "FMS's expert Franchise Sales Consultants will work with you on selling a dynamic & profitable franchise sales process to potential investors.",
};

const SALES_OPTIONS = [
  { num: '01', title: 'Supplement Your Existing Effort', desc: 'If you have an internal sales team but need structure, qualification discipline, or strategic oversight, we enhance your process without replacing your team.', tag: 'For Established Teams' },
  { num: '02', title: 'Build & Manage the Full Sales Engine', desc: "If you don't have a dedicated franchise sales system yet, we build and manage the full commercial machine — from positioning and lead handling to qualification and pipeline oversight.", tag: 'For New Franchisors' },
  { num: '03', title: 'Transitional Support', desc: 'For growing brands, we design and implement the system, then help leadership transition to internal management when ready. Control always remains with the franchisor.', tag: 'For Scaling Brands' },
];

const FAQ = [
  { q: 'Can franchise sales organizations guarantee results?', a: 'No reputable franchise sales organization guarantees results. Sustainable franchise growth depends on operational readiness, market conditions, buyer qualification, and brand positioning. Any firm promising guaranteed deals is prioritizing transactions over long-term franchise system health.' },
  { q: 'Are service franchises harder to sell?', a: 'Service franchises are not harder to sell, but they require stronger buyer screening. Because service models often depend on hands-on leadership and local execution, qualification discipline is critical to ensure long-term franchisee performance and system stability.' },
  { q: 'Is a transaction-driven model enough to scale responsibly?', a: 'No. Without structured qualification, operational alignment, and strategic growth planning, rapid expansion can create franchisee failures and long-term brand instability.' },
  { q: 'When should I outsource franchise sales?', a: 'Many growing franchisors outsource franchise sales to gain structure, expertise, and pipeline discipline before transitioning to internal management once the system is mature.' },
  { q: 'What makes FMS different from other franchise sales organizations?', a: 'FMS builds structured franchise sales services around long-term system health. Instead of focusing on volume, we prioritize buyer fit, qualification discipline, and strategic growth alignment to protect brand integrity and franchisee performance.' },
];

export default function FranchiseSalesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/services">Services</a><span>›</span>
            <span>Franchise Sales</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Service</span>
          <h1>Franchise Sales</h1>
          <p>Strategic franchise sales built for long-term system health — not just deal volume. We help brands grow intentionally, attract qualified buyers, and protect what made the business successful.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" className="btn btn-gold" rel="noopener noreferrer">Schedule a Sales Consultation</Link>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline-white">Check Your Readiness</Link>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">The Reality</span>
              <h2>Poor Franchise Sales Are Often Worse Than Slow Growth</h2>
              <div className="divider divider-left" />
              <p style={{ marginTop: '1.25rem', color: '#4a5568', lineHeight: 1.8 }}>If you are here, chances are at least one of these things is happening:</p>
              <ul style={{ color: '#4a5568', lineHeight: 1.9, paddingLeft: '1.25rem', margin: '0.75rem 0 1rem' }}>
                <li>You have leads coming in but struggle to convert the right ones.</li>
                <li>You&apos;ve closed deals and are now dealing with underperforming franchisees.</li>
                <li>You&apos;re realizing selling franchises is far more complex than expected.</li>
              </ul>
              <p style={{ color: '#1a3d20', lineHeight: 1.8, fontWeight: 600 }}>A bad franchisee can damage brand reputation, drain resources, and create long-term operational issues that take years to correct.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3cb85e', marginBottom: '1.5rem' }}>Effective Franchise Sales Connect Three Things</div>
              {[{ icon: '🎯', item: 'A clearly defined franchise offering' }, { icon: '🔍', item: 'A thorough qualification process' }, { icon: '📈', item: 'A long-term growth strategy supporting both parties' }].map((row, i) => (
                <div key={row.item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.8rem 0', borderBottom: i < 2 ? '1px solid #f0f0f0' : 'none' }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{row.icon}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1a1a1a', lineHeight: 1.5 }}>{row.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-light" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow eyebrow-light">Warning</span>
            <h2 style={{ color: '#fff' }}>What Most Organizations Get Wrong</h2>
            <div className="divider divider-gold" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: 'rgba(229,62,62,0.1)', border: '1.5px solid rgba(229,62,62,0.3)', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fc8181', marginBottom: '1.25rem' }}>❌ Volume-Driven FSOs</div>
              {['Prioritize deal flow over buyer quality', 'Use generic scripts across brands', 'Focus on closing instead of qualification', 'Exit once the agreement is signed'].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', padding: '0.6rem 0', borderBottom: '1px solid rgba(229,62,62,0.15)', color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>
                  <span style={{ color: '#fc8181', flexShrink: 0 }}>✗</span>{item}
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(74,124,89,0.15)', border: '1.5px solid rgba(74,124,89,0.4)', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#68d391', marginBottom: '1.25rem' }}>✅ The FMS Approach</div>
              {['Buyer quality over deal speed', 'Custom strategy per brand and market', 'Qualification-first at every step', 'Long-term partnership through system growth'].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', padding: '0.6rem 0', borderBottom: '1px solid rgba(74,124,89,0.15)', color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>
                  <span style={{ color: '#68d391', flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Flexible Engagement</span>
            <h2>Three Ways FMS Supports Your Franchise Sales</h2>
            <div className="divider" />
            <p>The right model depends on where your brand is today. Our services are flexible, scalable, and aligned with your stage of growth.</p>
          </div>
          <div className="grid-3" style={{ gap: '2rem', marginTop: '3rem' }}>
            {SALES_OPTIONS.map((opt) => (
              <div key={opt.num} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #1a3d20, #3cb85e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 900, color: '#fff' }}>{opt.num}</div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#3cb85e', background: '#e8f5ed', padding: '0.3rem 0.7rem', borderRadius: '20px' }}>{opt.tag}</span>
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{opt.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7, flexGrow: 1 }}>{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently Asked Questions About Franchise Sales</h2>
            <div className="divider" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem' }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{ background: '#f8f8f6', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#1a3d20', marginBottom: '0.75rem' }}>{item.q}</h3>
                <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Build Sales the Right Way</span>
          <h2 style={{ color: '#fff', margin: '0.75rem 0 1rem' }}>Sales Should Support Your Vision, Not Pressure It</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>When done correctly, franchise sales create momentum, stability, and opportunity. We&apos;re here to help you build it right.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" className="btn btn-gold btn-lg">Schedule a Sales Consultation</Link>
            <Link href="/services" className="btn btn-outline-white btn-lg">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
