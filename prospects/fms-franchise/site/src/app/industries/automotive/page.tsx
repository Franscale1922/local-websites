import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Automotive Franchise Consulting | FMS',
  description: 'FMS has franchised 40+ automotive brands — auto repair, detailing, glass, window tinting, and specialty auto services. Consistent demand, high-frequency repeat, and strong B2B opportunity.',
};

export default function AutomotivePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Automotive</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Automotive Franchise Consulting</h1>
          <p>Americans own 280 million registered vehicles. Automotive services aren't discretionary — they're maintenance. FMS has franchised 40+ automotive concepts across repair, detailing, glass, and specialty services.</p>
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
              { num: '40+', label: 'Automotive Brands Franchised' },
              { num: '280M', label: 'Registered U.S. Vehicles' },
              { num: '$500B+', label: 'Auto Services Market' },
              { num: '5–8%', label: 'Typical Royalty Rate' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.6rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>Why Automotive Franchises Perform Consistently</h2>
          <p>Automotive services share two structural advantages with healthcare and home services: non-discretionary demand and repeat frequency. A vehicle needs oil changes, tires, brake service, and detailing regardless of whether the economy is growing or contracting. The average American spends over $1,000 annually on vehicle maintenance and repair. Once a customer trusts your brand, they return — and refer.</p>

          <h2>Formats We've Franchised</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2rem' }}>
            {['Auto repair shops', 'Oil change centers', 'Auto detailing', 'Windshield repair & replacement', 'Window tinting', 'Ceramic coating', 'Dent repair', 'Fleet services', 'Transmission specialists', 'Tire centers', 'EV charging & service', 'Emissions testing'].map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>{f}</span>
            ))}
          </div>

          <h2>Key Franchise Development Considerations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2.5rem' }}>
            {[
              { title: 'Technician certification requirements', body: 'Many automotive services require ASE-certified technicians. Your operations manual must address certification requirements, and your franchisee training program needs to help new operators navigate certification for their staff. This is a significant hiring constraint that your prospective franchisees need to understand before signing.' },
              { title: 'Equipment investment and supplier networks', body: 'Automotive franchises often require significant upfront equipment investment (lifts, diagnostic tools, specialty equipment). Your FDD must disclose equipment requirements transparently, and your operations manual should cover approved suppliers and negotiated pricing your network provides.' },
              { title: 'Environmental compliance', body: 'Auto repair operations that handle waste oil, fluids, and hazardous materials must comply with EPA and state environmental regulations. Your franchise system must address compliance requirements, disposal protocols, and the documentation franchisees need to maintain for regulatory inspections.' },
              { title: 'B2B fleet relationships are a growth multiplier', body: 'Automotive franchises with fleet service relationships (businesses, government agencies) develop revenue streams that are more predictable and higher-volume than consumer walk-ins. Training franchisees to develop fleet relationships is a significant value-add.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>FMS Automotive Clients (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {['TechServ Pro', 'GreenWave Auto', 'ClearView Glass', 'ProTint Systems'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Franchise Your Automotive Business?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>280 million vehicles need service. If your automotive concept has proven unit economics locally, FMS can build the franchise infrastructure to scale it nationally.</p>
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
