import type { Metadata } from 'next';
import FAQAccordion from '../components/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ | Premier Electrical Services — Skagit & Puget Sound, WA',
  description: 'Answers to common questions about electrical panels, EV chargers, generators, historic home rewiring, service calls, and what to expect working with Premier Electrical in Skagit, Whatcom, and surrounding counties.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const CATEGORIES = [
  {
    label: 'Working With Us',
    eyebrow: 'Before You Call',
    heading: 'What to Expect When You Hire Us',
    faqs: [
      { q: 'Do you offer free estimates?', a: 'Yes — on most projects. We come out, look at the job, and give you a clear number before any work starts. No obligation, no pressure. What we quote is what you pay. If it\'s a simple service call, we\'ll tell you the rate upfront so there are no surprises.' },
      { q: 'How quickly can I get someone out?', a: 'Most non-emergency requests are scheduled within 1–3 business days. If you\'re dealing with a safety issue — burning smell, a breaker that won\'t reset, sparking outlets — call us directly at (360) 421-5230 and we\'ll prioritize it.' },
      { q: 'Will you actually show up when you say you will?', a: 'Yes. We schedule specific arrival windows and we honor them. No four-hour waiting windows, no last-minute reschedules, no ghosting. If something genuinely changes, we call you beforehand with notice — not an excuse after.' },
      { q: 'How do I know what the final price will be?', a: 'We give you a written quote before work begins. That\'s the price. We don\'t add surprise charges for materials, travel, or permit fees after the fact. The only time a price changes is if the scope of work changes — and we discuss that with you before proceeding.' },
      { q: 'Are you licensed, bonded, and insured?', a: 'Yes. License number PREMIES821LL, issued by Washington State Department of Labor & Industries. Bonded and insured. A+ rated with the Better Business Bureau. You can verify our license directly at L&I\'s contractor lookup site.' },
      { q: 'What areas do you serve?', a: 'We serve Skagit, Whatcom, San Juan, Island, Snohomish, and King counties — from Bellingham down to Seattle. We\'re based in Mount Vernon and cover both residential and commercial customers throughout the region.' },
    ],
  },
  {
    label: 'Panel Upgrades',
    eyebrow: 'Electrical Panels',
    heading: 'Is Your Panel Holding You Back?',
    faqs: [
      { q: 'How do I know if my electrical panel needs an upgrade?', a: 'The most common signs: breakers trip regularly when you run multiple appliances, you have a fuse box instead of a breaker panel, lights flicker or dim when large appliances start up, or you want to add a major load (EV charger, heat pump, hot tub) and there\'s no room. If any of these sound familiar, give us a call — we\'ll assess it and tell you exactly what you have.' },
      { q: 'What does a panel upgrade actually get me?', a: 'More capacity for modern loads, modern breakers that are safer and resettable (vs. fuses), the ability to add circuits for EV chargers or heat pumps, and a system that passes inspection. It also protects your homeowner\'s insurance — many insurers won\'t cover homes with certain older panels.' },
      { q: 'How much does a panel upgrade cost?', a: 'Most residential panel upgrades in Washington State run $1,500–$4,000 depending on amperage (100A vs 200A), where the panel is located, whether the utility requires a service entrance upgrade, and if a utility disconnect is needed. We give you a clear quote before starting — no vague ranges, no surprises.' },
      { q: 'Do I need a permit for a panel upgrade?', a: 'Yes — always. Panel upgrades require an electrical permit and inspection in Washington State. We pull the permit, coordinate the utility disconnect (PSE, PUD, or your co-op), and schedule the inspection. You don\'t have to manage any of that yourself.' },
      { q: 'How long will my power be out during a panel upgrade?', a: 'Typically 4–8 hours for a residential panel replacement. We schedule with your utility in advance to minimize downtime, and we tell you exactly what to expect before the day of work.' },
    ],
  },
  {
    label: 'EV Charging',
    eyebrow: 'Electric Vehicle Chargers',
    heading: 'Charge at Home — The Right Way',
    faqs: [
      { q: 'Why can\'t I just use the regular outlet in my garage?', a: 'You can — but a standard 120V outlet adds only 4–5 miles of range per hour. A Level 2 charger adds 25–30 miles per hour. That\'s the difference between waking up to a half-charged car and a full one. Most EV owners switch to Level 2 within the first few months of ownership and don\'t look back.' },
      { q: 'What EV charger brands do you install?', a: 'We install Tesla Wall Connectors, JuiceBox units, ChargePoint Home Flex, Clipper Creek, and most other J1772-compatible Level 2 chargers. If you already have a charger in mind, we\'ll confirm it\'s compatible and size the circuit correctly.' },
      { q: 'Do I need to upgrade my panel first?', a: 'Not always. Many 200A panels have capacity for a dedicated 50A EV circuit without upgrading. If yours is near capacity or you have an older 100A panel, we\'ll tell you upfront and can handle both at the same time. We assess your panel before recommending anything.' },
      { q: 'Does an EV charger installation require a permit?', a: 'Yes — in Washington State, Level 2 charger installations require a permit. This protects your insurance and ensures the work is done safely. We pull the permit, coordinate the inspection, and make sure everything is signed off. You don\'t have to manage it.' },
      { q: 'How long does installation take?', a: 'Most residential EV charger installs take 2–4 hours. If a panel upgrade is also needed, plan a full day. Either way, you\'ll know the scope before we arrive.' },
    ],
  },
  {
    label: 'Generators',
    eyebrow: 'Backup Power',
    heading: 'Be Ready Before the Power Goes Out',
    faqs: [
      { q: 'What\'s the difference between a standby generator and a portable one?', a: 'A standby (whole-home) generator is permanently installed outside your home, connected to natural gas or propane, and switches on automatically within seconds of an outage — no action required from you. A portable generator runs on gasoline, must be manually started, and uses a transfer switch or interlock to connect safely. We install both.' },
      { q: 'Can I just plug a generator into my dryer outlet?', a: 'No — and doing so is genuinely dangerous. Running a generator into your home without a proper transfer switch or interlock can send power back into the utility grid, which can kill utility workers and damage your equipment. All generator connections must be done through a properly installed transfer switch or interlock. We do this correctly.' },
      { q: 'What size generator do I need?', a: 'It depends on what you want to power. Critical circuits only (heat, refrigerator, well pump, a few lights) might need 7,500–12,000 watts. Whole-home coverage starts at around 20KW. We do a load analysis for your specific home and tell you exactly what makes sense — and what you don\'t need to spend money on.' },
      { q: 'Can you connect a generator to natural gas?', a: 'Yes. If you have natural gas service, a permanent gas connection is the most convenient option — no fuel storage, no refilling, no running out at 2am during a storm. We handle both the electrical and gas line connection (or coordinate with a licensed plumber for the gas side).' },
      { q: 'Do generators require a permit in Washington State?', a: 'Yes. Generator installations — whether standby or transfer switch — require an electrical permit. We pull it, schedule the inspection, and make sure everything passes. The inspection protects you, your insurance, and the utility workers who maintain the lines near your home.' },
    ],
  },
  {
    label: 'Older & Historic Homes',
    eyebrow: 'Older Wiring Systems',
    heading: 'The Wiring Other Electricians Walk Away From',
    faqs: [
      { q: 'Do you work on homes with knob-and-tube wiring?', a: 'Yes — and it\'s one of our specialties. We have nearly 60 years of combined experience including extensive work on complex, older, and historic properties. A lot of electricians pass on this work. We don\'t. We\'ll assess what you actually have and give you honest recommendations — not a blanket scare tactic to replace everything.' },
      { q: 'Is my home with knob-and-tube wiring uninsurable?', a: 'Many home insurers won\'t cover — or will significantly surcharge — homes with active knob-and-tube wiring. That said, "active" is the key word. Some policies cover it if it\'s properly documented and no modifications have been made. We can assess the system and provide documentation that\'s useful when talking to your insurer.' },
      { q: 'What is aluminum wiring and why does it matter for my home?', a: 'Many homes built in the 1960s and 70s used aluminum instead of copper for branch circuits. Aluminum expands and contracts more than copper, causing connections to loosen over time — which leads to heat buildup and fire risk. The fix is proper pigtailing with rated AlumiConn connectors at every device and outlet. We do this correctly and documentably.' },
      { q: 'Will you damage my plaster walls when rewiring?', a: 'We work in historic homes regularly and take wall damage seriously. We use low-impact fishing techniques, work from attic and basement access where possible, and open walls only where necessary. We can\'t guarantee zero impact on older homes — but we keep it minimal and we tell you exactly what to expect before we start.' },
      { q: 'Can I add modern circuits to an older home without a full rewire?', a: 'Often yes. There\'s a spectrum between "do nothing" and "rewire the entire house." We assess what\'s there, identify what\'s actually a risk, and give you a phased plan that addresses real hazards without requiring you to rip everything out at once. That\'s the honest conversation — not a blanket sell on a full rewire.' },
    ],
  },
  {
    label: 'Service Calls & Repairs',
    eyebrow: 'Troubleshooting & Repairs',
    heading: 'When Something Isn\'t Right',
    faqs: [
      { q: 'Something smells like it\'s burning near an outlet. What should I do?', a: 'Stop using that outlet or switch immediately, and don\'t reset any breakers associated with it. A burning smell near electrical means heat — and heat means fire risk. Call us at (360) 421-5230. If you smell smoke or see scorch marks, treat it as an emergency.' },
      { q: 'A breaker keeps tripping. Is that a big deal?', a: 'It depends on why. A breaker tripping occasionally when you\'re running heavy loads is normal protection — that\'s what it\'s designed to do. A breaker that trips immediately when you reset it, or trips repeatedly on a circuit with normal loads, is telling you something is wrong. That one needs diagnosis.' },
      { q: 'I bought a house with questionable electrical work. Can you evaluate it?', a: 'Yes — and this is a smart call. We assess existing work, identify what\'s up to code and what isn\'t, and document it clearly. We tell you what\'s a real hazard and what\'s just ugly but safe. We don\'t recommend replacing everything just because an amateur did it — only what actually needs to be fixed.' },
      { q: 'Do you work on rental properties?', a: 'Yes. We work with landlords, property managers, and real estate investors throughout Skagit, Whatcom, and Snohomish counties. We understand turnover speed matters, and we provide written documentation of work completed so you have records for your tenants and insurance.' },
      { q: 'My GFCI outlet keeps tripping and won\'t reset. What does that mean?', a: 'A GFCI that won\'t stay reset typically means it\'s detecting a ground fault on the circuit — usually moisture intrusion or a wiring problem downstream of the outlet. Don\'t keep forcing it to reset. That outlet is doing its job by tripping. The underlying cause needs to be found and fixed.' },
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
          <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Your Questions</span>
          <h1>Straight Answers. No Runaround.</h1>
          <p style={{ maxWidth: '560px', marginBottom: '28px', color: 'rgba(255,255,255,0.88)' }}>
            Real answers about what the work costs, how long it takes, and what you actually need — before you commit to anything.
          </p>
          <div className="hero-ctas">
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Get a Free Estimate</a>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <div style={{ background: '#F7F8FA', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {CATEGORIES.map((cat, i) => (
              <a
                key={cat.label}
                href={`#cat-${i}`}
                style={{
                  padding: '14px 20px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  borderBottom: '2px solid transparent',
                  transition: 'border-color 0.2s, color 0.2s',
                  letterSpacing: '0.01em',
                }}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ CATEGORIES */}
      <div className="container" style={{ maxWidth: '820px', padding: '80px 24px' }}>
        {CATEGORIES.map((cat, i) => (
          <div key={cat.label} id={`cat-${i}`} style={{ marginBottom: '72px', scrollMarginTop: '80px' }}>
            <span className="eyebrow">{cat.eyebrow}</span>
            <h2 style={{ marginBottom: '8px' }}>{cat.heading}</h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-accent)', borderRadius: '2px', marginBottom: '36px' }} />
            <FAQAccordion faqs={cat.faqs} />
          </div>
        ))}

        {/* STILL HAVE QUESTIONS */}
        <div style={{
          background: 'var(--color-primary)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          marginTop: '16px',
        }}>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>Still Have a Question?</h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', marginBottom: '28px', fontSize: '1rem' }}>
            Call us — we pick up. Or send a message and we&apos;ll get back to you same day on most requests.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Send a Message</a>
          </div>
        </div>
      </div>

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
            <li><a href="/services/residential-wiring">Residential Wiring</a></li>
            <li><a href="/services/commercial-wiring">Commercial Wiring</a></li>
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
