'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motors, getHPDisplay } from '../../data/motors';

type SortKey = 'hp' | 'stall80' | 'speed80';

export default function EngineeringPage() {
  const [minHp, setMinHp] = useState('');
  const [maxHp, setMaxHp] = useState('');
  const [seriesFilter, setSeriesFilter] = useState('all');
  const [minTorque, setMinTorque] = useState('');
  const [sort, setSort] = useState<SortKey>('stall80');

  const filtered = useMemo(() => {
    return motors
      .filter(m => {
        const hp = typeof m.hp === 'object' ? m.hp.high || m.hp.low : m.hp;
        const minHpN = parseFloat(minHp) || 0;
        const maxHpN = parseFloat(maxHp) || 999;
        const minTorqueN = parseFloat(minTorque) || 0;
        const hpOk = hp >= minHpN && hp <= maxHpN;
        const seriesOk = seriesFilter === 'all' || m.series === seriesFilter;
        const torqueOk = m.torque.psi80.stall >= minTorqueN;
        return hpOk && seriesOk && torqueOk;
      })
      .sort((a, b) => {
        if (sort === 'hp') {
          const ha = typeof a.hp === 'object' ? a.hp.high || a.hp.low : a.hp;
          const hb = typeof b.hp === 'object' ? b.hp.high || b.hp.low : b.hp;
          return ha - hb;
        }
        if (sort === 'stall80') return b.torque.psi80.stall - a.torque.psi80.stall;
        if (sort === 'speed80') return b.torque.psi80.maxSpeed - a.torque.psi80.maxSpeed;
        return 0;
      });
  }, [minHp, maxHp, seriesFilter, minTorque, sort]);

  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ Engineering</span></Link>
          <div className="eyebrow eyebrow--light">Motor Selection Tool</div>
          <h1>Size Your Motor</h1>
          <p className="page-hero-sub">
            Filter all 81 standard models by HP requirement, torque, series, and operating pressure. Every motor with full spec data — or talk directly to our application engineers for custom solutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          
          {/* How to size guide */}
          <div style={{background:'var(--bg-light)', borderRadius:'var(--radius-md)', padding:'32px 36px', marginBottom:'40px'}}>
            <h3 style={{color:'var(--navy)', marginBottom:'16px'}}>How to Select the Right Air Motor</h3>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'32px'}}>
              {[
                { step:'1.', title:'Define your torque requirement', desc:'Start with stall torque — the torque your application needs at zero speed. This is typically shown in lbf·ft. If unknown, calculate: Torque (ft-lb) = HP × 5252 / RPM.' },
                { step:'2.', title:'Select operating pressure', desc:'Our motors are rated at 30, 60, and 80 PSI. Higher pressure = more torque. Verify your air supply pressure and regulator capacity before selecting.' },
                { step:'3.', title:'Choose HQ (running torque)', desc:'Running torque is less than stall torque. Make sure your selected motor\'s running torque at your working speed exceeds your load torque by at least 20%.' },
              ].map(g => (
                <div key={g.step}>
                  <div style={{fontSize:'1.5rem', fontWeight:900, color:'var(--orange)', marginBottom:'8px'}}>{g.step}</div>
                  <h4 style={{color:'var(--navy)', marginBottom:'8px', fontSize:'0.95rem'}}>{g.title}</h4>
                  <p style={{fontSize:'0.84rem', color:'var(--steel)', lineHeight:1.6, maxWidth:'none'}}>{g.desc}</p>
                </div>
              ))}
            </div>
            <div style={{marginTop:'24px', paddingTop:'20px', borderTop:'1px solid var(--border)', display:'flex', alignItems:'center', gap:'16px'}}>
              <span style={{fontSize:'0.84rem', color:'var(--steel)'}}>Need help sizing? Our engineers do this daily.</span>
              <Link href="/contact" className="btn btn-primary btn-sm">Talk to an Engineer →</Link>
            </div>
          </div>

          {/* Filters */}
          <div className="filter-bar">
            <div className="filter-field">
              <label>Series</label>
              <select value={seriesFilter} onChange={e => setSeriesFilter(e.target.value)}>
                <option value="all">All Series</option>
                <option value="CDV">CDV — Bi-directional</option>
                <option value="DV">DV — High output</option>
                <option value="DVA">DVA — Dual speed</option>
              </select>
            </div>
            <div className="filter-field">
              <label>Min HP</label>
              <input type="number" placeholder="0" value={minHp} onChange={e => setMinHp(e.target.value)} min="0" step="0.25" />
            </div>
            <div className="filter-field">
              <label>Max HP</label>
              <input type="number" placeholder="70" value={maxHp} onChange={e => setMaxHp(e.target.value)} min="0" step="1" />
            </div>
            <div className="filter-field">
              <label>Min Stall Torque @ 80 PSI (lbf·ft)</label>
              <input type="number" placeholder="0" value={minTorque} onChange={e => setMinTorque(e.target.value)} min="0" step="1" />
            </div>
            <div className="filter-field">
              <label>Sort By</label>
              <select value={sort} onChange={e => setSort(e.target.value as SortKey)}>
                <option value="stall80">Stall Torque (High→Low)</option>
                <option value="hp">HP (Low→High)</option>
                <option value="speed80">Speed (High→Low)</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div style={{marginBottom:'20px', fontSize:'0.84rem', color:'var(--steel)', fontWeight:600}}>
            {filtered.length} motor{filtered.length !== 1 ? 's' : ''} match your criteria
          </div>

          {/* Full spec table */}
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Series</th>
                  <th>HP</th>
                  <th>Stall @ 30 PSI</th>
                  <th>Stall @ 60 PSI</th>
                  <th>Stall @ 80 PSI</th>
                  <th>Max Speed @ 80 PSI</th>
                  <th>Air (scfm)</th>
                  <th>Weight</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(m => (
                  <tr key={m.slug}>
                    <td className="td-model">
                      <Link href={`/products/${m.slug}`} style={{color:'var(--navy)', textDecoration:'none'}}>
                        {m.model}
                      </Link>
                    </td>
                    <td>
                      <span className={`series-badge series-badge--${m.series.toLowerCase()}`}>{m.series}</span>
                    </td>
                    <td className="td-hp tabular">{getHPDisplay(m.hp)}</td>
                    <td className="tabular">{m.torque.psi30.stall > 0 ? m.torque.psi30.stall : '—'}</td>
                    <td className="tabular">{m.torque.psi60.stall > 0 ? m.torque.psi60.stall : '—'}</td>
                    <td className="tabular td-highlight">{m.torque.psi80.stall > 0 ? m.torque.psi80.stall : '—'}</td>
                    <td className="tabular">{m.torque.psi80.maxSpeed > 0 ? m.torque.psi80.maxSpeed.toLocaleString() : '—'}</td>
                    <td className="tabular">{m.airConsumption}</td>
                    <td className="tabular">{m.weight}</td>
                    <td>
                      <Link href={`/products/${m.slug}`} className="btn btn-sm" style={{background:'var(--bg-mid)', color:'var(--navy)', borderRadius:'4px', fontSize:'0.75rem', padding:'6px 12px'}}>
                        Full Specs
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div style={{textAlign:'center', padding:'48px 0', color:'var(--steel)'}}>
              <p>No motors match your filters. <Link href="/contact" style={{color:'var(--orange)'}}>Talk to an engineer</Link> — custom configurations are available.</p>
            </div>
          )}

          {/* Custom CTA */}
          <div style={{marginTop:'48px', background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'36px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'32px', flexWrap:'wrap'}}>
            <div>
              <h3 style={{color:'white', marginBottom:'8px'}}>Need Something Outside These Specs?</h3>
              <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.9rem', maxWidth:'52ch'}}>Custom gear ratios, non-standard shafts, special mounting — we engineer custom configurations with no minimum order.</p>
            </div>
            <div style={{display:'flex', gap:'12px', flexShrink:0}}>
              <Link href="/custom-solutions" className="btn btn-primary">Custom Solutions →</Link>
              <Link href="/contact" className="btn btn-ghost">Talk to an Engineer</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
