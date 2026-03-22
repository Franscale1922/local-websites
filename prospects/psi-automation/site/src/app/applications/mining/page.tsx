import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Mining Air Motors | PSI Automation — Field-Serviceable, ATEX-Ready',
  description: 'PSI Automation vane air motors for underground and surface mining. Field-serviceable without factory return. Explosion-safe for methane environments. Drill drives, conveyors, extraction.',
};

export default function MiningPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="container">
          <Link href="/applications" className="breadcrumb">← Industries <span>/ Mining</span></Link>
          <div className="eyebrow eyebrow--light">⛏️ Mining & Extraction</div>
          <h1>Rebuilt in the Field. Without a Factory.</h1>
          <p className="page-hero-sub">
            Underground and remote surface mining means motor failure is a logistics problem, not just a maintenance problem. PSI motors are designed to be rebuilt on-site by your technicians in hours — not shipped out and replaced over weeks.
          </p>
          <div className="page-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Discuss Your Application →</Link>
            <Link href="/products" className="btn btn-ghost" style={{marginLeft:'12px'}}>Browse Motors</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px'}}>
            <div>
              <div className="eyebrow">Built for Remote Operations</div>
              <h2>Motor Technology That Works Where Service Access Doesn&apos;t</h2>
              <div style={{marginTop:'28px', display:'flex', flexDirection:'column', gap:'24px'}}>
                {[
                  { title:'Field Serviceable — Zero Factory Return', desc:'Vane replacement — the primary maintenance action — is performed with hand tools by your technicians. A single technician can rebuild a PSI motor in 2–3 hours underground. Mines operating on 4-shift rotations maintain motors on-site with stock vanes.' },
                  { title:'Safe in Methane Atmospheres', desc:'Underground coal and natural gas mines contain methane — a highly ignitable gas. Electrical equipment in these environments requires costly permissible certification. PSI air motors have no electrical components and are inherently safe in methane-present atmospheres.' },
                  { title:'Cold and Humid Environments', desc:'Mine environments often combine cold temperatures and high humidity — two things that accelerate electrical motor failure. PSI motors are unaffected by high humidity, operate to -40°F, and are unaffected by water ingestion that would destroy electrical equipment.' },
                  { title:'High Torque at Low Speed — Ideal for Drills', desc:'Vane motors produce maximum torque at stall — exactly what drill drives need. Starting a drill against rock requires full starting torque, which air motors deliver without current surge or overheating risk.' },
                ].map(item => (
                  <div key={item.title} style={{paddingLeft:'20px', borderLeft:'3px solid var(--orange)'}}>
                    <h4 style={{color:'var(--navy)', marginBottom:'6px'}}>{item.title}</h4>
                    <p style={{fontSize:'0.88rem', color:'var(--steel)', lineHeight:1.65, maxWidth:'none'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{color:'var(--navy)', marginBottom:'24px'}}>Mining Applications</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'12px', marginBottom:'28px'}}>
                {['Drill drive systems', 'Ore conveyor drives', 'Ventilation equipment', 'Hoist and lift drives', 'Roof bolt installation equipment', 'Continuous miner components', 'Sump pump drives', 'Longwall equipment'].map(app => (
                  <div key={app} style={{display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px', background:'var(--bg-light)', borderRadius:'var(--radius-sm)', fontSize:'0.88rem', fontWeight:600, color:'var(--navy)'}}>
                    <span style={{color:'var(--orange)'}}>→</span>
                    {app}
                  </div>
                ))}
              </div>
              <div style={{background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'24px'}}>
                <h4 style={{color:'white', marginBottom:'8px'}}>High-Torque DV Series</h4>
                <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.86rem', maxWidth:'none', marginBottom:'16px'}}>Most mining applications require the DV20 through DV62 series for adequate torque. High-stall configurations are available for drill drives and conveyor starting loads.</p>
                <Link href="/engineering" className="btn btn-primary btn-sm">Size Your Motor →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{textAlign:'center', maxWidth:'580px', margin:'0 auto'}}>
            <h2 style={{color:'white', marginBottom:'16px'}}>Mining Motor Selection & Support</h2>
            <p style={{color:'rgba(255,255,255,0.65)', marginBottom:'32px', fontSize:'0.95rem'}}>For permissible documentation, methane-atmosphere certification questions, or custom drill-drive configurations — talk to our engineers directly.</p>
            <div className="btn-group" style={{justifyContent:'center'}}>
              <Link href="/contact" className="btn btn-primary btn-lg">Contact Engineering →</Link>
              <Link href="/custom-solutions" className="btn btn-ghost btn-lg">Custom Solutions</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
