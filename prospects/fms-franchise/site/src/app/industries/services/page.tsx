import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Consulting for Service Businesses | FMS Franchise',
  description: 'FMS helps service-based businesses franchise successfully. Staffing, cleaning, B2B consulting, printing, senior care, and more — we\'ve franchised 900+ service brands over 25 years.',
};

const NICHES = [
  { icon: '🧹', title: 'Cleaning & Janitorial', desc: 'Residential and commercial cleaning franchises with proven recurring revenue models and territory structures.' },
  { icon: '👴', title: 'Senior Care & Home Health', desc: 'Non-medical and skilled care franchises — one of the fastest-growing categories driven by aging demographics.' },
  { icon: '👔', title: 'Staffing & Recruitment', desc: 'Temporary staffing, executive search, and specialized recruiting franchise concepts across industries.' },
  { icon: '🖨️', title: 'Printing & Signage', desc: 'Commercial printing, promotional products, and signage franchise concepts with strong B2B recurring revenue.' },
  { icon: '💼', title: 'Business Consulting', desc: 'Tax services, accounting, HR consulting, and business coaching — high-margin, low-overhead franchises.' },
  { icon: '🔧', title: 'Restoration & Remediation', desc: 'Water damage, fire restoration, and mold remediation — insurance-based revenue models with strong unit economics.' },
  { icon: '🔒', title: 'Security & Surveillance', desc: 'Alarm monitoring, installation, and security system franchises with strong recurring revenue streams.' },
  { icon: '🌟', title: 'Professional Services', desc: 'Legal document preparation, marketing services, IT support, and other white-collar franchise categories.' },
];

const WHY_SERVICE = [
  { title: 'Lower Startup Costs', body: 'Most service franchises require significantly less upfront investment than retail or food concepts — often under $100K all-in.' },
  { title: 'Recurring Revenue', body: 'Service businesses often generate subscription-style recurring revenue — predictable, compounding royalty income for franchisors.' },
  { title: 'Systemizable at Scale', body: 'Service delivery processes are easier to document and train on than product-based concepts — reducing franchisee learning curves.' },
  { title: 'Resilient in Downturns', body: 'Essential services (cleaning, senior care, restoration) tend to be recession-resistant, making the franchise system more durable.' },
];

export default function ServicesIndustryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Service Businesses</span>
          </div>
          <span className="eyebrow" style={{ color: '#eebc4a' }}>Industry Specialization</span>
          <h1>Franchise Consulting for Service-Based Businesses</h1>
          <p>Service businesses are among the most successful franchise models — lower capital requirements, systemizable operations, and recurring revenue. FMS has franchised 900+ brands across every service category.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">
              Get Your Free Consultation
            </Link>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline-white">
              Take the Feasibility Quiz
            </Link>
          </div>
        </div>
      </div>

      {/* ── Why service franchises ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Service Franchises Win</span>
            <h2>The Structural Advantages of Service-Based Franchising</h2>
            <p>Service businesses aren't just franchise-friendly — they're often the ideal franchise model. Here's why.</p>
          </div>
          <div className="grid-2" style={{ gap: '2rem' }}>
            {WHY_SERVICE.map((item) => (
              <div key={item.title} className="card" style={{ padding: '2rem 2.25rem', borderLeft: '4px solid #35a84a' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.65rem', color: '#2d4135' }}>{item.title}</h3>
                <p style={{ color: '#4a5568', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Niches ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Service Categories We Franchise</span>
            <h2>Service Businesses We've Taken to Franchise</h2>
            <p>From cleaning companies to B2B consulting, FMS has built franchise systems across every service vertical.</p>
          </div>
          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {NICHES.map((niche) => (
              <div key={niche.title} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{niche.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.6rem', color: '#2d4135' }}>{niche.title}</h3>
                <p style={{ color: '#4a5568', fontSize: '0.87rem', lineHeight: 1.65, margin: 0 }}>{niche.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The FMS Process ── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow-light">Our Process</span>
            <h2 style={{ color: '#fff' }}>How FMS Franchises a Service Business</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)' }}>We've refined our franchise development process over 25 years and 900+ brands. Here's how it works.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem', marginTop: '1rem' }}>
            {[
              { step: '01', title: 'Feasibility Analysis', body: 'We assess your service model\'s replicability, unit economics, market size, and competitive differentiation.' },
              { step: '02', title: 'Franchise Structure Design', body: 'We design territory structures, royalty models, franchise fee levels, and the franchisee profile that fits your concept.' },
              { step: '03', title: 'Legal Documentation', body: 'Our legal partners prepare your FDD and Franchise Agreement to FTC standards and state registration requirements.' },
              { step: '04', title: 'Operations Manual', body: 'We document every aspect of your service delivery into a comprehensive operations manual franchisees can follow.' },
              { step: '05', title: 'Training Program', body: 'We build initial training programs covering your service methodology, technology, and operational systems.' },
              { step: '06', title: 'Franchise Sales', body: 'Our team markets your franchise opportunity and manages the full franchise sales pipeline through signed agreements.' },
            ].map((p) => (
              <div key={p.step} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.75rem', border: '1.5px solid rgba(255,255,255,0.12)' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#eebc4a', fontFamily: 'Montserrat, sans-serif', marginBottom: '0.65rem' }}>{p.step}</div>
                <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-4" style={{ gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '900+', label: 'Service Brands Franchised' },
              { num: '25+', label: 'Years in Franchise Development' },
              { num: '67', label: 'FMS Team Members' },
              { num: '20+', label: 'Franchise Consultants' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#35a84a', fontFamily: 'Montserrat, sans-serif', lineHeight: 1 }}>{stat.num}</div>
                <div style={{ color: '#4a5568', fontSize: '0.9rem', marginTop: '0.5rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse Other Industries ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">All Industries</span>
            <h2>Explore Other Industry Specializations</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {[
              { label: 'Health & Beauty', href: '/industries/health-beauty' },
              { label: 'Children', href: '/industries/children' },
              { label: 'Food & Beverage', href: '/industries/food-beverage' },
              { label: 'Retail', href: '/industries/retail' },
              { label: 'Real Estate', href: '/industries/real-estate' },
              { label: 'Automotive', href: '/industries/automotive' },
              { label: 'Home-Based', href: '/industries/home-based' },
              { label: 'Education', href: '/industries/education' },
              { label: 'Healthcare', href: '/industries/healthcare' },
              { label: 'Home Services', href: '/industries/home-services' },
            ].map((ind) => (
              <Link key={ind.href} href={ind.href} className="btn btn-outline">
                {ind.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow eyebrow-gold">Is Your Service Business Franchise-Ready?</span>
          <h2>Find Out in a Free Consultation</h2>
          <p>Talk directly with an FMS franchise strategist who specializes in service-based concepts. No obligation, no sales pressure — just clarity on whether and how to franchise your business.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">Get My Free Consultation</Link>
            <a href="tel:8006100292" className="btn btn-outline-white">Call 800-610-0292</a>
          </div>
        </div>
      </section>
    </>
  );
}
