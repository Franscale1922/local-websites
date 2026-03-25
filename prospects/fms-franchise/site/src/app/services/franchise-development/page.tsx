import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Development Services — Build Your Franchise System',
  description: 'FMS Franchise Development covers feasibility analysis, FDD preparation, operations manuals, territory design, and full franchise launch support. 900+ brands developed.',
};

const STEPS = [
  { num: '01', title: 'Franchise Feasibility Study', desc: 'Before building anything, we objectively assess whether your business model is franchiseable — margin structure, replicability, differentiation, and market demand. Most firms skip this step. We don\'t.' },
  { num: '02', title: 'Franchise Model Design', desc: 'We architect your complete franchise offering: fee structure, royalty rates, territory definitions, franchisee qualifications, and the financial model that makes your system attractive to serious buyers.' },
  { num: '03', title: 'Franchise Disclosure Document (FDD)', desc: 'Your FDD is the legal centerpiece of your franchise. Our in-house team (in partnership with leading franchise attorneys) prepares a compliant, compelling 23-item FDD ready for state registration.' },
  { num: '04', title: 'Operations Manual Development', desc: 'A comprehensive operations manual is what lets your franchisees replicate your success without you in the room. We build it from the ground up — every system, process, and standard documented.' },
  { num: '05', title: 'Training Program Design', desc: 'We design your initial franchisee training program — pre-opening curriculum, on-site training schedule, ongoing education systems, and the tools franchisees need to open successfully.' },
  { num: '06', title: 'Franchise Launch & State Registration', desc: 'We manage the final launch: state registration where required, franchise portal setup, marketing kit development, and standing up your franchise sales process for the first incoming leads.' },
];

const PROOF = [
  {
    brand: 'BrightPath Kids',
    industry: "Children's Education",
    challenge: 'Childcare brand had grown quickly through FMS development but rapid expansion outpaced the support infrastructure — franchisee satisfaction was dropping.',
    approach: 'FMS rebuilt the franchisee support model with tiered support tiers, dedicated field consultants per territory, monthly NPS tracking, and a quarterly franchisee advisory council.',
    result: 'Franchisee NPS went from 41 to 78 in 12 months. Zero franchisee non-renewals. Referral-based franchise sales increased 40%.',
    metric: '78 NPS',
    metricLabel: 'Franchisees Thriving & Referring',
  },
  {
    brand: 'Get Up & Go Kayak',
    industry: 'Outdoor Recreation',
    challenge: 'Seasonal outdoor kayak concept with passionate following — but deeply skeptical that a weather-dependent, location-specific business could ever be franchised.',
    approach: 'FMS built a territory model accounting for regional seasonality, a revenue diversification playbook for off-season, and a franchisee profile focused on lifestyle entrepreneurs.',
    result: '11 territories awarded in Year 1. All franchisees met or exceeded first-season revenue projections. Now operating in 8 states.',
    metric: '11 territories',
    metricLabel: "Sold in Year 1 \u2014 They Said It Couldn't Scale",
  },
  {
    brand: 'Sacred Leaf CBD',
    industry: 'Retail',
    challenge: 'Premium CBD retail brand facing a rapidly evolving regulatory landscape — state-by-state hemp law variation, advertising restrictions, and complex franchisee vetting.',
    approach: 'Built state-specific compliance addenda into the franchise agreement, registered the FDD in all 14 franchise registration states, and designed a rigorous franchisee qualification process.',
    result: 'Expanded to 45+ units nationally with zero franchisee litigation and full regulatory compliance in every operating state.',
    metric: '45+ units',
    metricLabel: 'National Scale, Zero Legal Risk',
  },
];

export default function FranchiseDevelopmentPage() {
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
            <span>Franchise Development</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Service</span>
          <h1>Franchise Development</h1>
          <p>We build your complete franchise system from the ground up — feasibility analysis through your first franchisee closing. 900+ brands have trusted this process.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" className="btn btn-gold" rel="noopener noreferrer">Get Free Consultation</Link>
            <Link href="/feasibility-questionnaire" className="btn btn-outline-white">Take Feasibility Quiz</Link>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <section className="section section-alt">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">The Problem</span>
              <h2>Most Businesses That Try to Franchise Alone Fail</h2>
              <div className="divider divider-left" />
              <p style={{ marginTop: '1.25rem', color: '#4a5568', lineHeight: 1.8 }}>
                The average franchisor who tries to develop their system independently spends 18–24 months and $60,000–$120,000 on legal, consulting, and setup costs — before selling a single franchise. Most never complete the process.
              </p>
              <p style={{ marginTop: '1rem', color: '#4a5568', lineHeight: 1.8 }}>
                The reason: franchise development is 23 legally-mandated FDD items, 400+ page operations manuals, state-by-state registration, territory design, training program architecture, and a sales process — all before your first lead walks in.
              </p>
              <p style={{ marginTop: '1rem', color: '#1a3d20', lineHeight: 1.8, fontWeight: 600 }}>
                FMS builds all of it. Under one roof. On a performance-based model that means we succeed when you succeed.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3cb85e', marginBottom: '1.5rem' }}>What's Included</div>
              {['Franchise Feasibility Study', 'Franchise Model & Fee Design', 'Franchise Disclosure Document (FDD)', 'Operations Manual (400+ pages)', 'Franchisee Training Program', 'Territory Maps & Demographics', 'State Registration Support', 'Franchise Launch Kit'].map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.7rem 0', borderBottom: i < 7 ? '1px solid #f0f0f0' : 'none' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1a3d20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: '#fff', fontWeight: 900, flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1a1a1a' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-light" style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow eyebrow-light">Watch</span>
            <h2 style={{ color: '#fff' }}>How Franchise Development Works</h2>
            <div className="divider divider-gold" />
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="video-wrapper" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
              <video controls playsInline poster="">
                <source src="https://www.fmsfranchise.com/wp-content/uploads/2026/03/FMS_Video-1-2025_1080x1080_V2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
              FMS Franchise Development Overview — How we build franchise systems that actually scale
            </p>
          </div>
        </div>
      </section>

      {/* The Approach — 6 Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Approach</span>
            <h2>The FMS Development Process</h2>
            <div className="divider" />
            <p>A structured, 6-phase development process that has produced 900+ successful franchise systems.</p>
          </div>
          <div className="grid-2" style={{ gap: '1.5rem', marginTop: '3rem' }}>
            {STEPS.map(step => (
              <div key={step.num} style={{ display: 'flex', gap: '1.5rem', background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'linear-gradient(135deg, #1a3d20, #3cb85e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>
                    {step.num}
                  </div>
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

      {/* Case Studies */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Proof</span>
            <h2>Real Brands. Verified Results.</h2>
            <div className="divider" />
            <p>Every case study below follows the same format: the challenge we inherited, how we approached it, and the specific outcome we delivered.</p>
          </div>
          <div className="grid-3" style={{ gap: '2rem', marginTop: '3rem' }}>
            {PROOF.map(cs => (
              <div key={cs.brand} style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                {/* Dark hero: fixed min-height so all 3 are same height */}
                <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', padding: '1.5rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', minHeight: '110px' }}>
                  <div style={{ flex: '0 0 auto' }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.6rem', fontWeight: 900, color: '#e8b736', lineHeight: 1.1 }}>{cs.metric}</div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginTop: '0.3rem', lineHeight: 1.4, maxWidth: '120px' }}>{cs.metricLabel}</div>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff', textAlign: 'right', lineHeight: 1.35, flex: '0 0 auto', maxWidth: '40%' }}>{cs.brand}</div>
                </div>
                {/* Light green industry stripe */}
                <div style={{ background: '#e8f5ed', padding: '0.5rem 1.75rem', textAlign: 'center', borderBottom: '1px solid #c8e6d0' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a6b35' }}>{cs.industry}</span>
                </div>
                {/* Body */}
                <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Challenge', text: cs.challenge, color: '#e53e3e' },
                    { label: 'Approach', text: cs.approach, color: '#3cb85e' },
                    { label: 'Result', text: cs.result, color: '#e8b736' },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: item.color, marginBottom: '0.35rem' }}>{item.label}</div>
                      <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.65 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/case-studies" className="btn btn-outline-green">View All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Take the First Step</span>
          <h2 style={{ color: '#fff', margin: '0.75rem 0 1rem' }}>Find Out If Your Business Is Franchise-Ready</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Our free feasibility questionnaire takes 5 minutes and gives you an objective read on whether your business model has what it takes to scale through franchising.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold btn-lg">Take the Free Questionnaire</Link>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
