import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Case Studies — Real Results from 900+ FMS Brands',
  description: 'Detailed franchise case studies from FMS clients across every industry. Challenge, approach, and quantified results for 15+ brands.',
};

const CASE_STUDIES = [
  {
    id: 'foxtail-coffee',
    brand: 'Foxtail Coffee',
    industry: 'Food & Beverage',
    service: 'Franchise Development',
    challenge: 'Single specialty café in Orlando with passionate local following but no systems to replicate the experience. Owner wanted to grow but couldn\'t afford to open corporate locations.',
    approach: 'FMS conducted a full feasibility study, built the FDD, designed barista certification programs, and developed territory mapping for Florida-first expansion. The Foxtail brand DNA — sourcing relationships, training protocols, customer experience standards — was codified into a replicable operations manual over 6 months.',
    result: '12 franchise locations signed in Year 1 with 98% customer satisfaction scores maintained across all units. Foxtail has since been recognized as one of the America\'s fastest growing coffee concepts.',
    metrics: [
      { val: '12', label: 'Locations Year 1' },
      { val: '98%', label: 'Customer Satisfaction' },
      { val: '6 months', label: 'Development Timeline' },
    ],
    quote: 'FMS helped us turn what we had built into something other people could actually own and operate without us in the room every day.',
  },
  {
    id: 'voda-restoration',
    brand: 'Voda Restoration',
    industry: 'Home Services',
    service: 'Franchise Development + Sales',
    challenge: 'Profitable restoration business — carpet, upholstery, water damage — with strong local brand but owner was personally overseeing every job. He had hit a growth ceiling because the business was too dependent on him.',
    approach: 'FMS built a complete operations manual with technician certification standards, equipment lists by service type, and quality control protocols. Territory-protected franchise model was designed for Southeast expansion, and the FMS sales team activated broker networks and portals.',
    result: 'Went from 1 owner-operated location to 8 active franchisees across 4 states in 18 months. Owner reduced his operational involvement from 60+ hours/week to under 10.',
    metrics: [
      { val: '8', label: 'Franchisees in 18 Mo.' },
      { val: '4', label: 'States Covered' },
      { val: '10 hrs/wk', label: 'Owner Time Commitment' },
    ],
    quote: 'I built a great business and then couldn\'t get out of my own way. FMS gave me a system I could actually hand to other people.',
  },
  {
    id: 'sacred-leaf-cbd',
    brand: 'Sacred Leaf CBD',
    industry: 'Retail',
    service: 'Franchise Development',
    challenge: 'Premium CBD retail brand in a rapidly evolving regulatory environment. State-by-state variation in hemp laws, advertising restrictions, and franchisee vetting created enormous operational complexity.',
    approach: 'FMS built state-specific compliance addenda into the franchise agreement, designed a franchisee vetting process ensuring only operationally-qualified owners were awarded, and registered the FDD in all 14 franchise registration states.',
    result: 'Expanded to 45+ units nationally with zero franchisee litigation and full regulatory compliance in all operating states — a remarkable record in the CBD space.',
    metrics: [
      { val: '45+', label: 'Units Nationwide' },
      { val: '14', label: 'States Registered' },
      { val: '0', label: 'Litigation Incidents' },
    ],
    quote: 'The regulatory complexity of CBD franchising is real. FMS built a system that let us expand without exposing ourselves or our franchisees to legal risk.',
  },
  {
    id: 'brightpath-kids',
    brand: 'BrightPath Kids',
    industry: 'Children\'s Education',
    service: 'Management & Support',
    challenge: 'Childcare brand had grown quickly through the FMS development process, but rapid expansion outpaced the support infrastructure. Franchisee satisfaction was dropping and the corporate team was overwhelmed with daily support calls.',
    approach: 'FMS rebuilt the franchisee support model: tiered support tiers by unit tenure, dedicated field consultants assigned per territory, monthly NPS tracking, quarterly franchisee advisory council meetings, and a brand audit program with standardized scoring.',
    result: 'Franchisee NPS went from 41 to 78 in 12 months. Zero franchisee non-renewals in the following 18 months. Referral-based franchise sales (franchisees recommending to other owners) increased 40%.',
    metrics: [
      { val: '78', label: 'NPS (from 41)' },
      { val: '0', label: 'Non-Renewals' },
      { val: '+40%', label: 'Referral Sales' },
    ],
    quote: 'We had a franchisee satisfaction problem that was threatening to undo everything we\'d built. FMS rebuilt our entire support model in 90 days.',
  },
  {
    id: 'command-clean',
    brand: 'Command Clean',
    industry: 'Home Services',
    service: 'Franchise Sales',
    challenge: 'Commercial cleaning franchise had slow lead flow and high drop-off in the discovery stage. Qualified candidates were reaching out but not advancing to signed franchise agreements.',
    approach: 'FMS rebuilt the discovery process — added a structured franchisee validation call with three existing franchisees, shortened the decision timeline with a milestone-based urgency framework, and shifted the Discovery Day format from information-heavy to experience-first.',
    result: 'Conversion rate from qualified lead to signed agreement improved from 12% to 29% within 6 months. Deal closing time reduced from average 14 weeks to 8 weeks.',
    metrics: [
      { val: '29%', label: 'Close Rate (from 12%)' },
      { val: '8 weeks', label: 'Avg. Close Time' },
      { val: '6 months', label: 'Turnaround' },
    ],
    quote: 'We had traffic but couldn\'t convert. FMS restructured our process and our close rate more than doubled.',
  },
  {
    id: 'bloomin-blinds',
    brand: "Bloomin' Blinds",
    industry: 'Home Services',
    service: 'Franchise Development + Sales',
    challenge: "Custom window covering concept with a loyal regional customer base and a strong owner-operated model, but no documented systems for replicating the in-home sales process. The owner was the primary rainmaker — every consultation depended on his personal expertise and relationship with vendors.",
    approach: "FMS built a consultative sales training program from the ground up, translating the owner's in-home assessment process into a repeatable, teachable framework. Vendor relationships were formalized into preferred supplier agreements, territory-protected franchise zones were mapped across the Southeast, and FMS handled full FDD development and franchise registration.",
    result: "Awarded 14 franchise territories in the first 18 months, with franchisees achieving average first-year revenues 22% above projections. The brand has since expanded to multiple states with a fully independent corporate team handling ongoing franchisee support.",
    metrics: [
      { val: '14', label: 'Territories Yr 1' },
      { val: '+22%', label: 'Avg. Revenue vs. Proj.' },
      { val: '18 mo.', label: 'Time to Scale' },
    ],
    quote: "We had a great business but it only worked because of me. FMS took everything that was in my head and built a system that lets other people replicate it. I didn't think that was possible.",
  },
  {
    id: 'get-up-go-kayak',
    brand: 'Get Up & Go Kayak',
    industry: 'Outdoor Recreation',
    service: 'Franchise Development + Sales',
    challenge: 'Seasonal outdoor kayak rental concept with passionate following but extremely skeptical that a seasonal business — highly dependent on weather and location — could be franchised.',
    approach: 'FMS built a territory design model accounting for regional seasonality, developed a revenue diversification playbook for off-season (corporate rentals, partnerships), and created a franchisee profile focused on lifestyle entrepreneurs with outdoor backgrounds.',
    result: '11 territories awarded in Year 1. All franchisees met or exceeded first-season revenue projections. Now operating in 8 states and expanding.',
    metrics: [
      { val: '11', label: 'Territories Year 1' },
      { val: '8', label: 'States Operating' },
      { val: '100%', label: 'Revenue Target Met' },
    ],
    quote: 'We were told you can\'t franchise a seasonal business. Now we have 11 locations in 8 states.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Case Studies</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Case Studies</span>
          <h1>Real Brands. Verified Results.</h1>
          <p>Every case study below documents the exact challenge we inherited, how we approached it, and the specific quantified outcome we delivered. No abstractions.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-gold">Talk to a Consultant</Link>
            <Link href="/our-clients" className="btn btn-outline-white">See Our Full Portfolio</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: '#1a3d20', padding: '3rem 0' }}>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '900+', label: 'Brands Franchised' },
              { num: '11,340', label: 'Franchises Sold' },
              { num: '234', label: 'Successful Exits' },
              { num: '67', label: 'Expert Consultants' },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {CASE_STUDIES.map((cs, i) => (
              <div key={cs.id} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 2px 8px rgba(60,184,94,0.08)', border: '1px solid #e2e8f0' }}>
                {/* Header row */}
                <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.35rem' }}>{cs.service}</div>
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.3rem' }}>{cs.brand}</h2>
                    <div style={{ display: 'inline-block', background: 'rgba(60,184,94,0.25)', color: '#3cb85e', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.75rem', borderRadius: '999px' }}>{cs.industry}</div>
                  </div>
                  <div className="case-study-metrics" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {cs.metrics.map(m => (
                      <div key={m.label} style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 900, color: '#e8b736', lineHeight: 1 }}>{m.val}</div>
                        <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="grid-3 case-study-metrics" style={{ padding: '2rem 2rem', display: 'grid', gap: '1.5rem' }}>
                  {[
                    { label: 'Challenge', text: cs.challenge, color: '#e53e3e' },
                    { label: 'Approach', text: cs.approach, color: '#3cb85e' },
                    { label: 'Result', text: cs.result, color: '#e8b736' },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: item.color, marginBottom: '0.6rem' }}>{item.label}</div>
                      <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.75 }}>{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                {cs.quote && (
                  <div style={{ borderTop: '1px solid #e2e8f0', padding: '1.5rem 2.5rem', background: 'rgba(60,184,94,0.04)' }}>
                    <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#4a5568', lineHeight: 1.75 }}>
                      <span style={{ color: '#3cb85e', fontSize: '1.5rem', fontFamily: 'Georgia, serif', marginRight: '0.3rem' }}>"</span>
                      {cs.quote}
                    </p>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', fontWeight: 700, color: '#1a3d20' }}>— {cs.brand} Founder</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Your Business Could Be Next</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Every case study above started with a single conversation. Find out if your business model has what it takes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold btn-lg">Take Free Questionnaire</Link>
            <Link href="/contact" className="btn btn-outline-white btn-lg">Book Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
