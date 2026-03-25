import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Is Franchising? A Complete Guide for Business Owners',
  description: 'Understand exactly how franchising works — the legal structure, the roles of franchisor and franchisee, and why franchising is one of the most proven business expansion models in history.',
};

export default function WhatIsFranchisingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Resources</a><span>›</span>
            <span>What Is Franchising?</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Franchise Basics</span>
          <h1>What Is Franchising?</h1>
          <p>A business owner licenses their proven brand, systems, and processes to an independent operator — who invests their own capital to open and run a location. That's the core of franchising. Here's everything else you need to know.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>

          <h2>The Simple Version</h2>
          <p>Franchising is a legal and commercial relationship between two parties:</p>
          <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li><strong>The Franchisor</strong> — the original business owner who has developed a proven concept, brand, and operating system.</li>
            <li><strong>The Franchisee</strong> — an independent investor who pays a franchise fee and ongoing royalties to operate under the franchisor's brand and systems.</li>
          </ul>
          <p>The franchisee invests their own capital to open the location. The franchisor provides the brand, the systems, and the support. Both parties benefit when franchisees run successful businesses.</p>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', margin: '2rem 0', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
            <h3 style={{ color: '#1a3d20', marginBottom: '0.75rem' }}>Key Distinction: Ownership vs. Licensing</h3>
            <p style={{ margin: 0, color: '#4a5568', lineHeight: 1.75 }}>Franchisees <em>own</em> their business — their equipment, their lease, their staff. But they <em>license</em> the right to use the brand and system from the franchisor. This is fundamentally different from being an employee or a manager. Franchisees have personal capital at stake, which is why they typically outperform hired managers by 10–30% on revenue.</p>
          </div>

          <h2>How Does the Money Work?</h2>
          <p>Franchisors earn revenue through two primary mechanisms:</p>
          <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#1a3d20', color: '#fff' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Revenue Source</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Description</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Typical Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { source: 'Initial Franchise Fee', desc: 'One-time fee paid when a franchisee signs the agreement', range: '$20,000 – $50,000' },
                  { source: 'Ongoing Royalties', desc: 'Percentage of franchisee gross sales paid weekly or monthly', range: '4% – 9% of gross sales' },
                  { source: 'Marketing Fund Contributions', desc: 'Pooled fund for national/regional brand advertising', range: '1% – 3% of gross sales' },
                  { source: 'Renewal Fees', desc: 'Fee charged when a franchisee renews their agreement', range: '$5,000 – $15,000' },
                ].map((row, i) => (
                  <tr key={row.source} style={{ background: i % 2 === 0 ? '#fff' : '#f7f9f7' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 700, color: '#1a1a1a', borderBottom: '1px solid #e2e8f0' }}>{row.source}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#4a5568', borderBottom: '1px solid #e2e8f0' }}>{row.desc}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#3cb85e', fontWeight: 700, borderBottom: '1px solid #e2e8f0' }}>{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What Is a Franchise Disclosure Document (FDD)?</h2>
          <p>The Franchise Disclosure Document is the legal backbone of every franchise relationship. Required by the FTC, the FDD must be provided to a prospective franchisee at least 14 days before they sign any agreement or pay any money.</p>
          <p>The FDD contains 23 required "Items" covering everything from the franchisor's business history and litigation record to the full franchise agreement, required fees, territory protections, and — critically — Item 19 (Financial Performance Representations), which is where franchisors can disclose actual unit performance data.</p>
          <div style={{ background: '#fff8e8', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0', border: '1.5px solid #e8b736' }}>
            <strong style={{ color: '#1a1a1a' }}>FMS Note:</strong>
            <p style={{ margin: '0.5rem 0 0', color: '#4a5568', lineHeight: 1.7 }}>Drafting a compliant FDD requires a franchise attorney. FMS works closely with experienced franchise attorneys to ensure every document meets federal and state requirements — this is one of the most common points where DIY franchise attempts run into costly mistakes.</p>
          </div>

          <h2>The Franchise Relationship in Practice</h2>
          <p>Once a franchisee opens, the ongoing relationship looks like this:</p>
          <ol style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li>Franchisee operates their location using the franchisor's brand standards, systems, and supplier relationships</li>
            <li>Franchisee pays weekly or monthly royalties to the franchisor</li>
            <li>Franchisor provides ongoing training, support, marketing, and system upgrades</li>
            <li>Both parties attend annual franchise conferences or discovery days</li>
            <li>The agreement (typically 5–10 years) can be renewed if both parties are satisfied</li>
          </ol>

          <h2>What Makes Franchising Different from Licensing?</h2>
          <p>Licensing lets someone use your trademark or product. Franchising creates a comprehensive, ongoing business relationship that includes:</p>
          <ul style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li>A complete operating system (not just brand rights)</li>
            <li>Ongoing training and support obligations</li>
            <li>Quality control standards and enforcement rights</li>
            <li>A defined legal framework under FTC Franchise Rule</li>
          </ul>
          <p>This distinction matters legally: if your licensing arrangement functions like a franchise, the FTC may require you to comply with franchise regulations regardless of what you call it.</p>

          <h2>Types of Franchise Structures</h2>
          <div className="hero-grid" style={{ display: 'grid', gap: '1rem', margin: '1.5rem 0' }}>
            {[
              { type: 'Single-Unit Franchise', desc: 'One franchisee opens and operates one location. Most common entry point for new franchisors.' },
              { type: 'Multi-Unit Franchise', desc: 'One franchisee commits to opening multiple locations, typically on a development schedule.' },
              { type: 'Area Development', desc: 'Franchisee gets exclusive rights to a defined territory and must open a minimum number of units.' },
              { type: 'Master Franchise', desc: 'A franchisee gets exclusive rights to a region and can sub-franchise to others — common for international expansion.' },
            ].map(f => (
              <div key={f.type} style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{f.type}</h4>
                <p style={{ fontSize: '0.875rem', color: '#718096', margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to See If Your Business Is Franchise-Ready?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Understanding franchising is step one. Step two is finding out whether your specific business model meets the criteria for a successful franchise launch.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/feasibility-questionnaire" className="btn btn-gold">Take the Free Feasibility Assessment</Link>
              <Link href="/learn/why-franchise" className="btn btn-outline-white">Next: Why Franchise? →</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
