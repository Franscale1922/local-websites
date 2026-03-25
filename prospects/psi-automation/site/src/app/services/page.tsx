/**
 * SERVICES OVERVIEW PAGE
 * /services
 *
 * Lists all service categories with links to individual service pages.
 * Replace SITE_CONFIG with the prospect's actual data.
 */

export const metadata = {
  title: 'Services | [Business Name]',
  description: 'Full range of [service type] services for [location]. [Brief description].',
};

// ─── Configure for each prospect ──────────────────────────────────────────────
const SERVICES = [
  {
    slug: 'service-one',
    icon: '🔧',
    title: 'Service One',
    tagline: 'Short punchy tagline for this service.',
    desc: 'Two or three sentences describing this service and who needs it.',
  },
  {
    slug: 'service-two',
    icon: '⚡',
    title: 'Service Two',
    tagline: 'Short punchy tagline.',
    desc: 'Two or three sentences describing this service.',
  },
  {
    slug: 'service-three',
    icon: '🏠',
    title: 'Service Three',
    tagline: 'Short punchy tagline.',
    desc: 'Two or three sentences describing this service.',
  },
];

const PHONE = '(XXX) XXX-XXXX';
const PHONE_TEL = 'tel:+1XXXXXXXXXX';
// ──────────────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h1>Our Services</h1>
          <p className="page-hero-sub">
            [Brief overview sentence — what the business does and for whom.]
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid services-grid--3col">
            {SERVICES.map((s) => (
              <div key={s.slug} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h2 className="service-card-title">{s.title}</h2>
                <p className="service-card-tagline">{s.tagline}</p>
                <p className="service-card-desc">{s.desc}</p>
                <div className="service-card-actions">
                  <a href={`/services/${s.slug}`} className="btn btn-secondary">
                    Learn more →
                  </a>
                  <a href="/contact" className="btn btn-primary">
                    Get an estimate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Not Sure What You Need?</h2>
            <p>Call us — we&apos;ll ask a few questions and point you in the right direction. No pressure.</p>
          </div>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </div>
    </main>
  );
}
