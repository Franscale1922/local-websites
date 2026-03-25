import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry in Kalispell, MT | Veneers, Invisalign | Summit Dental',
  description:
    'Transform your smile with cosmetic dentistry at Summit Dental Group in Kalispell, MT. Porcelain veneers, Invisalign, bonding, whitening, and full smile makeovers. Dr. Mark Vanzant DMD.',
};

export default function CosmeticDentistryPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="cosmetic-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">›</span>
            <Link href="/services">Services</Link><span aria-hidden="true">›</span>
            <span aria-current="page">Cosmetic Dentistry</span>
          </nav>
          <h1 id="cosmetic-heading">Cosmetic Dentistry in Kalispell, MT</h1>
          <p>The smile you've always wanted — designed specifically for you, delivered with precision.</p>
          <Link href="/contact#appointment" className="btn btn-primary btn-lg" style={{ marginTop: '1rem' }}>
            Schedule a Smile Consultation
          </Link>
        </div>
      </section>

      <section className="section section-cream" aria-labelledby="cosmetic-services-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">Cosmetic Services</span>
            <h2 id="cosmetic-services-heading">What we can do for your smile</h2>
            <p>Whether you want a subtle refresh or a complete transformation, we have the tools and artistry to deliver it.</p>
          </div>
          <div className="services-grid">
            {[
              { icon: '✨', title: 'Porcelain Veneers', desc: 'Ultra-thin ceramic shells custom-crafted for your teeth. Covers chips, stains, gaps, and minor crookedness. The most dramatic improvement in a single visit.' },
              { icon: '😁', title: 'Teeth Whitening', desc: 'Professional in-office whitening that delivers results in one appointment — far beyond what any over-the-counter product can achieve.' },
              { icon: '🦷', title: 'Invisalign / Clear Aligners', desc: 'Straighten your teeth without metal brackets. Invisible, removable, and comfortable. Most cases complete in 12–18 months.' },
              { icon: '🎨', title: 'Composite Bonding', desc: 'Tooth-colored resin applied to reshape, repair, or close gaps. Fast, affordable, and natural-looking.' },
              { icon: '🌟', title: 'Smile Makeovers', desc: 'A comprehensive plan combining multiple cosmetic treatments for a full transformation. We design your new smile digitally first so you can see the result before we start.' },
              { icon: '💎', title: 'Gum Contouring', desc: 'Reshape your gumline with laser dentistry for a more balanced, symmetrical smile — no cutting, no stitches.' },
            ].map(s => (
              <div key={s.title} className="service-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }} aria-hidden="true">{s.icon}</div>
                <h3 style={{ fontSize: '1rem' }}>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="cosmetic-who-heading">
        <div className="container container-sm" style={{ textAlign: 'center' }}>
          <span className="overline">Is This Right for You?</span>
          <h2 id="cosmetic-who-heading">You don't have to have a "perfect" reason</h2>
          <p className="lead" style={{ margin: '1rem auto 2.5rem' }}>
            If you find yourself hiding your smile in photos, covering your mouth when you laugh,
            or feeling self-conscious in conversations — that's reason enough. Cosmetic dentistry
            isn't vanity. It's confidence.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
            {['Stained or yellowed teeth', 'Chipped or cracked tooth', 'Gaps between teeth', 'Crooked or misaligned smile', 'Short or worn-down teeth', 'Uneven gumline', 'Old metal fillings showing', 'Lost confidence in your smile'].map(r => (
              <div key={r} className="credential-item" style={{ background: 'var(--off-white)', padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>{r}</div>
            ))}
          </div>
          <Link href="/contact#appointment" className="btn btn-primary btn-lg">
            Book a Smile Consultation
          </Link>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="cosmetic-cta-heading">
        <div className="container">
          <h2 id="cosmetic-cta-heading">See your new smile before we start.</h2>
          <p>We use digital smile design so you can preview your results at the consultation — zero commitment required.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact#appointment" className="btn btn-white btn-lg">📅 Book a Consultation</Link>
            <Link href="/smile-gallery" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)' }}>View Before & After Gallery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
