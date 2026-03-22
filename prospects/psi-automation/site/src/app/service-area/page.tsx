import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Where We Ship | PSI Automation — Nationwide Air Motor Manufacturer',
  description: 'PSI Automation ships vane air motors and custom motor configurations to customers across the US and internationally. Manufactured in Sandpoint, Idaho.',
};

const INDUSTRIES_SERVED = [
  { region: 'Pacific Northwest', examples: 'Boeing (aerospace), agricultural processing, marine' },
  { region: 'Gulf Coast', examples: 'Petroleum refining, petrochemical, offshore drilling' },
  { region: 'Midwest', examples: 'Automotive assembly, grain handling, agricultural' },
  { region: 'Northeast', examples: 'Chemical processing, pharmaceutical, defense' },
  { region: 'Southeast', examples: 'Mining, pulp & paper, general manufacturing' },
  { region: 'International', examples: 'Canada, Mexico, Europe (contact for freight details)' },
];

export default function ServiceAreaPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ Service Area</span></Link>
          <div className="eyebrow eyebrow--light">Coverage</div>
          <h1>Manufactured in Sandpoint, Idaho.<br />Shipped Everywhere.</h1>
          <p className="page-hero-sub">
            PSI Automation has no geographic footprint limitations. We ship standard and custom vane air motors to customers across the United States and internationally.
          </p>
          <div className="page-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Request a Quote →</Link>
            <a href="tel:8003923602" className="btn btn-ghost" style={{marginLeft:'12px'}}>800-392-3602</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'start'}}>
            <div>
              <div className="eyebrow">Where We Ship</div>
              <h2>No Territory Restrictions</h2>
              <p style={{marginTop:'20px', color:'var(--steel)', lineHeight:1.75}}>
                We manufacture to order from our facility at 3717 Omni Park Taxiway, Sandpoint, ID 83864. Standard catalog items ship via UPS and freight carriers nationwide. Custom configurations ship with the same reach.
              </p>

              <div style={{marginTop:'40px', display:'flex', flexDirection:'column', gap:'4px'}}>
                {INDUSTRIES_SERVED.map(r => (
                  <div key={r.region} style={{
                    display:'flex', gap:'16px', padding:'16px 18px',
                    background:'var(--bg-light)', borderRadius:'10px',
                    border:'1.5px solid var(--border)',
                  }}>
                    <div style={{
                      width:'10px', height:'10px', borderRadius:'50%',
                      background:'var(--crimson)', marginTop:'6px', flexShrink:0,
                    }} />
                    <div>
                      <div style={{fontWeight:700, color:'var(--navy)', fontSize:'0.9rem'}}>{r.region}</div>
                      <div style={{fontSize:'0.8rem', color:'var(--steel)', marginTop:'2px'}}>{r.examples}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{background:'var(--bg-light)', borderRadius:'var(--radius-lg)', padding:'40px', border:'1.5px solid var(--border)'}}>
                <h3 style={{color:'var(--navy)', marginBottom:'8px'}}>Factory Location</h3>
                <p style={{color:'var(--steel)', fontSize:'0.9rem', lineHeight:1.7, marginBottom:'24px'}}>
                  3717 Omni Park Taxiway<br />
                  Sandpoint, ID 83864<br /><br />
                  Mailing: PO Box 1487<br />
                  Sandpoint, ID 83864
                </p>
                <div style={{borderTop:'1px solid var(--border)', paddingTop:'20px'}}>
                  <a href="tel:8003923602" style={{display:'block', fontWeight:700, color:'var(--crimson)', fontSize:'1.1rem', textDecoration:'none', marginBottom:'6px'}}>800-392-3602</a>
                  <a href="mailto:sales@psiautomation.com" style={{display:'block', color:'var(--navy)', fontSize:'0.9rem', textDecoration:'none'}}>sales@psiautomation.com</a>
                </div>
              </div>

              <div style={{marginTop:'24px', background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'28px'}}>
                <h4 style={{color:'white', marginBottom:'8px'}}>International Orders</h4>
                <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.86rem', marginBottom:'16px', maxWidth:'none'}}>
                  We ship to Canada, Mexico, and select international markets. Contact us for freight arrangements, customs documentation, and lead time.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>
                  Contact for International Shipping →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:'60px', alignItems:'center'}}>
            <div>
              <div className="eyebrow eyebrow--light">Ready to Order?</div>
              <h2 style={{color:'white'}}>No Minimum Order. Ships Nationwide.</h2>
              <p className="cta-band-sub">Standard or custom. Single unit or production run. We build and ship from Sandpoint.</p>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
              <Link href="/products" className="btn btn-primary btn-lg">Browse Motor Catalog →</Link>
              <Link href="/custom-solutions" className="btn btn-ghost btn-lg">Custom Solutions</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
