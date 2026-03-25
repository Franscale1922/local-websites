import type { Metadata } from 'next';
import Link from 'next/link';
import { IconLayers, IconTarget, IconHandshake, IconDocument, IconSearch, IconMegaphone } from '../components/Icons';

export const metadata: Metadata = {
  title: 'Franchise Consulting Services — Full-Service Franchise Development',
  description: 'FMS offers end-to-end franchise consulting: development, sales, management, marketing, and business planning. 900+ brands franchised since 2009.',
};

const SERVICES = [
  {
    title: 'Franchise Development',
    slug: 'franchise-development',
    icon: '/icons/franchise-development.png',
    badge: 'Most Popular',
    badgeColor: '#e8b736',
    desc: 'From feasibility analysis through your complete Franchise Disclosure Document, operations manual, and brand launch — we build your entire franchise system from the ground up.',
    bullets: ['Feasibility Study & Market Analysis', 'Franchise Disclosure Document (FDD)', 'Operations Manual Development', 'Franchise Agreement & Legal Structure', 'Territory Design & Mapping', 'Franchisee Training Program'],
    stat: '900+',
    statLabel: 'Brands Developed',
    href: '/services/franchise-development',
  },
  {
    title: 'Franchise Sales',
    slug: 'franchise-sales',
    icon: '/icons/franchise-sales.png',
    badge: 'High Impact',
    badgeColor: '#3cb85e',
    desc: 'Our dedicated franchise sales consultants qualify your leads, manage the pipeline, present your concept to serious buyers, and close deals with the right owner-operators.',
    bullets: ['Lead Qualification & Scoring', 'Franchise Sales Presentations', 'Discovery Day Management', 'Franchise Broker Network Access', 'Pipeline CRM & Reporting', 'Franchisee Vetting & Award Process'],
    stat: '11,340',
    statLabel: 'Franchises Sold',
    href: '/services/franchise-sales',
  },
  {
    title: 'Management & Support',
    slug: 'management-support',
    icon: '/icons/management-support.png',
    badge: null,
    badgeColor: null,
    desc: 'After your first franchisees join, the real work begins. FMS provides ongoing support systems, training coordination, discovery days, conventions, and brand standards compliance.',
    bullets: ['Franchisee Onboarding Systems', 'Training Program Development', 'Discovery Day Coordination', 'Franchise Conventions & Events', 'Brand Standards & Compliance', 'Ongoing Franchisee Relations'],
    stat: '234',
    statLabel: 'Successful Exits',
    href: '/services/management-support',
  },
  {
    title: 'Franchise Business Plan',
    slug: 'franchise-business-plan',
    icon: '/icons/business-plan.png',
    badge: null,
    badgeColor: null,
    desc: 'A professionally structured franchise business plan communicates your model\'s financial value to prospective franchisees, investors, and lenders who need proof before committing.',
    bullets: ['Financial Projections & Pro Forma', 'Market Analysis & Feasibility', 'Unit Economics Modeling', 'Franchisee Investment Overview', 'Break-Even Analysis', 'Presentation-Ready Format'],
    stat: '15+',
    statLabel: 'Years Experience',
    href: '/services/franchise-business-plan',
  },
  {
    title: 'Efficiency Audit',
    slug: 'efficiency-audit',
    icon: '/icons/efficiency-audit.png',
    badge: null,
    badgeColor: null,
    desc: 'Before you can franchise it, your business needs to be audit-proof. Our deep operational review identifies the gaps that would cost you franchisees — and your reputation.',
    bullets: ['Operational Systems Review', 'Process Documentation Gaps', 'Profitability Analysis', 'Replicability Assessment', 'Compliance & Standards Gaps', 'Improvement Roadmap'],
    stat: '67',
    statLabel: 'Expert Consultants',
    href: '/services/efficiency-audit',
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: '/icons/digital-marketing.png',
    badge: null,
    badgeColor: null,
    desc: 'Franchise-specific digital marketing: lead generation for your franchise sales pipeline, branded marketing assets, website design, and ongoing marketing support for your franchisees.',
    bullets: ['Franchise Lead Generation', 'Branding & Identity', 'Website Design & Development', 'Social Media Management', 'Email Marketing', 'Franchisee Co-Op Marketing'],
    stat: '7',
    statLabel: 'Global Offices',
    href: '/services/digital-marketing',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>Services</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>What We Do</span>
          <h1>Full-Service Franchise Consulting</h1>
          <p>FMS is the only franchise consulting firm that handles every phase of franchise growth — development, sales, marketing, and management — all in-house, all under one roof.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">Take Free Questionnaire</Link>
            <Link href="/contact" className="btn btn-outline-white">Book Free Consultation</Link>
          </div>
        </div>
      </div>

      {/* Services intro */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">The A-Z Approach</span>
            <h2>Every Phase. One Firm.</h2>
            <div className="divider" />
            <p>Most franchise consulting firms are partial — they handle <em>either</em> development <em>or</em> sales, but never both. FMS is different. Our 67 in-house specialists cover every phase of your franchise journey so you never lose momentum midway.</p>
          </div>

          <div className="grid-3" style={{ gap: '2rem', marginTop: '3rem' }}>
            {SERVICES.map((svc) => (
              <div key={svc.slug} style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}>
                {/* Card top */}
                <div style={{ background: 'linear-gradient(135deg, #1a3d20 0%, #2a5530 100%)', padding: '2rem', position: 'relative' }}>
                  {svc.badge && (
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: svc.badgeColor!, color: svc.badgeColor === '#e8b736' ? '#1a3d20' : '#fff', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.2rem 0.65rem', borderRadius: '999px' }}>
                      {svc.badge}
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '12px', background: 'rgba(60,184,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(60,184,94,0.25)' }}>
                      {svc.slug === 'franchise-development' && <IconLayers size={32} color="#3cb85e" />}
                      {svc.slug === 'franchise-sales' && <IconTarget size={32} color="#3cb85e" />}
                      {svc.slug === 'management-support' && <IconHandshake size={32} color="#3cb85e" />}
                      {svc.slug === 'franchise-business-plan' && <IconDocument size={32} color="#3cb85e" />}
                      {svc.slug === 'efficiency-audit' && <IconSearch size={32} color="#3cb85e" />}
                      {svc.slug === 'digital-marketing' && <IconMegaphone size={32} color="#3cb85e" />}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 900, color: '#e8b736', lineHeight: 1 }}>{svc.stat}</div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'rgba(255,255,255,0.5)', marginTop: '0.15rem' }}>{svc.statLabel}</div>
                    </div>
                  </div>
                  <h3 style={{ color: '#fff', marginTop: '1.25rem', fontSize: '1.2rem' }}>{svc.title}</h3>
                </div>
                {/* Card body */}
                <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.75, marginBottom: '1.25rem' }}>{svc.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
                    {svc.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: '#4a5568' }}>
                        <span style={{ color: '#3cb85e', fontWeight: 900, fontSize: '1rem', lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={svc.href} className="btn btn-green" style={{ marginTop: '1.75rem', justifyContent: 'center' }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why full-service matters */}
      <section className="section section-dark">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-light">The FMS Difference</span>
              <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>Why Full-Service Wins</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Most business owners who try to franchise alone — or with a "development-only" firm — spend 2+ years and $80,000+ before realizing they needed a complete team. Here's what full-service actually means:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { q: 'No hand-offs', a: 'Your team stays consistent from feasibility study through your first 10 franchisee closings. No agency switches midstream.' },
                  { q: 'Built-in accountability', a: 'Our performance-based model means we succeed when you succeed. Honest assessments, relentless execution.' },
                  { q: 'Institutional knowledge', a: '900+ brands across every industry means your consultant has seen every challenge before — and knows what actually works.' },
                ].map(item => (
                  <div key={item.q} style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3cb85e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 900, color: '#fff', flexShrink: 0, marginTop: '2px' }}>✓</div>
                    <div>
                      <div style={{ color: '#e8b736', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{item.q}</div>
                      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid-2" style={{ display: 'grid', gap: '1.25rem' }}>
              {[
                { num: '900+', label: 'Brands Franchised' },
                { num: '11,340', label: 'Franchises Sold' },
                { num: '67', label: 'In-House Experts' },
                { num: '7', label: 'Global Offices' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.75rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.75rem', fontWeight: 900, color: '#e8b736', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.4rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Get Started</span>
          <h2 style={{ color: '#fff', margin: '0.75rem 0 1rem' }}>Ready to Franchise Your Business?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Schedule a free consultation with our franchise experts. We'll assess your business, explain the full process, and tell you honestly whether you're franchise-ready.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/feasibility-questionnaire" className="btn btn-outline-white btn-lg">Take Free Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
