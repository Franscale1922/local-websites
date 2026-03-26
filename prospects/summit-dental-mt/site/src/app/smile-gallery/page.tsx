import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Before & After Smile Gallery | Summit Dental Group Kalispell MT',
  description: 'See transformation results from Summit Dental Group in Kalispell, MT: dental implants, veneers, whitening, and smile makeovers.',
};

const CASES = [
  {
    title: 'Full Smile Makeover',
    service: 'Veneers + Whitening',
    desc: 'Complete smile transformation with porcelain veneers and professional whitening.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M8 12c-2.5 1-4 3-4 5h16c0-2-1.5-4-4-5"/><path d="M9 16s1 2 3 2 3-2 3-2"/>
      </svg>
    ),
  },
  {
    title: 'Dental Implant',
    service: 'Implant + Crown',
    desc: 'Permanent replacement of a missing front tooth. Indistinguishable from natural.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="6" height="8" rx="2"/><path d="M9 8h6"/><path d="M12 11v6"/><path d="M9 17h6"/>
      </svg>
    ),
  },
  {
    title: 'Teeth Whitening',
    service: 'In-Office Whitening',
    desc: '6 shades whiter in a single in-office whitening session.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    ),
  },
  {
    title: 'Crown Restoration',
    service: 'Porcelain Crown',
    desc: 'Cracked molar restored with a natural-looking porcelain crown.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z"/>
      </svg>
    ),
  },
  {
    title: 'Composite Bonding',
    service: 'Dental Bonding',
    desc: 'Chipped front teeth repaired with tooth-colored composite bonding.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    title: 'Implant Bridge',
    service: 'Implant-Supported Bridge',
    desc: 'Three missing teeth replaced with an implant-supported fixed bridge.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="4" height="10" rx="1"/><rect x="17" y="4" width="4" height="10" rx="1"/><path d="M7 9h10M10 4v10M14 4v10"/>
      </svg>
    ),
  },
];

export default function SmileGalleryPage() {
  return (
    <>
      <SiteNav activePath="/smile-gallery" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            Smile Gallery
          </span>
          <h1>Real Smiles. Real Results.</h1>
          <p>Before and after cases from Summit Dental Group patients. See what&apos;s possible, then let&apos;s talk about your smile.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book a Consultation</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        {/* Notice banner */}
        <div style={{
          background: 'var(--color-accent-light)',
          borderBottom: '3px solid var(--color-accent)',
          padding: '16px 24px',
          textAlign: 'center',
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600 }}>
            Patient photos are shared with consent at in-office consultations.{' '}
            <a href="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Book your free smile consultation</a>
            {' '}to see actual case results.
          </p>
        </div>

        <section className="section">
          <div className="container">
            <div className="gallery-cases-grid">
              {CASES.map((c) => (
                <div key={c.title} className="review-card" style={{ cursor: 'default' }}>
                  {/* Before/After visual */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px',
                    marginBottom: '20px', borderRadius: '8px', overflow: 'hidden',
                  }}>
                    <div style={{
                      background: 'var(--color-surface-tinted)',
                      border: '1.5px solid var(--color-border)',
                      height: '140px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexDirection: 'column', gap: '8px',
                      borderRadius: '6px 0 0 6px',
                    }}>
                      <div style={{ color: 'var(--color-neutral-mid)', opacity: 0.5 }}>{c.icon}</div>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', color: 'var(--color-neutral-mid)', textTransform: 'uppercase' }}>Before</span>
                    </div>
                    <div style={{
                      background: 'var(--color-accent-light)',
                      border: '1.5px solid rgba(75,170,200,0.3)',
                      height: '140px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexDirection: 'column', gap: '8px',
                      borderRadius: '0 6px 6px 0',
                    }}>
                      <div style={{ color: 'var(--color-accent)' }}>{c.icon}</div>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', color: 'var(--color-accent)', textTransform: 'uppercase' }}>After</span>
                    </div>
                  </div>
                  <div style={{
                    display: 'inline-block', padding: '4px 12px',
                    background: 'var(--color-accent-light)', borderRadius: '100px',
                    fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent)',
                    border: '1px solid rgba(75,170,200,0.25)', marginBottom: '10px',
                    whiteSpace: 'nowrap',
                  }}>{c.service}</div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-primary)' }}>{c.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-neutral-mid)', margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div style={{
              textAlign: 'center', marginTop: '56px', padding: '48px 40px',
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius-lg)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #1a2840 100%)',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>See Real Results</span>
                <h3 style={{ color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700 }}>
                  View Actual Case Photos at Your Consultation
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginBottom: '28px', fontSize: '0.95rem', maxWidth: '52ch', margin: '0 auto 28px' }}>
                  Dr. Vanzant will walk you through case studies specific to your situation and give you an honest preview of expected results. No pressure.
                </p>
                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="/contact" className="btn btn-primary">Book a Free Smile Consultation</a>
                  <a href="tel:+14067524545" className="btn btn-white">Call (406) 752-4545</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
