import type { Metadata } from 'next';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
    .replace(/\bA\b/g, 'a')
    .replace(/\bAn\b/g, 'an')
    .replace(/\bThe\b/g, 'the')
    .replace(/\bOf\b/g, 'of')
    .replace(/\bFor\b/g, 'for')
    .replace(/\bAnd\b/g, 'and')
    .replace(/\bTo\b/g, 'to')
    .replace(/\bIn\b/g, 'in')
    .replace(/^./, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = formatSlug(params.slug);
  return {
    title: `${name} — FMS Digital Portfolio | FMS Franchise`,
    description: `Learn how FMS Franchise Marketing Systems helped ${name} build, grow, and scale their franchise system through expert development, sales, and digital marketing.`,
    openGraph: {
      title: `${name} | FMS Digital Portfolio`,
      description: `See how FMS helped ${name} achieve franchise growth. Full-service franchise development, sales, and marketing.`,
      url: `https://www.fmsfranchise.com/our-clients/fmsdigital-portfolio/${params.slug}`,
      images: [{ url: '/icons/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default function PortfolioClientPage({ params }: Props) {
  const name = formatSlug(params.slug);

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/our-clients">Our Clients</a><span>›</span>
            <a href="/our-clients/fmsdigital-portfolio">FMS Digital Portfolio</a><span>›</span>
            <span>{name}</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>FMS Digital Portfolio</span>
          <h1>{name}</h1>
          <p>A franchise growth case study — see how FMS helped this brand build a scalable franchise system.</p>
        </div>
      </div>

      {/* Content */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>

          {/* Intro */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '1.5px solid #e2e8f0', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>About {name}</h2>
            <p style={{ color: '#4a5568', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {name} partnered with Franchise Marketing Systems (FMS) to develop, refine, and scale their franchise program.
              FMS provided end-to-end support — from initial feasibility analysis and FDD preparation through franchise
              sales, territory strategy, and digital marketing execution.
            </p>
            <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
              This portfolio page is part of the FMS Digital portfolio — a collection of brands that have trusted FMS
              to build and grow their franchise systems. For full case study details, contact the FMS team.
            </p>
          </div>

          {/* Services Used */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '1.5px solid #e2e8f0', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>FMS Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                'Franchise Development',
                'Franchise Sales',
                'FDD Preparation',
                'Territory Mapping',
                'Digital Marketing',
                'Brand Strategy',
              ].map((svc) => (
                <div key={svc} style={{
                  padding: '1rem 1.25rem',
                  background: '#f8faf8',
                  borderRadius: '10px',
                  border: '1.5px solid #e2e8f0',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#1a3d20',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{ color: '#35a84a' }}>✓</span> {svc}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #1a3d20, #2a5530)',
            borderRadius: '16px',
            padding: '2.5rem',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e8b736' }}>
              Ready to Grow?
            </span>
            <h3 style={{ color: '#fff', margin: '0.75rem 0' }}>Build Your Franchise Success Story</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              FMS has helped 979+ brands franchise and scale. Schedule a free feasibility consultation to see
              what a full-service franchise development program looks like for your business.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Get a Free Consultation
              </a>
              <Link href="/our-clients/fmsdigital-portfolio" className="btn btn-outline-white">
                ← Back to Portfolio
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
