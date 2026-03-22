import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Automotive Manufacturing Air Motors | PSI Automation — High-Cycle Assembly Line',
  description: 'PSI Automation vane air motors for automotive assembly lines: high-cycle tooling, test rigs, fixture actuation. No thermal overload failure during production runs.',
};

export default function AutomotivePage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="container">
          <Link href="/applications" className="breadcrumb">← Industries <span>/ Automotive</span></Link>
          <div className="eyebrow eyebrow--light">🏭 Automotive Manufacturing</div>
          <h1>High-Cycle. No Overheating. No Line Stoppages.</h1>
          <p className="page-hero-sub">
            Automotive assembly demands motors that run continuously without thermal failure. Air motors don&apos;t overheat — period. When the assembly line demands 24/7 operation, PSI motors deliver it.
          </p>
          <div className="page-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Discuss Your Application →</Link>
            <Link href="/engineering" className="btn btn-ghost" style={{marginLeft:'12px'}}>Size Your Motor</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px'}}>
            <div>
              <div className="eyebrow">For Assembly Line Engineers</div>
              <h2>Why Automotive Manufacturers Choose Air</h2>
              <div style={{marginTop:'28px', display:'flex', flexDirection:'column', gap:'24px'}}>
                {[
                  { title:'Zero Thermal Overload Failures', desc:"Electric motors stall on a jammed fixture and burn out within seconds if not protected properly. An air motor stalls, holds torque, and restarts the instant the jam clears — with no thermal reset required." },
                  { title:'Continuous Duty Rated', desc:"PSI motors are designed for continuous 24/7 operation. No derating for duty cycle. No warm-up. No scheduled cool-down periods between operations." },
                  { title:'Rapid Reversibility (CDV Series)', desc:"Our CDV series bi-directional motors reverse instantly — no reversal delay, no braking hardware, no electrical reversing contactors. For positioning and fixturing applications, this simplifies cycle time dramatically." },
                  { title:'Low Maintenance, Field Serviceable', desc:"Vane replacement is the primary maintenance action — performed in hours by your maintenance technicians without sending motors to a repair depot. Keep a set of vanes in the supply cabinet; eliminate motor replacement as a cause of line stoppage." },
                ].map(item => (
                  <div key={item.title} style={{paddingLeft:'20px', borderLeft:'3px solid var(--orange)'}}>
                    <h4 style={{color:'var(--navy)', marginBottom:'6px'}}>{item.title}</h4>
                    <p style={{fontSize:'0.88rem', color:'var(--steel)', lineHeight:1.65, maxWidth:'none'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{color:'var(--navy)', marginBottom:'24px'}}>Automotive Applications</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'12px', marginBottom:'28px'}}>
                {['Assembly line belt and conveyors', 'Fixture clamping and positioning', 'End-of-line test dynamometers', 'Body panel pressing assist', 'Paint booth equipment drives', 'Welding fixture rotation', 'Part washing/cleaning system drives', 'Robotic assist tooling'].map(app => (
                  <div key={app} style={{display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px', background:'var(--bg-light)', borderRadius:'var(--radius-sm)', fontSize:'0.88rem', fontWeight:600, color:'var(--navy)'}}>
                    <span style={{color:'var(--orange)'}}>→</span>
                    {app}
                  </div>
                ))}
              </div>
              <div style={{background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'24px'}}>
                <h4 style={{color:'white', marginBottom:'8px'}}>Recommended: DV4 Through DV20 Series</h4>
                <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.86rem', maxWidth:'none', marginBottom:'16px'}}>Most assembly line applications fall within the DV4 (4" frame) through DV20 (20" frame) range depending on torque requirement. Our engineers size by stall torque requirement.</p>
                <Link href="/engineering" className="btn btn-primary btn-sm">Size Your Motor →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{textAlign:'center', maxWidth:'580px', margin:'0 auto'}}>
            <h2 style={{color:'white', marginBottom:'16px'}}>Automotive OEM & MRO Supply</h2>
            <p style={{color:'rgba(255,255,255,0.65)', marginBottom:'32px', fontSize:'0.95rem'}}>No minimum order for standard or custom motors. We supply both initial installation and replacement motors with consistent specifications.</p>
            <div className="btn-group" style={{justifyContent:'center'}}>
              <Link href="/contact" className="btn btn-primary btn-lg">Contact Engineering →</Link>
              <Link href="/products" className="btn btn-ghost btn-lg">Browse Catalog</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
