import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sedation Dentistry in Kalispell, MT | Dental Anxiety | Summit Dental',
  description:
    'Nervous about the dentist? Summit Dental Group offers nitrous oxide and oral conscious sedation in Kalispell, MT. Dr. Vanzant creates a calm, judgment-free experience at your pace.',
};

export default function SedationDentistryPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="sedation-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">›</span>
            <Link href="/services">Services</Link><span aria-hidden="true">›</span>
            <span aria-current="page">Sedation Dentistry</span>
          </nav>
          <h1 id="sedation-heading">Sedation &amp; Comfort Dentistry in Kalispell, MT</h1>
          <p>You're allowed to feel nervous — and we're equipped to help. Gentle, calming care at your pace, every time.</p>
          <Link href="/contact#appointment" className="btn btn-primary btn-lg" style={{ marginTop: '1rem' }}>
            Book a Comfort Consultation
          </Link>
        </div>
      </section>

      <section className="section section-cream" aria-labelledby="anxiety-heading">
        <div className="container container-sm" style={{ textAlign: 'center' }}>
          <span className="overline">You're Not Alone</span>
          <h2 id="anxiety-heading">72% of adults experience dental anxiety. We see it every day.</h2>
          <p className="lead" style={{ margin: '1rem auto 2rem' }}>
            Dental fear is one of the most common barriers to oral health care. Whether it's a
            past bad experience, fear of needles, claustrophobia, or just feeling out of control —
            it's real, and we take it seriously.
          </p>
          <p style={{ maxWidth: '620px', margin: '0 auto' }}>
            At Summit Dental Group, you'll find a judgment-free environment where everything moves
            at your pace. We offer a stop signal so you're always in control, extended appointment
            windows so there's no rushing, and sedation options for patients who need more support.
          </p>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="sedation-options-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">Sedation Options</span>
            <h2 id="sedation-options-heading">What's available to keep you comfortable</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                icon: '😌',
                title: 'Nitrous Oxide (Laughing Gas)',
                who: 'Mild to moderate anxiety',
                desc: 'Inhaled through a small nose mask. Takes effect in minutes. You\'ll feel relaxed and comfortable — still aware, still responsive — with zero memory impairment. Wears off immediately; you can drive home.',
                note: 'No lasting effects · Can drive after',
              },
              {
                icon: '💊',
                title: 'Oral Conscious Sedation',
                who: 'Moderate to severe anxiety',
                desc: 'A prescription medication taken by mouth about an hour before your appointment. You\'ll be deeply relaxed — awake but in a twilight state. Most patients have limited memory of the procedure. Requires a driver.',
                note: 'Requires a driver home',
              },
              {
                icon: '🌿',
                title: 'Comfort Menu',
                who: 'All patients — no sedation needed',
                desc: 'Even without medication, our office is designed for calm. Noise-canceling headphones. Massage chairs in the waiting area. Warm blankets available. A stop signal you can use any time. Coffee on arrival.',
                note: 'Available at every visit',
              },
            ].map(s => (
              <div key={s.title} className="service-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} aria-hidden="true">{s.icon}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{s.who}</div>
                <h3 style={{ fontSize: '1.05rem' }}>{s.title}</h3>
                <p>{s.desc}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--teal-dark)', background: 'var(--teal-light)', padding: '0.4rem 0.75rem', borderRadius: '6px', marginTop: 'auto' }}>📌 {s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-off-white" aria-labelledby="comfort-heading">
        <div className="container container-sm" style={{ textAlign: 'center' }}>
          <span className="overline">Our Promise</span>
          <h2 id="comfort-heading">You are always in control here</h2>
          <p style={{ margin: '1rem auto 2rem' }}>
            We explain every step before we do it. You have a stop signal at any time.
            If you need a break, you get a break — no questions, no judgment.
            Dr. Vanzant has seen every level of dental anxiety. He'll meet you exactly where you are.
          </p>
          <Link href="/contact#appointment" className="btn btn-primary btn-lg">
            📅 Book Your First Visit
          </Link>
        </div>
      </section>
    </>
  );
}
