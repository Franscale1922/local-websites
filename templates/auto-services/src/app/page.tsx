'use client';
import { useEffect, useState } from 'react';

const SITE = {
  logoName: 'Glacier',
  logoAccent: 'Auto',
  navLinks: [{ label: 'Services', href: '#services' }, { label: 'Why Us', href: '#why' }, { label: 'About', href: '#about' }],
  heroBadge: 'ASE Certified • Family Owned Since 1989',
  heroImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=85',
  heroH1: "We Fix It Right. The First Time.",
  heroSub: "No upselling. No surprises on the bill. No taking your vehicle hostage. Just honest work from people who know what they're doing.",
  heroCTA1: 'Schedule Service',
  heroCTA2: 'See Our Services',
  heroTrust: ['Free estimates', 'Parts and labor guaranteed', 'Loaner vehicles available', 'Flat-rate pricing'],
  servicesLabel: 'What We Service',
  servicesTitle: 'Full Shop. Real Technicians.',
  services: [
    { number: '01', title: 'Oil & Fluid Service', desc: "Oil changes, transmission fluid, coolant — done right and on time. No overselling." },
    { number: '02', title: 'Brakes & Suspension', desc: "If it stops, steers, or absorbs bumps, we service it. Montana roads are not kind to suspensions." },
    { number: '03', title: 'Engine Diagnostics', desc: "Check engine light? We pull the codes, explain what they mean in plain English, and tell you what actually needs fixing." },
    { number: '04', title: 'Tires & Wheels', desc: "Rotation, balancing, alignment, and installation. We stock the brands that work in mountain conditions." },
    { number: '05', title: 'Electrical Systems', desc: "Batteries, alternators, starters, wiring issues. Modern vehicles are computers. We know how to read them." },
    { number: '06', title: 'Pre-Purchase Inspections', desc: "Buying a used vehicle? $75 inspection that could save you thousands. Worth every penny." },
  ],
  whyLabel: 'Why People Come Back',
  whyTitle: 'No Games. No Surprises.',
  whyItems: [
    { icon: '📋', title: 'Flat-Rate Quotes', desc: "We give you a price before we start. That's the price you pay." },
    { icon: '🔧', title: 'ASE Certified Techs', desc: "Every technician in our shop holds ASE certification. Not just one of them. All of them." },
    { icon: '🚗', title: 'We Keep Records', desc: "We document everything. You'll always know what was done and when — even if it's been years." },
    { icon: '📞', title: 'We Call Before We Act', desc: "Find something unexpected mid-job? We call you. We don't just fix it and add it to the bill." },
  ],
  aboutLabel: 'Our Shop',
  aboutTitle: "35 Years. Same Location. Same Philosophy.",
  aboutP1: "Opened this shop in 1989 with two lifts and a parking lot. We've grown since then — not because we pushed hard sales, but because word travels fast in a small valley.",
  aboutP2: "Our tech team averages 14 years at this shop specifically. That's not a number we throw around lightly. It means when you bring your truck in, the person working on it has probably seen the same issue a dozen times.",
  aboutImage: 'https://images.unsplash.com/photo-1620315808304-66597517ec51?w=900&q=80',
  reviews: [
    { stars: 5, text: '"Took my truck here after another shop told me I needed $3,200 in repairs. Glacier Auto found one sensor that was causing the cascade failure. $180."', name: 'Mike R.', vehicle: 'F-250, Kalispell', initial: 'M' },
    { stars: 5, text: '"Called at 8am with a check engine light. They got me in by 10, diagnosed by noon, fixed by 3. That\'s just impressive."', name: 'Danielle P.', vehicle: 'Subaru Outback', initial: 'D' },
    { stars: 5, text: '"They explained everything on the inspection report in plain terms. No pressure. No scare tactics. I got exactly what I agreed to."', name: 'Sam T.', vehicle: 'Pre-purchase inspection', initial: 'S' },
  ],
  ctaTitle: "Ready to Schedule?",
  ctaBand: "Bring It In. We'll Tell You Exactly What It Needs.",
  phone: '(406) 555-0600',
  email: 'service@glacierauto.com',
  address: '500 Industrial Way, Kalispell, MT 59901',
  footerTagline: 'ASE certified auto repair in Kalispell, MT. Family owned since 1989.',
  year: new Date().getFullYear(),
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav-logo">{SITE.logoName} <span>{SITE.logoAccent}</span></div>
        <ul className="nav-links">
          {SITE.navLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          <li><a href="#contact" className="nav-cta">Schedule Service</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <img src={SITE.heroImage} alt="Auto shop" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">{SITE.heroBadge}</div>
          <h1>{SITE.heroH1}</h1>
          <p className="hero-sub">{SITE.heroSub}</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">{SITE.heroCTA1}</a>
            <a href="#services" className="btn btn-outline">{SITE.heroCTA2}</a>
          </div>
          <div className="hero-trust-bar">
            {SITE.heroTrust.map(t => <div key={t} className="hero-trust-item">{t}</div>)}
          </div>
        </div>
      </section>

      <section className="section section--light" id="services">
        <div className="container">
          <span className="eyebrow">{SITE.servicesLabel}</span>
          <h2 style={{ marginBottom: '12px' }}>{SITE.servicesTitle}</h2>
          <p style={{ color: 'var(--color-neutral-mid)', marginBottom: '0' }}>No sublet work. No guessing. Everything done in-house by certified technicians.</p>
          <div className="services-grid">
            {SITE.services.map(s => (
              <div key={s.title} className="service-item">
                <div className="service-number">{s.number}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" id="why">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(230,51,41,0.8)' }}>{SITE.whyLabel}</span>
          <h2 style={{ color: '#fff', marginBottom: '0' }}>{SITE.whyTitle}</h2>
          <div className="why-grid">
            {SITE.whyItems.map(w => (
              <div key={w.title} className="why-item">
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-split">
          <div className="about-image">
            <img src={SITE.aboutImage} alt="Our shop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="about-content">
            <div className="about-inner">
              <span className="eyebrow">{SITE.aboutLabel}</span>
              <h2>{SITE.aboutTitle}</h2>
              <p>{SITE.aboutP1}</p>
              <p>{SITE.aboutP2}</p>
              <a href="#contact" className="btn btn-primary" style={{ marginTop: '20px' }}>Schedule Service →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light" id="reviews">
        <div className="container">
          <span className="eyebrow">Customer Stories</span>
          <h2 style={{ marginBottom: 0 }}>Don't Take Our Word For It.</h2>
          <div className="reviews-grid">
            {SITE.reviews.map(r => (
              <div key={r.name} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-name">{r.name}</div>
                <div className="review-vehicle">{r.vehicle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band" id="contact">
        <div className="cta-band-inner">
          <h2>{SITE.ctaBand}</h2>
          <a href={`tel:${SITE.phone}`} className="btn">{SITE.phone} — Call to Schedule</a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">{SITE.logoName} <span>{SITE.logoAccent}</span></div>
            <p className="footer-tagline">{SITE.footerTagline}</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>{SITE.services.slice(0, 4).map(s => <li key={s.title}><a href="#services">{s.title}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>{SITE.address}</li>
              <li><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
              <li>Mon–Fri: 7:30am – 5:30pm</li>
              <li>Sat: 8am – 2pm</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {SITE.year} {SITE.logoName} {SITE.logoAccent}. {SITE.address}</span>
          <span><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></span>
        </div>
      </footer>
    </>
  );
}
