import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Chemical Processing Air Motors | PSI Automation — Explosion-Safe, No Sparks',
  description: 'PSI Automation vane air motors for chemical processing: inherently explosion-safe, no electrical sparks, no EX enclosures required. Mixing, agitation, pump drives.',
};

export default function ChemicalPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="container">
          <Link href="/applications" className="breadcrumb">← Industries <span>/ Chemical</span></Link>
          <div className="eyebrow eyebrow--light">⚗️ Chemical Processing</div>
          <h1>No Sparks. No Enclosures. No Compromise.</h1>
          <p className="page-hero-sub">
            Classified hazardous atmospheres demand ignition-free power. PSI vane air motors have no electrical components — they cannot produce a spark. Full classified-area operation without expensive EX enclosures.
          </p>
          <div className="page-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Discuss Your Application →</Link>
            <Link href="/products" className="btn btn-ghost" style={{marginLeft:'12px'}}>Browse Motors</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px'}}>
            <div>
              <div className="eyebrow">For Process Engineers</div>
              <h2>Safe by Design — Not by Enclosure</h2>
              <div style={{marginTop:'28px', display:'flex', flexDirection:'column', gap:'24px'}}>
                {[
                  { title:'Intrinsically Safe in Classified Areas', desc:'Class I, Division 1 and Division 2 classified areas legally require that any electrical equipment be explosion-proof rated and enclosed. Air motors are non-electrical and require no EX certification or special enclosure — saving thousands per installation.' },
                  { title:'Corrosion-Resistant Options', desc:'Chemical environments attack materials. PSI offers corrosion-resistant motor configurations for applications involving acids, caustics, solvents, and other corrosive agents. Stainless steel components where contact is possible.' },
                  { title:'Oil-Free Air Operation', desc:"Some chemical processes cannot tolerate hydrocarbon contamination from motor exhaust. PSI offers oil-free operation configurations where clean exhaust is required." },
                  { title:'Speed Control via Simple Regulation', desc:"Mixing speed adjustment doesn't require VFDs, encoders, or complex control hardware — a simple pressure regulator provides full proportional speed control. Lower system cost, higher reliability in corrosive environments." },
                ].map(item => (
                  <div key={item.title} style={{paddingLeft:'20px', borderLeft:'3px solid var(--orange)'}}>
                    <h4 style={{color:'var(--navy)', marginBottom:'6px'}}>{item.title}</h4>
                    <p style={{fontSize:'0.88rem', color:'var(--steel)', lineHeight:1.65, maxWidth:'none'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{color:'var(--navy)', marginBottom:'24px'}}>Chemical Applications</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'12px', marginBottom:'28px'}}>
                {['Reactor vessel agitation drives', 'Chemical mixing systems', 'Centrifuge drives', 'Pump drives for corrosives', 'Conveyor drives in classified areas', 'Batch processing vessel rotation', 'Drum tumbler drives', 'Vacuum system drives'].map(app => (
                  <div key={app} style={{display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px', background:'var(--bg-light)', borderRadius:'var(--radius-sm)', fontSize:'0.88rem', fontWeight:600, color:'var(--navy)'}}>
                    <span style={{color:'var(--orange)'}}>→</span>
                    {app}
                  </div>
                ))}
              </div>
              <div style={{background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'24px'}}>
                <h4 style={{color:'white', marginBottom:'8px'}}>Classified Area Documentation</h4>
                <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.86rem', maxWidth:'none', marginBottom:'16px'}}>Need documentation for your classified area evaluation? Our engineers can provide technical specifications and support your ATEX or NEC classification review.</p>
                <Link href="/contact" className="btn btn-primary btn-sm">Contact Engineering →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{textAlign:'center', maxWidth:'580px', margin:'0 auto'}}>
            <h2 style={{color:'white', marginBottom:'16px'}}>Chemical Processing Motor Selection</h2>
            <p style={{color:'rgba(255,255,255,0.65)', marginBottom:'32px', fontSize:'0.95rem'}}>Tell us your operating environment, torque requirement, and any special material requirements. Our engineers respond with a specific solution — or recommend a different approach if air motor isn&apos;t right for your application.</p>
            <div className="btn-group" style={{justifyContent:'center'}}>
              <Link href="/contact" className="btn btn-primary btn-lg">Contact Engineering →</Link>
              <Link href="/engineering" className="btn btn-ghost btn-lg">Size Your Motor</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
