import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Territory Mapping Services | FMS Franchise',
  description: 'FMS provides full-scope franchise territory mapping: GIS mapping, market analysis, legal documentation, and expansion planning. 900+ territories mapped. Based in Alpharetta, GA.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/services/franchise-territory-mapping',
  },
  openGraph: {
    title: 'Franchise Territory Mapping Services | FMS Franchise',
    description: 'Full-scope franchise territory mapping: GIS mapping, market analysis, legal documentation, and expansion planning. 900+ territories mapped.',
    url: 'https://www.fmsfranchise.com/services/franchise-territory-mapping',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'FMS Franchise Territory Mapping Services' }],
  },
};

const WHAT_WE_DO = [
  { icon: '🗺️', title: 'Territory Definition & Structuring', desc: 'Working with your business model, unit economics, and market opportunity to define territories that are large enough to sustain franchisee success but small enough to maximize system coverage.' },
  { icon: '📊', title: 'Market Analysis & Population Mapping', desc: 'Using demographic data, population density, income levels, and consumer behavior analysis to identify optimal territory sizes and boundaries for your specific franchise model.' },
  { icon: '🏙️', title: 'Geographic Information Systems (GIS) Mapping', desc: 'Professional GIS territory maps that precisely define territory boundaries using postal codes, census tracts, counties, or custom geographic shapes — with clear visual documentation.' },
  { icon: '⚖️', title: 'Legal Territory Documentation', desc: 'Territory descriptions formatted for inclusion in your Franchise Disclosure Document (FDD) and Franchise Agreement — meeting legal requirements and protecting both franchisors and franchisees.' },
  { icon: '🎯', title: 'Site Selection Support', desc: 'For retail and location-based franchises, territory analysis identifies optimal site locations, trade area analysis, and competitive assessment within each defined territory.' },
  { icon: '📈', title: 'Expansion Planning', desc: 'Strategic territory planning for system expansion — identifying available markets, planning multi-unit development areas, and structuring area developer agreements.' },
];

const TERRITORY_TYPES = [
  { type: 'Exclusive Territory', desc: 'The franchisee is the only authorized operator within a defined geographic area. Most common in service-area-based businesses.', best: 'Home services, professional services, B2B franchise models' },
  { type: 'Protected Territory', desc: 'The franchisor agrees not to license another franchisee within the protected area, but reserves the right to operate company units or alternative channels.', best: 'Retail, food & beverage, fitness, and mixed-channel concepts' },
  { type: 'Non-Exclusive', desc: 'No geographic exclusivity. Franchisees can open anywhere within a broader region, with competition from other franchisees possible.', best: 'Online models, mobile concepts, certain specialty retail' },
  { type: 'Area Development', desc: 'A franchisee is granted the rights to open multiple units across a defined territory over a specified timeframe.', best: 'Emerging brands wanting to grow quickly in key markets' },
];

export default function FranchiseTerritoryMappingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/services">Services</Link>
            <span>›</span>
            <span>Franchise Territory Mapping</span>
          </div>
          <span className="eyebrow">FMS Services</span>
          <h1>Franchise Territory Mapping Services</h1>
          <p style={{ maxWidth: '680px' }}>
            Territory structure is one of the most consequential decisions in franchise development — and one of the most often under-engineered. FMS provides full-scope territory mapping services that plan, document, and legally structure franchise territories to maximize franchisee success and system-wide growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Consultation</a>
            <Link href="/services" className="btn btn-outline btn-lg">All Services</Link>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Territory Mapping Services</span>
            <h2>What FMS Territory Mapping Covers</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {WHAT_WE_DO.map(s => (
              <div key={s.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territory types */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Territory Structures</span>
            <h2>Understanding Franchise Territory Types</h2>
            <div className="divider" />
            <p>The right territory structure depends on your business model, market density, franchisee economics, and long-term system vision. FMS helps you choose the right model — and build the documentation to support it.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {TERRITORY_TYPES.map(t => (
              <div key={t.type} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#2d4135' }}>{t.type}</h3>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '1rem' }}>{t.desc}</p>
                <div style={{ background: '#f8f8f6', borderRadius: '8px', padding: '0.75rem 1rem', borderLeft: '3px solid #4a7c59' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4a7c59', marginBottom: '0.2rem' }}>Best For</div>
                  <div style={{ fontSize: '0.82rem', color: '#718096' }}>{t.best}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why territory matters */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-light">Why Territory Matters</span>
            <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>Territory Mistakes Are Expensive — And Permanent</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Territory conflicts are one of the most common — and most damaging — issues in immature franchise systems. When territories are too small, franchisees can't generate sufficient revenue to thrive. When they're too large, you leave entire markets untouched for decades.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              And once you've sold a territory, you're usually bound by it for the life of the franchise agreement. Territory decisions made incorrectly in year one follow your brand for 10+ years. FMS maps territories correctly the first time — using real data, not guesswork.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Map Your Territories</a>
              <Link href="/services/franchise-development" className="btn btn-outline-white btn-lg">Franchise Development</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Build a Territory Structure That Lasts</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            FMS provides the data, GIS mapping, and legal documentation you need to define territories correctly from day one.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Consultation</a>
            <Link href="/services" className="btn btn-outline-white btn-lg">All FMS Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
