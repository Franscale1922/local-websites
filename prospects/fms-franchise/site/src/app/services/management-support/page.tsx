import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Management & Support Services — FMS Franchise',
  description: 'FMS provides ongoing franchise management and support: franchisee training, discovery days, brand standards compliance, and operational systems. 234 successful exits.',
};

const SUPPORT_PILLARS = [
  { title: 'Franchisee Onboarding', desc: 'A structured 8-week onboarding program that sets every new franchisee up for success before they open their doors — training, setup checklists, vendor introductions, and grand opening support.' },
  { title: 'Training Program Management', desc: 'We build and manage your initial training program, field training, refresher courses, and annual franchisee conferences — including content creation and facilitator training.' },
  { title: 'Discovery Day Coordination', desc: 'Discovery Days are often the final decision point for a franchise candidate. We coordinate, staff, and facilitate your Discovery Days to consistently convert serious candidates.' },
  { title: 'Brand Standards & Compliance', desc: 'We manage your brand audit program — ensuring every franchisee maintains your standards for customer experience, visual identity, and operational quality.' },
  { title: 'Franchise Advisory Councils', desc: 'Strong franchisee relationships drive retention and referrals. We structure and facilitate your FAC meetings, creating a healthy dialogue between your corporate team and franchisee network.' },
  { title: 'Renewal & Resale Support', desc: 'Managing franchise renewals and facilitating franchisee resales are high-complexity events. Our team handles the process to protect royalty streams and brand continuity.' },
];

const PROOF = [
  {
    brand: 'BrightPath Kids',
    industry: 'Children\'s Education',
    challenge: 'Rapid franchise growth outpaced support infrastructure — franchisees were dissatisfied, NPS scores were dropping, and the corporate team was overwhelmed.',
    approach: 'FMS rebuilt the franchisee support model: tiered support tiers, dedicated field consultants, monthly check-in schedule, brand audit cadence, and quarterly franchisee council.',
    result: 'Franchisee NPS went from 41 to 78 within 12 months. Zero franchisee exits in the following 18 months. Referral-based new franchise sales increased 40%.',
    metric: '78 NPS',
    metricLabel: 'Up From 41',
  },
  {
    brand: 'ProCare Therapy',
    industry: 'Healthcare Staffing',
    challenge: 'Specialized healthcare staffing franchise with complex compliance requirements across multiple states — franchisees were operating inconsistently.',
    approach: 'Developed a compliance monitoring system, state-specific operations addenda, and a quarterly compliance certification process for all active franchisees.',
    result: 'Brought all 22 franchisees into full compliance within 6 months. Zero compliance incidents in the following 24 months.',
    metric: '22 units',
    metricLabel: 'Full Compliance',
  },
];

export default function ManagementSupportPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/services">Services</a>
            <span>›</span>
            <span>Management & Support</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Service</span>
          <h1>Franchise Management & Support</h1>
          <p>Selling a franchise is the beginning, not the end. FMS provides the infrastructure, systems, and people to keep your franchisees profitable and your brand standards protected.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Free Consultation</Link>
            <Link href="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Problem */}
      <section className="section section-alt">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">The Problem</span>
              <h2>Most Franchise Systems Stall After the First 10 Units</h2>
              <div className="divider divider-left" />
              <p style={{ marginTop: '1.25rem', color: '#4a5568', lineHeight: 1.8 }}>
                The statistics are sobering: the average franchise system that reaches 10 units never makes it to 25. Not because the concept is bad — but because the support infrastructure didn't scale with the sales process.
              </p>
              <p style={{ marginTop: '1rem', color: '#4a5568', lineHeight: 1.8 }}>
                Unhappy franchisees don't renew. They don't refer. They litigate. And they talk to journalists. The difference between a franchise system that exits at $50M and one that quietly closes is not the concept — it's the support model.
              </p>
              <p style={{ marginTop: '1rem', fontWeight: 700, color: '#1a3d20' }}>
                FMS builds support systems that scale with your network — from unit 1 to unit 100.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3cb85e', marginBottom: '1.5rem' }}>What We Manage</div>
              {['Franchisee Onboarding Programs', 'Initial & Ongoing Training', 'Discovery Day Facilitation', 'Brand Audit & Compliance', 'Franchise Advisory Councils', 'Operations Manual Updates', 'Franchisee Renewal Management', 'Resale & Transfer Support'].map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.7rem 0', borderBottom: i < 7 ? '1px solid #f0f0f0' : 'none' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1a3d20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: '#fff', fontWeight: 900, flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1a1a1a' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video 1 */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-light" style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow eyebrow-light">Watch</span>
            <h2 style={{ color: '#fff' }}>Franchise Management Systems That Work</h2>
            <div className="divider divider-gold" />
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="video-wrapper">
              <video controls playsInline>
                <source src="https://www.fmsfranchise.com/wp-content/uploads/2026/03/FMS_Video-3-2025_1080x1080_V2-hevcmp4.mp4" type="video/mp4" />
              </video>
            </div>
            <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
              How FMS manages and scales franchise support operations
            </p>
          </div>
        </div>
      </section>

      {/* Support pillars */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Approach</span>
            <h2>Six Pillars of Franchise Support</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {SUPPORT_PILLARS.map((pillar, i) => (
              <div key={pillar.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #1a3d20, #3cb85e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', marginBottom: '1rem' }}>
                  {i + 1}
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video 2 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Additional Resource</span>
            <h2>Franchisee Support Operations</h2>
            <div className="divider" />
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="video-wrapper">
              <video controls playsInline>
                <source src="https://www.fmsfranchise.com/wp-content/uploads/2026/03/18-hevcmp4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-light" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow eyebrow-light">Proof</span>
            <h2 style={{ color: '#fff' }}>What Strong Support Systems Produce</h2>
            <div className="divider divider-gold" />
          </div>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {PROOF.map(cs => (
              <div key={cs.brand} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.25rem', fontWeight: 900, color: '#e8b736', lineHeight: 1 }}>{cs.metric}</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>{cs.metricLabel}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, color: '#fff' }}>{cs.brand}</div>
                    <div style={{ fontSize: '0.7rem', background: 'rgba(60,184,94,0.2)', color: '#3cb85e', padding: '0.15rem 0.6rem', borderRadius: '999px', marginTop: '0.3rem', display: 'inline-block', fontWeight: 700 }}>{cs.industry}</div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Challenge', text: cs.challenge, color: '#fc8181' },
                    { label: 'Approach', text: cs.approach, color: '#3cb85e' },
                    { label: 'Result', text: cs.result, color: '#e8b736' },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: item.color, marginBottom: '0.35rem' }}>{item.label}</div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Build a Franchise System That Lasts</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            234 FMS clients have successfully exited their franchise systems. It starts with the right support infrastructure. Let's build yours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/case-studies" className="btn btn-outline-white btn-lg">See All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
