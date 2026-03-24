import type { Metadata } from 'next';
import Link from 'next/link';
import { IconClipboard, IconRevenue, IconBook, IconDocument, IconPieChart, IconMapPin, IconRoute } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Free Franchise Resources — Guides, Templates & Tools | FMS',
  description: 'Free franchise development resources from FMS: guides, checklists, templates, and tools for SMB owners exploring franchising. Start with the free feasibility assessment.',
};

const DOWNLOADABLES = [
  {
    icon: <IconClipboard size={28} color="#3cb85e" />,
    title: 'Franchise Readiness Checklist',
    desc: '12 criteria that determine whether your business is ready to franchise — assess yourself before engaging a consultant.',
    cta: 'Take the Assessment',
    href: '/feasibility-questionnaire',
  },
  {
    icon: <IconRevenue size={28} color="#3cb85e" />,
    title: 'Franchise ROI Calculator',
    desc: 'Model your 5-year royalty income by adjusting franchisee count, average unit revenue, royalty rate, and franchise fee.',
    cta: 'Open Calculator',
    href: '/roi-calculator',
  },
  {
    icon: <IconBook size={28} color="#3cb85e" />,
    title: 'The Complete Guide to Franchising Your Business',
    desc: '30-page PDF covering every phase of franchise development — from feasibility through first franchisee opening. Honest, unbiased, based on 15 years of FMS experience.',
    cta: 'Download Free Guide',
    href: '/contact',
  },
  {
    icon: <IconDocument size={28} color="#3cb85e" />,
    title: 'Franchise vs. Licensing Comparison',
    desc: 'Side-by-side breakdown of franchising, licensing, and company-owned expansion — with the legal, operational, and financial differences that matter.',
    cta: 'Read the Comparison',
    href: '/learn/what-is-franchising',
  },
  {
    icon: <IconPieChart size={28} color="#3cb85e" />,
    title: 'Royalty Structure Benchmarks by Industry',
    desc: "What are typical franchise fees and royalty rates in your industry? Data from 979+ FMS clients across 10 industry verticals.",
    cta: 'View Industry Data',
    href: '/learn/franchise-industry-facts',
  },
  {
    icon: <IconMapPin size={28} color="#3cb85e" />,
    title: 'State Registration Guide',
    desc: 'Which states require franchise registration, what it costs, how long it takes, and the order to file in for fastest time-to-first-sale.',
    cta: 'Read the Guide',
    href: '/learn/state-guidelines',
  },
];

const ARTICLES = [
  { title: 'What Is Franchising?', href: '/learn/what-is-franchising', time: '8 min read', tag: 'Fundamentals' },
  { title: 'Why Franchise Your Business?', href: '/learn/why-franchise', time: '10 min read', tag: 'Strategy' },
  { title: 'How to Franchise Your Business', href: '/learn/how-to-franchise-your-business', time: '15 min read', tag: 'Process' },
  { title: 'Franchise Industry Facts 2026', href: '/learn/franchise-industry-facts', time: '8 min read', tag: 'Data' },
  { title: 'State Registration Guidelines', href: '/learn/state-guidelines', time: '7 min read', tag: 'Legal' },
  { title: 'Franchise FAQs', href: '/learn/faq', time: '12 min read', tag: 'Q&A' },
];

export default function FranchiseResourcesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Resources</a><span>›</span>
            <span>Free Resources</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Free Resources</span>
          <h1>Free Franchise Resources</h1>
          <p>Everything you need to self-educate before engaging a consultant — guides, tools, checklists, and calculators. No email required for most resources. No sales pitch attached.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">

          {/* Tools & Downloads */}
          <div className="section-header">
            <span className="eyebrow">Tools & Guides</span>
            <h2>Start Here</h2>
            <div className="divider" />
            <p>The most useful starting points for business owners in the early stages of exploring franchising.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            {DOWNLOADABLES.map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #f0faf3, #e2f5e8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>{item.desc}</p>
                <Link href={item.href} className="btn btn-outline-green" style={{ textAlign: 'center' }}>{item.cta} →</Link>
              </div>
            ))}
          </div>

          {/* Education Articles */}
          <div className="section-header" style={{ marginTop: '5rem' }}>
            <span className="eyebrow">Education Center</span>
            <h2>Learn the Fundamentals</h2>
            <div className="divider" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '2rem', maxWidth: '720px', margin: '2rem auto 0' }}>
            {ARTICLES.map(a => (
              <Link key={a.href} href={a.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: '12px', padding: '1.25rem 1.5rem', border: '1.5px solid #e2e8f0', textDecoration: 'none', transition: 'all 0.2s', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: '#f0f7f0', color: '#3cb85e', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.2rem 0.6rem', borderRadius: '6px', whiteSpace: 'nowrap' }}>{a.tag}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.93rem', color: '#1a1a1a' }}>{a.title}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.78rem', color: '#718096', whiteSpace: 'nowrap' }}>{a.time}</span>
                  <span style={{ color: '#3cb85e', fontWeight: 700, fontSize: '1rem' }}>→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Recommended reading path */}
          <div style={{ background: '#1a3d20', borderRadius: '20px', padding: '3rem', marginTop: '4rem' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}><IconRoute size={36} color="#e8b736" /></div>
              <h3 style={{ color: '#fff', margin: '1rem 0 0.75rem', fontSize: '1.5rem' }}>Recommended Reading Path</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '2rem' }}>New to franchising? Start here and work through each resource in order. By the time you reach the FAQ, you'll have everything you need to have a productive first call with a consultant.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', marginBottom: '2rem' }}>
                {[
                  { step: '01', label: 'What Is Franchising?', href: '/learn/what-is-franchising' },
                  { step: '02', label: 'Why Franchise Your Business?', href: '/learn/why-franchise' },
                  { step: '03', label: 'Take the Readiness Assessment', href: '/feasibility-questionnaire' },
                  { step: '04', label: 'How to Franchise Your Business', href: '/learn/how-to-franchise-your-business' },
                  { step: '05', label: 'Franchise Industry Facts', href: '/learn/franchise-industry-facts' },
                  { step: '06', label: 'Franchise FAQs', href: '/learn/faq' },
                  { step: '07', label: 'Book a Free Consultation', href: '/contact' },
                ].map(item => (
                  <Link key={item.step} href={item.href} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '0.75rem 1rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#3cb85e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 900, color: '#fff', flexShrink: 0 }}>{item.step}</span>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>{item.label}</span>
                    <span style={{ marginLeft: 'auto', color: '#e8b736', fontWeight: 700 }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
