import type { Metadata } from 'next';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Teeth Whitening Kalispell MT: Professional Whitening | Summit Dental Group',
  description: 'Professional in-office teeth whitening in Kalispell, MT. Summit Dental Group delivers dramatic results no over-the-counter kit can match, in a single visit.',
};

export default function TeethWhiteningPage() {
  return (
    <>
      <SiteNav activePath="/services" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            Teeth Whitening
          </span>
          <h1>A Noticeably Whiter Smile, In a Single Visit</h1>
          <p>Professional in-office whitening delivers results that strips and kits simply cannot. Done safely, under supervision, in about an hour.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book Whitening Appointment</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="why-grid">
              {[
                {
                  icon: '/images/icon-whitening-fast.png',
                  title: 'Faster Results', desc: 'In-office whitening uses a higher concentration of whitening agent than any take-home product, activated and overseen by a dental professional for safe, faster results.'
                },
                {
                  icon: '/images/icon-whitening-safe.png',
                  title: 'Safer Than Store Kits', desc: 'No guesswork, no ill-fitting trays, no risk of gum irritation. We monitor every step to protect your teeth and soft tissue.'
                },
                {
                  icon: '/images/icon-whitening-results.png',
                  title: 'Dramatically Whiter', desc: 'Patients typically see 4–8 shades whiter in a single session. Store-bought kits rarely manage more than 1–2 shades over weeks of use.'
                },
                {
                  icon: '/images/icon-teeth-whitening.png',
                  title: 'Done in About an Hour', desc: 'Come in during your lunch break. No recovery, no downtime. Just a noticeably brighter smile when you leave.'
                },
              ].map(w => (
                <div key={w.title} className="why-card">
                  <div className="why-number">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.icon} alt={w.title} width={72} height={72} style={{ objectFit: 'contain' }} />
                  </div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section className="section section--tinted">
          <div className="container" style={{ maxWidth: '700px' }}>
            <span className="eyebrow">Important Notes</span>
            <h2 style={{ marginBottom: '16px' }}>Is Whitening Right for You?</h2>
            <p style={{ color: 'var(--color-neutral-mid)', marginBottom: '14px' }}>Teeth whitening works best for surface stains caused by coffee, tea, wine, and tobacco. It is most effective on natural tooth enamel.</p>
            <p style={{ color: 'var(--color-neutral-mid)', marginBottom: '14px' }}>Whitening does not change the color of crowns, veneers, or composite fillings. Some stains (e.g., from tetracycline antibiotics or fluorosis) require alternative treatments like veneers or bonding.</p>
            <p style={{ color: 'var(--color-neutral-mid)', marginBottom: '32px' }}>Dr. Vanzant will assess your teeth before treatment and give you an honest expectation of results.</p>
            <a href="/contact" className="btn btn-primary">Book a Whitening Consultation</a>
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Ready for a Brighter Smile?</h2>
              <p>Call us or request an appointment. Mention you&apos;re interested in whitening.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-primary">Book Now</a>
              <a href="tel:+14067524545" className="btn btn-white">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
