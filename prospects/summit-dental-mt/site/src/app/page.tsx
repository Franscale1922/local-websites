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
  heroSub: 'Veteran-owned. Two experienced doctors. 4.8 stars from 469 patients in Kalispell and beyond.',

  // Services
  services: [
    {
      title: 'Replace Missing Teeth',
      desc: 'Dental implants that look, feel, and function like natural teeth. Permanent and long-lasting.',
      href: '/services/dental-implants',
      icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9 2 7 4 7 7c0 2 1 3.5 2 4.5L8 20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2l-1-8.5c1-1 2-2.5 2-4.5 0-3-2-5-5-5z"/></svg>,
    },
    {
      title: 'Dental Emergency? We\'re Here',
      desc: 'Same-day emergency appointments for pain, broken teeth, or sudden dental trauma. Call us.',
      href: '/services/emergency-dentistry',
      icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    },
    {
      title: 'Transform Your Smile',
      desc: 'Veneers, bonding, whitening, and complete smile makeovers tailored to you.',
      href: '/services/cosmetic-dentistry',
      icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
    },
    {
      title: 'Nervous About Dentistry?',
      desc: 'Oral conscious sedation and nitrous oxide available for anxious patients. We go at your pace.',
      href: '/services/sedation-dentistry',
      icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    },
    {
      title: 'Whiter Smile, Fast',
      desc: 'Professional in-office whitening results that over-the-counter products can\'t match.',
      href: '/services/teeth-whitening',
      icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    },
    {
      title: 'Fix a Broken Tooth',
      desc: 'Crowns, bridges, and inlays to restore strength and appearance to damaged teeth.',
      href: '/services/crowns-bridges',
      icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
    {
      title: 'Care for the Whole Family',
      desc: 'Cleanings, checkups, and pediatric care for every family member in one convenient location.',
      href: '/services',
      icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    },
    {
      title: 'TRICARE & Military Benefits',
      desc: 'Veteran-owned and operated. We accept TRICARE, ADDP, and handle the paperwork for you.',
      href: '/veterans-military',
      icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/><circle cx="12" cy="12" r="3"/></svg>,
    },
  ],

  // Testimonials
  reviews: [
    {
      stars: 5,
      text: '"I have pretty bad issues with anxiety with the dentist and he is very very patient and sympathetic with that. When you walk in there\'s wonderful music playing in the background. He makes the whole experience great. They all do. The trust, the technology, the staff. It\'s a very comfortable place when you walk in the door."',
      name: 'Summit Dental Patient',
      detail: 'Kalispell, MT',
      initial: 'S',
      source: 'YouTube Testimonial',
    },
    {
      stars: 5,
      text: '"Most dentists want to give you \'oh this is what you need.\' But he wasn\'t after the money. He was saying here\'s a better option for you. He\'s so gentle I didn\'t even have novocaine for the deep cleaning. I would recommend him because of his honesty."',
      name: 'Navy Veteran Patient',
      detail: 'Kalispell, MT',
      initial: 'N',
      source: 'YouTube Testimonial',
    },
    {
      stars: 5,
      text: '"Everyone honestly, it seems like we\'ve known him forever. It\'s hard to find somebody like that. He\'s just a nice, honest man. Couldn\'t ask for anybody better."',
      name: 'Summit Dental Patient',
      detail: 'Flathead Valley, MT',
      initial: 'S',
      source: 'YouTube Testimonial',
    },
  ],

  // Insurance
  insurance: [
    'Delta Dental', 'Blue Cross / Blue Shield', 'MetLife', 'Cigna',
    'Aetna', 'TRICARE / ADDP (via United Concordia)',
    'United Concordia (UCCI)', 'CareCredit Financing',
  ],

  // FAQ preview
  faqs: [
    {
      q: 'Do you accept TRICARE dental insurance?',
      a: 'Yes. We accept TRICARE Active Duty Dental Program (ADDP) via United Concordia, TRICARE Dental Program (TDP), and other military/VA-affiliated plans. Dr. Vanzant is a veteran and prioritizes serving the military community.',
    },
    {
      q: 'Do you offer sedation for anxious patients?',
      a: 'Yes. We offer nitrous oxide (laughing gas) and oral conscious sedation for patients who feel anxious or fearful about dental procedures. We\'ll talk through your options before any appointment.',
    },
    {
      q: 'What should I do if I have a dental emergency?',
      a: 'Call us immediately at (406) 752-4545. We make every effort to see emergency patients the same day. If it\'s after hours, leave a message and we\'ll call you back as soon as possible.',
    },
    {
      q: 'Are you accepting new patients?',
      a: 'Yes! We welcome new patients of all ages. You can book online using the appointment request form, or call us directly at (406) 752-4545.',
    },
    {
      q: 'What are your office hours?',
      a: 'We\'re open Tuesday through Friday, 8:00 AM to 5:00 PM. We are closed Monday, Saturday, and Sunday. For emergencies outside office hours, please call and leave a message.',
    },
    {
      q: 'Do you offer a payment plan or financing options?',
      a: 'Yes. We accept CareCredit and work with most major dental insurance plans. Our team will help you understand your coverage and any out-of-pocket costs before treatment begins.',
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);
  }

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
          <img src="/images/hero-homepage.jpg" alt="Summit Dental Group waiting room and dental office in Kalispell, MT" className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>
              Veteran-Owned · 4.8★ Google Rating · Kalispell, MT
            </div>
            <h1>
              Gentle, Expert Dentistry for the Whole <em>Flathead Valley</em>
            </h1>
            <p className="hero-sub">{SITE.heroSub}</p>
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
            <div className="services-grid services-grid--4col">
              {SITE.services.map(s => (
                <a key={s.title} href={s.href} className="service-card">
                  <div className="service-icon">
                    {s.icon}
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
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
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
                <p style={{ fontSize: '0.82rem', color: 'var(--color-neutral-mid)', marginTop: '10px' }}>
                  🎬 Summit Dental Group Office Tour: see the team, the office, and our approach to patient care.
                </p>
              </div>
              {/* Dr. Vanzant bio video + testimonial */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                    <iframe
                      src="https://www.youtube.com/embed/videoseries?list=UUIdBaXNFJMeMMmhbwM08z4w&index=2&rel=0&modestbranding=1"
                      title="Dr. Mark Vanzant DMD: Montana Dentist Bio"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-neutral-mid)', marginTop: '8px' }}>Dr. Mark Vanzant, DMD: Meet Your Dentist (0:45)</p>
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
              <span className="eyebrow veterans-eyebrow">Veterans & Military Families</span>
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
                <a href="/veterans-military" className="btn btn-primary">Veterans & Military Page</a>
                <a href={SITE.phoneTel} className="btn btn-ghost-light">Call {SITE.phone}</a>
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

        {/* ── HOW IT WORKS ──────────────────────────────────── */}
        <section className="section section--slate" id="process">
          <div className="container">
            <span className="eyebrow">How It Works</span>
            <h2 style={{ color: '#fff', marginBottom: '10px' }}>Getting Started Is Easy</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: 0 }}>
              No confusing steps. Here&apos;s exactly what happens when you reach out.
            </p>
            <div className="process-grid">
              {[
                {
                  num: '01', title: 'Call or Book Online',
                  desc: 'Call (406) 752-4545 or submit the appointment request form. We respond same day.',
                  svg: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg>,
                },
                {
                  num: '02', title: 'Come In for Your Visit',
                  desc: 'Enjoy our comfortable office: coffee bar, massage chairs, and a team that genuinely cares.',
                  svg: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                },
                {
                  num: '03', title: 'Leave with a Healthier Smile',
                  desc: 'Every visit ends with a clear treatment plan, no surprises, and a team cheering you on.',
                  svg: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
                },
              ].map((step, i, arr) => (
                <div key={step.num} className="process-step">
                  {i < arr.length - 1 && <div className="process-connector" />}
                  <div className="process-icon-wrap">{step.svg}</div>
                  <div className="process-num">{step.num}</div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href="/contact" className="btn btn-primary">Book Your Appointment</a>
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

        {/* ── ABOUT DR. VANZANT ─────────────────────────────── */}
        <section className="section" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/photo-dr-headshot-formal.jpg" alt="Dr. Mark Vanzant, DMD, Founder of Summit Dental Group Kalispell MT" />
                <div className="about-badge">
                  <div className="about-badge-rating">4.8</div>
                  <div className="about-badge-stars">★★★★★</div>
                  <div className="about-badge-count">469 Google Reviews</div>
                </div>
              </div>
              <div className="about-text">
                <span className="eyebrow">Meet Your Dentist</span>
                <h2>Dr. Mark A. Vanzant, DMD</h2>
                <p>
                  Dr. Vanzant is a graduate of the University of Florida College of Dentistry and a veteran
                  of the United States Air Force, where he completed three combat deployments. Today, he
                  continues to serve in the Montana Army National Guard while running Summit Dental Group.
                </p>
                <p>
                  His approach is simple: treat every patient the way he&apos;d want to be treated. That means
                  honest answers, clear explanations, and never recommending treatment you don&apos;t need.
                  It&apos;s why his patients keep coming back, and why they send their families.
                </p>
                <div className="about-stats">
                  {[
                    { num: '15+', label: 'Years of Experience' },
                    { num: '4.8★', label: 'Google Rating' },
                    { num: '469', label: 'Verified Reviews' },
                    { num: 'USAF', label: 'Veteran, 3 Deployments' },
                  ].map(s => (
                    <div key={s.label} className="about-stat">
                      <div className="about-stat-num">{s.num}</div>
                      <div className="about-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="about-credentials">
                  {['University of Florida, DMD', 'USAF Veteran', 'Montana ARNG', 'TRICARE Provider', 'ADA Member'].map(c => (
                    <span key={c} className="credential-badge">{c}</span>
                  ))}
                </div>
                <div className="about-ctas">
                  <a href="/about" className="btn btn-secondary">Full Bio & Team →</a>
                  <a href="/contact" className="btn btn-primary">Book with Dr. Vanzant</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────── */}
        <section className="section section--tinted" id="reviews">
          <div className="container">
            <span className="eyebrow">Patient Stories</span>
            <h2 style={{ marginBottom: '10px' }}>What Kalispell Patients Are Saying</h2>
            <p className="section-intro">
              4.8 stars from 469 Google reviews. Not because we ask for them, but because we earn them.
            </p>
            <div className="reviews-grid">
              {SITE.reviews.map(r => (
                <div key={r.name} className="review-card">
                  <div className="review-stars">{'★'.repeat(r.stars)}</div>
                  <p className="review-text">{r.text}</p>
                  <div className="review-author">
                    <div className="review-avatar">{r.initial}</div>
                    <div>
                      <div className="review-name">{r.name}</div>
                      <div className="review-detail">{r.detail}</div>
                      <div className="review-source">{r.source}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="review-platforms">
              <p className="review-platforms-label">See all reviews or share your experience:</p>
              <div className="review-platforms-links">
                <a href="https://g.page/r/summitdentalmt" target="_blank" rel="noopener noreferrer" className="review-platform-btn">Google Reviews</a>
                <a href="https://www.facebook.com/summitdentalmt" target="_blank" rel="noopener noreferrer" className="review-platform-btn">Facebook</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── INSURANCE SECTION ─────────────────────────────── */}
        <section className="insurance-section">
          <div className="insurance-inner">
            <div>
              <span className="eyebrow" style={{ color: '#e8a96a' }}>Insurance & Payment</span>
              <h2 style={{ color: '#fff', marginBottom: '16px' }}>We Work With Most Major Plans</h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', marginBottom: '28px' }}>
                Don&apos;t let insurance questions stop you from getting the care you need. Our team will
                verify your benefits and explain your coverage before any treatment starts.
              </p>
              <div className="inline-ctas">
                <a href="/new-patients" className="btn btn-primary">New Patient Info</a>
                <a href={SITE.phoneTel} className="btn btn-ghost-light">Call Us</a>
              </div>
            </div>
            <div className="insurance-list">
              {SITE.insurance.map(plan => (
                <div key={plan} className="insurance-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {plan}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ PREVIEW ───────────────────────────────────── */}
        <section className="section" id="faq">
          <div className="container">
            <span className="eyebrow">Common Questions</span>
            <h2 style={{ marginBottom: '10px' }}>Answers Before You Ask</h2>
            <p className="section-intro" style={{ marginBottom: '48px' }}>
              Straight answers about insurance, appointments, sedation, and more.
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
              <a href="/contact" className="btn btn-ghost-light">Book Appointment</a>
              <a href={SITE.phoneTel} className="btn btn-ghost-light">Call {SITE.phone}</a>
            </div>
          </div>
        </div>

        {/* ── CONTACT / APPOINTMENT FORM ────────────────────── */}
        <section className="section" id="contact" style={{ background: '#F5F3EF' }}>
          <div className="container">
            <span className="eyebrow">Get in Touch</span>
            <h2 style={{ marginBottom: '40px' }}>Request an Appointment</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Visit Summit Dental Group</h3>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Phone</div>
                    <div className="contact-detail-value"><a href={SITE.phoneTel}>{SITE.phone}</a></div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Address</div>
                    <div className="contact-detail-value">203 Business Center Loop, Suite C<br />Kalispell, MT 59901</div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Hours</div>
                    <div className="contact-detail-value" style={{ display: 'block' }}>
                      <div style={{ fontSize: '0.9rem' }}>Tue – Fri: 8:00 AM – 5:00 PM</div>
                      <div style={{ fontSize: '0.85rem', color: '#5a6473', marginTop: '2px' }}>Mon / Sat / Sun: Closed</div>
                    </div>
                  </div>
                </div>
                {/* MAP */}
                <div style={{ marginTop: '24px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 18px rgba(58,80,107,0.12)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.0!2d-114.3120!3d48.1936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536f7c8f53a5a5a5%3A0x0!2s203+Business+Center+Loop%2C+Kalispell%2C+MT+59901!5e0!3m2!1sen!2sus!4v1710783200000!5m2!1sen!2sus"
                    title="Summit Dental Group: 203 Business Center Loop Kalispell MT"
                    width="100%" height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="contact-form">
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 style={{ marginBottom: '10px', color: 'var(--color-primary)' }}>Request Received. Thank You!</h3>
                    <p style={{ color: '#5a6473', fontSize: '0.9rem' }}>
                      Our team will call or email you within one business day to confirm your appointment.
                      For urgent needs, call us directly at{' '}
                      <a href={SITE.phoneTel} style={{ color: 'var(--color-accent)', fontWeight: 700 }}>{SITE.phone}</a>.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3>Request Your Appointment</h3>
                    <p className="contact-form-sub">We&apos;ll confirm within one business day. For same-day needs, please call.</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="first_name">First Name *</label>
                          <input id="first_name" name="first_name" type="text" required placeholder="Jane" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="last_name">Last Name *</label>
                          <input id="last_name" name="last_name" type="text" required placeholder="Smith" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone">Phone *</label>
                          <input id="phone" name="phone" type="tel" required placeholder="(406) 555-0100" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input id="email" name="email" type="email" placeholder="jane@email.com" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="service">Reason for Visit</label>
                        <select id="service" name="service">
                          <option value="">Select...</option>
                          <option>New Patient Exam & Cleaning</option>
                          <option>Dental Emergency</option>
                          <option>Dental Implant Consultation</option>
                          <option>Cosmetic / Smile Makeover</option>
                          <option>Sedation Dentistry</option>
                          <option>Teeth Whitening</option>
                          <option>Crown or Bridge</option>
                          <option>Veterans / TRICARE Inquiry</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Anything else we should know?</label>
                        <textarea id="message" name="message" placeholder="Tell us about your situation, insurance, or any concerns..." />
                      </div>
                      <button type="submit" className="btn btn-primary form-submit">
                        Request Appointment →
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
