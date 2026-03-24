import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Health & Beauty Franchise Consulting | FMS',
  description: 'FMS has franchised 85+ health and beauty brands — salons, spas, fitness studios, wellness clinics, and beauty retail. See how FMS structures franchise systems for high-loyalty concepts.',
};

const FORMATS = ['Hair salons', 'Nail studios', 'Med spas', 'Massage therapy', 'CBD & wellness retail', 'Fitness studios', 'Personal training', 'Skincare clinics', 'Tanning studios', 'Lash & brow bars', 'IV therapy lounges', 'Float therapy'];

const KEY_METRICS = [
  { num: '85+', label: 'H&B Brands Franchised' },
  { num: '↑↑', label: 'Fastest-Growing Segment' },
  { num: '$14B', label: 'Personal Services Market' },
  { num: '4–7%', label: 'Typical Royalty Rate' },
];

export default function HealthBeautyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Health & Beauty</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Health & Beauty Franchise Consulting</h1>
          <p>The personal services category is the fastest-growing segment in franchising — 4.3% YoY growth driven by recurring memberships, loyalty economics, and underserved markets hungry for trusted local brands.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">See If My Concept Is Ready</Link>
            <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>

          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
            {KEY_METRICS.map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>Why Health & Beauty Franchises Outperform</h2>
          <p>The economics of health and beauty franchising are unusually strong for two reasons: <strong>membership models</strong> and <strong>repeat frequency</strong>. A well-designed hair salon or fitness studio franchise converts customers into recurring monthly revenue — exactly the kind of predictable unit economics that attracts quality franchisees and justifies royalty payments.</p>
          <p>Personal care is also highly resistant to e-commerce disruption. You can buy shampoo online, but you can't get a haircut online. This makes the category durable in ways that retail and food are not.</p>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', margin: '2rem 0', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
            <h3 style={{ color: '#1a3d20', marginBottom: '1rem', fontSize: '1.1rem' }}>What Makes a Strong H&B Franchise Candidate</h3>
            <ul style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568', margin: 0 }}>
              <li>Consistent per-visit revenue of $50–$200+ per client</li>
              <li>Services that require trained technicians (creating a real barrier to imitation)</li>
              <li>Client base with 6+ visits per year (membership or habit-driven repeat)</li>
              <li>A brand or visual identity that travels well beyond your current market</li>
              <li>Documented processes that don't depend on the founding stylist or technician personally</li>
            </ul>
          </div>

          <h2>Formats We've Franchised</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2.5rem' }}>
            {FORMATS.map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568' }}>{f}</span>
            ))}
          </div>

          <h2>Key Considerations for H&B Franchising</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2.5rem' }}>
            {[
              { title: 'Licensing requirements vary by state', body: 'Cosmetology and aesthetics licensing requirements differ significantly by state — your operations manual must account for this variation and your FDD should address franchisee licensing obligations.' },
              { title: 'Technician recruitment is franchisee\'s biggest challenge', body: 'Your training program needs to address not just how to deliver services, but how to hire, train, and retain licensed technicians. This is the operational bottleneck for H&B franchisees.' },
              { title: 'Membership vs. service-based models require different royalty structures', body: 'Membership-based studios often use flat royalty structures rather than percentage of gross — we help you design the right fee structure for your model during feasibility.' },
              { title: 'Brand standards are especially visible in personal services', body: 'Clients are in your franchisee\'s chair for 30–90 minutes. A mediocre experience doesn\'t just lose that client — it actively damages your brand. Quality enforcement mechanisms are critical.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>FMS Health & Beauty Clients (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {['NuFusion Studios', 'Sacred Leaf CBD', 'Peak Performance', 'AcuPoints', 'GreenWave Wellness'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Scale Your Health or Beauty Brand?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>The personal services market is growing. The question is whether your brand will be on the other side of a franchise agreement or watching someone else expand into your market.</p>
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
