import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Franchise Your Business — Step-by-Step Guide | FMS',
  description: 'A complete, honest step-by-step guide to franchising your business — from feasibility study through FDD preparation, operations manual, franchise sales, and first unit launch.',
};

export default function HowToFranchisePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Resources</a><span>›</span>
            <span>How to Franchise Your Business</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Step-by-Step Guide</span>
          <h1>How to Franchise Your Business</h1>
          <p>From feasibility assessment to your first signed franchisee — here's exactly what the franchise development process looks like, what it costs, how long it takes, and where most business owners run into problems.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>

          <h2>Before You Start: The Feasibility Test</h2>
          <p>Every successful franchise starts with an honest answer to the question: <em>Can this business be replicated by someone who isn't me?</em></p>
          <p>The criteria franchise consultants and investors use to evaluate franchisability:</p>
          <ul style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li><strong>Proven profitability:</strong> At least 12–24 months of documented, consistent profit</li>
            <li><strong>Systemizable operations:</strong> Your business can run without your personal relationships or skills</li>
            <li><strong>Teachable model:</strong> Someone with no industry experience can learn to operate it within 2–4 weeks</li>
            <li><strong>Replicable unit economics:</strong> Franchisees can earn a reasonable return after paying your royalties</li>
            <li><strong>Market demand:</strong> Evidence that the concept works in multiple markets (not just your specific location)</li>
          </ul>
          <p>FRANdata reports that the average emerging franchisor enters the market with 3 company-owned units and 1 franchised unit. You don't need 10 locations — you need a stable, documented, profitable model.</p>

          <h2>The 7 Phases of Franchise Development</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '1.5rem 0' }}>
            {[
              {
                phase: 'Phase 1',
                title: 'Feasibility Study & Strategy',
                time: '2–4 weeks',
                desc: 'A professional assessment of your brand, operations, financials, and market opportunity. This phase answers whether franchising is viable, what your franchise fee and royalty structure should be, who your target franchisee is, and what territories to prioritize.',
                deliverables: ['Franchise feasibility report', 'Recommended fee structure', 'Franchisee profile definition', 'Territory strategy'],
              },
              {
                phase: 'Phase 2',
                title: 'Operations Manual Development',
                time: '4–8 weeks',
                desc: 'Your operations manual is the backbone of your franchise system — the document that answers every question a franchisee will ever ask. It codifies your brand standards, processes, recipes, vendor relationships, customer service protocols, and everything that makes your business work.',
                deliverables: ['Complete operations manual (200–400+ pages)', 'Brand standards guide', 'Vendor/supplier list', 'Customer service protocols'],
              },
              {
                phase: 'Phase 3',
                title: 'Training Program Design',
                time: '2–4 weeks',
                desc: 'How do you turn a new franchisee into a competent operator in 2–4 weeks? Your training program must cover everything from day-one orientation through ongoing skill development. This includes both initial training (at your location or a training facility) and field support post-opening.',
                deliverables: ['Initial training curriculum', 'Training schedule', 'E-learning modules (optional)', 'Field support protocol'],
              },
              {
                phase: 'Phase 4',
                title: 'Franchise Disclosure Document (FDD)',
                time: '6–12 weeks',
                desc: 'The FDD is the federally-required legal disclosure document that every prospective franchisee must receive at least 14 days before signing. It contains 23 Items covering everything from your business history and litigation record to financial performance representations. FDD preparation requires a franchise attorney — this is not DIY territory.',
                deliverables: ['Complete FDD (all 23 Items)', 'Franchise agreement', 'State registration filings (14 registration states)'],
              },
              {
                phase: 'Phase 5',
                title: 'Franchise Marketing & Sales Setup',
                time: '4–6 weeks',
                desc: 'Before you can sell franchises, you need a platform to attract and qualify prospects: a franchise development website, lead generation campaigns, a franchise sales portal, and a defined discovery process that takes prospects from first inquiry through signed agreement.',
                deliverables: ['Franchise development website or landing page', 'Lead generation strategy', 'Franchise sales presentation', 'Discovery day process'],
              },
              {
                phase: 'Phase 6',
                title: 'Franchise Sales — Qualifying & Closing',
                time: 'Ongoing',
                desc: '67% of new franchisors never sell a single unit in their first two years without professional sales support. This phase involves actively sourcing prospective franchisees through portals, brokers, and direct outreach; qualifying them against your franchisee profile; managing the disclosure and review process; and closing agreements.',
                deliverables: ['Qualified franchisee pipeline', 'Executed franchise agreements', 'Franchise fee collected'],
              },
              {
                phase: 'Phase 7',
                title: 'Launch, Support & Scale',
                time: 'Ongoing',
                desc: 'The work doesn\'t end when you sign your first franchisee. You now have a new job: supporting their success. This includes site selection assistance, pre-opening training, grand opening support, ongoing field visits, annual franchisee conferences, and brand standards compliance.',
                deliverables: ['Franchisee onboarding process', 'Pre-opening checklist', 'Ongoing support structure', 'Annual franchise conference'],
              },
            ].map((item, i) => (
              <div key={item.phase} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3cb85e' }}>{item.phase}</span>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: 0, marginTop: '0.25rem', color: '#1a1a1a' }}>{item.title}</h3>
                  </div>
                  <span style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.25rem 0.875rem', fontSize: '0.78rem', fontWeight: 700, color: '#718096', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>⏱ {item.time}</span>
                </div>
                <p style={{ color: '#4a5568', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.9rem' }}>{item.desc}</p>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#3cb85e', marginBottom: '0.5rem' }}>Key Deliverables</p>
                  <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                    {item.deliverables.map(d => (
                      <li key={d} style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.9 }}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h2>Timeline and Cost Expectations</h2>
          <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: '#1a3d20', color: '#fff' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Milestone</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Timeline</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Typical Investment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { milestone: 'Feasibility to FDD-Ready', timeline: '4–6 months', cost: '$48,500 – $85,000' },
                  { milestone: 'FDD to First Franchisee Signed', timeline: '3–9 months', cost: '$15,000 – $40,000 (sales support)' },
                  { milestone: 'First Location Open', timeline: '6–18 months from sign', cost: 'Franchisee capital' },
                  { milestone: 'Break-Even on System Investment', timeline: '2–3 years', cost: '—' },
                  { milestone: '10+ Unit System Established', timeline: '3–5 years', cost: 'Royalties begin funding operations' },
                ].map((row, i) => (
                  <tr key={row.milestone} style={{ background: i % 2 === 0 ? '#fff' : '#f7f9f7' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 700, color: '#1a1a1a', borderBottom: '1px solid #e2e8f0' }}>{row.milestone}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#4a5568', borderBottom: '1px solid #e2e8f0' }}>{row.timeline}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#3cb85e', fontWeight: 700, borderBottom: '1px solid #e2e8f0' }}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The Three Paths: DIY, Hybrid, and Full-Service</h2>
          <div className="grid-3" style={{ display: 'grid', gap: '1rem', margin: '1.5rem 0' }}>
            {[
              { path: 'DIY', cost: '$25K–$50K', time: '12–24 months', risk: 'High', note: 'Franchise attorneys only; you build all systems. High risk of FDD errors, poor operations manuals, and zero franchise sales support.' },
              { path: 'Hybrid', cost: '$50K–$100K', time: '8–18 months', risk: 'Medium', note: 'Consultant + attorney combination. Quality varies widely — this is where "template factory" firms operate.' },
              { path: 'Full-Service', cost: '$75K–$160K', time: '6–12 months', risk: 'Lower', note: 'One firm handles development, legal coordination, sales, and marketing. FMS operates in this category.' },
            ].map(p => (
              <div key={p.path} style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', border: '1.5px solid #e2e8f0', textAlign: 'center', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{p.path}</h4>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1a3d20', fontFamily: 'Outfit, sans-serif' }}>{p.cost}</div>
                <div style={{ fontSize: '0.75rem', color: '#718096', margin: '0.25rem 0 0.75rem' }}>{p.time} · Risk: {p.risk}</div>
                <p style={{ fontSize: '0.8rem', color: '#4a5568', lineHeight: 1.65, margin: 0 }}>{p.note}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Start With a Free Feasibility Assessment</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Before you invest in any of these paths, find out if your business is actually ready. FMS's free feasibility assessment takes 5 minutes and gives you an honest answer.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/feasibility-questionnaire" className="btn btn-gold">Take the Free Assessment</Link>
              <Link href="/services/franchise-development" className="btn btn-outline-white">FMS Development Services →</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
