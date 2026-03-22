import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Petroleum & Oil/Gas Air Motors | PSI Automation — Up to 70 HP, Explosion-Safe',
  description: 'PSI Automation vane air motors for petroleum extraction, refining, and pipeline. Up to 70 HP. Inherently explosion-safe for classified hazardous areas.',
};

export default function PetroleumPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="container">
          <Link href="/applications" className="breadcrumb">← Industries <span>/ Petroleum</span></Link>
          <div className="eyebrow eyebrow--light">🛢️ Petroleum & Oil/Gas</div>
          <h1>70 HP. Explosion-Safe. Built for Extraction.</h1>
          <p className="page-hero-sub">
            The DV62 series delivers up to 70 HP — the industry ceiling for vane technology — in environments where gas vapors make electric motors impossible. No enclosure required. No spark risk.
          </p>
          <div className="page-hero-ctas">
            <Link href="/products/dv62-350r" className="btn btn-primary">View DV62 Series →</Link>
            <Link href="/contact" className="btn btn-ghost" style={{marginLeft:'12px'}}>Talk to an Engineer</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px'}}>
            <div>
              <div className="eyebrow">Why Air in Petroleum</div>
              <h2>The Only Safe Choice in Gas-Rich Environments</h2>
              <div style={{marginTop:'28px', display:'flex', flexDirection:'column', gap:'24px'}}>
                {[
                  { title:'Inherently Explosion-Proof', desc:'No electrical components means no ignition source. PSI motors operate in Class I Division 1 and Division 2 locations without any special enclosure — eliminating thousands of dollars in motor system cost per installation.' },
                  { title:'70 HP — Unmatched for Vane Technology', desc:'Our DV62 series produces 70 HP and 40,000 ft-lb stall torque. If your drilling or extraction application needs more power than any other vane motor manufacturer can provide, this is the motor.' },
                  { title:'Cold-Start Performance', desc:'Petroleum operations frequently involve cold environments — offshore platforms, arctic pipelines, cold winter startups. PSI motors start and perform at full rated output from -40°F without warm-up.' },
                  { title:'No Electrical Infrastructure Required', desc:"Wellheads and remote extraction locations often lack reliable electrical power but have air supply from compressors. Air motors allow full motorized operation from existing air infrastructure." },
                ].map(item => (
                  <div key={item.title} style={{paddingLeft:'20px', borderLeft:'3px solid var(--orange)'}}>
                    <h4 style={{color:'var(--navy)', marginBottom:'6px'}}>{item.title}</h4>
                    <p style={{fontSize:'0.88rem', color:'var(--steel)', lineHeight:1.65, maxWidth:'none'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{color:'var(--navy)', marginBottom:'24px'}}>Petroleum Applications</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'12px', marginBottom:'24px'}}>
                {[
                  'Wellhead pump drives',
                  'Drill pipe rotation auxiliary',
                  'Pipeline valve actuation',
                  'Tank farm agitation and mixing',
                  'Flare ignition systems',
                  'Vapor recovery compressor drives',
                  'Emergency shutdown actuation',
                  'Pump jack power',
                ].map(app => (
                  <div key={app} style={{display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px', background:'var(--bg-light)', borderRadius:'var(--radius-sm)', fontSize:'0.88rem', fontWeight:600, color:'var(--navy)'}}>
                    <span style={{color:'var(--orange)'}}>→</span>
                    {app}
                  </div>
                ))}
              </div>
              <div style={{background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'24px'}}>
                <h4 style={{color:'white', marginBottom:'8px'}}>DV62 Series — Industry Max</h4>
                <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.86rem', maxWidth:'none', marginBottom:'16px'}}>70 HP · 40,000 ft-lb stall torque · Available in R (right) and L (left) hand rotation. The only vane motor at this power level.</p>
                <Link href="/products/dv62-350r" className="btn btn-primary btn-sm">View DV62 Specs →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{textAlign:'center', maxWidth:'600px', margin:'0 auto'}}>
            <h2 style={{color:'white', marginBottom:'16px'}}>Specifying for Petroleum? Talk to an Engineer.</h2>
            <p style={{color:'rgba(255,255,255,0.65)', marginBottom:'32px', fontSize:'0.95rem'}}>ATEX requirements, explosion-class documentation, or high-torque custom configurations — we handle them all. No minimum order.</p>
            <div className="btn-group" style={{justifyContent:'center'}}>
              <Link href="/contact" className="btn btn-primary btn-lg">Contact Engineering →</Link>
              <Link href="/engineering" className="btn btn-ghost btn-lg">Size Your Motor</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
