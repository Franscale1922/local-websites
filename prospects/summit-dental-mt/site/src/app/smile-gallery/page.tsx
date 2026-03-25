import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Before & After Smile Gallery — Summit Dental Group Kalispell MT',
  description: 'See transformation results from Summit Dental Group in Kalispell, MT — dental implants, veneers, whitening, and smile makeovers.',
};

// Placeholder cases for the demo
const CASES = [
  { title: 'Full Smile Makeover', service: 'Veneers + Whitening', desc: 'Complete smile transformation with porcelain veneers and professional whitening.' },
  { title: 'Dental Implant', service: 'Implant + Crown', desc: 'Permanent replacement of a missing front tooth — indistinguishable from natural.' },
  { title: 'Teeth Whitening', service: 'In-Office Whitening', desc: '6 shades whiter in a single in-office whitening session.' },
  { title: 'Crown Restoration', service: 'Porcelain Crown', desc: 'Cracked molar restored with a natural-looking porcelain crown.' },
  { title: 'Composite Bonding', service: 'Dental Bonding', desc: 'Chipped front teeth repaired with tooth-colored composite bonding.' },
  { title: 'Implant Bridge', service: 'Implant-Supported Bridge', desc: 'Three missing teeth replaced with an implant-supported fixed bridge.' },
];

export default function SmileGalleryPage() {
  return (
    <>
      <SiteNav activePath="/smile-gallery" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: '#e8a96a', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: '#e8a96a', display: 'block' }} />
            Smile Gallery
          </span>
          <h1>Real Smiles. Real Results.</h1>
          <p>Before and after cases from Summit Dental Group patients. See what&apos;s possible — then let&apos;s talk about your smile.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book a Consultation</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {CASES.map((c, i) => (
                <div key={i} className="review-card" style={{ cursor: 'default' }}>
                  {/* Before/After placeholder */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px',
                    marginBottom: '16px', borderRadius: '8px', overflow: 'hidden'
                  }}>
                    <div style={{ background: 'var(--color-surface-tinted)', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-neutral-mid)', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ fontSize: '1.5rem' }}>📸</div>
                      BEFORE
                    </div>
                    <div style={{ background: 'var(--color-accent-light)', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent-dark)', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ fontSize: '1.5rem' }}>✨</div>
                      AFTER
                    </div>
                  </div>
                  <div style={{ display: 'inline-block', padding: '4px 12px', background: 'var(--color-accent-light)', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '10px' }}>{c.service}</div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-neutral-mid)', margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '48px', padding: '32px', background: 'var(--color-surface-tinted)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--color-border)' }}>
              <h3 style={{ marginBottom: '12px' }}>See Actual Results at Your Consultation</h3>
              <p style={{ color: 'var(--color-neutral-mid)', marginBottom: '24px', fontSize: '0.9rem' }}>
                Dr. Vanzant will show you case studies specific to your situation and walk you through exactly what results you can expect.
                No pressure — just an honest look at what&apos;s possible for your smile.
              </p>
              <a href="/contact" className="btn btn-primary">Book a Free Smile Consultation</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
