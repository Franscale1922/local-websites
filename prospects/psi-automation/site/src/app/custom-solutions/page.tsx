'use client';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function RFQForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return (
    <div className="rfq-success">✓ Your inquiry has been received. An engineer will respond within 1 business day.</div>
  );
  return (
    <div className="contact-form-card">
      <p className="contact-form-title">Custom Motor Inquiry</p>
      {[
        { label: 'Name', type: 'text', ph: 'Your name' },
        { label: 'Company', type: 'text', ph: 'Company name' },
        { label: 'Email', type: 'email', ph: 'your@email.com' },
        { label: 'Phone', type: 'tel', ph: '(optional)' },
      ].map(f => (
        <div className="form-field" key={f.label}>
          <label>{f.label}</label>
          <input type={f.type} placeholder={f.ph} />
        </div>
      ))}
      <div className="form-field">
        <label>Describe Your Custom Requirement</label>
        <textarea placeholder="HP range, torque target, operating pressure, environment (hazardous/explosive?), mounting style, shaft requirements, quantity, timeline..." style={{minHeight:'120px'}} />
      </div>
      <button className="btn btn-primary" style={{width:'100%', justifyContent:'center'}} onClick={() => setSubmitted(true)}>
        Submit Custom Inquiry →
      </button>
    </div>
  );
}

const CUSTOM_CAPABILITIES = [
  { icon: '⚙️', title: 'Modified Shaft Configurations', desc: 'Non-standard shaft diameters, lengths, keyways, splines, and thread forms. If you can draw it, we can manufacture it.' },
  { icon: '🔩', title: 'Custom Mounting Flanges', desc: 'SAE, metric, and proprietary bolt patterns. We match your existing hardware footprint — no adapter plates required.' },
  { icon: '🎚️', title: 'Modified Gear Ratios', desc: 'Need 1,200 RPM instead of 6,200? We offer integrated gearbox options to hit your exact output speed without sacrificing torque.' },
  { icon: '🌡️', title: 'Extreme Temperature Options', desc: 'Standard motors operate from -40°F to +250°F. We offer high-temperature vane materials and seal compounds for even more demanding applications.' },
  { icon: '💧', title: 'Oil-Free / Clean Environments', desc: 'Semiconductor, food processing, and clean-room compatible configurations. No lubricant injection to your air supply.' },
  { icon: '⚡', title: 'High-Cycle / Continuous Duty', desc: 'Motors designed specifically for millions of cycles or 24/7 continuous operation. Different vane materials and bearing specifications.' },
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
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'24px'}}>
            {CUSTOM_CAPABILITIES.map(c => (
              <div key={c.title} style={{padding:'28px', border:'1.5px solid var(--border)', borderRadius:'var(--radius-md)'}}>
                <div style={{fontSize:'1.4rem', marginBottom:'14px'}}>{c.icon}</div>
                <h3 style={{color:'var(--navy)', fontSize:'1rem', marginBottom:'10px'}}>{c.title}</h3>
                <p style={{fontSize:'0.86rem', color:'var(--steel)', lineHeight:1.6, maxWidth:'none'}}>{c.desc}</p>
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

      {/* RFQ section */}
      <section className="cta-band" id="rfq">
        <div className="container">
          <div className="cta-band-grid">
            <div>
              <div className="eyebrow eyebrow--light">Get Started</div>
              <h2 style={{color:'white'}}>Submit Your Custom Motor Requirement</h2>
              <p className="cta-band-sub">The more detail you provide, the faster we can respond with a solution.</p>
              <div className="contact-info">
                <div className="contact-info-item"><span className="contact-info-icon">📞</span><a href="tel:8003923602" style={{color:'white', fontWeight:700}}>800-392-3602</a></div>
                <div className="contact-info-item"><span className="contact-info-icon">✉️</span><a href="mailto:sales@psiautomation.com" style={{color:'white'}}>sales@psiautomation.com</a></div>
              </div>
              <p style={{color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', marginTop:'24px'}}>
                No minimum order. We build prototypes as small as one unit.
              </p>
            </div>
            <RFQForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
