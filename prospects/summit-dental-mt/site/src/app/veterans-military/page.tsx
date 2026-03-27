import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Veteran-Owned Dental Practice in Kalispell, MT | Summit Dental Group',
  description: 'Summit Dental Group is Kalispell\'s only veteran-owned dental practice. Dr. Mark Vanzant, DMD: USAF veteran, 3 combat deployments, Montana Army National Guard. Honest dentistry for every patient.',
};

const VALUES = [
  {
    title: 'Straight Talk, No Upselling',
    desc: 'Dr. Vanzant recommends treatment you actually need — and tells you clearly when something can wait. No alarm, no pressure, no manufactured urgency.',
  },
  {
    title: 'Private Practice, Not a Chain',
    desc: 'Summit Dental is independently owned. There is no corporate quota to hit, no production-per-chair metric. The only measure is whether the patient left better than they arrived.',
  },
  {
    title: 'Respect for Your Time',
    desc: 'Appointments run on schedule. We explain what we are doing before we do it. If something unexpected comes up, we tell you and make a plan before proceeding.',
  },
  {
    title: 'Same Provider Throughout',
    desc: 'Dr. Vanzant handles your care directly — from consultation through treatment. The person who examines you, explains your options, and does the work is the same person every time.',
  },
];

export default function VeteransPage() {
  return (
    <>
      <SiteNav activePath="/veterans-military" alwaysScrolled />
      <main>
        {/* Hero */}
        <div className="page-hero page-hero--veterans">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            Veteran-Owned Practice
          </span>
          <h1>Dentistry Built on the Same Values Dr. Vanzant Learned in Uniform</h1>
          <p>
            Honesty. Directness. Respect for the person in front of you. Dr. Vanzant brought those
            values from the Air Force into practice — and they show up in every patient interaction.
          </p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book Your Appointment</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        {/* Dr. Vanzant Story */}
        <section className="veterans-section">
          <div className="veterans-inner">
            <div>
              <span className="eyebrow veterans-eyebrow">About Dr. Vanzant</span>
              <h2>A Dentist Who Has Served</h2>
              <p>
                Dr. Mark Vanzant, DMD served in the United States Air Force and completed three combat
                deployments in support of Operation Iraqi Freedom and Operation Enduring Freedom. He currently
                serves in the Montana Army National Guard.
              </p>
              <p>
                He did not build Summit Dental Group to be a military-themed practice. He built it to be
                a good practice — one where patients get an honest assessment, a clear explanation, and
                treatment they can trust. The veteran background is context, not a marketing hook.
              </p>
              <p>
                <strong style={{ color: '#fff' }}>
                  &ldquo;Dental visits can feel challenging after trauma. We&apos;ll go at your pace.
                  No rushing, no judgment. Just the care you deserve.&rdquo;
                </strong>
              </p>
            </div>
            <div className="veterans-star">
              <div className="veterans-star-badge">
                <div className="vet-star">★</div>
                <div className="vet-name">Dr. Mark Vanzant, DMD</div>
                <div className="vet-desc">USAF Veteran · 3 Combat Deployments · OIF / OEF · Montana Army National Guard</div>
              </div>
            </div>
          </div>
        </section>

        {/* What Veteran-Owned Actually Means */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">What It Means Day-to-Day</span>
            <h2 style={{ marginBottom: '12px' }}>What &ldquo;Veteran-Owned&rdquo; Looks Like in Practice</h2>
            <p className="section-intro" style={{ marginBottom: '48px' }}>
              A veteran-owned practice is not a theme. It is a set of operating principles that show up
              in how the practice is run and how patients are treated.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}>
              {VALUES.map(v => (
                <div key={v.title} style={{
                  background: 'var(--color-surface)',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px 26px',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2.5" strokeLinecap="round" style={{ marginBottom: '12px' }}><polyline points="20 6 9 17 4 12"/></svg>
                  <h3 style={{ fontSize: '1rem', marginBottom: '8px', color: 'var(--color-text)' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--color-neutral-mid)', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DD Form 2813 — this is a legitimate service-based offering, not insurance */}
        <section className="section section--tinted">
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="eyebrow">Guard &amp; Reserve</span>
            <h2 style={{ marginBottom: '16px' }}>DD Form 2813: Dental Readiness Exams</h2>
            <p style={{ color: 'var(--color-neutral-mid)', fontSize: '1rem', marginBottom: '16px' }}>
              We provide dental readiness examinations (DD Form 2813) for National Guard and Reserve members
              preparing for deployment or annual training requirements. Call to schedule and let us know
              it&apos;s a readiness exam when you book.
            </p>
            <p style={{ color: 'var(--color-neutral-mid)', fontSize: '1rem', marginBottom: '32px' }}>
              As a fellow Guard/Reserve member, Dr. Vanzant understands the timelines and documentation
              requirements. We&apos;ll make it as fast and straightforward as possible.
            </p>
            <div className="inline-ctas">
              <a href="/contact" className="btn btn-primary">Schedule a Readiness Exam</a>
              <a href="tel:+14067524545" className="btn btn-secondary">Call (406) 752-4545</a>
            </div>
          </div>
        </section>

        {/* Real Veteran Testimonial */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <span className="eyebrow">Hear From a Fellow Veteran</span>
            <div style={{
              background: 'var(--color-surface)',
              border: '2px solid var(--color-border)',
              borderLeft: '5px solid var(--color-secondary)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px 44px',
              position: 'relative',
            }}>
              <div style={{ fontSize: '4rem', color: 'var(--color-secondary)', lineHeight: 1, marginBottom: '16px', fontFamily: 'Georgia, serif', opacity: 0.4 }}>&ldquo;</div>
              <p style={{ fontSize: '1.08rem', lineHeight: 1.75, color: 'var(--color-neutral-dark)', marginBottom: '20px', fontStyle: 'italic' }}>
                I was in the Navy. I taught pilots how to fly on simulators. And since he was in the Air Force,
                I appreciated that he served his country. He gave us options. One tooth had a small crack and he
                wasn&apos;t sure if it was going to need a root canal. When he got in there he said &lsquo;nope,
                it just needs a filling.&rsquo; That&apos;s very honest and to me that really means a lot.
                He&apos;s so gentle I didn&apos;t even have novocaine for the deep cleaning. I would recommend him
                because of his honesty. Couldn&apos;t ask for anybody better.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1rem' }}>N</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.9rem' }}>Navy Veteran &amp; Spouse</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-neutral-mid)' }}>Kalispell, MT &middot; YouTube Testimonial ★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Ready for a Practice That Gives You a Straight Answer?</h2>
              <p>New patients welcome. Most major insurance accepted. Same-day emergency appointments available.</p>
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
