'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { motors, getHPDisplay } from '../data/motors';

// ── HERO MODEL SEARCH ──────────────────────────────────────────────────────────
function HeroModelSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase().replace(/[-\s]/g, '');
    return motors
      .filter(m => m.model.toLowerCase().replace(/[-\s]/g, '').includes(q))
      .slice(0, 6);
  }, [query]);

  const handleSelect = (slug: string) => router.push(`/products/${slug}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length === 1) handleSelect(results[0].slug);
    else if (query) router.push(`/products?q=${encodeURIComponent(query)}`);
  };

  const QUICK = ['DV6', 'DV10', 'DVA', 'DV20', 'CDV'];

  return (
    <div className="hero-card">
      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '4px' }}>
          Quick Model Search
        </div>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '4px', lineHeight: 1.2 }}>
          Know Your Model Number?
        </h3>
        <p className="hero-card-sub">
          Type a series or model — e.g. DVA, DV6-118 — and go straight to specs.
        </p>
      </div>

      {/* Search form */}
      <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          border: '2px solid var(--border)', borderRadius: '8px',
          padding: '10px 14px', background: 'white',
          transition: 'border-color 0.15s',
        }}
          onFocus={() => {}}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--steel)" strokeWidth="2.2" strokeLinecap="round" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="DVA, DV6-118, DV10..."
            style={{
              border: 'none', outline: 'none', flex: 1,
              fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)',
              fontFamily: 'var(--font-mono, "Courier New", monospace)',
              background: 'transparent',
            }}
            autoComplete="off"
            spellCheck={false}
            id="hero-model-search"
            aria-label="Search motor model number"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--steel)', display: 'flex', alignItems: 'center', padding: '0 2px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Live results dropdown */}
        {results.length > 0 && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
            background: 'white', border: '1.5px solid var(--border)',
            borderRadius: '10px', boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
            zIndex: 50, overflow: 'hidden',
          }}>
            {results.map(m => (
              <button
                key={m.slug}
                type="button"
                onClick={() => handleSelect(m.slug)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 14px', background: 'none', border: 'none',
                  cursor: 'pointer', textAlign: 'left', transition: 'background 0.12s',
                  borderBottom: '1px solid var(--border)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-light)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')}
              >
                <span className={`series-badge series-badge--${m.series.toLowerCase()}`} style={{ fontSize: '0.62rem', padding: '2px 7px', flexShrink: 0 }}>
                  {m.series}
                </span>
                <span style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.88rem', fontFamily: 'var(--font-mono, monospace)', flex: 1 }}>
                  {m.model}
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--steel)', whiteSpace: 'nowrap' }}>
                  {getHPDisplay(m.hp)}
                  {m.torque.psi80.maxSpeed > 0 ? ` · ${m.torque.psi80.maxSpeed.toLocaleString()} RPM` : ''}
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--steel-light)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            ))}
            {query.length >= 2 && (
              <button
                type="button"
                onClick={() => router.push(`/products?q=${encodeURIComponent(query)}`)}
                style={{ width: '100%', padding: '10px 14px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, color: 'var(--crimson)', textAlign: 'center' }}
              >
                View all results for &ldquo;{query}&rdquo; →
              </button>
            )}
          </div>
        )}

        {/* No results */}
        {query.length >= 2 && results.length === 0 && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
            background: 'white', border: '1.5px solid var(--border)',
            borderRadius: '10px', padding: '16px 14px', zIndex: 50,
            fontSize: '0.84rem', color: 'var(--steel)', textAlign: 'center',
          }}>
            No standard model matches &ldquo;{query}&rdquo;.{' '}
            <Link href="/contact" style={{ color: 'var(--crimson)', fontWeight: 700 }}>Ask an engineer →</Link>
          </div>
        )}
      </form>

      {/* Quick chips */}
      <div style={{ marginTop: '12px', display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '0.72rem', color: 'var(--steel-light)', marginRight: '2px' }}>Quick:</span>
        {QUICK.map(s => (
          <button key={s} type="button" onClick={() => { setQuery(s); inputRef.current?.focus(); }}
            style={{
              background: 'var(--bg-light)', border: '1px solid var(--border)',
              borderRadius: '100px', padding: '3px 10px',
              fontSize: '0.72rem', fontWeight: 700, color: 'var(--navy)',
              cursor: 'pointer', fontFamily: 'var(--font-mono, monospace)',
              transition: 'all 0.12s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--crimson)'; (e.currentTarget as HTMLButtonElement).style.color = 'white'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--crimson)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-light)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--navy)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'; }}
          >
            {s}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/products" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--steel)', textDecoration: 'none' }}>
          Browse all {motors.length} models →
        </Link>
        <a href="tel:8003923602" style={{ fontSize: '0.78rem', color: 'var(--steel)', textDecoration: 'none', fontWeight: 600 }}>
          📞 800-392-3602
        </a>
      </div>
    </div>
  );
}

// ── RFQ FORM (used in footer CTA band only) ────────────────────────────────────
function RFQForm({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: '', company: '', email: '', application: '' });
  const cls = dark ? 'contact-form-card' : 'hero-card';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!values.name.trim()) errs.name = 'Required';
    if (!values.email.trim()) errs.email = 'Required';
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(values.email)) errs.email = 'Enter a valid email';
    if (!values.application.trim()) errs.application = 'Please describe your requirement';
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const field = (key: keyof typeof values) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues(v => ({ ...v, [key]: e.target.value }));
      if (errors[key]) setErrors(er => ({ ...er, [key]: '' }));
    },
    style: errors[key] ? { borderColor: 'var(--crimson)' } as React.CSSProperties : undefined,
  });

  const errMsg = (key: string) => errors[key] ? (
    <span style={{ fontSize: '0.72rem', color: 'var(--crimson)', marginTop: '3px', display: 'block' }}>{errors[key]}</span>
  ) : null;

  return submitted ? (
    <div className={cls}>
      <div className="rfq-success">✓ Message received — an engineer will be in touch within 1 business day.</div>
    </div>
  ) : (
    <div className={cls}>
      <h3 style={dark ? {color:'white'} : {}}>Talk to an Application Engineer</h3>
      <p className="hero-card-sub" style={dark ? {color:'rgba(255,255,255,0.55)'} : {}}>Usually responds same business day.</p>
      <div className="form-field">
        <label>Name *</label>
        <input type="text" placeholder="Jane Smith" {...field('name')} />
        {errMsg('name')}
      </div>
      <div className="form-field">
        <label>Company</label>
        <input type="text" placeholder="Acme Industries" value={values.company} onChange={e => setValues(v => ({...v, company: e.target.value}))} />
      </div>
      <div className="form-field">
        <label>Email *</label>
        <input type="email" placeholder="jane@company.com" {...field('email')} />
        {errMsg('email')}
      </div>
      <div className="form-field">
        <label>Application / Requirement *</label>
        <textarea placeholder="Describe your motor requirement — HP range, environment, torque target, mounting type..." value={values.application} onChange={field('application').onChange} style={{minHeight:'80px', ...(errors.application ? {borderColor:'var(--crimson)'} : {})}} />
        {errMsg('application')}
      </div>
      <button className="btn btn-primary" style={{width:'100%', justifyContent:'center'}} onClick={handleSubmit}>
        Send to Engineering Team →
      </button>
      <p className="hero-card-note" style={dark ? {color:'rgba(255,255,255,0.4)'} : {}}>
        Or call us directly: <a href="tel:8003923602" style={dark ? {color:'rgba(255,255,255,0.7)'} : {}}><strong>800-392-3602</strong></a>
      </p>
    </div>
  );
}

const INDUSTRIES = [
  { icon: '/icons/icon-aerospace.png', label: 'Aerospace', href: '/applications/aerospace', desc: 'Power-to-weight critical applications', alt: 'Aerospace fighter jet illustration' },
  { icon: '/icons/icon-automotive.png', label: 'Automotive', href: '/applications/automotive', desc: 'High-cycle continuous operation', alt: 'Automotive engine chassis illustration' },
  { icon: '/icons/icon-chemical.png', label: 'Chemical', href: '/applications/chemical', desc: 'Explosion-proof, oil-free options', alt: 'Chemical processing plant illustration' },
  { icon: '/icons/icon-mining.png', label: 'Mining', href: '/applications/mining', desc: 'Field-serviceable, ATEX-ready', alt: 'Mining tunnel boring machine illustration' },
  { icon: '/icons/icon-petroleum.png', label: 'Petroleum', href: '/applications/petroleum', desc: '70 HP for drilling & extraction', alt: 'Oil pump jack illustration' },
];

const PRODUCTS = [
  { icon: '/icons/icon-vane-motor.png', title: 'Vane Air Motors', desc: 'CDV, DV, and DVA series — 1/4 to 70 HP. Custom gear ratios, shafts, and mounting. No minimum order.', href: '/products', alt: 'Vane air motor cross-section' },
  { icon: '/icons/icon-custom-solutions.png', title: 'Custom Solutions', desc: "Can't find what you need in our catalog? We engineer custom motors for your exact specification.", href: '/custom-solutions', alt: 'Custom engineering blueprint' },
  { icon: '/icons/icon-control-systems.png', title: 'Control Systems', desc: 'Valves, regulators, and pneumatic control components to complete your air system.', href: '/products/control-systems', alt: 'Pneumatic control panel' },
  { icon: '/icons/icon-safety-silencer.png', title: 'Safety Silencers', desc: 'NASA-cited exhaust silencers for noise and hearing protection in demanding environments.', href: '/products/safety-silencers', alt: 'Industrial safety silencer' },
];

const PILLARS = [
  { value: '70 HP', label: 'Maximum Output', desc: 'The industry ceiling for vane technology — where competitors stop, we operate. Our DV62 series produces 70 HP and 40,000 ft-lb torque.' },
  { value: '0', label: 'Minimum Order Qty', desc: 'Need one custom motor? We build it. No minimum quantity — ever. This eliminates the #1 objection engineers hear from their procurement teams.' },
  { value: '35+', label: 'Years Manufacturing', desc: 'Founded as Pneumatic Systems, Inc. in Sandpoint, Idaho. Built on diesel engine starter heritage — designed for shock, vibration, and extreme environments.' },
  { value: '∞', label: 'Field-Serviceable', desc: 'Every PSI motor is designed to be serviced in the field without returning to the factory. No downtime waiting for shipment.' },
];

const WHY_AIR = [
  { icon: '/icons/icon-overheating.png', alt: 'Electric motor overheating vs safe air motor', title: 'Zero Overheating Risk', desc: "Electric motors fail when overloaded or stalled — they overheat and burn out. Air motors stall safely and restart immediately. No thermal protection, no VFDs, no downtime." },
  { icon: '/icons/icon-explosion-proof.png', alt: 'ATEX explosion-proof certification', title: 'Inherently Explosion-Proof', desc: 'No electrical sparks — air motors are intrinsically safe for use in classified hazardous locations (chemical, petroleum, mining) without special expensive enclosures.' },
  { icon: '/icons/icon-power-to-weight.png', alt: 'Air motor vs electric motor power to weight comparison', title: 'Higher Power-to-Weight', desc: 'Air motors produce more torque per pound than equivalent electric motors. In aerospace and mobile equipment, every pound matters.' },
];

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const revealRef = useReveal();
  return (
    <div ref={revealRef as React.RefObject<HTMLDivElement>}>
      <Nav />

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <img src="/hero-motor.png" alt="PSI Automation custom vane air motor" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div>
              <div className="eyebrow eyebrow--light">Custom Pneumatic Vane Air Motors</div>
              <h1>When Electric Motors Can&apos;t Survive Your Environment, <em>We Build What Can.</em></h1>
              <p className="hero-sub">
                Custom vane air motors, 1/4 to 70 HP. Field-serviceable. No minimum order. Talk to an engineer today.
                Built in Sandpoint, Idaho for 35+ years.
              </p>
              <div className="btn-group hero-ctas">
                <Link href="/engineering" className="btn btn-primary btn-lg">Size Your Motor →</Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">Talk to an Engineer</Link>
              </div>
              <div className="hero-stats">
                {[
                  { value: '1/4–70', label: 'Horsepower Range' },
                  { value: '35+', label: 'Years Manufacturing' },
                  { value: '0', label: 'Minimum Order Qty' },
                  { value: '81+', label: 'Standard Models' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="hero-stat-value tabular">{s.value}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
              <HeroModelSearch />
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ICONS ── */}
      <div className="audience-section">
        <div className="audience-grid">
          {INDUSTRIES.map(ind => (
            <Link key={ind.label} href={ind.href} className="audience-item">
              <div className="audience-icon-wrap">
                <img src={ind.icon} alt={ind.alt} className="audience-icon-img" />
              </div>
              <div className="audience-label">{ind.label}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── TRUST STRIP ── */}
      <div className="trust-strip">
        <div className="trust-strip-inner">
          {[
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, text: '35+ Years Manufacturing' },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, text: '1/4 to 70 HP Range' },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, text: 'Custom — No Minimums' },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>, text: 'Field-Serviceable Design' },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, text: 'Sandpoint, Idaho USA' },
          ].map((item, i, arr) => (
            <div key={item.text} style={{display:'flex',alignItems:'center',gap:'24px'}}>
              <div className="trust-item">
                <span className="trust-icon">{item.icon}</span>
                <span className="trust-text">{item.text}</span>
              </div>
              {i < arr.length - 1 && <div className="trust-divider" />}
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT WE BUILD ── */}
      <section className="section">
        <div className="container">
          <div className="reveal section-head">
            <div className="eyebrow">Product Lines</div>
            <h2>Built for the Application<br />Not the Catalog</h2>
            <p>Our vane air motors run where electric motors can&apos;t — in hazardous atmospheres, extreme temperatures, and continuous-duty environments. Every unit is configurable for your exact requirement.</p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map(p => (
              <Link key={p.title} href={p.href} className="product-card">
                <div className="product-card-icon">
                  <img src={p.icon} alt={p.alt} className="product-card-icon-img" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="product-card-arrow">View Details →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── SIZE YOUR MOTOR CTA BLOCK ── */}
      <section className="section section--tinted">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:'60px', alignItems:'center'}}>
            <div>
              <div className="eyebrow">Motor Selection Tool</div>
              <h2>Know Your Torque Requirement?<br/>Find the Right Motor in Minutes.</h2>
              <p style={{marginTop:'16px', fontSize:'1.05rem', color:'var(--steel)'}}>
                Filter by HP range, torque, and operating pressure. Every standard motor model with full spec tables — or talk to our engineers if your application needs something custom.
              </p>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'12px', flexShrink:0}}>
              <Link href="/engineering" className="btn btn-primary btn-lg">Size Your Motor →</Link>
              <Link href="/contact" className="btn btn-secondary">Talk to an Engineer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AIR MOTORS VS ELECTRIC ── */}
      <section className="section section--navy">
        <div className="container">
          <div className="reveal section-head">
            <div className="eyebrow eyebrow--light">Technical Advantages</div>
            <h2 style={{color:'white'}}>Why Air Motors Outperform Electric in Demanding Environments</h2>
            <p style={{color:'rgba(255,255,255,0.65)', marginTop:'16px'}}>
              Three critical advantages that determine which technology belongs in your application.
            </p>
          </div>
          <div className="why-grid">
            {WHY_AIR.map(w => (
              <div key={w.title} className="why-card">
                <div className="why-card-icon">
                  <img src={w.icon} alt={w.alt} className="why-card-icon-img" />
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:'40px', textAlign:'center'}}>
            <Link href="/resources/why-air-motors" className="btn btn-ghost">Full Technical Comparison →</Link>
          </div>
        </div>
      </section>

      {/* ── WHY PSI — 4 PILLARS ── */}
      <section className="section">
        <div className="container">
          <div className="reveal section-head" style={{marginBottom:'48px'}}>
            <div className="eyebrow">Our Differentiators</div>
            <h2>What No Other Vane Motor Manufacturer Can Say</h2>
          </div>
        </div>
        <div className="pillars-grid">
          {PILLARS.map(p => (
            <div key={p.label} className="pillar">
              <div className="pillar-number tabular">{p.value}</div>
              <h3>{p.label}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESOURCES PREVIEW ── */}
      <section className="section section--tinted">
        <div className="container">
          <div className="reveal section-head">
            <div className="eyebrow">Technical Resources</div>
            <h2>Everything an Engineer Needs to Specify</h2>
          </div>
          <div className="resources-grid">
            {[
              { type: 'Motor Selection', title: 'Full Motor Catalog', desc: 'All 81 standard models with complete spec tables — torque, HP, air consumption, weight. Filter by series or operating requirement.', href: '/products' },
              { type: 'Technical Guide', title: 'Why Air Motors vs Electric', desc: 'Detailed comparison: stall behavior, thermal protection, explosion-proof operation, power-to-weight ratios, and maintenance requirements.', href: '/resources/why-air-motors' },
              { type: 'CAD / Drawings', title: '2D & 3D CAD Files', desc: 'Download STEP, IGES, and DWG files for our standard motor series via our 3DPublisher catalog.', href: '/resources' },
            ].map(r => (
              <Link key={r.title} href={r.href} className="resource-card">
                <div className="resource-card-type">{r.type}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <div className="resource-card-arrow">Access Resource →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA / CONTACT ── */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band-grid">
            <div>
              <div className="eyebrow eyebrow--light">Talk to an Application Engineer</div>
              <h2 style={{color:'white'}}>Your Application Is Specific. Our Engineering Response Will Be Too.</h2>
              <p className="cta-band-sub">
                We don&apos;t sell from a catalog — we engineer from your requirement. Tell us what you need and an application engineer responds directly. No sales funnel, no waiting room.
              </p>
              <div className="contact-info">
                <div className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg>
                  </span>
                  <a href="tel:8003923602" style={{color:'white', fontWeight:700}}>800-392-3602 (Toll Free)</a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <a href="mailto:sales@psiautomation.com" style={{color:'white'}}>sales@psiautomation.com</a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span style={{color:'rgba(255,255,255,0.7)'}}>3717 Omni Park Taxiway, Sandpoint, ID 83864</span>
                </div>
              </div>
            </div>
            <RFQForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
