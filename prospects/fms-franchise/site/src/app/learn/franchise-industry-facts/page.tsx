import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Industry Facts & Statistics 2026 | FMS',
  description: 'Current franchise industry data: market size, growth rates, top industries, franchisee success rates, and what the numbers mean for business owners considering franchising.',
};

export default function FranchiseIndustryFactsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Resources</a><span>›</span>
            <span>Franchise Industry Facts</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Data</span>
          <h1>Franchise Industry Facts & Statistics</h1>
          <p>The numbers behind one of the most proven business expansion models in the world — current data on market size, growth trends, top industries, and what the research reveals about franchisee success.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>

          {/* Big stat bar */}
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', margin: '0 0 3rem' }}>
            {[
              { num: '$825B', label: 'Franchise Industry GDP Contribution', sub: 'U.S. franchising industry economic output' },
              { num: '8.9M', label: 'Americans Employed by Franchises', sub: 'Across all franchise categories' },
              { num: '3,500+', label: 'Active Franchise Brands in the U.S.', sub: 'Per the IFA 2025 Franchise Outlook' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2.25rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', margin: '0.5rem 0 0.25rem', lineHeight: 1.3 }}>{s.label}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>{s.sub}</div>
              </div>
            ))}
          </div>

          <h2>The Overall Market</h2>
          <p>Franchising contributes over $825 billion to the U.S. economy annually and employs 8.9 million Americans directly. The franchise sector consistently outpaces the broader economy — during recessions, established franchise systems often perform more resiliently than independent businesses due to brand recognition, collective buying power, and proven systems.</p>
          <p>The IFA's 2025 Franchise Business Outlook projects that the number of franchise establishments will grow by 2.0% in 2025 to 821,000 locations — adding approximately 15,000 new franchise units in a single year.</p>

          <h2>Fastest-Growing Franchise Industries</h2>
          <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: '#1a3d20', color: '#fff' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Industry</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>% of New Concepts</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Growth Trend</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Avg. Franchise Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { industry: 'Food & Beverage', pct: '42%', trend: '↑ Steady growth', fee: '$30K–$50K' },
                  { industry: 'Health & Fitness', pct: '10–16%', trend: '↑↑ Accelerating', fee: '$25K–$45K' },
                  { industry: 'Personal Services', pct: '8–10%', trend: '↑↑ Fastest growing segment (4.3% YoY)', fee: '$20K–$40K' },
                  { industry: 'Home Services', pct: '6–10%', trend: '↑↑ Post-pandemic boom', fee: '$30K–$55K' },
                  { industry: 'Business Services', pct: '11%', trend: '↑ Steady', fee: '$25K–$50K' },
                  { industry: 'Education & Enrichment', pct: '4–6%', trend: '↑ Growing', fee: '$20K–$45K' },
                  { industry: 'Automotive', pct: '3–5%', trend: '→ Stable', fee: '$35K–$60K' },
                ].map((row, i) => (
                  <tr key={row.industry} style={{ background: i % 2 === 0 ? '#fff' : '#f7f9f7' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 700, color: '#1a1a1a', borderBottom: '1px solid #e2e8f0' }}>{row.industry}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#4a5568', borderBottom: '1px solid #e2e8f0' }}>{row.pct}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#3cb85e', fontWeight: 600, borderBottom: '1px solid #e2e8f0', fontSize: '0.825rem' }}>{row.trend}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#718096', borderBottom: '1px solid #e2e8f0' }}>{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Who Becomes a Franchisee?</h2>
          <p>Understanding the franchisee pool is critical for franchisors — you're designing a system for this person to operate profitably.</p>
          <div className="hero-grid" style={{ display: 'grid', gap: '1rem', margin: '1.5rem 0' }}>
            {[
              { label: 'Average age of new franchisee', value: '38–55 years old', note: 'Gen X represents the largest buyer cohort' },
              { label: 'Married/partnered franchisees', value: '65.5%', note: 'Spouse is a co-decision-maker in most cases' },
              { label: 'College-educated franchisees', value: '~70%', note: 'Higher education common but not required' },
              { label: '"Be your own boss" as top motivator', value: '#1 reason', note: 'Consistently across demographics' },
              { label: 'Invest $50K–$250K initial capital', value: '45%', note: 'Most common investment tier' },
              { label: 'Prior business ownership experience', value: '~40%', note: 'Many come from corporate careers' },
            ].map(item => (
              <div key={item.label} style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', border: '1.5px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1a3d20', fontFamily: 'Outfit, sans-serif' }}>{item.value}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', margin: '0.35rem 0 0.25rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: '#718096' }}>{item.note}</div>
              </div>
            ))}
          </div>

          <h2>Franchise Success Rates: What the Data Actually Shows</h2>
          <p>Franchise success rates are frequently cited — and frequently misunderstood. Here's what the research actually supports:</p>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', margin: '1.5rem 0', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
            <h3 style={{ color: '#1a3d20', marginBottom: '1rem' }}>Franchisee vs. Independent Business Survival</h3>
            <ul style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568', marginBottom: '1rem' }}>
              <li>The SBA has reported that franchise businesses have historically maintained higher survival rates than independent startups in comparable categories</li>
              <li>85%+ of franchisees surveyed rate their relationship with their franchisor as "positive" or "very positive" (IFA Consumer Awareness Survey)</li>
              <li>Approximately 20% of businesses that seriously explore franchising actually convert — the rest self-select out or are screened during feasibility evaluation</li>
            </ul>
            <div style={{ background: '#fff8e8', borderRadius: '10px', padding: '1rem', border: '1px solid #e8b736' }}>
              <strong style={{ fontSize: '0.85rem', color: '#1a1a1a' }}>Important caveat:</strong>
              <p style={{ fontSize: '0.85rem', color: '#4a5568', margin: '0.35rem 0 0', lineHeight: 1.7 }}>Franchise success varies enormously by the quality of the franchisor's system, the support provided, the territory, and franchisee selection. Strong franchise systems with documented training and active support outperform weak systems significantly.</p>
            </div>
          </div>

          <h2>What the FMS Portfolio Shows</h2>
          <p>Across FMS's 979 franchised brands and 11,340 franchise units sold, the data shows consistent patterns:</p>
          <ul style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li>Brands that invested in a robust operations manual closed their first franchisee 37% faster on average</li>
            <li>Franchisors who used FMS's franchise sales support sold significantly more units in years 1–2 versus those who managed sales independently</li>
            <li>234 FMS client brands have successfully sold and exited their franchise system — demonstrating franchising as a viable exit strategy</li>
            <li>Food & beverage and home services represent the two largest categories in FMS's client portfolio</li>
          </ul>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>See Where Your Business Fits</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>The industry data gives you context. The feasibility assessment gives you your specific answer.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/feasibility-questionnaire" className="btn btn-gold">Take the Free Assessment</Link>
              <Link href="/learn/state-guidelines" className="btn btn-outline-white">Next: State Guidelines →</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
