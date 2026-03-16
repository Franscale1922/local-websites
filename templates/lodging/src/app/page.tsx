'use client';
import { useEffect, useState } from 'react';

const SITE = {
  logoName: 'Glacier',
  logoAccent: 'House',
  navLinks: [{ label: 'Rooms', href: '#rooms' }, { label: 'Amenities', href: '#amenities' }, { label: 'About', href: '#about' }],
  heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85',
  heroH1: 'The Flathead Valley, Right Outside Your Window.',
  heroSub: "15 rooms. 90 acres. No resort fees, no branded pillows, no nonsense. Just a place to actually be in Montana.",
  heroCTA1: 'Check Availability',
  heroCTA2: 'Explore Rooms',
  amenitiesLabel: 'The Property',
  amenities: [
    { icon: '🏔️', title: 'Glacier Access', desc: '22 miles to the West Glacier entrance' },
    { icon: '🎣', title: 'Fly Fishing', desc: 'Private access on the river — rods available' },
    { icon: '🌊', title: 'Flathead Lake', desc: '12 miles to the largest natural lake west of the Mississippi' },
    { icon: '🍳', title: 'Full Kitchen', desc: 'Suites include fully-equipped kitchens for extended stays' },
  ],
  roomsLabel: 'Where You\'ll Stay',
  roomsTitle: 'The Rooms',
  roomsSub: 'Each room is different. All of them are quiet.',
  rooms: [
    { image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80', title: 'Mountain Suite', badges: ['King Bed', 'Mountain View', 'Fireplace'], desc: 'Our largest room. Full kitchen, stone fireplace, private deck.', price: '$295', note: 'per night' },
    { image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700&q=80', title: 'River Room', badges: ['Queen Bed', 'River View', 'Kitchenette'], desc: 'Overlooks the river. You can hear it from bed.', price: '$195', note: 'per night' },
    { image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700&q=80', title: 'Meadow Cabin', badges: ['Two Bedrooms', 'Full Kitchen', 'Pet Friendly'], desc: 'Standalone cabin, sleeps 4. Best bet for extended stays.', price: '$345', note: 'per night' },
    { image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=700&q=80', title: 'Standard Room', badges: ['Queen Bed', 'Garden View'], desc: 'Clean, quiet, everything you need. Nothing you don\'t.', price: '$145', note: 'per night' },
  ],
  aboutLabel: 'Why We Built This',
  aboutTitle: "We Wanted a Place Like This to Exist. So We Built It.",
  aboutP1: "Opened in 2018 after spending years frustrated with the options in this valley. Either chain hotels with no sense of place, or overpriced resorts that felt like airports.",
  aboutP2: "We wanted something that felt like Montana. Small enough to feel personal. Well-appointed enough to feel like a treat. Close enough to everything — Glacier, the lake, the mountains — that you're never more than 20 minutes from something worth seeing.",
  aboutImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=80',
  reviews: [
    { stars: 5, text: '"We stayed in four different places during our Montana trip. This was the only one we didn\'t want to leave. The silence alone was worth it."', name: 'Tom & Karen V.', origin: 'Minneapolis, MN', initial: 'T' },
    { stars: 5, text: '"Fly fished from the property for three mornings straight. Caught more than a dozen. The owners know the river and were happy to share it."', name: 'Pete L.', origin: 'Denver, CO', initial: 'P' },
    { stars: 5, text: '"Drove up for a week to work remotely. Fast WiFi, comfortable desk, absolute quiet. Stayed an extra two nights. Will be back."', name: 'Nadia K.', origin: 'Seattle, WA', initial: 'N' },
  ],
  ctaTitle: "Summer Fills Fast. Winter Too.",
  ctaSub: "We only have 15 rooms, and we don't overbook them. Check availability early — especially for July, August, and school breaks.",
  ctaBtn1: 'Check Availability',
  ctaBtn2: 'Call Us',
  phone: '(406) 555-0400',
  email: 'stay@glacierhouse.com',
  address: '1000 Glacier Rd, West Glacier, MT 59936',
  footerTagline: 'Boutique lodging near Glacier National Park. 15 rooms. Fly fishing access. No resort fees.',
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
          <li><a href="#contact" className="nav-book">Book Now</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <img src={SITE.heroImage} alt="Montana mountains" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">West Glacier, Montana</span>
          <h1>{SITE.heroH1}</h1>
          <p className="hero-sub">{SITE.heroSub}</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">{SITE.heroCTA1}</a>
            <a href="#rooms" className="btn btn-ghost">{SITE.heroCTA2}</a>
          </div>
        </div>
      </section>

      <section className="section section--stone" id="amenities">
        <div className="container">
          <span className="eyebrow">{SITE.amenitiesLabel}</span>
          <h2 style={{ marginBottom: '16px' }}>Everything Nearby. Nothing Crowded.</h2>
          <div className="amenities-grid">
            {SITE.amenities.map(a => (
              <div key={a.title} className="amenity-item">
                <div className="amenity-icon">{a.icon}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="rooms">
        <div className="container">
          <span className="eyebrow">{SITE.roomsLabel}</span>
          <h2 style={{ marginBottom: '12px' }}>{SITE.roomsTitle}</h2>
          <p style={{ color: 'var(--color-neutral-mid)', marginBottom: '0' }}>{SITE.roomsSub}</p>
          <div className="rooms-grid">
            {SITE.rooms.map(room => (
              <div key={room.title} className="room-card">
                <div className="room-image">
                  <img src={room.image} alt={room.title} />
                </div>
                <div className="room-body">
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    {room.badges.map(b => <span key={b} style={{ padding: '4px 12px', background: 'var(--color-stone)', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-neutral-mid)' }}>{b}</span>)}
                  </div>
                  <h3>{room.title}</h3>
                  <p>{room.desc}</p>
                  <div className="room-footer">
                    <div>
                      <div className="room-price-amount">{room.price}</div>
                      <div className="room-price-note">{room.note}</div>
                    </div>
                    <a href="#contact" className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '10px 20px' }}>Book →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--stone" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={SITE.aboutImage} alt="The property" />
            </div>
            <div className="about-text">
              <span className="eyebrow">{SITE.aboutLabel}</span>
              <h2>{SITE.aboutTitle}</h2>
              <p>{SITE.aboutP1}</p>
              <p>{SITE.aboutP2}</p>
              <a href="#contact" className="btn btn-outline-dark" style={{ marginTop: '24px' }}>Plan Your Stay →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="container">
          <span className="eyebrow">Guest Stories</span>
          <h2 style={{ marginBottom: 0 }}>From People Who Stayed</h2>
          <div className="reviews-grid">
            {SITE.reviews.map(r => (
              <div key={r.name} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author-name">{r.name}</div>
                <div className="review-author-origin">{r.origin}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" id="contact">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Book Your Stay</span>
          <h2 style={{ color: 'var(--color-stone)', maxWidth: '20ch', margin: '0 auto 14px' }}>{SITE.ctaTitle}</h2>
          <p style={{ color: 'rgba(244,239,232,0.72)', maxWidth: '44ch', margin: '0 auto 36px' }}>{SITE.ctaSub}</p>
          <div className="btn-group" style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a href={`tel:${SITE.phone}`} className="btn btn-primary">{SITE.ctaBtn1}</a>
            <a href={`tel:${SITE.phone}`} className="btn btn-ghost">{SITE.ctaBtn2}</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">{SITE.logoName} <span>{SITE.logoAccent}</span></div>
            <p className="footer-tagline">{SITE.footerTagline}</p>
          </div>
          <div className="footer-col">
            <h4>The Property</h4>
            <ul>{SITE.amenities.map(a => <li key={a.title}><a href="#amenities">{a.title}</a></li>)}</ul>
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
          <span>© {SITE.year} {SITE.logoName} {SITE.logoAccent}. {SITE.address}</span>
          <span><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></span>
        </div>
      </footer>
    </>
  );
}
