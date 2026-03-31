import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refer a Client | Help Someone Franchise Their Business | FMS',
  description: 'Refer a client to FMS Franchise Marketing Systems. We provide the support, guidance and systems needed for a brand to become a successful franchisor.',
};

export default function ReferAClientPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Refer a Client</span>
          </div>
          <span className="eyebrow">Referral Program</span>
          <h1>Refer a Client — Help Someone Build Their Franchise</h1>
          <p style={{ maxWidth: '680px' }}>
            Know a business owner who's ready to franchise? Refer them to FMS and we'll do the rest. FMS provides the full development infrastructure — strategy, legal, marketing, sales, and ongoing support — to turn great businesses into scalable franchise systems.
          </p>
        </div>
      </div>

      {/* How it works */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">How It Works</span>
            <h2>The Referral Process</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem', maxWidth: '900px', margin: '3rem auto 0' }}>
            {[
              { step: '01', title: 'Make the Introduction', desc: 'Connect us with the business owner you\'re referring — by phone, email, or by filling out the form below with their contact information.' },
              { step: '02', title: 'We Handle the Rest', desc: 'Our team follows up within 24 hours, conducts a free franchise feasibility consultation, and walks them through the FMS development process.' },
              { step: '03', title: 'They Get Results', desc: 'If they\'re a fit for franchising, FMS develops their franchise system from scratch — legal, marketing, operations, training, and sales support included.' },
            ].map(s => (
              <div key={s.step} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '3rem', fontWeight: 900, color: '#c8a84b', lineHeight: 1, marginBottom: '1rem' }}>{s.step}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who to refer */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Who to Refer</span>
            <h2>The Right Business for Franchising</h2>
            <div className="divider" />
            <p>The best candidates for franchising are profitable businesses with a replicable system, a strong brand, and an owner who wants to scale without running every location personally.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.25rem', marginTop: '3rem', maxWidth: '860px', margin: '3rem auto 0' }}>
            {[
              { check: '✅', label: 'Profitable and proven — at least 1–2 years of operating history' },
              { check: '✅', label: 'A replicable business model that can be taught to a new owner' },
              { check: '✅', label: 'A recognizable brand with customer loyalty and repeat business' },
              { check: '✅', label: 'An owner motivated to grow without directly operating every unit' },
              { check: '✅', label: 'Sufficient margin to accommodate franchise fees and royalties' },
              { check: '✅', label: 'A concept with geographic portability — can succeed in multiple markets' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '0.75rem', background: '#fff', borderRadius: '12px', padding: '1.25rem 1.5rem', border: '1.5px solid #e2e8f0', alignItems: 'center' }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.check}</span>
                <span style={{ fontSize: '0.875rem', color: '#4a5568' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral form */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div className="section-header">
              <span className="eyebrow">Make a Referral</span>
              <h2>Refer Someone Today</h2>
              <div className="divider" />
              <p>Fill out the form below with your information and the details of the business owner you'd like to refer. Our team will reach out within 24 hours.</p>
            </div>

            <form style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ borderBottom: '1.5px solid #e2e8f0', paddingBottom: '1.25rem', marginBottom: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a7c59', marginBottom: '0.5rem' }}>Your Information</div>
              </div>
              {[
                { label: 'Your Name', id: 'your-name', placeholder: 'Full name', type: 'text' },
                { label: 'Your Email', id: 'your-email', placeholder: 'your@email.com', type: 'email' },
                { label: 'Your Phone', id: 'your-phone', placeholder: '(555) 000-0000', type: 'tel' },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>{f.label}</label>
                  <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #e2e8f0', borderRadius: '10px', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              ))}

              <div style={{ borderBottom: '1.5px solid #e2e8f0', paddingBottom: '1.25rem', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a7c59', marginBottom: '0.5rem' }}>Referral Information</div>
              </div>
              {[
                { label: 'Business Owner\'s Name', id: 'ref-name', placeholder: 'Full name', type: 'text' },
                { label: 'Business Name', id: 'ref-business', placeholder: 'Business name', type: 'text' },
                { label: 'Business Owner\'s Email', id: 'ref-email', placeholder: 'their@email.com', type: 'email' },
                { label: 'Business Owner\'s Phone', id: 'ref-phone', placeholder: '(555) 000-0000', type: 'tel' },
                { label: 'Industry / Type of Business', id: 'ref-industry', placeholder: 'e.g. Food & Beverage, Health & Fitness', type: 'text' },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>{f.label}</label>
                  <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #e2e8f0', borderRadius: '10px', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              ))}
              <div>
                <label htmlFor="ref-notes" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Additional Notes</label>
                <textarea id="ref-notes" name="ref-notes" rows={4} placeholder="Any additional context about the business or the owner's goals..." style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #e2e8f0', borderRadius: '10px', fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
              </div>
              <button type="submit" className="btn btn-gold" style={{ fontSize: '0.9rem', padding: '0.875rem', marginTop: '0.5rem', cursor: 'pointer', width: '100%', border: 'none' }}>
                Submit Referral
              </button>
              <p style={{ fontSize: '0.78rem', color: '#9ca3af', textAlign: 'center' }}>Our team will follow up within 24 business hours to connect with your referral.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Have Questions About the Referral Program?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>Contact the FMS team directly and we'll walk you through the referral process and how FMS supports the businesses you refer.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" className="btn btn-gold btn-lg">Contact FMS</Link>
            <Link href="/franchise-your-business" className="btn btn-outline-white btn-lg">Franchise My Business</Link>
          </div>
        </div>
      </section>
    </>
  );
}
