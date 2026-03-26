import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Veterans & Military Dental Care | TRICARE Accepted | Summit Dental Kalispell',
  description:
    'Veteran-owned Summit Dental Group accepts TRICARE Active Duty (ADDP), TDP, and United Concordia. Dr. Vanzant served 3 combat deployments. We handle the paperwork. Kalispell, MT.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Summit Dental Group accept TRICARE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Summit Dental Group accepts TRICARE Active Duty Dental Program (ADDP), TRICARE Dental Program (TDP) for dependents and non-activated Guard/Reserve, and United Concordia. Our front-office team can assist you with your Appointment Control Number (ACN).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ADDP and who is eligible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Active Duty Dental Program (ADDP) provides civilian dental care for Active Duty Service Members (ADSMs) and activated National Guard/Reserve members. You may be eligible for self-referral if you live more than 50 miles from a military Dental Treatment Facility (DTF).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an Appointment Control Number (ACN)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ACN is required from United Concordia before receiving care under ADDP. Our front-office team will help you obtain or verify yours. Routine care under $750/appointment (up to $1,500/year) typically does not require complex prior authorization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can family members of Guard soldiers use TRICARE dental at Summit Dental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dependents and non-activated Guard/Reserve members are covered under the TRICARE Dental Program (TDP), which is separate from ADDP. We are familiar with both plans and can assist with claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Summit Dental offer DD Form 2813 dental readiness exams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer DD Form 2813 dental readiness examinations for Guard and Reserve members who need to meet annual dental readiness requirements. Contact us to schedule.',
      },
    },
  ],
};

export default function VeteransMilitaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Hero */}
      <section className="page-hero" aria-labelledby="vet-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Veterans &amp; Military</span>
          </nav>
          <h1 id="vet-heading">Military &amp; Veteran Dental Care</h1>
          <p>
            Veteran-owned. TRICARE &amp; ADDP accepted. Dr. Vanzant deployed three
            times — he understands military life and military insurance firsthand.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link href="/contact#appointment" className="btn btn-primary btn-lg">
              Book an Appointment
            </Link>
            <a href="tel:+14067524545" className="btn btn-white btn-lg">
              📞 Call (406) 752-4545
            </a>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="trust-bar" role="complementary">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <span aria-hidden="true">🎖️</span>
            <strong>Veteran-Owned</strong>
            <span>Dr. Vanzant, USAF (Ret.)</span>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <span aria-hidden="true">🪖</span>
            <strong>TRICARE ADDP</strong>
            <span>Active Duty accepted</span>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <span aria-hidden="true">👨‍👩‍👧</span>
            <strong>TRICARE TDP</strong>
            <span>Dependents &amp; Guard/Reserve</span>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <span aria-hidden="true">📋</span>
            <strong>DD Form 2813</strong>
            <span>Readiness exams available</span>
          </div>
        </div>
      </div>

      {/* ACN Concierge */}
      <section className="section section-cream" aria-labelledby="acn-heading">
        <div className="container container-sm">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="overline">Our Promise</span>
            <h2 id="acn-heading">Military insurance is complicated.<br />We handle it for you.</h2>
            <p className="lead">
              We know navigating TRICARE feels like a second deployment's worth of
              paperwork. Our front-office team is trained in military benefit processing
              — you focus on your health, we'll handle the rest.
            </p>
          </div>

          {/* How It Works */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                step: '01',
                title: 'Confirm your eligibility',
                desc: 'We\'ll help you determine if you qualify under ADDP (Active Duty, >50 miles from MTF or DTF-referred) or TDP (Guard/Reserve dependents).',
              },
              {
                step: '02',
                title: 'Get your ACN',
                desc: 'Your Appointment Control Number from United Concordia is required before your visit. Our team will assist you in obtaining or verifying it.',
              },
              {
                step: '03',
                title: 'Come in — we do the rest',
                desc: 'We file your claims, coordinate with United Concordia, and make sure your benefits are applied. No stress, no guessing.',
              },
            ].map(s => (
              <div key={s.step} className="service-card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--teal-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  color: 'var(--teal)',
                  fontWeight: '700',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: '1.05rem' }}>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Breakdown */}
      <section className="section section-white" aria-labelledby="plans-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">Accepted Military Plans</span>
            <h2 id="plans-heading">Understanding your dental benefits</h2>
            <p>
              Plain-language breakdown of the military dental plans we accept and
              who qualifies for each.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                title: 'TRICARE Active Duty Dental Program (ADDP)',
                icon: '🪖',
                who: 'Active Duty Service Members and activated National Guard/Reserve',
                how: 'Self-referral if living >50 miles from a military DTF, or with a DTF referral. An Appointment Control Number (ACN) is required from United Concordia before your appointment.',
                note: 'Routine care: up to $750/appointment, $1,500/year — no complex prior auth required.',
              },
              {
                title: 'TRICARE Dental Program (TDP)',
                icon: '👨‍👩‍👧',
                who: 'Dependents of Active Duty, and non-activated Guard/Reserve members',
                how: 'Enrolled directly through United Concordia. Separate from ADDP. Premiums apply depending on your service component. In-network care applies.',
                note: 'Contact us to confirm current in-network status for your specific plan.',
              },
              {
                title: 'United Concordia (UCCI)',
                icon: '⭐',
                who: 'The administered carrier for both ADDP and TDP across all branches',
                how: 'United Concordia processes all TRICARE dental claims. Dr. Vanzant\'s practice coordinates directly with UCCI for billing.',
                note: 'You can verify your benefits at www.unitedconcordia.com or call (800) 332-0366.',
              },
              {
                title: 'DD Form 2813 — Dental Readiness Exams',
                icon: '📋',
                who: 'Guard and Reserve members preparing for deployment or annual readiness review',
                how: 'We offer full DD Form 2813 dental examinations required for military readiness assessments. Schedule in advance of your deployment window.',
                note: '60.5% of Reserve Component soldiers failing readiness have dental deficiencies — don\'t wait.',
              },
            ].map(p => (
              <div key={p.title} className="service-card" style={{ padding: '1.75rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }} aria-hidden="true">{p.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ fontSize: '0.8rem', color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Who qualifies</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem' }}>{p.who}</p>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ fontSize: '0.8rem', color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>How it works here</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem' }}>{p.how}</p>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--teal-dark)', background: 'var(--teal-light)', padding: '0.5rem 0.75rem', borderRadius: '6px', margin: 0 }}>
                  📌 {p.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PTSD-Sensitive Care */}
      <section className="section section-off-white" aria-labelledby="ptsd-heading">
        <div className="container container-sm" style={{ textAlign: 'center' }}>
          <span className="overline">Trauma-Informed Care</span>
          <h2 id="ptsd-heading">Dental visits can feel challenging for some veterans. That's okay.</h2>
          <p className="lead" style={{ margin: '1rem auto 2rem' }}>
            Dental fear is up to 10 times more prevalent in veterans experiencing PTSD. We know
            that. Our team is trained to go at your pace — no rush, no pressure, always in your
            control.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { icon: '🛑', text: 'Stop-signal protocol — you\'re always in control' },
              { icon: '😴', text: 'Nitrous oxide &amp; oral sedation available' },
              { icon: '🎧', text: 'Noise-canceling headphones to block clinical sounds' },
              { icon: '⏰', text: 'Extended appointment time — no rushing' },
              { icon: '💬', text: 'Judgment-free environment always' },
              { icon: '🤝', text: 'Dr. Vanzant is a veteran — he understands' },
            ].map(i => (
              <div key={i.text} className="value-item" style={{ padding: '1.5rem 1rem' }}>
                <div className="value-icon" aria-hidden="true">{i.icon}</div>
                <p style={{ fontSize: '0.9rem', margin: 0 }} dangerouslySetInnerHTML={{ __html: i.text }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-cream" aria-labelledby="vet-faq-heading">
        <div className="container container-sm">
          <div className="section-header">
            <span className="overline">FAQ</span>
            <h2 id="vet-faq-heading">Common questions from military families</h2>
          </div>
          <div className="faq-list">
            {[
              {
                q: 'Does Summit Dental Group accept TRICARE?',
                a: 'Yes. We accept TRICARE Active Duty Dental Program (ADDP), TRICARE Dental Program (TDP), and United Concordia. Contact us and we\'ll help determine which plan applies to your situation.',
              },
              {
                q: 'I\'m in the Montana National Guard. Am I eligible for ADDP?',
                a: 'When activated for federal service and living more than 50 miles from a military Dental Treatment Facility, you may self-refer under ADDP. When not activated, your dependents and you may qualify under TDP. We\'ll help you figure it out.',
              },
              {
                q: 'What is an ACN and do I need one?',
                a: 'An Appointment Control Number is required from United Concordia before receiving ADDP care. Our front office will assist you in obtaining yours. For routine care under $750/appointment, the process is straightforward.',
              },
              {
                q: 'Can you do my annual dental readiness exam (DD Form 2813)?',
                a: 'Yes, absolutely. We offer DD Form 2813 dental readiness examinations for Guard and Reserve members. Schedule in advance of your readiness window.',
              },
              {
                q: 'What if I\'m a veteran but my service was years ago — can I still come here?',
                a: '100% yes. Most veterans who served more than 5 years ago are ineligible for VA dental benefits — 82% of VA-enrolled veterans receive no dental coverage. We\'re here for all veterans, regardless of discharge date, with or without TRICARE coverage.',
              },
            ].map(faq => (
              <div key={faq.q} className="faq-item" style={{ padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--navy)', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', fontWeight: '600' }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta" aria-labelledby="vet-cta-heading">
        <div className="container">
          <h2 id="vet-cta-heading">Ready to schedule your visit?</h2>
          <p>
            Serving active duty, veterans, Guard, Reserve, and their families across the
            Flathead Valley. We handle the insurance — you handle showing up.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact#appointment" className="btn btn-white btn-lg">
              📅 Book an Appointment
            </Link>
            <a href="tel:+14067524545" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)' }}>
              📞 Call (406) 752-4545
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '1.5rem' }}>
            Have questions about TRICARE coverage? Call us — our front office will walk you through it.
          </p>
        </div>
      </section>
    </>
  );
}
