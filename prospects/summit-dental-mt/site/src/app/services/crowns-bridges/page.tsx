import type { Metadata } from 'next';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Dental Crowns & Bridges Kalispell MT: Restorative Dentistry | Summit Dental Group',
  description: 'Porcelain crowns and fixed bridges to restore damaged or missing teeth in Kalispell, MT. Natural-looking, durable restorations from Summit Dental Group.',
};

export default function CrownsBridgesPage() {
  return (
    <>
      <SiteNav activePath="/services" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            Crowns &amp; Bridges
          </span>
          <h1>Restore Your Tooth&apos;s Strength and Appearance Without It Looking Restored</h1>
          <p>Modern porcelain crowns and bridges are indistinguishable from natural teeth. We design every restoration to blend seamlessly with your smile.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book a Consultation</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div>
                <span className="eyebrow">Dental Crowns</span>
                <h2>What Is a Crown?</h2>
                <p>A dental crown is a tooth-shaped cap that fits over the entire visible portion of a tooth. It restores the shape, size, strength, and appearance of a tooth that has been damaged, cracked, severely decayed, or weakened by a large filling.</p>
                <p>Our crowns are made from high-strength dental porcelain custom-matched to the color of your surrounding teeth. The result is a restoration that functions perfectly and looks completely natural.</p>
                <p><strong>Common reasons for a crown:</strong></p>
                <ul style={{ color: 'var(--color-neutral-mid)', lineHeight: 2, paddingLeft: '20px', marginTop: '8px' }}>
                  <li>Cracked or fractured tooth</li>
                  <li>Tooth severely damaged by decay</li>
                  <li>After a root canal treatment</li>
                  <li>Worn-down teeth from grinding</li>
                  <li>To improve the appearance of a misshapen tooth</li>
                </ul>
              </div>
              <div>
                <span className="eyebrow">Dental Bridges</span>
                <h2>What Is a Bridge?</h2>
                <p>A dental bridge replaces one or more missing teeth by anchoring artificial teeth (pontics) to crowns on the adjacent natural teeth. The result is a fixed, non-removable restoration that fills the gap.</p>
                <p>Bridges are an excellent option when an implant isn&apos;t the right fit, whether due to bone density, medical considerations, or preference. They restore your ability to chew normally and prevent neighboring teeth from shifting.</p>
                <p>Like crowns, our bridges are crafted from porcelain for a completely natural appearance.</p>
                <div className="inline-ctas" style={{ marginTop: '28px' }}>
                  <a href="/contact" className="btn btn-primary">Book a Crown or Bridge Consultation</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Damaged or Missing a Tooth?</h2>
              <p>Let&apos;s talk about your options. Most crown and bridge cases can be completed in just two visits.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-primary">Book Consultation</a>
              <a href="tel:+14067524545" className="btn btn-white">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
