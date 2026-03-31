import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Meet the Team | Expert Franchise Consultants | FMS Franchise',
  description: 'Meet the team of expert franchise consultants dedicated to helping you succeed in your franchise journey with personalized support and guidance.',
};

const LEADERSHIP = [
  {
    name: 'Chris Conner',
    title: 'President & Founder',
    location: 'Atlanta, GA',
    bio: 'Chris has been a franchise consultant working with business owners and brands to support growth through franchising since 2001. He founded Franchise Marketing Systems (FMS) in Atlanta in 2009, delivering full-service franchise development to new and existing franchisors. Today, Mr. Conner oversees the FMS team and works directly with clients globally. FMS has developed over 900+ franchise brands since 2009.',
    anchor: 'chris-conner',
  },
  {
    name: 'Alan George',
    title: 'Vice President',
    location: 'Atlanta, GA',
    bio: 'Alan brings extensive franchise development experience to the FMS team, working with brands across a wide variety of industries to build scalable franchise systems and execute growth strategies.',
    anchor: 'ALAN-GEORGE',
  },
  {
    name: 'Laura Rozentals',
    title: 'Chief Operating Officer',
    location: 'Atlanta, GA',
    bio: 'Laura serves as COO and Head of Client Marketing and Communications, overseeing operational excellence and ensuring every client receives the highest level of service and brand execution across the FMS team.',
    anchor: 'LAURA-ROZENTALS',
  },
  {
    name: 'Tim Conner',
    title: 'VP of Client Operations',
    location: 'Atlanta, GA',
    bio: 'Tim oversees client operations and project management for the FMS team, ensuring that franchise development projects are delivered on time, on budget, and to the highest standard.',
    anchor: 'TIM-CONNER',
  },
  {
    name: 'Sean Callaway',
    title: 'Franchise Strategic Planning',
    location: 'Atlanta, GA',
    bio: 'Sean specializes in franchise strategic planning, working with brands to build the systems, structures, and growth roadmaps needed to scale through franchising successfully.',
    anchor: 'SEAN-CALLAWAY',
  },
  {
    name: 'Zac Bletz',
    title: 'Senior Franchise Consultant',
    location: 'Atlanta, GA',
    bio: 'Zac brings deep franchise system expertise to client brands, working across development, sales, and operational strategy to help businesses transition from single-unit concepts to scalable franchise systems.',
    anchor: 'ZAC-BLETZ',
  },
];

const CONSULTANTS = [
  { name: 'Gregg Rondinelli', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Jeremy Norfus', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Will Nicoloso', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Sidney Lee', title: 'Franchise Operations Support', location: 'Atlanta, GA' },
  { name: 'Kimberly Moody', title: 'Franchise Consultant', location: 'Gloucester, VA' },
  { name: 'Paul Reisner', title: 'Franchise Consultant — Marketing & Sales', location: 'New York, NY' },
  { name: 'Shelley Berman', title: 'Director of Canada', location: 'Canada' },
  { name: 'Scott McCarthy', title: 'Director of Canada', location: 'Canada' },
  { name: 'Nick Avena', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Bobby DelVecchio', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Asha Morales', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Paul Wile', title: 'Franchise Consultant — Marketing & Sales', location: 'Atlanta, GA' },
  { name: 'Brent Foster, CFC', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Mary Phillips', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Yeliv Jill Adams', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Keith Bunch', title: 'Franchise Strategic Planning', location: 'Atlanta, GA' },
  { name: 'Kyle Kjersee', title: 'Franchise Consultant', location: 'Denver, CO' },
  { name: 'Ryan Sullivan', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Michelle White', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Trisha Conner', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'Anthony Feola', title: 'Franchise Consultant', location: 'Atlanta, GA' },
  { name: 'David Gullotti', title: 'Franchise Operations', location: 'Atlanta, GA' },
  { name: 'DeShawn Marks', title: 'Franchise Operations', location: 'Atlanta, GA' },
  { name: 'Vincent Infante', title: 'Franchise Management Consultant', location: 'Atlanta, GA' },
  { name: 'Robb Harvey', title: 'Franchise Operations Consultant', location: 'Atlanta, GA' },
  { name: 'John Naylor', title: 'Franchise Operations Support', location: 'Atlanta, GA' },
];

const SUPPORT_TEAM = [
  { name: 'Karina Miranda', title: 'Franchise Bookkeeping Expert', location: 'Jacksonville, FL' },
  { name: 'Jacklyn Renz', title: 'Marketing Team Manager', location: 'Atlanta, GA' },
  { name: 'Ashton Wiles', title: 'Project Manager', location: 'Atlanta, GA' },
  { name: 'Julie Arlt', title: 'Design Team Project Manager', location: 'Atlanta, GA' },
  { name: 'Kaitlin Eileen', title: 'Graphic Designer & Ad Strategist', location: 'Atlanta, GA' },
  { name: 'Noah Cunningham', title: 'Virtual Designer', location: 'Augusta, GA' },
  { name: 'Nathan Schmidt', title: 'Graphic Designer & Photographer', location: 'Atlanta, GA' },
  { name: 'Erik Carlson', title: 'Franchise Videographer & Photographer', location: 'Atlanta, GA' },
  { name: 'Abi Swanson', title: 'Social Media Manager', location: 'Atlanta, GA' },
  { name: 'Charles White', title: 'Digital Marketing Manager', location: 'Atlanta, GA' },
  { name: 'Grace Haberman', title: 'Content Design & Marketing', location: 'Atlanta, GA' },
  { name: 'Rebekkah Nolan', title: 'Finance & Operations', location: 'Atlanta, GA' },
  { name: 'Cindy Back', title: 'CRM Administrator', location: 'Atlanta, GA' },
  { name: 'Ciarha Grace Santos', title: 'Client Technology & CRM Manager', location: 'Atlanta, GA' },
  { name: 'Karen Garimbao', title: 'Vendor Sourcing', location: 'Atlanta, GA' },
  { name: 'Mohanad Amari', title: 'Webmaster', location: 'Atlanta, GA' },
  { name: 'Steven J. Seibert', title: 'Franchise Insurance & Funding Specialist', location: 'Atlanta, GA' },
];

function initials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function avatarColor(name: string): string {
  const colors = ['#2d4135', '#1a3d5c', '#4a7c59', '#0d2b4e', '#2c5f3a', '#1e4a6e'];
  const idx = name.charCodeAt(0) % colors.length;
  return colors[idx];
}

export default function MeetTheTeamPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/about-us">About</Link>
            <span>›</span>
            <span>Meet the Team</span>
          </div>
          <span className="eyebrow">Our Team</span>
          <h1>Meet the Expert Franchise Consultants at FMS</h1>
          <p style={{ maxWidth: '680px' }}>
            67 franchise experts. One unified mission — to turn your successful business into a scalable franchise system. Our team covers every discipline: development strategy, legal, marketing, operations, sales, and technology.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Meet Your Consultant</a>
            <Link href="/about-us/leadership" className="btn btn-outline btn-lg">Executive Leadership</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: '#2d4135', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { n: '67', l: 'Team members globally' },
              { n: '20+', l: 'Franchise consultants' },
              { n: '15+', l: 'Support specialists' },
              { n: '900+', l: 'Brands franchised' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', fontWeight: 900, color: '#c8a84b', lineHeight: 1 }}>{s.n}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.4rem' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Senior Leadership</span>
            <h2>The Team That Leads FMS</h2>
            <div className="divider" />
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {LEADERSHIP.map(p => (
              <div key={p.name} id={p.anchor} style={{ background: '#fff', borderRadius: '20px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '64px', height: '64px', borderRadius: '50%', background: avatarColor(p.name), display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: '#fff', fontSize: '1.2rem' }}>{initials(p.name)}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', fontFamily: 'Montserrat, sans-serif' }}>{p.name}</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#c8a84b', marginBottom: '0.25rem' }}>{p.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.75rem' }}>📍 {p.location}</div>
                  <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.7 }}>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Franchise Consultants</span>
            <h2>Our Nationwide Consultant Network</h2>
            <div className="divider" />
            <p>FMS franchise consultants are located throughout the United States and Canada, providing local expertise with global franchise development resources.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginTop: '3rem' }}>
            {CONSULTANTS.map(c => (
              <div key={c.name} style={{ background: '#fff', borderRadius: '14px', padding: '1.25rem 1.5rem', border: '1.5px solid #e2e8f0', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '50%', background: avatarColor(c.name), display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{initials(c.name)}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{c.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#718096' }}>{c.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#9ca3af' }}>📍 {c.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support team */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Support Team</span>
            <h2>Marketing, Operations & Technology</h2>
            <div className="divider" />
            <p>Behind every client engagement is a full support team spanning design, digital marketing, CRM, bookkeeping, operations, and technology.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginTop: '3rem' }}>
            {SUPPORT_TEAM.map(c => (
              <div key={c.name} style={{ background: '#fff', borderRadius: '14px', padding: '1.25rem 1.5rem', border: '1.5px solid #e2e8f0', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '50%', background: avatarColor(c.name), display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{initials(c.name)}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{c.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#718096' }}>{c.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#9ca3af' }}>📍 {c.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Work With Our Team</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            67 experts. One goal. Helping you turn your business into a scalable franchise system. Get matched with the right consultant for your industry and stage.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Schedule Free Consultation</a>
            <Link href="/about-us" className="btn btn-outline-white btn-lg">About FMS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
