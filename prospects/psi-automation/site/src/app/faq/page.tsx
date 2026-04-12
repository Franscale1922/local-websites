'use client';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const FAQ_CATEGORIES = [
  {
    category: 'Getting Started',
    faqs: [
      {
        q: 'How do I know if a vane air motor is right for my application?',
        a: 'Air motors are the right choice when one or more of these conditions apply: your environment is classified hazardous (no EX enclosure needed), you need field serviceability without factory return, your duty cycle includes frequent stall events without failure, or your equipment is mobile and weight is critical. Call our application engineers — we\'ll tell you honestly if air is the right choice or point you elsewhere.',
      },
      {
        q: 'What information do I need before contacting PSI?',
        a: 'To size the right motor we need: required HP range, torque requirement at operating speed (lbf·ft), working air supply pressure (PSI), environment description (temperature range, hazardous? wet?), mounting configuration, and expected duty cycle. The more detail you provide, the faster we can respond with a solution.',
      },
      {
        q: 'How quickly can PSI respond to a custom motor inquiry?',
        a: 'Standard inquiries receive an engineering response within 1 business day. For emergency situations, call 800-392-3602 directly — our engineers answer the phone.',
      },
    ],
  },
  {
    category: 'Products & Specifications',
    faqs: [
      {
        q: 'What HP range do your motors cover?',
        a: 'Our standard catalog covers 1/4 HP to 70 HP across three series: CDV (bi-directional, 1/4 to 5 HP), DV (high-output unidirectional, 1/4 to 70 HP), and DVA (dual-speed with torque amplifier, 0.75 to 2 HP). The DV62 series at 70 HP represents the upper range of what vane technology can deliver — no other manufacturer in this market reaches that output.',
      },
      {
        q: 'What is the difference between the CDV, DV, and DVA series?',
        a: 'CDV motors are bi-directional and face-mount — used when direction reversal is required (mixing, positioning). DV motors are unidirectional and optimized for maximum power output — used for high-cycle industrial and extraction applications. DVA motors include an integrated torque amplifier providing selectable low and high-speed modes without external control hardware.',
      },
      {
        q: 'Are your motors rated for explosion-proof environments?',
        a: 'Vane air motors have no electrical components — there is nothing to spark. They are inherently safe for use in Class I, II, and III hazardous locations without an explosion-proof enclosure. This makes them far more cost-effective than EX-rated electric motors in classified atmospheres.',
      },
      {
        q: 'What temperature ranges can your motors operate in?',
        a: 'Standard PSI motors operate from -40°F to +250°F. We offer high-temperature vane materials and seal compounds for applications beyond this range. Contact our engineering team for high-temperature or cryogenic requirement specifications.',
      },
    ],
  },
  {
    category: 'Custom Engineering',
    faqs: [
      {
        q: 'Do you have a minimum order quantity for custom motors?',
        a: 'No. We manufacture custom configurations for single-unit quantities. This is one of the most common misconceptions in our industry — engineers assume they need large production runs to justify custom tooling. We engineer from specification, not from existing tooling constraints, and we do it for prototype quantities.',
      },
      {
        q: 'What custom modifications are available?',
        a: 'The most common custom requests: non-standard shaft diameters/lengths/keyways, custom mounting flanges and bolt patterns, modified gear ratios for specific output speeds, high-temperature or oil-free configurations, and special vane materials for aggressive environments. If you can specify it, we can usually build it.',
      },
      {
        q: 'How long does a custom motor take to deliver?',
        a: 'Custom configuration review and quote typically takes 1 business day. Delivery varies by complexity — standard modifications ship in 2–4 weeks, complex custom builds may take 6–8 weeks. We\'ll give you a specific lead time when we quote.',
      },
    ],
  },
  {
    category: 'Service & Maintenance',
    faqs: [
      {
        q: 'Can PSI motors be serviced in the field without returning to the factory?',
        a: 'Yes — this is a design requirement, not a feature. Every PSI motor can be serviced in the field using our maintenance manual. Vane replacement — the most common maintenance action — takes a trained technician 2–3 hours without specialized tools. We provide full maintenance documentation with every motor.',
      },
      {
        q: 'What is the typical maintenance interval?',
        a: 'Vane replacement interval depends on duty cycle, air quality, and operating pressure. In typical industrial continuous-duty applications, vane replacement is required every 2,000–6,000 hours. Keeping your air supply clean and properly lubricated significantly extends vane life.',
      },
      {
        q: 'Do you sell replacement parts?',
        a: 'Yes. We stock replacement vanes, bearings, seals, and end caps for our standard product lines. Contact sales@psiautomation.com or call 800-392-3602 with your model number.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  function toggle(key: string) {
    setOpenItem(prev => prev === key ? null : key);
  }

  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ FAQ</span></Link>
          <div className="eyebrow eyebrow--light">FAQ</div>
          <h1>Common Questions. Straight Answers.</h1>
          <p className="page-hero-sub">No sales scripting. If we don&apos;t know, we&apos;ll tell you. If another technology fits better, we&apos;ll say that too.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.category} style={{marginBottom:'56px'}}>
              <div style={{display:'flex', alignItems:'center', gap:'20px', marginBottom:'24px'}}>
                <div className="eyebrow" style={{marginBottom:0}}>{cat.category}</div>
                <div style={{flex:1, height:'1px', background:'var(--border)'}} />
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
                {cat.faqs.map((faq, i) => {
                  const key = `${cat.category}-${i}`;
                  const isOpen = openItem === key;
                  return (
                    <div key={key} style={{
                      border:'1.5px solid var(--border)',
                      borderRadius:'10px',
                      overflow:'hidden',
                      background: isOpen ? 'white' : 'var(--bg-light)',
                      transition:'background 0.2s',
                    }}>
                      <button
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        style={{
                          width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between',
                          padding:'18px 22px', background:'none', border:'none', cursor:'pointer', textAlign:'left', gap:'16px',
                        }}
                      >
                        <span style={{fontWeight:700, color:'var(--navy)', fontSize:'0.95rem', lineHeight:1.4}}>{faq.q}</span>
                        <span style={{
                          width:'28px', height:'28px', flexShrink:0,
                          background: isOpen ? 'var(--crimson)' : 'var(--border)',
                          borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center',
                          color: isOpen ? 'white' : 'var(--navy)', fontWeight:700, fontSize:'1.1rem', transition:'all 0.2s',
                        }}>{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div style={{padding:'0 22px 20px', color:'var(--steel)', fontSize:'0.9rem', lineHeight:1.7}}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div style={{background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'36px', textAlign:'center', marginTop:'24px'}}>
            <h3 style={{color:'white', marginBottom:'12px'}}>Still Have a Question?</h3>
            <p style={{color:'rgba(255,255,255,0.65)', marginBottom:'24px', fontSize:'0.9rem'}}>Our engineers answer the phone. No hold music, no routing scripts.</p>
            <div style={{display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap'}}>
              <a href="tel:8003923602" className="btn btn-primary btn-lg">Call 800-392-3602</a>
              <Link href="/contact" className="btn btn-ghost btn-lg">Send a Message →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
