'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { motors, getMotorBySlug, getHPDisplay } from '../../../data/motors';

// Shared engineering drawing used for all motors (demo)
const DEMO_DRAWING = '/motor-drawing.png';

interface Props { params: { slug: string } }

export default function MotorDetailPage({ params }: Props) {
  const motor = getMotorBySlug(params.slug);
  if (!motor) notFound();

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const hp = getHPDisplay(motor.hp);
  const drawing = DEMO_DRAWING;

  const psiRows = [
    { psi: 80, data: motor.torque.psi80 },
    { psi: 60, data: motor.torque.psi60 },
    { psi: 30, data: motor.torque.psi30 },
  ];

  const allSeries = motors.filter(m => m.series === motor.series);
  const currentIdx = allSeries.findIndex(m => m.slug === motor.slug);
  const prevMotor = currentIdx > 0 ? allSeries[currentIdx - 1] : null;
  const nextMotor = currentIdx < allSeries.length - 1 ? allSeries[currentIdx + 1] : null;

  return (
    <>
      <Nav />

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(10,15,30,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(6px)',
            cursor: 'zoom-out',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: 'min(67vw, 1000px)',
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
            }}
          >
            {/* Header bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: '1px solid #e5e7eb',
              background: '#f9fafb',
            }}>
              <div>
                <span style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '0.95rem' }}>
                  {motor.model} — Engineering Drawing
                </span>
                <span style={{ marginLeft: '12px', fontSize: '0.78rem', color: '#6b7280' }}>
                  For illustration purposes — demo schematic
                </span>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '1.4rem', color: '#6b7280', lineHeight: 1,
                  padding: '4px 8px', borderRadius: '6px',
                }}
                aria-label="Close drawing"
              >
                ×
              </button>
            </div>
            <img
              src={drawing}
              alt={`${motor.model} engineering drawing`}
              style={{ width: '100%', display: 'block', objectFit: 'contain', maxHeight: '75vh' }}
            />
            {/* Footer bar */}
            <div style={{
              padding: '12px 20px',
              borderTop: '1px solid #e5e7eb',
              background: '#f9fafb',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                Click outside or press <kbd style={{ background: '#e5e7eb', borderRadius: '4px', padding: '1px 5px', fontSize: '0.75rem' }}>Esc</kbd> to close
              </span>
              <a
                href={drawing}
                download={`${motor.model}-drawing.png`}
                style={{ fontSize: '0.82rem', color: 'var(--crimson)', fontWeight: 600, textDecoration: 'none' }}
                onClick={e => e.stopPropagation()}
              >
                Download ↓
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── PAGE HERO ── */}
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
            <button
              onClick={() => setLightboxOpen(true)}
              className="btn btn-ghost"
            >
              View Engineering Drawing ⤢
            </button>
            <Link href="/contact" className="btn btn-primary" style={{marginLeft:'12px'}}>Request This Motor →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 300px', gap:'48px', alignItems:'start'}}>

            {/* Left: specs */}
            <div>
              <div className="eyebrow">Performance Data</div>
              <h2 style={{marginBottom:'32px'}}>Torque &amp; Speed Specifications</h2>

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

            {/* Right sidebar */}
            <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>

              {/* Engineering drawing card */}
              <div
                onClick={() => setLightboxOpen(true)}
                style={{
                  background: 'white',
                  border: '1.5px solid var(--border)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  cursor: 'zoom-in',
                  transition: 'box-shadow 0.25s, transform 0.25s',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.18)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  padding: '10px 14px',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: '#f9fafb',
                }}>
                  <span style={{fontSize:'0.75rem', fontWeight:700, color:'var(--steel)', textTransform:'uppercase', letterSpacing:'0.08em'}}>
                    Engineering Drawing
                  </span>
                  <span style={{fontSize:'0.72rem', color:'var(--crimson)', fontWeight:600}}>Click to expand ⤢</span>
                </div>
                <img
                  src={drawing}
                  alt={`${motor.model} engineering drawing`}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'contain',
                    padding: '12px',
                    display: 'block',
                    background: 'white',
                  }}
                />
                <div style={{
                  padding: '8px 14px',
                  borderTop: '1px solid var(--border)',
                  background: '#f9fafb',
                  fontSize: '0.72rem',
                  color: '#9ca3af',
                  textAlign: 'center',
                }}>
                  Dimensional reference — for demo purposes
                </div>
              </div>

              {/* Key specs */}
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

      {/* ── OFTEN ORDERED WITH ── */}
      <section className="section section--tinted">
        <div className="container">
          <div className="eyebrow">Accessories</div>
          <h2 style={{marginBottom:'8px'}}>Often Ordered With This Motor</h2>
          <p style={{color:'var(--steel)', marginBottom:'40px'}}>
            Complete your installation with PSI-recommended air system accessories.
          </p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'20px'}}>
            {[
              {
                title: 'Air Filters',
                desc: 'Inline particulate and coalescing filters. Protects vane life and seals. Recommended for any compressed air system driving a PSI motor.',
                cta: 'Request a Quote',
                href: '/contact?accessory=air-filter',
                available: true,
                icon: '🔵',
              },
              {
                title: 'Lubricators',
                desc: 'Adjustable oil mist lubricators for inline air line delivery. Ensures consistent vane lubrication in continuous-duty and high-cycle applications.',
                cta: 'Request a Quote',
                href: '/contact?accessory=lubricator',
                available: true,
                icon: '🟡',
              },
              {
                title: 'Safety Silencers',
                desc: 'Exhaust noise silencers for OSHA compliance in industrial environments. PSI-engineered for direct motor exhaust port mounting.',
                cta: 'Contact for Availability',
                href: '/contact?accessory=safety-silencer',
                available: false,
                icon: '🔴',
              },
            ].map(acc => (
              <div key={acc.title} style={{
                background: 'white',
                border: '1.5px solid var(--border)',
                borderRadius: '14px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
              >
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <h3 style={{fontSize:'1rem', color:'var(--navy)', margin:0}}>{acc.title}</h3>
                  {!acc.available && (
                    <span style={{fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--steel)', background:'var(--bg-light)', border:'1px solid var(--border)', borderRadius:'100px', padding:'3px 9px', whiteSpace:'nowrap'}}>
                      Contact for Avail.
                    </span>
                  )}
                </div>
                <p style={{fontSize:'0.85rem', color:'var(--steel)', lineHeight:1.65, margin:0, maxWidth:'none'}}>{acc.desc}</p>
                <Link
                  href={acc.href}
                  style={{
                    marginTop: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: acc.available ? 'var(--crimson)' : 'var(--steel)',
                    textDecoration: 'none',
                    paddingTop: '8px',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  {acc.cta} →
                </Link>
              </div>
            ))}
          </div>
          <p style={{fontSize:'0.78rem', color:'var(--steel-light)', marginTop:'20px', textAlign:'center'}}>
            Need a complete air system spec? <Link href="/contact" style={{color:'var(--crimson)', fontWeight:600}}>Talk to an engineer</Link> — we can spec filters, lubricators, and silencers for your exact motor and installation.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
