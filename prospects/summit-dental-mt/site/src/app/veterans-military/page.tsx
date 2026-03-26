import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Veterans & Military Dentistry: TRICARE Accepted | Summit Dental Group Kalispell MT',
  description: 'Summit Dental Group accepts TRICARE, ADDP, and military dental plans. Veteran-owned practice: Dr. Vanzant, USAF, 3 combat deployments. Serving Kalispell, MT.',
};

const PLANS = [
  { name: 'TRICARE Active Duty Dental Program (ADDP)', note: 'Via United Concordia, for active duty service members' },
  { name: 'TRICARE Dental Program (TDP)', note: 'For dependents and non-activated Guard/Reserve' },
  { name: 'United Concordia (UCCI)', note: 'Full network provider' },
  { name: 'Dept. of Defense Military Plans', note: 'All major military-affiliated dental plans' },
];

const STEPS = [
  {
    num: '01',
    title: 'Confirm Your Eligibility',
    desc: 'Verify your TRICARE dental eligibility at tricare.mil or call United Concordia. Key factors: 50-mile remote rule or DTF-referral status.',
  },
  {
    num: '02',
    title: 'Get Your ACN (if applicable)',
    desc: 'Some TRICARE plans require an Approval/Confirmation Number from United Concordia before treatment. We\'ll help you through this if needed.',
  },
  {
    num: '03',
    title: 'Book Your Appointment',
    desc: 'Call us at (406) 752-4545 or request online. Bring your military ID and insurance card. We handle all the paperwork from there.',
  },
];

export default function VeteransPage() {
  return (
    <>
      <SiteNav activePath="/veterans-military" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: '#e8a96a', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: '#e8a96a', display: 'block' }} />
            Veterans & Military
          </span>
          <h1>We Know Military Insurance Can Be Complicated. We Handle It For You.</h1>
          <p>
            Dr. Vanzant is a USAF veteran with three combat deployments. He understands both the
            dentistry and the insurance landscape, so you don&apos;t have to.
          </p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book Your Appointment</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        {/* Dr. Vanzant Veteran Story */}
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
                He built Summit Dental Group with veterans in mind, a practice where military patients are
                not an afterthought but a priority. He accepts every major military dental plan and his team
                is trained to navigate the specifics of TRICARE billing.
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

        {/* Accepted Plans */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">Accepted Military Insurance</span>
            <h2 style={{ marginBottom: '12px' }}>Plans We Accept</h2>
            <p className="section-intro" style={{ marginBottom: '48px' }}>
              We are in-network or a covered provider for all major military dental programs.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', maxWidth: '860px' }}>
              {PLANS.map(plan => (
                <div key={plan.name} className="insurance-item" style={{
                  background: 'var(--color-surface)',
                  border: '2px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <strong style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>{plan.name}</strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-neutral-mid)', margin: 0, paddingLeft: '26px' }}>{plan.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use Benefits */}
        <section className="section section--slate">
          <div className="container">
            <span className="eyebrow">Step-by-Step Guide</span>
            <h2 style={{ color: '#fff', marginBottom: '10px' }}>How to Use Your Military Benefits Here</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 0 }}>
              Plain language. No confusing bureaucratic explanations.
            </p>
            <div className="process-grid">
              {STEPS.map((step, i, arr) => (
                <div key={step.num} className="process-step">
                  {i < arr.length - 1 && <div className="process-connector" />}
                  <div className="process-icon-wrap">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div className="process-num">{step.num}</div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href="tel:+14067524545" className="btn btn-primary">Call Us. We&apos;ll Walk You Through It.</a>
            </div>
          </div>
        </section>

        {/* DD Form 2813 */}
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
              requirements. We&apos;ll make it as fast and painless as possible.
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
              <h2>You&apos;ve Served. Now Let Us Serve You.</h2>
              <p>TRICARE, ADDP, and all military plans accepted. Same-day emergency appointments available. No runaround.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-ghost-light">Book Appointment</a>
              <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
