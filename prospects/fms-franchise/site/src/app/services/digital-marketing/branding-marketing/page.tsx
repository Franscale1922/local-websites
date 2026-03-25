import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Branding & Marketing — Brand Identity for Franchisors',
  description: 'FMS builds brand identity systems, franchise marketing kits, and co-op marketing programs that protect your brand at scale across your entire franchisee network.',
};

export default function BrandingMarketingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/services">Services</a><span>›</span>
            <a href="/services/digital-marketing">Digital Marketing</a><span>›</span>
            <span>Branding & Marketing</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Service</span>
          <h1>Franchise Branding & Marketing</h1>
          <p>Your brand is your most valuable franchise asset. FMS builds brand systems that give franchisees the tools to market locally while keeping your brand protected nationally.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Free Consultation</Link>
            <Link href="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Branding Services</span>
            <h2>What We Build for Franchisors</h2>
            <div className="divider" />
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { title: 'Brand Identity System', desc: 'Logo variations, color palette, typography, icon systems, and brand usage guidelines — built to survive franchisee reproduction across print, digital, and signage.' },
              { title: 'Franchise Brand Standards Guide', desc: 'A comprehensive 60+ page guide defining exactly how your brand should and should not be used — protecting you legally and protecting your customer experience.' },
              { title: 'Franchisee Marketing Kits', desc: 'Pre-approved social media templates, local print materials, vehicle wraps, email signatures, and digital assets franchisees can use immediately without design approval.' },
              { title: 'Co-Op Marketing Program Design', desc: 'A structured co-op fund program where franchisee contributions fund national brand campaigns — including program rules, fund management, and reporting.' },
              { title: 'Franchise Sales Collateral', desc: 'Franchise brochures, sales decks, investment overview one-pagers, and Discovery Day presentation materials that convert serious prospects.' },
              { title: 'Social Media Strategy', desc: 'Corporate channel strategy, franchisee local page guidelines, content calendar templates, and campaign frameworks that work at the national-local intersection.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '1.25rem', background: '#fff', borderRadius: '16px', padding: '1.75rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#3cb85e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 900, color: '#fff', flexShrink: 0, marginTop: '2px' }}>✓</div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Build a Brand That Scales?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Let's discuss what your brand needs to protect itself across 50+ franchisees and growing.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
