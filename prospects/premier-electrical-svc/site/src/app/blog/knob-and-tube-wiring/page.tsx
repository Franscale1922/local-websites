import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Knob-and-Tube Wiring: What Skagit County Homeowners Need to Know | Premier Electrical Services',
  description: 'The facts about knob-and-tube wiring — what is actually dangerous, what insurers require, and what your real options are. From licensed electricians in Skagit County, WA.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function KnobAndTubePost() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Knob-and-Tube Wiring: What Skagit County Homeowners Need to Know',
        description: 'The facts about knob-and-tube — what is actually dangerous, what insurers care about, and your real options.',
        author: { '@type': 'Organization', name: 'Premier Electrical Services' },
        publisher: { '@type': 'Organization', name: 'Premier Electrical Services', url: 'https://premierelectricalsvc.com' },
        datePublished: '2025-03-01',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://premierelectricalsvc.com/blog/knob-and-tube-wiring' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is knob-and-tube wiring dangerous?', acceptedAnswer: { '@type': 'Answer', text: 'Not inherently — original, unmodified knob-and-tube in good condition is a known quantity. The real dangers come from: insulation added over it (traps heat), improper modifications by previous owners, splicing into modern wiring, and overloaded circuits. An electrician who actually works on older homes regularly can tell you what\'s a real hazard and what\'s just old.' } },
          { '@type': 'Question', name: 'Will my insurance company cover a home with knob-and-tube wiring?', acceptedAnswer: { '@type': 'Answer', text: 'Many insurers won\'t cover — or will surcharge — homes with active knob-and-tube. Some policies only require that it isn\'t in use (abandoned in place is acceptable). We can provide written documentation of the wiring\'s condition, which some insurers accept.' } },
          { '@type': 'Question', name: 'Does knob-and-tube wiring need to be completely replaced?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. The right approach depends on what you have, what condition it\'s in, and what you\'re trying to accomplish. Partial rewire, targeted remediation, proper documentation, and full replacement are all options depending on the situation. We don\'t sell full rewires to everyone who calls about K&T.' } },
        ],
      }) }} />

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
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/blog" className="nav-link--active">Blog</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="services-page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-historic.jpg" alt="Knob-and-tube wiring in an older Skagit County home" className="services-page-hero-bg" />
        <div className="services-page-hero-overlay" />
        <div className="services-page-hero-content">
          <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Older Homes</span>
          <h1>Knob-and-Tube Wiring: What You Actually Need to Know.</h1>
          <p style={{ maxWidth: '560px', marginBottom: '28px', color: 'rgba(255,255,255,0.88)' }}>
            The facts — not the scare tactics — about what is dangerous, what insurers care about, and what your real options are.
          </p>
        </div>
      </section>

      <div style={{ background: '#F7F8FA', padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', fontSize: '0.8rem', color: '#888', flexWrap: 'wrap' }}>
          <a href="/blog" style={{ color: '#888', textDecoration: 'none' }}>← All Guides</a>
          <span>·</span>
          <span>Older Homes</span>
          <span>·</span>
          <span>March 2025 · 8 min read</span>
        </div>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.75', color: '#333', marginBottom: '32px' }}>
          Skagit and Whatcom counties have an enormous number of pre-1950s homes. Many of them have some knob-and-tube wiring. And many homeowners — buying, selling, or insuring these homes — get a lot of conflicting information about what that actually means. This guide is the version we give our clients: direct, without the upsell.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>What Is Knob-and-Tube Wiring?</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          Knob-and-tube (K&T) was the standard residential wiring method from roughly the 1880s through the 1940s. It consists of copper conductors run through ceramic knobs (which hold the wire away from structural members) and ceramic tubes (which protect the wire where it passes through framing). The wires are separated — hot and neutral run separately rather than in a sheathed cable — and are insulated in cloth-covered rubber.
        </p>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          It was a legitimate, functional system when installed. Much of it is still in place and still functional in homes throughout the region.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>What Actually Makes It Dangerous</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '16px' }}>
          Original K&T in good condition is a known quantity and not inherently dangerous. The problems come from what happens to it over time:
        </p>
        <ul style={{ lineHeight: '1.9', color: '#444', paddingLeft: '24px', marginBottom: '24px' }}>
          <li><strong>Insulation installed over it.</strong> K&T relies on free air circulation to dissipate heat. When attic insulation is blown or packed over the wiring, heat builds up. This is a real fire hazard — and it&apos;s extremely common.</li>
          <li><strong>Improper modifications.</strong> When previous owners or unqualified contractors spliced K&T into modern wiring, the connections are often not rated for the task. Bad splices cause heat and arcing.</li>
          <li><strong>Overloaded circuits.</strong> K&T circuits were sized for the loads of 1930. Plugging modern loads into them can push them past their design capacity, especially if fuses were replaced with higher-rated ones.</li>
          <li><strong>Deteriorated insulation.</strong> The cloth and rubber insulation used in K&T has a finite lifespan. In homes where the wiring was stressed by heat or moisture, the insulation becomes brittle and can crack.</li>
        </ul>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>What Insurers Care About</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          Home insurers approach K&T in several different ways depending on the carrier and the state. In Washington, the most common scenarios:
        </p>
        <ul style={{ lineHeight: '1.9', color: '#444', paddingLeft: '24px', marginBottom: '24px' }}>
          <li>Some insurers will not cover homes with active K&T wiring at all.</li>
          <li>Some will cover it with a surcharge.</li>
          <li>Some will cover it with a written electrician&apos;s assessment stating it&apos;s in good condition and unmodified.</li>
          <li>Some accept K&T that is &quot;abandoned in place&quot; (disconnected but not removed) with documentation.</li>
        </ul>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          We provide written inspection documentation that specifies the condition of what we observed. Some carriers accept this in lieu of full replacement. It depends on the carrier.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>Your Real Options</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '16px' }}>
          The honest range of approaches — not just &quot;replace everything:&quot;
        </p>
        <ul style={{ lineHeight: '1.9', color: '#444', paddingLeft: '24px', marginBottom: '24px' }}>
          <li><strong>Inspection &amp; documentation only.</strong> We assess what you have, document its condition, and you use that with your insurer. Appropriate if the system is original, unmodified, and in good condition.</li>
          <li><strong>Targeted remediation.</strong> We address the specific hazards: remove insulation over K&T, re-splice bad connections, isolate problem circuits. Doesn&apos;t touch what&apos;s fine.</li>
          <li><strong>Partial rewire.</strong> Replace K&T in the areas of highest concern — bedrooms, attic, kitchen — while leaving less critical runs alone. This phases the cost while addressing the highest-risk locations.</li>
          <li><strong>Full rewire.</strong> Replace all wiring throughout the home. Right for some situations, not necessary for all. We&apos;ll tell you when this is actually warranted.</li>
        </ul>

        <div style={{ background: 'var(--color-primary)', borderRadius: '12px', padding: '40px', margin: '56px 0', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '12px' }}>Have K&T and Not Sure Where You Stand?</h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', marginBottom: '28px', lineHeight: '1.6' }}>
            We work on older and historic homes throughout the region. We&apos;ll tell you what you actually have and give you the options — not just the most expensive one.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Get a Free Estimate</a>
          </div>
        </div>

        <h2 style={{ marginTop: '48px', marginBottom: '24px' }}>Knob-and-Tube Questions</h2>
        <FAQAccordion faqs={[
          { q: 'Is knob-and-tube wiring dangerous?', a: 'Not inherently — original, unmodified K&T in good condition is a known quantity. The real dangers come from: insulation added over it (traps heat), improper modifications, splicing into modern wiring, and overloaded circuits. An electrician familiar with older homes can tell you what\'s a real hazard and what\'s just old.' },
          { q: 'Will my insurance company cover a home with knob-and-tube wiring?', a: 'Many insurers won\'t cover — or will surcharge — homes with active knob-and-tube. Some policies only require it isn\'t in use (abandoned in place is acceptable to some carriers). We provide written documentation of the wiring\'s condition, which some insurers accept.' },
          { q: 'Does knob-and-tube wiring need to be completely replaced?', a: 'Not always. The right approach depends on what you have, its condition, and what you\'re trying to accomplish. Partial rewire, targeted remediation, proper documentation, and full replacement are all valid options. We don\'t blanket-sell full rewires to everyone who calls about K&T.' },
        ]} />

        <div style={{ marginTop: '48px', padding: '24px 0', borderTop: '1px solid rgba(0,0,0,0.09)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '0.88rem' }}>
          <a href="/blog" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>← Back to All Guides</a>
          <a href="/services/historic-home-rewiring" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>Historic Home Rewiring →</a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Licensed, bonded electricians in Skagit, Whatcom &amp; surrounding counties. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/historic-home-rewiring">Historic Home Rewiring</a></li>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/service-calls">Service Calls</a></li>
          </ul></div>
          <div className="footer-col"><h4>Resources</h4><ul>
            <li><a href="/blog">Electrical Guides</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Free Estimate</a></li>
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
