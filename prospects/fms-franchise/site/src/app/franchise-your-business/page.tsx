import type { Metadata } from 'next';
import Link from 'next/link';
import { IconRevenue, IconClipboard, IconCheckCircle, IconTarget, IconTrendingUp, IconHandshake } from '../components/Icons';

export const metadata: Metadata = {
  title: 'Franchise Your Business — How FMS Helps You Scale',
  description: 'Ready to franchise your business? FMS provides the full A-Z franchise development, sales, and marketing system to help you scale through franchising successfully.',
};

const PROCESS_STEPS = [
  { step: '01', title: 'Free Feasibility Assessment', time: 'Week 1', desc: 'Start with an honest, no-obligation assessment of your business\'s franchise potential. Our consultants evaluate your margins, replicability, market position, and readiness for development.' },
  { step: '02', title: 'Strategic Planning & Model Design', time: 'Weeks 2–4', desc: 'We design your franchise model — fee structure, royalties, territory definitions, franchisee qualifications, and the financial model that drives your growth plan.' },
  { step: '03', title: 'Legal & Compliance (FDD)', time: 'Months 2–4', desc: 'Our team coordinates with leading franchise attorneys to prepare your Franchise Disclosure Document and register in all applicable states.' },
  { step: '04', title: 'Operations Manual Development', time: 'Months 3–5', desc: 'We document every process, system, and standard in your business — creating a 400+ page operations manual that lets franchisees replicate your model.' },
  { step: '05', title: 'Training Program & Launch Kit', time: 'Month 5–6', desc: 'We build your franchisee training program and launch kit — everything your first franchisees need to open successfully without you in the room.' },
  { step: '06', title: 'Franchise Sales & Growth', time: 'Month 6+', desc: 'FMS manages your franchise sales pipeline — portal listings, lead qualification, broker relationships, Discovery Days, and deal closings — on an ongoing basis.' },
];

export default function FranchiseYourBusinessPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#e8b736' }}>Start Here</span>
          <h1>Franchise Your Business With Confidence</h1>
          <p style={{ maxWidth: '640px' }}>Your business model works. FMS builds the system that lets others prove it — without you losing control of the brand you built.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/franchise-readiness-assessment" className="btn btn-gold">Take Free Assessment</Link>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">Book Free Consultation</Link>
          </div>
        </div>
      </div>

      {/* Why franchise now */}
      <section className="section section-alt">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">The Opportunity</span>
              <h2>The Case for Franchising Your Business Right Now</h2>
              <div className="divider divider-left" />
              <p style={{ marginTop: '1.25rem', color: '#4a5568', lineHeight: 1.8 }}>
                There are two ways to scale a successful business: open more locations yourself (expensive, slow, capital-intensive) or build a franchise system that lets motivated owner-operators scale it for you.
              </p>
              <p style={{ marginTop: '1rem', color: '#4a5568', lineHeight: 1.8 }}>
                Franchise owners invest their own capital. They operate with the urgency of ownership. They build equity in something they control. And they pay you royalties for the system that made it possible.
              </p>
              <p style={{ marginTop: '1rem', fontWeight: 700, color: '#1a3d20' }}>
                FMS has helped 900+ business owners make this transition. The process is learnable. The model is proven. The question is whether your business is ready.
              </p>
            </div>
            <div className="grid-2" style={{ display: 'grid', gap: '1.25rem' }}>
              {[
                { num: '$825B', label: 'US Franchise Industry GDP' },
                { num: '8.9M', label: 'Franchise-Employed Americans' },
                { num: '300K+', label: 'Franchise Locations' },
                { num: '41%', label: 'US Retail from Franchises' },
              ].map(stat => (
                <div key={stat.label} style={{ background: '#fff', borderRadius: '16px', padding: '1.75rem', textAlign: 'center', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.25rem', fontWeight: 900, color: '#1a3d20', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#718096', marginTop: '0.35rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-light" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow eyebrow-light">The Process</span>
            <h2 style={{ color: '#fff' }}>From Business Owner to Franchisor in 6 Steps</h2>
            <div className="divider divider-gold" />
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>The full FMS franchise development process — what happens when, who does what, and what you can expect at each phase.</p>
          </div>
          <div style={{ position: 'relative' }}>
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', marginBottom: i < PROCESS_STEPS.length - 1 ? '2rem' : 0, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#e8b736', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: '#1a3d20', flexShrink: 0 }}>{step.step}</div>
                  {i < PROCESS_STEPS.length - 1 && <div style={{ width: '2px', flex: 1, background: 'rgba(255,255,255,0.1)', marginTop: '0.5rem', minHeight: '40px' }} />}
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.05rem' }}>{step.title}</h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, background: 'rgba(232,183,54,0.15)', color: '#e8b736', padding: '0.2rem 0.75rem', borderRadius: '999px' }}>{step.time}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is right for franchising */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Qualifying Criteria</span>
            <h2>Is Your Business Ready to Franchise?</h2>
            <div className="divider" />
            <p>Not every business is franchise-ready — and FMS will tell you honestly if yours isn't. Here's what we look for in the evaluation.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { icon: <IconRevenue size={26} color="#3cb85e" />, title: 'Strong Unit Economics', desc: 'Your business generates enough margin (15–25%+) to support profitable franchisee operation after royalty payments, local marketing, and overhead.' },
              { icon: <IconClipboard size={26} color="#3cb85e" />, title: 'Documented Systems', desc: 'Your business can be operated by someone other than you — processes are (or can be) documented, teachable, and replicable in new markets.' },
              { icon: <IconCheckCircle size={26} color="#3cb85e" />, title: 'Proven Track Record', desc: 'At least 1–2 years of profitable operation with consistent results. Franchising scales success — it rarely creates it.' },
              { icon: <IconTarget size={26} color="#3cb85e" />, title: 'Market Differentiation', desc: 'Your concept offers something meaningfully different from competitors — or serves a market with insufficient competition in available territories.' },
              { icon: <IconTrendingUp size={26} color="#3cb85e" />, title: 'Scalable Business Model', desc: "Your value proposition isn't wholly dependent on your personal presence. Franchisees must be able to deliver the same customer experience." },
              { icon: <IconHandshake size={26} color="#3cb85e" />, title: 'Commitment to Franchisees', desc: 'Franchising is a long-term relationship. You must be prepared to support, train, and develop franchisees as operators — not just collect royalties.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #f0faf3, #e2f5e8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/franchise-readiness-assessment" className="btn btn-gold btn-lg">Take the Free Readiness Assessment</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Take the First Step?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Start with a free, honest assessment of your franchise potential. No obligation. No hard sell. Just expert guidance from people who've done this 900+ times.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/feasibility-questionnaire" className="btn btn-outline-white btn-lg">Take Free Questionnaire</Link>
          </div>
        </div>
      </section>
    </>
  );
}
