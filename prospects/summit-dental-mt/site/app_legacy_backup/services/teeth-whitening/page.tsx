import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Teeth Whitening in Kalispell, MT | Summit Dental Group',
  description: 'Professional teeth whitening in Kalispell, MT. In-office and take-home options available. Dr. Mark Vanzant DMD. Results that last — call (406) 752-4545.',
};

export default function TeethWhiteningPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="whitening-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">›</span>
            <Link href="/services">Services</Link><span aria-hidden="true">›</span>
            <span aria-current="page">Teeth Whitening</span>
          </nav>
          <h1 id="whitening-heading">Teeth Whitening in Kalispell, MT</h1>
          <p>Professional-grade whitening with real, lasting results — not the drugstore kind.</p>
          <Link href="/contact#appointment" className="btn btn-primary btn-lg" style={{ marginTop: '1rem' }}>Book a Whitening Appointment</Link>
        </div>
      </section>

      <section className="section section-cream" aria-labelledby="whitening-options-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">Whitening Options</span>
            <h2 id="whitening-options-heading">Two ways to a brighter smile</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '860px', margin: '0 auto' }}>
            {[
              {
                icon: '⚡',
                title: 'In-Office Whitening',
                subtitle: 'Results in 1 visit',
                desc: 'Our strongest whitening system, applied in-office by our clinical team. Dramatically whiter teeth in about one hour. Perfect for a special occasion, event, or when you want results fast.',
                features: ['Up to 8 shades brighter in one session', 'Applied and monitored by our clinical team', 'Protections for your gums built in', 'Walk in, walk out with a transformed smile'],
              },
              {
                icon: '🏠',
                title: 'Take-Home Whitening Kits',
                subtitle: 'Gradual, convenient, affordable',
                desc: 'Custom-fitted trays made from impressions of your teeth ensure even whitening and no leakage. Wear for a few hours each day over 1–2 weeks. Dramatically more effective than any over-the-counter strip.',
                features: ['Custom-fitted trays — no one-size-fits-all strips', 'Professional-strength gel not available in stores', 'Gradual, even whitening at your schedule', 'Trays are reusable for touch-ups anytime'],
              },
            ].map(opt => (
              <div key={opt.title} className="service-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} aria-hidden="true">{opt.icon}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--teal)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{opt.subtitle}</div>
                <h3>{opt.title}</h3>
                <p>{opt.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {opt.features.map(f => (
                    <li key={f} className="credential-item" style={{ fontSize: '0.875rem' }}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="whitening-cta-heading">
        <div className="container">
          <h2 id="whitening-cta-heading">Ready to see a whiter smile?</h2>
          <p>Quick appointments, lasting results. We'll recommend the right option for your goals and budget.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact#appointment" className="btn btn-white btn-lg">📅 Book an Appointment</Link>
            <a href="tel:+14067524545" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)' }}>📞 (406) 752-4545</a>
          </div>
        </div>
      </section>
    </>
  );
}
