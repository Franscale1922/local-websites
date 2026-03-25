import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Clients — 900+ Brands Franchised by FMS',
  description: 'FMS has helped 900+ business owners franchise their concept across every major industry. Explore our client portfolio and verified case studies.',
};

const ALL_CLIENTS = [
  '1-800-Dry-Cleans', '1-800-GOT-JUNK', 'ActionCOACH', 'AcuPoints', 'Anytime Fitness',
  'ATAX', 'BELFOR', 'Bin There Dump That', 'BioGreen Sciences', 'Bloomin\' Blinds',
  'Blue Mint Thai', 'BrightPath Kids', 'BrightSpring', 'Brightway Insurance', 'Budget Blinds',
  'Camp Bow Wow', 'ChemDry', 'ClearDent', 'Co/LAB Lending', 'College Hunks',
  'Command Clean', 'Coverall', 'Craft House Pizza', 'Discovery Map', 'DreamMaker',
  'Drive495', 'Fetch Pet Care', 'Fibrenew', 'Floor Coverings International', 'Foxtail Coffee',
  'Fresh & Co', 'Garage Experts', 'Get Up & Go Kayak', 'GreenWave Solar', 'Ground Guys',
  'Healthy YOU Vending', 'Home Watch Caregivers', 'HomePoint', 'HomeSpec', 'Image One',
  'Intelligent Office', 'iSpy Photo Booth', 'Jan-Pro', 'Junk King', 'Kitchen Saver',
  'Kitchen Tune-Up', 'Lawn Doctor', 'Lice Clinics', 'Mathnasium', 'Men in Kilts',
  'Mosquito Joe', 'Moxie Pest Control', 'Mr. Appliance', 'N-Hance Wood Refinishing', 'NuFusion Studios',
  'OpenWorks', 'Paul Davis Restoration', 'Peak Performance', 'Pet Supplies Plus', 'Pinot\'s Palette',
  'Premier Pool Service', 'Primrose Schools', 'ProCare Therapy', 'Proforma', 'PuroClean',
  'Rainbow Restoration', 'RCS Disaster Restoration', 'Re-Bath', 'Remediation Group', 'Rent The Chicken',
  'Right at Home', 'RocketShelf', 'Sacred Leaf CBD', 'Schooley Mitchell', 'Screenmobile',
  'Senior Helpers', 'SERVPRO', 'ServiceMaster Restore', 'Signal Advance', 'SkillBridge',
  'Snapology', 'Soccer Shots', 'Sodie Doces', 'Summit Roofing', 'TechServ Pro',
  'The Cleaning Authority', 'The Maids', 'The Salty Dog', 'Turquoise Wine Bar', 'Two Men and a Truck',
  'Voda Restoration', 'Wag Hotels', 'Wealth Generals', 'Wild Birds Unlimited', 'Zerorez',
];

export default function OurClientsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Our Clients</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Our Portfolio</span>
          <h1>900+ Brands Trust FMS</h1>
          <p>From single-unit operators to multi-million dollar concepts, FMS has helped businesses across every industry build successful, scalable franchise systems.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/case-studies" className="btn btn-gold">View Case Studies</Link>
            <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
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
              { num: '10', label: 'Industry Verticals' },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study callout */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Featured Case Studies</span>
            <h2>Beyond Logos — Real Results</h2>
            <div className="divider" />
            <p>Every logo in our portfolio represents a business owner who trusted FMS with something they built. Here are three with verified, quantified outcomes.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
            {[
              { brand: 'Foxtail Coffee', industry: 'Food & Beverage', metric: '12 locations', label: 'Signed Year 1', desc: 'Single specialty café grew to multi-unit franchise system with 98% customer satisfaction maintained across all units.' },
              { brand: 'Voda Restoration', industry: 'Home Services', metric: '8 franchisees', label: '18 Months', desc: 'Owner went from solo operator to 8-unit franchise network with fully hands-off corporate structure.' },
              { brand: 'Sacred Leaf CBD', industry: 'Retail', metric: '45+ units', label: 'Zero Litigation', desc: 'Premium CBD brand scaled nationally with full regulatory compliance in all 14 franchise registration states.' },
            ].map(cs => (
              <div key={cs.brand} style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', padding: '1.5rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 900, color: '#e8b736', lineHeight: 1 }}>{cs.metric}</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'rgba(255,255,255,0.55)', marginTop: '0.2rem' }}>{cs.label}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem' }}>{cs.brand}</div>
                    <div style={{ fontSize: '0.7rem', background: 'rgba(60,184,94,0.2)', color: '#3cb85e', padding: '0.15rem 0.6rem', borderRadius: '999px', marginTop: '0.3rem', display: 'inline-block', fontWeight: 700 }}>{cs.industry}</div>
                  </div>
                </div>
                <div style={{ padding: '1.25rem 1.75rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.65 }}>{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/case-studies" className="btn btn-outline-green btn-lg">View Full Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Portfolio</span>
            <h2>The FMS Client Network</h2>
            <div className="divider" />
            <p>A partial selection of the 900+ brands in the FMS portfolio. Every name represents a business owner who chose to scale through franchising.</p>
          </div>
          <div className="client-logos" style={{ marginTop: '2.5rem' }}>
            {ALL_CLIENTS.map(c => (
              <div key={c} className="client-logo-pill">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Add Your Brand to This List?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            The first step is a free feasibility assessment. Find out if your business model has what it takes to franchise.
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
