import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Premier Electrical Services — Skagit & Puget Sound, WA',
  description: 'Answers to common questions about electrical panel upgrades, EV charger installation, generators, historic home rewiring, and service in Skagit, Whatcom, and surrounding counties.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const FAQ_CATEGORIES = [
  {
    category: 'Getting Started',
    questions: [
      { q: 'Do you offer free estimates?', a: 'Yes — on most projects. We come out, look at the job, and give you a clear number before anything starts. No obligation, no pressure. If it\'s a straightforward service call, we\'ll tell you the rate upfront.' },
      { q: 'How do I schedule?', a: 'Call us at (360) 421-5230 or fill out the estimate form. We respond same day on most requests. If it\'s urgent, call directly — we pick up.' },
      { q: 'What areas do you serve?', a: 'We serve Skagit, Whatcom, San Juan, Island, King, and Snohomish counties — from Bellingham down to Seattle. Based in Mount Vernon, WA.' },
      { q: 'Are you licensed, bonded, and insured?', a: 'Yes. License number PREMIES821LL. Licensed, bonded, and insured in Washington State. A+ rated with the Better Business Bureau. You can verify our license at the Washington State Department of Labor & Industries website.' },
    ],
  },
  {
    category: 'Panel Upgrades',
    questions: [
      { q: 'How do I know if my panel needs an upgrade?', a: 'Common signs: breakers trip regularly with modern loads, you have a fuse box instead of a breaker panel, lights flicker when appliances start, or you want to add a major load like an EV charger or heat pump. Call us — we\'ll assess it.' },
      { q: 'How much does a panel upgrade cost?', a: 'Most residential panel upgrades run $1,500–$4,000 depending on amperage, location, and what work the utility requires. We give you a clear quote before starting — what we quote is what you pay.' },
      { q: 'Do you need a permit for a panel upgrade?', a: 'Yes. Panel upgrades require permits in Washington State. We pull it, coordinate the PUD or utility disconnect, and schedule the inspection. You don\'t have to manage any of that.' },
    ],
  },
  {
    category: 'EV Charging',
    questions: [
      { q: 'Do you install EV chargers?', a: 'Yes. We install Tesla Wall Connectors, JuiceBox units, ChargePoint, and other Level 2 home chargers. All installs are permitted and code-compliant.' },
      { q: 'Do I need a panel upgrade to add an EV charger?', a: 'Not always. Many 200A panels have available capacity for a dedicated 50A EV circuit. If yours is already near capacity or you have a 100A panel, we\'ll tell you and can handle the upgrade at the same time.' },
      { q: 'How fast will a Level 2 charger charge my car?', a: 'A Level 2 (240V) charger adds 25–30 miles of range per hour, compared to 4–5 miles per hour from a standard 120V outlet. Most EVs go from empty to full overnight.' },
    ],
  },
  {
    category: 'Historic & Older Homes',
    questions: [
      { q: 'Do you work on historic homes or knob-and-tube wiring?', a: 'Yes — and it\'s one of our specialties. We have nearly 60 years of combined experience including extensive work on complex, older, and historic properties. A lot of electricians pass on this work. We don\'t.' },
      { q: 'Is knob-and-tube wiring dangerous?', a: 'It can be. Undisturbed, original knob-and-tube in good condition may be low-risk. The danger increases when insulation is added over it, when it\'s been modified, or when modern loads run through it. Let us assess yours — we\'ll give you a straight answer about what you actually have.' },
      { q: 'What is aluminum wiring and why is it a problem?', a: 'Many homes from the 1960s–70s used aluminum for branch circuits instead of copper. Aluminum expands and contracts differently, causing loose connections and heat buildup. The standard fix is pigtailing with rated AlumiConn connectors at every device. We do this correctly.' },
    ],
  },
  {
    category: 'Generators',
    questions: [
      { q: 'Can you install a whole-home generator?', a: 'Yes. We handle both permanent standby systems and portable generator hookup via transfer switch or interlock. We size it for your actual load, wire the connection, pull the permit, and coordinate the inspection.' },
      { q: 'Can I just plug a generator into an outlet?', a: 'No — and doing so is extremely dangerous (backfeed can kill utility workers). You need a transfer switch or interlock kit installed between the generator and your panel. We install these correctly.' },
      { q: 'What size generator do I need?', a: 'Depends on what you want to power. Critical circuits (heat, fridge, well pump, lights) typically need 7,500–12,000 watts. Whole-home coverage starts around 20KW. We do a load analysis and tell you exactly what makes sense for your home.' },
    ],
  },
];

export default function FAQPage() {
  return (
    <main>
      <div className="demo-banner">🔍 Demo site — built for Premier Electrical Services. Not the live site.</div>
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo"><div className="nav-logo-icon">⚡</div>Premier Electrical Services</a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq" className="nav-link--active">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-icon">❓</div>
          <h1>Frequently Asked Questions</h1>
          <p className="page-hero-sub">
            Straight answers. No runaround. If your question isn&apos;t here, call us — we pick up.
          </p>
          <div className="page-hero-ctas">
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Get a Free Estimate</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          {FAQ_CATEGORIES.map(cat => (
            <div key={cat.category} style={{ marginBottom: '56px' }}>
              <h2 style={{ marginBottom: '28px', paddingBottom: '12px', borderBottom: '2px solid var(--color-accent)', display: 'inline-block' }}>
                {cat.category}
              </h2>
              <div className="faq-list">
                {cat.questions.map(faq => (
                  <div key={faq.q} className="faq-item-static">
                    <h3 className="faq-q-static">{faq.q}</h3>
                    <p className="faq-a-static">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ background: 'var(--color-tinted)', borderRadius: '12px', padding: '32px', textAlign: 'center', marginTop: '24px' }}>
            <h2 style={{ marginBottom: '10px' }}>Still Have a Question?</h2>
            <p style={{ color: '#4a5568', marginBottom: '24px', fontSize: '1rem' }}>
              Call us or send a message. We respond same day on most requests.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
              <a href="/contact" className="btn btn-secondary">Send a Message</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-logo"><div className="footer-brand-icon">⚡</div><div className="footer-brand-name">Premier Electrical Services</div></div>
            <p className="footer-tagline">Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/ev-charging">EV Charging</a></li>
            <li><a href="/services/generator-installation">Generators</a></li>
            <li><a href="/services/historic-home-rewiring">Historic Home Rewiring</a></li>
          </ul></div>
          <div className="footer-col"><h4>Contact</h4><ul>
            <li><a href={PHONE_TEL}>{PHONE}</a></li>
            <li><a href="/contact">Free Estimate</a></li>
            <li><a href="/about">About Us</a></li>
          </ul></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Premier Electrical Services</span>
          <span><a href={PHONE_TEL}>{PHONE}</a> · Lic. PREMIES821LL</span>
        </div>
      </footer>
    </main>
  );
}
