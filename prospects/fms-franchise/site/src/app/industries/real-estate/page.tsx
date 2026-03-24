import type { Metadata } from 'next';
import Link from 'next/link';
import { IconLightbulb, IconClipboard, IconRepeat, IconBriefcase } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Real Estate Franchise Consulting | FMS',
  description: 'FMS has franchised 35+ real estate brands — brokerages, property management, investment consulting, and commercial real estate services. High-margin, scalable models with exceptional exit value.',
};

export default function RealEstatePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Real Estate</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Real Estate Franchise Consulting</h1>
          <p>Real estate franchise concepts typically require lower physical infrastructure than any other franchise category — and generate some of the highest margins. FMS has franchised 35+ real estate brands across brokerages, property management, and consulting.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">See If My Concept Is Ready</Link>
            <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>

          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { num: '35+', label: 'Real Estate Brands Franchised' },
              { num: '$4.4T', label: 'Annual U.S. Real Estate Sales' },
              { num: 'High', label: 'Margin Category' },
              { num: '5–8%', label: 'Typical Royalty Rate' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.6rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>Real Estate Franchise Categories We Serve</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2rem' }}>
            {['Residential brokerages', 'Commercial real estate', 'Property management', 'Real estate investment coaching', 'Mortgage brokerage', 'Title & escrow services', 'Real estate staging', 'Short-term rental management', 'Real estate photography', 'Home inspection services', 'Renovation consulting'].map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>{f}</span>
            ))}
          </div>

          <h2>Why Real Estate Concepts Franchise Well</h2>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0 2rem' }}>
            {[
              { icon: <IconLightbulb size={24} color="#3cb85e" />, title: 'Knowledge-based model', body: 'Real estate concepts franchise the system, the brand, the tools, and the training — not physical inventory or facilities. This makes expansion capital requirements dramatically lower than most other categories.' },
              { icon: <IconClipboard size={24} color="#3cb85e" />, title: 'Agent recruitment as the core model', body: 'Brokerage franchises scale by recruiting and supporting licensed agents. Each agent is effectively a revenue unit. Your franchise system is a talent network model.' },
              { icon: <IconRepeat size={24} color="#3cb85e" />, title: 'Property management creates recurring revenue', body: 'Property management franchisees earn monthly management fees on every property in their portfolio — creating the closest thing to true recurring revenue in real estate.' },
              { icon: <IconBriefcase size={24} color="#3cb85e" />, title: 'Consulting and coaching scale without inventory', body: 'Real estate investment coaching and consulting franchises have near-zero marginal cost per client — extremely high-margin models that attract sophisticated franchisees with capital to invest.' },
            ].map(p => (
              <div key={p.title} style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg, #f0faf3, #e2f5e8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>{p.icon}</div>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#1a1a1a' }}>{p.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.65, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>

          <h2>Key Compliance Considerations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2.5rem' }}>
            {[
              { title: 'Real estate licensing requirements vary by state', body: 'Real estate agents and brokers are licensed at the state level, with significant variation in requirements, continuing education obligations, and broker supervision rules. Your FDD must clearly address franchisee licensing requirements and your training program must help franchisees navigate state-specific licensing.' },
              { title: 'RESPA compliance for mortgage-adjacent services', body: 'Real estate concepts that intersect with mortgage, title, or settlement services must navigate RESPA (Real Estate Settlement Procedures Act) restrictions on referral fees and kickbacks. This requires careful review with a real estate-specialized franchise attorney.' },
              { title: 'MLS access and territory considerations', body: 'Brokerage franchises require MLS membership, which operates on a regional basis. Your territory design must align with MLS regions to prevent situations where franchisees cannot access listings in their defined territory.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>FMS Real Estate Clients (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {['HomeSpec', 'Co/LAB Lending Group', 'PropertyEdge Consulting', 'HomeVault Management'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Franchise Your Real Estate Concept?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Real estate franchise systems command high exit multiples because of their recurring revenue and scalable model. FMS has the experience to build the system and the sales network to find your first franchisees.</p>
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
