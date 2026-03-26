import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Emergency Dentist in Kalispell, MT | Same-Day | Summit Dental Group',
  description:
    'Dental emergency in Kalispell or the Flathead Valley? Summit Dental Group offers same-day emergency appointments. Toothache, broken tooth, knocked-out tooth — call (406) 752-4545 now.',
};

export default function EmergencyDentistryPage() {
  return (
    <>
      {/* Emergency Hero — high contrast, urgent */}
      <section style={{ background: 'linear-gradient(135deg, #7F1D1D 0%, #991B1B 50%, #DC2626 100%)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }} aria-labelledby="emergency-heading">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link><span aria-hidden="true" style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.6)' }}>Services</Link><span aria-hidden="true" style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }} aria-current="page">Emergency Dentistry</span>
          </nav>
          <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem', display: 'inline-block' }}>
            🚨 Same-Day Appointments Available
          </span>
          <h1 id="emergency-heading" style={{ color: '#fff', marginBottom: '1rem' }}>
            Emergency Dentist in Kalispell, MT
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', maxWidth: '580px', margin: '0 auto 2rem' }}>
            Dental emergencies don't wait. Neither do we. Call now for same-day appointments.
          </p>
          <a href="tel:+14067524545" className="btn btn-white btn-lg" aria-label="Call Summit Dental Group for emergency dentistry">
            🚨 Call Now: (406) 752-4545
          </a>
        </div>
      </section>

      <div style={{ background: '#FEF2F2', padding: '1.25rem 1.5rem', borderBottom: '3px solid var(--emergency)' }} role="alert" aria-live="polite">
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--emergency)' }}>⚡ Dental Emergency? Call (406) 752-4545</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Same-day appointments · Tue–Fri 8am–5pm</span>
          <a href="tel:+14067524545" className="btn btn-emergency btn-sm">Call Now</a>
        </div>
      </div>

      <section className="section section-cream" aria-labelledby="emergency-types-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">What Counts as an Emergency</span>
            <h2 id="emergency-types-heading">Is your situation a dental emergency?</h2>
            <p>If you're in pain, bleeding, or have damage to a tooth — that's an emergency. Call us first.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              { icon: '🦷', title: 'Severe Toothache', desc: 'Pain that won\'t go away with over-the-counter medication, especially with swelling.' },
              { icon: '💔', title: 'Broken or Chipped Tooth', desc: 'Fractured tooth — especially with sharp edges or exposed nerve.' },
              { icon: '🚿', title: 'Knocked-Out Tooth', desc: 'If you act within 30–60 minutes, the tooth may be re-implanted. Call immediately.' },
              { icon: '🔩', title: 'Lost Crown or Filling', desc: 'A missing crown exposes the tooth to damage and infection. Come in same day.' },
              { icon: '🦠', title: 'Dental Abscess', desc: 'Swelling, fever, or a bad taste could indicate a dangerous infection requiring urgent care.' },
              { icon: '🩸', title: 'Oral Bleeding', desc: 'Unexplained bleeding from the gums or soft tissue after injury.' },
            ].map(e => (
              <div key={e.title} className="service-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }} aria-hidden="true">{e.icon}</div>
                <h3 style={{ fontSize: '1rem' }}>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="emergency-what-heading">
        <div className="container container-sm">
          <div className="section-header">
            <span className="overline">What to Do</span>
            <h2 id="emergency-what-heading">First aid while you wait to be seen</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'Knocked-out tooth?', a: 'Pick it up by the crown (not the root). Rinse gently with water — do not scrub. Place it back in the socket if possible, or store it in cold milk. Call immediately. Time is critical — within 30 minutes is ideal.' },
              { q: 'Severe toothache?', a: 'Rinse with warm salt water. Apply a cold compress to the outside of your cheek. Take over-the-counter pain reliever (ibuprofen is most effective for dental pain). Do not apply aspirin directly to the tooth or gum.' },
              { q: 'Broken or cracked tooth?', a: 'Rinse gently with warm water. Apply gauze if bleeding. Use a cold compress to minimize swelling. Call us immediately — we\'ll advise on urgency based on your symptoms.' },
              { q: 'Lost crown or filling?', a: 'Keep the area clean. If you have the crown, you can temporarily re-seat it using dental cement from the pharmacy. Avoid chewing on that side. Contact us the same day.' },
            ].map(i => (
              <div key={i.q} className="faq-item" style={{ padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--navy)', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', fontWeight: '600' }}>{i.q}</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>{i.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--emergency)', padding: '4rem 0', textAlign: 'center' }} aria-labelledby="emergency-cta-heading">
        <div className="container">
          <h2 id="emergency-cta-heading" style={{ color: '#fff', marginBottom: '1rem' }}>Don't wait with dental pain.</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Same-day emergency appointments in Kalispell. Our team will get you out of pain — fast.
          </p>
          <a href="tel:+14067524545" className="btn btn-white btn-lg" aria-label="Call for emergency dental care">
            🚨 Call (406) 752-4545 Now
          </a>
        </div>
      </section>
    </>
  );
}
