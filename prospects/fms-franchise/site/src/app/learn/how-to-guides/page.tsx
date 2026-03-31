import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise How-To Guides — Step-by-Step Resources | FMS',
  description: 'Step-by-step how-to guides for franchisors and aspiring franchise owners. Learn how to start a franchise, write an operations manual, build an FDD, and more from FMS experts.',
};

const GUIDES = [
  {
    title: 'How to Start a Franchise',
    slug: 'how-to-start-a-franchise',
    description: 'The complete step-by-step walkthrough for converting a successful business into a scalable franchise system. From feasibility through your first franchisee signing.',
    readTime: '15 min read',
    category: 'Franchise Development',
    href: '/learn/how-to-guides/how-to-start-a-franchise',
  },
  {
    title: 'How to Write a Franchise Operations Manual',
    slug: 'how-to-write-a-franchise-operations-manual',
    description: 'Your operations manual is the document that lets someone else run your business without you. Learn what it must contain, how to structure it, and how to make it actually usable for franchisees.',
    readTime: '12 min read',
    category: 'Operations',
    href: '/learn/how-to-guides/how-to-write-a-franchise-operations-manual',
  },
  {
    title: 'How to Write a Franchise Disclosure Document (FDD)',
    slug: 'how-to-write-franchise-disclosure-document',
    description: 'All 23 items in a Franchise Disclosure Document explained — what each one requires, what goes wrong most often, and how to make yours a sales tool, not just a legal obligation.',
    readTime: '18 min read',
    category: 'Legal',
    href: '/blog/how-to-write-franchise-disclosure-document',
  },
  {
    title: 'How to Franchise Your Business: The Complete Guide',
    slug: 'how-to-franchise-your-business-2025',
    description: 'A comprehensive A-Z guide to franchising your business in 2025. Covers feasibility, FDD preparation, operations manuals, franchise sales, and ongoing support systems.',
    readTime: '20 min read',
    category: 'Franchise Development',
    href: '/blog/how-to-franchise-your-business-2025',
  },
  {
    title: 'How to Design Franchise Territories',
    slug: 'franchise-territory-design',
    description: 'Territory size, exclusivity provisions, and demographic parameters — how to design franchise territories that protect franchisees while maximizing your sellable inventory.',
    readTime: '10 min read',
    category: 'Strategy',
    href: '/blog/franchise-territory-design',
  },
  {
    title: 'How to Structure Franchise Royalties',
    slug: 'franchise-royalty-structure',
    description: 'Royalty rate, royalty base, minimum royalties, technology fees — how to structure your royalty model to work for you and remain attractive to franchisees.',
    readTime: '10 min read',
    category: 'Finance',
    href: '/blog/franchise-royalty-structure',
  },
  {
    title: 'How to Build a Franchisee Training Program',
    slug: 'franchisee-training-programs',
    description: 'The training program that launches your first franchisee defines your entire system\'s success rate. Here\'s what the best programs include — and how to build one from scratch.',
    readTime: '9 min read',
    category: 'Operations',
    href: '/blog/franchisee-training-programs',
  },
  {
    title: 'How to Host a Franchise Discovery Day',
    slug: 'franchise-discovery-day',
    description: 'Discovery Day is the final step before a candidate becomes a franchisee. How to design, structure, and run a Discovery Day that converts at 40%+ — above the 22% industry average.',
    readTime: '8 min read',
    category: 'Franchise Sales',
    href: '/blog/franchise-discovery-day',
  },
];

const CATEGORIES = ['All', 'Franchise Development', 'Legal', 'Operations', 'Finance', 'Strategy', 'Franchise Sales'];

export default function HowToGuidesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Learn</a><span>›</span>
            <span>How-To Guides</span>
          </div>
          <span className="eyebrow" style={{ color: '#eebc4a' }}>Expert Resources</span>
          <h1>Franchise How-To Guides</h1>
          <p>Step-by-step guidance from FMS franchise consultants with 25+ years of experience. Everything you need to know about building, launching, and scaling a franchise system.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">
              Speak with a Franchise Expert
            </Link>
            <Link href="/learn" className="btn btn-outline-white">
              All Learning Resources
            </Link>
          </div>
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">About These Guides</span>
              <h2>Written by Practitioners, Not Content Mills</h2>
              <div className="divider" />
              <p style={{ lineHeight: 1.8, color: '#4a5568', marginBottom: '1.25rem' }}>
                FMS has helped 900+ businesses become franchise systems over 25+ years. Our how-to guides are written by our consultants based on real-world franchise development experience — not by generalist content writers.
              </p>
              <p style={{ lineHeight: 1.8, color: '#4a5568', marginBottom: '1.75rem' }}>
                Whether you're exploring franchising for the first time or building out your support infrastructure, these guides give you the honest, actionable detail you need to move forward with confidence.
              </p>
              <Link href="/franchise-feasibility-questionnaire" className="btn btn-gold">
                Take the Feasibility Questionnaire
              </Link>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '📋', label: '8+ in-depth franchise how-to guides' },
                  { icon: '⏱️', label: 'Guides range from 8–20 min reads' },
                  { icon: '💬', label: 'Written by 20+ franchise consultants' },
                  { icon: '🔄', label: 'Updated regularly for 2025 requirements' },
                  { icon: '🌎', label: 'Covers US and international franchising' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', borderRadius: '12px', padding: '1rem 1.25rem', border: '1.5px solid #e2e8f0' }}>
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                    <span style={{ fontWeight: 600, color: '#2d4135', fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guides Grid ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Browse All Guides</span>
            <h2>Step-by-Step Franchise Guides</h2>
          </div>

          {/* Category pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'center' }}>
            {CATEGORIES.map((cat, i) => (
              <div key={cat} style={{ padding: '0.45rem 1rem', borderRadius: '999px', background: i === 0 ? '#1a3d20' : '#fff', color: i === 0 ? '#fff' : '#718096', fontSize: '0.82rem', fontWeight: 700, border: '1.5px solid', borderColor: i === 0 ? '#1a3d20' : '#e2e8f0', cursor: 'pointer' }}>
                {cat}
              </div>
            ))}
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {GUIDES.map((guide, i) => (
              <Link
                key={guide.slug}
                href={guide.href}
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s, transform 0.2s' }}
              >
                <div style={{ background: `linear-gradient(135deg, hsl(${130 + (i * 23) % 80}, 40%, 16%), hsl(${140 + (i * 19) % 60}, 50%, 28%))`, padding: '1.75rem 1.75rem 1.5rem', minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#eebc4a', marginBottom: '0.65rem' }}>{guide.category}</div>
                  <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 700, lineHeight: 1.38, color: '#fff', margin: 0, fontFamily: 'Montserrat, sans-serif' }}>{guide.title}</h3>
                </div>
                <div style={{ padding: '1.25rem 1.75rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.7, flex: 1, margin: 0 }}>{guide.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #f0f4f0' }}>
                    <span style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 500 }}>{guide.readTime}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#35a84a' }}>Read Guide →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── More Resources ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">More Learning Resources</span>
            <h2>Explore All Franchise Education</h2>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { icon: '❓', title: 'What is Franchising?', desc: 'The fundamentals of the franchise model — how it works, what it costs, and whether it\'s right for your business.', href: '/learn/what-is-franchising', cta: 'Read Now' },
              { icon: '📊', title: 'Franchise Industry Facts', desc: 'Data and statistics on the franchise industry — market size, growth trends, and success rates.', href: '/learn/industry-facts', cta: 'View Stats' },
              { icon: '🙋', title: 'Franchising FAQs', desc: '25 of the most common questions about franchising answered honestly by FMS consultants.', href: '/learn/faqs', cta: 'Read FAQs' },
              { icon: '📚', title: 'Resources & Guidelines', desc: 'FTC franchise rules, state-by-state guidelines, and key legal resources for franchisors.', href: '/learn/resources', cta: 'Browse Resources' },
              { icon: '🎬', title: 'Webinars', desc: 'Live and on-demand franchise webinars hosted by FMS experts.', href: '/webinars', cta: 'Watch Now' },
              { icon: '🔢', title: 'ROI Calculator', desc: 'Model your 5-year franchise revenue, royalties, and network growth with our interactive calculator.', href: '/roi-calculator', cta: 'Calculate My ROI' },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.6rem', color: '#2d4135' }}>{item.title}</h3>
                <p style={{ color: '#4a5568', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{item.desc}</p>
                <Link href={item.href} className="btn btn-outline" style={{ fontSize: '0.85rem' }}>{item.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow eyebrow-gold">Ready to Take the Next Step?</span>
          <h2>Talk to a Franchise Consultant Today</h2>
          <p>Our guides give you knowledge — our consultants give you a plan. Schedule a free, no-obligation call with an FMS franchise strategist.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">Get Free Consultation</Link>
            <a href="tel:8006100292" className="btn btn-outline-white">Call 800-610-0292</a>
          </div>
        </div>
      </section>
    </>
  );
}
