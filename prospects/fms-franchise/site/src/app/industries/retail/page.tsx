import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail Franchise Consulting | FMS',
  description: 'FMS has franchised 95+ retail brands — specialty retail, CBD, home goods, apparel, and niche product concepts. See how FMS builds franchise systems for product-based businesses.',
};

export default function RetailPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Retail</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Retail Franchise Consulting</h1>
          <p>Specialty retail franchises succeed where e-commerce fails — by delivering experience, expertise, and community alongside product. FMS has franchised 95+ retail concepts that turned local brands into national systems.</p>
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
              { num: '95+', label: 'Retail Brands Franchised' },
              { num: '2nd', label: 'Largest FMS Category' },
              { num: '$3.8T', label: 'U.S. Retail Market' },
              { num: '5–8%', label: 'Typical Royalty Rate' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.6rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>What Makes a Retail Concept Franchise-Ready?</h2>
          <p>Retail franchising has unique challenges that make concept selection critical. The strongest retail franchise candidates share these characteristics:</p>
          <ul style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568', marginBottom: '1.5rem' }}>
            <li><strong>Specialty niche with strong local brand equity</strong> — the kind of store people drive past a competitor to visit</li>
            <li><strong>Proprietary product lines or exclusive supplier relationships</strong> that protect franchisee differentiation</li>
            <li><strong>Experience-driven format</strong> that pure e-commerce cannot replicate (consultative selling, product education, community)</li>
            <li><strong>Proven 4-wall profitability</strong> at the unit level with documented customer metrics</li>
          </ul>

          <h2>Retail Formats We've Franchised</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2rem' }}>
            {['CBD & hemp retail', 'Specialty food stores', 'Apparel boutiques', 'Home décor', 'Pet supplies', 'Outdoor & sporting goods', 'Health foods', 'Gift & specialty', 'Consignment', 'Tech accessories', 'Beauty supply', 'Wine & spirits'].map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>{f}</span>
            ))}
          </div>

          <h2>Key Franchise Development Considerations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2.5rem' }}>
            {[
              { title: 'Supply chain and vendor management', body: 'Retail franchisees depend on consistent product supply at pricing that preserves their margins. Your FDD must disclose supplier relationships, and your operations manual must address approved vendor requirements and ordering systems that work at scale.' },
              { title: 'Location selection is make-or-break', body: 'Retail franchisee success is heavily influenced by site selection — traffic, co-tenancy, visibility, and lease terms. Your franchise system needs a defined site selection process, ideally with FMS or a real estate partner providing approval rights for new locations.' },
              { title: 'Seasonality in unit economics', body: 'Retail often has seasonal revenue variation. Your franchisee financial disclosures in Item 19 must represent seasonal patterns accurately, and your training program must prepare franchisees for cash flow management through slow periods.' },
              { title: 'E-commerce integration and territory conflicts', body: 'If you sell online, your franchise agreement must clearly define whether franchisees participate in online revenue, how their territory applies to digital sales, and who handles fulfillment — before your first agreement is signed.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>FMS Retail Clients (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {['Sacred Leaf CBD', 'The Salty Dog', 'Fresh & Co', 'RocketShelf', 'Harbor Goods Co'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Franchise Your Retail Concept?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>FMS has 95+ retail brands in our portfolio. We know what separates retail concepts that scale from those that stall — and we'll tell you honestly which category your business falls into.</p>
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
