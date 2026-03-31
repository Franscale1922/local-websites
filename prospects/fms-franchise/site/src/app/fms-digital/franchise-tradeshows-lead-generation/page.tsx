import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Tradeshows & Lead Generation Strategy | FMS Digital',
  description: 'Turn tradeshows into high-quality franchise leads and signed agreements. Proven booth strategies, lead generation tactics, and franchise marketing solutions that drive real conversions.',
};

const SHOWS = [
  { name: 'IFA Annual Convention', org: 'International Franchise Association', timing: 'February', focus: 'Industry networking, policy, and franchisor relationships' },
  { name: 'Franchise Expo South', org: 'MFV Expositions', timing: 'Spring', focus: 'Franchise buyers across the Southeast and Gulf Coast markets' },
  { name: 'West Coast Franchise Expo', org: 'MFV Expositions', timing: 'Fall', focus: 'High-net-worth franchise buyers from California and Pacific Northwest' },
  { name: 'Franchise Expo East', org: 'MFV Expositions', timing: 'Summer', focus: 'East Coast and Mid-Atlantic franchise buyers' },
  { name: 'The Franchise Show', org: 'International Franchise Shows', timing: 'Various', focus: 'Rotating US markets targeting qualified local buyers' },
  { name: 'Franchise Business Review Events', org: 'FBR', timing: 'Various', focus: 'Franchisee satisfaction leaders and award recognition visibility' },
];

const SERVICES = [
  { icon: '🎪', title: 'Booth Strategy & Design', desc: 'We help you design a booth presence that stands out, communicates your opportunity clearly, and draws qualified traffic — not just foot traffic.' },
  { icon: '📝', title: 'Pre-Show Lead Generation', desc: 'Email campaigns, social ads, and show directory optimization in the weeks before each show — filling your calendar before the doors open.' },
  { icon: '🤝', title: 'Show Staffing Guidance', desc: 'Who to bring, how to staff the booth, conversation scripts, and qualification frameworks so no warm lead walks away unconverted.' },
  { icon: '📊', title: 'Lead Capture Systems', desc: 'CRM-integrated lead capture tools — paper, iPad, or badge scanners — configured to automatically follow up within minutes of the conversation.' },
  { icon: '✉️', title: 'Post-Show Nurture Sequences', desc: 'Automated follow-up email sequences triggered within 24 hours of show close — when your prospects are still warm and your competitors are silent.' },
  { icon: '📈', title: 'ROI Tracking & Analysis', desc: 'Post-show reporting on leads captured, qualification rates, deal pipeline added, and cost-per-lead versus other channels — so you invest in the right shows.' },
];

export default function TradeshowsPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 60%, #0d2b4e 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <a href="/fms-digital" style={{ color: 'rgba(255,255,255,0.6)' }}>FMS Digital</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Tradeshows</span>
          </div>
          <span className="eyebrow" style={{ color: '#38bdf8' }}>FMS Digital Services</span>
          <h1 style={{ color: '#fff' }}>Franchise Tradeshows: Lead Generation & Booth Strategy</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '680px' }}>
            Most franchise brands leave tradeshows with a stack of business cards and nothing in the pipeline. FMS turns tradeshow appearances into high-quality franchise leads and signed agreements — with proven booth strategies, pre-show marketing, and post-show nurture systems.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Plan Your Show Strategy</a>
            <Link href="/fms-digital" className="btn btn-outline-white btn-lg">FMS Digital Overview</Link>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Tradeshow Services</span>
            <h2>Before, During & After the Show</h2>
            <div className="divider" />
            <p>Tradeshows generate leads in a 72-hour window. The brands that win are the ones prepared before the doors open — and still following up when everyone else goes quiet.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key shows */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Key Franchise Shows</span>
            <h2>The Shows FMS Helps Brands Prepare For</h2>
            <div className="divider" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '3rem', maxWidth: '900px', margin: '3rem auto 0' }}>
            {SHOWS.map(show => (
              <div key={show.name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 80px 1fr', gap: '1rem', background: '#fff', borderRadius: '12px', padding: '1.25rem 1.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 1px 8px rgba(0,0,0,0.04)', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{show.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{show.org}</div>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.5 }}>{show.focus}</div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, background: 'rgba(56,189,248,0.1)', color: '#0d2b4e', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '999px', padding: '0.2rem 0.6rem' }}>{show.timing}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d2b4e', textDecoration: 'none' }}>Plan Strategy →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-light">The Problem with Tradeshows</span>
            <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>Most Franchisors Leave Money on the Tradeshow Floor</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              A tradeshow booth costs anywhere from $5,000 to $30,000+ by the time you factor in the registration fee, booth setup, travel, staff time, and materials. Yet most franchisors go home with a stack of business cards, a few follow-up attempts, and no pipeline to show for it.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              The problem is almost never the show itself — it's the lack of strategy before, during, and after. FMS deploys a complete system around every show appearance: pre-show marketing to fill your calendar, in-booth qualification scripts to identify real buyers, and post-show automation that follows up within 24 hours while your leads are still warm.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Fix Your Tradeshow Strategy</a>
              <Link href="/case-studies" className="btn btn-outline-white btn-lg">See Case Studies</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Get Real ROI From Your Next Show?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Let FMS build your pre-show, in-show, and post-show strategy — and turn your next tradeshow appearance into a pipeline-filling event.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Strategy Call</a>
            <Link href="/about-us/contact" className="btn btn-outline-white btn-lg">Contact FMS Digital</Link>
          </div>
        </div>
      </section>
    </>
  );
}
