import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Industries Served | PSI Automation Vane Air Motors',
  description: 'PSI Automation vane air motors serve aerospace, automotive, chemical, mining, and petroleum industries. Explosion-proof, field-serviceable, 1/4 to 70 HP.',
};

const INDUSTRIES = [
  { slug:'aerospace', icon:'/icons/icon-aerospace.png', alt:'Aerospace jet illustration', title:'Aerospace', desc:'Power-to-weight critical applications. Ground support equipment, fuel system testing, actuation.', detail:'Where every pound of motor weight is weight not carried by the aircraft.' },
  { slug:'automotive', icon:'/icons/icon-automotive.png', alt:'Automotive manufacturing illustration', title:'Automotive', desc:'High-cycle continuous operation. Assembly line tooling, testing rigs, fixture actuation.', detail:'No thermal overload failures on the line. Air motors restart instantly.' },
  { slug:'chemical', icon:'/icons/icon-chemical.png', alt:'Chemical processing plant illustration', title:'Chemical', desc:'Explosion-proof operation without EX enclosures. Mixing, agitation, pump drives.', detail:'No sparks, no special enclosures required in classified atmospheres.' },
  { slug:'mining', icon:'/icons/icon-mining.png', alt:'Mining tunnel boring machine illustration', title:'Mining', desc:'Field-serviceable in remote locations. Drill drives, conveyor power, extraction.', detail:'Rebuilt underground without returning to the factory or a shop.' },
  { slug:'petroleum', icon:'/icons/icon-petroleum.png', alt:'Oil pump jack illustration', title:'Petroleum', desc:'Up to 70 HP for drilling and extraction. Safe in gas-rich environments.', detail:'Our DV62 series handles 70 HP — the most demanding extraction applications.' },
];

export default function ApplicationsPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">← Home <span>/ Industries</span></Link>
          <div className="eyebrow eyebrow--light">Industries We Serve</div>
          <h1>Air Motors Built for Environments That Break Everything Else</h1>
          <p className="page-hero-sub">
            Vane air motors thrive where electric motors fail. Here&apos;s where PSI Automation motors are deployed every day.
          </p>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="audience-grid">
            {INDUSTRIES.map(ind => (
              <Link key={ind.slug} href={`/applications/${ind.slug}`} className="audience-card">
                <div className="audience-icon-wrap">
                  <img src={ind.icon} alt={ind.alt} className="audience-icon-img" />
                </div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <p style={{fontSize:'0.82rem', color:'rgba(255,255,255,0.6)', fontStyle:'italic', marginTop:'8px'}}>{ind.detail}</p>
                <div style={{marginTop:'16px', fontSize:'0.82rem', fontWeight:700, color:'rgba(255,255,255,0.55)', letterSpacing:'0.04em'}}>View Applications →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:'60px', alignItems:'center'}}>
            <div>
              <div className="eyebrow eyebrow--light">Don&apos;t See Your Industry?</div>
              <h2 style={{color:'white'}}>We Work Across Every Industrial Sector</h2>
              <p className="cta-band-sub">If your application requires rotating power in a hazardous, extreme, or unusual environment — talk to us.</p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to an Engineer →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
