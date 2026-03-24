import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise State Registration Guidelines | FMS',
  description: 'Which 14 states require franchise registration, what it involves, timelines, costs, and how FMS manages state filings for clients. Know the rules before you sell.',
};

export default function StateGuidelinesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Resources</a><span>›</span>
            <span>State Registration Guidelines</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Legal & Compliance</span>
          <h1>Franchise State Registration Guidelines</h1>
          <p>Franchising is federally regulated by the FTC — but 14 states layer additional registration and disclosure requirements on top. Here's what you need to know before you sell a franchise unit anywhere in the U.S.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>

          <div style={{ background: '#fff8e8', borderRadius: '14px', padding: '1.5rem', margin: '0 0 2rem', border: '1.5px solid #e8b736' }}>
            <strong style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>⚠️ Important Disclaimer</strong>
            <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: '0.5rem 0 0', lineHeight: 1.75 }}>This page provides general educational information only and is not legal advice. Franchise law is complex and state-specific. FMS coordinates with qualified franchise attorneys on all client registrations. Always work with a licensed franchise attorney for your specific situation.</p>
          </div>

          <h2>The Federal Framework: The FTC Franchise Rule</h2>
          <p>At the federal level, the FTC's Franchise Rule (16 CFR Part 436) requires all franchisors to provide prospective franchisees with a Franchise Disclosure Document (FDD) at least 14 calendar days before any agreement is signed or any payment is made.</p>
          <p>The Franchise Rule applies in all 50 states. There is no federal registration requirement — you prepare your FDD, have it reviewed by a franchise attorney, and you can sell franchises in non-registration states immediately after that review is complete.</p>

          <h2>The 14 Franchise Registration States</h2>
          <p>These states require franchisors to register their FDD with the state regulatory agency before offering or selling franchises to residents of that state. The registration process involves submitting the FDD, paying a filing fee, and waiting for state approval — which can take weeks to months.</p>

          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '1.5rem 0' }}>
            {[
              { state: 'California', agency: 'CA Dept. of Financial Protection & Innovation', note: 'One of the most complex; annual renewal required' },
              { state: 'Hawaii', agency: 'HI Dept. of Commerce & Consumer Affairs', note: 'Registration required' },
              { state: 'Illinois', agency: 'IL Attorney General', note: 'Registration required' },
              { state: 'Indiana', agency: 'IN Secretary of State', note: 'Notice filing state' },
              { state: 'Maryland', agency: 'MD Securities Division', note: 'Registration required' },
              { state: 'Michigan', agency: 'MI Attorney General', note: 'Notice filing state' },
              { state: 'Minnesota', agency: 'MN Dept. of Commerce', note: 'Registration required' },
              { state: 'New York', agency: 'NY Attorney General', note: 'One of the most rigorous; extensive comment periods common' },
              { state: 'North Dakota', agency: 'ND Securities Dept.', note: 'Registration required' },
              { state: 'Oregon', agency: 'OR Dept. of Consumer & Business Services', note: 'Notice filing state' },
              { state: 'Rhode Island', agency: 'RI Dept. of Business Regulation', note: 'Registration required' },
              { state: 'South Dakota', agency: 'SD Division of Securities', note: 'Registration required' },
              { state: 'Virginia', agency: 'VA State Corporation Commission', note: 'Registration required' },
              { state: 'Washington', agency: 'WA Dept. of Financial Institutions', note: 'Registration required' },
            ].map(s => (
              <div key={s.state} style={{ background: '#fff', borderRadius: '10px', padding: '1rem', border: '1.5px solid #e2e8f0' }}>
                <div style={{ fontWeight: 800, color: '#1a1a1a', fontSize: '0.95rem' }}>{s.state}</div>
                <div style={{ fontSize: '0.78rem', color: '#3cb85e', fontWeight: 600, margin: '0.2rem 0 0.3rem' }}>{s.agency}</div>
                <div style={{ fontSize: '0.75rem', color: '#718096' }}>{s.note}</div>
              </div>
            ))}
          </div>

          <h2>What State Registration Involves</h2>
          <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: '#1a3d20', color: '#fff' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Requirement</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Detail</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { req: 'FDD Submission', detail: 'Complete FDD with all exhibits filed with the state agency' },
                  { req: 'Filing Fee', detail: 'Typically $250–$1,000 per state, paid at submission' },
                  { req: 'State Review Period', detail: '30–90 days for most states; NY and CA can take 4–6 months' },
                  { req: 'Comment Response', detail: 'State may issue comments requiring revisions before approval' },
                  { req: 'Annual Renewal', detail: 'Most registration states require annual renewal of FDD' },
                  { req: 'Audited Financials', detail: 'Some states require CPA-audited financial statements' },
                  { req: 'Escrow/Bonding', detail: 'Some states require franchisor to escrow franchise fees or post surety bonds for new franchisors' },
                ].map((row, i) => (
                  <tr key={row.req} style={{ background: i % 2 === 0 ? '#fff' : '#f7f9f7' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 700, color: '#1a1a1a', borderBottom: '1px solid #e2e8f0' }}>{row.req}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#4a5568', borderBottom: '1px solid #e2e8f0' }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Do You Need to Register in Every State?</h2>
          <p>No. You only need to register in a state if you plan to offer or sell franchises to residents of that state. If you're starting with a specific geographic territory — say, the Southeast — and none of your target franchisees are in registration states, you can begin selling without any state filings.</p>
          <p>However, once a prospective franchisee in California, New York, or another registration state enters your pipeline, you must have your registration approved in that state before you can legally provide them with an FDD or accept their fee.</p>

          <h2>The Smart Approach: Territory Strategy First</h2>
          <p>FMS recommends that new franchisors define their initial territory strategy before filing. If you focus your first year on non-registration states (like Texas, Florida, Georgia, and most of the South and Midwest), you can launch franchise sales immediately after FDD completion and handle state registrations in parallel or in year two.</p>
          <p>This approach reduces time-to-first-sale significantly and allows your system to mature before navigating the most complex state filings.</p>

          <h2>How FMS Manages This for Clients</h2>
          <p>FMS coordinates the state registration process in collaboration with our network of franchise attorneys. This includes:</p>
          <ul style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li>Identifying which states align with your territory strategy and franchisee target profile</li>
            <li>Sequencing filings to prioritize the states where your hottest prospects are located</li>
            <li>Coordinating with your attorney on state-specific FDD modifications required for approval</li>
            <li>Tracking renewal deadlines across all active state registrations</li>
          </ul>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Questions About Your State Compliance?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Talk to an FMS consultant — free, no obligation — about your territory strategy and which states you'll need to file in before your first franchise sale.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold">Talk to a Consultant</Link>
              <Link href="/learn/faq" className="btn btn-outline-white">Read Franchise FAQs →</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
