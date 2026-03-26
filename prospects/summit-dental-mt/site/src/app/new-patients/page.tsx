import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'New Patient Information — Summit Dental Group Kalispell, MT',
  description: 'New patient information for Summit Dental Group in Kalispell, MT. Learn what to bring, insurance accepted, what to expect, and how to book your first appointment.',
};

export default function NewPatientsPage() {
  return (
    <>
      <SiteNav activePath="/new-patients" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: '#e8a96a', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: '#e8a96a', display: 'block' }} />
            New Patients
          </span>
          <h1>Welcome to Summit Dental Group</h1>
          <p>We&apos;re glad you&apos;re here. Here&apos;s everything you need to know before your first visit.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book Your First Appointment</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        {/* What to Bring */}
        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div>
                <span className="eyebrow">Your First Visit</span>
                <h2>What to Expect</h2>
                <p>Your first appointment typically includes a comprehensive exam, digital X-rays, a professional cleaning, and an oral cancer screening. Plan for 60–90 minutes so we&apos;re not rushed.</p>
                <p>Dr. Vanzant will review your dental history, discuss any concerns you have, and walk you through a full treatment plan before we do anything. You won&apos;t be surprised by a treatment recommendation you weren&apos;t expecting.</p>
                <p>If you have dental anxiety, <strong>tell us when you book.</strong> We have sedation options and a team that genuinely knows how to make nervous patients comfortable.</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/photo-front-desk.jpg"
                  alt="Summit Dental Group front desk team welcoming patients in Kalispell, MT"
                  style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginTop: '28px', display: 'block', objectFit: 'cover', maxHeight: '320px' }}
                />
              </div>
              <div>
                <span className="eyebrow">What to Bring</span>
                <h2>Checklist for New Patients</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                  {[
                    'Valid photo ID (driver\'s license or government-issued ID)',
                    'Dental insurance card (if applicable)',
                    'List of current medications and supplements',
                    'Any previous X-rays or dental records (if available)',
                    'Your completed new patient forms (available at the front desk)',
                    'A list of any dental concerns or questions you have',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 18px', background: 'var(--color-surface)', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: '0.88rem', color: 'var(--color-neutral-dark)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance */}
        <section className="insurance-section">
          <div className="insurance-inner">
            <div>
              <span className="eyebrow" style={{ color: '#e8a96a' }}>Insurance & Payment</span>
              <h2 style={{ color: '#fff', marginBottom: '16px' }}>We Accept Most Major Plans</h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', marginBottom: '12px' }}>
                Our team will verify your insurance benefits before your appointment so there are no surprises.
                We&apos;ll tell you exactly what&apos;s covered and what your out-of-pocket cost will be before any treatment starts.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.72)', marginBottom: '28px' }}>
                We also offer CareCredit financing for patients who want flexible payment options.
                If you don&apos;t have insurance, we&apos;ll work with you.
              </p>
              <a href="tel:+14067524545" className="btn btn-primary">Call to Verify Your Coverage</a>
            </div>
            <div className="insurance-list">
              {['Delta Dental', 'Blue Cross / Blue Shield', 'MetLife', 'Cigna', 'Aetna', 'TRICARE / ADDP (via United Concordia)', 'United Concordia (UCCI)', 'CareCredit Financing'].map(plan => (
                <div key={plan} className="insurance-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {plan}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Welcome Gift + Amenities */}
        <section className="section section--tinted">
          <div className="container text-center">
            <span className="eyebrow">The Summit Experience</span>
            <h2 style={{ marginBottom: '48px' }}>Why New Patients Stay With Us</h2>
            <div className="why-grid">
              {[
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>,
                  title: 'Welcome Gift', desc: 'Every new patient receives a welcome gift bag. A small gesture — but it tells you something about how we think about care.'
                },
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
                  title: 'Coffee Bar', desc: "Help yourself to a fresh cup before your appointment. The waiting area at Summit doesn't feel like a waiting area."
                },
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
                  title: 'Massage Chairs', desc: 'Our chairs in the waiting area are massage chairs. Your visit at Summit should feel like relief, not dread.'
                },
                {
                  icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
                  title: 'Honest Treatment Plans', desc: "We only recommend what you need. You'll receive a clear explanation of every recommendation before any treatment begins."
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

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Ready to Book Your First Visit?</h2>
              <p>New patients of all ages welcome. TRICARE and most insurance accepted. CareCredit available.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-ghost-light">Book Online</a>
              <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
