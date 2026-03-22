import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Control Systems & Valves | PSI Automation',
  description: 'PSI Automation pneumatic control systems, valves, and regulators to complete your air motor installation.',
};

export default function ControlSystemsPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="container">
          <Link href="/products" className="breadcrumb">← Products <span>/ Control Systems</span></Link>
          <div className="eyebrow eyebrow--light">Pneumatic Control</div>
          <h1>Complete Your Air System</h1>
          <p className="page-hero-sub">
            Valves, regulators, and pneumatic control components to pair with your PSI motor installation. Sourced and recommended by the engineers who designed the motors.
          </p>
          <div className="page-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Discuss Your System →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'24px', marginBottom:'48px'}}>
            {[
              { icon:'🎛️', title:'Proportional Pressure Regulators', desc:'Variable pressure control provides proportional speed control over the motor output. No VFD required — adjust motor speed with a simple regulator knob or proportional control signal.' },
              { icon:'🔄', title:'4-Way Directional Valves', desc:'For bi-directional motor applications (CDV series), 4-way valves provide the reversing function with a single control input. Available in manual, pneumatic, and solenoid actuation.' },
              { icon:'🚫', title:'Speed Control / Flow Valves', desc:'Precision needle valves and flow control valves for fine-tuning motor speed independent of pressure. Critical for applications requiring consistent speed under variable load.' },
              { icon:'📊', title:'Pressure Gauges & Monitoring', desc:'Inline pressure gauges, switches, and transmitters for monitoring air supply and verifying motor operating conditions.' },
            ].map(c => (
              <div key={c.title} style={{padding:'28px', border:'1.5px solid var(--border)', borderRadius:'var(--radius-md)'}}>
                <div style={{fontSize:'1.5rem', marginBottom:'14px'}}>{c.icon}</div>
                <h3 style={{color:'var(--navy)', fontSize:'1.05rem', marginBottom:'10px'}}>{c.title}</h3>
                <p style={{fontSize:'0.86rem', color:'var(--steel)', lineHeight:1.6, maxWidth:'none'}}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'36px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'32px', flexWrap:'wrap'}}>
            <div>
              <h3 style={{color:'white', marginBottom:'8px'}}>System Design Assistance</h3>
              <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.9rem', maxWidth:'52ch'}}>Not sure which control components complement your PSI motor? Our engineers can specify a complete pneumatic system — motor, valves, regulators, and piping — for your application.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">Talk to an Engineer →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
