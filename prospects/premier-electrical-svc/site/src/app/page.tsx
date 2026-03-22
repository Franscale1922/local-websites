'use client';
import { useEffect, useState } from 'react';
import SiteFooter from './components/SiteFooter';

const SITE = {
  name: 'Premier Electrical Services',
  phone: '(360) 421-5230',
  phoneTel: 'tel:+13604215230',
  email: 'info@premierelectricalsvc.com',
  address: '1500 East College Way Ste A PMB 291, Mount Vernon, WA 98273',
  license: 'PREMIES821LL',

  heroImage: '/images/hero-homepage.jpg',
  heroH1Part1: 'The Electricians Skagit Valley',
  heroH1Accent: 'Keeps Calling Back.',
  heroSub: 'Nearly 60 years of combined experience. Three Best of the Best awards. One straightforward promise: we do the job right the first time.',
  heroCTA1: 'Get a Free Estimate',
  heroCTA2: 'Call (360) 421-5230',

  navLinks: [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Recognition', href: '/recognition' },
    { label: 'Service Area', href: '/service-area' },
    { label: 'FAQ', href: '/faq' },
  ],

  trustItems: [
    { label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025' },
    { label: 'A+ BBB Rating', sub: 'Licensed, Bonded & Insured' },
    { label: '60 Yrs Combined Experience', sub: 'Residential & Commercial' },
    { label: 'Free Estimates', sub: 'On most projects — no surprises' },
  ],

  servicesTitle: 'What We Do',
  servicesHeading: 'We Handle the Jobs Others Skip.',
  servicesSub: 'From panel upgrades to historic home rewires to EV chargers — specialty work is our thing.',
  services: [
    {
      title: 'Residential Wiring',
      desc: 'New construction, remodels, complete rewires, rough-in, and trim-out. We\'ve built them and rewired them — we know how they\'re supposed to work.',
      href: '/services/residential-wiring',
    },
    {
      title: 'Panel Upgrades',
      desc: 'Undersized panel? Old fuse box? We upgrade panels and subpanels so your home can handle what modern life demands. All work is inspector-approved.',
      href: '/services/panel-upgrades',
    },
    {
      title: 'Historic & Older Homes',
      desc: 'Knob-and-tube, cloth wiring, fuse boxes — we specialize in complex, older, and historic properties that other electricians pass on. We know what we\'re looking at.',
      href: '/services/historic-home-rewiring',
    },
    {
      title: 'EV Charging Stations',
      desc: 'Tesla Wall Connector, JuiceBox, and more. We install Level 2 home chargers the right way — permitted, clean, and code-compliant.',
      href: '/services/ev-charging',
    },
    {
      title: 'Generator Installation',
      desc: 'Temporary or permanent whole-home generators. When the power goes out in the Pacific Northwest, you\'ll be glad you planned ahead.',
      href: '/services/generator-installation',
    },
    {
      title: 'Commercial Work',
      desc: 'Restaurants, offices, daycares, retail spaces. Fire suppression wiring, exterior security lighting, and complete commercial electrical systems.',
      href: '/services/commercial-wiring',
    },
    {
      title: 'Service Calls & Troubleshooting',
      desc: 'Tripped breakers, mystery outages, questionable work left by a previous contractor. We diagnose it, we fix it, we explain what happened.',
      href: '/services/service-calls',
    },
    {
      title: 'Lighting & Outbuildings',
      desc: 'Indoor, outdoor, security, and accent lighting. Plus wiring for detached garages, shops, ADUs, and sheds. Hot tub and spa wiring too.',
      href: '/services/lighting-upgrades',
    },
  ],

  processTitle: 'How It Works',
  processHeading: 'Simple Process. No Guesswork.',
  processSub: 'You shouldn\'t have to guess what happens next. Here\'s exactly how we work.',
  processSteps: [
    {
      num: '01',
      title: 'Call or Submit a Request',
      desc: 'Reach out by phone or the form below. We respond same day on most requests. If it\'s urgent, call — we pick up.',
    },
    {
      num: '02',
      title: 'Get a Free Estimate',
      desc: 'We come out, look at the job, and give you a clear quote — before any work starts. No vague ranges. No hidden line items. What we quote is what you pay.',
    },
    {
      num: '03',
      title: 'We Do the Work Right',
      desc: 'Our team shows up on time and does the job to code. Every project is inspector-approved. We don\'t leave until it\'s done right.',
    },
  ],

  whyTitle: 'Why Premier',
  whyHeading: 'Three Things We Don\'t Compromise On.',
  whyItems: [
    {
      num: '01',
      title: 'We Show Up.',
      desc: 'Scheduled appointment means we\'re there. No three-hour windows, no last-minute cancellations, no ghosting. Our schedule is our word.',
    },
    {
      num: '02',
      title: 'No Surprise Invoices.',
      desc: 'Free estimates on most projects. We tell you what it costs before we start — not after. What we quote is what you pay.',
    },
    {
      num: '03',
      title: 'Safety Is Non-Negotiable.',
      desc: 'We\'re not cutting corners behind your walls. Every job is done to code, every time. Every project is inspector-approved. That\'s not a policy — it\'s how we sleep at night.',
    },
  ],

  aboutLabel: 'Who We Are',
  aboutTitle: 'Award-Winning. Expert in the Tricky Stuff.',
  aboutP1: 'Premier Electrical Services has earned the "Best of the Best" award in Skagit Valley three years running — 2023, 2024, and 2025. We also carry an A+ rating with the Better Business Bureau. That\'s not marketing. That\'s customers and inspectors saying the work holds up.',
  aboutP2: 'Our team has nearly 60 years of combined electrical experience. We specialize in work that other electricians decline — complex properties, historic homes, older wiring systems. If the job is unusual, we\'ve probably seen it.',
  aboutP3: '100% recommended on Facebook. Not because we asked people to leave reviews — because we did the work right.',
  aboutImage: '/images/hero-about.jpg',
  aboutStats: [
    { num: '60+', label: 'Years Combined Experience' },
    { num: '3×', label: 'Best of the Best Award' },
    { num: 'A+', label: 'BBB Rating' },
    { num: '100%', label: 'Recommended on Facebook' },
  ],
  aboutCredentials: ['Licensed', 'Bonded', 'Insured', 'A+ BBB', 'Lic. PREMIES821LL'],

  areaLabel: 'Service Area',
  areaHeading: 'Bellingham to Seattle. We Cover the Region.',
  areaSub: 'Based in Mount Vernon — we serve the full Puget Sound corridor from Bellingham to Seattle.',
  counties: [
    'Skagit County',
    'Whatcom County',
    'San Juan County',
    'Island County',
    'King County',
    'Snohomish County',
  ],

  faqTitle: 'FAQs',
  faqHeading: 'Common Questions.',
  faqSub: 'Straight answers. No runaround.',
  faqs: [
    {
      q: 'Do you offer free estimates?',
      a: 'Yes — on most projects. We come out, look at the job, and give you a clear number before anything starts. No obligation, no pressure.',
    },
    {
      q: 'Do you work on older homes or knob-and-tube wiring?',
      a: 'Yes, and it\'s one of our specialties. We have nearly 60 years of combined experience, including work on complex, older, and historic properties. A lot of electricians pass on this work. We don\'t.',
    },
    {
      q: 'Are you licensed, bonded, and insured?',
      a: 'Yes. License number PREMIES821LL. We\'re also A+ rated with the Better Business Bureau. You can verify our license on the Washington State Department of Labor & Industries website.',
    },
    {
      q: 'What areas do you serve?',
      a: 'We serve Skagit, Whatcom, San Juan, Island, King, and Snohomish counties — from Bellingham down to Seattle. Based in Mount Vernon.',
    },
    {
      q: 'Do you install EV chargers?',
      a: 'Yes. We install Tesla Wall Connectors, JuiceBox units, and other Level 2 home charging stations. All installs are permitted and code-compliant.',
    },
    {
      q: 'Can you install a whole-home generator?',
      a: 'Yes. We handle both temporary and permanent generator installations. We\'ll size it for your home, get it properly connected, and make sure it\'s transfer-switch wired correctly.',
    },
    {
      q: 'What does "inspector-approved workmanship" mean?',
      a: 'It means our work passes the permit inspection — every time. We pull the proper permits, do the work to code, and don\'t cut corners. The inspector signs off. You get a safe system.',
    },
    {
      q: 'How do I know if my electrical panel needs an upgrade?',
      a: 'Common signs: tripped breakers, flickering lights, a fuse box instead of a breaker panel, or an inability to power multiple appliances at once. Call us — we\'ll come take a look.',
    },
  ],

  reviewsLabel: 'Customer Reviews',
  reviewsHeading: 'Straight From the People We\'ve Helped.',
  reviews: [
    {
      stars: 5,
      text: '"They were professional, honest, and didn\'t try to upsell me on things I didn\'t need. The work was clean, they explained everything, and the price was exactly what they quoted."',
      name: 'Michael T.',
      detail: 'Burlington, WA',
      initial: 'M',
    },
    {
      stars: 5,
      text: '"Had a weird electrical issue that two other electricians couldn\'t figure out. Premier came out, diagnosed it in an hour, and had it fixed by end of day. These guys know what they\'re doing."',
      name: 'Sarah L.',
      detail: 'Anacortes, WA',
      initial: 'S',
    },
    {
      stars: 5,
      text: '"Got our EV charger installed last month. Showed up on time, did the job right, cleaned up after themselves. We\'ve already referred two neighbors. Best electricians in Skagit County."',
      name: 'Dave & Carol R.',
      detail: 'Mount Vernon, WA',
      initial: 'D',
    },
  ],
  reviewPlatforms: [
    { label: 'Google', href: 'https://www.google.com/search?q=Premier+Electrical+Services+Mount+Vernon+WA' },
    { label: 'Facebook', href: 'https://www.facebook.com/premierelectricalsvc' },
    { label: 'BBB', href: 'https://www.bbb.org/us/wa/mount-vernon/profile/electrical-contractors/premier-electrical-services-inc-1296-1000135427' },
  ],

  ctaTitle: 'Ready to Get It Done Right?',
  ctaSub: 'Free estimates on most projects. We pick up the phone. We show up when we say we will.',
  ctaBtn1: 'Get a Free Estimate',
  ctaBtn2: 'Call (360) 421-5230',

  contactLabel: 'Contact Us',
  contactHeading: 'Get a Free Estimate',
  contactSub: 'Tell us what you need. We\'ll get back to you fast — usually same day.',
  serviceTypes: [
    'Panel Upgrade',
    'EV Charging Station',
    'Generator Installation',
    'New Construction / Remodel',
    'Historic / Older Home Rewire',
    'Hot Tub / Spa Wiring',
    'Commercial Wiring',
    'Service Call / Troubleshooting',
    'Outbuilding / ADU',
    'Lighting (Indoor / Outdoor)',
    'Suspect Work Evaluation',
    'Other',
  ],

  footerTagline: 'Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. A+ BBB Rating. Lic. PREMIES821LL.',
  year: new Date().getFullYear(),
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  function toggleFaq(i: number) {
    setOpenFaq(prev => prev === i ? null : i);
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: SITE.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }) }} />

      {/* MOBILE STICKY BAR */}
      <div className="mobile-sticky-bar">
        <a href={SITE.phoneTel} className="mobile-sticky-call">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg>
          Call (360) 421-5230
        </a>
        <a href="/contact" className="mobile-sticky-estimate">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
          Free Estimate
        </a>
      </div>

      {/* NAV */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          {SITE.navLinks.map(l => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={SITE.phoneTel} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
          Call Now
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SITE.heroImage} alt="Electrician working on electrical panel" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#F5A623" style={{display:'inline',verticalAlign:'middle',marginRight:'6px'}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            3× Best of the Best · A+ BBB
          </div>
          <h1>
            {SITE.heroH1Part1} <span>{SITE.heroH1Accent}</span>
          </h1>
          <p className="hero-sub">{SITE.heroSub}</p>
          <div className="hero-ctas hero-ctas--mobile-stack">
            <a href="#contact" className="btn btn-primary">{SITE.heroCTA1}</a>
            <a href={SITE.phoneTel} className="btn btn-ghost-light">{SITE.heroCTA2}</a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-number">60+</div>
              <div className="trust-label">Years Combined Experience</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">3×</div>
              <div className="trust-label">Best of the Best Award</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">100%</div>
              <div className="trust-label">Recommended on Facebook</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">A+</div>
              <div className="trust-label">BBB Rating</div>
            </div>
          </div>
        </div>

        {/* AWARD FAN — bottom-right, desktop only */}
        <div className="hero-award-fan">
          <div className="hero-award-fan-cards">
            {/* 2023 — back */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/real-award-2023-winner.png"
              alt="2023 Best of the Best Skagit Valley Winner"
              className="fan-card fan-card--back"
            />
            {/* 2024 — middle */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/real-award-2024-winner.jpg"
              alt="2024 Best of the Best Skagit Valley Winner"
              className="fan-card fan-card--mid"
            />
            {/* 2025 — front */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/real-award-2025-winner.jpg"
              alt="2025 Best of the Best Skagit Valley Winner"
              className="fan-card fan-card--front"
            />
          </div>
          <div className="hero-award-fan-label">3× Best of the Best · 2023–2025</div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        {[
          { svg: <svg key="trophy" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>, label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025' },
          { svg: <svg key="bbb" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>, label: 'A+ BBB Rating', sub: 'Licensed, Bonded & Insured' },
          { svg: <svg key="exp" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, label: '60 Yrs Combined Experience', sub: 'Residential & Commercial' },
          { svg: <svg key="est" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>, label: 'Free Estimates', sub: 'On most projects — no surprises' },
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

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <span className="eyebrow">{SITE.servicesTitle}</span>
          <h2 style={{ marginBottom: '12px' }}>{SITE.servicesHeading}</h2>
          <p style={{ color: '#4a5568', marginBottom: 0, fontSize: '1rem' }}>
            {SITE.servicesSub}
          </p>
          <div className="services-grid services-grid--4col">
            {[
              { title: 'Residential Wiring', desc: SITE.services[0].desc, href: SITE.services[0].href, svg: (
                <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* House body filled */}
                  <path d="M8 22L24 8L40 22V42H30V30H18V42H8V22Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  {/* Door */}
                  <rect x="18" y="30" width="12" height="12" rx="1" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.2"/>
                  {/* Rooftop peak */}
                  <path d="M4 24L24 6L44 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Electrical bolt on house */}
                  <path d="M26 16L22 22H26L22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8"/>
                </svg>
              )},
              { title: 'Panel Upgrades', desc: SITE.services[1].desc, href: SITE.services[1].href, svg: (
                <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Panel box */}
                  <rect x="7" y="4" width="34" height="40" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5"/>
                  {/* Center seam */}
                  <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
                  {/* Breakers left */}
                  <rect x="10" y="12" width="11" height="5" rx="1.5" fill="currentColor" fillOpacity="0.6"/>
                  <rect x="10" y="20" width="11" height="5" rx="1.5" fill="currentColor" fillOpacity="0.4"/>
                  <rect x="10" y="28" width="11" height="5" rx="1.5" fill="currentColor" fillOpacity="0.6"/>
                  <rect x="10" y="36" width="11" height="5" rx="1.5" fill="currentColor" fillOpacity="0.3"/>
                  {/* Breakers right */}
                  <rect x="27" y="12" width="11" height="5" rx="1.5" fill="currentColor" fillOpacity="0.4"/>
                  <rect x="27" y="20" width="11" height="5" rx="1.5" fill="currentColor" fillOpacity="0.6"/>
                  <rect x="27" y="28" width="11" height="5" rx="1.5" fill="currentColor" fillOpacity="0.3"/>
                  <rect x="27" y="36" width="11" height="5" rx="1.5" fill="currentColor" fillOpacity="0.5"/>
                  {/* Main breaker */}
                  <rect x="10" y="6" width="28" height="4" rx="1" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1"/>
                </svg>
              )},
              { title: 'Historic & Older Homes', desc: SITE.services[2].desc, href: SITE.services[2].href, svg: (
                <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Victorian-style house with attic */}
                  <path d="M6 48V26L14 16V8H20V12L24 8L28 12V8H34V16L42 26V48H6Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  {/* Attic window */}
                  <path d="M20 8L24 4L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="21" y="8" width="6" height="5" rx="1" fill="currentColor" fillOpacity="0.35"/>
                  {/* Door */}
                  <rect x="19" y="36" width="10" height="12" rx="1" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8"/>
                  {/* Windows */}
                  <rect x="9" y="30" width="8" height="7" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="31" y="30" width="8" height="7" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
                  {/* Warning bolt — old wiring */}
                  <path d="M25 32L23 36H25L23 40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7"/>
                </svg>
              )},
              { title: 'EV Charging Stations', desc: SITE.services[3].desc, href: SITE.services[3].href, svg: (
                <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Car body */}
                  <path d="M6 30L10 20H38L42 30V38H6V30Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  {/* Windshield */}
                  <path d="M12 20L14 12H34L36 20" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  {/* Wheels */}
                  <circle cx="14" cy="38" r="5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.2"/>
                  <circle cx="34" cy="38" r="5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.2"/>
                  <circle cx="14" cy="38" r="2" fill="currentColor"/>
                  <circle cx="34" cy="38" r="2" fill="currentColor"/>
                  {/* Charge plug */}
                  <path d="M38 22L44 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M44 19V25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* Bolt */}
                  <path d="M22 24L19 30H23L20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )},
              { title: 'Generator Installation', desc: SITE.services[4].desc, href: SITE.services[4].href, svg: (
                <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Generator body */}
                  <rect x="4" y="16" width="40" height="24" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5"/>
                  {/* Engine rotor */}
                  <circle cx="16" cy="28" r="8" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2.2"/>
                  <circle cx="16" cy="28" r="3" fill="currentColor" fillOpacity="0.5"/>
                  {/* Output terminals */}
                  <rect x="28" y="22" width="12" height="6" rx="1.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="28" y="31" width="12" height="6" rx="1.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
                  {/* Bolt symbol on terminal */}
                  <path d="M33 23.5L31.5 26.5H33.5L32 29.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  {/* Exhaust stack */}
                  <rect x="18" y="10" width="6" height="8" rx="1" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 8C18 8 21 6 24 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  {/* Legs */}
                  <line x1="10" y1="40" x2="10" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="38" y1="40" x2="38" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              )},
              { title: 'Commercial Work', desc: SITE.services[5].desc, href: SITE.services[5].href, svg: (
                <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Building facade */}
                  <rect x="4" y="10" width="40" height="36" rx="2" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5"/>
                  {/* Roofline detail */}
                  <rect x="4" y="10" width="40" height="7" rx="2" fill="currentColor" fillOpacity="0.2"/>
                  {/* Windows grid row 1 */}
                  <rect x="9" y="21" width="8" height="7" rx="1" fill="currentColor" fillOpacity="0.4"/>
                  <rect x="20" y="21" width="8" height="7" rx="1" fill="currentColor" fillOpacity="0.25"/>
                  <rect x="31" y="21" width="8" height="7" rx="1" fill="currentColor" fillOpacity="0.4"/>
                  {/* Windows grid row 2 */}
                  <rect x="9" y="31" width="8" height="7" rx="1" fill="currentColor" fillOpacity="0.25"/>
                  <rect x="31" y="31" width="8" height="7" rx="1" fill="currentColor" fillOpacity="0.3"/>
                  {/* Door */}
                  <rect x="20" y="33" width="8" height="13" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
                  {/* Electrical conduit line */}
                  <path d="M24 4V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="24" cy="4" r="2" fill="currentColor"/>
                </svg>
              )},
              { title: 'Service Calls & Troubleshooting', desc: SITE.services[6].desc, href: SITE.services[6].href, svg: (
                <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Wrench */}
                  <path d="M36 8C32 8 29 11 29 15C29 16.2 29.3 17.4 30 18.4L12 36.4C11 35.7 9.8 35.4 8.6 35.4C4.6 35.4 1.6 38.4 1.6 42.4C1.6 46.4 4.6 49.4 8.6 49.4C12.6 49.4 15.6 46.4 15.6 42.4C15.6 41.2 15.3 40 14.6 39L32.6 21C33.6 21.7 34.8 22 36 22C40 22 43 19 43 15C43 14.1 42.8 13.2 42.5 12.4L38 16.9L33.1 12L37.6 7.5C37 7.5 36.5 8 36 8Z" fill="none"/>
                  {/* Cleaner wrench */}
                  <path d="M38 6C33.6 6 30 9.6 30 14C30 15.5 30.4 16.9 31.2 18.1L14 35.2C12.8 34.4 11.4 34 10 34C5.6 34 2 37.6 2 42C2 46.4 5.6 50 10 50" fill="none"/>
                  {/* Magnifying glass */}
                  <circle cx="20" cy="20" r="12" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="20" cy="20" r="7" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
                  <line x1="29" y1="29" x2="40" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  {/* Exclamation in circle */}
                  <line x1="20" y1="16" x2="20" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="20" cy="25" r="1.2" fill="currentColor"/>
                  {/* Spark marks */}
                  <path d="M10 10L8 8M10 8L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
                  <path d="M32 10L30 8M32 8L30 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
                </svg>
              )},
              { title: 'Lighting & Outbuildings', desc: SITE.services[7].desc, href: SITE.services[7].href, svg: (
                <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Bulb globe */}
                  <path d="M24 4C16.3 4 10 10.3 10 18C10 22.8 12.4 27.1 16 29.7V36H32V29.7C35.6 27.1 38 22.8 38 18C38 10.3 31.7 4 24 4Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  {/* Base rings */}
                  <rect x="16" y="36" width="16" height="4" rx="2" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1.8"/>
                  <rect x="18" y="40" width="12" height="4" rx="2" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8"/>
                  {/* Filament glow lines */}
                  <path d="M18 20L20 17L22 20L24 16L26 20L28 17L30 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Rays */}
                  <line x1="24" y1="1" x2="24" y2="3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
                  <line x1="7" y1="7" x2="9" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
                  <line x1="41" y1="7" x2="39" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
                  <line x1="4" y1="18" x2="7" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
                  <line x1="44" y1="18" x2="41" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
                </svg>
              )},
            ].map(s => (
              <a key={s.title} href={s.href} className="service-card">
                <div className="service-icon">{s.svg}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-link">Learn more →</span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a href="/services" className="btn btn-secondary">See All Services →</a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — PROCESS */}
      <section className="section section--navy" id="process">
        <div className="container">
          <span className="eyebrow">{SITE.processTitle}</span>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>{SITE.processHeading}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: 0 }}>{SITE.processSub}</p>
          <div className="process-grid">
            {[
              { ...SITE.processSteps[0], svg: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg> },
              { ...SITE.processSteps[1], svg: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg> },
              { ...SITE.processSteps[2], svg: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
            ].map((step, i) => (
              <div key={step.num} className="process-step">
                {i < SITE.processSteps.length - 1 && <div className="process-connector" />}
                <div className="process-icon-wrap">
                  <div className="process-icon">{step.svg}</div>
                </div>
                <div className="process-num">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="/contact" className="btn btn-primary">{SITE.heroCTA1}</a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section--tinted" id="why">
        <div className="container">
          <span className="eyebrow">{SITE.whyTitle}</span>
          <h2 style={{ marginBottom: '8px' }}>{SITE.whyHeading}</h2>
          <p style={{ color: '#4a5568', fontSize: '1rem', marginBottom: 0 }}>
            These aren&apos;t slogans. They&apos;re the reason we&apos;ve won Best of the Best three years in a row.
          </p>
          <div className="why-grid">
            {SITE.whyItems.map(w => (
              <div key={w.num} className="why-card">
                <div className="why-number">{w.num}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SITE.aboutImage} alt="Electrical work in progress" />
              <div className="award-badge">
                <div className="award-badge-year">2023 · 2024 · 2025</div>
                <div className="award-badge-title">Best of the Best</div>
                <div className="award-badge-sub">Skagit Valley</div>
              </div>
            </div>
            <div className="about-text">
              <span className="eyebrow">{SITE.aboutLabel}</span>
              <h2>{SITE.aboutTitle}</h2>
              <p>{SITE.aboutP1}</p>
              <p>{SITE.aboutP2}</p>
              <p>{SITE.aboutP3}</p>
              <div className="about-stats">
                {SITE.aboutStats.map(s => (
                  <div key={s.label} className="about-stat">
                    <div className="about-stat-num">{s.num}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="about-credentials">
                {SITE.aboutCredentials.map(c => (
                  <span key={c} className="credential-badge">{c}</span>
                ))}
              </div>
              <a href="/about" className="btn btn-secondary" style={{ marginRight: '12px' }}>Read Our Story →</a>
              <a href="/contact" className="btn btn-primary">{SITE.heroCTA1} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section section--tinted" id="area">
        <div className="container">
          <span className="eyebrow">{SITE.areaLabel}</span>
          <h2 style={{ marginBottom: '12px' }}>{SITE.areaHeading}</h2>
          <p style={{ color: '#4a5568', fontSize: '1rem', marginBottom: 0 }}>{SITE.areaSub}</p>
          <div className="area-grid">
            <div className="county-list">
              {SITE.counties.map(county => (
                <div key={county} className="county-item">
                  <div className="county-dot" />
                  {county}
                </div>
              ))}
              <a href="/service-area" className="btn btn-secondary" style={{ marginTop: '24px', display: 'inline-block' }}>View Full Service Area →</a>
            </div>
            <div className="area-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341076.54706738576!2d-122.64133373671978!3d48.27244854254849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5484b6b027cfe07f%3A0xe24eba44eab793c2!2sMount%20Vernon%2C%20WA%2098273!5e0!3m2!1sen!2sus!4v1710783200000!5m2!1sen!2sus"
                title="Premier Electrical Services service area — Mount Vernon, WA"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" id="reviews">
        <div className="container">
          <span className="eyebrow">{SITE.reviewsLabel}</span>
          <h2 style={{ marginBottom: '8px' }}>{SITE.reviewsHeading}</h2>
          <p style={{ color: '#4a5568', fontSize: '1rem', marginBottom: 0 }}>
            100% recommended on Facebook. These are the kinds of calls we get.
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
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Review platform links */}
          <div className="review-platforms">
            <p className="review-platforms-label">Share your experience:</p>
            <div className="review-platforms-links">
              {SITE.reviewPlatforms.map(p => (
                <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className="review-platform-btn">
                  Leave a {p.label} Review
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--tinted" id="faq">
        <div className="container">
          <span className="eyebrow">{SITE.faqTitle}</span>
          <h2 style={{ marginBottom: '10px' }}>{SITE.faqHeading}</h2>
          <p style={{ color: '#4a5568', fontSize: '1rem', marginBottom: '48px' }}>{SITE.faqSub}</p>
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
                <div
                  className="faq-panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px', textAlign: 'left', display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={SITE.phoneTel} className="btn btn-primary">Call Us — We Pick Up</a>
            <a href="/faq" className="btn btn-secondary">See All FAQs →</a>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>{SITE.ctaTitle}</h2>
            <p>{SITE.ctaSub}</p>
          </div>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary">{SITE.ctaBtn1}</a>
            <a href={SITE.phoneTel} className="btn btn-ghost-light">{SITE.ctaBtn2}</a>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section className="section section--dark" id="contact" style={{ background: '#F7F8FA' }}>
        <div className="container">
          <span className="eyebrow">{SITE.contactLabel}</span>
          <h2 style={{ marginBottom: '40px', color: 'var(--color-primary)' }}>{SITE.contactHeading}</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Reach Us Directly</h3>
              <div className="contact-detail">
                <div className="contact-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg></div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-value">
                    <a href={SITE.phoneTel}>{SITE.phone}</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Mailing Address</div>
                  <div className="contact-detail-value">{SITE.address}</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg></div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Service Area</div>
                  <div className="contact-detail-value">Bellingham to Seattle — Skagit, Whatcom, San Juan, Island, King & Snohomish Counties</div>
                </div>
              </div>
              <div className="license-badge">
                <span className="check">✓</span> Lic. {SITE.license} — Licensed, Bonded & Insured · A+ BBB
              </div>
            </div>

            <div className="contact-form">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ marginBottom: '16px' }}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <h3 style={{ marginBottom: '10px', color: 'var(--color-primary)' }}>Got it — thanks.</h3>
                  <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
                    We&apos;ll be in touch shortly. You can also call us directly at{' '}
                    <a href={SITE.phoneTel} style={{ color: 'var(--color-accent)', fontWeight: 700 }}>{SITE.phone}</a>.
                  </p>
                </div>
              ) : (
                <>
                  <h3>{SITE.contactSub}</h3>
                  <p className="contact-form-sub">We respond same day on most requests.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name">Full Name</label>
                        <input id="contact-name" type="text" placeholder="Jane Smith" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-phone">Phone Number</label>
                        <input id="contact-phone" type="tel" placeholder="(360) 555-0100" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input id="contact-email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-service">What do you need?</label>
                      <select id="contact-service" required>
                        <option value="">Select a service type...</option>
                        {SITE.serviceTypes.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Tell us more (optional)</label>
                      <textarea id="contact-message" placeholder="Brief description of your project or issue..." />
                    </div>
                    <button type="submit" className="btn btn-primary form-submit">
                      Send My Request →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
