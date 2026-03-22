import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Technical Resources | PSI Automation Vane Air Motor Documentation',
  description: 'Download schematics, access CAD files, read technical guides, and understand why air motors outperform electric in hazardous, extreme, and continuous-duty environments.',
};

const RESOURCES = [
  {
    category: 'Motor Selection',
    items: [
      { title: 'Motor Catalog — All 81 Models', desc: 'Complete spec tables for CDV, DV, and DVA series. HP, torque at 30/60/80 PSI, air consumption, weight.', href: '/products', cta: 'Browse Catalog' },
      { title: 'Interactive Motor Selector', desc: 'Filter by HP, torque, series, and pressure. Find the right motor in minutes.', href: '/engineering', cta: 'Open Selector' },
    ],
  },
  {
    category: 'Technical Guides',
    items: [
      { title: 'Why Air Motors vs Electric?', desc: 'A detailed technical comparison — stall behavior, thermal protection, explosion-class operation, power-to-weight, and field serviceability.', href: '/resources/why-air-motors', cta: 'Read Guide' },
      { title: 'Sizing Your Air Motor', desc: 'How to calculate torque requirement, select operating pressure, and verify running torque headroom for your application.', href: '/engineering', cta: 'Read Guide' },
    ],
  },
  {
    category: 'CAD & Engineering Files',
    items: [
      { title: '3D CAD Files (STEP, IGES, DWG)', desc: 'Download 3D models for our standard motor series via our 3DPublisher online catalog.', href: 'http://productpage.3dpublisher.net/3dproductpage/Qsvalidlogin.asp?guid=1076522027062', cta: 'Open 3D Catalog' },
      { title: 'Motor Schematics', desc: 'Dimensional drawings for every standard model. Accessible from each individual motor detail page.', href: '/products', cta: 'Browse Motors' },
    ],
  },
  {
    category: 'Custom Solutions',
    items: [
      { title: 'Custom Motor Engineering', desc: 'Need non-standard shaft, mounting, or gear ratio? Submit your specification and get an engineering response within 1 business day.', href: '/custom-solutions', cta: 'Submit Inquiry' },
      { title: 'Talk to an Application Engineer', desc: 'For complex sizing questions, custom applications, or anything outside the catalog — our engineers answer directly.', href: '/contact', cta: 'Contact Engineering' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ Resources</span></Link>
          <div className="eyebrow eyebrow--light">Technical Library</div>
          <h1>Engineering Resources</h1>
          <p className="page-hero-sub">
            Spec tables, CAD files, technical guides, and direct access to application engineers. Everything you need to specify and source the right air motor.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {RESOURCES.map(cat => (
            <div key={cat.category} style={{marginBottom:'56px'}}>
              <div style={{display:'flex', alignItems:'center', gap:'20px', marginBottom:'24px'}}>
                <div className="eyebrow" style={{marginBottom:0}}>{cat.category}</div>
                <div style={{flex:1, height:'1px', background:'var(--border)'}} />
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px'}}>
                {cat.items.map(item => (
                  <Link key={item.title} href={item.href} className="resource-card"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="resource-card-type">{cat.category}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="resource-card-arrow">{item.cta} →</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:'60px', alignItems:'center'}}>
            <div>
              <div className="eyebrow eyebrow--light">Can&apos;t Find What You Need?</div>
              <h2 style={{color:'white'}}>Ask an Engineer</h2>
              <p className="cta-band-sub">For custom specifications, unusual applications, or any technical question that a data table can&apos;t answer.</p>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
              <Link href="/contact" className="btn btn-primary btn-lg">Contact Engineering →</Link>
              <a href="tel:8003923602" className="btn btn-ghost btn-lg">800-392-3602</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
