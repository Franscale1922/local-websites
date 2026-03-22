'use client';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return (
    <div className="rfq-success" style={{padding:'48px', textAlign:'center', borderRadius:'var(--radius-md)', background:'#1a7a4a', color:'white', fontSize:'1.1rem'}}>
      ✓ Your message has been received. An engineer will respond within 1 business day.
    </div>
  );
  return (
    <div style={{background:'white', borderRadius:'var(--radius-lg)', padding:'40px', boxShadow:'var(--shadow-md)', border:'1.5px solid var(--border)'}}>
      <h3 style={{color:'var(--navy)', fontSize:'1.2rem', marginBottom:'4px'}}>Contact an Application Engineer</h3>
      <p style={{color:'var(--steel)', fontSize:'0.86rem', marginBottom:'28px'}}>No sales scripting. Real engineers. Usually same-day response.</p>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>
        <div className="form-field"><label>Name *</label><input type="text" placeholder="Jane Smith" required /></div>
        <div className="form-field"><label>Company</label><input type="text" placeholder="Acme Industries" /></div>
        <div className="form-field"><label>Email *</label><input type="email" placeholder="jane@company.com" required /></div>
        <div className="form-field"><label>Phone</label><input type="tel" placeholder="208-555-1234" /></div>
      </div>
      <div className="form-field">
        <label>Motor / Application Requirement *</label>
        <textarea placeholder="Describe your application: HP range, torque target, air supply pressure, environment (hazardous, temperature extremes?), mounting style, expected duty cycle, quantity..." style={{minHeight:'160px'}} required />
      </div>
      <div className="form-field">
        <label>Timeline</label>
        <select>
          <option value="">Select…</option>
          <option>ASAP / Emergency</option>
          <option>Within 2 weeks</option>
          <option>Within 1 month</option>
          <option>Within 3 months</option>
          <option>Evaluating / No immediate timeline</option>
        </select>
      </div>
      <button className="btn btn-primary btn-lg" style={{width:'100%', justifyContent:'center', marginTop:'8px'}} onClick={() => setSubmitted(true)}>
        Send to Engineering Team →
      </button>
      <p style={{color:'var(--steel-light)', fontSize:'0.75rem', textAlign:'center', marginTop:'12px'}}>
        Or call directly: <a href="tel:8003923602" style={{color:'var(--orange)', fontWeight:700}}>800-392-3602</a> (Toll Free)
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ Contact</span></Link>
          <div className="eyebrow eyebrow--light">Get in Touch</div>
          <h1>Talk to an Application Engineer</h1>
          <p className="page-hero-sub">
            Not a call center. Not a web form black hole. Your inquiry goes directly to an engineer who works on air motors every day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 380px', gap:'64px', alignItems:'start'}}>
            
            <ContactForm />

            <div>
              <div className="eyebrow">Direct Contact</div>
              <h2 style={{fontSize:'1.6rem', marginBottom:'28px'}}>Reach Our Engineers</h2>

              <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
                {[
                  { icon:'/icons/icon-engineer-phone.png', alt:'Call PSI Automation', label:'Toll Free Phone', value:'800-392-3602', sub:'Mon–Fri 8am–5pm PT', href:'tel:8003923602' },
                  { icon:'/icons/icon-no-minimum.png', alt:'Email PSI Automation', label:'Email', value:'sales@psiautomation.com', sub:'Typical response: same business day', href:'mailto:sales@psiautomation.com' },
                  { icon:'/icons/icon-field-serviceable.png', alt:'PSI Automation location', label:'Location', value:'3717 Omni Park Taxiway', sub:'Sandpoint, ID 83864 · Mailing: PO Box 1487', href:'https://maps.google.com/?q=Sandpoint+ID+83864' },
                ].map(c => (
                  <a key={c.label} href={c.href} target={c.label === 'Location' ? '_blank' : undefined} rel="noopener noreferrer"
                    style={{display:'flex', alignItems:'center', gap:'16px', padding:'16px', borderRadius:'12px', background:'var(--bg-light)', textDecoration:'none', transition:'all 0.2s', border:'1.5px solid var(--border)'}}
                    onMouseEnter={e => (e.currentTarget.style.background='white')}
                    onMouseLeave={e => (e.currentTarget.style.background='var(--bg-light)')}
                  >
                    <div style={{width:'56px', height:'56px', background:'var(--crimson)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
                      <div style={{width:'40px', height:'40px', background:'white', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <img src={c.icon} alt={c.alt} style={{width:'34px', height:'34px', objectFit:'contain'}} />
                      </div>
                    </div>
                    <div>
                      <div style={{fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--steel)', marginBottom:'4px'}}>{c.label}</div>
                      <div style={{fontWeight:700, color:'var(--navy)', fontSize:'0.95rem'}}>{c.value}</div>
                      <div style={{fontSize:'0.78rem', color:'var(--steel-light)', marginTop:'2px'}}>{c.sub}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div style={{marginTop:'32px', background:'var(--bg-light)', borderRadius:'var(--radius-md)', padding:'24px'}}>
                <h4 style={{color:'var(--navy)', marginBottom:'12px'}}>What to Have Ready</h4>
                {[
                  'Required HP range (min and max)',
                  'Torque requirement at operating speed',
                  'Working air pressure (PSI)',
                  'Environment (temperature, hazardous area?)',
                  'Mounting configuration',
                  'Expected duty cycle (continuous vs intermittent)',
                  'Quantity (approximate)',
                ].map(item => (
                  <div key={item} style={{display:'flex', alignItems:'center', gap:'10px', padding:'6px 0', fontSize:'0.84rem', color:'var(--steel)'}}>
                    <span style={{color:'var(--orange)', fontWeight:900, fontSize:'1rem', flexShrink:0}}>·</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
