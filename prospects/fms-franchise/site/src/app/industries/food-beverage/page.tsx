import type { Metadata } from 'next';
import Link from 'next/link';
import { IconMapPin, IconRepeat, IconGrowth, IconTrendingUp } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Food & Beverage Franchise Consulting | FMS',
  description: 'FMS has franchised 200+ food and beverage concepts — restaurants, cafés, food trucks, and specialty beverage brands. Explore how we help F&B businesses scale through franchising.',
};

const BRANDS = ['Blue Mint Thai', 'Craft House Pizza', 'Foxtail Coffee', 'Fresh & Co', 'Sea Salt Fish + Chips', 'Sodie Doces', 'The Salty Dog', 'Turquoise Wine Bar'];

const WHY_POINTS = [
  { icon: <IconMapPin size={24} color="#3cb85e" />, title: 'Location-based demand', body: 'Food concepts naturally expand market by market — franchising lets you put an owner-operator in each new territory with skin in the game.' },
  { icon: <IconRepeat size={24} color="#3cb85e" />, title: 'High repeat frequency', body: 'Food and beverage businesses thrive on routine customer visits. A strong franchise system captures that loyalty across dozens of locations.' },
  { icon: <IconGrowth size={24} color="#3cb85e" />, title: 'Brand recognition travels', body: 'Successful local food brands generate organic demand to expand — customers ask "when are you opening near me?" Franchising is the answer.' },
  { icon: <IconTrendingUp size={24} color="#3cb85e" />, title: 'Proven scalability', body: 'Every major restaurant and beverage chain started as a single location. The differentiator between local success and national brand is the franchise system.' },
];

const CHALLENGES = [
  { challenge: 'Quality control across kitchens', solution: 'Recipe standardization, approved supplier lists, and franchise agreement provisions for kitchen inspection rights' },
  { challenge: 'Training a non-culinary franchisee', solution: 'Comprehensive 2–4 week training program covering every station, recipe, and service standard — documented in your operations manual' },
  { challenge: 'Health code compliance variance by state', solution: 'FDD includes territory-specific compliance guidance; FMS helps structure operations training to meet federal minimums with state-level supplemental documentation' },
  { challenge: 'Protecting brand quality reputation', solution: 'Mystery shopper programs, quarterly audits, and franchisee scorecards with remediation process — documented in your Franchise Agreement' },
];

export default function FoodBeveragePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Food & Beverage</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Food & Beverage Franchise Consulting</h1>
          <p>The largest category in franchising — and the one with the most pitfalls. FMS has franchised 200+ food and beverage concepts across every format. Here's what it takes to do it right.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">See If My Concept Is Ready</Link>
            <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>

          <div className="hero-grid" style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { num: '200+', label: 'F&B Brands Franchised' },
              { num: '#1', label: 'Largest FMS Category' },
              { num: '2–4 wks', label: 'Typical Training Window' },
              { num: '5–8%', label: 'Typical Royalty Rate' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>Why Food & Beverage Franchises Work</h2>
          <div className="hero-grid" style={{ display: 'grid', gap: '1rem', margin: '1.5rem 0 2.5rem' }}>
            {WHY_POINTS.map(p => (
              <div key={p.title} style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg, #f0faf3, #e2f5e8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>{p.icon}</div>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#1a1a1a' }}>{p.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.65, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>

          <h2>The Unique Challenges of F&B Franchising</h2>
          <p>Food and beverage is the most complex category to franchise correctly — and the one where brand damage is most visible when something goes wrong. Here's how FMS addresses the core challenges:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0 2.5rem' }}>
            {CHALLENGES.map(c => (
              <div key={c.challenge} className="hero-grid" style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0', display: 'grid', gap: '1.5rem', alignItems: 'start' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#718096', marginBottom: '0.35rem' }}>Challenge</div>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a', margin: 0, lineHeight: 1.5 }}>{c.challenge}</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#3cb85e', marginBottom: '0.35rem' }}>FMS Approach</div>
                  <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.65 }}>{c.solution}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Food & Beverage Formats We've Franchised</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2.5rem' }}>
            {['Full-service restaurants', 'Fast casual', 'Cafés & coffee', 'Food trucks', 'Specialty beverage', 'Bakeries & desserts', 'Meal prep & delivery', 'Ghost kitchens', 'Wine bars', 'Juice & smoothie bars', 'Pizza concepts', 'Seafood concepts'].map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>{f}</span>
            ))}
          </div>

          <h2>FMS Food & Beverage Client Portfolio (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {BRANDS.map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Franchise Your Food or Beverage Concept?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>FMS has 200+ F&B brands in our portfolio. We know what works, what doesn't, and how to build a system that protects your brand quality at scale.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/feasibility-questionnaire" className="btn btn-gold">Take the Free Assessment</Link>
              <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
