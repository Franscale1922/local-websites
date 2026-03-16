'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// ─── PROSPECT DATA — Edit everything below per business ───────────────────────
const SITE = {
  // NAV
  logoName: 'Peak',
  logoAccent: 'Pursuits',

  // HERO
  heroEyebrow: 'Glacier Country • Whitefish, Montana',
  heroH1: 'Where You Go Matters.',
  heroSub: "You didn't drive to Montana to follow a laminated map. We take you to the places the guidebooks don't mention.",
  heroCTA1: 'Book a Trip',
  heroCTA2: 'See What We Do',
  heroImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=85',

  // VALUE PROPS
  valueProps: [
    {
      icon: '🏔️',
      title: 'Small Groups Only',
      desc: 'Never more than 6 guests per guide. You get real attention, not a cattle drive.',
    },
    {
      icon: '🎣',
      title: 'Year-Round Access',
      desc: 'Hiking in summer, backcountry skiing in winter, fly fishing in between. There\'s always a reason to come back.',
    },
    {
      icon: '🗺️',
      title: '15 Years on This Land',
      desc: 'We grew up here. We know where the elk feed, where the powder holds, and where to be at sunset.',
    },
  ],

  // TOURS
  toursLabel: 'What We Offer',
  toursTitle: 'Pick Your Adventure',
  toursSub: 'Day trips and multi-day expeditions. All skill levels. No experience required — just a willingness to show up.',
  tours: [
    {
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80',
      badge: 'Most Popular',
      title: 'Glacier Backcountry Day Hike',
      duration: 'Full Day',
      difficulty: 'Moderate',
      desc: 'Off-trail routes through Glacier\'s interior. Wildflowers, wildlife, and views that don\'t belong on postcards.',
      price: '$145',
      perPerson: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=700&q=80',
      badge: 'Winter',
      title: 'Whitefish Backcountry Ski Tour',
      duration: 'Full Day',
      difficulty: 'Intermediate',
      desc: 'Skin up. Ski down. Repeat. Guided access to terrain most people never find.',
      price: '$195',
      perPerson: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=700&q=80',
      badge: 'Multi-Day',
      title: '3-Day Wilderness Pack Trip',
      duration: '3 Days / 2 Nights',
      difficulty: 'All Levels',
      desc: 'Deep in the Bob Marshall Wilderness. Horses carry the gear. You just have to show up and pay attention.',
      price: '$695',
      perPerson: true,
    },
  ],

  // ABOUT
  aboutLabel: 'Who We Are',
  aboutTitle: "We're Guides, Not Tour Operators.",
  aboutP1: "Started this company in 2009 with one pack string and a beat-up Land Cruiser. We've turned down the group tours, the bus contracts, and the franchise offers. That's not what this is.",
  aboutP2: "If you want a curated experience with a laminated itinerary and a gift shop receipt, we're probably not your people. But if you want to actually understand this place — where to go, what to watch for, why it matters — let's talk.",
  aboutStat: { number: '2,400+', label: 'Trips Guided' },
  aboutImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80',
  aboutCTA: 'Our Story',

  // REVIEWS
  reviewsLabel: 'What People Say',
  reviewsTitle: "Don't Take Our Word For It.",
  reviews: [
    {
      stars: 5,
      text: '"Best day of our entire trip to Montana. Our guide knew exactly where to take us to avoid the crowds and the views were unreal. Already planning next summer."',
      name: 'Tom H.',
      location: 'Denver, CO',
      initial: 'T',
    },
    {
      stars: 5,
      text: '"I\'ve done guided trips all over the world. This was top 3. Small group, actually knew the area, didn\'t feel like a tourist for one second."',
      name: 'Rachel M.',
      location: 'Seattle, WA',
      initial: 'R',
    },
    {
      stars: 5,
      text: '"Did the 3-day pack trip with my teenage kids. They put down their phones. I didn\'t think that was possible anymore. Genuinely incredible."',
      name: 'Doug & Family',
      location: 'Minneapolis, MN',
      initial: 'D',
    },
  ],

  // CTA
  ctaTitle: "The Mountain's Not Going Anywhere. But Your Window Is.",
  ctaSub: "Summer fills up by April. Winter by November. If you're thinking about it, now's the time to reach out.",
  ctaBtn1: 'Book Your Trip',
  ctaBtn2: 'Ask a Question',
  phone: '(406) 555-0100',

  // FOOTER
  footerTagline: 'Glacier Country guide service. Small groups. Real terrain. No shortcuts.',
  navLinks: [
    { label: 'Trips', href: '#tours' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],
  footerLinks: {
    explore: [
      { label: 'Day Hikes', href: '#tours' },
      { label: 'Ski Tours', href: '#tours' },
      { label: 'Pack Trips', href: '#tours' },
      { label: 'Fly Fishing', href: '#tours' },
    ],
    info: [
      { label: 'About Us', href: '#about' },
      { label: 'Book a Trip', href: '#contact' },
      { label: 'Gift Cards', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  address: '123 Main St, Whitefish, MT 59937',
  email: 'hello@peakpursuits.com',
  year: new Date().getFullYear(),
};
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav-logo">
          {SITE.logoName}<span>{SITE.logoAccent}</span>
        </div>
        <ul className="nav-links">
          {SITE.navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className={link.label === 'Book a Trip' ? 'nav-cta' : ''}>
                {link.label}
              </a>
            </li>
          ))}
          <li><a href="#contact" className="nav-cta">Book a Trip</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SITE.heroImage} alt="Montana backcountry landscape" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">{SITE.heroEyebrow}</span>
          <h1>{SITE.heroH1}</h1>
          <p className="hero-sub">{SITE.heroSub}</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">{SITE.heroCTA1} →</a>
            <a href="#tours" className="btn btn-secondary">{SITE.heroCTA2}</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section>
        <div className="value-props">
          {SITE.valueProps.map((vp) => (
            <div key={vp.title} className="value-prop">
              <span className="value-prop-icon">{vp.icon}</span>
              <h3>{vp.title}</h3>
              <p>{vp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOURS ── */}
      <section className="section" id="tours">
        <div className="container">
          <span className="section-label">{SITE.toursLabel}</span>
          <h2 className="section-title">{SITE.toursTitle}</h2>
          <p className="section-subtitle">{SITE.toursSub}</p>
          <div className="tours-grid">
            {SITE.tours.map((tour) => (
              <div key={tour.title} className="tour-card">
                <div className="tour-card-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tour.image} alt={tour.title} />
                  {tour.badge && <span className="tour-card-badge">{tour.badge}</span>}
                </div>
                <div className="tour-card-body">
                  <div className="tour-card-meta">
                    <span className="tour-meta-item">⏱ {tour.duration}</span>
                    <span className="tour-meta-item">📊 {tour.difficulty}</span>
                  </div>
                  <h3>{tour.title}</h3>
                  <p>{tour.desc}</p>
                  <div className="tour-card-footer">
                    <div className="tour-price">
                      {tour.price}
                      {tour.perPerson && <span> / person</span>}
                    </div>
                    <a href="#contact" className="btn btn-outline-dark">Reserve →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section section--tinted" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <div className="about-image-main">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SITE.aboutImage} alt="Our guides in the field" />
              </div>
              <div className="about-accent-box">
                <div className="stat-number">{SITE.aboutStat.number}</div>
                <div className="stat-label">{SITE.aboutStat.label}</div>
              </div>
            </div>
            <div className="about-content">
              <span className="section-label">{SITE.aboutLabel}</span>
              <h2>{SITE.aboutTitle}</h2>
              <p>{SITE.aboutP1}</p>
              <p>{SITE.aboutP2}</p>
              <a href="#contact" className="btn btn-outline-dark">{SITE.aboutCTA} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section" id="reviews">
        <div className="container">
          <span className="section-label">{SITE.reviewsLabel}</span>
          <h2 className="section-title">{SITE.reviewsTitle}</h2>
          <div className="reviews-grid">
            {SITE.reviews.map((r) => (
              <div key={r.name} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="review-author-avatar">{r.initial}</div>
                  <div>
                    <div className="review-author-name">{r.name}</div>
                    <div className="review-author-location">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contact">
        <div className="container">
          <h2>{SITE.ctaTitle}</h2>
          <p>{SITE.ctaSub}</p>
          <div className="btn-group">
            <a href={`tel:${SITE.phone}`} className="btn btn-primary">{SITE.ctaBtn1} →</a>
            <a href={`mailto:${SITE.email}`} className="btn btn-secondary">{SITE.ctaBtn2}</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              {SITE.logoName}<span>{SITE.logoAccent}</span>
            </div>
            <p className="footer-tagline">{SITE.footerTagline}</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">👤</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              {SITE.footerLinks.explore.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Info</h4>
            <ul>
              {SITE.footerLinks.info.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {SITE.year} {SITE.logoName}{SITE.logoAccent}. {SITE.address}</span>
          <span><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></span>
        </div>
      </footer>
    </>
  );
}
