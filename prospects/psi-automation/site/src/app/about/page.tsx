import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About PSI Automation | 35 Years Engineering Vane Air Motors — Sandpoint Idaho',
  description: 'PSI Automation (formerly Pneumatic Systems Inc.) has manufactured custom vane air motors in Sandpoint, Idaho for 35+ years. Read our story.',
};

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ About</span></Link>
          <div className="eyebrow eyebrow--light">Our Story</div>
          <h1>Built on 35 Years of Engineering What Nobody Else Would</h1>
          <p className="page-hero-sub">
            Pneumatic Systems, Inc. was founded in Sandpoint, Idaho to solve a specific problem: diesel engine air starters needed more power than available motors could deliver. We built our own. The rest followed.
          </p>
        </div>
      </section>

      {/* History + stats — light background */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            {/* Left — narrative */}
            <div>
              <div className="eyebrow">Company History</div>
              <h2>From Diesel Starters to&nbsp;Custom OEM Solutions</h2>
              <p style={{marginTop:'20px', color:'var(--steel)', fontSize:'1rem', lineHeight:1.75}}>
                PSI Automation was founded under the name Pneumatic Systems, Inc. with a singular focus: build the air motor that didn&apos;t exist yet. The first product line was diesel engine air starters for marine and industrial applications — environments that demanded reliability over everything else.
              </p>
              <p style={{marginTop:'16px', color:'var(--steel)', fontSize:'1rem', lineHeight:1.75}}>
                Over 35 years, the product line grew from starters to a full portfolio of vane air motors spanning 1/4 HP to 70 HP. The 70 HP capability remains the industry ceiling for vane technology — where every other manufacturer stops, we operate routinely.
              </p>
              <p style={{marginTop:'16px', color:'var(--steel)', fontSize:'1rem', lineHeight:1.75}}>
                Today, PSI Automation serves OEM and MRO customers across aerospace, automotive, chemical, mining, and petroleum extraction. No minimum order. No off-the-shelf constraint. Engineers available directly — no sales layer.
              </p>
            </div>

            {/* Right — stats + location */}
            <div>
              <div className="about-stats-grid">
                {[
                  { value:'35+', label:'Years in Business' },
                  { value:'70 HP', label:'Maximum Output' },
                  { value:'0', label:'Minimum Order Qty' },
                  { value:'81', label:'Standard Configs' },
                ].map(s => (
                  <div key={s.label} className="about-stat-cell">
                    <div className="about-stat-val">{s.value}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="about-location">
                <div style={{fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--crimson)', marginBottom:'10px'}}>Headquarters</div>
                <p style={{fontSize:'0.9rem', color:'var(--steel)', lineHeight:1.7, maxWidth:'none', margin:0}}>
                  3717 Omni Park Taxiway<br/>
                  Sandpoint, ID 83864<br/>
                  <span style={{color:'var(--steel-light)', fontSize:'0.82rem'}}>Mailing: PO Box 1487, Sandpoint, ID 83864</span>
                </p>
                <div style={{marginTop:'16px', display:'flex', flexDirection:'column', gap:'8px'}}>
                  <a href="tel:8003923602" style={{color:'var(--crimson)', fontWeight:700, fontSize:'1rem', textDecoration:'none'}}>800-392-3602 (Toll Free)</a>
                  <a href="mailto:sales@psiautomation.com" style={{color:'var(--steel)', fontSize:'0.88rem', textDecoration:'none'}}>sales@psiautomation.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — tinted background for clean white card contrast */}
      <section className="section section--tinted">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Philosophy</div>
            <h2>Why Engineers Come to PSI Automation</h2>
          </div>
          <div className="why-grid">
            {[
              { icon:'/icons/icon-field-serviceable.png', alt:'Field serviceable motor', title:'Field-Serviceable by Design', desc:"Every PSI motor can be serviced in the field without returning to the factory. Our maintenance manual trains your technicians to rebuild in hours, not weeks. This is not an accident — it's a design requirement." },
              { icon:'/icons/icon-no-minimum.png', alt:'No minimum order custom motor', title:'No Minimum Order', desc:"We manufacture custom configurations for single-unit quantities. This eliminates the single most common obstacle for engineers who know exactly what they need but can't justify 100-unit tooling runs." },
              { icon:'/icons/icon-engineer-phone.png', alt:'Engineer answering the phone', title:'Engineers Answer the Phone', desc:"When you call PSI Automation, you speak with an engineer who works on motors daily. Not a sales coordinator. Not a routing system. A person who can answer your technical question right now." },
            ].map(v => (
              <div key={v.title} className="why-card">
                <div className="why-card-icon">
                  <img src={v.icon} alt={v.alt} className="why-card-icon-img" />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — navy instead of a second red block */}
      <section style={{background:'var(--navy)', padding:'var(--section-pad)'}}>
        <div className="container">
          <div style={{textAlign:'center', maxWidth:'640px', margin:'0 auto'}}>
            <div className="eyebrow eyebrow--light" style={{justifyContent:'center'}}>Ready to Work With Us?</div>
            <h2 style={{color:'white', marginBottom:'16px'}}>Your Inquiry Goes Directly to an Engineer</h2>
            <p style={{color:'rgba(255,255,255,0.65)', marginBottom:'36px', fontSize:'1rem'}}>No minimum order. No sales process. Just a direct line to engineers who build motors.</p>
            <div className="btn-group" style={{justifyContent:'center'}}>
              <Link href="/contact" className="btn btn-primary btn-lg">Talk to an Engineer →</Link>
              <a href="tel:8003923602" className="btn btn-ghost btn-lg">800-392-3602</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
