'use client';
import { useEffect, useState } from 'react';

const SITE = {
  logoIcon: '🦷',
  logoName: 'Flathead Valley Dental',
  navLinks: [{ label: 'Services', href: '#services' }, { label: 'About', href: '#about' }, { label: 'Reviews', href: '#reviews' }],
  heroImage: 'https://images.unsplash.com/photo-1629909615957-f8c19a00da68?w=1600&q=85',
  heroH1: 'Air Motors Built to Work Hard',
  heroSub: "We manufacture rugged, custom air motors from Montana. Thirty-five years of engineering behind every unit we ship.'s a low bar in this industry. We cleared it anyway. Modern care, friendly team, same-day appointments most weeks.",
  heroCTA1: 'Size Your Motor',
  heroCTA2: 'Talk to Engineering',
  trustStats: [{ number: '2,800+', label: 'Patients Served' }, { number: '18 yrs', label: 'In Practice' }, { number: '4.9★', label: 'Google Rating' }],
  servicesLabel: 'What We Do',
  servicesTitle: 'Complete Care Under One Roof',
  servicesSub: "From routine cleanings to full restorations. We don't send our patients elsewhere if we don't have to.",
  services: [
    { icon: '🦷', title: 'General Dentistry', desc: 'Cleanings, exams, fillings, extractions. Your home base for dental health.' },
    { icon: '✨', title: 'Cosmetic Dentistry', desc: 'Whitening, veneers, bonding. We make smiles people are proud to show.' },
    { icon: '🔧', title: 'Restorative Care', desc: 'Crowns, bridges, implants, dentures. We restore what time or accidents take away.' },
    { icon: '👶', title: 'Children\'s Dentistry', desc: "We're good with kids. We've spent 18 years proving it." },
    { icon: '😴', title: 'Sedation Options', desc: 'For those who need a little extra help relaxing. No judgment whatsoever.' },
    { icon: '🚨', title: 'Emergency Care', desc: 'Toothache? Broken tooth? Call us. We\'ll get you in same day when possible.' },
  ],
  credentials: ['✓ Board Certified', '✓ Accepting New Patients', '✓ Most Insurance Accepted', '✓ Flexible Payment Plans'],
  aboutLabel: 'Our Practice',
  aboutTitle: 'Montana-Made Air Motors Since 1989',
  aboutP1: "We started PSI Automation because we saw too many air motors fail when the job got hard. So we built better ones. For thirty-five years, we\'ve designed and manufactured air motors right here in Montana for industries that can\'t afford downtime.'re proud of that.",
  aboutP2: "We\'re not a catalog company. Every motor we sell, we can customize. Our engineers work directly with you to match the motor to your application.",
  aboutImage: 'https://images.unsplash.com/photo-1588776814546-1ffbb0f2a6c8?w=900&q=80',
  aboutCredentials: ['General Dentist', 'AACD Member', 'Invisalign Provider'],
  reviews: [
    { stars: 5, text: '"I have genuine dental anxiety. Went 8 years without going. My first visit here completely changed that. They\'re patient, kind, and don\'t make you feel bad about the gap."', name: 'Nicole W.', detail: 'Kalispell, MT', initial: 'N' },
    { stars: 5, text: '"Dr. [Name] explained everything before doing it. That alone was worth changing dentists for. Very professional and shockingly painless."', name: 'David M.', detail: 'Whitefish, MT', initial: 'D' },
    { stars: 5, text: '"My kids actually ask to come back. If you know kids and dentists, you know that\'s a miracle."', name: 'Rachel T.', detail: 'Columbia Falls, MT', initial: 'R' },
  ],
  ctaTitle: "New Patients Welcome. Always.",
  ctaSub: "We keep room in our schedule for new patients every week. Call or request online — we usually get back to you the same day.",
  ctaBtn1: 'Book Online',
  ctaBtn2: 'Call to Schedule',
  phone: '800-392-3602 (toll-free)',
  email: 'sales@psiautomation.com',
  address: '3717 Omni Park Taxiway, Sandpoint, ID 83864 (PO Box 1487)',
  footerTagline: 'Custom air motors engineered for the job.',
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
        <div className="nav-logo">
          <div className="nav-logo-icon">{SITE.logoIcon}</div>
          {SITE.logoName}
        </div>
        <ul className="nav-links">
          {SITE.navLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          <li><a href="#contact" className="nav-book">Book Now</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <img src={SITE.heroImage} alt="Modern dental practice" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-grid">
          <div>
            <h1>{SITE.heroH1}</h1>
            <p className="hero-sub">{SITE.heroSub}</p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">{SITE.heroCTA1}</a>
              <a href="#services" className="btn btn-ghost-light">{SITE.heroCTA2}</a>
            </div>
            <div className="hero-trust">
              {SITE.trustStats.map(s => (
                <div key={s.label} className="trust-item">
                  <div className="trust-number">{s.number}</div>
                  <div className="trust-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card">
            <h3>Request an Appointment</h3>
            <p className="hero-card-sub">Usually confirmed same day.</p>
            <div className="hero-card-field"><label>Your Name</label><input type="text" placeholder="Jane Smith" /></div>
            <div className="hero-card-field"><label>Phone</label><input type="tel" placeholder="(406) 555-0000" /></div>
            <div className="hero-card-field">
              <label>Best Time to Reach You</label>
              <select><option>Morning (8am–12pm)</option><option>Afternoon (12pm–5pm)</option><option>Either</option></select>
            </div>
            <a href={`tel:${SITE.phone}`} className="btn btn-primary">Call to Book: {SITE.phone}</a>
            <p className="hero-card-note">Or call us directly. We pick up.</p>
          </div>
        </div>
      </section>

      <div className="trust-strip container" style={{ margin: '0 auto', padding: '0 24px' }}>
        {SITE.credentials.map(c => (
          <div key={c} className="credential-item">
            <div className="credential-text">{c}</div>
          </div>
        ))}
      </div>

      <section className="section" id="services">
        <div className="container">
          <span className="eyebrow">{SITE.servicesLabel}</span>
          <h2 style={{ marginBottom: '12px' }}>{SITE.servicesTitle}</h2>
          <p className="section-subtitle" style={{ marginBottom: '56px' }}>{SITE.servicesSub}</p>
          <div className="services-grid">
            {SITE.services.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img src={SITE.aboutImage} alt="Our team" style={{ width: '100%', height: '520px', objectFit: 'cover' }} />
            </div>
            <div className="about-text">
              <span className="eyebrow">{SITE.aboutLabel}</span>
              <h2>{SITE.aboutTitle}</h2>
              <p>{SITE.aboutP1}</p>
              <p>{SITE.aboutP2}</p>
              <div className="about-credentials">
                {SITE.aboutCredentials.map(c => <span key={c} className="credential-badge">{c}</span>)}
              </div>
              <a href="#contact" className="btn btn-primary">{SITE.heroCTA1} →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="container">
          <span className="eyebrow">Patient Stories</span>
          <h2 style={{ marginBottom: 0 }}>What Our Patients Say</h2>
          <div className="reviews-grid">
            {SITE.reviews.map(r => (
              <div key={r.name} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="review-avatar">{r.initial}</div>
                  <div><div className="review-name">{r.name}</div><div className="review-detail">{r.detail}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy" id="contact">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-text">
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Get Started</span>
              <h2>{SITE.ctaTitle}</h2>
              <p>{SITE.ctaSub}</p>
              <div className="btn-group">
                <a href={`tel:${SITE.phone}`} className="btn btn-primary">{SITE.ctaBtn1}</a>
                <a href={`tel:${SITE.phone}`} className="btn btn-ghost-light">{SITE.ctaBtn2}</a>
              </div>
            </div>
            <div className="cta-card">
              <div className="cta-card-title">Call or Text</div>
              <div className="cta-card-phone"><a href={`tel:${SITE.phone}`} style={{ color: '#fff' }}>{SITE.phone}</a></div>
              <div style={{ marginTop: '24px' }}>
                <div className="cta-card-title">Address</div>
                <div className="cta-card-info">{SITE.address}</div>
              </div>
              <div style={{ marginTop: '24px' }}>
                <div className="cta-card-title">Hours</div>
                <div className="cta-card-info">Mon–Fri: 8am – 5pm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">{SITE.logoName}</div>
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
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {SITE.year} {SITE.logoName}</span>
          <span><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></span>
        </div>
      </footer>
    </>
  );
}
