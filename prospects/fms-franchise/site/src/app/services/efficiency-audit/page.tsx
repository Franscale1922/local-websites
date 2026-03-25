import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Efficiency Audit — Operational Review for Franchisors',
  description: 'FMS conducts deep franchise efficiency audits to identify operational gaps, profitability issues, and replicability problems before they cost you franchisees.',
};

export default function EfficiencyAuditPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/services">Services</a><span>›</span>
            <span>Efficiency Audit</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Service</span>
          <h1>Franchise Efficiency Audit</h1>
          <p>Before you can teach someone else to run your business, it needs to be audit-proof. FMS conducts deep operational reviews that uncover the gaps that would cost you franchisees — and your reputation.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Free Consultation</Link>
            <Link href="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Problem */}
      <section className="section section-alt">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">The Problem</span>
              <h2>You Can't Franchise a Business That Can't Run Without You</h2>
              <div className="divider divider-left" />
              <p style={{ marginTop: '1.25rem', color: '#4a5568', lineHeight: 1.8 }}>
                The most common reason franchise systems fail isn't the concept — it's that the original business wasn't documented, systematized, or financially structured for replication. When a franchisee runs into a problem, they call you. And you can't answer 47 calls simultaneously.
              </p>
              <p style={{ marginTop: '1rem', color: '#4a5568', lineHeight: 1.8 }}>
                Our efficiency audit identifies every gap in your operations before it becomes a franchise liability. We look at your margins, your processes, your systems, and your replicability — and give you a roadmap for fixing what's broken before a franchisee discovers it the hard way.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { area: 'Operational Replicability', question: 'Can any reasonably trained person run your operation without you in the room?' },
                { area: 'Margin Structure', question: 'Are your unit economics strong enough to sustain a profitable franchisee after royalties?' },
                { area: 'Process Documentation', question: 'Are your core processes documented step-by-step, or trapped in your head?' },
                { area: 'Compliance Exposure', question: 'Are there regulatory, employment, or health/safety gaps that would expose a franchisee?' },
                { area: 'Brand Consistency', question: 'Could you identify a non-compliant location from customer feedback in 48 hours?' },
              ].map(item => (
                <div key={item.area} style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem 1.5rem', border: '1.5px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#3cb85e', marginBottom: '0.35rem' }}>{item.area}</div>
                  <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.6 }}>{item.question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Approach</span>
            <h2>A Structured 5-Area Audit Framework</h2>
            <div className="divider" />
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { step: '01', title: 'Operations Analysis', desc: 'We map every operational process — customer-facing and internal — and evaluate whether each one can be documented, taught, and executed consistently by a franchisee.' },
              { step: '02', title: 'Financial Structure Review', desc: 'We model your unit economics to verify that the business generates enough margin for profitable franchisee operation after royalties, local marketing, and overhead.' },
              { step: '03', title: 'Replicability Assessment', desc: 'We test whether the value proposition of your business is transferable — whether the customer experience, product quality, or service delivery can be replicated by someone who isn\'t you.' },
              { step: '04', title: 'Compliance Gap Review', desc: 'We identify federal, state, and local compliance requirements across employment, health, safety, and franchise law that your franchisees will need to navigate — and whether your current operations would pass scrutiny.' },
              { step: '05', title: 'Improvement Roadmap', desc: 'Not a report that identifies problems and stops — we deliver a prioritized improvement roadmap with specific, actionable fixes ordered by impact on franchisability.' },
            ].map(step => (
              <div key={step.step} style={{ display: 'flex', gap: '1.5rem', background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #1a3d20, #3cb85e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 900, color: '#fff' }}>{step.step}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Is Your Business Franchise-Ready?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Find out what's working, what's broken, and what needs to be fixed before you franchise. Our efficiency audit gives you an honest picture.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/feasibility-questionnaire" className="btn btn-outline-white btn-lg">Take Free Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
