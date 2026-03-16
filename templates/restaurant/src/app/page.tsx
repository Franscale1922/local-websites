'use client';
import { useEffect, useState } from 'react';

const SITE = {
  logoName: 'The',
  logoAccent: 'Sycamore',
  navLinks: [{ label: 'Menu', href: '#menu' }, { label: 'About', href: '#about' }, { label: 'Reviews', href: '#reviews' }],
  heroEyebrow: 'Columbia Falls, Montana',
  heroH1: 'Dinner Worth Coming Home For.',
  heroSub: "Real food, made right. We're not reinventing anything — we're just doing it better than most.",
  heroCTA1: 'Reserve a Table',
  heroCTA2: 'View Menu',
  heroImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85',
  heroHoursTitle: 'Hours',
  heroHours: [{ days: 'Tue – Fri', time: '4:00 – 10:00pm' }, { days: 'Sat – Sun', time: '11:00am – 10:00pm' }, { days: 'Mondays', time: 'Closed' }],
  valueProps: [
    { icon: '🌿', title: 'Sourced Locally', desc: 'Our proteins and produce come from ranches and farms within 60 miles. We know who grew it.' },
    { icon: '🍷', title: 'Montana Wine List', desc: "We curate for the region, not the trend. You'll find bottles here you won't find anywhere else in the valley." },
    { icon: '🔥', title: 'Made From Scratch', desc: 'Everything that goes on the plate was made here. No shortcuts, no shortcuts, no shortcuts.' },
  ],
  menuLabel: 'The Menu',
  menuTitle: "What We're Cooking",
  menuItems: [
    { name: 'Elk Medallion', desc: 'Montana elk, roasted bone marrow, seasonal mushrooms', price: '$38' },
    { name: 'Pan Seared Trout', desc: 'Local rainbow trout, brown butter, herb salad', price: '$32' },
    { name: 'Wagyu Flat Iron', desc: '8oz Montana wagyu, twice-cooked potatoes, chimichurri', price: '$52' },
    { name: 'Wild Mushroom Risotto', desc: 'Foraged mushrooms, aged parmesan, truffle oil', price: '$28' },
    { name: 'Bison Shortrib', desc: '48-hour braised bison, root vegetables, red wine reduction', price: '$44' },
    { name: 'House Charcuterie', desc: 'Rotating selection of house-cured meats, local cheeses', price: '$24' },
  ],
  aboutLabel: 'Our Story',
  aboutTitle: "We Opened a Restaurant. Not a Concept.",
  aboutP1: "We've been cooking in this valley for fifteen years. We know what people here actually eat. We know what they're tired of. We built this menu around that.",
  aboutP2: "Our kitchen is small. Our team is tight. And every person who walks in the door gets treated like they drove an hour to be here — because a lot of them did.",
  aboutImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80',
  aboutCTA: 'Our Philosophy',
  reviews: [
    { stars: 5, text: '"Best meal I\'ve had in Montana. Period. Everything tasted like someone gave a damn about every single thing on the plate."', name: 'Sarah L.', date: 'October 2024', initial: 'S' },
    { stars: 5, text: '"Drove an hour from Missoula on a recommendation. Completely worth it. The elk was extraordinary."', name: 'James P.', date: 'September 2024', initial: 'J' },
    { stars: 5, text: '"The wine list alone is a reason to come. They actually know what they\'re talking about and won\'t upsell you."', name: 'Miriam K.', date: 'August 2024', initial: 'M' },
  ],
  ctaTitle: "Tables Go Fast on Weekends.",
  ctaSub: 'We keep the dining room small on purpose. Reserve early — especially Friday and Saturday.',
  ctaBtn1: 'Reserve a Table',
  ctaBtn2: 'Call Us',
  phone: '(406) 555-0200',
  email: 'hello@thesycamore.com',
  address: '456 Main Ave, Columbia Falls, MT 59912',
  footerTagline: 'Seasonal Montana dining on Main Avenue. Open Tuesday through Sunday.',
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
        <div className="nav-logo"><em>{SITE.logoName}</em> <span>{SITE.logoAccent}</span></div>
        <ul className="nav-links">
          {SITE.navLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          <li><a href="#contact" className="nav-reserve">Reserve</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <img src={SITE.heroImage} alt="Restaurant dining" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">{SITE.heroEyebrow}</span>
          <h1>{SITE.heroH1}</h1>
          <p className="hero-sub">{SITE.heroSub}</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">{SITE.heroCTA1}</a>
            <a href="#menu" className="btn btn-ghost">{SITE.heroCTA2}</a>
          </div>
        </div>
        <div className="hero-hours">
          <div className="hero-hours-title">{SITE.heroHoursTitle}</div>
          {SITE.heroHours.map(h => (
            <div key={h.days} className="hero-hours-row"><strong>{h.days}</strong> &nbsp; {h.time}</div>
          ))}
        </div>
      </section>

      <section>
        <div className="value-strip">
          {SITE.valueProps.map(vp => (
            <div key={vp.title} className="value-item">
              <div className="value-item-icon">{vp.icon}</div>
              <h3>{vp.title}</h3>
              <p>{vp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="menu">
        <div className="container">
          <span className="eyebrow">{SITE.menuLabel}</span>
          <h2 style={{ marginBottom: '48px' }}>{SITE.menuTitle}</h2>
          <div className="menu-grid">
            {SITE.menuItems.map(item => (
              <div key={item.name} className="menu-item">
                <div className="menu-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="menu-item-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="about">
        <div className="about-split">
          <div className="about-image">
            <img src={SITE.aboutImage} alt="Our kitchen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="about-content">
            <div className="about-inner">
              <span className="eyebrow">{SITE.aboutLabel}</span>
              <h2>{SITE.aboutTitle}</h2>
              <p>{SITE.aboutP1}</p>
              <p>{SITE.aboutP2}</p>
              <a href="#contact" className="btn btn-outline" style={{ marginTop: '20px' }}>{SITE.aboutCTA} →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="container">
          <span className="eyebrow">What People Say</span>
          <h2 style={{ marginBottom: 0 }}>Don't Take Our Word For It.</h2>
          <div className="reviews-grid">
            {SITE.reviews.map(r => (
              <div key={r.name} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author-name">{r.name}</div>
                <div className="review-author-date">{r.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-divider" />
          <h2>{SITE.ctaTitle}</h2>
          <p>{SITE.ctaSub}</p>
          <div className="btn-group">
            <a href={`tel:${SITE.phone}`} className="btn btn-primary">{SITE.ctaBtn1}</a>
            <a href={`tel:${SITE.phone}`} className="btn btn-ghost">{SITE.ctaBtn2}</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo"><em>{SITE.logoName}</em> <span>{SITE.logoAccent}</span></div>
            <p className="footer-tagline">{SITE.footerTagline}</p>
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <ul>
              <li>{SITE.address}</li>
              <li><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {SITE.navLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
              <li><a href="#contact">Reserve</a></li>
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
