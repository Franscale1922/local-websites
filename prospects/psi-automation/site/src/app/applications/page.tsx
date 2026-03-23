import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Industries Served | PSI Automation Vane Air Motors',
  description: 'PSI Automation vane air motors serve aerospace, automotive, chemical, mining, and petroleum industries. Explosion-proof, field-serviceable, 1/4 to 70 HP.',
};

const INDUSTRIES = [
  {
    slug: 'aerospace',
    icon: '/icons/icon-aerospace.png',
    alt: 'Aerospace jet illustration',
    title: 'Aerospace',
    tagline: 'Where every pound matters',
    desc: 'Ground support equipment, fuel system testing, actuation systems. Power-to-weight ratios that justify air over electric in every weight-critical spec.',
    detail: 'Where every pound of motor weight is weight not carried by the aircraft.',
    stat: '60%',
    statLabel: 'lighter than comparable electric',
  },
  {
    slug: 'automotive',
    icon: '/icons/icon-automotive.png',
    alt: 'Automotive manufacturing illustration',
    title: 'Automotive',
    tagline: 'Zero thermal failures on the line',
    desc: 'High-cycle continuous operation. Assembly line tooling, testing rigs, fixture actuation. Air motors restart instantly — no thermal overload, no downtime wait.',
    detail: 'No thermal overload failures on the line. Air motors restart instantly.',
    stat: '∞',
    statLabel: 'duty cycle — no thermal limit',
  },
  {
    slug: 'chemical',
    icon: '/icons/icon-chemical.png',
    alt: 'Chemical processing plant illustration',
    title: 'Chemical',
    tagline: 'No sparks. No special enclosures.',
    desc: 'Explosion-proof operation in classified atmospheres — no EX enclosures required. Mixing, agitation, and pump drives where electric motors are a liability.',
    detail: 'No sparks, no special enclosures required in classified atmospheres.',
    stat: '0',
    statLabel: 'spark risk in classified zones',
  },
  {
    slug: 'mining',
    icon: '/icons/icon-mining.png',
    alt: 'Mining tunnel boring machine illustration',
    title: 'Mining',
    tagline: 'Rebuilt underground, no factory needed',
    desc: 'Field-serviceable in remote locations. Drill drives, conveyor power, extraction equipment. Rebuilt on-site by one person without specialized tooling.',
    detail: 'Rebuilt underground without returning to the factory or a shop.',
    stat: '5',
    statLabel: 'parts to rebuild any motor',
  },
  {
    slug: 'petroleum',
    icon: '/icons/icon-petroleum.png',
    alt: 'Oil pump jack illustration',
    title: 'Petroleum',
    tagline: 'Up to 70 HP in gas-rich environments',
    desc: 'Safe in gas-rich environments with no ignition risk. Our DV62 series handles the most demanding drilling and extraction applications at 30–90 PSI.',
    detail: 'Our DV62 series handles 70 HP — the most demanding extraction applications.',
    stat: '70 HP',
    statLabel: 'max output — DV62 series',
  },
];

const REASONS = [
  { icon: '/icons/icon-explosion-proof.png', alt: 'Explosion-proof icon', title: 'Explosion-Proof', desc: 'No sparks, no ignition risk. Safe in ATEX/NEC Class I & II zones without special enclosures.' },
  { icon: '/icons/icon-high-cycle.png', alt: 'High cycle duty icon', title: 'No Thermal Limit', desc: 'Air motors run stalled indefinitely without damage. Continuous duty at full load.' },
  { icon: '/icons/icon-field-serviceable.png', alt: 'Field serviceable icon', title: 'Field-Serviceable', desc: 'Five core components. One person. Rebuilt on-site in under 30 minutes.' },
  { icon: '/icons/icon-power-to-weight.png', alt: 'Power to weight icon', title: 'Compact & Light', desc: 'Higher power-to-weight than electric. Fits installations where electrics simply won\'t.' },
];

export default function ApplicationsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ Industries</span></Link>
          <div className="eyebrow eyebrow--light">Industries We Serve</div>
          <h1>Air Motors Built for Environments That Break Everything Else</h1>
          <p className="page-hero-sub">
            Vane air motors thrive where electric motors fail — in hazardous atmospheres, continuous-duty cycles, and remote installations. Here's where PSI motors run every day.
          </p>
          <div className="page-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Talk to an Engineer →</Link>
            <Link href="/products" className="btn btn-ghost" style={{marginLeft:'12px'}}>Browse Motor Catalog</Link>
          </div>
        </div>
      </section>

      {/* Why air motors — 4 reason chips on a steel-blue strip */}
      <section style={{background:'var(--steel-blue)', padding:'28px 24px'}}>
        <div className="container">
          <div className="reasons-grid">
            {REASONS.map(r => (
              <div key={r.title} className="reasons-item">
                <div className="reasons-icon-wrap">
                  <img src={r.icon} alt={r.alt} className="reasons-icon-img" />
                </div>
                <div style={{flex:1}}>
                  <div className="reasons-title">{r.title}</div>
                  <div className="reasons-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Cards — white background, breathing room */}
      <section className="section section--tinted">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <div className="eyebrow" style={{justifyContent:'center'}}>Five Core Industries</div>
            <h2 style={{marginBottom:'16px'}}>Where PSI Motors Work Every Day</h2>
            <p style={{margin:'0 auto', color:'var(--steel)', maxWidth:'52ch', textAlign:'center'}}>
              Select an industry to see specific applications, required specs, and recommended motor series.
            </p>
          </div>

          <div className="industry-grid-3">
            {INDUSTRIES.slice(0, 3).map(ind => (
              <IndustryCard key={ind.slug} ind={ind} />
            ))}
          </div>
          <div className="industry-grid-2">
            {INDUSTRIES.slice(3).map(ind => (
              <IndustryCard key={ind.slug} ind={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section style={{background:'var(--crimson-dark)', padding:'64px 24px'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:'40px', textAlign:'center'}}>
            {[
              { val:'81', label:'Standard motor configurations' },
              { val:'35+', label:'Years of US manufacturing' },
              { val:'70 HP', label:'Maximum single-motor output' },
              { val:'1/4 HP', label:'Smallest available configuration' },
            ].map(s => (
              <div key={s.label}>
                <div style={{fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, color:'white', letterSpacing:'-0.03em', lineHeight:1}}>{s.val}</div>
                <div style={{fontSize:'0.75rem', fontWeight:700, color:'rgba(255,255,255,0.6)', letterSpacing:'0.08em', textTransform:'uppercase', marginTop:'10px', lineHeight:1.4}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:'60px', alignItems:'center'}}>
            <div>
              <div className="eyebrow eyebrow--light">Don&apos;t See Your Industry?</div>
              <h2 style={{color:'white'}}>We Work Across Every Industrial Sector</h2>
              <p className="cta-band-sub">If your application requires rotating power in a hazardous, extreme, or unusual environment — talk to us. We ship custom configurations with no minimum order.</p>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
              <Link href="/contact" className="btn btn-primary btn-lg">Talk to an Engineer →</Link>
              <Link href="/products" className="btn btn-ghost">Browse All 81 Motors</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function IndustryCard({ ind }: { ind: typeof INDUSTRIES[0] }) {
  return (
    <Link
      href={`/applications/${ind.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      className="industry-card-link"
    >
      {/* Crimson header with icon + stat */}
      <div style={{
        background: 'linear-gradient(135deg, var(--crimson) 0%, var(--crimson-dark) 100%)',
        padding: '28px 28px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}>
        <div style={{
          width: '80px', height: '80px',
          background: 'white',
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          overflow: 'hidden',
        }}>
          <img src={ind.icon} alt={ind.alt} style={{width:'68px', height:'68px', objectFit:'contain', mixBlendMode:'multiply'}} />
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontSize:'clamp(1.6rem,3vw,2.2rem)', fontWeight:900, color:'white', letterSpacing:'-0.03em', lineHeight:1}}>{ind.stat}</div>
          <div style={{fontSize:'0.65rem', fontWeight:700, color:'rgba(255,255,255,0.65)', letterSpacing:'0.08em', textTransform:'uppercase', marginTop:'4px', lineHeight:1.3}}>{ind.statLabel}</div>
        </div>
      </div>

      {/* Card body */}
      <div style={{padding:'24px 28px 28px', flex:1, display:'flex', flexDirection:'column', gap:'8px'}}>
        <div style={{fontSize:'0.65rem', fontWeight:700, color:'var(--crimson)', letterSpacing:'0.12em', textTransform:'uppercase'}}>{ind.tagline}</div>
        <h3 style={{fontSize:'1.25rem', color:'var(--text-primary)', fontWeight:800, marginBottom:'4px'}}>{ind.title}</h3>
        <p style={{fontSize:'0.875rem', color:'var(--steel)', lineHeight:'1.65', maxWidth:'none', flex:1}}>{ind.desc}</p>
        <div style={{
          display:'inline-flex', alignItems:'center', gap:'6px',
          fontSize:'0.8rem', fontWeight:700, color:'var(--crimson)',
          marginTop:'16px', paddingTop:'16px',
          borderTop:'1px solid var(--border)',
          width:'100%',
        }}>
          View {ind.title} Applications →
        </div>
      </div>
    </Link>
  );
}
