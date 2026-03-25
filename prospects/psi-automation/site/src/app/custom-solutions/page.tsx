'use client';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function RFQForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [vals, setVals] = useState({ name: '', email: '', requirement: '' });

  const validate = () => {
    const errs: Record<string, boolean> = {};
    if (!vals.name.trim()) errs.name = true;
    if (!vals.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(vals.email)) errs.email = true;
    if (!vals.requirement.trim()) errs.requirement = true;
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const errBorder: React.CSSProperties = { borderColor: 'var(--crimson)' };
  const errMsg = <span style={{ fontSize: '0.72rem', color: 'var(--crimson)', marginTop: '3px', display: 'block' }}>Required</span>;

  if (submitted) return (
    <div style={{
      background:'#f0fdf4', border:'1.5px solid #86efac',
      borderRadius:'10px', padding:'28px 24px',
      color:'#166534', fontWeight:600, fontSize:'0.9rem',
      display:'flex', alignItems:'center', gap:'12px',
    }}>
      <span style={{fontSize:'1.4rem'}}>✓</span>
      Your inquiry has been received. An engineer will respond within 1 business day.
    </div>
  );
  return (
    <div>
      {[
        { label: 'Name *', key: 'name', type: 'text', ph: 'Your name' },
        { label: 'Company', key: 'company', type: 'text', ph: 'Company name' },
        { label: 'Email *', key: 'email', type: 'email', ph: 'your@email.com' },
        { label: 'Phone', key: 'phone', type: 'tel', ph: '(optional)' },
      ].map(f => (
        <div className="form-field" key={f.key}>
          <label>{f.label}</label>
          <input
            type={f.type} placeholder={f.ph}
            style={errors[f.key] ? errBorder : undefined}
            value={f.key === 'name' ? vals.name : f.key === 'email' ? vals.email : undefined}
            onChange={e => {
              if (f.key === 'name') setVals(v => ({...v, name: e.target.value}));
              if (f.key === 'email') setVals(v => ({...v, email: e.target.value}));
              if (errors[f.key]) setErrors(er => ({...er, [f.key]: false}));
            }}
          />
          {errors[f.key] && errMsg}
        </div>
      ))}
      <div className="form-field">
        <label>Describe Your Custom Requirement *</label>
        <textarea
          placeholder="HP range, torque target, operating pressure, environment (hazardous/explosive?), mounting style, shaft requirements, quantity, timeline..."
          style={{minHeight:'110px', ...(errors.requirement ? errBorder : {})}}
          value={vals.requirement}
          onChange={e => {
            setVals(v => ({...v, requirement: e.target.value}));
            if (errors.requirement) setErrors(er => ({...er, requirement: false}));
          }}
        />
        {errors.requirement && errMsg}
      </div>
      <button className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'4px'}} onClick={handleSubmit}>
        Submit Custom Inquiry →
      </button>
      <p style={{fontSize:'0.72rem', color:'var(--steel-light)', textAlign:'center', marginTop:'12px'}}>
        No minimum order. We build prototypes as small as one unit.
      </p>
    </div>
  );
}

const CUSTOM_CAPABILITIES = [
  { icon: '/icons/icon-shaft-config.png', alt: 'Custom shaft configurations', title: 'Modified Shaft Configurations', desc: 'Non-standard shaft diameters, lengths, keyways, splines, and thread forms. If you can draw it, we can manufacture it.' },
  { icon: '/icons/icon-mounting-flange.png', alt: 'Custom mounting flanges', title: 'Custom Mounting Flanges', desc: 'SAE, metric, and proprietary bolt patterns. We match your existing hardware footprint — no adapter plates required.' },
  { icon: '/icons/icon-gear-ratio.png', alt: 'Modified gear ratios', title: 'Modified Gear Ratios', desc: 'Need 1,200 RPM instead of 6,200? We offer integrated gearbox options to hit your exact output speed without sacrificing torque.' },
  { icon: '/icons/icon-extreme-temp.png', alt: 'Extreme temperature options', title: 'Extreme Temperature Options', desc: 'Standard motors operate from -40°F to +250°F. We offer high-temperature vane materials and seal compounds for even more demanding applications.' },
  { icon: '/icons/icon-oil-free.png', alt: 'Oil-free clean environment motor', title: 'Oil-Free / Clean Environments', desc: 'Semiconductor, food processing, and clean-room compatible configurations. No lubricant injection to your air supply.' },
  { icon: '/icons/icon-high-cycle.png', alt: 'High-cycle continuous duty motor', title: 'High-Cycle / Continuous Duty', desc: 'Motors designed specifically for millions of cycles or 24/7 continuous operation. Different vane materials and bearing specifications.' },
];

export default function CustomSolutionsPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ Custom Solutions</span></Link>
          <div className="eyebrow eyebrow--light">Custom Engineering</div>
          <h1>Your Application Defines the Motor. <br/>We Build It.</h1>
          <p className="page-hero-sub">
            No minimum order. No catalog constraint. Describe your requirement and our engineers develop a solution — often within days, not months.
          </p>
          <div className="page-hero-ctas">
            <Link href="#rfq" className="btn btn-primary">Submit Custom Inquiry →</Link>
            <a href="tel:8003923602" className="btn btn-ghost" style={{marginLeft:'12px'}}>Call 800-392-3602</a>
          </div>
        </div>
      </section>

      {/* Custom capabilities block */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Engineering Capabilities</div>
            <h2>What We Can Modify or Build from Scratch</h2>
            <p>These are the most common custom requests — but if you don&apos;t see your requirement here, ask. We engineer from specification, not from existing tooling constraints.</p>
          </div>
          <div className="why-grid">
            {CUSTOM_CAPABILITIES.map(c => (
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

      {/* Process steps */}
      <section className="section section--tinted">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">How It Works</div>
            <h2>From Requirement to Ready-to-Ship</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'2px', background:'var(--border)'}}>
            {[
              { step:'01', title:'Describe Your Requirement', desc:'Submit via our inquiry form or call us directly. Tell us HP range, torque target, environment, mounting, and speed.' },
              { step:'02', title:'Engineering Review', desc:'An application engineer reviews your spec within 1 business day and proposes a solution — standard or custom.' },
              { step:'03', title:'Quote & Approval', desc:'We send a detailed quote with lead time. No minimum order for any quantity, including prototype singles.' },
              { step:'04', title:'Manufacture & Ship', desc:'Custom motors are typically manufactured in Sandpoint, Idaho and shipped with full documentation.' },
            ].map(s => (
              <div key={s.step} style={{background:'white', padding:'40px 28px'}}>
                <div style={{fontSize:'2.4rem', fontWeight:900, color:'var(--orange)', marginBottom:'16px', fontVariantNumeric:'tabular-nums'}}>{s.step}</div>
                <h3 style={{color:'var(--navy)', fontSize:'1rem', marginBottom:'10px'}}>{s.title}</h3>
                <p style={{fontSize:'0.84rem', color:'var(--steel)', lineHeight:1.6, maxWidth:'none'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ section — split panel */}
      <section id="rfq" style={{background:'var(--crimson-dark)', padding:'0'}}>
        <div style={{
          maxWidth:'var(--max-width)',
          margin:'0 auto',
          display:'grid',
          gridTemplateColumns:'1fr 480px',
          minHeight:'560px',
        }}>
          {/* Left — copy + trust signals */}
          <div style={{padding:'72px 56px 72px 24px', display:'flex', flexDirection:'column', justifyContent:'center', gap:'0'}}>
            <div className="eyebrow eyebrow--light" style={{marginBottom:'20px'}}>Get Started</div>
            <h2 style={{color:'white', marginBottom:'20px', lineHeight:'1.05'}}>Submit Your Custom Motor Requirement</h2>
            <p style={{color:'rgba(255,255,255,0.70)', fontSize:'1rem', lineHeight:'1.65', maxWidth:'40ch', marginBottom:'40px'}}>
              The more detail you provide, the faster we can respond with a solution — typically within 1 business day.
            </p>

            {/* Trust items */}
            <div style={{display:'flex', flexDirection:'column', gap:'16px', marginBottom:'40px'}}>
              {[
                { icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, label:'Response within 1 business day' },
                { icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>, label:'No minimum order — prototypes welcome' },
                { icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:'Engineered & manufactured in Sandpoint, ID' },
              ].map(t => (
                <div key={t.label} style={{display:'flex', alignItems:'center', gap:'12px'}}>
                  <span style={{color:'rgba(255,255,255,0.7)', display:'flex', alignItems:'center', flexShrink:0}}>{t.icon}</span>
                  <span style={{fontSize:'0.85rem', fontWeight:600, color:'rgba(255,255,255,0.82)'}}>{t.label}</span>
                </div>
              ))}
            </div>

            {/* Contact line */}
            <div style={{paddingTop:'28px', borderTop:'1px solid rgba(255,255,255,0.12)', display:'flex', flexDirection:'column', gap:'10px'}}>
              <a href="tel:8003923602" style={{display:'flex', alignItems:'center', gap:'10px', color:'white', fontWeight:700, fontSize:'1.05rem', textDecoration:'none'}}>
                <span aria-hidden="true" style={{display:'flex', alignItems:'center'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg>
                </span>
                800-392-3602
              </a>
              <a href="mailto:sales@psiautomation.com" style={{display:'flex', alignItems:'center', gap:'10px', color:'rgba(255,255,255,0.65)', fontSize:'0.88rem', textDecoration:'none'}}>
                <span aria-hidden="true" style={{display:'flex', alignItems:'center'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                sales@psiautomation.com
              </a>
            </div>
          </div>

          {/* Right — white form card */}
          <div style={{
            background:'white',
            padding:'52px 44px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            boxShadow:'-8px 0 48px rgba(0,0,0,0.18)',
          }}>
            <div style={{fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--crimson)', marginBottom:'6px'}}>Custom Motor Inquiry</div>
            <h3 style={{fontSize:'1.2rem', color:'var(--text-primary)', fontWeight:800, marginBottom:'24px'}}>Tell Us What You Need</h3>
            <RFQForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
