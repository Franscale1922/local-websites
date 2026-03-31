import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Bookkeeping & Accounting Support | FMS Franchise',
  description: 'Expert franchise bookkeeping: royalty tracking, multi-unit financial reporting, payroll, accounts payable, and tax preparation support. Led by Karina Miranda with 12+ years franchise finance experience.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/services/franchise-bookkeeping-support',
  },
  openGraph: {
    title: 'Franchise Bookkeeping & Accounting Support | FMS Franchise',
    description: 'Expert franchise bookkeeping and accounting support: royalty tracking, multi-unit reporting, payroll, and tax preparation. 12+ years franchise-specific expertise.',
    url: 'https://www.fmsfranchise.com/services/franchise-bookkeeping-support',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'FMS Franchise Bookkeeping and Accounting Support' }],
  },
};

const SERVICES = [
  { icon: '📒', title: 'Financial Transaction Recording', desc: 'Accurate, up-to-date recording of every financial transaction across your franchise operations — so your books are always current and audit-ready.' },
  { icon: '🏦', title: 'Bank Statement Reconciliation', desc: 'Monthly reconciliation of all bank accounts, credit cards, and merchant accounts to ensure every transaction is accurately captured and categorized.' },
  { icon: '📊', title: 'Financial Reporting', desc: 'Monthly P&L statements, balance sheets, and cash flow reports — giving you the clear financial picture needed to make data-driven decisions.' },
  { icon: '💳', title: 'Accounts Payable & Receivable', desc: 'Managing bills, vendor payments, and accounts receivable — keeping your franchisee network financially organized and vendor relationships healthy.' },
  { icon: '👥', title: 'Payroll Processing', desc: 'Accurate, on-time payroll processing for your franchise corporate team — with full compliance tracking and reporting for federal, state, and local requirements.' },
  { icon: '📈', title: 'Royalty Tracking & Reporting', desc: 'Franchise royalty collection tracking, royalty reports by franchisee, and marketing fund accounting — the financial backbone of your franchise system.' },
  { icon: '🏪', title: 'Multi-Unit Financial Reporting', desc: 'Consolidated financial reporting across multiple franchise units — benchmarking performance and identifying both top performers and units that need support.' },
  { icon: '📋', title: 'Tax Preparation Support', desc: 'Year-end financial preparation and coordination with your CPA or tax advisor — ensuring all documentation is complete, organized, and ready for tax filing.' },
];

const WHY = [
  { title: '12+ Years Franchise Experience', desc: 'Karina Miranda, FMS\'s head franchise bookkeeper, brings over 12 years of franchise-specific bookkeeping expertise — spanning development, training, territory management, and financial growth.' },
  { title: 'Franchise-Specific Expertise', desc: 'We understand royalty structures, marketing fund accounting, multi-unit financial reporting, and the unique financial complexity of operating a franchise system.' },
  { title: 'Full-Lifecycle Support', desc: 'From startup franchisor with 3 units to established system with 100+ — FMS provides bookkeeping support at every stage, growing with your brand.' },
  { title: 'Real-Time Communication', desc: 'Constant communication so you always understand your numbers, what they mean, how you stand, and the financial health and growth potential of your business.' },
];

export default function FranchiseBookkeepingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/services">Services</Link>
            <span>›</span>
            <span>Franchise Bookkeeping Support</span>
          </div>
          <span className="eyebrow">FMS Services</span>
          <h1>Franchise Bookkeeping & Accounting Support</h1>
          <p style={{ maxWidth: '680px' }}>
            Expert franchise bookkeeping services that keep your numbers clean, your royalties tracked, and your financial reporting accurate — so you can focus on growing your system, not managing your books.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Consultation</a>
            <Link href="/services" className="btn btn-outline btn-lg">All Services</Link>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Bookkeeping Services</span>
            <h2>Franchise Financial Services We Provide</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert spotlight */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '960px', margin: '0 auto' }}>
            <div>
              <span className="eyebrow">Meet Your Expert</span>
              <h2 style={{ marginBottom: '1rem' }}>Karina Miranda</h2>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#c8a84b', marginBottom: '1rem' }}>Franchise Bookkeeping Expert · Jacksonville, FL</p>
              <p style={{ lineHeight: 1.8, color: '#4a5568', marginBottom: '1.25rem' }}>
                Karina brings over 12 years of franchise bookkeeping experience to the FMS team. She has worn several hats in the franchise world — executive assistant, trainer, bookkeeper, territory development, and franchise development — and has been a part of the growth of multiple franchises.
              </p>
              <p style={{ lineHeight: 1.8, color: '#718096' }}>
                Karina provides guidance through the whole lifespan of her clients, maintaining constant communication so all clients understand their numbers, what they mean, how they stand, and the financial health and potential of their business. She understands that no one business owner is the same and keeps that in mind with her unique approach.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {WHY.map(w => (
                <div key={w.title} style={{ background: '#f8f8f6', borderRadius: '14px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>{w.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#718096', lineHeight: 1.65 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Get Your Franchise Books in Order</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Expert franchise bookkeeping so you can focus on growing your brand — not sorting through receipts and bank statements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Consultation</a>
            <Link href="/services" className="btn btn-outline-white btn-lg">All FMS Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
