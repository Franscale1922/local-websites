import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Business Plans — Financial Modeling for Franchisors | FMS',
  description: 'FMS creates investor-ready franchise business plans with unit economics modeling, 5-year projections, and FDD-compatible financial disclosures. Built from 900+ real franchise systems.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/services/franchise-business-plans',
  },
  openGraph: {
    title: 'Franchise Business Plans | FMS Franchise Marketing Systems',
    description: 'Investor-ready franchise business plans with unit economics modeling and 5-year projections. Built from 900+ real franchise systems.',
    url: 'https://www.fmsfranchise.com/services/franchise-business-plans',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'FMS Franchise Business Plans' }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.fmsfranchise.com/services/franchise-business-plans#service',
  name: 'Franchise Business Plans',
  serviceType: 'Franchise Business Planning',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.fmsfranchise.com/#organization',
    name: 'Franchise Marketing Systems',
  },
  description: 'Professional franchise business plans with unit economics modeling, 5-year financial projections, market analysis, competitive landscape, and investor-ready formatting. FDD-compatible financial disclosures built from 900+ franchise system data.',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://www.fmsfranchise.com/services/franchise-business-plans',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fmsfranchise.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.fmsfranchise.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Franchise Business Plans' },
  ],
};

export default function FranchiseBusinessPlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/services">Services</a><span>›</span>
            <span>Franchise Business Plan</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Service</span>
          <h1>Franchise Business Plan</h1>
          <p>A professionally structured business plan isn't just a document — it's your primary tool for convincing qualified franchisees, investors, and lenders that your concept is worth backing.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Free Consultation</Link>
            <Link href="/feasibility-questionnaire" className="btn btn-outline-white">Take Free Assessment</Link>
          </div>
        </div>
      </div>

      {/* Problem */}
      <section className="section section-alt">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">The Problem</span>
              <h2>A Weak Business Plan Kills Franchise Deals Before They Start</h2>
              <div className="divider divider-left" />
              <p style={{ marginTop: '1.25rem', color: '#4a5568', lineHeight: 1.8 }}>
                When a serious franchise buyer is evaluating your opportunity, their accountant, attorney, and spouse will all review your financial projections. An unrealistic pro forma — or the absence of one — kills deals.
              </p>
              <p style={{ marginTop: '1rem', color: '#4a5568', lineHeight: 1.8 }}>
                FMS builds franchise business plans with the financial rigor that sophisticated buyers expect: actual unit economics, realistic break-even timelines, and franchisor revenue models based on current royalty data from comparable systems.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3cb85e', marginBottom: '1.5rem' }}>Your Plan Includes</div>
              {['Executive Summary', 'Market Analysis & Opportunity', 'Franchise Model Overview', 'Unit Economics & Break-Even', '5-Year Financial Projections', 'Franchisee Investment Breakdown', 'Competitive Landscape Analysis', 'Growth & Expansion Roadmap', 'Franchise System Revenue Model'].map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.7rem 0', borderBottom: i < 8 ? '1px solid #f0f0f0' : 'none' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1a3d20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: '#fff', fontWeight: 900, flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Approach</span>
            <h2>Built on Real Franchise Data</h2>
            <div className="divider" />
            <p>FMS has access to unit economics data from 900+ franchise systems across every major industry vertical. Your business plan is benchmarked against what actually works, not optimistic assumptions.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
            {[
              { title: 'Data-Driven Projections', desc: 'Your financial projections are built from comparable FMS client data — not inflated assumptions. Buyers and their advisors can verify the assumptions.' },
              { title: 'Investor-Ready Format', desc: 'Formatted for presentation to Private Equity, SBA lenders, and sophisticated franchise buyer advisors. Not a Word doc template — a professional financial model.' },
              { title: 'FDD-Compatible', desc: 'Your business plan is developed in tandem with your FDD so financial disclosures are consistent — protecting you legally while building buyer confidence.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(60,184,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1rem' }}>📊</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need a Business Plan That Will Close Deals?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Our franchise business plans are built to the standard serious buyers, their accountants, and their attorneys expect. Let's build yours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
