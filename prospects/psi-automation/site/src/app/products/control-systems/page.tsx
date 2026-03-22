import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Control Systems & Valves | PSI Automation',
  description: 'PSI Automation pneumatic control systems, valves, and regulators to complete your air motor installation.',
};

const CONTROL_ITEMS = [
  { icon:'/icons/icon-pressure-regulator.png', alt:'Pneumatic pressure regulator', title:'Proportional Pressure Regulators', desc:'Variable pressure control provides proportional speed control over the motor output. No VFD required — adjust motor speed with a simple regulator knob or proportional control signal.' },
  { icon:'/icons/icon-directional-valve.png', alt:'4-way directional control valve', title:'4-Way Directional Valves', desc:'For bi-directional motor applications (CDV series), 4-way valves provide the reversing function with a single control input. Available in manual, pneumatic, and solenoid actuation.' },
  { icon:'/icons/icon-flow-valve.png', alt:'Precision needle flow control valve', title:'Speed Control / Flow Valves', desc:'Precision needle valves and flow control valves for fine-tuning motor speed independent of pressure. Critical for applications requiring consistent speed under variable load.' },
  { icon:'/icons/icon-pressure-gauge.png', alt:'Industrial inline pressure gauge', title:'Pressure Gauges & Monitoring', desc:'Inline pressure gauges, switches, and transmitters for monitoring air supply and verifying motor operating conditions.' },
];

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

      <section className="section section--navy">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow eyebrow--light">Control Components</div>
            <h2 style={{color:'white'}}>Everything Your Installation Needs</h2>
            <p style={{color:'rgba(255,255,255,0.65)', marginTop:'16px'}}>
              A complete air motor system requires more than the motor. These components let you control speed, direction, and monitoring.
            </p>
          </div>
          <div className="why-grid">
            {CONTROL_ITEMS.map(c => (
              <div key={c.title} className="why-card">
                <div className="why-card-icon">
                  <img src={c.icon} alt={c.alt} className="why-card-icon-img" />
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:'60px', alignItems:'center'}}>
            <div>
              <div className="eyebrow eyebrow--light">System Design Assistance</div>
              <h2 style={{color:'white'}}>Not Sure Which Components You Need?</h2>
              <p className="cta-band-sub">Our engineers can specify a complete pneumatic system — motor, valves, regulators, and piping — for your exact application.</p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to an Engineer →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
