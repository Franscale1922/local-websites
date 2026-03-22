'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motors, getMotorsBySeries, getHPDisplay } from '../../data/motors';

type SeriesFilter = 'all' | 'CDV' | 'DV' | 'DVA';

export default function ProductsPage() {
  const [series, setSeries] = useState<SeriesFilter>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return motors.filter(m => {
      const seriesOk = series === 'all' || m.series === series;
      const searchOk = !search || m.model.toLowerCase().includes(search.toLowerCase());
      return seriesOk && searchOk;
    });
  }, [series, search]);

  const counts = {
    cdv: motors.filter(m => m.series === 'CDV').length,
    dv: motors.filter(m => m.series === 'DV').length,
    dva: motors.filter(m => m.series === 'DVA').length,
  };

  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ Products</span></Link>
          <div className="eyebrow eyebrow--light">Vane Air Motor Catalog</div>
          <h1>All Motor Series</h1>
          <p className="page-hero-sub">
            81 standard configurations — CDV, DV, and DVA series. 1/4 HP to 70 HP. Every motor field-serviceable, every variant configurable. No minimum order.
          </p>
          <div className="page-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Talk to an Engineer →</Link>
            <Link href="/engineering" className="btn btn-ghost" style={{marginLeft:'12px'}}>Size Your Motor</Link>
          </div>
        </div>
      </section>

      {/* Series Overview Cards */}
      <section className="section section--tinted">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'20px', marginBottom:'0'}}>
            {[
              {
                series: 'CDV',
                name: 'CDV Series',
                desc: 'Bi-directional vane air motors. Face-mount design. Available in CDVB4 (3.5" dia) and CDV06 (6" dia) frames. From 1/4 HP at 6,200 RPM to high-torque configurations.',
                count: counts.cdv,
                badge: 'series-badge--cdv',
                icon: '⚙️',
              },
              {
                series: 'DV',
                name: 'DV Series',
                desc: 'High-output unidirectional vane motors. 4", 6", 10", 20", 32", 42", and 62" frame sizes. Torque from 3 to 40,000 ft-lb at 30–90 PSI. Where maximum power matters.',
                count: counts.dv,
                badge: 'series-badge--dv',
                icon: '🔩',
              },
              {
                series: 'DVA',
                name: 'DVA Series',
                desc: 'Dual-speed vane motors with torque amplifier. Selectable low/high HP mode. Ideal for applications requiring variable speed without external control hardware.',
                count: counts.dva,
                badge: 'series-badge--dva',
                icon: '🎛️',
              },
            ].map(s => (
              <div
                key={s.series}
                className="product-card"
                style={{cursor:'pointer'}}
                onClick={() => setSeries(s.series as SeriesFilter)}
              >
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px'}}>
                  <div className="product-card-icon">{s.icon}</div>
                  <span className={`series-badge ${s.badge}`}>{s.count} Models</span>
                </div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <div className="product-card-arrow">Browse {s.series} Series →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Motor Grid */}
      <section className="section">
        <div className="container">

          {/* Filter bar */}
          <div className="filter-bar">
            <div className="filter-field">
              <label>Series</label>
              <select value={series} onChange={e => setSeries(e.target.value as SeriesFilter)}>
                <option value="all">All Series ({motors.length})</option>
                <option value="CDV">CDV — Bi-directional ({counts.cdv})</option>
                <option value="DV">DV — High output ({counts.dv})</option>
                <option value="DVA">DVA — Dual speed ({counts.dva})</option>
              </select>
            </div>
            <div className="filter-field">
              <label>Search Model</label>
              <input
                type="text"
                placeholder="e.g. DV6-118"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div style={{display:'flex', alignItems:'flex-end', paddingBottom:'2px'}}>
              <span style={{fontSize:'0.82rem', color:'var(--steel)', fontWeight:700, whiteSpace:'nowrap'}}>
                {filtered.length} motor{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Motor grid */}
          <div className="motors-grid">
            {filtered.map(m => {
              const ps80 = m.torque.psi80;
              return (
                <Link key={m.slug} href={`/products/${m.slug}`} className="motor-card">
                  <div className="motor-card-header">
                    <span className="motor-card-model">{m.model}</span>
                    <span className={`series-badge series-badge--${m.series.toLowerCase()}`}>{m.series}</span>
                  </div>
                  <div className="motor-card-body">
                    <div>
                      <span className="motor-card-hp tabular">{getHPDisplay(m.hp)}</span>
                      {' '}
                      <span className="motor-card-hp-label">rated output</span>
                    </div>
                    <div className="motor-card-specs">
                      {ps80.stall > 0 && (
                        <>
                          <div className="motor-card-spec">
                            <span className="motor-card-spec-label">Stall Torque @ 80 PSI</span>
                            <span className="motor-card-spec-value tabular">{ps80.stall} lbf·ft</span>
                          </div>
                          <div className="motor-card-spec">
                            <span className="motor-card-spec-label">Max Speed @ 80 PSI</span>
                            <span className="motor-card-spec-value tabular">{ps80.maxSpeed > 0 ? `${ps80.maxSpeed} rpm` : '—'}</span>
                          </div>
                        </>
                      )}
                      <div className="motor-card-spec">
                        <span className="motor-card-spec-label">Air Consumption</span>
                        <span className="motor-card-spec-value tabular">{m.airConsumption}</span>
                      </div>
                      <div className="motor-card-spec">
                        <span className="motor-card-spec-label">Weight</span>
                        <span className="motor-card-spec-value tabular">{m.weight}</span>
                      </div>
                    </div>
                  </div>
                  <div className="motor-card-footer">
                    <span style={{fontSize:'0.75rem', color:'var(--steel)'}}>View full specs</span>
                    <span className="motor-card-arrow">→</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{textAlign:'center', padding:'80px 0', color:'var(--steel)'}}>
              <div style={{fontSize:'3rem', marginBottom:'16px'}}>🔍</div>
              <p>No motors match your filter. <Link href="/contact" style={{color:'var(--orange)'}}>Contact an engineer</Link> — we may have a custom solution.</p>
            </div>
          )}
        </div>
      </section>

      {/* Also see */}
      <section className="section section--tinted">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px'}}>
            <Link href="/products/control-systems" className="resource-card">
              <div className="resource-card-type">Accessory Products</div>
              <h3>Control Systems & Valves</h3>
              <p>Valves, regulators, and pneumatic control components to complete your air system installation.</p>
              <div className="resource-card-arrow">Browse Control Systems →</div>
            </Link>
            <Link href="/products/safety-silencers" className="resource-card">
              <div className="resource-card-type">Accessory Products</div>
              <h3>Safety Silencers</h3>
              <p>Exhaust silencers for noise control and hearing protection in demanding industrial environments.</p>
              <div className="resource-card-arrow">Browse Silencers →</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:'60px', alignItems:'center'}}>
            <div>
              <div className="eyebrow eyebrow--light">Custom Solutions</div>
              <h2 style={{color:'white'}}>Don&apos;t See What You Need?</h2>
              <p className="cta-band-sub">Our engineers routinely develop custom configurations — non-standard shaft sizes, special mounting flanges, modified gear ratios — for zero minimum order.</p>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
              <Link href="/custom-solutions" className="btn btn-primary btn-lg">Explore Custom Solutions →</Link>
              <Link href="/contact" className="btn btn-ghost">Talk to an Engineer</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
