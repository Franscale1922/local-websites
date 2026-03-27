import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';

export const metadata: Metadata = {
  title: 'How to Know if Your Electrical Panel Needs Upgrading | Premier Electrical Services',
  description: 'Seven signs your electrical panel is running out of capacity — and when it becomes a safety issue. From licensed electricians in Skagit & Whatcom County, WA.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function PanelUpgradeSignsPost() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Know if Your Electrical Panel Needs Upgrading',
        description: 'Seven signs your electrical panel is running out of capacity — and when it becomes a safety issue.',
        author: { '@type': 'Organization', name: 'Premier Electrical Services' },
        publisher: { '@type': 'Organization', name: 'Premier Electrical Services', url: 'https://premierelectricalsvc.com' },
        datePublished: '2025-03-01',
        dateModified: '2025-03-01',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://premierelectricalsvc.com/blog/panel-upgrade-signs' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do I know if my electrical panel needs to be replaced?', acceptedAnswer: { '@type': 'Answer', text: 'The most common signs: breakers that trip frequently or won\'t stay reset, a fuse box instead of a breaker panel, flickering lights when appliances start up, no room to add new circuits, and panels from known problem manufacturers (Federal Pacific, Zinsco, Pushmatic). If your panel is over 30 years old, have it assessed.' } },
          { '@type': 'Question', name: 'Is a 100 amp panel enough for a modern home?', acceptedAnswer: { '@type': 'Answer', text: 'For most homes built before 1990, 100A service was standard — and it may still be enough if you don\'t have high loads like an EV charger, heat pump, or electric dryer. But for modern usage patterns, 200A is the standard. If you want to add an EV charger or other high-draw circuits, you\'ll almost always need 200A.' } },
          { '@type': 'Question', name: 'What brands of panels are considered dangerous?', acceptedAnswer: { '@type': 'Answer', text: 'Federal Pacific Electric (FPE) panels with Stab-Lok breakers, Zinsco and GTE-Sylvania panels, and Pushmatic panels all have documented reliability and safety issues. Many insurers won\'t cover homes with these panels without a surcharge or replacement requirement. If you have one, have it evaluated.' } },
          { '@type': 'Question', name: 'Can I add circuits to an old panel instead of replacing it?', acceptedAnswer: { '@type': 'Answer', text: 'Sometimes — it depends on the panel brand, its current load, and what you want to add. If the panel has available slots and is from a reliable manufacturer, adding a circuit may be fine. If it\'s a known problem brand or is near capacity, replacement is the right call. An electrician needs to look at it to give you an honest answer.' } },
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
        <img src="/images/hero-panel.jpg" alt="Residential electrical panel in Skagit County home" className="services-page-hero-bg" />
        <div className="services-page-hero-overlay" />
        <div className="services-page-hero-content">
          <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Electrical Panels</span>
          <h1>How to Know if Your Panel Needs Upgrading.</h1>
          <p style={{ maxWidth: '560px', marginBottom: '28px', color: 'rgba(255,255,255,0.88)' }}>
            Seven signs your panel is running out of capacity — and when it becomes a safety issue, not just an inconvenience.
          </p>
        </div>
      </section>

      <div style={{ background: '#F7F8FA', padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', fontSize: '0.8rem', color: '#888', flexWrap: 'wrap' }}>
          <a href="/blog" style={{ color: '#888', textDecoration: 'none' }}>← All Guides</a>
          <span>·</span>
          <span>Electrical Panels</span>
          <span>·</span>
          <span>March 2025 · 6 min read</span>
        </div>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.75', color: '#333', marginBottom: '32px' }}>
          Your electrical panel is the nerve center of your home. When it was installed — whether in 1965 or 2005 — it was sized for the electrical loads of that era. Modern homes run far more current. Here are the signs that your panel is struggling to keep up, and when the issue becomes a safety concern.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>1. Breakers That Trip Repeatedly</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          A breaker that trips occasionally when you run multiple high-draw appliances is doing its job. A breaker that trips repeatedly on circuits with normal loads — or one that won&apos;t stay reset — is telling you something is wrong. Common causes: the circuit is overloaded, there&apos;s a fault somewhere downstream, or the breaker itself is failing. Either way, it needs diagnosis.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>2. You Still Have a Fuse Box</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          Fuse boxes were the standard before modern circuit breakers. They work — but they have real limitations. Fuses must be replaced every time they blow (vs. simply resetting a breaker). They often can&apos;t support modern loads. And they&apos;re a red flag for home insurers and home buyers. If you have a fuse box, panel replacement should be on your radar.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>3. Lights Flicker or Dim When Appliances Start</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          If your lights dim noticeably when your refrigerator compressor kicks on or your HVAC starts, your panel may be undersized for the loads it&apos;s carrying. Some voltage drop on startup is normal — a dramatic or persistent dip is a sign that you&apos;re near the limit of your service capacity.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>4. No Room for New Circuits</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          If you want to add an EV charger, hot tub, workshop circuit, or even a dedicated kitchen appliance outlet and your panel has no open slots, you have two options: tandem breakers (where allowed) or a panel upgrade. For large loads like EV chargers, you almost always need a dedicated 50A circuit — and that requires both available slots and adequate total capacity.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>5. You Have a 100A Service Panel</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          100A service was standard in homes built through the 1980s. It&apos;s generally adequate for a modest home without high-draw electric appliances. But if you have — or want — an EV charger, electric heat pump, electric water heater, or anything close to all-electric living, 200A is where you need to be. Most utilities and electricians recommend 200A for any home contemplating an EV charger.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>6. Your Panel Is a Known Problem Brand</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          Certain panel manufacturers have documented safety and reliability issues that go beyond age. The most common ones we see in the region:
        </p>
        <ul style={{ lineHeight: '1.9', color: '#444', paddingLeft: '24px', marginBottom: '24px' }}>
          <li><strong>Federal Pacific Electric (FPE) / Stab-Lok</strong> — Breakers that fail to trip under overload conditions. Widespread in homes built 1950s–1980s.</li>
          <li><strong>Zinsco / GTE-Sylvania</strong> — Breakers that can melt and fuse to the bus bar, preventing them from tripping at all.</li>
          <li><strong>Pushmatic</strong> — More reliable than the above, but parts are no longer manufactured and they require specific maintenance.</li>
        </ul>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          Many home insurers won&apos;t cover homes with FPE or Zinsco panels without a surcharge — or at all. If you have one of these, get it evaluated.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>7. Burning Smell or Scorch Marks Near the Panel</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          This is not a &quot;call us when you get a chance&quot; situation. A burning smell, scorch marks, or warmth coming from your panel or its surroundings is an emergency. Turn off what you can, leave the area, and call. These are signs of active heat — which means fire risk.
        </p>

        <div style={{ background: 'var(--color-primary)', borderRadius: '12px', padding: '40px', margin: '56px 0', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '12px' }}>Not Sure About Your Panel?</h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', marginBottom: '28px', lineHeight: '1.6' }}>
            We do free panel assessments on most residential project calls. We&apos;ll look at what you have, tell you honestly what we see, and give you clear options — not a blanket sell on a full replacement.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Get a Free Estimate</a>
          </div>
        </div>

        <h2 style={{ marginTop: '48px', marginBottom: '24px' }}>Common Panel Questions</h2>
        <FAQAccordion faqs={[
          { q: 'How do I know if my electrical panel needs to be replaced?', a: 'The most common signs: breakers that trip frequently or won\'t stay reset, a fuse box instead of a breaker panel, flickering lights when appliances start up, no room to add new circuits, and panels from known problem manufacturers (Federal Pacific, Zinsco, Pushmatic). If your panel is over 30 years old, have it assessed.' },
          { q: 'Is a 100 amp panel enough for a modern home?', a: 'For most homes built before 1990, 100A service was standard — and it may still be enough if you don\'t have high loads like an EV charger, heat pump, or electric dryer. But for modern usage patterns, 200A is the standard. If you want to add an EV charger or other high-draw circuits, you\'ll almost always need 200A.' },
          { q: 'What brands of panels are considered dangerous?', a: 'Federal Pacific Electric (FPE) panels with Stab-Lok breakers, Zinsco and GTE-Sylvania panels, and Pushmatic panels all have documented reliability and safety issues. Many insurers won\'t cover homes with these panels without a surcharge or replacement requirement. If you have one, have it evaluated.' },
          { q: 'Can I add circuits to an old panel instead of replacing it?', a: 'Sometimes — it depends on the panel brand, its current load, and what you want to add. If the panel has available slots and is from a reliable manufacturer, adding a circuit may be fine. If it\'s a known problem brand or is near capacity, replacement is the right call. An electrician needs to look at it to give you an honest answer.' },
        ]} />

        <div style={{ marginTop: '48px', padding: '24px 0', borderTop: '1px solid rgba(0,0,0,0.09)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '0.88rem' }}>
          <a href="/blog" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>← Back to All Guides</a>
          <a href="/services/panel-upgrades" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>Panel Upgrade Service →</a>
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
