'use client';
import { useEffect, useState } from 'react';

const SITE = {
  logoName: 'Ember & ',
  logoAccent: 'Linen',
  navLinks: [{ label: 'Shop', href: '#categories' }, { label: 'Our Story', href: '#about' }, { label: 'Visit', href: '#visit' }],
  heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=85',
  heroH1: 'The Things That Last.',
  heroSub: "We carry goods made to be kept. Montana makers. Small-batch. The kind of things you'll still have in twenty years.",
  heroCTA1: 'Shop Now',
  heroCTA2: 'Our Story',
  categoriesLabel: 'What We Carry',
  categories: [
    { image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80', title: 'Home & Living', subtitle: 'Ceramics, textiles, handmade goods' },
    { image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80', title: 'Clothing & Accessories', subtitle: 'Thoughtfully made, seasonally curated' },
    { image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=700&q=80', title: 'Art & Prints', subtitle: 'Local Montana artists' },
  ],
  aboutLabel: 'Why This Shop Exists',
  aboutTitle: "Montana Has Good Things Made By Good People. We Find Them.",
  aboutP1: "Started this shop in 2016 because the things I loved — the pottery, the leather goods, the hand-dyed textiles — were being made by people in this valley with nowhere to sell them.",
  aboutP2: "Everything in here has a maker with a name. We can tell you who made it, where, and usually why. If we can't, it's not in the shop.",
  aboutImage: 'https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=900&q=80',
  brandValues: ['Made in Montana', 'Small Batch', 'Maker-Direct', 'No Fast Fashion'],
  reviews: [
    { stars: 5, text: '"Found a ceramic mug from a Whitefish potter that I\'ve used every single morning for three years. That\'s what this shop does — it finds you the things you keep."', name: 'Claire B.', suburb: 'Missoula, MT', initial: 'C' },
    { stars: 5, text: '"Perfect place for gifts that feel personal without being generic. I\'ve stopped shopping online for anything I want to feel good about giving."', name: 'Tom K.', suburb: 'Whitefish, MT', initial: 'T' },
    { stars: 5, text: '"The woman who owns this place knows the story behind every single item. You can feel it."', name: 'Sandra M.', suburb: 'Kalispell, MT', initial: 'S' },
  ],
  visitLabel: 'Come In',
  hours: [
    { days: 'Monday – Saturday', time: '10:00am – 6:00pm' },
    { days: 'Sunday', time: '11:00am – 4:00pm' },
  ],
  ctaTitle: "Come Wander.",
  ctaSub: "We're open seven days a week. No online store — some things you just have to see in person.",
  ctaBtn1: 'Get Directions',
  ctaBtn2: 'Follow on Instagram',
  phone: '(406) 555-0500',
  email: 'hello@emberandlinen.com',
  address: '222 Central Ave, Whitefish, MT 59937',
  footerTagline: 'Goods from Montana makers. Downtown Whitefish.',
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
        <div className="nav-logo"><em>{SITE.logoName}</em><span>{SITE.logoAccent}</span></div>
        <ul className="nav-links">
          {SITE.navLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          <li><a href="#visit" className="nav-shop">Visit Us</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <img src={SITE.heroImage} alt="Montana boutique goods" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">Downtown Whitefish, Montana</span>
          <h1>{SITE.heroH1}</h1>
          <p className="hero-sub">{SITE.heroSub}</p>
          <div className="hero-ctas">
            <a href="#categories" className="btn btn-primary">{SITE.heroCTA1}</a>
            <a href="#about" className="btn btn-ghost">{SITE.heroCTA2}</a>
          </div>
        </div>
      </section>

      <section className="section section--linen" id="categories">
        <div className="container">
          <span className="eyebrow">{SITE.categoriesLabel}</span>
          <h2 style={{ marginBottom: '48px' }}>Browse the Shop</h2>
          <div className="categories-grid">
            {SITE.categories.map(cat => (
              <div key={cat.title} className="category-card">
                <img src={cat.image} alt={cat.title} />
                <div className="category-overlay" />
                <div className="category-label">
                  <h3>{cat.title}</h3>
                  <a href="#categories">{cat.subtitle} →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="brand-story">
            <div className="brand-image">
              <img src={SITE.aboutImage} alt="Our story" />
            </div>
            <div className="brand-text">
              <span className="eyebrow">{SITE.aboutLabel}</span>
              <h2>{SITE.aboutTitle}</h2>
              <p>{SITE.aboutP1}</p>
              <p>{SITE.aboutP2}</p>
              <div className="brand-values">
                {SITE.brandValues.map(v => <div key={v} className="brand-value-item">{v}</div>)}
              </div>
              <a href="#visit" className="btn btn-outline">Visit the Shop →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--linen" id="reviews">
        <div className="container">
          <span className="eyebrow">What People Say</span>
          <h2 style={{ marginBottom: 0 }}>The Things They Remember</h2>
          <div className="reviews-grid">
            {SITE.reviews.map(r => (
              <div key={r.name} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-name">{r.name}</div>
                <div className="review-suburb">{r.suburb}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="visit">
        <div className="container">
          <span className="eyebrow">{SITE.visitLabel}</span>
          <h2 style={{ marginBottom: '48px' }}>Find Us</h2>
          <div className="hours-location">
            <div className="hours-block">
              <h3>Hours</h3>
              {SITE.hours.map(h => (
                <div key={h.days} className="hours-row">
                  <span>{h.days}</span><strong>{h.time}</strong>
                </div>
              ))}
            </div>
            <div>
              <h3>Location</h3>
              <p style={{ margin: '20px 0 8px', color: 'var(--color-neutral-mid)' }}>{SITE.address}</p>
              <a href="#" className="btn btn-outline" style={{ marginTop: '12px' }}>Get Directions →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'rgba(250,248,244,0.6)' }}>Open 7 Days</span>
          <h2>{SITE.ctaTitle}</h2>
          <p>{SITE.ctaSub}</p>
          <div className="btn-group">
            <a href="#" className="btn btn-accent">{SITE.ctaBtn1}</a>
            <a href="#" className="btn btn-ghost">{SITE.ctaBtn2}</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo"><em>{SITE.logoName}</em><span>{SITE.logoAccent}</span></div>
            <p className="footer-tagline">{SITE.footerTagline}</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>{SITE.categories.map(c => <li key={c.title}><a href="#categories">{c.title}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <ul>
              <li>{SITE.address}</li>
              <li><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
              <li>Mon–Sat: 10–6pm</li>
              <li>Sun: 11–4pm</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {SITE.year} {SITE.logoName}{SITE.logoAccent}. Downtown Whitefish, MT</span>
        </div>
      </footer>
    </>
  );
}
