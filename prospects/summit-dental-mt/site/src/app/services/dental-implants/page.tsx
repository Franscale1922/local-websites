import type { Metadata } from 'next';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Dental Implants in Kalispell, MT | Summit Dental Group',
  description: 'Dental implants that look and feel like natural teeth. Summit Dental Group provides single implants, bridges, and full-arch restoration in Kalispell, MT. TRICARE accepted.',
};

export default function DentalImplantsPage() {
  return (
    <>
      <SiteNav activePath="/services" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            Dental Implants
          </span>
          <h1>Permanent Tooth Replacement That Looks, Feels, and Functions Like the Real Thing</h1>
          <p>Dental implants are the gold standard for replacing missing teeth, and at Summit Dental Group, we make the process straightforward.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book a Consultation</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div>
                <span className="eyebrow">What Are Dental Implants?</span>
                <h2>The Closest Thing to a Natural Tooth</h2>
                <p>A dental implant is a small titanium post that serves as an artificial tooth root. Once it fuses with your jawbone (a process called osseointegration), a lifelike porcelain crown is attached on top, creating a tooth that looks, feels, and functions exactly like a natural one.</p>
                <p>Unlike dentures, implants are permanent and don&apos;t need to be removed. Unlike bridges, they don&apos;t require shaving down adjacent healthy teeth.</p>
                <p>With proper care, a dental implant can last 20+ years, often a lifetime.</p>
                <div className="inline-ctas" style={{ marginTop: '28px' }}>
                  <a href="/contact" className="btn btn-primary">Schedule an Implant Consultation</a>
                </div>
              </div>
              <div>
                <div className="why-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '0' }}>
                  {[
                    { num: '✓', title: 'Permanent', desc: 'Fused to your jawbone. No slipping, no removal, no adhesives.' },
                    { num: '✓', title: 'Natural-Looking', desc: 'Porcelain crowns custom-matched to your natural tooth color.' },
                    { num: '✓', title: 'Bone-Preserving', desc: 'Stimulates the jawbone to prevent the bone loss that follows tooth loss.' },
                    { num: '✓', title: 'Easy to Care For', desc: 'Brush and floss normally. No special cleaning required.' },
                  ].map(w => (
                    <div key={w.title} className="why-card" style={{ padding: '24px 20px' }}>
                      <div className="why-number">{w.num}</div>
                      <h3>{w.title}</h3>
                      <p>{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tinted">
          <div className="container">
            <span className="eyebrow">The Process</span>
            <h2 style={{ marginBottom: '10px' }}>What to Expect</h2>
            <p className="section-intro" style={{ marginBottom: '48px' }}>The implant process typically takes 3–6 months from start to final crown. Here&apos;s the overview.</p>
            <div className="process-grid">
              {[
                { num: '01', title: 'Consultation & Imaging', desc: 'X-rays or CBCT scan to assess bone density and plan the implant placement precisely.' },
                { num: '02', title: 'Implant Placement', desc: 'The titanium post is placed in your jawbone under local anesthesia. Most patients are surprised how comfortable it is.' },
                { num: '03', title: 'Healing (Osseointegration)', desc: 'Over 3–4 months, the implant fuses with your jawbone. You\'re given a temporary restoration in the meantime.' },
                { num: '04', title: 'Crown Placement', desc: 'Your custom porcelain crown is attached. The result: a tooth that is indistinguishable from your natural ones.' },
              ].map((step, i, arr) => (
                <div key={step.num} className="process-step" style={{ background: 'transparent' }}>
                  {i < arr.length - 1 && <div className="process-connector" style={{ background: 'var(--color-accent)' }} />}
                  <div className="process-icon-wrap" style={{ background: 'var(--color-primary)', color: 'var(--color-accent)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  </div>
                  <div className="process-num" style={{ color: 'var(--color-accent)' }}>{step.num}</div>
                  <h3 className="process-title" style={{ color: 'var(--color-primary)' }}>{step.title}</h3>
                  <p className="process-desc" style={{ color: 'var(--color-neutral-mid)' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Ready to Replace That Missing Tooth?</h2>
              <p>Schedule an implant consultation with Dr. Vanzant. TRICARE and most insurance accepted. CareCredit financing available.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-primary">Book Implant Consultation</a>
              <a href="tel:+14067524545" className="btn btn-white">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
