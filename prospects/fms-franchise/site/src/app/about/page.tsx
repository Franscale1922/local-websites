import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About FMS — Full-Service Franchise Consulting Since 2009',
  description: 'Learn about Franchise Marketing Systems — 67 in-house consultants, 900+ brands franchised, founded 2009. The only true A-Z franchise consulting firm.',
};

const APPROACH = [
  { title: 'Strategic Planning', desc: 'We begin with a thorough franchise feasibility study, market analysis, and strategic plan tailored to your business model and growth objectives.' },
  { title: 'Franchise Consulting', desc: 'FMS structures and models your organization for replication, building a franchise model that is attractive to buyers and investors while requiring franchisor guidance.' },
  { title: 'Marketing for Franchisors', desc: 'As the only full-service franchise development firm in the market, FMS provides proven franchise executives who represent your concept to qualified buyers.' },
  { title: 'Franchise Management', desc: 'We work alongside you for as long as you need — managing discovery days, franchise conventions, training programs, and ongoing franchisee relations.' },
];

const LEADERSHIP = [
  {
    name: 'Chris Conner',
    title: 'President & Founder',
    bio: 'Founder of FMS since 2009. Over 20 years of experience in franchise consulting. Previously worked with Chicago-based firms on brands like Jimmy John\'s and Smash Burger. MBA from DePaul University. Based in Atlanta, GA.',
    initials: 'CC',
  },
  {
    name: 'Alan George',
    title: 'Vice President',
    bio: 'Instrumental in scaling FMS from a team of 3 to over 67 professionals. Leads strategic planning, sales training, and marketing operations for the firm.',
    initials: 'AG',
  },
  {
    name: 'Laura Rozentals',
    title: 'COO & Head of Marketing',
    bio: 'Oversees all FMS operations, customer experience, and client marketing. Former roles at MLB, NBA, and Bloomberg. MBA holder with 20+ years of business leadership.',
    initials: 'LR',
  },
  {
    name: 'Tim Conner',
    title: 'VP of Client Operations',
    bio: 'Handles franchisee qualification and operational structure development. MBA with 6 years at Chase Bank before joining the franchise consulting world.',
    initials: 'TC',
  },
];

const OFFICES = [
  { city: 'Atlanta, GA (HQ)', address: '6110 McFarland Station Dr, Unit 105, Alpharetta, GA 30004' },
  { city: 'Boston, MA', address: '400 Tradecenter Drive, Suite 5900, Woburn, MA 01801' },
  { city: 'Miami, FL', address: '713 Shotgun Road, Sunrise, FL 33326' },
  { city: 'Toronto, ON', address: '85 N Park Rd #612, Vaughan, ON L4J 0H9, Canada' },
  { city: 'Ho Chi Minh City', address: '41-43 Tran Cao Van Street, District 3, Vietnam' },
  { city: 'Abuja, Nigeria', address: '1473 Inner Block St, Central Business District, Abuja 900103' },
  { city: 'Barbados', address: 'Lot 2 Lower Silver Hill, Christ Church, Barbados' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#e8b736' }}>About FMS</span>
          <h1>Franchise Your Business the Right Way</h1>
          <p>FMS is the only full-service and expert franchise consulting agency in the US that offers full-scale development, marketing, consulting, management, and sales support — all under one roof.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">Take Free Questionnaire</Link>
            <Link href="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* About intro */}
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2>A Franchise Consulting Firm That Works</h2>
              <div className="divider divider-left" />
              <p style={{ marginTop: '1.25rem', color: '#4a5568', lineHeight: 1.8 }}>
                Founded in 2009 by franchise industry veteran Chris Conner, Franchise Marketing Systems (FMS) was built on a simple premise: you can franchise a business effectively and profitably without large upfront fees or high overhead.
              </p>
              <p style={{ marginTop: '1rem', color: '#4a5568', lineHeight: 1.8 }}>
                Today, FMS has grown to 67 in-house franchise professionals operating across 7 global offices. We have helped over 900 businesses develop, market, and sell their franchise concepts — and we are still growing.
              </p>
              <p style={{ marginTop: '1rem', color: '#4a5568', lineHeight: 1.8 }}>
                Our team consists of specialists in every phase of the franchise process — from Strategic Planning and Legal Documentation to Franchise Marketing and Outsourced Sales. When you work with FMS, you get the full team, not a single freelancer.
              </p>
              <div className="grid-2" style={{ marginTop: '2rem' }}>
                {[
                  { stat: '900+', label: 'Brands Franchised' },
                  { stat: '67', label: 'Team Members' },
                  { stat: '2009', label: 'Year Founded' },
                  { stat: '7', label: 'Global Offices' },
                ].map(s => (
                  <div key={s.label} style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', textAlign: 'center', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.25rem', fontWeight: 900, color: '#1a3d20', lineHeight: 1 }}>{s.stat}</div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#718096', marginTop: '0.25rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* About video */}
              <div className="video-wrapper">
                <video autoPlay muted loop playsInline>
                  <source src="https://www.fmsfranchise.com/wp-content/uploads/2024/07/video1125056416.mp4" type="video/mp4" />
                </video>
              </div>
              <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.82rem', color: '#718096' }}>Franchise Marketing Systems — Overview</p>
            </div>
          </div>
        </div>
      </section>

      {/* A-Z Approach */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">The A-Z Approach</span>
            <h2>Our Four Pillars of Franchise Success</h2>
            <div className="divider" />
            <p>Every engagement with FMS covers the complete spectrum of franchise development — we never hand you off mid-process.</p>
          </div>
          <div className="grid-2" style={{ marginTop: '2.5rem', gap: '1.5rem' }}>
            {APPROACH.map((item, i) => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #1a3d20, #3cb85e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1.1rem', fontFamily: 'Outfit, sans-serif', flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#718096', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership team preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Leadership</span>
            <h2>Meet Our Core Leadership</h2>
            <div className="divider" />
          </div>
          <div className="grid-4" style={{ marginTop: '2.5rem' }}>
            {LEADERSHIP.map(p => (
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
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/team" className="btn btn-outline-green">Meet the Full Team</Link>
          </div>
        </div>
      </section>

      {/* Global offices */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-light">
            <span className="eyebrow eyebrow-light">Global Presence</span>
            <h2 style={{ color: '#fff' }}>Our 7 Global Offices</h2>
            <div className="divider divider-gold" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
            {OFFICES.map(o => (
              <div key={o.city} className="location-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e8b736' }} />
                  <h4 style={{ color: '#e8b736', fontSize: '0.9rem' }}>{o.city}</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Franchise Your Business?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Schedule a free consultation with our expert franchise consultants. No obligation, no fees — just honest guidance.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <a href="tel:8006100292" className="btn btn-outline-white btn-lg">Call 800-610-0292</a>
          </div>
        </div>
      </section>
    </>
  );
}
