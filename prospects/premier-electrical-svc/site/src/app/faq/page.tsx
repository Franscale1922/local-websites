import type { Metadata } from 'next';
import FAQAccordion from '../components/FAQAccordion';

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
      {
        q: 'Do you offer free estimates, and what does that actually include?',
        a: 'Yes — on most projects, we come out, look at the job, and give you a clear number before anything starts. No obligation, no pressure. A free estimate means we assess your actual situation, not just give you a generic range over the phone. If it\'s a straightforward service call with a fixed diagnostic rate, we\'ll tell you that upfront before we come out.',
      },
      {
        q: 'How fast can you get to me?',
        a: 'We respond same day on most estimate requests. If it\'s an urgent issue — no power to a section of your home, a tripping breaker you can\'t reset, a smell near your panel — call us directly at (360) 421-5230. We pick up. For non-urgent projects, we typically schedule estimates within a few days.',
      },
      {
        q: 'What areas do you serve?',
        a: 'We serve Skagit, Whatcom, San Juan, Island, King, and Snohomish counties — from Bellingham down to the north Seattle metro. We\'re based in Mount Vernon, WA. If you\'re not sure whether you\'re in our service area, just call — the answer is usually yes.',
      },
      {
        q: 'Are you licensed, bonded, and insured — and how do I verify that?',
        a: 'Yes. License number PREMIES821LL. We\'re licensed, bonded, and insured in Washington State and carry an A+ rating with the Better Business Bureau. You can verify our license directly at the Washington State Department of Labor & Industries website (Lic. Lookup) — just search PREMIES821LL. We encourage it.',
      },
      {
        q: 'What happens after I contact you for an estimate?',
        a: 'We\'ll schedule a time to come see the job in person on most projects. We assess what\'s needed, explain it clearly, and give you a written quote. What we quote is what you pay — no surprise line items after the fact. If you decide to move forward, we pull permits where required and schedule the work. You\'re kept in the loop the whole way.',
      },
    ],
  },
  {
    category: 'Panel Upgrades',
    questions: [
      {
        q: 'How do I know if my panel actually needs an upgrade?',
        a: 'Common signs: breakers trip regularly under normal loads, you have a fuse box instead of a breaker panel, lights flicker when large appliances kick on, or you want to add something that draws significant power (EV charger, heat pump, hot tub). If you\'re unsure, call us — we\'ll look at it and give you a straight answer. We\'re not going to recommend an upgrade you don\'t need.',
      },
      {
        q: 'How much will a panel upgrade cost me?',
        a: 'Most residential panel upgrades in Washington run $1,500–$4,000 depending on the amperage (100A, 150A, 200A), where your panel is located, what the utility requires, and whether new service entrance cable is needed. We give you a clear written quote before we start. What we quote is what you pay.',
      },
      {
        q: 'Do you handle the permit and inspection, or do I have to deal with that?',
        a: 'We handle it entirely. Panel upgrades require a permit in Washington State, and we pull it, coordinate the utility disconnect with PSE, PUD, or your co-op, and schedule the inspection. You don\'t manage any of that process — it\'s part of the job.',
      },
      {
        q: 'How long will my power be off during the upgrade?',
        a: 'Most residential panel upgrades take one full day, with power out 4–8 hours. We coordinate with your utility to minimize the outage window and let you know in advance what to expect. We don\'t leave a job with your power still off.',
      },
      {
        q: 'Will upgrading my panel let me add an EV charger or other major appliance?',
        a: 'Usually yes — that\'s one of the most common reasons people upgrade. If you\'re currently at 100A and want to add a Level 2 EV charger plus run modern appliances, 200A is usually the right call. We\'ll assess your full load first and tell you exactly what makes sense for what you\'re trying to do — including whether a subpanel is a better solution in some cases.',
      },
    ],
  },
  {
    category: 'EV Charging',
    questions: [
      {
        q: 'What EV charger brands do you install?',
        a: 'We install Tesla Wall Connectors, JuiceBox, ChargePoint, Enel X JuiceBox, and other Level 2 home chargers. If you already have a charger you\'ve purchased, we can install that too — just let us know the model beforehand. All installs are permitted and code-compliant.',
      },
      {
        q: 'Do I need a panel upgrade before I can get a Level 2 charger?',
        a: 'Not always. Many 200A panels have available capacity for a dedicated 50A EV circuit — no upgrade needed. If your panel is already near capacity, or you have an older 100A panel, we\'ll tell you and can handle the upgrade and charger install at the same time. We assess your panel before we ever pick up a drill.',
      },
      {
        q: 'How much faster is a Level 2 charger compared to just plugging in?',
        a: 'Significantly faster. A standard 120V outlet (Level 1) adds roughly 4–5 miles of range per hour. A Level 2 (240V) charger adds 25–30 miles per hour — meaning most EVs go from empty to full overnight. If you\'re driving any real distance regularly, Level 2 is worth it.',
      },
      {
        q: 'Is a permit required for an EV charger install?',
        a: 'In most jurisdictions in Washington State, yes — especially when the install involves a new circuit from your panel. We pull the permit as part of the job. You don\'t have to coordinate that. A permitted install also matters for your homeowner\'s insurance and for resale.',
      },
      {
        q: 'Can I just use my dryer outlet to charge my EV?',
        a: 'Technically some adapters allow this, but we don\'t recommend it. A dryer outlet is a shared circuit, not a dedicated 50A EV circuit. Running an EV charger on an outlet not designed for continuous high-draw loads creates heat and wear over time. A properly installed dedicated circuit is the right way to do it — and the cost difference isn\'t large.',
      },
    ],
  },
  {
    category: 'Historic & Older Homes',
    questions: [
      {
        q: 'Do you work on historic homes and knob-and-tube wiring?',
        a: 'Yes — and it\'s genuinely one of our specialties. We have nearly 60 years of combined experience, including extensive work on complex, older, and historic properties across Anacortes, Bellingham, Sedro-Woolley, and the surrounding area. A lot of electricians won\'t touch this work, or they\'re not equipped to do it right. We are.',
      },
      {
        q: 'Is my knob-and-tube wiring actually dangerous?',
        a: 'It depends on the condition. Original, undisturbed knob-and-tube wiring in good condition may carry relatively low risk if the loads on it are appropriate. The real danger comes when: insulation has been blown over it (it needs air circulation), it\'s been modified or spliced improperly, or modern loads are running through it. We\'ll assess yours and give you a straight answer about what you actually have — not a blanket scare quote.',
      },
      {
        q: 'What\'s the deal with aluminum wiring, and is it fixable?',
        a: 'Many homes from the 1960s–70s used aluminum for branch circuits (not just the service entrance) instead of copper. Aluminum expands and contracts differently, which can cause loose connections and heat buildup at devices over time. The standard correction — not a full rewire — is pigtailing with rated AlumiConn connectors at every outlet, switch, and fixture. We do this correctly and completely.',
      },
      {
        q: 'My home has a fuse box. Is that a problem?',
        a: 'Fuse boxes themselves aren\'t inherently unsafe, but they come with real limitations: they\'re often undersized for modern loads, many insurers won\'t cover homes with them or charge higher rates, and they can\'t be upgraded with AFCI or GFCI protection the way modern panels can. We\'ll tell you where yours stands and whether upgrading makes sense for your situation.',
      },
      {
        q: 'Can you rewire my old home without tearing open all the walls?',
        a: 'Often yes — partially or fully. There are techniques (fishing wire through existing walls, using attic and crawlspace access, strategic small openings) that minimize drywall disruption significantly. The extent depends on your home\'s construction. We\'ll walk through it with you before any work starts so you know exactly what to expect.',
      },
    ],
  },
  {
    category: 'Generators',
    questions: [
      {
        q: 'Can you install a whole-home standby generator?',
        a: 'Yes. We handle permanent standby generator installations — including Generac units — as well as portable generator hookups via transfer switch or interlock kit. We size the system for your actual load, wire the connection, pull the permit, and coordinate the inspection. We also work with your propane or natural gas provider to ensure the fuel supply is properly set up.',
      },
      {
        q: 'I\'ve heard you can plug a generator into a dryer outlet. Is that safe?',
        a: 'No — and doing so is extremely dangerous. This is called backfeeding, and it can kill utility workers who don\'t know power is on the line. It can also damage your appliances and void your homeowner\'s insurance. The correct solution is a transfer switch or interlock kit installed between your generator and your panel. We install these properly and to code.',
      },
      {
        q: 'How do I know what size generator I need?',
        a: 'It depends on what you want to power. Critical circuits — heat, refrigerator, well pump, lights, medical equipment — typically need 7,500–12,000 watts. Whole-home coverage (including HVAC) starts around 20KW. We do a load analysis based on your actual home and tell you exactly what makes sense — there\'s no point paying for more capacity than you need.',
      },
      {
        q: 'Do I need a permit for a generator hookup?',
        a: 'Yes, for any permanent wiring connection — including transfer switches and interlock kits. We pull the permit as part of the job. A permitted install matters for safety, for your insurance, and for the next buyer if you sell.',
      },
      {
        q: 'What\'s the difference between a standby generator and a portable hookup?',
        a: 'A standby generator (like a Generac) is permanently installed, runs on natural gas or propane, and automatically starts when the power goes out — within seconds, with no action required from you. A portable generator hookup uses a transfer switch or interlock that lets you safely connect your portable generator to your panel during an outage. Standby is more convenient; portable hookups are far less expensive upfront. We can help you decide which is right for your situation.',
      },
    ],
  },
  {
    category: 'Service Calls & Repairs',
    questions: [
      {
        q: 'Can you come out same day for an electrical problem?',
        a: 'On most service calls, yes. Call us at (360) 421-5230 and describe what\'s happening. If it\'s a live issue — no power to part of your home, a burning smell, a breaker you can\'t reset — we prioritize it. We pick up the phone.',
      },
      {
        q: 'What kinds of problems do you diagnose and repair?',
        a: 'Tripped or failing breakers, outlets or switches with no power, flickering lights, dead circuits, mystery outages, GFCI failures, suspect or improper prior work, and anything else electrical that isn\'t working the way it should. If it\'s electrical, we look at it.',
      },
      {
        q: 'How are service calls priced?',
        a: 'Service calls have a diagnostic fee that we\'ll tell you before we come out. Once we identify the issue, we give you a price to fix it before we proceed. You\'re never surprised — you approve the repair before we start. If it turns out to be a larger issue (like a panel problem or damaged wiring), we explain that clearly and quote accordingly.',
      },
      {
        q: 'What if you come out and can\'t find the problem?',
        a: 'Electrical problems can be intermittent, which makes them harder to diagnose on a single visit. We\'ll tell you what we checked, what we found, and what we\'d recommend doing next — whether that\'s monitoring it, a specific test, or a more thorough inspection. We don\'t pad the bill for inconclusive visits.',
      },
      {
        q: 'Do you fix work done by other electricians or DIY wiring?',
        a: 'Yes — and we see it regularly. Prior electrical work that\'s incorrect or unsafe is something we correct all the time. We\'ll assess what\'s there, explain what was done wrong and why, and fix it properly with permitted work where required. We don\'t judge — we just get it right.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main>
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/recognition">Recognition</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq" className="nav-link--active">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="services-page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-faq.jpg" alt="Electrician explaining wiring to a homeowner" className="services-page-hero-bg" />
        <div className="services-page-hero-overlay" />
        <div className="services-page-hero-content">
          <h1>Your Questions, Straight Answers</h1>
          <p style={{ maxWidth: '560px', marginBottom: '28px', color: 'rgba(255,255,255,0.88)' }}>
            No runaround. No vague estimates. 30 real questions answered honestly — and if yours isn&apos;t here, call us.
          </p>
          <div className="hero-ctas">
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
              <FAQAccordion faqs={cat.questions} />
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
            <div className="footer-brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" />
            </div>
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
