import type { Metadata } from 'next';
import Link from 'next/link';
import { IconHeart, IconRepeat, IconHandshake, IconGradCap } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Children\'s Franchise Consulting | FMS',
  description: 'FMS has franchised 70+ children\'s brands — childcare centers, tutoring programs, enrichment activities, and children\'s retail. See how the children\'s franchise category delivers exceptional franchisee economics.',
};

export default function ChildrenPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Children's</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Children's Franchise Consulting</h1>
          <p>Parents don't negotiate on their children's education, enrichment, or care. The children's franchise category delivers exceptional customer loyalty, strong repeat economics, and a franchisee pool motivated by community purpose — not just profit.</p>
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
              { num: '70+', label: 'Children\'s Brands Franchised' },
              { num: 'High', label: 'Customer Retention Rate' },
              { num: '$80B+', label: 'U.S. Childcare Market' },
              { num: '5–7%', label: 'Typical Royalty Rate' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.6rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>Why Children's Franchises Are Exceptional Businesses</h2>
          <div className="hero-grid" style={{ display: 'grid', gap: '1rem', margin: '1rem 0 2rem' }}>
            {[
              { icon: <IconHeart size={24} color="#3cb85e" />, title: 'Unmatched customer loyalty', body: "Once a child is enrolled and thriving, parents almost never switch. Children's enrichment and care franchises have some of the highest life-time-value customers in any franchise category." },
              { icon: <IconRepeat size={24} color="#3cb85e" />, title: 'Recurring revenue by design', body: "Weekly sessions, monthly memberships, semester enrollment — children's concepts naturally structure themselves for recurring revenue." },
              { icon: <IconHandshake size={24} color="#3cb85e" />, title: 'Mission-driven franchisees', body: "The franchisee pool for children's concepts includes former teachers, coaches, and parents who want to build a business with community impact. This attracts highly committed operators." },
              { icon: <IconGradCap size={24} color="#3cb85e" />, title: 'Underserved in most markets', body: "Quality children's enrichment programs are chronically underserved in mid-market cities. A strong brand can establish market dominance in a city before competition arrives." },
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
            {['Childcare centers', 'After-school programs', 'Tutoring centers', 'STEM enrichment', 'Music schools', 'Art studios', 'Sports training', 'Reading programs', 'Children\'s fitness', 'Coding academies', 'Dance studios', 'Children\'s retail', 'Adaptive learning'].map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>{f}</span>
            ))}
          </div>

          <h2>Compliance Considerations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2.5rem' }}>
            {[
              { title: 'Staff background check requirements', body: 'All states require background checks for staff working with minors. Your operations manual must document the specific screening requirements and your franchise agreement should make compliance a condition of being a franchisee.' },
              { title: 'Childcare licensing varies dramatically by state', body: 'Licensed childcare centers face extensive state licensing requirements covering staff-to-child ratios, facility specifications, and health standards. Your FDD must transparently disclose these requirements to prospective franchisees.' },
              { title: 'Curriculum IP protection', body: 'If your concept is built around a proprietary curriculum or teaching methodology, this IP needs to be clearly defined, protected, and licensed in your Franchise Agreement.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>FMS Children's Clients (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {['BrightPath Kids', 'SkillBridge', 'TalentSprout', 'ReadRight Academy'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Franchise Your Children's Concept?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Children's franchises attract the most loyal customers and the most committed franchisees in any category. If your concept is working, let's build the system to scale it.</p>
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
