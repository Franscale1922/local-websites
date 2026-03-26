import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Service Area: Kalispell, Whitefish, Columbia Falls & Flathead Valley | Summit Dental Group',
  description: 'Summit Dental Group serves Kalispell and the entire Flathead Valley including Whitefish, Columbia Falls, Bigfork, Polson, and Ronan, MT. Veteran-owned dentist accepting new patients.',
  alternates: { canonical: '/service-area' },
};

const COMMUNITIES = [
  {
    name: 'Kalispell, MT',
    tag: 'Main Office',
    note: 'Summit Dental Group is located at 203 Business Center Loop, Suite C in Kalispell — the heart of the Flathead Valley. We are Kalispell\'s only veteran-owned dental practice, accepting new patients of all ages, Tuesday through Friday.',
    services: ['Family & Preventive Dentistry', 'Dental Implants', 'Emergency Dentistry', 'Cosmetic Dentistry', 'Sedation Dentistry', 'Crowns & Bridges'],
  },
  {
    name: 'Whitefish, MT',
    tag: '~25 min from Kalispell',
    note: 'Patients from Whitefish regularly make the short drive to Summit Dental Group for dental implants, cosmetic dentistry, and same-day emergency care. We coordinate scheduling to make the trip worthwhile — often fitting multiple treatments into a single visit.',
    services: ['Dental Implants', 'Cosmetic Dentistry', 'Emergency Dentistry', 'Sedation Dentistry'],
  },
  {
    name: 'Columbia Falls, MT',
    tag: '~20 min from Kalispell',
    note: 'Columbia Falls families choose Summit Dental for our family-friendly atmosphere, TRICARE acceptance, and same-day emergency appointments. Dr. Vanzant\'s veteran background resonates strongly with the military-connected community in Columbia Falls.',
    services: ['Family Dentistry', 'TRICARE & Military Insurance', 'Emergency Care', 'Teeth Whitening'],
  },
  {
    name: 'Bigfork, MT',
    tag: '~25 min from Kalispell',
    note: 'Bigfork patients seeking high-quality cosmetic and restorative dentistry choose Summit Dental for our honest approach and no-upsell philosophy. We\'ll give you a straight assessment and a clear treatment plan before anything begins.',
    services: ['Cosmetic Dentistry', 'Crowns & Bridges', 'Dental Implants', 'Preventive Care'],
  },
  {
    name: 'Polson, MT',
    tag: '~1 hour from Kalispell',
    note: 'Patients from Polson and the Mission Valley area make the drive to Summit Dental for more complex procedures — dental implants, sedation dentistry, and cosmetic smile makeovers — that may not be available locally at the same level of quality and care.',
    services: ['Dental Implants', 'Sedation Dentistry', 'Cosmetic Dentistry', 'Emergency Care'],
  },
  {
    name: 'Ronan, MT',
    tag: '~1 hour from Kalispell',
    note: 'Summit Dental Group welcomes patients from Ronan and the surrounding Lake County area. We schedule appointments to minimize trip frequency and maximize what we can accomplish in each visit.',
    services: ['Family Dentistry', 'Cosmetic Dentistry', 'Dental Implants', 'Sedation Dentistry'],
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      <SiteNav activePath="/service-area" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            Service Area
          </span>
          <h1>Serving Kalispell and the Entire Flathead Valley</h1>
          <p>
            Summit Dental Group is Kalispell&apos;s veteran-owned dental practice — and patients from across
            the Flathead Valley trust us for everything from routine cleanings to dental implants.
          </p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book an Appointment</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        {/* Office info strip */}
        <div className="trust-strip" style={{ background: 'var(--color-primary-dark)' }}>
          {[
            { label: '203 Business Center Loop, Suite C', sub: 'Kalispell, MT 59901' },
            { label: 'Tuesday – Friday', sub: '8:00 AM – 5:00 PM' },
            { label: '(406) 752-4545', sub: 'Call or leave a message' },
            { label: 'TRICARE & Most Insurance', sub: 'Accepted — military families welcome' },
          ].map(t => (
            <div key={t.label} className="trust-strip-item">
              <div className="trust-strip-text">
                <span>{t.label}</span>
                {t.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Community sections */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">Communities We Serve</span>
            <h2 style={{ marginBottom: '12px' }}>Flathead Valley and Beyond</h2>
            <p className="section-intro" style={{ marginBottom: '56px' }}>
              Whether you&apos;re in Kalispell or making the drive from Whitefish, Columbia Falls, or Bigfork,
              Summit Dental Group is worth the trip. Here&apos;s what each community typically comes to us for.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {COMMUNITIES.map((c, i) => (
                <div
                  key={c.name}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
                    gap: '40px',
                    alignItems: 'start',
                    padding: '36px',
                    background: i % 2 === 0 ? 'var(--color-surface)' : 'transparent',
                    border: i % 2 === 0 ? '1.5px solid var(--color-border)' : 'none',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{c.name}</h2>
                      <span style={{
                        background: 'var(--color-accent)',
                        color: '#fff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '100px',
                        whiteSpace: 'nowrap',
                      }}>{c.tag}</span>
                    </div>
                    <p style={{ color: 'var(--color-neutral-mid)', lineHeight: 1.75, fontSize: '0.92rem' }}>{c.note}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-neutral-mid)', marginBottom: '12px' }}>
                      Popular services for {c.name.split(',')[0]} patients:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {c.services.map(s => (
                        <span key={s} style={{
                          background: 'rgba(var(--color-accent-rgb, 74,144,226), 0.08)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '100px',
                          padding: '5px 12px',
                          fontSize: '0.78rem',
                          color: 'var(--color-text)',
                          whiteSpace: 'nowrap',
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why patients drive to Summit Dental */}
        <section className="section section--tinted">
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="eyebrow">Why Patients Make the Drive</span>
            <h2 style={{ marginBottom: '16px' }}>What Our Out-of-Town Patients Say</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {[
                { quote: 'I drove from Whitefish and it was absolutely worth it. Dr. Vanzant was honest about what I actually needed — no upselling, no pressure. That\'s rare.', cite: '— Whitefish, MT Patient' },
                { quote: 'As a veteran, finding a dentist who accepts TRICARE AND actually understands the military experience was everything. Summit Dental gets it.', cite: '— Columbia Falls, MT · USMC Veteran' },
                { quote: 'I needed a same-day emergency appointment and they got me in within hours. From Polson. That\'s hard to find anywhere in the Valley.', cite: '— Polson, MT Patient' },
              ].map((t, i) => (
                <div key={i} style={{
                  background: 'var(--color-surface)',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                }}>
                  <div style={{ fontSize: '1rem', color: '#f0c040', marginBottom: '10px' }}>★★★★★</div>
                  <p style={{ fontStyle: 'italic', color: 'var(--color-neutral-mid)', lineHeight: 1.7, margin: '0 0 10px', fontSize: '0.9rem' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <cite style={{ fontSize: '0.78rem', fontWeight: 600, fontStyle: 'normal', color: 'var(--color-neutral-mid)' }}>{t.cite}</cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Ready to Visit Summit Dental Group?</h2>
              <p>New patients welcome from across the Flathead Valley. TRICARE and most insurance accepted. Same-day emergency care available.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-primary">Book Appointment</a>
              <a href="tel:+14067524545" className="btn btn-white">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
