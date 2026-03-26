import type { Metadata } from 'next';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Emergency Dentistry Kalispell MT: Same-Day Dental Emergency | Summit Dental Group',
  description: 'Same-day dental emergency care in Kalispell, MT. Tooth pain, broken teeth, abscesses: call Summit Dental Group at (406) 752-4545. Dr. Vanzant answers fast.',
};

export default function EmergencyDentistryPage() {
  return (
    <>
      <SiteNav activePath="/services" alwaysScrolled />
      <main>
        <div className="page-hero" style={{ background: 'linear-gradient(135deg, #2a1a1a 0%, var(--color-primary-dark) 100%)' }}>
          <span className="eyebrow" style={{ color: '#e8a96a', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: '#e8a96a', display: 'block' }} />
            Emergency Dentistry
          </span>
          <h1>Dental Emergency? Call Us Right Now.</h1>
          <p>We make every effort to see emergency patients the same day. Don&apos;t wait it out. Dental emergencies get worse without treatment.</p>
          <div className="page-hero-ctas">
            <a href="tel:+14067524545" className="btn btn-primary" style={{ fontSize: '1rem', padding: '16px 32px' }}>📞 Call (406) 752-4545</a>
            <a href="/contact" className="btn btn-ghost-light">Request Online</a>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Common Dental Emergencies</span>
            <h2 style={{ marginBottom: '12px' }}>What We Treat: Same Day</h2>
            <p className="section-intro" style={{ marginBottom: '48px' }}>If you&apos;re experiencing any of these, call immediately. When in doubt, call anyway.</p>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {[
                { title: 'Severe Tooth Pain', desc: 'Toothache that&apos;s sharp, throbbing, or constant, especially with heat sensitivity. This often indicates infection or nerve involvement.' },
                { title: 'Cracked or Broken Tooth', desc: 'A visible crack or fracture, especially if it&apos;s causing pain when chewing or temperature sensitivity.' },
                { title: 'Knocked-Out Tooth', desc: 'Time is critical. Keep the tooth moist and call us immediately. Reimplantation is possible if you act fast.' },
                { title: 'Dental Abscess', desc: 'Swelling, fever, foul taste in your mouth, or a pimple-like bump on your gum. Dental abscesses require urgent care.' },
                { title: 'Lost Crown or Filling', desc: 'A lost restoration leaves the tooth vulnerable to damage and pain. We can typically see you same day.' },
                { title: 'Soft Tissue Trauma', desc: 'Cuts, lacerations, or injuries to the gums, cheeks, or lips that won&apos;t stop bleeding.' },
              ].map(s => (
                <div key={s.title} className="service-card" style={{ cursor: 'default' }}>
                  <h3>{s.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--slate">
          <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '16px' }}>What to Do in a Dental Emergency</h2>
            <div style={{ textAlign: 'left' }}>
              {[
                { step: '1', title: 'Call us immediately:', desc: '(406) 752-4545. We pick up. Tell us what happened and we\'ll triage your situation and get you in as fast as possible.' },
                { step: '2', title: 'For a knocked-out tooth:', desc: 'Pick it up by the crown (not the root). Rinse gently with water. Keep it moist: in milk, saline, or between your cheek and gum. Get to us within 30-60 minutes for best results.' },
                { step: '3', title: 'For swelling:', desc: 'Apply a cold pack to the outside of your cheek in 20-minute intervals. Do NOT place aspirin on the gum. This can cause tissue damage.' },
                { step: '4', title: 'For severe pain:', desc: 'Over-the-counter ibuprofen (if no contraindications) can reduce pain and inflammation until you see us. Call us first.' },
              ].map(s => (
                <div key={s.step} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <strong style={{ color: '#fff' }}>{s.title} </strong>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="tel:+14067524545" className="btn btn-primary" style={{ marginTop: '16px', fontSize: '1rem' }}>Call Now: (406) 752-4545</a>
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Don&apos;t Wait Out Dental Pain.</h2>
              <p>Dental emergencies don&apos;t resolve on their own. Waiting only makes them worse. Call us now.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
