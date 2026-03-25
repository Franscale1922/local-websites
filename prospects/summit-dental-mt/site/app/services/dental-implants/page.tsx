import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dental Implants in Kalispell, MT | Summit Dental Group',
  description:
    'Dental implants that look, feel, and last like natural teeth. Dr. Mark Vanzant DMD places and restores implants in Kalispell, MT. TRICARE & most insurance accepted. Same-week consultations.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Dental Implants',
  description: 'Permanent tooth replacement using titanium implant posts and custom ceramic crowns. Kalispell, MT.',
  procedureType: 'Surgical',
  followUp: 'Implant crown placement at 3-6 months after osseointegration',
  provider: { '@id': 'https://summitdentalmt.com/#dentist' },
};

const faqs = [
  { q: 'How much do dental implants cost in Kalispell?', a: 'Dental implant costs vary depending on the number of implants, need for bone grafting, and the type of restoration. A single implant typically ranges from $3,000–$5,000 total (implant + crown). We provide detailed estimates at your consultation and offer financing through CareCredit.' },
  { q: 'Does TRICARE or insurance cover dental implants?', a: 'Some plans cover implants partially, especially when tooth loss is due to injury or medical necessity. We\'ll verify your specific coverage before your appointment and maximize your benefits.' },
  { q: 'How long do dental implants last?', a: 'With proper care, dental implants can last a lifetime. The titanium post fuses permanently with your jawbone, while the crown may need replacement after 15–25 years.' },
  { q: 'Am I a candidate for dental implants?', a: 'Most adults with adequate bone density and healthy gums are good candidates. We evaluate candidacy during a consultation that includes 3D imaging. Even patients who have been told they need bone grafting may still qualify.' },
  { q: 'How long is the implant process?', a: 'The full process — from implant placement to final crown — typically takes 4–6 months. The implant requires time to fuse with the bone (osseointegration). During healing, we provide a temporary restoration so you\'re never without teeth.' },
];

export default function DentalImplantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero" aria-labelledby="implants-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">›</span>
            <Link href="/services">Services</Link><span aria-hidden="true">›</span>
            <span aria-current="page">Dental Implants</span>
          </nav>
          <h1 id="implants-heading">Dental Implants in Kalispell, MT</h1>
          <p>Replace missing teeth permanently — with results that look, feel, and function exactly like the real thing.</p>
          <Link href="/contact#appointment" className="btn btn-primary btn-lg" style={{ marginTop: '1rem' }}>
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <section className="section section-cream" aria-labelledby="implants-what-heading">
        <div className="container">
          <div className="doctor-grid">
            <div>
              <span className="overline">The Gold Standard</span>
              <h2 id="implants-what-heading">Why implants are the best solution for missing teeth</h2>
              <p>Unlike bridges or dentures, dental implants replace the entire tooth — root and all. A titanium post is placed into your jawbone, where it fuses permanently (a process called osseointegration). A custom ceramic crown is then attached on top, indistinguishable from your natural teeth.</p>
              <p>The result: a restoration that doesn't shift, doesn't require adhesive, preserves your jawbone, and can last a lifetime with normal care.</p>

              <div className="doctor-credentials" style={{ marginTop: '1.5rem' }} role="list">
                {['Looks and feels like a natural tooth', 'Preserves jawbone — prevents deterioration', 'No impact on neighboring healthy teeth', 'Easy to care for — brush and floss normally', 'Can last a lifetime with proper maintenance', 'TRICARE may cover implants in qualifying cases'].map(c => (
                  <div key={c} className="credential-item" role="listitem">{c}</div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="/icons/dental-implant.png" alt="Dental implant illustration" width={400} height={400} style={{ borderRadius: 'var(--radius-lg)', maxWidth: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="implants-process-heading">
        <div className="container container-sm">
          <div className="section-header">
            <span className="overline">The Process</span>
            <h2 id="implants-process-heading">What to expect with dental implants</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { step: '01', title: 'Consultation & 3D imaging', desc: 'We\'ll evaluate your bone density, gum health, and overall candidacy using advanced 3D CBCT imaging. You\'ll receive a full treatment plan with clear costs before anything begins.' },
              { step: '02', title: 'Implant placement', desc: 'The titanium implant post is gently positioned in the jawbone under local anesthesia. Most patients report less discomfort than they expected. Sedation is available if needed.' },
              { step: '03', title: 'Healing (osseointegration)', desc: 'Over 3–6 months, the implant fuses permanently with your bone. A temporary restoration keeps your smile complete during this healing phase.' },
              { step: '04', title: 'Final crown placement', desc: 'Your custom, color-matched porcelain crown is attached to the implant. The result is a permanent, beautiful restoration that no one can tell apart from a natural tooth.' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'var(--off-white)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--teal)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.9rem', flexShrink: 0 }}>{s.step}</div>
                <div>
                  <h4 style={{ marginBottom: '0.4rem' }}>{s.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-off-white" aria-labelledby="implants-faq-heading">
        <div className="container container-sm">
          <div className="section-header">
            <span className="overline">FAQ</span>
            <h2 id="implants-faq-heading">Your implant questions, answered</h2>
          </div>
          <div className="faq-list">
            {faqs.map(f => (
              <div key={f.q} className="faq-item" style={{ padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--navy)', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', fontWeight: '600' }}>{f.q}</h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="implants-cta-heading">
        <div className="container">
          <h2 id="implants-cta-heading">Ready to replace that missing tooth — for good?</h2>
          <p>Same-week consultations available. We'll tell you exactly what's possible before you commit to anything.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact#appointment" className="btn btn-white btn-lg">📅 Request a Consultation</Link>
            <a href="tel:+14067524545" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)' }}>📞 (406) 752-4545</a>
          </div>
        </div>
      </section>
    </>
  );
}
