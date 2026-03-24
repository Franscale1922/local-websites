import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Education Hub — Learn Everything About Franchising',
  description: 'The FMS Franchise Learn Hub: what is franchising, why franchise your business, how to franchise, industry facts, state guidelines, and FAQs. Free resources.',
};

const LEARN_ARTICLES = [
  { title: 'What Is Franchising?', href: '/learn/what-is-franchising', desc: 'The fundamentals of how franchising works, what franchisees and franchisors do, and why it\'s one of the most proven business expansion models in history.' },
  { title: 'Why Franchise Your Business?', href: '/learn/why-franchise', desc: 'The data-driven case for franchising: faster growth, reduced capital requirements, distributed risk, and built-in operator motivation that employed managers can\'t replicate.' },
  { title: 'How to Franchise Your Business', href: '/learn/how-to-franchise-your-business', desc: 'A step-by-step walkthrough of the franchise development process — from feasibility study through FDD, operations manual, training program, and first franchise sale.' },
  { title: 'Franchise Industry Facts', href: '/learn/franchise-industry-facts', desc: 'Current data on franchise industry size, growth rates, top industries, franchisee success rates, and what the numbers mean for business owners considering franchising.' },
  { title: 'State Registration Guidelines', href: '/learn/state-guidelines', desc: 'Which of the 14 franchise registration states apply to your concept, what registration requires, timelines, and how FMS manages this process for you.' },
  { title: 'Free Franchise Resources', href: '/learn/resources', desc: 'Templates, checklists, guides, and tools for business owners exploring franchising. Download free resources from FMS\'s library of franchise development materials.' },
  { title: 'Franchise FAQs', href: '/learn/faq', desc: 'The 25 most common questions we receive from business owners considering franchising — answered honestly by FMS franchise consultants with 15+ years of experience.' },
];

export default function LearnPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Learn</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Education Hub</span>
          <h1>Everything You Need to Know About Franchising</h1>
          <p>From first question to signed agreement — the FMS Learn Hub gives you an honest, expert-backed education on every phase of the franchise process. No paywalls. No sales pitch.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/franchise-readiness-assessment" className="btn btn-gold">Take Readiness Assessment</Link>
            <Link href="/roi-calculator" className="btn btn-outline-white">ROI Calculator</Link>
          </div>
        </div>
      </div>

      {/* Quick stat */}
      <section style={{ background: '#1a3d20', padding: '2rem 0' }}>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '3,500+', label: 'Active Franchise Brands in the US' },
              { num: '$825B', label: 'Franchise Industry GDP' },
              { num: '8.9M', label: 'Americans Employed by Franchises' },
              { num: '15 years', label: 'FMS Experience in Franchise Education' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 900, color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content cards */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Learn</span>
            <h2>Franchise Education Resources</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {LEARN_ARTICLES.map((article, i) => (
              <Link key={article.href} href={article.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', height: '100%', transition: 'all 0.2s', cursor: 'pointer' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg, #1a3d20, #3cb85e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontFamily: 'Outfit, sans-serif', fontSize: '1rem', marginBottom: '1.25rem' }}>{i + 1}</div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{article.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{article.desc}</p>
                  <div style={{ marginTop: '1rem', fontSize: '0.875rem', fontWeight: 700, color: '#3cb85e' }}>Read more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive tools callout */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-light" style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow eyebrow-light">Free Tools</span>
            <h2 style={{ color: '#fff' }}>Don't Just Read — Calculate</h2>
            <div className="divider divider-gold" />
          </div>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Franchise Readiness Assessment</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>10 questions. 5 minutes. Your personalized readiness score with specific guidance on what to improve before franchising.</p>
              <Link href="/franchise-readiness-assessment" className="btn btn-gold">Take Free Assessment →</Link>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Franchise ROI Calculator</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>Model your 5-year franchisor revenue with our interactive calculator. Adjust fees, royalty rate, and growth projections instantly.</p>
              <Link href="/roi-calculator" className="btn btn-outline-white">Open ROI Calculator →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Move From Learning to Doing?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Talk to a franchise consultant who's done this 900+ times. Free. No obligation. No hard sell.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/blog" className="btn btn-outline-white btn-lg">Read Our Blog →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
