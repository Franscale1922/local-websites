'use client';

import { useState } from 'react';
import Link from 'next/link';

const CLIENTS: { name: string; industry: string }[] = [
  { name: "Stella's Ice Cream", industry: 'Food & Beverage' },
  { name: "Chaiiwala of London", industry: 'Food & Beverage' },
  { name: "Oggi's Brewhouse", industry: 'Food & Beverage' },
  { name: "Kelly's Ice Cream", industry: 'Food & Beverage' },
  { name: "Poke House", industry: 'Food & Beverage' },
  { name: "Mr. Jim's Pizza", industry: 'Food & Beverage' },
  { name: "Marco's Pizza", industry: 'Food & Beverage' },
  { name: "Smashburger", industry: 'Food & Beverage' },
  { name: "Jimmy John's", industry: 'Food & Beverage' },
  { name: "Tropical Smoothie Cafe", industry: 'Food & Beverage' },
  { name: "MF Gyros", industry: 'Food & Beverage' },
  { name: "Bagel Hole", industry: 'Food & Beverage' },
  { name: "Quaker Steak & Lube", industry: 'Food & Beverage' },
  { name: "Culver's", industry: 'Food & Beverage' },
  { name: "Impresa Modular Home Building", industry: 'Home Services' },
  { name: "Spartan Floor Coatings", industry: 'Home Services' },
  { name: "Green Home Solutions", industry: 'Home Services' },
  { name: "Clean Air Lawn Care", industry: 'Home Services' },
  { name: "Restoration 1", industry: 'Home Services' },
  { name: "911 Restoration", industry: 'Home Services' },
  { name: "Budget Blinds", industry: 'Home Services' },
  { name: "Two Men and a Truck", industry: 'Home Services' },
  { name: "ActionCOACH", industry: 'Business Services' },
  { name: "Soccer Post", industry: 'Business Services' },
  { name: "Schooley Mitchell", industry: 'Business Services' },
  { name: "Mad Science Group", industry: 'Business Services' },
  { name: "Smash My Trash", industry: 'Business Services' },
  { name: "Royal Pet Bakery and Grooming", industry: 'Pet Services' },
  { name: "Dogtopia", industry: 'Pet Services' },
  { name: "Camp Bow Wow", industry: 'Pet Services' },
  { name: "Homewatch CareGivers", industry: 'Health & Wellness' },
  { name: "ComForCare", industry: 'Health & Wellness' },
  { name: "Right at Home", industry: 'Health & Wellness' },
  { name: "Visiting Angels", industry: 'Health & Wellness' },
  { name: "Pure Barre", industry: 'Health & Wellness' },
  { name: "GYMGUYZ", industry: 'Health & Wellness' },
  { name: "Orangetheory Fitness", industry: 'Health & Wellness' },
  { name: "Anytime Fitness", industry: 'Health & Wellness' },
  { name: "Safe Splash Swim School", industry: 'Education' },
  { name: "Kumon", industry: 'Education' },
  { name: "Mathnasium", industry: 'Education' },
  { name: "Sylvan Learning", industry: 'Education' },
  { name: "Goddard School", industry: 'Education' },
  { name: "The Learning Experience", industry: 'Education' },
  { name: "Kiddie Academy", industry: 'Education' },
  { name: "Tippi Toes Dance", industry: 'Education' },
  { name: "Sola Salon Studios", industry: 'Beauty & Personal Care' },
  { name: "European Wax Center", industry: 'Beauty & Personal Care' },
  { name: "Blimpie", industry: 'Food & Beverage' },
  { name: "Hungry Howie's Pizza", industry: 'Food & Beverage' },
  { name: "Baxter Healthcare", industry: 'Health & Wellness' },
];

const INDUSTRIES = ['All', 'Food & Beverage', 'Home Services', 'Health & Wellness', 'Education', 'Business Services', 'Pet Services', 'Beauty & Personal Care'];

const INDUSTRY_COLORS: Record<string, string> = {
  'Food & Beverage': '#e8b736',
  'Home Services': '#4a7c59',
  'Health & Wellness': '#3cb85e',
  'Education': '#5b8dee',
  'Business Services': '#8b5cf6',
  'Pet Services': '#f59e0b',
  'Beauty & Personal Care': '#ec4899',
};

export default function OurClientsClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? CLIENTS : CLIENTS.filter(c => c.industry === activeFilter);

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a3a1c 0%, #2c4a2e 60%, #3a5e3c 100%)', paddingTop: '120px', paddingBottom: '5rem', textAlign: 'center' }}>
        <div className="container">
          <nav style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</a>
            <span>›</span>
            <span style={{ color: '#c8a84b' }}>Our Clients</span>
          </nav>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>
            FRANCHISE SUCCESS STORIES
          </span>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Discover Our Clients and Their Franchise Success Stories
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '680px', margin: '0 auto 2rem' }}>
            Franchise Marketing Systems has helped over 700 businesses thrive in the franchise industry across every sector — from food service to healthcare to education.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" className="btn btn-gold">Start Your Franchise Journey</Link>
            <Link href="/our-clients/testimonials" className="btn btn-outline-white">Read Testimonials</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#1e2d24', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '700+', label: 'Brands Franchised' },
              { num: '1,500+', label: 'Total Deals Closed' },
              { num: '50+', label: 'Industries Served' },
              { num: 'Since 2009', label: 'In Business' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#c8a84b' }}>{s.num}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.35rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-nav */}
      <section style={{ background: '#f8f8f6', borderBottom: '1px solid #e0e8e2', padding: '0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto' }}>
            {[
              { label: 'Our Clients', href: '/our-clients', active: true },
              { label: 'Case Studies', href: '/case-studies', active: false },
              { label: 'Testimonials', href: '/our-clients/testimonials', active: false },
            ].map(tab => (
              <Link key={tab.label} href={tab.href} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: tab.active ? 700 : 600, fontSize: '0.85rem', color: tab.active ? '#2c4a2e' : '#888', textDecoration: 'none', padding: '1rem 0', borderBottom: tab.active ? '2.5px solid #c8a84b' : '2.5px solid transparent', whiteSpace: 'nowrap', display: 'block' }}>
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + Filter + Grid */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '1.05rem', color: '#555', lineHeight: 1.8, maxWidth: '800px', marginBottom: '3rem' }}>
            Franchise Marketing Systems has taken over 700 businesses and helped them grow through franchising, with a dedicated focus on helping emerging and established franchise brands develop and expand. We work with clients in all industries — Service, Retail, Food Service, and Product Distribution.
          </p>

          {/* Industry filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {INDUSTRIES.map(ind => (
              <button
                key={ind}
                onClick={() => setActiveFilter(ind)}
                style={{ padding: '0.5rem 1.1rem', borderRadius: '24px', border: '1.5px solid', borderColor: activeFilter === ind ? '#2c4a2e' : '#d1d9d3', background: activeFilter === ind ? '#2c4a2e' : '#fff', color: activeFilter === ind ? '#fff' : '#4a7c59', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', transition: 'all 0.18s' }}
              >
                {ind}
                {ind !== 'All' && (
                  <span style={{ marginLeft: '0.4rem', opacity: 0.65, fontSize: '0.72rem' }}>
                    ({CLIENTS.filter(c => c.industry === ind).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: '#888', fontWeight: 600, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Showing {filtered.length} {activeFilter !== 'All' ? activeFilter : ''} clients
          </p>

          {/* Client grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1rem' }}>
            {filtered.map((client) => (
              <div
                key={client.name}
                style={{ background: '#f8f8f6', border: '1.5px solid #e0e8e2', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
              >
                <div style={{ width: '38px', height: '38px', background: '#2c4a2e', borderRadius: '8px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c8a84b', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '14px' }}>
                  {client.name.charAt(0)}
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', fontWeight: 700, color: '#1a3a1c', lineHeight: 1.3, marginBottom: '0.2rem' }}>{client.name}</div>
                  <div style={{ display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: INDUSTRY_COLORS[client.industry] || '#4a7c59', background: `${INDUSTRY_COLORS[client.industry]}18` || '#e8f5ed', padding: '0.1rem 0.5rem', borderRadius: '10px' }}>
                    {client.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#999', textAlign: 'center', marginTop: '2.5rem', fontStyle: 'italic' }}>
            And hundreds more across every industry sector
          </p>
        </div>
      </section>

      {/* Industry breakdown */}
      <section style={{ padding: '5rem 0', background: '#f8f8f6' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>INDUSTRIES WE SERVE</span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c' }}>We Work Across Every Industry</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {INDUSTRIES.filter(i => i !== 'All').map(ind => (
              <div key={ind} style={{ background: '#fff', border: '1.5px solid #e0e8e2', borderRadius: '14px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${INDUSTRY_COLORS[ind]}20`, border: `2px solid ${INDUSTRY_COLORS[ind]}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem', fontSize: '1.25rem' }}>
                  {ind === 'Food & Beverage' ? '🍕' : ind === 'Home Services' ? '🏠' : ind === 'Health & Wellness' ? '💪' : ind === 'Education' ? '📚' : ind === 'Business Services' ? '💼' : ind === 'Pet Services' ? '🐾' : '✨'}
                </div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#1a3a1c', marginBottom: '0.25rem' }}>{ind}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: INDUSTRY_COLORS[ind] }}>
                  {CLIENTS.filter(c => c.industry === ind).length}+
                </div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em' }}>brands</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>JOIN OUR GROWING FAMILY</span>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Start Your Franchise Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>FMS is a full-service franchise development company — the best franchise consulting firm in the US. Performance-based, results-driven.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/franchise-your-business" className="btn btn-gold btn-lg">Franchise Your Business</Link>
            <Link href="/about-us" className="btn btn-outline-white btn-lg">Learn About FMS</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
