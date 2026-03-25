'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedStats from './AnimatedStats';
import {
  IconLayers, IconTarget, IconHandshake, IconDocument, IconSearch, IconMegaphone,
  IconMapPin, IconTrendingUp, IconRepeat,
} from './Icons';

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: 'Franchise Development',
    problem: 'You need a legally compliant FDD, an operations manual that actually trains people, and a brand ready to hand to a stranger — and you need it done right.',
    desc: 'We build your Franchise Disclosure Document, operations manuals, training systems, and brand standards from the ground up — everything required to legally and confidently sell your first franchise.',
    href: '/services/franchise-development',
  },
  {
    title: 'Franchise Sales',
    problem: '67% of new franchisors never sell a single unit in year one — because they don\'t have a professional sales process.',
    desc: 'Our franchise sales consultants source, qualify, and close your first franchisees. We manage the entire pipeline so you\'re talking to motivated, qualified buyers — not tire-kickers.',
    href: '/services/franchise-sales',
  },
  {
    title: 'Management & Support',
    problem: 'You\'ve signed your first franchisee. Now the real work begins — and most franchisors aren\'t prepared for it.',
    desc: 'Ongoing franchisee support, training systems, discovery days, and brand standards compliance. We stay with you well past the FDD so your franchisees thrive and your brand is protected.',
    href: '/services/management-support',
  },
  {
    title: 'Franchise Business Plan',
    problem: 'Investors and qualified franchisees won\'t move forward without a credible, detailed business plan that shows the numbers.',
    desc: 'Professionally structured franchise business plans that communicate your model\'s financial logic, market opportunity, and unit economics to investors and prospective franchisees.',
    href: '/services/franchise-business-plan',
  },
  {
    title: 'Efficiency Audit',
    problem: 'Before you hand your operations to a franchisee, you need to know what\'s working and what will break at scale.',
    desc: 'Deep operational audits that identify performance gaps and improve day-to-day efficiency across your current operations — so you\'re franchise-ready, not just franchise-willing.',
    href: '/services/efficiency-audit',
  },
  {
    title: 'Digital Marketing',
    problem: 'Your franchise sales pipeline is only as good as the qualified leads flowing into it.',
    desc: 'Franchise lead generation, branding, website design, and digital marketing built specifically for franchisors. We drive proven buyers to your sales team.',
    href: '/services/digital-marketing',
  },
];

const SERVICE_ICONS = [
  <IconLayers key="layers" size={28} color="#3cb85e" />,
  <IconTarget key="target" size={28} color="#3cb85e" />,
  <IconHandshake key="handshake" size={28} color="#3cb85e" />,
  <IconDocument key="document" size={28} color="#3cb85e" />,
  <IconSearch key="search" size={28} color="#3cb85e" />,
  <IconMegaphone key="megaphone" size={28} color="#3cb85e" />,
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Free Feasibility Assessment',
    desc: 'We evaluate your business model honestly — revenue, systems, replicability, and market demand. If it\'s not ready, we\'ll tell you. If it is, we\'ll show you exactly what\'s next.',
  },
  {
    num: '02',
    title: 'Franchise Development',
    desc: 'We build your FDD, operations manual, and training program. The legal, operational, and brand scaffolding your franchise needs to be compliant and replicable.',
  },
  {
    num: '03',
    title: 'Sales & Franchisee Acquisition',
    desc: 'Our sales team actively sources, qualifies, and closes your first franchisees. You\'re involved in the decisions — not the prospecting grind.',
  },
  {
    num: '04',
    title: 'Launch & Ongoing Support',
    desc: 'We don\'t disappear after your first unit opens. Discovery days, training, standards compliance, and franchisee success support — the work that actually grows your system.',
  },
  {
    num: '05',
    title: 'Scale',
    desc: 'Franchisees invest their own capital. You earn royalties. Your brand grows. We help you hire, systematize, and prepare for the next phase — whether that\'s 25 units or an exit.',
  },
];

const CASE_STUDIES = [
  {
    title: 'Foxtail Coffee',
    industry: 'Food & Beverage',
    challenge: 'Single specialty café with high demand but no replicable system.',
    outcome: 'Scaled to a multi-unit franchise network across the Southeast',
    href: '/case-studies/foxtail-coffee',
  },
  {
    title: 'Sacred Leaf CBD',
    industry: 'Retail',
    challenge: 'Premium retail brand needing compliant, scalable operations for a regulated category.',
    outcome: 'Built a nationwide franchise system with full FTC compliance',
    href: '/case-studies/sacred-leaf-cbd',
  },
  {
    title: 'Craft House Pizza',
    industry: 'Food & Beverage',
    challenge: 'Artisan pizza concept worried about preserving culinary quality through franchising.',
    outcome: 'Launched a repeatable franchise model with documented quality standards intact',
    href: '/case-studies/craft-house-pizza',
  },
];

const CLIENTS = [
  'AcuPoints', 'Bloomin\' Blinds', 'BrightPath Kids', 'Co/LAB Lending',
  'Command Clean', 'Craft House Pizza', 'Foxtail Coffee', 'Fresh & Co',
  'Get Up & Go Kayak', 'GreenWave Solar', 'HomeSpec', 'NuFusion Studios',
  'Peak Performance', 'ProCare Therapy', 'Sacred Leaf CBD', 'SkillBridge',
  'Summit Roofing', 'The Salty Dog', 'Turquoise Wine Bar', 'Voda Restoration',
];

const INDUSTRIES = [
  { name: 'Food & Beverage', href: '/industries/food-beverage' },
  { name: 'Health & Beauty', href: '/industries/health-beauty' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Home Services', href: '/industries/home-services' },
  { name: 'Children', href: '/industries/children' },
  { name: 'Education', href: '/industries/education' },
  { name: 'Retail', href: '/industries/retail' },
  { name: 'Automotive', href: '/industries/automotive' },
  { name: 'Real Estate', href: '/industries/real-estate' },
  { name: 'Home-Based', href: '/industries/home-based' },
];

const REVIEWS = [
  {
    quote: "FMS didn't just hand us a template. They understood our business model and built a franchise system that actually reflects how we operate. We sold our first three units within 8 months.",
    name: "Michael R.",
    business: "Home Services Franchisor",
    rating: 5,
  },
  {
    quote: "I was skeptical that my business could be franchised — it felt too personal, too dependent on me. FMS proved otherwise. The operations manual they built captures everything that makes us different.",
    name: "Sarah T.",
    business: "Food & Beverage Franchisor",
    rating: 5,
  },
  {
    quote: "What separated FMS was that they gave us an honest feasibility assessment first. They told us what needed to be fixed before we could franchise. That candor earned our trust for everything that came after.",
    name: "David K.",
    business: "Retail Franchise Founder",
    rating: 5,
  },
];

const TRIGGERS = [
  {
    icon: <IconMapPin size={28} color="#3cb85e" />,
    text: 'Customers keep asking if they can open one in their city',
  },
  {
    icon: <IconTrendingUp size={28} color="#3cb85e" />,
    text: "You've hit a revenue ceiling that more personal effort can't break through",
  },
  {
    icon: <IconRepeat size={28} color="#3cb85e" />,
    text: "You want to grow — but not by opening more locations you have to manage yourself",
  },
];

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    const targets = el.querySelectorAll('.reveal');
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePageClient() {
  const revealRef = useReveal();
  return (
    <main ref={revealRef as React.RefObject<HTMLElement>}>
      {/* ═══ HERO ═══ */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2410 0%, #1a3d20 40%, #2a5530 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-100px',
        paddingTop: '160px',
        paddingBottom: '5rem',
      }} className="home-hero">
        {/* Background pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(60,184,94,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gap: '4rem', alignItems: 'center' }}>

            {/* Left: Copy */}
            <div>
              {/* Proof eyebrow — not a marketing tagline */}
              <div className="stats-pill" style={{
                display: 'inline-flex', alignItems: 'center', gap: '1.25rem',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '999px', padding: '0.45rem 1rem', marginBottom: '1.75rem',
                flexWrap: 'wrap',
              }}>
                {[
                  { num: '979+', label: 'Brands Franchised' },
                  { num: '11,340', label: 'Franchises Sold' },
                  { num: '234', label: 'Successful Exits' },
                ].map((item, i) => (
                  <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {i > 0 && <span className="stats-pill-divider" style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)' }} />}
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.9rem', color: '#e8b736' }}>{item.num}</span>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{item.label}</span>
                  </span>
                ))}
              </div>

              <h1 style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 900,
                fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fff',
                lineHeight: 1.08, marginBottom: '1.25rem',
              }}>
                Your business is already working.{' '}
                <span style={{ color: '#3cb85e' }}>Let&apos;s make it a franchise.</span>
              </h1>

              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '480px' }}>
                We help proven SMB owners structure, launch, and sell franchises — without losing the quality that made their business worth franchising in the first place.
              </p>

              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link href="/feasibility-questionnaire" className="btn btn-gold btn-lg">
                  See If My Business Is Ready →
                </Link>
                <Link href="/contact" className="btn btn-outline-white btn-lg">
                  Talk to a Consultant
                </Link>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                Free assessment · No obligation · We&apos;ll tell you honestly if you&apos;re ready
              </p>
            </div>

            {/* Right: Video */}
            <div>
              <div className="youtube-embed" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(60,184,94,0.3)' }}>
                <iframe
                  src="https://www.youtube.com/embed/SWM3XFxTNcs?rel=0&modestbranding=1"
                  title="How to Franchise Your Business — FMS"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
                &ldquo;How to Franchise Your Business&rdquo; — Chris Conner, President of FMS
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ IS THIS YOU? ═══ */}
      <section style={{ background: '#fff', padding: '4.5rem 0' }}>
        <div className="container">
          <div className="reveal section-header" style={{ maxWidth: '760px', margin: '0 auto 3rem', textAlign: 'center' }}>
            <span className="eyebrow">Sound Familiar?</span>
            <h2 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>You&apos;ve built a business that works.</h2>
            <p style={{ color: '#4a5568', fontSize: '1.05rem', lineHeight: 1.75 }}>
              Most of our clients come to us at the same crossroads — their business is profitable, their model is proven, and they know they can&apos;t scale it alone anymore.
            </p>
          </div>

          <div className="trigger-grid" style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
            {TRIGGERS.map(t => (
              <div key={t.text} style={{
                background: '#fff', borderRadius: '16px', padding: '2rem 1.75rem',
                border: '1.5px solid #e2e8f0', textAlign: 'center',
                boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>{t.icon}</div>
                <p style={{ fontWeight: 600, fontSize: '1rem', color: '#1a1a1a', lineHeight: 1.5 }}>{t.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#4a5568', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              If any of these hit close to home, your business may already be franchise-ready.
            </p>
            <Link href="/feasibility-questionnaire" className="btn btn-gold btn-lg">
              Take the Free Feasibility Assessment
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#718096' }}>
              5 minutes · Instant results · No sales call required to see your score
            </p>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section style={{ background: '#1a3d20', padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <AnimatedStats />
        </div>
      </section>

      {/* ═══ THE PROCESS ═══ */}
      <section className="section section-alt">
        <div className="container">
          <div className="reveal section-header">
            <span className="eyebrow">How It Works</span>
            <h2>A Clear Path from Here to Franchisor</h2>
            <div className="divider" />
            <p>Most business owners don&apos;t know what franchising actually involves, step by step. Here&apos;s exactly what working with FMS looks like — from first conversation to first franchisee.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem', maxWidth: '860px', margin: '2.5rem auto 0' }}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="process-step reveal" style={{
                display: 'flex', gap: '1.75rem', alignItems: 'flex-start',
                background: '#fff', borderRadius: '16px', padding: '1.75rem 2rem',
                border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.25s',
              }}>
                <div className="process-num" style={{
                  minWidth: '52px', height: '52px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1a3d20, #3cb85e)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: '#fff',
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.35rem', fontSize: '1.05rem', color: '#1a1a1a' }}>{step.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#718096', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section">
        <div className="container">
          <div className="reveal section-header">
            <span className="eyebrow">What We Do</span>
            <h2>Every Service You Need — Under One Roof</h2>
            <div className="divider" />
            <p>FMS is the only franchise consulting firm that handles development, marketing, AND sales without outsourcing. You work with one team, through one process, from start to scale.</p>
          </div>
          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {SERVICES.map((s, idx) => (
              <Link href={s.href} key={s.title} className="reveal" style={{
                display: 'block', background: '#fff', borderRadius: '16px',
                padding: '2rem', border: '1.5px solid #e2e8f0',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
                textDecoration: 'none', cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.16)';
                el.style.transform = 'translateY(-4px)';
                el.style.borderColor = 'rgba(60,184,94,0.4)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '';
                el.style.transform = '';
                el.style.borderColor = '#e2e8f0';
              }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #f0faf3, #e2f5e8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  {SERVICE_ICONS[idx]}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{s.title}</h3>
                <p style={{ fontSize: '0.83rem', color: '#e8b736', fontWeight: 700, lineHeight: 1.5, marginBottom: '0.75rem', fontStyle: 'italic' }}>{s.problem}</p>
                <p style={{ fontSize: '0.88rem', color: '#718096', lineHeight: 1.65, marginBottom: '1rem' }}>{s.desc}</p>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#3cb85e' }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="section section-alt">
        <div className="container">
          <div className="reveal section-header">
            <span className="eyebrow">Case Studies</span>
            <h2>Real Brands. Real Results.</h2>
            <div className="divider" />
            <p>Every case study begins with a business owner who had something worth franchising and needed a system to prove it. Here&apos;s what happened next.</p>
          </div>

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {CASE_STUDIES.map(cs => (
              <Link href={cs.href} key={cs.title} className="card reveal" style={{ display: 'block' }}>
                {/* Card header — spotlights the business, not FMS */}
                <div style={{
                  height: '160px', background: 'linear-gradient(160deg, #f0faf3 0%, #e2f5e8 100%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                  justifyContent: 'flex-end', position: 'relative', padding: '1.25rem 1.5rem',
                  borderBottom: '1.5px solid rgba(60,184,94,0.15)',
                }}>
                  {/* Industry badge top-right */}
                  <span className="badge badge-gold" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>{cs.industry}</span>
                  {/* Company name as the headline */}
                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 900,
                    fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', color: '#1a3d20',
                    lineHeight: 1.1, margin: 0,
                  }}>{cs.title}</h3>
                  <p style={{ fontSize: '0.78rem', color: '#3cb85e', fontWeight: 600, marginTop: '0.35rem', margin: '0.35rem 0 0' }}>
                    View Full Case Study →
                  </p>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#1a1a1a' }}>{cs.title}</h3>

                  <div style={{ marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#718096', marginBottom: '0.25rem' }}>The Challenge</p>
                    <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.6 }}>{cs.challenge}</p>
                  </div>

                  <div style={{ background: '#fff', borderRadius: '8px', padding: '0.75rem', border: '1px solid rgba(60,184,94,0.15)' }}>
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#3cb85e', marginBottom: '0.25rem' }}>The Outcome</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.5 }}>{cs.outcome}</p>
                  </div>

                  <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.85rem', fontWeight: 700, color: '#3cb85e' }}>Read the Full Story →</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/case-studies" className="btn btn-outline-green">View All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF / REVIEWS ═══ */}
      <section className="section section-dark">
        <div className="container">
          <div className="reveal section-header section-header-light">
            <span className="eyebrow eyebrow-light">Verified Reviews</span>
            <h2 style={{ color: '#fff' }}>The Most Trusted Name in Franchise Consulting</h2>
            <div className="divider divider-gold" />
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              250+ verified 5-star reviews across Trustpilot, Alignable, Clutch, BBB, and Google. No competitor in franchise consulting comes close.
            </p>
          </div>

          {/* Aggregate rating bar */}
          <div className="platform-row" style={{
            display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap',
            marginBottom: '3rem', marginTop: '-0.5rem',
          }}>
            {[
              { platform: 'Trustpilot', count: '90+' },
              { platform: 'Alignable', count: '95+' },
              { platform: 'Clutch', count: '17' },
              { platform: 'BBB', count: '16' },
              { platform: 'Google', count: '46+' },
            ].map(p => (
              <div key={p.platform} style={{ textAlign: 'center' }}>
                <div style={{ color: '#e8b736', fontSize: '0.95rem', marginBottom: '0.2rem' }}>★★★★★</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{p.platform}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>{p.count} reviews</div>
              </div>
            ))}
          </div>

          {/* Review quotes */}
          <div className="grid-3">
            {REVIEWS.map((r, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px', padding: '1.75rem', backdropFilter: 'blur(8px)',
              }}>
                <div style={{ color: '#e8b736', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>★★★★★</div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff' }}>{r.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#3cb85e', fontWeight: 600, marginTop: '0.15rem' }}>{r.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENT PORTFOLIO ═══ */}
      <section className="section">
        <div className="container">
          <div className="reveal section-header">
            <span className="eyebrow">Our Client Portfolio</span>
            <h2>Joined by 979+ Brands</h2>
            <div className="divider" />
            <p>From single-unit operators to multi-million dollar concepts — FMS has helped businesses across every industry build franchise systems that actually sell.</p>
          </div>
          <div className="client-logos" style={{ marginTop: '2rem' }}>
            {CLIENTS.map(c => (
              <div key={c} className="client-logo-pill">{c}</div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/our-clients" className="btn btn-outline-green">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="section section-alt">
        <div className="container">
          <div className="reveal section-header">
            <span className="eyebrow">Industries We&apos;ve Franchised</span>
            <h2>Whatever You&apos;ve Built, We&apos;ve Franchised It</h2>
            <div className="divider" />
          </div>
          <div className="industries-grid" style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
            {INDUSTRIES.map(ind => (
              <Link key={ind.name} href={ind.href} style={{
                display: 'block', background: '#fff', borderRadius: '12px', padding: '1.5rem 1rem',
                textAlign: 'center', border: '1.5px solid #e2e8f0', transition: 'all 0.25s', textDecoration: 'none',
              }}>
                <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #1a3d20, #3cb85e)', borderRadius: '2px', margin: '0 auto 0.875rem' }} />
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1a1a1a', lineHeight: 1.25 }}>{ind.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#3cb85e', fontWeight: 600, marginTop: '0.5rem' }}>Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Ready to Find Out?</span>
          <h2 style={{ color: '#fff', margin: '0.75rem 0 1rem', fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
            You&apos;ve built something worth franchising.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.75, fontSize: '1.05rem' }}>
            The question isn&apos;t whether your business can support franchising. It&apos;s whether now is the right time — and what it would take to do it right. Let&apos;s find out together.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold btn-lg">Take the Free Readiness Assessment</Link>
            <Link href="/contact" className="btn btn-outline-white btn-lg">Schedule a Free 30-Min Call</Link>
          </div>
          <p style={{ marginTop: '1.75rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
            No obligation · No pressure · If you&apos;re not ready, we&apos;ll tell you ·{' '}
            <a href="tel:8006100292" style={{ color: '#e8b736', fontWeight: 700 }}>800-610-0292</a>
          </p>
        </div>
      </section>
    </main>
  );
}
