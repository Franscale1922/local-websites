'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';

function RFQForm({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const cls = dark ? 'contact-form-card' : 'hero-card';
  return submitted ? (
    <div className={cls}>
      <div className="rfq-success">✓ Message received — an engineer will be in touch within 1 business day.</div>
    </div>
  ) : (
    <div className={cls}>
      <h3 style={dark ? {color:'white'} : {}}>Talk to an Application Engineer</h3>
      <p className="hero-card-sub" style={dark ? {color:'rgba(255,255,255,0.55)'} : {}}>Usually responds same business day.</p>
      <div className="form-field"><label>Name</label><input type="text" placeholder="Jane Smith" /></div>
      <div className="form-field"><label>Company</label><input type="text" placeholder="Acme Industries" /></div>
      <div className="form-field"><label>Email</label><input type="email" placeholder="jane@company.com" /></div>
      <div className="form-field">
        <label>Application / Requirement</label>
        <textarea placeholder="Describe your motor requirement — HP range, environment, torque target, mounting type..." style={{minHeight:'80px'}} />
      </div>
      <button
        className="btn btn-primary"
        style={{width:'100%', justifyContent:'center'}}
        onClick={() => setSubmitted(true)}
      >
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

export default function Home() {
  return (
    <>
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
            <RFQForm />
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
            { icon: '🏆', text: '35+ Years Manufacturing' },
            { icon: '⚡', text: '1/4 to 70 HP Range' },
            { icon: '🔧', text: 'Custom — No Minimums' },
            { icon: '🛠️', text: 'Field-Serviceable Design' },
            { icon: '🇺🇸', text: 'Sandpoint, Idaho USA' },
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
          <div className="section-head">
            <div className="eyebrow">Product Lines</div>
            <h2>Built for the Application,<br />Not the Catalog</h2>
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
          <div className="section-head">
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
          <div className="section-head" style={{marginBottom:'48px'}}>
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
          <div className="section-head">
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
                  <span className="contact-info-icon">📞</span>
                  <a href="tel:8003923602" style={{color:'white', fontWeight:700}}>800-392-3602 (Toll Free)</a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">✉️</span>
                  <a href="mailto:sales@psiautomation.com" style={{color:'white'}}>sales@psiautomation.com</a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">📍</span>
                  <span style={{color:'rgba(255,255,255,0.7)'}}>3717 Omni Park Taxiway, Sandpoint, ID 83864</span>
                </div>
              </div>
            </div>
            <RFQForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
