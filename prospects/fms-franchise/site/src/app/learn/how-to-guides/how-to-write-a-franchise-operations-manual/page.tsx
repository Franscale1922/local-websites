import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Write a Franchise Operations Manual | FMS Guide',
  description: 'A complete guide to writing a franchise operations manual — what it must contain, how to structure it, and how to make it actually useful for franchisees. From FMS — 900+ brands franchised.',
};

const SECTIONS_LIST = [
  { num: '01', heading: 'Company Overview & Brand Standards', items: ['Mission, vision, and values', 'Brand identity guidelines (logo usage, colors, typography)', 'Customer service philosophy', 'Communication style and tone'] },
  { num: '02', heading: 'Site Selection & Build-Out', items: ['Approved demographics and site criteria', 'Lease negotiation guidelines', 'Build-out specifications and approved vendors', 'Pre-opening inspection checklist'] },
  { num: '03', heading: 'Equipment & Technology', items: ['Required equipment list with specifications', 'Technology system setup (POS, scheduling, CRM)', 'Vendor contacts and ordering procedures', 'Maintenance schedules'] },
  { num: '04', heading: 'Staffing & HR', items: ['Hiring criteria and interview framework', 'Onboarding procedures', 'Training checklists by role', 'Compensation ranges and benefit guidelines', 'Performance management process'] },
  { num: '05', heading: 'Operations Procedures', items: ['Opening and closing procedures', 'Daily, weekly, and monthly checklists', 'Quality control and inspection standards', 'Customer complaint resolution process', 'Event and promotion execution'] },
  { num: '06', heading: 'Financial Management', items: ['Accounting procedures and approved software', 'Daily cash reconciliation', 'Weekly and monthly reporting requirements', 'Expense approval thresholds', 'Royalty reporting process'] },
  { num: '07', heading: 'Marketing & Local Promotion', items: ['Approved local marketing activities', 'Social media guidelines and brand approval process', 'Local partnerships and community involvement', 'Prohibited marketing activities'] },
  { num: '08', heading: 'Health, Safety & Compliance', items: ['Health and safety standards', 'Regulatory compliance requirements', 'Incident reporting process', 'Insurance requirements', 'Record-keeping requirements'] },
];

export default function HowToWriteOperationsManualPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Learn</a><span>›</span>
            <a href="/learn/how-to-guides">How-To Guides</a><span>›</span>
            <span>Operations Manual</span>
          </div>
          <span className="eyebrow" style={{ color: '#eebc4a' }}>Franchise Operations Guide</span>
          <h1>How to Write a Franchise Operations Manual</h1>
          <p>Your operations manual is the document that lets someone else run your business without you. Here's exactly what it must contain, how to structure it, and how to make it genuinely useful for franchisees in the field.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">
              Get Operations Manual Help — Free
            </Link>
            <Link href="/learn/how-to-guides" className="btn btn-outline-white">
              All How-To Guides
            </Link>
          </div>
        </div>
      </div>

      {/* ── What is it ── */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="section-header">
            <span className="eyebrow">The Foundation of Every Franchise</span>
            <h2>What Is a Franchise Operations Manual?</h2>
          </div>
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ lineHeight: 1.85, color: '#4a5568', fontSize: '0.97rem', marginBottom: '1.25rem' }}>
                A franchise operations manual (sometimes called the "ops manual" or "system standards manual") is the comprehensive documented guide to running your franchise business. It captures every aspect of operations — from opening procedures to customer complaint resolution — in enough detail that a new franchisee can follow it successfully without constant hand-holding from the franchisor.
              </p>
              <p style={{ lineHeight: 1.85, color: '#4a5568', fontSize: '0.97rem', marginBottom: '1.25rem' }}>
                Think of it as the source of truth for your system. It's what makes your business replicable — the document that encodes your operational knowledge and protects it from being lost when an experienced employee leaves.
              </p>
              <p style={{ lineHeight: 1.85, color: '#4a5568', fontSize: '0.97rem' }}>
                Strong operations manuals typically run <strong>300–500+ pages</strong> and take 2–4 months to develop properly. Many first-time franchisors dramatically underestimate the scope of this project.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '⭐', label: 'Source of truth for franchise operations' },
                { icon: '📖', label: 'Reduces franchisee support calls by 60–80%' },
                { icon: '🎓', label: 'The foundation of your training program' },
                { icon: '⚖️', label: 'Referenced in franchise agreement disputes' },
                { icon: '🔄', label: 'Living document — updated as you learn' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', borderRadius: '12px', padding: '1rem 1.25rem', border: '1.5px solid #e2e8f0' }}>
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <span style={{ fontWeight: 600, color: '#2d4135', fontFamily: 'Montserrat, sans-serif', fontSize: '0.93rem' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What it Contains ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Manual Structure</span>
            <h2>The 8 Core Sections of a Franchise Operations Manual</h2>
            <p>Every well-structured franchise operations manual covers these eight domains. The specific content within each section depends on your business category and operating model.</p>
          </div>
          <div className="grid-2" style={{ gap: '1.75rem' }}>
            {SECTIONS_LIST.map((section) => (
              <div key={section.num} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: '#2d4135', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#eebc4a', fontWeight: 900, fontSize: '0.85rem', fontFamily: 'Montserrat, sans-serif' }}>{section.num}</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#2d4135' }}>{section.heading}</h3>
                </div>
                <ul className="check-list">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tips ── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow-light">Best Practices</span>
            <h2 style={{ color: '#fff' }}>5 Things That Separate Great Manuals from Mediocre Ones</h2>
          </div>
          <div className="grid-2" style={{ gap: '2rem' }}>
            {[
              { title: 'Explain the Why, Not Just the What', body: 'Franchisees who understand why procedures exist make better decisions when the unusual happens. Great manuals explain the principle behind every key procedure.' },
              { title: 'Use Checklists Relentlessly', body: 'Checklists reduce variance and ensure nothing gets skipped — especially during high-stress periods like opens, rushes, and staffing transitions. Include them at every logical checkpoint.' },
              { title: 'Include Visual Guides and Photos', body: 'A photograph of a correctly set up workstation or a diagram of your customer flow is worth a thousand words. Visual documentation accelerates training and reduces interpretation errors.' },
              { title: 'Write for Your Ideal Franchisee, Not Your Best Employee', body: 'Your best employee already knows everything. Write as though your reader has competent business experience but zero knowledge of your specific industry or operation.' },
              { title: 'Plan for Regular Updates', body: 'The manual should be a living document with version control. Build a formal update process into your franchise system before you launch — stale manuals become liabilities as your operation evolves.' },
            ].map((tip) => (
              <div key={tip.title} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.75rem', border: '1.5px solid rgba(255,255,255,0.12)' }}>
                <h3 style={{ color: '#eebc4a', fontSize: '1rem', marginBottom: '0.65rem', fontFamily: 'Montserrat, sans-serif' }}>{tip.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow eyebrow-gold">Need Help Writing Your Manual?</span>
          <h2>FMS Builds Operations Manuals with You</h2>
          <p>FMS has developed 900+ franchise operations manuals across every industry. Our process captures your operational knowledge through structured interviews, observation sessions, and documentation sprints — then turns it into a manual that actually works in the field.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">Discuss Your Operations Manual</Link>
            <a href="tel:8006100292" className="btn btn-outline-white">Call 800-610-0292</a>
          </div>
        </div>
      </section>
    </>
  );
}
