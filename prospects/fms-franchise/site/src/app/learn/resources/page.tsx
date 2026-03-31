import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Resources — Tools & Guides | FMS Franchise',
  description: 'Franchise resources, tools, and guides to help you evaluate, plan, and execute your franchise strategy. ROI calculator, state guidelines, feasibility tools, and more.',
};

const RESOURCES = [
  {
    category: 'Tools & Calculators',
    icon: '🧮',
    items: [
      { title: 'Franchise ROI Calculator', desc: 'Project your 5-year franchise revenue, royalty income, and system-wide growth based on your unit economics and franchisee growth assumptions.', href: '/roi-calculator', cta: 'Use Calculator', highlight: true },
      { title: 'Franchise Feasibility Questionnaire', desc: 'Answer 10 key questions to evaluate whether your business is ready to franchise — and get a personalized readiness score.', href: '/franchise-feasibility-questionnaire', cta: 'Take Assessment' },
      { title: 'Franchise Readiness Assessment', desc: 'A deeper 10-question assessment covering your business systems, financials, team, and franchise readiness across key dimensions.', href: '/franchise-readiness-assessment', cta: 'Start Assessment' },
    ],
  },
  {
    category: 'Legal & Compliance Guides',
    icon: '⚖️',
    items: [
      { title: 'General Franchising Guidelines', desc: 'An overview of the legal framework for franchising in the United States — FDD requirements, FTC compliance, registration states, and key legal milestones in the franchise development process.', href: '/learn/resources/franchising-guidelines', cta: 'Read Guide' },
      { title: 'State-by-State Franchise Guidelines', desc: 'A state-by-state breakdown of franchise registration and notice filing requirements — including which states require pre-sale registration before you can offer or sell franchises.', href: '/learn/resources/state-guidelines', cta: 'View State Guide' },
    ],
  },
  {
    category: 'Educational Guides',
    icon: '📚',
    items: [
      { title: 'What Is Franchising?', desc: 'The complete guide to understanding franchising — from the basic definitions and structure to how franchise systems work and why franchising has become one of the most powerful business growth models.', href: '/learn/what-is-franchising', cta: 'Read Guide' },
      { title: 'Why Franchise Your Business?', desc: 'The business case for franchising — why franchising accelerates growth, reduces capital requirements, and creates a scalable business model that generates ongoing royalty income.', href: '/learn/why-franchising', cta: 'Read Guide' },
      { title: 'Franchise Industry Facts & Statistics', desc: 'Key franchising industry statistics, market size data, and growth trends that demonstrate the power and scale of the franchise business model.', href: '/learn/industry-facts', cta: 'View Statistics' },
    ],
  },
  {
    category: 'How-To Guides',
    icon: '🛠️',
    items: [
      { title: 'How to Start a Franchise', desc: 'A step-by-step guide to the franchise development process — from concept evaluation and legal documentation to marketing, sales, and opening your first franchisee.', href: '/learn/how-to-guides', cta: 'Read Guide' },
      { title: 'How to Write a Franchise Operations Manual', desc: 'A practical guide to developing the franchise operations manual — the foundational document that standardizes your business system and enables replication.', href: '/learn/how-to-guides', cta: 'Read Guide' },
    ],
  },
  {
    category: 'Video Learning',
    icon: '🎬',
    items: [
      { title: 'Franchise Webinars', desc: 'On-demand and live webinars covering franchise strategy, development process, marketing, and growth — presented by Chris Conner and the FMS team.', href: '/webinars', cta: 'Watch Webinars' },
      { title: 'YouTube Channel', desc: 'Hundreds of franchise education videos from FMS — covering everything from \"What is Franchising?\" to advanced franchise development strategies.', href: 'https://www.youtube.com/@franchisemarketingsystems3808', cta: 'Watch on YouTube', external: true },
    ],
  },
];

export default function LearnResourcesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/learn">Learn</Link>
            <span>›</span>
            <span>Resources</span>
          </div>
          <span className="eyebrow">Free Resources</span>
          <h1>Franchise Resources, Tools & Guides</h1>
          <p style={{ maxWidth: '680px' }}>
            Everything you need to evaluate, plan, and execute your franchise strategy — from interactive calculators and legal compliance guides to educational content covering every stage of the franchise development journey.
          </p>
        </div>
      </div>

      {/* Resource categories */}
      <section className="section">
        <div className="container">
          {RESOURCES.map(category => (
            <div key={category.category} style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                <h2 style={{ fontSize: '1.35rem', margin: 0 }}>{category.category}</h2>
              </div>
              <div className="grid-3" style={{ display: 'grid', gap: '1.25rem' }}>
                {category.items.map(item => (
                  <div key={item.title} style={{ background: item.highlight ? 'linear-gradient(135deg, #2d4135, #3d5c49)' : '#fff', borderRadius: '16px', padding: '1.75rem', border: item.highlight ? 'none' : '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <h3 style={{ fontSize: '0.95rem', color: item.highlight ? '#fff' : '#1a1a1a', margin: 0 }}>{item.title}</h3>
                    <p style={{ fontSize: '0.83rem', color: item.highlight ? 'rgba(255,255,255,0.75)' : '#718096', lineHeight: 1.7, flex: 1 }}>{item.desc}</p>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700, color: item.highlight ? '#c8a84b' : '#2d4135', textDecoration: 'none' }}>{item.cta} →</a>
                    ) : (
                      <Link href={item.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700, color: item.highlight ? '#c8a84b' : '#2d4135', textDecoration: 'none' }}>{item.cta} →</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Go Beyond the Resources?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Resources are a great starting point. The real step forward is a free consultation with an FMS franchise consultant who can evaluate your specific business and walk you through your franchise options.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Consultation</a>
            <Link href="/franchise-your-business" className="btn btn-outline-white btn-lg">Franchise My Business</Link>
          </div>
        </div>
      </section>
    </>
  );
}
