import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'About Dr. Mark Vanzant, DMD: Veteran-Owned Dental Practice in Kalispell, MT',
  description: 'Meet Dr. Mark Vanzant, DMD: USAF veteran, three combat deployments, and founder of Summit Dental Group in Kalispell, MT. 4.8 stars, 469 Google reviews.',
};

export default function AboutPage() {
  return (
    <>
      <SiteNav activePath="/about" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: '#e8a96a', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: '#e8a96a', display: 'block' }} />
            About Us
          </span>
          <h1>Serving Montana With the Values We Learned in Service</h1>
          <p>Veteran-owned, community-focused, and committed to the kind of care you&apos;d want for your own family.</p>
        </div>

        {/* Dr. Vanzant Bio */}
        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div className="about-img-wrap" style={{ position: 'relative' }}>
                {/* Real Dr. Vanzant headshot */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/photo-dr-headshot-formal.jpg"
                  alt="Dr. Mark A. Vanzant, DMD, Owner of Summit Dental Group Kalispell MT"
                  style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block', objectFit: 'cover' }}
                />
                <div className="about-badge">
                  <div className="about-badge-rating">4.8</div>
                  <div className="about-badge-stars">★★★★★</div>
                  <div className="about-badge-count">469 Google Reviews</div>
                </div>
              </div>
              <div className="about-text">
                <span className="eyebrow">Founder & Lead Dentist</span>
                <h2>Dr. Mark A. Vanzant, DMD</h2>
                <p>
                  Dr. Vanzant graduated from the University of Florida College of Dentistry and went on to serve
                  in the United States Air Force, completing three combat deployments overseas. Today, he continues
                  his service in the Montana Army National Guard while leading Summit Dental Group in Kalispell.
                </p>
                <p>
                  In his own words: &ldquo;When I was a kid I knocked my two front teeth out and I had a dentist who gave
                  me such a great experience that even as a nine-year-old getting root canals, it was a great experience.
                  I&apos;m trying to bring that to my patients here in the Flathead Valley &mdash; a calm, comfortable,
                  pleasant experience at the dentist.&rdquo;
                </p>
                <p>
                  His goal for Summit Dental, which he opened in January 2018: <em>&ldquo;To create smiles for our clients
                  that they can be proud of for a lifetime.&rdquo;</em>
                </p>
                <div className="about-stats">
                  {[
                    { num: 'UF', label: 'University of Florida, DMD' },
                    { num: 'USAF', label: 'Veteran, 3 Deployments' },
                    { num: '4.8★', label: '469 Google Reviews' },
                    { num: 'ARNG', label: 'Montana Army National Guard' },
                  ].map(s => (
                    <div key={s.label} className="about-stat">
                      <div className="about-stat-num">{s.num}</div>
                      <div className="about-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="about-credentials">
                  {['DMD, University of Florida', 'USAF Veteran', 'Montana ARNG', 'ADA Member', 'TRICARE Provider', 'ADDP Provider'].map(c => (
                    <span key={c} className="credential-badge">{c}</span>
                  ))}
                </div>
                <div className="about-ctas">
                  <a href="/contact" className="btn btn-primary">Book with Dr. Vanzant</a>
                  <a href="tel:+14067524545" className="btn btn-secondary">Call (406) 752-4545</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Office */}
        <section className="section section--tinted">
          <div className="container text-center">
            <span className="eyebrow">The Summit Experience</span>
            <h2>A Dental Office That Doesn&apos;t Feel Like One</h2>
            <p className="section-intro" style={{ margin: '0 auto 56px' }}>
              We&apos;ve built an environment that counteracts everything people dread about the dentist.
            </p>
            <div className="why-grid">
              {[
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
                  title: 'Coffee Bar', desc: 'Start your visit with a fresh cup. We believe comfort begins the moment you walk in the door.'
                },
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
                  title: 'Massage Chairs', desc: 'Our waiting area features massage chairs so you can relax before your appointment, not dread it.'
                },
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>,
                  title: 'Welcome Gifts', desc: 'New patients receive a welcome gift bag as a small thank-you for trusting us with your smile.'
                },
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
                  title: 'Honest Care', desc: 'We recommend only what you need. No upselling, no pressure, no vague treatment plans.'
                },
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
                  title: 'Family-Friendly', desc: "Kids and adults both feel at home here. We're a true family practice."
                },
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
                  title: 'Sedation Available', desc: 'Nitrous oxide and oral conscious sedation for patients who want a more relaxed experience.'
                },
              ].map(w => (
                <div key={w.title} className="why-card">
                  <div className="why-number">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Testimonial Video */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">Patient Testimonials</span>
            <h2 style={{ marginBottom: '10px' }}>Hear It From Our Patients</h2>
            <p className="section-intro" style={{ marginBottom: '40px' }}>
              Real Summit Dental Group patients in their own words, recorded right here in Kalispell.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '32px', alignItems: 'center' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=UUIdBaXNFJMeMMmhbwM08z4w&index=3&rel=0&modestbranding=1"
                  title="Summit Dental Group Patient Testimonials: Kalispell Montana"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div>
                <div style={{ fontSize: '2rem', color: '#f0c040', marginBottom: '12px', letterSpacing: '-1px' }}>★★★★★</div>
                <h3 style={{ marginBottom: '12px' }}>4.8 / 5 | 469 Google Reviews</h3>
                <p style={{ color: 'var(--color-neutral-mid)', marginBottom: '16px', fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.7 }}>
                  &ldquo;Since he was in the Air Force I appreciated that he served his country. He gave us options &mdash;
                  he wasn&apos;t sure if it was going to need a root canal, and when he got in there he said &lsquo;nope,
                  it just needs a filling.&rsquo; That&apos;s very honest and to me that really means a lot.
                  He&apos;s just a nice, honest man. Couldn&apos;t ask for anybody better.&rdquo;
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-neutral-mid)', marginBottom: '28px', fontWeight: 600 }}>
                  — Navy Veteran &amp; Spouse, Kalispell MT &middot; YouTube Testimonial
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="/contact" className="btn btn-primary">Book an Appointment</a>
                  <a href="tel:+14067524545" className="btn btn-secondary">Call (406) 752-4545</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Ready to Experience the Difference?</h2>
              <p>New patients welcome. TRICARE and most insurance accepted. Same-day emergencies available.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-ghost-light">Book an Appointment</a>
              <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
