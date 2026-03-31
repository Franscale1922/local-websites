import type { Metadata } from 'next';
import Link from 'next/link';
import { IconRevenue, IconZap, IconGlobe, IconGrowth } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Home-Based Franchise Consulting | FMS',
  description: 'FMS has franchised 50+ home-based franchise concepts — low-overhead, fast-to-launch, B2C and B2B service businesses that operate without a retail location. The fastest entry point in franchising.',
};

export default function HomeBasedPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Home-Based</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Home-Based Franchise Consulting</h1>
          <p>No lease. No build-out. No retail location required. Home-based franchise concepts are the fastest category to launch, the lowest capital barrier for franchisees — and some of the most profitable in the FMS portfolio.</p>
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
              { num: '50+', label: 'Home-Based Brands Franchised' },
              { num: 'Lowest', label: 'Franchisee Capital Requirement' },
              { num: 'Fastest', label: 'Time-to-Open' },
              { num: '6–10%', label: 'Typical Royalty Rate' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.6rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>What Is a Home-Based Franchise?</h2>
          <p>A home-based franchise is any concept where franchisees operate their business from a home office, vehicle, or minimal commercial space — rather than a leased retail or commercial location. They connect with customers digitally or in the field.</p>
          <p>This model dramatically reduces franchisee startup costs (no lease, no build-out, no storefront fixtures) and time-to-open — which means faster break-even, lower capital risk for franchisees, and a larger pool of qualified buyers who can afford your franchise fee.</p>

          <h2>Home-Based Formats We've Franchised</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2rem' }}>
            {['Digital marketing agencies', 'Business consulting', 'Financial planning', 'HR & staffing services', 'IT support', 'Mobile pet grooming', 'Outdoor tourism & recreation', 'Event planning', 'Photography & videography', 'Social media management', 'Virtual tutoring', 'E-commerce management', 'Insurance brokerage', 'Bookkeeping services'].map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>{f}</span>
            ))}
          </div>

          <h2>The Unique Advantages of Home-Based Franchising</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2rem' }}>
            {[
              { icon: <IconRevenue size={22} color="#3cb85e" />, title: 'Lower franchisee investment = larger buyer pool', body: "Home-based franchises typically require $25,000–$75,000 total investment versus $150,000–$500,000 for location-based concepts. This expands your franchisee candidacy pool dramatically — you can attract buyers who can't afford retail franchises but have the skills and drive to succeed." },
              { icon: <IconZap size={22} color="#3cb85e" />, title: 'Faster time-to-open', body: 'Without a lease, build-out, or equipment procurement, a home-based franchisee can typically be operational within 30–60 days of signing. This generates your initial royalties faster and reduces franchisee anxiety during the pre-open period.' },
              { icon: <IconGlobe size={22} color="#3cb85e" />, title: 'Larger territories are justifiable', body: 'Without a physical storefront creating natural territory limitations, home-based franchises can sell larger territories — which can be attractive to ambitious franchisees and command higher territory fees.' },
              { icon: <IconGrowth size={22} color="#3cb85e" />, title: 'Lower default risk', body: 'The single largest cause of franchisee failure is inability to cover fixed costs during the ramp-up period. Without lease obligations, home-based franchisees have dramatically lower fixed cost bases — reducing default risk for both parties.' },
            ].map(p => (
              <div key={p.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #f0faf3, #e2f5e8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.35rem', color: '#1a1a1a' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.65 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Key Franchise Development Considerations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2.5rem' }}>
            {[
              { title: 'Territory definition without geography', body: 'Home-based concepts that deliver services digitally or nationwide need thoughtful territory design — often defined by client industry vertical, company size, or specific niche rather than geographic radius. FMS helps structure territories that protect franchisees without restricting market opportunity.' },
              { title: 'Franchisee isolation is a real risk', body: 'Home-based franchisees lose the natural community of a retail environment. Your franchise system needs a strong peer network component — regional meetings, online communities, and annual conferences are especially important for home-based franchisee retention.' },
              { title: 'Brand standards without physical location control', body: 'Without walking into a franchisee\'s location, quality enforcement relies on customer feedback systems, digital audit processes, and phone/video discovery days. Your operations manual must address brand standards comprehensively for a non-physical environment.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>FMS Home-Based Clients (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {['Get Up & Go Kayak', 'RocketShelf', 'DigitalBoost Agency', 'ClearPath Financial'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Franchise Your Home-Based Business?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Low franchisee investment, fast time-to-open, large territories, and lower default risk make home-based franchises some of the most attractive to sell. If your service business has proven itself, FMS can build the system.</p>
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
