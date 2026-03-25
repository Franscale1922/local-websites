import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries We Franchise — FMS Franchise Consulting',
  description: 'FMS has franchised businesses across every major industry: food & beverage, health & beauty, healthcare, home services, children, education, retail, automotive, real estate, and more.',
};

const INDUSTRIES = [
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    desc: 'Restaurants, cafés, food trucks, specialty beverages, and culinary concepts. Our largest category with proven franchise systems across every format.',
    examples: 'Blue Mint Thai, Craft House Pizza, Foxtail Coffee, Sodie Doces',
    count: '200+',
  },
  {
    name: 'Health & Beauty',
    slug: 'health-beauty',
    desc: 'Salons, spas, fitness studios, wellness clinics, and beauty brands. High-repeat, loyalty-driven concepts that scale through franchising.',
    examples: 'NuFusion Studios, Peak Performance, Sacred Leaf CBD',
    count: '85+',
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    desc: 'Healthcare staffing, therapy services, senior care, and medical support franchises. Specialized compliance expertise across regulatory environments.',
    examples: 'ProCare Therapy, AcuPoints, ClearDent',
    count: '60+',
  },
  {
    name: 'Home Services',
    slug: 'home-services',
    desc: 'Restoration, cleaning, landscaping, pest control, and home improvement. The highest-growth category in franchising for the past decade.',
    examples: 'Bloomin\' Blinds, Command Clean, Summit Roofing, Voda Restoration',
    count: '120+',
  },
  {
    name: 'Children',
    slug: 'children',
    desc: 'Childcare, tutoring, enrichment programs, and children\'s retail. Premium customer loyalty and strong franchisee economics.',
    examples: 'BrightPath Kids, SkillBridge',
    count: '70+',
  },
  {
    name: 'Education',
    slug: 'education',
    desc: 'K-12 tutoring, test prep, corporate training, and vocational education. Growing market driven by hybrid and supplemental learning demand.',
    examples: 'SkillBridge, ProCare Therapy',
    count: '45+',
  },
  {
    name: 'Retail',
    slug: 'retail',
    desc: 'Specialty retail, CBD, home goods, and niche product brands. Territory-based models with proven conversion to franchise buyers.',
    examples: 'Fresh & Co, Sacred Leaf CBD, The Salty Dog',
    count: '95+',
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    desc: 'Auto repair, detailing, glass, tinting, and specialty services. Consistent demand and high-frequency repeat business.',
    examples: 'TechServ Pro, GreenWave',
    count: '40+',
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    desc: 'Real estate brokerages, property management, investment consulting, and commercial services. High-margin, scalable models.',
    examples: 'HomeSpec, Co/LAB Lending',
    count: '35+',
  },
  {
    name: 'Home-Based',
    slug: 'home-based',
    desc: 'Low-overhead, home-operated service concepts. B2C and B2B services that require minimal physical infrastructure — fastest to scale.',
    examples: 'Get Up & Go Kayak, RocketShelf',
    count: '50+',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Industries</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industries We Serve</span>
          <h1>Franchising Works Across Every Industry</h1>
          <p>FMS has franchised businesses in every major industry vertical. If you have a profitable, replicable business model — we have the playbook to franchise it.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">Take Free Questionnaire</Link>
            <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
          </div>
        </div>
      </div>

      {/* Industry grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">10 Industries</span>
            <h2>We've Franchised Businesses Like Yours</h2>
            <div className="divider" />
            <p>900+ brands across 10 major industry categories. Find your industry below to see which brands FMS has franchised and what made those concepts work.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {INDUSTRIES.map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', transition: 'all 0.3s', cursor: 'pointer', height: '100%' }}>
                  <div style={{ flexShrink: 0, width: '64px', height: '64px', borderRadius: '12px', background: 'linear-gradient(135deg, #1a3d20, #3cb85e)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.25rem', color: '#e8b736' }}>{ind.count}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{ind.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.65, marginBottom: '0.65rem' }}>{ind.desc}</p>
                    <div style={{ fontSize: '0.78rem', color: '#3cb85e', fontWeight: 600 }}>
                      <span style={{ color: '#9ca3af', fontWeight: 500, marginRight: '0.35rem' }}>Examples:</span>
                      {ind.examples}
                    </div>
                    <div style={{ marginTop: '0.875rem', fontSize: '0.82rem', fontWeight: 700, color: '#3cb85e' }}>Explore {ind.name} Franchising →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* "My Business Is Too Unique" objection */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-light">The Most Common Objection</span>
            <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>"My Business Is Too Unique to Franchise"</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
              We hear this every week. It's almost never true. Of the 900+ brands FMS has franchised, the majority were told at some point that their concept was too specialized, too niche, or too dependent on the founder's personal touch to replicate.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
              Franchise systems aren't about duplicating a person — they're about duplicating a process. If your business has profitable unit economics, a teachable operating model, and a differentiated value proposition, it's franchiseable. Our feasibility questionnaire will tell you in 5 minutes.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <Link href="/feasibility-questionnaire" className="btn btn-gold btn-lg">Take the Free Questionnaire</Link>
              <Link href="/contact" className="btn btn-outline-white btn-lg">Talk to a Consultant</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
