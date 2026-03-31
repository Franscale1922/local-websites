import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Branding Services for Scalable Growth | FMS Digital',
  description: 'Franchise branding services that build strong brand identity, attract qualified franchisees, and support scalable franchise growth across multiple markets.',
};

const SERVICES = [
  { icon: '🎨', title: 'Brand Identity Systems', desc: 'Full brand identity packages: logos, color systems, typography, iconography, and usage guidelines — built for multi-location franchise consistency.' },
  { icon: '📋', title: 'Brand Standards Guide', desc: 'A comprehensive brand standards manual that ensures every franchisee location looks, feels, and communicates like the parent brand — protecting your brand equity at scale.' },
  { icon: '🖨️', title: 'Print & Collateral Design', desc: 'Brochures, franchise disclosure document covers, sales decks, mailers, signage, and marketing materials designed to convert serious franchise buyers.' },
  { icon: '📸', title: 'Photography & Visual Direction', desc: 'On-brand franchise photography direction and creative briefing — so every location produces content that meets brand standards.' },
  { icon: '🎬', title: 'Brand Video Production', desc: 'Franchise brand videos, franchisee testimonial videos, and \"Why Franchise?\" brand stories that convert website visitors into serious inquiries.' },
  { icon: '🌐', title: 'Digital Brand Assets', desc: 'Social media templates, digital ad creative, email templates, and branded landing pages — all designed for consistent franchise-wide deployment.' },
];

const PROCESS = [
  { step: '01', title: 'Brand Audit & Discovery', desc: 'We start with a deep audit of your existing brand positioning, competitive landscape, and franchise buyer psychology to identify the best positioning angles for your franchise story.' },
  { step: '02', title: 'Strategic Brand Positioning', desc: 'We define your brand voice, value proposition, and franchise opportunity story — the narrative that turns a curious prospect into a committed buyer.' },
  { step: '03', title: 'Identity Development', desc: 'Logo refinement or creation, color system, typography, and all visual brand elements designed for multi-location consistency across every market.' },
  { step: '04', title: 'Brand Standards Documentation', desc: 'We package everything into a brand standards guide your franchisees can follow without your oversight — enabling scale without brand drift.' },
  { step: '05', title: 'Rollout & Asset Delivery', desc: 'Full asset library delivery across all required formats — print, digital, social, and operational — plus on-demand design support as you grow.' },
];

export default function FranchiseBrandingPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 60%, #0d2b4e 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <a href="/fms-digital" style={{ color: 'rgba(255,255,255,0.6)' }}>FMS Digital</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Branding Services</span>
          </div>
          <span className="eyebrow" style={{ color: '#38bdf8' }}>FMS Digital Services</span>
          <h1 style={{ color: '#fff' }}>Franchise Branding Services for Scalable Growth</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '680px' }}>
            Strong franchise brands attract better franchisees, command higher fees, and retain owners longer. FMS builds brand identities that work across multiple locations, multiple markets, and multiple franchisee personalities — without losing what makes your brand special.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Brand Consultation</a>
            <Link href="/fms-digital" className="btn btn-outline-white btn-lg">FMS Digital Overview</Link>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What We Build</span>
            <h2>Franchise Branding Services</h2>
            <div className="divider" />
            <p>Every deliverable is purpose-built for franchising — designed to be replicated, maintained, and enforced across a growing network of independently operated locations.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Process</span>
            <h2>How FMS Builds Franchise Brands</h2>
            <div className="divider" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
            {PROCESS.map(p => (
              <div key={p.step} style={{ display: 'flex', gap: '1.5rem', background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ flexShrink: 0, width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #0d1b2a, #1a3d5c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 900, color: '#38bdf8' }}>{p.step}</div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand consistency callout */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-light">The Brand Consistency Problem</span>
            <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>Why Franchise Brands Drift — And How to Prevent It</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Brand drift is one of the most common — and costly — problems in franchising. When franchisee #3 uses a different logo variant than franchisee #22, when digital ads look like they're from three different companies, when your brand means different things in different markets — customers stop trusting the brand promise.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              FMS brand systems are built with franchisee usability in mind — clear enough that a new franchisee can follow the standards without calling you, comprehensive enough that every location delivers on your brand promise.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Brand Audit</a>
              <Link href="/our-clients" className="btn btn-outline-white btn-lg">See Our Clients</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Build a Brand That Scales With You</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A franchise brand isn't just a logo — it's a system. Let FMS build yours from the ground up, or strengthen what you already have.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Consultation</a>
            <Link href="/about-us/contact" className="btn btn-outline-white btn-lg">Contact FMS Digital</Link>
          </div>
        </div>
      </section>
    </>
  );
}
