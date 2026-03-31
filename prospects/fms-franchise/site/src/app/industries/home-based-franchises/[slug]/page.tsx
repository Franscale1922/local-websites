import type { Metadata } from 'next';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

// Known home-based franchise clients
const CLIENTS: Record<string, { name: string; description: string }> = {
  'blue-moon-estate-sales-franchise': {
    name: 'Blue Moon Estate Sales',
    description: 'Blue Moon Estate Sales is a leading home-based franchise concept in the estate sales industry, providing professional estate sale services across the United States.',
  },
  'florida-power-light-fpl': {
    name: 'Florida Power & Light (FPL)',
    description: 'An energy sector franchise concept — FMS assisted in structuring the franchisable elements of this home-based service model.',
  },
  'gongchabobatea': {
    name: 'Gong Cha Boba Tea',
    description: 'Gong Cha is a leading global bubble tea franchise brand. FMS supported their North American franchise development and expansion strategy.',
  },
  'steri-clean': {
    name: 'Steri-Clean',
    description: 'Steri-Clean is a home-based biohazard remediation and crime scene cleanup franchise. FMS developed their franchise system and GTM strategy.',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const client = CLIENTS[params.slug];
  const name = client?.name ?? params.slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${name} — Home-Based Franchise | FMS Franchise`,
    description: `${name}: a home-based franchise opportunity developed with support from Franchise Marketing Systems (FMS). Learn about their franchise system.`,
  };
}

export default function HomeBasedFranchiseClientPage({ params }: Props) {
  const client = CLIENTS[params.slug];
  const name = client?.name ?? params.slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const description = client?.description ?? `${name} is a home-based franchise concept developed with support from Franchise Marketing Systems. FMS provided franchise development, sales, and marketing services.`;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <a href="/industries/home-based-franchises">Home-Based Franchises</a><span>›</span>
            <span>{name}</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Home-Based Franchise</span>
          <h1>{name}</h1>
          <p>A home-based franchise opportunity — developed and scaled with FMS Franchise Marketing Systems.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '1.5px solid #e2e8f0', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>About {name}</h2>
            <p style={{ color: '#4a5568', lineHeight: 1.8 }}>{description}</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e8b736' }}>
              Home-Based Franchise Opportunities
            </span>
            <h3 style={{ color: '#fff', margin: '0.75rem 0' }}>Explore Home-Based Franchise Options</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              FMS specializes in developing scalable home-based franchise systems. Schedule a free consultation to learn
              how franchising can work for your home-based business model.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Free Consultation
              </a>
              <Link href="/industries/home-based-franchises" className="btn btn-outline-white">
                ← Home-Based Franchises
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
