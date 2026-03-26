import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dentist in Kalispell, MT | Summit Dental Group | Dr. Mark Vanzant DMD',
  description:
    'Gentle, expert dentistry for the whole Flathead Valley. Veteran-owned practice by Dr. Mark Vanzant DMD. Family, cosmetic & emergency care. TRICARE accepted. ⭐ 4.8/5 Google rating.',
};

const services = [
  {
    icon: '/icons/dental-implant.png',
    label: 'Replace Missing Teeth',
    desc: 'Permanent implants that look, feel, and function like natural teeth — designed to last a lifetime.',
    href: '/services/dental-implants',
  },
  {
    icon: '/icons/emergency-dentistry.png',
    label: 'Dental Emergency? We\'re Here',
    desc: 'Same-day appointments for toothaches, broken teeth, and trauma. Don\'t wait — call us now.',
    href: '/services/emergency-dentistry',
  },
  {
    icon: '/icons/cosmetic-dentistry.png',
    label: 'Transform Your Smile',
    desc: 'Veneers, Invisalign, and cosmetic treatments that give you the confidence to show your best self.',
    href: '/services/cosmetic-dentistry',
  },
  {
    icon: '/icons/sedation-comfort.png',
    label: 'Nervous About Dentistry?',
    desc: 'Nitrous oxide and oral sedation options in an office designed to keep you calm and comfortable.',
    href: '/services/sedation-dentistry',
  },
  {
    icon: '/icons/teeth-whitening.png',
    label: 'Whiter Smile, Fast',
    desc: 'Professional whitening that delivers results no over-the-counter product can match.',
    href: '/services/teeth-whitening',
  },
  {
    icon: '/icons/crowns-bridges.png',
    label: 'Fix a Broken Tooth',
    desc: 'Custom crowns and bridges that restore strength, function, and your natural smile line.',
    href: '/services/crowns-bridges',
  },
  {
    icon: '/icons/family-pediatric.png',
    label: 'Care for the Whole Family',
    desc: 'From first teeth to lifetime smiles — gentle, thorough care for patients of every age.',
    href: '/services',
  },
  {
    icon: '/icons/veteran-military.png',
    label: 'Veterans & Military Families',
    desc: 'Veteran-owned. TRICARE & ADDP accepted. Dr. Vanzant understands military life firsthand.',
    href: '/veterans-military',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    initials: 'SM',
    text: 'I have severe dental anxiety and hadn\'t been to a dentist in years. Dr. Vanzant and his team made me feel completely at ease. They checked in with me constantly and never rushed. It\'s the first time I\'ve left a dental office without feeling traumatized.',
    tag: 'Dental Anxiety',
  },
  {
    name: 'Jim B.',
    initials: 'JB',
    text: 'As a veteran, I\'ve had trouble navigating TRICARE at other offices. Summit Dental handled everything for me — explained the coverage, filed the paperwork, and made it easy. Dr. Vanzant is also Guard, so he just gets it.',
    tag: 'Military Veteran',
  },
  {
    name: 'Melissa K.',
    initials: 'MK',
    text: 'We moved to Kalispell two years ago and had a hard time finding a dentist we trusted. Now our whole family comes here. The office is beautiful, everyone is so friendly, and the care is genuinely excellent.',
    tag: 'Family Dentistry',
  },
  {
    name: 'Tyler R.',
    initials: 'TR',
    text: 'Called on a Saturday with a broken tooth — someone actually answered. I was in the chair first thing Tuesday morning. They fixed it same day. Absolutely above and beyond.',
    tag: 'Emergency Care',
  },
  {
    name: 'Amanda L.',
    initials: 'AL',
    text: 'I got veneers done here after years of being self-conscious about my smile. The result is incredible. I honestly tear up looking at photos now. Dr. Vanzant is an artist.',
    tag: 'Cosmetic Results',
  },
  {
    name: 'Bob & Carol F.',
    initials: 'BC',
    text: 'Summit Dental has the whole package — cutting edge technology, a stunning office, and a team that genuinely cares. We drove 45 minutes from Bigfork and it\'s absolutely worth it.',
    tag: 'Flathead Valley',
  },
];

const valueProps = [
  {
    icon: '🌟',
    title: 'Gentle, Patient-First Care',
    desc: 'Your comfort is our priority from the moment you walk in.',
  },
  {
    icon: '🎖️',
    title: 'Veteran-Owned Practice',
    desc: 'Precision and dedication forged through military service.',
  },
  {
    icon: '🦷',
    title: 'Modern Technology',
    desc: 'Digital impressions, 3D imaging, and advanced techniques.',
  },
  {
    icon: '🏔️',
    title: 'Proudly Montana',
    desc: 'Rooted in Kalispell. Serving the whole Flathead Valley.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" aria-label="Welcome to Summit Dental Group">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge" aria-label="Veteran-owned business">
              <span aria-hidden="true">🎖️</span>
              Veteran-Owned · USAF · Montana Army National Guard
            </div>
            <h1>
              Gentle, Expert Dentistry<br />
              for the <span>Whole Flathead Valley</span>
            </h1>
            <p className="lead">
              Summit Dental Group serves Kalispell, Whitefish, Columbia Falls, and
              beyond with compassionate, cutting-edge dental care. One team. Every
              age. Every need.
            </p>
            <div className="hero-actions">
              <Link href="/contact#appointment" className="btn btn-primary btn-lg">
                📅 Book Your Appointment
              </Link>
              <a href="tel:+14067524545" className="btn btn-white btn-lg">
                📞 (406) 752-4545
              </a>
            </div>
            <div className="hero-trust" role="list" aria-label="Trust signals">
              <div className="hero-trust-badge" role="listitem">
                <span className="icon" aria-hidden="true">⭐</span>
                4.8 / 5 — 469 Google Reviews
              </div>
              <div className="hero-trust-badge" role="listitem">
                <span className="icon" aria-hidden="true">✅</span>
                TRICARE &amp; ADDP Accepted
              </div>
              <div className="hero-trust-badge" role="listitem">
                <span className="icon" aria-hidden="true">🚨</span>
                Same-Day Emergency Care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar" role="complementary" aria-label="Key practice highlights">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <span aria-hidden="true">⭐⭐⭐⭐⭐</span>
            <strong>4.8/5</strong>
            <span>on Google (469 reviews)</span>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <span aria-hidden="true">🎖️</span>
            <strong>Veteran-Owned</strong>
            <span>Dr. Vanzant, USAF (Ret.)</span>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <span aria-hidden="true">🪖</span>
            <strong>TRICARE &amp; ADDP</strong>
            <span>Accepted here</span>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <span aria-hidden="true">🦷</span>
            <strong>15+ Services</strong>
            <span>Under one roof</span>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <span aria-hidden="true">🚨</span>
            <strong>Same-Day</strong>
            <span>Emergency appointments</span>
          </div>
        </div>
      </div>

      {/* ── VALUE PROPS ── */}
      <section className="section section-cream" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">Why Summit Dental</span>
            <h2 id="values-heading">The difference you'll feel from day one</h2>
            <p>
              We're not a chain. We're your neighbors — and we treat every patient
              the way we'd want our own family treated.
            </p>
          </div>
          <div className="value-grid">
            {valueProps.map(v => (
              <div key={v.title} className="value-item">
                <div className="value-icon" aria-hidden="true">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section section-white" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">Our Services</span>
            <h2 id="services-heading">Find the care you need</h2>
            <p>
              General, cosmetic, restorative, and emergency dentistry — all in one
              welcoming Kalispell office.
            </p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.href} className="service-card">
                <div className="service-card-icon" aria-hidden="true">
                  <Image src={s.icon} alt="" width={80} height={80} />
                </div>
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
                <Link href={s.href}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar" aria-label="Practice statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number" aria-label="4.8 out of 5 star rating">4.8★</span>
              <span className="stat-label">Google Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" aria-label="469 Google reviews">469</span>
              <span className="stat-label">Verified Reviews</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" aria-label="15 plus services">15+</span>
              <span className="stat-label">Services Offered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" aria-label="3 military deployments">3</span>
              <span className="stat-label">Combat Deployments</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET THE DOCTOR ── */}
      <section className="section section-cream" aria-labelledby="doctor-heading">
        <div className="container">
          <div className="doctor-grid">
            <div className="doctor-photo" aria-hidden="true">
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1B3A5C 0%, #2C5282 60%, #2AAFCA 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '1rem',
                  minHeight: '480px',
                }}
              >
                <span style={{ fontSize: '6rem' }}>🦷</span>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textAlign: 'center', padding: '0 2rem' }}>
                  Dr. Vanzant photo<br />coming soon
                </p>
              </div>
              <div className="doctor-photo-badge">
                <span className="badge-icon" aria-hidden="true">🎖️</span>
                <div>
                  <div className="badge-text">USAF Veteran</div>
                  <div className="badge-sub">3 Combat Deployments</div>
                </div>
              </div>
            </div>

            <div className="doctor-content">
              <span className="overline">Meet Your Doctor</span>
              <h2 id="doctor-heading">Dr. Mark A. Vanzant, DMD</h2>
              <p className="doctor-title">
                Doctor of Medical Dentistry · U.S. Air Force Veteran · Montana Army National Guard
              </p>
              <p>
                Dr. Vanzant earned his DMD from the University of Florida before
                serving three combat deployments with the U.S. Air Force. Today he
                continues that commitment to service in the Montana Army National Guard
                — and brings the same precision and dedication to every patient he sees.
              </p>
              <p>
                Whether you haven't been to the dentist in two years or twenty, Dr.
                Vanzant meets you where you are. No lectures. No rush. Just honest,
                thorough care delivered by someone who chose Kalispell — and stays —
                because this is home.
              </p>

              <div className="doctor-credentials" role="list" aria-label="Dr. Vanzant's credentials">
                <div className="credential-item" role="listitem">Doctor of Medical Dentistry — University of Florida</div>
                <div className="credential-item" role="listitem">U.S. Air Force Veteran — 3 OIF/OEF Combat Deployments</div>
                <div className="credential-item" role="listitem">Active Montana Army National Guard</div>
                <div className="credential-item" role="listitem">General, Cosmetic, Restorative &amp; TMJ Dentistry</div>
                <div className="credential-item" role="listitem">Laser Dentistry &amp; Botox for Bruxism</div>
                <div className="credential-item" role="listitem">TRICARE / ADDP Network Provider</div>
              </div>

              <Link href="/about" className="btn btn-primary mt-4">
                Full Bio &amp; Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VETERAN CALLOUT ── */}
      <section className="section veteran-section" aria-labelledby="veteran-heading">
        <div className="container">
          <div className="veteran-content">
            <div className="veteran-text">
              <span className="overline" style={{ color: 'var(--teal)' }}>Veterans &amp; Military Families</span>
              <h2 id="veteran-heading" style={{ color: 'var(--white)' }}>
                Military insurance can be confusing.<br />
                We handle it for you.
              </h2>
              <p>
                Dr. Vanzant has served — three deployments, and counting in the
                Guard. He understands the complexity of military benefits, the
                challenge of dental readiness, and the trust it takes to choose a
                provider. Summit Dental Group accepts TRICARE and ADDP, and our
                front-office team will assist you with your ACN and paperwork.
              </p>
              <div className="veteran-badges">
                <span className="veteran-badge">🎖️ TRICARE TDP</span>
                <span className="veteran-badge">🪖 ADDP (Active Duty)</span>
                <span className="veteran-badge">⭐ United Concordia</span>
                <span className="veteran-badge">✅ Veteran-Owned Practice</span>
              </div>
              <Link href="/veterans-military" className="btn btn-white mt-3">
                Learn About Your Benefits →
              </Link>
            </div>

            <div className="tricare-plans" role="region" aria-label="Accepted military insurance plans">
              <h4>Accepted Military Plans</h4>
              <div className="tricare-plan-item">
                <span aria-hidden="true">🪖</span>
                <div>
                  <strong>TRICARE Active Duty Dental (ADDP)</strong>
                  For Active Duty, activated Guard &amp; Reserve
                </div>
              </div>
              <div className="tricare-plan-item">
                <span aria-hidden="true">👨‍👩‍👧</span>
                <div>
                  <strong>TRICARE Dental Program (TDP)</strong>
                  For dependents &amp; non-activated Guard/Reserve
                </div>
              </div>
              <div className="tricare-plan-item">
                <span aria-hidden="true">⭐</span>
                <div>
                  <strong>United Concordia (UCCI)</strong>
                  Administered carrier for TRICARE Dental
                </div>
              </div>
              <div className="tricare-plan-item">
                <span aria-hidden="true">📋</span>
                <div>
                  <strong>DD Form 2813 Readiness Exams</strong>
                  For Guard &amp; Reserve deployment requirements
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-off-white" aria-labelledby="reviews-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">Patient Reviews</span>
            <h2 id="reviews-heading">What Flathead Valley patients are saying</h2>
            <p>
              ⭐ 4.8 out of 5 from 469 verified Google reviews — hear it from the
              people who matter most.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <article key={t.name} className="testimonial-card">
                <div className="testimonial-stars" aria-label="5 star rating">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" aria-hidden="true">
                    {t.initials}
                  </div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-meta">{t.tag} · Verified Google Review</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/place/Summit+Dental+Group"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Read all reviews on Google (opens in new tab)"
            >
              Read All 469 Google Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* ── INSURANCE ── */}
      <section className="section section-white" aria-labelledby="insurance-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">Insurance &amp; Financing</span>
            <h2 id="insurance-heading">We work with most major insurance plans</h2>
            <p>
              Don't let cost stand between you and a healthy smile. We accept most
              major insurers, TRICARE, and offer flexible financing options.
            </p>
          </div>
          <div className="insurance-grid" role="list" aria-label="Accepted insurance plans">
            {[
              'TRICARE / ADDP',
              'Delta Dental',
              'Aetna',
              'MetLife',
              'Cigna',
              'United Concordia',
              'Guardian',
              'Humana',
              'Principal',
              'Sun Life',
              'CareCredit',
              'Most PPO Plans',
            ].map(plan => (
              <span
                key={plan}
                className={`insurance-badge${plan === 'TRICARE / ADDP' ? ' featured' : ''}`}
                role="listitem"
              >
                {plan}
              </span>
            ))}
          </div>
          <div className="text-center mt-6" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/new-patients#insurance" className="btn btn-secondary">
              View Full Insurance Info
            </Link>
            <Link href="/veterans-military" className="btn btn-navy">
              Military Insurance Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="contact-cta" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">Ready for a smile you&#39;re proud of?</h2>
          <p>
            Accepting new patients from Kalispell, Whitefish, Columbia Falls,
            Bigfork, and all across the Flathead Valley. Booking takes two minutes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact#appointment" className="btn btn-white btn-lg">
              📅 Request an Appointment
            </Link>
            <a href="tel:+14067524545" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)' }}>
              📞 Call (406) 752-4545
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
