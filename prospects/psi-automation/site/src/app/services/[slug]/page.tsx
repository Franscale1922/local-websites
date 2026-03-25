/**
 * INDIVIDUAL SERVICE PAGE
 * /services/[slug]
 *
 * One page per core service. Duplicate this file for each service.
 * Uses Next.js App Router dynamic routing.
 * Replace all [PLACEHOLDERS] with real content.
 */

import { notFound } from 'next/navigation';

// ─── Service data — define all services here ──────────────────────────────────
const SERVICES: Record<string, {
  title: string;
  metaTitle: string;
  metaDesc: string;
  hero: string;
  heroSub: string;
  icon: string;
  intro: string;
  bullets: string[];
  process: { step: string; desc: string }[];
  faq: { q: string; a: string }[];
}> = {
  'service-one': {
    title: 'Service One',
    metaTitle: 'Service One | [Business Name] — [City, State]',
    metaDesc: 'Expert [service] in [city]. [One sentence trust signal]. Licensed & insured. Call (XXX) XXX-XXXX.',
    hero: '[Punchy headline for this specific service.]',
    heroSub: '[One or two sentences — who this is for and what they get.]',
    icon: '🔧',
    intro: '[Two to three paragraph intro about this service — what it is, who needs it, why this business does it well.]',
    bullets: [
      '[Specific thing included in this service]',
      '[Another specific thing]',
      '[Another specific thing]',
      '[Another specific thing]',
    ],
    process: [
      { step: 'Call or Submit a Request', desc: 'Reach out by phone or the contact form. We respond same day on most requests.' },
      { step: 'We Come Out & Quote', desc: 'Free estimate on most jobs. We assess the scope and give you a clear number before starting.' },
      { step: 'We Do the Work Right', desc: 'Licensed team, code-compliant work, clean finish. We don\'t leave until it\'s done right.' },
    ],
    faq: [
      { q: 'How much does [service] cost?', a: '[Honest answer about pricing range and what affects cost.]' },
      { q: 'How long does [service] take?', a: '[Realistic timeline.]' },
      { q: 'Do I need a permit?', a: '[Honest answer for this service type + jurisdiction.]' },
    ],
  },
  // Add additional services here following the same pattern...
};

const PHONE = '(XXX) XXX-XXXX';
const PHONE_TEL = 'tel:+1XXXXXXXXXX';
// ──────────────────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES[params.slug];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES[params.slug];
  if (!service) notFound();

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="page-hero-icon">{service.icon}</div>
          <h1>{service.hero}</h1>
          <p className="page-hero-sub">{service.heroSub}</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-gold">Call {PHONE}</a>
          </div>
        </div>
      </section>

      {/* INTRO + WHAT'S INCLUDED */}
      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-body">
              <span className="eyebrow">The Service</span>
              <h2>{service.title}</h2>
              <div className="service-intro" dangerouslySetInnerHTML={{ __html: service.intro.replace(/\n/g, '<br/>') }} />
            </div>
            <div className="service-detail-included">
              <h3>What&apos;s Included</h3>
              <ul className="included-list">
                {service.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="included-check">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>
                Schedule This Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">The Process</span>
          <h2>How It Works</h2>
          <div className="process-grid">
            {service.process.map((p, i) => (
              <div key={i} className="process-step">
                <div className="process-icon-wrap">
                  <span className="process-num-badge">0{i + 1}</span>
                </div>
                <h3 className="process-title">{p.step}</h3>
                <p className="process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="section">
          <div className="container">
            <span className="eyebrow">Questions</span>
            <h2>Common Questions About {service.title}</h2>
            <div className="faq-list" style={{ marginTop: '36px' }}>
              {service.faq.map((f, i) => (
                <div key={i} className="faq-item-static">
                  <h3 className="faq-q-static">{f.q}</h3>
                  <p className="faq-a-static">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Ready to get started?</h2>
            <p>Free estimates on most jobs. Call us or fill in the form — we respond same day.</p>
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
