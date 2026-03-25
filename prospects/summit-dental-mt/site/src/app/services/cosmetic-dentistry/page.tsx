import type { Metadata } from 'next';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry Kalispell MT — Veneers, Bonding & Smile Makeovers | Summit Dental',
  description: 'Cosmetic dentistry in Kalispell, MT — porcelain veneers, dental bonding, and complete smile makeovers. Summit Dental Group, Dr. Mark Vanzant, DMD.',
};

export default function CosmeticDentistryPage() {
  return (
    <>
      <SiteNav activePath="/services" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: '#e8a96a', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: '#e8a96a', display: 'block' }} />
            Cosmetic Dentistry
          </span>
          <h1>The Smile You&apos;ve Always Wanted — Designed Around Your Face</h1>
          <p>Whether you want subtle improvements or a complete transformation, Dr. Vanzant creates personalized smile makeovers that feel natural — not overdone.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book a Smile Consultation</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Cosmetic Services</span>
            <h2 style={{ marginBottom: '12px' }}>What We Offer</h2>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '48px' }}>
              {[
                { title: 'Porcelain Veneers', desc: 'Ultra-thin porcelain shells bonded to the front of your teeth. Covers chips, stains, gaps, and minor misalignment in just two visits.' },
                { title: 'Dental Bonding', desc: 'Tooth-colored composite resin applied directly to your teeth to fix chips, cracks, gaps, or discoloration. Quick, affordable, and effective.' },
                { title: 'Teeth Whitening', desc: 'Professional in-office whitening — dramatically whiter results than any take-home kit, in a single appointment.' },
                { title: 'Smile Makeovers', desc: 'A customized combination of treatments designed to transform your smile. We&apos;ll create a full plan based on your goals, budget, and timeline.' },
                { title: 'Composite Restorations', desc: 'Replace old silver amalgam fillings with natural-looking, tooth-colored composites for a cleaner, more uniform appearance.' },
                { title: 'Gum Contouring', desc: 'Reshape your gumline to create a more symmetrical, proportionate smile if a "gummy smile" or uneven gums are affecting your confidence.' },
              ].map(s => (
                <div key={s.title} className="service-card" style={{ cursor: 'default' }}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tinted">
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="eyebrow">Our Approach</span>
            <h2 style={{ marginBottom: '16px' }}>Cosmetic Dentistry That Looks Like You — Just Better</h2>
            <p style={{ color: 'var(--color-neutral-mid)', fontSize: '1rem', marginBottom: '16px' }}>
              Dr. Vanzant takes a conservative approach to cosmetic dentistry: enhance what&apos;s already there
              rather than create something that doesn&apos;t look natural. The best cosmetic result is one that
              makes people say &ldquo;you look great&rdquo; — not &ldquo;did you get veneers?&rdquo;
            </p>
            <p style={{ color: 'var(--color-neutral-mid)', fontSize: '1rem', marginBottom: '32px' }}>
              Before recommending any treatment, we&apos;ll discuss your goals, show you a preview of expected results,
              and walk through all your options including cost and timeline. You&apos;ll never be pushed toward a
              treatment you&apos;re not completely comfortable with.
            </p>
            <div className="inline-ctas">
              <a href="/contact" className="btn btn-primary">Book a Cosmetic Consultation</a>
              <a href="/smile-gallery" className="btn btn-secondary">See Before &amp; After Gallery →</a>
            </div>
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Start With a Consultation</h2>
              <p>Tell us what you&apos;d like to change. We&apos;ll build a plan that fits your goals and budget.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-ghost-light">Book Consultation</a>
              <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
