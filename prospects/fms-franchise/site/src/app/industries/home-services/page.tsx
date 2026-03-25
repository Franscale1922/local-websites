import type { Metadata } from 'next';
import Link from 'next/link';
import { IconHome, IconRepeat, IconMapPin, IconBriefcase } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Home Services Franchise Consulting | FMS',
  description: 'FMS has franchised 120+ home services brands — restoration, cleaning, landscaping, pest control, and specialty trades. The highest-growth franchise category of the past decade.',
};

export default function HomeServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Home Services</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Home Services Franchise Consulting</h1>
          <p>Home services is the highest-growth category in franchising for the past decade — recession-resistant, repeat-driven, and scalable with minimal physical infrastructure. FMS has franchised 120+ home services brands.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">See If My Concept Is Ready</Link>
            <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>

          <div className="grid-4" style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { num: '120+', label: 'Brands Franchised' },
              { num: '↑↑', label: 'Highest-Growth Category' },
              { num: '$600B+', label: 'U.S. Market Size' },
              { num: '5–8%', label: 'Typical Royalty Rate' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.75rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>Why Home Services Is the Ideal Franchise Category</h2>
          <p>Home services franchises don't need a storefront, expensive equipment, or a prime retail location. They need a van, a trained technician, and a booking system. This low overhead per unit translates to faster franchise unit economics and lower franchisee investment requirements — which means you can attract more buyers.</p>

          <div className="hero-grid" style={{ display: 'grid', gap: '1rem', margin: '1.5rem 0 2rem' }}>
            {[
              { icon: <IconHome size={24} color="#3cb85e" />, title: 'Recession-resistant demand', body: "People don't stop needing plumbing repairs, cleaning, or pest control during economic downturns. Home services has outperformed most franchise categories through every recession since 2000." },
              { icon: <IconRepeat size={24} color="#3cb85e" />, title: 'Built-in repeat business', body: 'HVAC maintenance, pest control, landscaping, cleaning — these services are scheduled on recurring cycles. Franchisees build predictable recurring revenue, not one-time jobs.' },
              { icon: <IconMapPin size={24} color="#3cb85e" />, title: 'Territory-based exclusivity', body: 'Home services franchises are typically sold by zip code or radius. Franchisees invest in building their territory — protecting both your brand and their business.' },
              { icon: <IconBriefcase size={24} color="#3cb85e" />, title: 'Low physical infrastructure', body: 'No lease, no build-out, no front-of-house. Franchisees can launch from their home or a small commercial space — lowering the barrier to entry and reducing franchisee risk.' },
            ].map(p => (
              <div key={p.title} style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg, #f0faf3, #e2f5e8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>{p.icon}</div>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#1a1a1a' }}>{p.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.65, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>

          <h2>Formats We've Franchised</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2rem' }}>
            {['Restoration & remediation', 'House cleaning', 'Landscaping & lawn care', 'Pest control', 'HVAC services', 'Plumbing', 'Electrical services', 'Painting', 'Window treatments', 'Pool services', 'Roofing', 'Window washing', 'Junk removal', 'Pressure washing', 'Flooring installation', 'Handyman services'].map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>{f}</span>
            ))}
          </div>

          <h2>Key Franchise Development Considerations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2.5rem' }}>
            {[
              { title: 'Territory design is critical', body: 'Home services territories need to be large enough that franchisees can build a sustainable customer base, but small enough to prevent territory conflicts. FMS conducts market analysis to define optimal territory size for your concept.' },
              { title: 'Technician hiring & retention is the franchisee\'s biggest challenge', body: 'Your operations manual must address technician recruitment, background checks, onboarding, and compensation structures. Most home services franchises fail when franchisees can\'t staff up fast enough.' },
              { title: 'Insurance and bonding requirements vary by trade', body: 'General liability, workers\' comp, and trade-specific bonding requirements vary by state and trade. Your FDD must clearly document minimum insurance requirements for franchisees.' },
              { title: 'Lead generation can be centralized', body: 'Many home services franchisors run centralized call centers and booking systems, routing leads to franchisees by territory. This creates a significant franchisor value-add that justifies royalty fees.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>FMS Home Services Clients (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {['Voda Restoration', 'Command Clean', 'Summit Roofing', 'Bloomin\' Blinds', 'HomeSpec', 'ProClean Systems'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Franchise Your Home Services Business?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Home services is the highest-growth franchise category — and the one with the lowest capital barrier for franchisees. If your brand is working locally, it can work nationally.</p>
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
