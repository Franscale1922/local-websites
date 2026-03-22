import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Aerospace Air Motors | PSI Automation — Power-to-Weight Critical Applications',
  description: 'PSI Automation vane air motors for aerospace: ground support equipment, fuel system testing, actuation systems. High power-to-weight, extreme temperature range.',
};

export default function AerospacePage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="container">
          <Link href="/applications" className="breadcrumb">← Industries <span>/ Aerospace</span></Link>
          <div className="eyebrow eyebrow--light">✈️ Aerospace Applications</div>
          <h1>When Every Pound of Motor Weight is a Pound of Payload Lost</h1>
          <p className="page-hero-sub">
            PSI vane air motors deliver higher power-to-weight than equivalent electric motors — critical in ground support equipment, fuel systems, and actuation where aircraft weight budgets are absolute.
          </p>
          <div className="page-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Discuss Your Application →</Link>
            <Link href="/products" className="btn btn-ghost" style={{marginLeft:'12px'}}>Browse Motors</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'start'}}>
            <div>
              <div className="eyebrow">Why Air Motors in Aerospace</div>
              <h2>Technical Advantages for Aviation Environments</h2>
              <div style={{marginTop:'28px', display:'flex', flexDirection:'column', gap:'24px'}}>
                {[
                  { title:'Higher Power-to-Weight', desc:'PSI vane motors produce more torque per pound than equivalent electric motors. Our CDV and DV series routinely outperform electric equivalents at 60–75% of the weight.' },
                  { title:'No Electrical Hazard Near Aviation Fuels', desc:'Vane air motors have no electrical components. Near aviation fuels or in any classified atmosphere, they operate without spark risk — no EX enclosure required.' },
                  { title:'-40°F to +250°F Operating Range', desc:"Aircraft ground support equipment operates in conditions from arctic cold to desert heat. PSI motors maintain full performance across this range without warm-up periods or thermal derating." },
                  { title:'Stall-Safe in Actuator Applications', desc:"When a positioning actuator stalls against a mechanical stop, an electric motor risks winding damage. A PSI air motor simply holds torque indefinitely — then restarts when the command changes." },
                ].map(item => (
                  <div key={item.title} style={{paddingLeft:'20px', borderLeft:'3px solid var(--orange)'}}>
                    <h4 style={{color:'var(--navy)', marginBottom:'6px'}}>{item.title}</h4>
                    <p style={{fontSize:'0.88rem', color:'var(--steel)', lineHeight:1.65, maxWidth:'none'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{color:'var(--navy)', marginBottom:'24px'}}>Common Aerospace Applications</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                {[
                  'Aircraft fuel system test stands',
                  'Ground support equipment (GSE) drives',
                  'Hydraulic pump drives for ground equipment',
                  'Aircraft engine ground start systems',
                  'Avionics test fixture actuation',
                  'Cargo handling system drives',
                  'Aircraft door actuation',
                  'Runway equipment power systems',
                ].map(app => (
                  <div key={app} style={{display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px', background:'var(--bg-light)', borderRadius:'var(--radius-sm)', fontSize:'0.88rem', fontWeight:600, color:'var(--navy)'}}>
                    <span style={{color:'var(--orange)'}}>→</span>
                    {app}
                  </div>
                ))}
              </div>
              <div style={{marginTop:'28px', background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'24px'}}>
                <h4 style={{color:'white', marginBottom:'8px'}}>Starting Motor Recommendation</h4>
                <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.86rem', maxWidth:'none'}}>Most aerospace light-duty applications start with the CDV series. High-output applications (engine start, high-torque actuation) typically use the DV10 through DV20 series.</p>
                <Link href="/engineering" className="btn btn-primary btn-sm" style={{marginTop:'16px'}}>Size Your Motor →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{textAlign:'center', maxWidth:'600px', margin:'0 auto'}}>
            <h2 style={{color:'white', marginBottom:'16px'}}>Aerospace Custom Requirements</h2>
            <p style={{color:'rgba(255,255,255,0.65)', marginBottom:'32px', fontSize:'0.95rem'}}>Non-standard mounting, special shaft configurations, or specific weight targets? We engineer custom configurations with no minimum order.</p>
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
