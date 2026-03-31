import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'International Franchise Development | FMS Franchise',
  description: 'Discover FMS\'s international franchising success stories with brands like Imagine Laser Works and Zambrero across multiple countries. FMS helps businesses franchise globally.',
  openGraph: {
    title: 'International Franchise Success Stories | FMS Franchise',
    description: 'FMS has helped brands across Africa, Australia, Canada, China, Europe, and more franchise successfully. Explore our international portfolio.',
    url: 'https://www.fmsfranchise.com/international/',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630 }],
  },
};

const INTERNATIONAL_BRANDS: { region: string; brands: { name: string; detail: string }[] }[] = [
  {
    region: 'North America',
    brands: [
      { name: 'Imagine Laser Works', detail: '47 Franchises' },
      { name: 'Mitsubishi', detail: 'United States' },
    ],
  },
  {
    region: 'Africa',
    brands: [
      { name: 'Pacific Cigarette Company', detail: 'Africa' },
      { name: 'Sheerguard', detail: '28 Franchises' },
      { name: 'Talisman Rentals', detail: '96 Franchises' },
    ],
  },
  {
    region: 'Australia',
    brands: [
      { name: "Zambrero's", detail: '184 Franchises' },
    ],
  },
  {
    region: 'Canada',
    brands: [
      { name: 'Air Canada', detail: 'Canada' },
      { name: 'Famoso Italian Eatery', detail: '47 Franchises' },
      { name: 'Freshii', detail: '405 Franchises' },
      { name: 'Kinton Ramen', detail: '37 Franchises' },
      { name: 'Mad Science Group', detail: '164 Franchises' },
      { name: 'Mister Transmission', detail: '74 Franchises' },
      { name: "Tim Horton's", detail: '4,846 Franchises' },
    ],
  },
  {
    region: 'China',
    brands: [
      { name: 'YUM Brands', detail: '7,512 Franchises' },
    ],
  },
  {
    region: 'Dubai',
    brands: [
      { name: 'KeyKiosk', detail: '7 Master Franchises' },
    ],
  },
  {
    region: 'Egypt',
    brands: [
      { name: 'AVA Architects', detail: 'Egypt' },
    ],
  },
  {
    region: 'France',
    brands: [
      { name: 'Royal Kids', detail: '83 Franchises' },
    ],
  },
  {
    region: 'Greece',
    brands: [
      { name: 'ChillBox Yogurt', detail: '61 Franchises' },
      { name: 'KOI Sushi', detail: '16 Franchises' },
    ],
  },
  {
    region: 'India',
    brands: [
      { name: 'I-Maths', detail: '342 Franchises' },
    ],
  },
  {
    region: 'Israel',
    brands: [
      { name: 'SodaStream', detail: 'Israel' },
      { name: 'Young Engineers', detail: '162 Franchises' },
    ],
  },
  {
    region: 'Italy',
    brands: [
      { name: 'Figurella', detail: '374 Franchises' },
    ],
  },
  {
    region: 'Mexico',
    brands: [
      { name: 'Cafe Del Cielo', detail: '117 Franchises' },
    ],
  },
  {
    region: 'Singapore',
    brands: [
      { name: 'Ei Maths', detail: '17 Franchises' },
    ],
  },
  {
    region: 'Taiwan',
    brands: [
      { name: 'Presotea', detail: '424 Franchises' },
    ],
  },
  {
    region: 'United Kingdom',
    brands: [
      { name: 'CNA Executive Search', detail: '87 Franchises' },
      { name: 'Heavenly Desserts', detail: '37 Franchises' },
    ],
  },
];

export default function InternationalPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>International</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Global Franchise Development</span>
          <h1>International Franchise Success</h1>
          <p>FMS has helped businesses across five continents build, launch, and scale franchise systems. Explore our international portfolio — and discover how FMS can take your brand global.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
              Start a Global Franchise
            </a>
            <Link href="/services/franchise-development" className="btn btn-outline-white btn-lg">
              View Franchise Development
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: '#1a3d20', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {[
              { number: '16+', label: 'Countries Served' },
              { number: '979+', label: 'Brands Franchised' },
              { number: '28yrs', label: 'Industry Experience' },
              { number: '14,000+', label: 'International Franchises' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.2rem', fontWeight: 900, color: '#e8b736', lineHeight: 1 }}>{stat.number}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.35rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Our Approach</span>
            <h2>Taking Your Franchise Global</h2>
            <p style={{ color: '#4a5568', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>
              FMS is a full-service franchise development consulting firm with expert consultants throughout the United States and Canada. Our team works both domestically and internationally, helping brands navigate the unique regulatory, cultural, and operational challenges of international franchising.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Strategic Planning', body: 'We structure the most efficient international franchise model for your business, including territory sizing, fee structure, and market entry strategy.' },
              { title: 'Franchise Research', body: 'Know your international competition. Understand how to take your concept to specific regional markets and how to compete effectively.' },
              { title: 'Franchise Consulting', body: 'FMS has experience in 300+ franchise systems globally. Benefit from teams who understand cross-border franchise marketing and operations.' },
              { title: 'Marketing & Materials', body: 'FMS designs and develops the collateral needed to attract international franchise partners — master franchisees, area developers, and direct franchisees.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(26,61,32,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ color: '#35a84a', fontWeight: 900, fontSize: '1.1rem' }}>✓</span>
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#718096', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International portfolio by region */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">International Portfolio</span>
            <h2>International Brands We Have Franchised</h2>
            <p style={{ color: '#4a5568', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
              From single-unit pilot programs to thousands of franchise locations — these are the international brands that have trusted FMS to build and scale their franchise systems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {INTERNATIONAL_BRANDS.map((group) => (
              <div key={group.region} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#e8b736', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1rem' }}>🌎</span> {group.region}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {group.brands.map((brand) => (
                    <div key={brand.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: '#f8faf8', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#1a3d20' }}>{brand.name}</span>
                      <span style={{ fontSize: '0.75rem', color: '#718096', fontWeight: 500 }}>{brand.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', borderRadius: '20px', padding: '3rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e8b736' }}>
              Start Your Global Expansion
            </span>
            <h2 style={{ color: '#fff', margin: '0.75rem 0', fontSize: '1.8rem' }}>Ready to Take Your Brand International?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.75rem', lineHeight: 1.75, maxWidth: '540px', margin: '0.75rem auto 2rem' }}>
              FMS has the expertise, network, and proven systems to help your business expand beyond borders. Schedule a free consultation and let&apos;s map out your global franchise strategy.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                Get a Free Consultation
              </a>
              <Link href="/services/franchise-development" className="btn btn-outline-white btn-lg">
                View Franchise Development
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
