import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Dr. Mark Vanzant DMD | USAF Veteran | Summit Dental Group Kalispell',
  description:
    'Meet Dr. Mark Vanzant — U.S. Air Force veteran with 3 combat deployments, active Montana Army National Guard member, and Kalispell\'s trusted family and cosmetic dentist. Learn his story.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">About</span>
          </nav>
          <h1 id="about-heading">Meet Dr. Mark Vanzant, DMD</h1>
          <p>
            Veteran. Neighbor. Doctor. Three combat deployments shaped his discipline.
            Kalispell shaped his home. Every patient feels both.
          </p>
        </div>
      </section>

      {/* Doctor Bio */}
      <section className="section section-cream" aria-labelledby="bio-heading">
        <div className="container">
          <div className="doctor-grid">
            {/* Photo placeholder */}
            <div className="doctor-photo" aria-label="Dr. Vanzant photo placeholder">
              <div style={{
                width: '100%',
                height: '100%',
                minHeight: '560px',
                background: 'linear-gradient(135deg, #1B3A5C 0%, #2C5282 60%, #2AAFCA 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <span style={{ fontSize: '7rem' }}>👨‍⚕️</span>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textAlign: 'center', padding: '0 2rem' }}>
                  Dr. Vanzant headshot<br />to be placed here
                </p>
              </div>
              <div className="doctor-photo-badge">
                <span className="badge-icon" aria-hidden="true">🎖️</span>
                <div>
                  <div className="badge-text">USAF Veteran</div>
                  <div className="badge-sub">3 OIF/OEF Deployments</div>
                </div>
              </div>
            </div>

            <div className="doctor-content">
              <span className="overline">Our Doctor</span>
              <h2 id="bio-heading">Dr. Mark A. Vanzant, DMD</h2>
              <p className="doctor-title">
                Doctor of Medical Dentistry · U.S. Air Force (Ret.) · Montana Army National Guard
              </p>

              <p>
                Dr. Vanzant grew up with a deep appreciation for service. After earning
                his Doctor of Medical Dentistry from the University of Florida, he joined
                the U.S. Air Force — completing three combat deployments in support of
                Operation Iraqi Freedom and Operation Enduring Freedom.
              </p>
              <p>
                That service taught him precision, composure under pressure, and an
                unwavering commitment to the people he serves. He brought those qualities
                home to Kalispell, where he founded Summit Dental Group and continues to
                serve in the Montana Army National Guard.
              </p>
              <p>
                In the chair, Dr. Vanzant is known for his calm, unhurried approach —
                the kind of doctor who takes time to explain what he's doing and why,
                who never makes you feel rushed or judged, and who remembers your name
                and your story. Whether you're a nervous first-time patient or coming
                in for a complex implant case, you'll be treated like family.
              </p>

              <div className="doctor-credentials" role="list" aria-label="Credentials and highlights">
                <div className="credential-item" role="listitem">Doctor of Medical Dentistry — University of Florida</div>
                <div className="credential-item" role="listitem">U.S. Air Force Veteran — OIF &amp; OEF (3 Deployments)</div>
                <div className="credential-item" role="listitem">Active Montana Army National Guard Member</div>
                <div className="credential-item" role="listitem">General, Family &amp; Cosmetic Dentistry</div>
                <div className="credential-item" role="listitem">Dental Implants &amp; Full-Mouth Restoration</div>
                <div className="credential-item" role="listitem">Laser Dentistry &amp; Botox for Bruxism (TMJ)</div>
                <div className="credential-item" role="listitem">Sedation Dentistry — Nitrous Oxide &amp; Oral Sedation</div>
                <div className="credential-item" role="listitem">TRICARE / ADDP Network Provider (United Concordia)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Service */}
      <section className="section veteran-section" aria-labelledby="service-heading">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="overline" style={{ color: 'var(--teal)' }}>Military Service</span>
            <h2 id="service-heading" style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
              Three deployments. One calling.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Dr. Vanzant deployed three times with the U.S. Air Force in support of overseas
              military operations. In environments where precision saves lives, he developed a
              clinical discipline that defines how he practices today — methodical, thorough,
              and patient.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
              He remains active in the Montana Army National Guard, balancing his service to
              his country with his service to his patients. For Dr. Vanzant, the oath to serve
              doesn't expire — it just changes shape.
            </p>
            <div className="veteran-badges" style={{ justifyContent: 'center' }}>
              <span className="veteran-badge">🎖️ USAF Veteran</span>
              <span className="veteran-badge">🪖 Active MT Army National Guard</span>
              <span className="veteran-badge">✅ 3 Combat Deployments</span>
              <span className="veteran-badge">⭐ TRICARE Network Provider</span>
            </div>
            <div style={{ marginTop: '2.5rem' }}>
              <Link href="/veterans-military" className="btn btn-white btn-lg">
                Military Insurance &amp; Benefits Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section section-white" aria-labelledby="philosophy-heading">
        <div className="container container-sm">
          <div className="section-header">
            <span className="overline">Our Philosophy</span>
            <h2 id="philosophy-heading">Dentistry the way it should feel</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                icon: '🤝',
                title: 'No judgment. Ever.',
                desc: 'Whether it\'s been 2 years or 20 since your last visit, you\'ll be met with care — not a lecture. We start where you are.',
              },
              {
                icon: '🛑',
                title: 'You\'re always in control.',
                desc: 'Have a stop signal. Ask questions. Pause at any time. Your comfort and consent guide everything we do.',
              },
              {
                icon: '🏡',
                title: 'Community-first.',
                desc: 'Summit Dental is independently owned by someone who lives here, serves in the Guard here, and is invested in this valley.',
              },
            ].map(v => (
              <div key={v.title} className="value-item">
                <div className="value-icon" aria-hidden="true">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Amenities */}
      <section className="section section-off-white" aria-labelledby="amenities-heading">
        <div className="container container-sm">
          <div className="section-header">
            <span className="overline">Patient Comfort</span>
            <h2 id="amenities-heading">An office designed around you</h2>
            <p>
              Summit Dental Group was designed from the ground up to feel like a spa, not
              a clinic. Because how you feel walking in changes how you feel sitting down.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '700px', margin: '0 auto' }}>
            {[
              '☕ Coffee bar on arrival',
              '💆 Massage chair in waiting area',
              '🎧 Noise-canceling headphone option',
              '🎁 Gift bags for every new patient',
              '😴 Nitrous oxide &amp; oral sedation',
              '🛑 Patient stop-signal protocol',
              '📱 Online forms — no paper hassle',
              '🏔️ Montana-inspired calming design',
            ].map(a => (
              <div
                key={a}
                className="credential-item"
                style={{ background: 'var(--white)', padding: '0.875rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}
                dangerouslySetInnerHTML={{ __html: a }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta" aria-labelledby="about-cta-heading">
        <div className="container">
          <h2 id="about-cta-heading">Ready to meet Dr. Vanzant?</h2>
          <p>New patients are always welcome. Booking takes two minutes.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact#appointment" className="btn btn-white btn-lg">
              📅 Book Your First Visit
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
