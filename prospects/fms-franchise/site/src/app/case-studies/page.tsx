import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Case Studies | FMS Franchise Client Success Stories',
  description: 'Why FMS? Because franchise success requires strategy, not just paperwork. Read real FMS franchise case studies across food, home services, health, education, and more.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/case-studies',
  },
  openGraph: {
    title: 'Franchise Case Studies | FMS Franchise Client Success Stories',
    description: 'In-depth franchise case studies from FMS Franchise Marketing Systems — 900+ brands franchised across every major industry since 2009.',
    url: 'https://www.fmsfranchise.com/case-studies',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'FMS Franchise Case Studies' }],
  },
};

const CASE_STUDIES = [
  {
    title: 'Blue Mint Thai',
    subtitle: 'From Bangkok Roots to Multi-Unit US Franchise',
    industry: 'Food & Beverage',
    excerpt: 'Authentic Thai cuisine concept turned national franchise brand. FMS structured the entire franchise development process for Blue Mint Thai from legal documentation through initial franchise sales.',
    href: 'https://www.fmsfranchise.com/blue-mint-thai-franchise-case-study/',
    color: '#e8b736',
    icon: '🍜',
  },
  {
    title: 'Foxtail Coffee',
    subtitle: 'Rapid Multi-State Coffee Franchise Expansion',
    industry: 'Food & Beverage',
    excerpt: 'Foxtail Coffee partnered with FMS to build its franchise growth engine. The result was a structured, scalable system that supported aggressive multi-state expansion.',
    href: 'https://www.fmsfranchise.com/franchise-growth-case-study-foxtail-coffee/',
    color: '#e8b736',
    icon: '☕',
  },
  {
    title: 'Turquoise Wine Bar',
    subtitle: 'Building a Wine Bar Franchise Category',
    industry: 'Food & Beverage',
    excerpt: 'A unique wine bar and tapas concept that needed a franchise framework to match its distinctive brand. FMS developed the FDD, operations systems, and franchise sales strategy.',
    href: 'https://www.fmsfranchise.com/turquoise-wine-bar-franchise-case-study/',
    color: '#e8b736',
    icon: '🍷',
  },
  {
    title: 'Sacred Leaf CBD',
    subtitle: 'Building a Premium Cannabis Retail Franchise Brand',
    industry: 'Health & Wellness',
    excerpt: 'Sacred Leaf CBD needed a franchise structure that could navigate a complex regulatory environment while positioning the brand as a premium retail concept.',
    href: 'https://www.fmsfranchise.com/sacred-leaf-cbd-franchise/',
    color: '#3cb85e',
    icon: '🌿',
  },
  {
    title: 'Craft House Pizza',
    subtitle: 'Premium Pizza Concept Franchise Expansion',
    industry: 'Food & Beverage',
    excerpt: 'A craft pizza brand with strong local loyalty needed the right franchise infrastructure to grow without losing what made it special. FMS delivered.',
    href: 'https://www.fmsfranchise.com/craft-house-pizza-franchise-expansion/',
    color: '#e8b736',
    icon: '🍕',
  },
  {
    title: 'Golf Entertainment Services',
    subtitle: 'Growing Golf Entertainment Through Franchising',
    industry: 'Entertainment',
    excerpt: 'As indoor golf entertainment exploded, FMS helped one brand structure a franchise offering that captured the moment with speed and strategic discipline.',
    href: 'https://www.fmsfranchise.com/growth-golf-entertainment-franchising/',
    color: '#5b8dee',
    icon: '⛳',
  },
  {
    title: 'Dogtopia',
    subtitle: 'Building the Premier Dog Day Care Franchise System',
    industry: 'Pet Services',
    excerpt: 'Dogtopia worked with FMS to build and scale its franchise program into one of the leading pet services franchise brands in North America.',
    href: 'https://www.fmsfranchise.com/dogtopia-franchise-system/',
    color: '#f59e0b',
    icon: '🐾',
  },
  {
    title: 'Nerds To Go',
    subtitle: 'Technology Service Franchise Expansion',
    industry: 'Business Services',
    excerpt: 'An in-home tech support concept leveraged FMS\'s franchise development expertise to build a scalable system with strong franchisee support infrastructure.',
    href: 'https://www.fmsfranchise.com/nerds-to-go/',
    color: '#8b5cf6',
    icon: '💻',
  },
  {
    title: 'Fundraising University',
    subtitle: 'Unique Education Services Franchise Growth',
    industry: 'Education',
    excerpt: 'Fundraising University built a franchise model around a repeatable, high-demand service. FMS helped create the franchise framework to scale it nationally.',
    href: 'https://www.fmsfranchise.com/fundraising-university-franchise/',
    color: '#5b8dee',
    icon: '🎓',
  },
  {
    title: 'Rock N Roll Sushi',
    subtitle: 'Rolling Out a National Sushi Franchise Brand',
    industry: 'Food & Beverage',
    excerpt: 'A high-energy sushi concept needed a franchise system that matched its bold brand identity. FMS structured the development process for national expansion.',
    href: 'https://www.fmsfranchise.com/rock-n-roll-sushi/',
    color: '#e8b736',
    icon: '🍱',
  },
  {
    title: 'Women Owned Franchise Growth',
    subtitle: 'The Rise of Women-Led Franchise Brands',
    industry: 'Multiple',
    excerpt: 'FMS has been at the forefront of supporting women-owned franchise brands — a category growing significantly faster than the overall franchise industry.',
    href: 'https://www.fmsfranchise.com/growth-in-women-owned-franchising/',
    color: '#ec4899',
    icon: '🌟',
  },
  {
    title: 'Franchise Success in 2026',
    subtitle: 'What Winning Franchise Brands Are Doing Differently',
    industry: 'Multiple',
    excerpt: 'An in-depth analysis of what separates franchise brands that scale successfully from those that stall — based on FMS data across 700+ franchise clients.',
    href: 'https://www.fmsfranchise.com/franchise-success-in-2026/',
    color: '#4a7c59',
    icon: '📈',
  },
];

const INDUSTRY_COLORS: Record<string, string> = {
  'Food & Beverage': '#e8b736',
  'Home Services': '#4a7c59',
  'Health & Wellness': '#3cb85e',
  'Education': '#5b8dee',
  'Business Services': '#8b5cf6',
  'Pet Services': '#f59e0b',
  'Entertainment': '#06b6d4',
  'Beauty & Personal Care': '#ec4899',
  'Multiple': '#94a3b8',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a3a1c 0%, #2c4a2e 60%, #3a5e3c 100%)', paddingTop: '120px', paddingBottom: '5rem', textAlign: 'center' }}>
        <div className="container">
          <nav style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</a>
            <span>›</span>
            <span style={{ color: '#c8a84b' }}>Case Studies</span>
          </nav>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>
            STRATEGY · NOT JUST PAPERWORK
          </span>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Case Studies
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 2rem' }}>
            Why FMS? Because franchise success requires strategy, not just paperwork. See the real results we&apos;ve delivered across industries, brand sizes, and growth stages.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" className="btn btn-gold">Start Your Story</Link>
            <Link href="/our-clients" className="btn btn-outline-white">View All Clients</Link>
          </div>
        </div>
      </section>

      {/* Sub-nav */}
      <section style={{ background: '#f8f8f6', borderBottom: '1px solid #e0e8e2' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto' }}>
            {[
              { label: 'Our Clients', href: '/our-clients', active: false },
              { label: 'Case Studies', href: '/case-studies', active: true },
              { label: 'Testimonials', href: '/our-clients/testimonials', active: false },
            ].map(tab => (
              <Link key={tab.label} href={tab.href} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: tab.active ? 700 : 600, fontSize: '0.85rem', color: tab.active ? '#2c4a2e' : '#888', textDecoration: 'none', padding: '1rem 0', borderBottom: tab.active ? '2.5px solid #c8a84b' : '2.5px solid transparent', whiteSpace: 'nowrap', display: 'block' }}>
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section style={{ padding: '5rem 0', background: '#f8f8f6' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {CASE_STUDIES.map((cs) => (
              <a
                key={cs.title}
                href={cs.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e0e8e2', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '2.25rem' }}>{cs.icon}</div>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: INDUSTRY_COLORS[cs.industry] || '#4a7c59', background: `${INDUSTRY_COLORS[cs.industry] || '#4a7c59'}18`, padding: '0.25rem 0.6rem', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                      {cs.industry}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#1a3a1c', marginBottom: '0.35rem' }}>{cs.title}</h2>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: '#4a7c59', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.85rem' }}>{cs.subtitle}</div>
                  <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: '#555', lineHeight: 1.7, flexGrow: 1, marginBottom: '1.25rem' }}>{cs.excerpt}</p>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#4a7c59', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    Read Case Study <span style={{ fontSize: '1rem' }}>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#999', textAlign: 'center', marginTop: '2.5rem', fontStyle: 'italic' }}>
            More case studies available — contact FMS to discuss a case study relevant to your industry.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>YOUR BRAND COULD BE NEXT</span>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Let&apos;s Build Your Case Study</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>Every one of these case studies started with a free consultation. The strategy, structure, and results came after. Let&apos;s talk about yours.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline-white btn-lg">Franchise Feasibility Quiz</Link>
          </div>
        </div>
      </section>
    </>
  );
}
