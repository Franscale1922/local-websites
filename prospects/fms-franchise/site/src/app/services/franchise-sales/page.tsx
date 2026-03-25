import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Sales Services — Expert Franchise Sales Consultants',
  description: 'FMS provides dedicated franchise sales consultants who qualify leads, manage your pipeline, and close deals. 11,340 franchises sold since 2009.',
};

const SALES_PROCESS = [
  { num: '01', title: 'Franchise Sales Strategy', desc: 'We build your franchise sales playbook — target franchisee profile, territories to prioritize, broker strategy, advertising channels, and your lead scoring framework.' },
  { num: '02', title: 'Lead Generation & Portals', desc: 'We list your franchise on Franchise Direct, Franchise Gator, BizBuySell, and other qualified portals — and manage your inbound lead flow from day one.' },
  { num: '03', title: 'Lead Qualification', desc: 'Every lead is pre-qualified against your franchisee profile: financial qualifications, background check, motivation interview, and territory fit review.' },
  { num: '04', title: 'Franchise Presentations', desc: 'Our consultants present your franchise concept to qualified candidates, answer their questions, and guide them through the Item 6 and Item 19 conversations.' },
  { num: '05', title: 'Discovery Day Management', desc: 'We coordinate, schedule, and manage your franchise Discovery Days — the final step before a candidate becomes a franchisee.' },
  { num: '06', title: 'Award & Close', desc: 'FMS manages the award process from signed FDD receipt through the Franchise Agreement. 11,340 franchises closed — we know what converts.' },
];

const PROOF = [
  {
    brand: 'Get Up & Go Kayak',
    industry: 'Outdoor Recreation',
    challenge: 'Seasonal outdoor adventure concept with passionate following but no infrastructure to recruit qualified buyers at scale.',
    approach: 'Built a full franchise portal presence, qualified franchisee profile, and broker network outreach — managing 40+ inbound inquiries in the first 90 days.',
    result: '11 territories awarded in Year 1. All franchisees met or exceeded projections in their first operating season.',
    metric: '11 territories',
    metricLabel: 'Year 1 — Fully Awarded',
  },
  {
    brand: 'Craft House Pizza',
    industry: 'Food & Beverage',
    challenge: 'Artisan pizza brand had an FDD but no sales process. Owner was managing leads directly and losing interest halfway through the process.',
    approach: 'FMS took over the full sales pipeline — portal listings, lead routing, qualification calls, Discovery Day coordination, and close process.',
    result: 'Closed 6 franchise deals in 4 months. Owner reduced franchise sales time commitment from 30+ hours/week to under 4.',
    metric: '6 deals',
    metricLabel: 'Closed in 4 Months — Owner Freed Up',
  },
  {
    brand: 'Command Clean',
    industry: 'Home Services',
    challenge: 'Commercial cleaning franchise had slow lead flow and high drop-off in the discovery stage — qualified candidates weren\'t advancing to signed agreements.',
    approach: 'Rebuilt the discovery process, added an interim validation check with existing franchisees, and shortened the decision timeline with a structured urgency framework.',
    result: 'Conversion rate from qualified lead to signed agreement improved from 12% to 29% within 6 months.',
    metric: '29% close',
    metricLabel: 'More Than Double the Industry Average',
  },
];

export default function FranchiseSalesPage() {
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
            <span>Franchise Sales</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Service</span>
          <h1>Expert Franchise Sales</h1>
          <p>Your franchise system is built. Now we fill it. Our dedicated franchise sales team qualifies leads, manages Discovery Days, and closes deals — so you don't have to.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Free Consultation</Link>
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
              <h2>Having an FDD Is Not the Same as Selling Franchises</h2>
              <div className="divider divider-left" />
              <p style={{ marginTop: '1.25rem', color: '#4a5568', lineHeight: 1.8 }}>
                Thousands of businesses complete franchise development — get their FDD, register in the required states, set up a portal listing — and then wait. And wait. And eventually, the franchise concept quietly stalls.
              </p>
              <p style={{ marginTop: '1rem', color: '#4a5568', lineHeight: 1.8 }}>
                The problem isn't the concept. It's that franchise sales is a full-time job requiring specialized skills: portal management, lead qualification, broker relations, discovery day facilitation, and a structured close process.
              </p>
              <p style={{ marginTop: '1rem', fontWeight: 700, color: '#1a3d20', lineHeight: 1.8 }}>
                FMS's franchise sales team has closed 11,340 franchise deals. We handle the entire pipeline, start to signed agreement.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Portal Management', val: 'Active listings on 15+ portals' },
                { label: 'Lead Response Time', val: '< 2 hours (industry avg: 48 hrs)' },
                { label: 'Broker Network', val: '3,000+ active franchise brokers' },
                { label: 'Qualified Lead Rate', val: '1 in 4 inquiries advances to discovery' },
                { label: 'Close Rate (avg)', val: '23% of qualified leads to signed FA' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: '10px', padding: '1rem 1.25rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#4a5568' }}>{item.label}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1a3d20' }}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Approach</span>
            <h2>The FMS Sales Process</h2>
            <div className="divider" />
            <p>A 6-phase pipeline management process that has produced 11,340 closed franchise agreements.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {SALES_PROCESS.map(step => (
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

      {/* Stats bar */}
      <section style={{ background: '#1a3d20', padding: '3rem 0' }}>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '11,340', label: 'Franchises Sold' },
              { num: '900+', label: 'Brands Supported' },
              { num: '15+', label: 'Years Selling' },
              { num: '3,000+', label: 'Broker Partners' },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
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
            <h2>Real Deals. Real Numbers.</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
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
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Start Selling Franchises?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Whether you have an existing FDD or you're starting from scratch, FMS can build — and run — your entire franchise sales operation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/case-studies" className="btn btn-outline-white btn-lg">View Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
