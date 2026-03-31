'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach(t => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ── Animated counter ── */
function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const step = 16;
        const increments = Math.floor(duration / step);
        let current = 0;
        const inc = end / increments;
        const timer = setInterval(() => {
          current = Math.min(current + inc, end);
          el.textContent = Math.floor(current).toLocaleString() + suffix;
          if (current >= end) clearInterval(timer);
        }, step);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

/* YouTube embed IDs — supplied by client */
const VIDEOS = {
  hero: 'SWM3XFxTNcs',           // Chris Conner explains franchising wealth
  process: 'uLh_iITjQ6Q',        // Step-by-step process
  mfGyros: 'E7AY_KrqePA',        // MF Gyros & Burgers testimonial
  bagelHole: 'Y_OkkRZGOAo',      // Bagel Hole testimonial
  greenHome: 'GmiHv1yDbLw',      // Green Home Solutions testimonial
};

/* Testimonial data from live site, verbatim */
const TESTIMONIALS = [
  {
    id: 'mf-gyros',
    name: 'Kavish Sharma',
    title: 'Founder of MF Gyros & Burgers',
    result: 'MF Gyros – 29 Franchises Sold First Year',
    quote: 'Working with Franchise Marketing Systems helped MF Gyros take the next step from a successful single location into a structured franchise brand. After deciding to explore franchising, he felt confident the FMS team understood the vision for the brand and provided the guidance needed to build the right foundation for expansion.',
    outcomes: [
      'Clear franchise development strategy to support brand growth',
      'Structured systems and marketing assets to attract qualified franchise partners',
      '29 franchises sold in the first year of franchising',
    ],
    link: 'https://www.mfgyrosfoods.com/franchise',
    linkLabel: 'MF Gyros & Burgers',
    videoId: VIDEOS.mfGyros,
  },
  {
    id: 'bagel-hole',
    name: 'Gary and Cathy Trentacosta',
    title: 'Co-Owners of Bagel Hole',
    result: 'Bagel Hole – 13 Franchises Sold First Year',
    quote: 'Gary and Cathy Trentacosta partnered with Franchise Marketing Systems to structure the Bagel Hole franchise program and create a clear strategy for expansion.',
    outcomes: [
      'Structured franchise program designed for scalable expansion',
      'Strong demand from qualified franchise candidates',
      '13 franchises sold in the first year of franchising',
    ],
    link: 'https://thebagelhole.com/franchise',
    linkLabel: 'Bagel Hole',
    videoId: VIDEOS.bagelHole,
  },
  {
    id: 'green-home',
    name: 'Carl Carlson',
    title: 'Founder, Green Home Solutions',
    result: '',
    quote: 'Franchise Marketing Systems is fantastic to work with! They helped us with qualifying customers and they were flexible, professional and allowed us to launch effectively.',
    outcomes: [
      'Strong support in qualifying the right franchise candidates',
      'Flexible and professional team that adapted to our needs',
      'Smooth and effective launch process from start to finish',
    ],
    link: '',
    linkLabel: '',
    videoId: VIDEOS.greenHome,
  },
  {
    id: 'goshenite',
    name: 'Nicole Blais',
    title: 'CEO & Founder, Goshenite Seniors Services',
    result: '',
    quote: '"I have been working with Chris and his team over the past year to develop our Franchise Model. Chris is very knowledgeable in the development of Franchise Models. Chris and his entire team have made this process seamless, and continue to offer their expertise whenever needed. Thank you, Chris, for your guidance and support throughout this entire process. Grateful and appreciative. In other words, you\'re the BEST!"',
    outcomes: [
      'Clear, structured franchise model',
      'Ongoing expert support',
      'Confident expansion',
    ],
    link: '',
    linkLabel: '',
    videoId: null, // No video for Nicole Blais
  },
];

function YTEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
      />
    </div>
  );
}

export default function HomePageClient() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO — Video 1: Chris Conner explains franchising
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#2d4135',
        paddingTop: '113px',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Stats pill */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '0.5rem 1.5rem', flexWrap: 'wrap' }}>
              {[
                { num: 'Helped franchise', bold: '11,340+ units' },
                { num: 'Developed', bold: '1,579 brands' },
                { num: 'Guided', bold: '234 brands to successful exits, up to $350M' },
              ].map((item, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0 0.75rem' }}>
                  {i > 0 && <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)', display: 'inline-block', marginRight: '0.5rem' }} />}
                  <strong style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.92rem', color: '#eebc4a' }}>{item.bold}</strong>
                </span>
              ))}
            </div>
          </div>

          {/* Hero two-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
            {/* Left — copy */}
            <div>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.9rem, 3.8vw, 3.1rem)', color: '#fff', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                At FMS, every member of the team is dedicated to maximizing the return on the investment you make with us – and that means selling franchises.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                As pioneers of the end-to-end franchise development model, we&apos;ve sold the most &ldquo;first franchises&rdquo; worldwide.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                From strategic planning and legal setup to high-impact marketing and in-house sales, our comprehensive approach empowers you to focus on your core business while we help drive franchise growth.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', marginBottom: '0.5rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                One franchise sale can create decades of ongoing value:
              </p>
              <ul style={{ marginBottom: '2rem', paddingLeft: 0 }}>
                {[
                  'Initial franchise fees fund expansion',
                  'Royalty fees build wealth over time',
                  'Additional income streams help grow your business into a multi-million-dollar enterprise',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', listStyle: 'none' }}>
                    <span style={{ color: '#35a84a', fontWeight: 900, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/franchise-your-business" className="btn btn-gold btn-lg">
                  FRANCHISE MY BUSINESS &gt;
                </Link>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>
                <Link href="/roi-calculator" style={{ color: '#eebc4a', textDecoration: 'underline' }}>
                  See how royalty fees can be life-changing with our ROI Calculator
                </Link>
              </p>
            </div>

            {/* Right — Video 1: Chris Conner */}
            <div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', marginBottom: '0.65rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Watch our president, Chris Conner, explain how franchising builds real wealth.
              </p>
              <div style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.5)', borderRadius: '10px', overflow: 'hidden' }}>
                <YTEmbed id={VIDEOS.hero} title="How to Franchise Your Business with Franchise Marketing Systems" />
              </div>
            </div>
          </div>

          {/* CTA strip */}
          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
              Don&apos;t leave your business growth to chance, schedule a no obligation consultation and talk with our team about how franchising with FMS creates structured expansion, recurring royalties, and long term revenue growth.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              We help you move from idea to execution with a proven, practical franchise development strategy.
            </p>
            <Link href="/franchise-your-business" className="btn btn-gold">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#2d4135', padding: '4.5rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <h2 className="reveal" style={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '1rem' }}>
            The foundation of scalable franchise growth
          </h2>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem', fontSize: '1rem', lineHeight: 1.8 }}>
            The Franchise Marketing System&apos;s team consists of 67 Expert Team Members franchise and consultants who have worked entirely in the franchise development industry. Our team is broken up into teams in order to leverage specialized franchising expertise in each phase of the franchise process. From Franchise Strategic Planning to Franchise Marketing, we have a team deep in resources to provide the experience, direction, and support needed to scale a brand through the franchise distribution model.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: 11340, label: 'Franchises Sold', sub: 'Total number of individual or multi-unit franchises sold by FMS Clients.' },
              { num: 979,   label: 'Brands Franchised', sub: 'FMS worked with almost 1,000 brands to develop a franchise model.' },
              { num: 234,   label: 'Successful Exits', sub: 'Brands That Have Sold and Exited Business Through Franchising.' },
            ].map((stat, i) => (
              <div key={i} className="reveal">
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', color: '#eebc4a', lineHeight: 1 }}>
                  <AnimatedCounter end={stat.num} />
                </div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: '0.4rem', lineHeight: 1.55 }}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          VIDEO 2 — Step-by-step process
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#1e2d24', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="process-grid">
            <div className="reveal">
              <YTEmbed id={VIDEOS.process} title="What Happens After a New Franchisee Signs? — FMS Franchise" />
            </div>
            <div className="reveal">
              <span className="eyebrow eyebrow-gold">READY TO TURN YOUR SUCCESSFUL BUSINESS INTO A SCALABLE FRANCHISE?</span>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#fff', marginTop: '0.75rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Wondering how we get you there? Watch our step-by-step process.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
                You bring the business model and motivation. We&apos;ll provide the guidance and backend support to help build your brand into a nationwide success story.
              </p>
              <Link href="/franchise-your-business" className="btn btn-gold">
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TESTIMONIALS — "Real People. Real Growth. Real Partnership."
          Videos 3, 4, 5 embedded beside each case study
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div className="reveal section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">OUR CLIENT WORK</span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, marginTop: '0.35rem' }}>
              Real People. Real Growth. Real Partnership.
            </h2>
            <p style={{ color: '#555', marginTop: '0.75rem', lineHeight: 1.75, maxWidth: '680px', margin: '0.75rem auto 0' }}>
              If your business is already proven, franchising is not a gamble. It is a way to turn what works into a structured, scalable system that drives long term growth and recurring revenue.
            </p>
          </div>

          {/* Video testimonials — with embed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {TESTIMONIALS.filter(t => t.videoId).map((t, i) => (
              <div key={t.id} className="reveal" style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
              }}>
                {/* Video */}
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <YTEmbed id={t.videoId!} title={`${t.name} — FMS Franchise Testimonial`} />
                </div>

                {/* Text */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  {t.result && (
                    <div style={{ background: '#35a84a', color: '#fff', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', padding: '0.3rem 0.85rem', borderRadius: '3px', display: 'inline-block', marginBottom: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                      {t.result}
                    </div>
                  )}
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#2d4135', marginBottom: '0.2rem' }}>
                    {t.name}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#35a84a', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.title}</p>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '1rem' }}>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '0.6rem' }}>The Outcome</p>
                    <ul style={{ paddingLeft: 0 }}>
                      {t.outcomes.map((o, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.4rem', fontSize: '0.88rem', color: '#444', listStyle: 'none' }}>
                          <span style={{ color: '#35a84a', fontWeight: 900, flexShrink: 0 }}>✓</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                    {t.link && (
                      <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.75rem', color: '#35a84a', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'underline' }}>
                        {t.linkLabel} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Nicole Blais — text-only (no video) */}
            {TESTIMONIALS.filter(t => !t.videoId).map((t) => (
              <div key={t.id} className="reveal" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#2d4135', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.5rem', color: '#eebc4a', fontWeight: 900, fontFamily: 'Montserrat, sans-serif' }}>
                  NB
                </div>
                <p style={{ color: '#444', lineHeight: 1.8, fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  {t.quote}
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#2d4135', fontSize: '0.9rem' }}>{t.name}</p>
                <p style={{ fontSize: '0.8rem', color: '#35a84a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1.25rem' }}>{t.title}</p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {t.outcomes.map((o, j) => (
                    <span key={j} style={{ display: 'flex', gap: '0.4rem', fontSize: '0.82rem', color: '#555' }}>
                      <span style={{ color: '#35a84a', fontWeight: 900 }}>✓</span> {o}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/our-clients" className="btn btn-outline-green">See our clients</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FMS DESCRIPTION + QUICK LINKS
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f7f7f7', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
            <div className="reveal">
              <span className="eyebrow">START YOUR FRANCHISE TODAY</span>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, marginBottom: '1.25rem', marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Get access to proven franchise strategies, growth planning, and scalable systems
              </h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
                FMS is a full-service <Link href="/services/franchise-development" style={{ color: '#35a84a', fontWeight: 600 }}>franchise development</Link> and the best franchise consulting company in the US that works in a performance-based franchise development approach to help you start a franchise.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
                FMS has qualified and expert franchise consultants throughout the United States and Canada that works both domestically and internationally.{' '}
                <Link href="/about-us" style={{ color: '#35a84a', fontWeight: 600 }}>Learn more</Link>
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/franchise-your-business" className="btn btn-green">Schedule Free Consultation</Link>
                <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline-green">GET STARTED &gt;</Link>
              </div>
            </div>

            <div className="reveal">
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', marginBottom: '1rem' }}>Quick Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { label: 'Franchise Services', href: '/services' },
                  { label: 'Franchise Consultants', href: '/services/franchise-development' },
                  { label: 'Learn Franchising', href: '/learn' },
                  { label: 'About FMS', href: '/about-us' },
                  { label: 'Blog', href: '/about-us/blog' },
                  { label: 'Franchise Feasibility', href: '/franchise-feasibility-questionnaire' },
                  { label: 'Franchise Advantages', href: '/learn/why-franchising' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.75rem 1.1rem', background: '#fff', borderRadius: '6px',
                    border: '1px solid #e0e0e0', fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600, fontSize: '0.88rem', color: '#333',
                    transition: 'all 0.2s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#35a84a'; el.style.color = '#35a84a'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e0e0e0'; el.style.color = '#333'; }}
                  >
                    <span style={{ width: '7px', height: '7px', background: '#35a84a', borderRadius: '50%', flexShrink: 0 }} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#2d4135', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, marginBottom: '1rem', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            You bring the business model and motivation.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto 2rem', lineHeight: 1.75, fontSize: '1.05rem' }}>
            We&apos;ll provide the guidance and backend support to help build your brand into a nationwide success story.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/franchise-your-business" className="btn btn-gold btn-lg">FRANCHISE MY BUSINESS &gt;</Link>
            <Link href="/refer-a-client" className="btn btn-outline-white btn-lg">REFER A CLIENT</Link>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
            <a href="tel:8006100292" style={{ color: '#eebc4a', fontWeight: 700 }}>800-610-0292</a>
          </p>
        </div>
      </section>

      {/* Responsive overrides */}
      <style jsx global>{`
        .hero-grid, .process-grid, .about-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .hero-grid, .process-grid, .about-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:last-child { order: -1 !important; }
        }
        .fms-testimonial-video-row {
          grid-template-columns: 1fr 1fr !important;
        }
        @media (max-width: 768px) {
          .fms-testimonial-video-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
