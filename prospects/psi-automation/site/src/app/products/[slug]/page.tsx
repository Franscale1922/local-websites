import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { motors, getMotorBySlug, getHPDisplay } from '../../../data/motors';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return motors.map(m => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Props) {
  const motor = getMotorBySlug(params.slug);
  if (!motor) return { title: 'Motor Not Found' };
  return {
    title: `${motor.model} — ${getHPDisplay(motor.hp)} Vane Air Motor | PSI Automation`,
    description: `Full specs for the PSI Automation ${motor.model}: ${getHPDisplay(motor.hp)}, stall torque ${motor.torque.psi80.stall} lbf·ft @ 80 PSI. Download schematic.`,
  };
}

export default function MotorDetailPage({ params }: Props) {
  const motor = getMotorBySlug(params.slug);
  if (!motor) notFound();

  const hp = getHPDisplay(motor.hp);
  const psiRows = [
    { psi: 80, data: motor.torque.psi80 },
    { psi: 60, data: motor.torque.psi60 },
    { psi: 30, data: motor.torque.psi30 },
  ];

  // Find adjacent motors for prev/next navigation
  const allSeries = motors.filter(m => m.series === motor.series);
  const currentIdx = allSeries.findIndex(m => m.slug === motor.slug);
  const prevMotor = currentIdx > 0 ? allSeries[currentIdx - 1] : null;
  const nextMotor = currentIdx < allSeries.length - 1 ? allSeries[currentIdx + 1] : null;

  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="container">
          <Link href="/products" className="breadcrumb">← Products <span>/ {motor.series} Series / {motor.model}</span></Link>
          <div style={{display:'flex', alignItems:'center', gap:'16px', marginBottom:'20px', flexWrap:'wrap'}}>
            <div className="eyebrow eyebrow--light" style={{marginBottom:0}}>
              {motor.series === 'CDV' ? 'Bi-directional' : motor.series === 'DVA' ? 'Dual-speed' : 'High-output'} Vane Air Motor
            </div>
            <span className={`series-badge series-badge--${motor.series.toLowerCase()}`}>{motor.series} Series</span>
          </div>
          <h1>{motor.model}</h1>
          <p className="page-hero-sub">
            {hp} rated output · {motor.airConsumption} air consumption · {motor.weight} · {motor.mounting}
          </p>
          <div className="page-hero-ctas">
            {motor.schematicImage && (
              <a href={motor.schematicImage} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Download Schematic ↓</a>
            )}
            {motor.cadUrl && (
              <a href={motor.cadUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{marginLeft:'12px'}}>3D CAD File ↓</a>
            )}
            <Link href="/contact" className="btn btn-primary" style={{marginLeft:'12px'}}>Request This Motor →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 280px', gap:'48px', alignItems:'start'}}>

            {/* Torque spec table */}
            <div>
              <div className="eyebrow">Performance Data</div>
              <h2 style={{marginBottom:'32px'}}>Torque & Speed Specifications</h2>

              <div className="spec-table-wrap">
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th>Input PSI</th>
                      <th>Stall Torque (lbf·ft)</th>
                      <th>Starting Torque (lbf·ft)</th>
                      <th>Running Torque (lbf·ft)</th>
                      <th>Max Speed (RPM)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {psiRows.map(row => {
                      if (row.data.stall === 0 && row.data.maxSpeed === 0) return null;
                      return (
                        <tr key={row.psi}>
                          <td className="td-model psi-row">{row.psi} PSI</td>
                          <td className="td-hp tabular">{row.data.stall > 0 ? row.data.stall : '—'}</td>
                          <td className="tabular">{row.data.starting > 0 ? row.data.starting : '—'}</td>
                          <td className="tabular">{row.data.running > 0 ? row.data.running : '—'}</td>
                          <td className="tabular">{row.data.maxSpeed > 0 ? row.data.maxSpeed.toLocaleString() : '—'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* General specs */}
              <div style={{marginTop:'40px'}}>
                <h3 style={{marginBottom:'20px', color:'var(--navy)'}}>General Specifications</h3>
                <div className="spec-table-wrap">
                  <table className="spec-table">
                    <tbody>
                      {[
                        ['Model Number', motor.model],
                        ['Series', `${motor.series} — ${motor.series === 'CDV' ? 'Bi-directional' : motor.series === 'DVA' ? 'Dual-speed (torque amplifier)' : 'High-output unidirectional'}`],
                        ['Rated HP', hp],
                        ['Air Consumption', motor.airConsumption],
                        ['Weight', motor.weight],
                        ['Shaft Diameter', motor.shaftDiameter],
                        ['Mounting', motor.mounting],
                        ['Reversible', motor.reversible ? 'Yes — bi-directional' : 'No — unidirectional'],
                      ].map(([label, value]) => (
                        <tr key={String(label)}>
                          <td style={{fontWeight:600, color:'var(--steel)', fontSize:'0.82rem'}}>{label}</td>
                          <td style={{fontWeight:600, color:'var(--navy)'}}>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
              {/* Schematic */}
              {motor.schematicImage && (
                <div className="schematic-wrap">
                  <img src={motor.schematicImage} alt={`${motor.model} schematic`} style={{maxHeight:'220px', objectFit:'contain'}} />
                </div>
              )}

              {/* Quick stats */}
              <div style={{background:'var(--bg-light)', borderRadius:'var(--radius-md)', padding:'24px'}}>
                <h4 style={{color:'var(--navy)', marginBottom:'16px', fontSize:'0.9rem', textTransform:'uppercase', letterSpacing:'0.08em'}}>Key Specs</h4>
                {[
                  { label: 'HP Rating', value: hp },
                  { label: 'Stall @ 80 PSI', value: motor.torque.psi80.stall > 0 ? `${motor.torque.psi80.stall} lbf·ft` : '—' },
                  { label: 'Max Speed @ 80 PSI', value: motor.torque.psi80.maxSpeed > 0 ? `${motor.torque.psi80.maxSpeed.toLocaleString()} RPM` : '—' },
                  { label: 'Air Use', value: motor.airConsumption },
                  { label: 'Weight', value: motor.weight },
                ].map(s => (
                  <div key={s.label} style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid var(--border)', fontSize:'0.84rem'}}>
                    <span style={{color:'var(--steel)'}}>{s.label}</span>
                    <span style={{fontWeight:700, color:'var(--navy)'}} className="tabular">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* RFQ card */}
              <div style={{background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'24px'}}>
                <h4 style={{color:'white', marginBottom:'8px'}}>Request This Motor</h4>
                <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.84rem', marginBottom:'16px', maxWidth:'none'}}>
                  Custom mounting, shaft, or gear ratio? No minimum order. Talk to an engineer.
                </p>
                <Link href={`/contact?model=${motor.model}`} className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>
                  Get a Quote →
                </Link>
                <a href={`tel:8003923602`} className="btn btn-ghost" style={{width:'100%', justifyContent:'center', marginTop:'8px'}}>
                  Call 800-392-3602
                </a>
              </div>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div style={{display:'flex', justifyContent:'space-between', marginTop:'64px', paddingTop:'32px', borderTop:'1px solid var(--border)'}}>
            {prevMotor ? (
              <Link href={`/products/${prevMotor.slug}`} className="btn btn-secondary">
                ← {prevMotor.model}
              </Link>
            ) : <span />}
            <Link href="/products" className="btn btn-ghost" style={{background:'var(--bg-light)', color:'var(--navy)', border:'none'}}>
              All {motor.series} Series
            </Link>
            {nextMotor ? (
              <Link href={`/products/${nextMotor.slug}`} className="btn btn-secondary">
                {nextMotor.model} →
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
