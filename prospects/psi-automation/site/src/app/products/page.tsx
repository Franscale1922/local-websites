'use client';
import { useState, useMemo, useRef, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motors, getMotorsBySeries, getHPDisplay } from '../../data/motors';

type SeriesFilter = 'all' | 'CDV' | 'DV' | 'DVA' | 'DVAR';

// Inner component — uses useSearchParams, must be inside <Suspense>
function ProductsInner() {
  const searchParams = useSearchParams();
  const [series, setSeries] = useState<SeriesFilter>('all');
  const [search, setSearch] = useState(searchParams.get('q') ?? '');
  const motorGridRef = useRef<HTMLDivElement>(null);

  // Scroll to grid on mount if ?q= is set
  useEffect(() => {
    if (searchParams.get('q')) {
      setTimeout(() => motorGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }
  }, []);

  const handleSeriesSelect = (s: SeriesFilter) => {
    setSeries(s);
    setTimeout(() => {
      motorGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

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
    dvar: motors.filter(m => m.series === 'DVAR').length,
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

      {/* ── HERO SEARCH BANNER ── */}
      <section style={{background:'var(--navy)', padding:'32px 0', borderBottom:'4px solid var(--crimson)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:'24px', alignItems:'center'}}>
            <div>
              <div style={{fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)', marginBottom:'6px'}}>
                Model Search
              </div>
              <div style={{fontSize:'1rem', fontWeight:700, color:'white'}}>
                Know your model number? Type it below — DVA, DV6-118, DV10...
              </div>
            </div>
            <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
              {['DV6', 'DVA', 'DV10', 'DV20', 'CDV'].map(s => (
                <button
                  key={s}
                  onClick={() => { setSearch(s); motorGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  style={{
                    background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)',
                    borderRadius:'100px', padding:'5px 13px',
                    fontSize:'0.76rem', fontWeight:700, color:'rgba(255,255,255,0.8)',
                    cursor:'pointer', fontFamily:'var(--font-mono, monospace)',
                    transition:'all 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--crimson)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--crimson)'; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.8)'; }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <form
            style={{display:'flex', gap:'10px', marginTop:'16px'}}
            onSubmit={e => { e.preventDefault(); motorGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
          >
            <div style={{flex:1, display:'flex', alignItems:'center', gap:'10px', background:'white', borderRadius:'8px', padding:'12px 16px'}}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--steel)" strokeWidth="2.2" strokeLinecap="round" style={{flexShrink:0}}>
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Type a model number — e.g. DV6-191, DVA, DV10-336..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{border:'none', outline:'none', flex:1, fontSize:'0.95rem', fontWeight:500, color:'var(--text-primary)', background:'transparent', fontFamily:'var(--font-mono, monospace)'}}
                autoComplete="off"
              />
              {search && (
                <button type="button" onClick={() => setSearch('')} style={{background:'none', border:'none', cursor:'pointer', color:'var(--steel)', display:'flex', alignItems:'center', padding:'0 4px'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          {search && (
            <div style={{marginTop:'10px', fontSize:'0.82rem', color:'rgba(255,255,255,0.55)'}}>
              {filtered.length} motor{filtered.length !== 1 ? 's' : ''} match &ldquo;{search}&rdquo;
              {filtered.length === 0 && <span> — <a href="/contact" style={{color:'rgba(255,140,100,0.9)', fontWeight:600}}>Contact an engineer for custom options →</a></span>}
            </div>
          )}
        </div>
      </section>

      {/* Series Overview Cards — DV first (highest margin), DVA, CDV */}
      <section className="section section--tinted">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'20px', marginBottom:'0'}}>
            {[
              {
                series: 'DV',
                name: 'DV Series',
                desc: 'High-output unidirectional vane motors. 4", 6", 10", 20", 32", 42", and 62" frame sizes. Torque from 3 to 40,000 ft-lb at 30–90 PSI. Where maximum power matters.',
                count: counts.dv,
                badge: 'series-badge--dv',
                icon: '/icons/icon-dv-series.png',
                alt: 'DV series high-output vane air motor',
                featured: true,
              },
              {
                series: 'DVA',
                name: 'DVA Series',
                desc: 'Dual-speed vane motors with torque amplifier. Selectable low/high HP mode. Ideal for applications requiring variable speed without external control hardware.',
                count: counts.dva,
                badge: 'series-badge--dva',
                icon: '/icons/icon-dva-series.png',
                alt: 'DVA series dual-speed vane air motor',
                featured: false,
              },
              {
                series: 'CDV',
                name: 'CDV Series',
                desc: 'Bi-directional vane air motors. Face-mount design. Available in CDVB4 (3.5" dia) and CDV06 (6" dia) frames. From 1/4 HP at 6,200 RPM to high-torque configurations.',
                count: counts.cdv,
                badge: 'series-badge--cdv',
                icon: '/icons/icon-cdv-series.png',
                alt: 'CDV series bidirectional vane air motor',
                featured: false,
              },
            ].map(s => (
              <div
                key={s.series}
                className="product-card"
                style={{cursor:'pointer', position:'relative', ...(s.featured ? {border:'1.5px solid var(--crimson)'} : {})}}
                onClick={() => handleSeriesSelect(s.series as SeriesFilter)}
              >
                {s.featured && (
                  <span style={{
                    position:'absolute', top:'16px', right:'16px',
                    fontSize:'0.62rem', fontWeight:800, letterSpacing:'0.12em',
                    textTransform:'uppercase', color:'white',
                    background:'var(--crimson)', borderRadius:'100px',
                    padding:'3px 9px',
                  }}>Featured</span>
                )}
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px'}}>
                  <div className="product-card-icon">
                    <img src={s.icon} alt={s.alt} className="product-card-icon-img" />
                  </div>
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
      <section className="section" ref={motorGridRef}>
        <div className="container">

          {/* Filter bar */}
          <div className="filter-bar">
            <div className="filter-field">
              <label>Series</label>
              <select value={series} onChange={e => setSeries(e.target.value as SeriesFilter)}>
                <option value="all">All Series ({motors.length})</option>
                <option value="DV">DV — High output ({counts.dv})</option>
                <option value="DVA">DVA — Dual speed ({counts.dva})</option>
                <option value="DVAR">DVAR — Reversing dual speed ({counts.dvar})</option>
                <option value="CDV">CDV — Bi-directional ({counts.cdv})</option>
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

// Suspense wrapper — required by Next.js 14 when using useSearchParams
export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsInner />
    </Suspense>
  );
}
