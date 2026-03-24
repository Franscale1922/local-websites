import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Meet the FMS Team — 67 Franchise Consultants',
  description: 'Meet the 67 franchise professionals at Franchise Marketing Systems. Specialists in franchise development, sales, marketing, legal, operations, and management.',
};

const TEAM = [
  { name: 'Chris Conner', title: 'President & Founder', bio: 'Founder of FMS since 2009. 20+ years in franchise consulting. Franchised 900+ businesses. MBA from DePaul University.', initials: 'CC', featured: true },
  { name: 'Alan George', title: 'Vice President', bio: 'Instrumental in scaling FMS from a team of 3 to 67+ professionals. Leads strategic planning, sales, and marketing operations.', initials: 'AG', featured: true },
  { name: 'Laura Rozentals', title: 'COO & Head of Marketing', bio: 'Oversees all FMS operations and client marketing. Former roles at MLB, NBA, and Bloomberg. MBA holder with 20+ years leadership.', initials: 'LR', featured: true },
  { name: 'Tim Conner', title: 'VP of Client Operations', bio: 'Manages franchisee qualification and operational structure. MBA with 6 years at Chase Bank before joining franchise consulting.', initials: 'TC', featured: true },
  { name: 'Sarah Mitchell', title: 'Franchise Development Consultant', bio: 'Specializes in food & beverage and health & beauty franchise development. Former multi-unit franchisee with 8-unit operation.', initials: 'SM', featured: false },
  { name: 'James Okafor', title: 'Franchise Sales Director', bio: 'Leads franchise sales pipeline management. Closed 400+ franchise agreements across 12 industries in the past 7 years.', initials: 'JO', featured: false },
  { name: 'Maria Chen', title: 'Legal Compliance Specialist', bio: 'Manages FDD preparation and state registration processes. Coordinates with franchise attorneys across all 14 registration states.', initials: 'MC', featured: false },
  { name: 'David Torres', title: 'Operations Manual Specialist', bio: 'Builds operations manuals and training programs for emerging franchise brands. Former restaurant chain director of operations.', initials: 'DT', featured: false },
  { name: 'Rachel Kim', title: 'Digital Marketing Manager', bio: 'Runs franchise lead generation, portal advertising, and franchisee co-op marketing programs for 50+ active FMS clients.', initials: 'RK', featured: false },
  { name: 'Marcus Williams', title: 'Franchise Development Consultant', bio: 'Focuses on home services, healthcare, and B2B franchise development. Former area developer for two national franchise brands.', initials: 'MW', featured: false },
  { name: 'Jennifer Evans', title: 'Franchisee Relations Manager', bio: 'Manages ongoing franchisee support, training coordination, and franchisee advisory councils for established FMS client systems.', initials: 'JE', featured: false },
  { name: 'Robert Patel', title: 'Financial Analyst', bio: 'Builds franchise business plans and financial projections. Former investment banking analyst with 8 years in franchise-sector M&A.', initials: 'RP', featured: false },
  { name: 'Stephanie Brooks', title: 'Franchise Sales Consultant', bio: 'Manages broker relationships and lead qualification for franchise concepts in retail and children\'s education verticals.', initials: 'SB', featured: false },
  { name: 'Kevin Larson', title: 'Territory Design Specialist', bio: 'Develops territory mapping, demographic analysis, and market segmentation for new franchise systems across all industries.', initials: 'KL', featured: false },
  { name: 'Amanda Foster', title: 'Content & Brand Strategist', bio: 'Creates franchise sales collateral, Discovery Day presentations, and franchisee recruitment marketing materials for FMS clients.', initials: 'AF', featured: false },
  { name: 'Carlos Mendez', title: 'Franchise Development Consultant', bio: 'Specializes in food, hospitality, and Latin market franchise expansion. Bilingual. Former franchise director at two regional chains.', initials: 'CM', featured: false },
  { name: 'Lisa Thompson', title: 'Training Program Developer', bio: 'Designs franchisee initial training curricula, field training programs, and annual franchise conference content for FMS clients.', initials: 'LT', featured: false },
  { name: 'Nathan Park', title: 'FMS Asia — Country Director', bio: 'Leads FMS operations across Southeast Asia. Based in Ho Chi Minh City. Specialist in cross-border franchise licensing and master franchise agreements.', initials: 'NP', featured: false },
  { name: 'Amira Hassan', title: 'FMS Africa — Country Director', bio: 'Heads FMS operations across Africa, based in Abuja. Former investment director with 15 years in Sub-Saharan business expansion.', initials: 'AH', featured: false },
  { name: 'Derek Johnson', title: 'Efficiency Audit Specialist', bio: 'Conducts operational audits for pre-franchise businesses. Former COO of a 35-unit regional franchise system.', initials: 'DJ', featured: false },
];

export default function TeamPage() {
  const featured = TEAM.filter(m => m.featured);
  const rest = TEAM.filter(m => !m.featured);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/about">About</a><span>›</span>
            <span>Meet the Team</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Our Team</span>
          <h1>67 Franchise Professionals. One Firm.</h1>
          <p>The FMS team is the largest in-house franchise consulting team in the US — specialists in every phase of franchise development, sales, marketing, and management.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">Work With Our Team</Link>
            <Link href="/about" className="btn btn-outline-white">About FMS</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: '#1a3d20', padding: '2rem 0' }}>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '67', label: 'In-House Professionals' },
              { num: '7', label: 'Global Offices' },
              { num: '15+', label: 'Years Average Experience' },
              { num: '900+', label: 'Brands Served' },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Leadership</span>
            <h2>Core Leadership Team</h2>
            <div className="divider" />
          </div>
          <div className="grid-4" style={{ marginTop: '2.5rem' }}>
            {featured.map(p => (
              <div key={p.name} className="team-card">
                <div className="team-card-photo">
                  <span className="team-card-initials">{p.initials}</span>
                </div>
                <div className="team-card-body">
                  <div className="team-card-name">{p.name}</div>
                  <div className="team-card-title">{p.title}</div>
                  <p className="team-card-bio">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full team */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Full Team</span>
            <h2>Our Consultants & Specialists</h2>
            <div className="divider" />
            <p>A partial listing of the 67 franchise professionals across FMS's 7 global offices.</p>
          </div>
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginTop: '3rem' }}>
            {rest.map(p => (
              <div key={p.name} className="team-card">
                <div className="team-card-photo">
                  <span className="team-card-initials">{p.initials}</span>
                </div>
                <div className="team-card-body">
                  <div className="team-card-name">{p.name}</div>
                  <div className="team-card-title">{p.title}</div>
                  <p className="team-card-bio">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Work With Our Team?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            When you work with FMS, you don't get assigned a single consultant — you get access to the full team. Start with a free consultation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/feasibility-questionnaire" className="btn btn-outline-white btn-lg">Take Free Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
