import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Safety Silencers | PSI Automation — Motor Exhaust Noise Control',
  description: 'PSI Automation safety silencers for pneumatic motor exhaust — noise control and hearing protection for industrial air motor installations.',
};

export default function SafencersPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="container">
          <Link href="/products" className="breadcrumb">← Products <span>/ Safety Silencers</span></Link>
          <div className="eyebrow eyebrow--light">Exhaust Silencers</div>
          <h1>Protect Your Personnel from Motor Exhaust Noise</h1>
          <p className="page-hero-sub">
            Pneumatic motor exhaust is loud — often 90–110 dB without silencing. PSI&apos;s safety silencers reduce exhaust noise to safe levels while maintaining motor performance. Referenced in NASA safety documentation.
          </p>
          <div className="page-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Discuss Your Requirement →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', alignItems:'start'}}>
            <div>
              <div className="eyebrow">Why Silencers Matter</div>
              <h2>Motor Exhaust Without Silencing Can Cause Immediate Hearing Damage</h2>
              <p style={{marginTop:'20px', color:'var(--steel)', lineHeight:1.75, marginBottom:'20px'}}>
                The expanding compressed air exhausted from a vane motor creates significant turbulence noise. At a 1-meter distance, an unsilenced motor exhaust can reach 95–110 dB — well above the 85 dB 8-hour exposure limit established by OSHA.
              </p>
              <p style={{color:'var(--steel)', lineHeight:1.75, marginBottom:'20px'}}>
                PSI safety silencers reduce exhaust noise by 15–25 dB at standard operating conditions. The silencer mounts directly to the motor exhaust port and creates minimal back-pressure that would affect motor performance.
              </p>
              <p style={{color:'var(--steel)', lineHeight:1.75}}>
                Our silencer design has been cited in NASA safety publications for its effectiveness in aerospace ground support equipment applications.
              </p>
            </div>
            <div>
              <div style={{background:'var(--bg-light)', borderRadius:'var(--radius-md)', padding:'32px', marginBottom:'24px'}}>
                <h3 style={{color:'var(--navy)', fontSize:'1rem', marginBottom:'20px'}}>Silencer Selection</h3>
                {[
                  { q:'Which motors are compatible?', a:'PSI safety silencers are designed to fit our CDV, DV, and DVA series motors. Specify your motor model when ordering to receive the correct port-matching silencer.' },
                  { q:'Do silencers affect motor performance?', a:'Properly sized silencers add minimal back-pressure — typically less than 2 PSI — which has negligible effect on motor torque or speed output.' },
                  { q:'What noise reduction is achievable?', a:'Under typical operating conditions, PSI silencers reduce exhaust noise by 15–25 dB, bringing most installations within OSHA 85 dB 8-hour exposure limits.' },
                ].map(faq => (
                  <div key={faq.q} style={{marginBottom:'20px', paddingBottom:'20px', borderBottom:'1px solid var(--border)'}}>
                    <h4 style={{color:'var(--navy)', marginBottom:'8px', fontSize:'0.9rem'}}>{faq.q}</h4>
                    <p style={{fontSize:'0.84rem', color:'var(--steel)', lineHeight:1.6, maxWidth:'none'}}>{faq.a}</p>
                  </div>
                ))}
              </div>
              <div style={{background:'var(--navy)', borderRadius:'var(--radius-md)', padding:'24px', textAlign:'center'}}>
                <h4 style={{color:'white', marginBottom:'8px'}}>Order with Your Motor</h4>
                <p style={{color:'rgba(255,255,255,0.65)', fontSize:'0.84rem', marginBottom:'16px', maxWidth:'none'}}>Specify silencer requirements when you contact us for your motor order — we&apos;ll ensure correct sizing and fit.</p>
                <Link href="/contact" className="btn btn-primary btn-sm">Contact Engineering →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
