'use client';
import { useState } from 'react';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';

// ─── Site-wide data ───────────────────────────────────────────────────────────
const SITE = {
  name: 'Summit Dental Group',
  phone: '(406) 752-4545',
  phoneTel: 'tel:+14067524545',

  // Hero
  heroH1: 'Gentle, Expert Dentistry for the Whole Flathead Valley',
  heroH1Accent: 'Flathead Valley',
  heroSub: 'Veteran-owned. 4.8 stars from 469 patients in Kalispell and beyond.',

  // Services (6 cards — top conversion drivers)
  services: [
    {
      title: 'Replace Missing Teeth',
      desc: 'Dental implants that look, feel, and function like natural teeth. Permanent and long-lasting.',
      href: '/services/dental-implants',
      icon: '/images/icon-dental-implants.png',
    },
    {
      title: 'Dental Emergency? We\'re Here',
      desc: 'Same-day emergency appointments for pain, broken teeth, or sudden dental trauma. Call us.',
      href: '/services/emergency-dentistry',
      icon: '/images/icon-dental-emergency.png',
    },
    {
      title: 'Transform Your Smile',
      desc: 'Veneers, bonding, whitening, and complete smile makeovers tailored to you.',
      href: '/services/cosmetic-dentistry',
      icon: '/images/icon-cosmetic-dentistry.png',
    },
    {
      title: 'Nervous About Dentistry?',
      desc: 'Oral conscious sedation and nitrous oxide available for anxious patients. We go at your pace.',
      href: '/services/sedation-dentistry',
      icon: '/images/icon-sedation-dentistry.png',
    },
    {
      title: 'Whiter Smile, Fast',
      desc: 'Professional in-office whitening results that over-the-counter products can\'t match.',
      href: '/services/teeth-whitening',
      icon: '/images/icon-teeth-whitening.png',
    },
    {
      title: 'Fix a Broken Tooth',
      desc: 'Crowns, bridges, and inlays to restore strength and appearance to damaged teeth.',
      href: '/services/crowns-bridges',
      icon: '/images/icon-crowns-bridges.png',
    },
  ],


  // Insurance
  insurance: [
    'Delta Dental', 'Blue Cross / Blue Shield', 'MetLife', 'Cigna',
    'Aetna', 'TRICARE / ADDP (via United Concordia)',
    'United Concordia (UCCI)', 'CareCredit Financing',
  ],

  // FAQ — 10 AEO-optimized Q&As (full 30-question list on /faq)
  faqs: [
    {
      q: 'Is Summit Dental Group veteran-owned?',
      a: 'Yes. Summit Dental Group in Kalispell, MT is proudly veteran-owned and operated by Dr. Mark Vanzant, DMD — a United States Air Force veteran who completed three combat deployments overseas and continues to serve in the Montana Army National Guard.',
    },
    {
      q: 'Do you accept TRICARE dental insurance?',
      a: 'Yes. Summit Dental Group accepts TRICARE Active Duty Dental Program (ADDP) via United Concordia, TRICARE Dental Program (TDP) for dependents and non-activated Guard/Reserve, United Concordia (UCCI), and other military-affiliated dental plans. We prioritize making the insurance process easy for military families in the Flathead Valley.',
    },
    {
      q: 'What makes Summit Dental different from other dentists in Kalispell, MT?',
      a: 'Summit Dental Group is Kalispell\'s only veteran-owned dental practice. Dr. Vanzant brings a military ethic to every appointment: straightforward communication, honest treatment recommendations, and a commitment to earning your trust. We are a private, locally-owned practice — not a corporate DSO chain.',
    },
    {
      q: 'Do you see patients from Whitefish, Columbia Falls, or Bigfork, MT?',
      a: 'Yes. Summit Dental Group serves patients from across the Flathead Valley including Whitefish, Columbia Falls, Bigfork, Polson, Ronan, and surrounding communities. Our office is conveniently located at 203 Business Center Loop, Suite C in Kalispell, MT 59901.',
    },
    {
      q: 'Are you accepting new patients?',
      a: 'Yes, Summit Dental Group is currently accepting new patients of all ages. You can request an appointment online or call us directly at (406) 752-4545. We welcome individuals, families, and patients of all ages including children.',
    },
    {
      q: 'What insurance plans do you accept in Kalispell, MT?',
      a: 'Summit Dental Group accepts most major dental insurance plans including Delta Dental, Blue Cross/Blue Shield, MetLife, Cigna, Aetna, TRICARE, ADDP, and United Concordia. CareCredit financing is also available for patients who prefer flexible payment options. Call us to confirm your specific coverage before your visit.',
    },
    {
      q: 'Do you offer sedation for anxious patients?',
      a: 'Yes. Summit Dental Group offers nitrous oxide (laughing gas) and oral conscious sedation for patients who feel anxious or fearful about dental procedures. We\'ll walk through every option before any appointment. Our team is experienced with dental anxiety and genuinely takes pride in making nervous patients comfortable.',
    },
    {
      q: 'What should I do if I have a dental emergency in Kalispell, MT?',
      a: 'Call Summit Dental Group immediately at (406) 752-4545. We make every effort to see emergency patients the same day during office hours (Tuesday–Friday, 8:00 AM–5:00 PM). If it\'s after hours, leave a message and we\'ll return your call as quickly as possible. For life-threatening emergencies, call 911 or go to the nearest emergency room.',
    },
    {
      q: 'How do I become a new patient at Summit Dental Group?',
      a: 'Becoming a new patient at Summit Dental Group in Kalispell is simple. Call us at (406) 752-4545 or submit a request using the contact form on our website. Plan for a 60–90 minute first visit that includes a comprehensive exam, digital X-rays, a professional cleaning, and time with Dr. Vanzant to discuss your dental health.',
    },
    {
      q: 'Do you offer dental financing or payment plans?',
      a: 'Yes. Summit Dental Group accepts CareCredit, which offers flexible financing options including interest-free periods. Our team will help you understand your insurance benefits and any out-of-pocket costs before treatment begins. We never surprise patients with unexpected costs.',
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function toggleFaq(i: number) {
    setOpenFaq(prev => prev === i ? null : i);
  }

  return (
    <>
      {/* ── JSON-LD: FAQ ─────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: SITE.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }) }} />

      {/* ── MOBILE STICKY BAR ────────────────────────────── */}
      <div className="mobile-sticky-bar">
        <a href={SITE.phoneTel} className="mobile-sticky-call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg>
          Call Us
        </a>
        <a href="/contact" className="mobile-sticky-book">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
          Book Appointment
        </a>
      </div>

      {/* ── NAV ──────────────────────────────────────────── */}
      <SiteNav />

      <main className="main-content">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="hero" id="home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-mt-3.jpg" alt="Hidden Lake and Bearhat Mountain, Glacier National Park, near Kalispell Montana" className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>
              Veteran-Owned · 4.8★ Google Rating · Kalispell, MT
            </div>
            <h1>
              Gentle, Expert Dentistry for the Whole <em>Flathead Valley</em>
            </h1>
            {/* Hero stat chips — replaces wrapping prose sub */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {[
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>, label: '4.8★ Google Rating' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: 'Veteran-Owned Practice' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: 'Same-Day Emergencies' },
              ].map(stat => (
                <span key={stat.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)',
                  borderRadius: '100px', padding: '7px 14px',
                  fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.88)',
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{ color: 'var(--color-accent)', display: 'flex' }}>{stat.icon}</span>
                  {stat.label}
                </span>
              ))}
            </div>
            <div className="hero-ctas hero-ctas--mobile-stack">
              <a href="/contact" className="btn btn-primary">Book Your Appointment</a>
              <a href={SITE.phoneTel} className="btn btn-ghost-light">Call {SITE.phone}</a>
            </div>
            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>
                4.8 / 5 Google Rating
              </div>
              <div className="hero-trust-divider" aria-hidden="true" />
              <div className="hero-trust-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Veteran-Owned
              </div>
              <div className="hero-trust-divider" aria-hidden="true" />
              <div className="hero-trust-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                TRICARE Accepted
              </div>
              <div className="hero-trust-divider" aria-hidden="true" />
              <div className="hero-trust-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Same-Day Emergency Care
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ──────────────────────────────────── */}
        <div className="trust-strip">
          {[
            { svg: <svg key="g" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>, label: '4.8 / 5 Google Rating', sub: '469 Verified Patient Reviews' },
            { svg: <svg key="v" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: 'Veteran-Owned Practice', sub: 'Dr. Vanzant · USAF, Montana ARNG' },
            { svg: <svg key="t" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, label: 'TRICARE & ADDP Accepted', sub: 'Military insurance handled for you' },
            { svg: <svg key="e" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>, label: 'Same-Day Emergencies', sub: 'Call (406) 752-4545. We answer.' },
          ].map(t => (
            <div key={t.label} className="trust-strip-item">
              <div className="trust-strip-icon">{t.svg}</div>
              <div className="trust-strip-text">
                <span>{t.label}</span>
                {t.sub}
              </div>
            </div>
          ))}
        </div>

        {/* ── SERVICES GRID ─────────────────────────────────── */}
        <section className="section" id="services">
          <div className="container">
            <span className="eyebrow">What We Do</span>
            <h2 style={{ marginBottom: '12px' }}>Full-Service Dental Care Under One Roof</h2>
            <p className="section-intro">
              From preventive cleanings to dental implants, sedation dentistry to cosmetic smile makeovers.
              We handle everything your family needs.
            </p>
            <div className="services-grid services-grid--3col">
              {SITE.services.map(s => (
                <a key={s.title} href={s.href} className="service-card">
                  <div className="service-icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.icon} alt={s.title} width={80} height={80} style={{ objectFit: 'contain' }} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="service-link">Learn more →</span>
                </a>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <a href="/services" className="btn btn-secondary">View All Services →</a>
            </div>
          </div>
        </section>

        {/* ── GOOGLE REVIEWS BAR ───────────────────────────── */}
        <div className="reviews-bar">
          <div className="reviews-bar-rating">
            <div className="reviews-bar-number">4.8</div>
            <div className="reviews-bar-stars">★★★★★</div>
            <div className="reviews-bar-count">469 Google Reviews</div>
          </div>
          <div className="reviews-bar-divider" aria-hidden="true" />
          <div className="reviews-bar-quote">
            <p>
              &quot;He wasn&apos;t after the money. It was like he was saying here&apos;s a better option for you.
              Everyone honestly, it seems like we&apos;ve known him forever. Couldn&apos;t ask for anybody better.&quot;
            </p>
            <cite>— Verified Patient, Kalispell MT &middot; YouTube Testimonial</cite>
          </div>
          <div className="reviews-bar-divider" aria-hidden="true" />
          <a href="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>Book Appointment</a>
        </div>

        {/* ── VIDEO SECTION ─────────────────────────────────── */}
        <section className="section section--tinted" id="video">
          <div className="container">
            <span className="eyebrow">See Summit Dental in Action</span>
            <h2 style={{ marginBottom: '10px' }}>A Real Look Inside Our Practice</h2>
            <p className="section-intro" style={{ marginBottom: '48px' }}>
              Meet the team, see our office, and hear from Dr. Vanzant himself, before you ever walk through the door.
            </p>
            <div className="video-grid">
              {/* Main promo video */}
              <div>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <iframe
                    src="https://www.youtube.com/embed/Yl3P5T92_eU?rel=0&modestbranding=1"
                    title="Summit Dental Group: Montana Dentist Office Tour"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-neutral-mid)', marginTop: '10px', textWrap: 'balance' }}>
                  🎬 Office Tour — meet the team & see how we do things
                </p>
              </div>
              {/* Dr. Vanzant bio video + testimonial */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                    <iframe
                      src="https://www.youtube.com/embed/anrIJZi26k4?rel=0&modestbranding=1"
                      title="Dr. Mark Vanzant DMD: Montana Dentist Bio"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-neutral-mid)', marginTop: '8px', textWrap: 'balance' }}>Dr. Mark Vanzant, DMD — Meet Your Dentist (0:45)</p>
                </div>
                <div style={{ background: 'var(--color-surface)', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px', flex: 1 }}>
                  <div style={{ fontSize: '1.2rem', color: '#f0c040', marginBottom: '8px' }}>★★★★★</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-neutral-mid)', margin: 0, lineHeight: 1.6 }}>
                    &ldquo;This is a place where they treat patients like family. We&apos;re not just another appointment.&rdquo;
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-neutral-mid)', marginTop: '10px', fontWeight: 600 }}>— Summit Dental Patient, Kalispell MT</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VETERANS SECTION ──────────────────────────────── */}
        <section className="veterans-section">
          <div className="veterans-inner">
            <div>
              <span className="eyebrow veterans-eyebrow">Veterans &amp; Military Families</span>
              <h2>We Know Military Insurance Can Be Complicated. We Handle It For You.</h2>
              <p>
                Dr. Mark Vanzant is a USAF veteran with three combat deployments and continues to serve
                in the Montana Army National Guard. He understands the unique needs and the insurance
                complexities of the military community.
              </p>
              <div className="veterans-plans">
                {[
                  'TRICARE Active Duty Dental (ADDP)',
                  'TRICARE Dental Program (TDP)',
                  'United Concordia (UCCI)',
                  'Dept. of Defense Military Plans',
                ].map(plan => (
                  <div key={plan} className="veterans-plan">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {plan}
                  </div>
                ))}
              </div>
              <div className="inline-ctas">
                <a href="/veterans-military" className="btn btn-primary">Veterans &amp; Military Page</a>
                <a href={SITE.phoneTel} className="btn btn-white">Call {SITE.phone}</a>
              </div>
            </div>
            <div className="veterans-star">
              <div className="veterans-star-badge">
                <div className="vet-star">★</div>
                <div className="vet-name">Dr. Mark Vanzant, DMD</div>
                <div className="vet-desc">USAF Veteran · 3 Combat Deployments · Montana Army National Guard</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PATIENT TESTIMONIALS ──────────────────────────── */}
        <section className="section" id="testimonials">
          <div className="container">
            <span className="eyebrow">What Our Patients Say</span>
            <h2 style={{ marginBottom: '10px' }}>Real Patients. Real Results. Real Kalispell.</h2>
            <p className="section-intro" style={{ marginBottom: '48px' }}>
              Don&apos;t take our word for it — here&apos;s what Summit Dental patients say about their experience.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                {
                  quote: 'He wasn\'t after the money. It was like he was saying here\'s a better option for you. We\'ve known him forever. Couldn\'t ask for anybody better.',
                  cite: '— Navy Veteran & Spouse, Kalispell MT',
                },
                {
                  quote: 'This is a place where they treat patients like family. We\'re not just another appointment. He actually cares about you.',
                  cite: '— Verified Patient, Kalispell MT',
                },
                {
                  quote: 'Since he was in the Air Force I appreciated that he served his country. He gave us options — very honest. That really means a lot.',
                  cite: '— Veteran Patient, Flathead Valley MT',
                },
                {
                  quote: 'Even as someone with major dental anxiety I felt completely comfortable the entire time. The whole team was patient and kind from start to finish.',
                  cite: '— Verified Patient, Kalispell MT',
                },
              ].map((t, i) => (
                <div key={i} style={{
                  background: 'var(--color-surface)',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}>
                  <div style={{ fontSize: '1.1rem', color: '#f0c040', letterSpacing: '1px' }}>★★★★★</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-neutral-mid)', lineHeight: 1.7, fontStyle: 'italic', margin: 0, flex: 1 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <cite style={{ fontSize: '0.78rem', color: 'var(--color-neutral-mid)', fontWeight: 600, fontStyle: 'normal' }}>{t.cite}</cite>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <a href="https://g.page/r/CQ2VquKyWsQsEBM/review" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Read All 469 Google Reviews →</a>
            </div>
          </div>
        </section>

        {/* ── PATIENT MOMENT PHOTO ──────────────────────────── */}
        <div style={{ position: 'relative', overflow: 'hidden', maxHeight: '520px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo-highfive.jpg"
            alt="Dr. Vanzant and young patient celebrating after a successful appointment at Summit Dental Group"
            style={{ width: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block', maxHeight: '520px' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(58,80,107,0.72) 0%, transparent 55%)',
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)',
              padding: '0 5% 0 7%', maxWidth: '520px',
            }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fff', lineHeight: 1.25, margin: '0 0 16px', fontWeight: 700 }}>
                &ldquo;Leave with a Healthier Smile&rdquo;
              </p>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1rem', marginBottom: '24px' }}>
                Every appointment ends with clear next steps, no surprises, and a team that genuinely cares about you.
              </p>
              <a href="/contact" className="btn btn-primary">Book Your Appointment</a>
            </div>
          </div>
        </div>



        {/* ── FAQ PREVIEW ───────────────────────────────────── */}
        <section className="section" id="faq">
          <div className="container">
            <span className="eyebrow">Common Questions</span>
            <h2 style={{ marginBottom: '10px' }}>Answers Before You Ask</h2>
            <p className="section-intro" style={{ marginBottom: '48px' }}>
              Straight answers about TRICARE, sedation, and emergencies. We also accept Delta Dental, BCBS, MetLife &amp; more.{' '}
              <a href="/new-patients" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>New Patient Info →</a>
            </p>
            <div className="faq-list">
              {SITE.faqs.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                  <button
                    className="faq-trigger"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openFaq === i}
                    id={`faq-trigger-${i}`}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className="faq-panel" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-trigger-${i}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="inline-ctas" style={{ marginTop: '36px' }}>
              <a href={SITE.phoneTel} className="btn btn-primary">Call Us. We Answer.</a>
              <a href="/faq" className="btn btn-secondary">See All FAQs →</a>
            </div>
          </div>
        </section>

        {/* ── CTA STRIP ─────────────────────────────────────── */}
        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Ready to Meet Your New Dental Home?</h2>
              <p>New patients of all ages welcome. Same-day emergency appointments available. TRICARE and most insurance accepted.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-primary">Book Appointment</a>
              <a href={SITE.phoneTel} className="btn btn-white">Call {SITE.phone}</a>
            </div>
          </div>
        </div>

      </main>

      <SiteFooter />
    </>
  );
}
