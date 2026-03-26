import type { Metadata } from 'next';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Sedation Dentistry Kalispell MT: Anxiety-Free Dental Care | Summit Dental Group',
  description: 'Oral conscious sedation and nitrous oxide for anxious dental patients in Kalispell, MT. Summit Dental Group helps fearful patients get the care they need comfortably.',
};

export default function SedationDentistryPage() {
  return (
    <>
      <SiteNav activePath="/services" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            Sedation Dentistry
          </span>
          <h1>Nervous About Dentistry? You Don&apos;t Have to White-Knuckle It.</h1>
          <p>Sedation options that let you get the dental care you need: comfortably, without anxiety, at your own pace.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book a Sedation Appointment</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div>
                <span className="eyebrow">Who Sedation Helps Most</span>
                <h2>Sedation Is for More People Than You Think</h2>
                <p>You don&apos;t need to have a phobia to benefit from sedation dentistry. Our patients who choose sedation include people who:</p>
                <ul style={{ color: 'var(--color-neutral-mid)', lineHeight: '2', paddingLeft: '20px', margin: '16px 0 24px' }}>
                  <li>Have had a difficult dental experience in the past</li>
                  <li>Feel significant anxiety before or during dental visits</li>
                  <li>Have a very sensitive gag reflex</li>
                  <li>Need multiple procedures done at once and want to relax</li>
                  <li>Have difficulty getting numb from standard local anesthesia</li>
                  <li>Are undergoing a longer or more complex procedure</li>
                </ul>
                <p>You&apos;re not being dramatic, and you don&apos;t have to &ldquo;tough it out.&rdquo; Let us make this comfortable.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: 'Nitrous Oxide (Laughing Gas)', desc: 'A mild, rapidly-acting gas that produces a light sense of relaxation and euphoria. Takes effect within minutes, wears off within minutes of stopping. You can drive home afterward.' },
                  { title: 'Oral Conscious Sedation', desc: 'A prescription pill taken before your appointment that puts you in a deep state of relaxation. You remain conscious and can respond to instructions, but may not remember much of the procedure. A driver is required.' },
                ].map(opt => (
                  <div key={opt.title} className="why-card">
                    <h3>{opt.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.75)' }}>{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Tell Us You&apos;re Nervous. That&apos;s What We&apos;re Here For.</h2>
              <p>Mention your anxiety when you call or book online. We&apos;ll tailor your appointment from the start.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-primary">Book with Sedation Option</a>
              <a href="tel:+14067524545" className="btn btn-white">Call Us</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
