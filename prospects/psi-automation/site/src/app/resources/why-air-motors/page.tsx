import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Why Air Motors vs Electric? Technical Comparison | PSI Automation',
  description: 'Detailed technical comparison of pneumatic vane air motors vs electric motors: stall behavior, thermal protection, explosion-proof classification, power-to-weight, and field serviceability.',
};

export default function WhyAirMotorsPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="container">
          <Link href="/resources" className="breadcrumb">← Resources <span>/ Why Air Motors</span></Link>
          <div className="eyebrow eyebrow--light">Technical Guide</div>
          <h1>Why Air Motors Outperform Electric in Demanding Environments</h1>
          <p className="page-hero-sub">
            A technical comparison for engineers specifying motor technology for hazardous, extreme temperature, high-cycle, or space-constrained applications.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth:'820px'}}>

          {[
            {
              icon: '/icons/icon-overheating.png', alt: 'Electric motor overheating',
              title: '1. Stall Behavior — Air Motors Win Definitively',
              body: `When an electric motor stalls, current spikes. The winding temperature rises rapidly. If the motor isn't protected, it burns. Even with thermal protection, a stalled electric motor represents a potential failure event requiring external intervention.

When a vane air motor stalls, it simply stops rotating — pressure equalizes across the vane faces and the motor holds torque without consuming additional energy. When the load clears, it restarts immediately without manual reset or cool-down.

This makes air motors the correct choice for any application where jamming or stall events are a regular occurrence: conveyors, mixing equipment, positioning systems, and actuators.`
            },
            {
              icon: '/icons/icon-explosion-proof.png', alt: 'ATEX explosion-proof',
              title: '2. Explosion-Proof Classification — No Special Enclosure Required',
              body: `Electric motors used in classified hazardous locations (Class I, II, or III; Division 1 or 2) require expensive explosion-proof enclosures, sealed conduit, and certified wiring practices. An EX-rated electric motor can cost 3–5× its standard equivalent.

Vane air motors have no electrical components — there's nothing to spark. They are inherently safe for use in classified atmospheres with no special enclosure. This makes them the preferred choice in petroleum refining, chemical processing, mining, and grain handling where ignitable vapors or dust may be present.

PSI's motors can be operated in environments where an electric motor would require a $4,000 enclosure for a $800 motor.`
            },
            {
              icon: '/icons/icon-power-to-weight.png', alt: 'Power to weight ratio',
              title: '3. Power-to-Weight Ratio — Critical in Mobile and Aerospace Applications',
              body: `A 5 HP electric motor typically weighs 35–55 lbs including its motor frame. A PSI vane air motor producing equivalent power weighs significantly less — often 60–75% of the electric equivalent. 

In aerospace applications, this weight difference directly impacts fuel consumption and payload capacity. In mobile equipment (marine, agricultural, construction), reduced drive system weight improves vehicle dynamics and reduces structural load.

The gap widens with increasing HP. Large electric motors become impractical for mobile applications; large air motors do not grow in weight proportionally.`
            },
            {
              icon: '/icons/icon-extreme-temp.png', alt: 'Extreme temperature range',
              title: '4. Temperature Extremes — Air Motors Operate Where Electric Fails',
              body: `Electric motors have temperature limitations on both ends. Cold temperatures stiffen lubricants and degrade insulation flexibility. High temperatures degrade winding insulation regardless of load — an electric motor sitting in a 250°F environment will have reduced insulation life even at no load.

PSI's vane air motors operate reliably from -40°F to +250°F in standard configuration, with high-temperature options available beyond that range. The cooling action of expanding compressed air creates additional thermal management — the motor actually runs cooler under load as air expansion absorbs heat.`
            },
            {
              icon: '/icons/icon-field-serviceable.png', alt: 'Field serviceable motor',
              title: '5. Field Serviceability — Reduce Total Cost of Ownership',
              body: `Electric motor failure typically means: remove motor, ship to a repair shop, wait 2–6 weeks, reinstall. For critical production equipment, this translates directly to lost production time.

Every PSI Automation motor is designed to be serviced in the field. Vane replacement — the most common maintenance action — can be completed by a trained technician in 2–3 hours without specialized tools. Our maintenance manual walks your team through the complete procedure.

The parts cost for a vane replacement is a fraction of motor replacement cost. Over a 10-year operating period, field-serviceable design typically results in 40–60% lower total maintenance costs in continuous-duty applications.`
            },
          ].map(section => (
            <div key={section.title} style={{marginBottom:'64px'}}>
              <div style={{width:'80px',height:'80px',background:'white',borderRadius:'14px',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px',boxShadow:'0 4px 16px rgba(0,0,0,0.12)',border:'1.5px solid var(--border)'}}><img src={section.icon} alt={section.alt} style={{width:'68px',height:'68px',objectFit:'contain'}} /></div>
              <h2 style={{fontSize:'1.4rem', marginBottom:'20px', color:'var(--navy)'}}>{section.title}</h2>
              {section.body.split('\n\n').map((para, i) => (
                <p key={i} style={{marginBottom:'16px', color:'var(--steel)', fontSize:'1rem', lineHeight:1.75, maxWidth:'none'}}>{para}</p>
              ))}
            </div>
          ))}

          {/* Comparison table */}
          <h2 style={{fontSize:'1.4rem', marginBottom:'24px', color:'var(--navy)'}}>Summary Comparison</h2>
          <div className="spec-table-wrap" style={{marginBottom:'64px'}}>
            <table className="spec-table">
              <thead>
                <tr>
                  <th style={{width:'40%'}}>Criterion</th>
                  <th>Air Motor</th>
                  <th>Electric Motor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Stall Behavior', '✅ Safe — holds torque, re-starts automatically', '⚠️ Requires overload protection, may burn out'],
                  ['Hazardous Locations', '✅ Inherently safe — no enclosure required', '⚠️ Requires expensive EX-rated enclosure'],
                  ['Power-to-Weight', '✅ Higher output per pound', '⚠️ Heavier at equivalent HP'],
                  ['Temperature Range', '✅ -40°F to 250°F standard', '⚠️ Insulation limits at extremes'],
                  ['Field Serviceability', '✅ Vane replacement in 2–3 hours', '⚠️ Typically requires factory/shop return'],
                  ['Variable Speed Control', '⚠️ Requires proportional valve or regulator', '✅ VFD provides easy speed control'],
                  ['Energy Efficiency', '⚠️ Air compression is ~25–35% efficient', '✅ Higher overall efficiency'],
                  ['Initial Cost', '✅ Lower motor cost', '⚠️ EX enclosure adds significant cost in classified areas'],
                ].map(([crit, air, elec]) => (
                  <tr key={String(crit)}>
                    <td style={{fontWeight:600, color:'var(--navy)'}}>{crit}</td>
                    <td style={{fontSize:'0.84rem'}}>{air}</td>
                    <td style={{fontSize:'0.84rem'}}>{elec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'36px', textAlign:'center'}}>
            <h3 style={{color:'white', marginBottom:'12px'}}>Not Sure Which Technology Fits Your Application?</h3>
            <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.9rem', marginBottom:'24px', maxWidth:'none'}}>Talk directly to an application engineer. We&apos;ll tell you honestly if an air motor is the right choice — or point you elsewhere if it isn&apos;t.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to an Engineer →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
