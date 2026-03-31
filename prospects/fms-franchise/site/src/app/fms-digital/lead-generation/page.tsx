import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Lead Generation & Sales Pipeline Support | FMS Digital',
  description: 'Franchise lead generation and sales pipeline support to help brands grow faster, generate qualified leads, and convert prospects into franchise owners.',
};

const SERVICES = [
  { icon: '🌐', title: 'High-Converting Websites & Landing Pages', desc: 'Conversion-optimized franchise websites and dedicated landing pages built to capture and qualify leads at every stage of the buyer journey.' },
  { icon: '🔍', title: 'SEO & Organic Visibility', desc: 'Franchise-focused SEO strategies that drive organic search traffic from qualified franchise buyers actively searching for opportunities like yours.' },
  { icon: '📣', title: 'Digital Advertising & Paid Campaigns', desc: 'PPC, Facebook/Meta ads, LinkedIn targeting, and retargeting campaigns built specifically for franchise lead generation with clear ROI tracking.' },
  { icon: '🤖', title: 'CRM & Automation Systems', desc: '24/7 lead nurturing through CRM pipelines, auto-responders, and automated follow-up sequences that qualify and advance leads without manual effort.' },
  { icon: '🎬', title: 'Targeted Videos', desc: 'Franchise-specific video content that tells your brand story, showcases franchisee success, and converts prospects into serious inquiries.' },
  { icon: '✍️', title: 'Content Curation & Blogging', desc: 'Strategic content that establishes authority, improves SEO, and answers buyer questions — moving cold leads to warm prospects.' },
  { icon: '📱', title: 'Social Media Strategy', desc: 'Multi-platform social presence that builds brand trust, showcases franchisee stories, and generates organic awareness across your target markets.' },
  { icon: '📊', title: 'Franchise Lead Gen Sites', desc: 'Standalone franchise recruitment sites designed specifically to attract, educate, and convert franchise buyers — separate from your consumer-facing site.' },
];

const WHY = [
  { title: 'Full-Funnel Expertise', desc: 'From SEO and lead generation to CRM closing and franchisee tools — we cover the entire sales journey under one roof.' },
  { title: 'Measurable Results', desc: 'More leads, higher conversions, stronger franchise units, and rising royalties you can quantify and track month over month.' },
  { title: 'Tailored, Hands-On Guidance', desc: '20+ marketing experts who listen and work directly with you — not handed off to a third party or a junior account manager.' },
  { title: 'Franchise-Specific', desc: 'Every strategy is built for franchising. We understand FDD compliance, franchisee recruitment psychology, and territory-based targeting.' },
];

const RESULTS = [
  { stat: 'More Qualified Leads', desc: 'Websites, SEO, PPC, and ads that attract ready-to-buy prospects directly to your pipeline.' },
  { stat: 'Franchisee Revenue Boost', desc: 'Tools that help franchise owners drive local sales and unit performance for stronger royalties.' },
  { stat: 'Automated Nurturing', desc: 'CRM and auto-responders that engage leads without manual effort — 24/7 follow-up on autopilot.' },
  { stat: 'National Scale', desc: 'Digital strategies that build brand exposure and household-name recognition across the country.' },
];

export default function LeadGenerationPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 60%, #0d2b4e 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <a href="/fms-digital" style={{ color: 'rgba(255,255,255,0.6)' }}>FMS Digital</a>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Lead Generation</span>
          </div>
          <span className="eyebrow" style={{ color: '#38bdf8' }}>FMS Digital Services</span>
          <h1 style={{ color: '#fff' }}>Franchise Lead Generation That Closes Deals & Scales Revenue</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '680px' }}>
            Turning inquiries into franchise sales takes the right tools and strategy. Our full-funnel services combine high-converting landing pages, SEO, targeted digital advertising, and CRM automation — customized to fill your pipeline, nurture leads, sell franchises, and grow royalties.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Pipeline Audit</a>
            <Link href="/fms-digital" className="btn btn-outline-white btn-lg">FMS Digital Overview</Link>
          </div>
        </div>
      </div>

      {/* Why FMS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Brands Choose FMS</span>
            <h2>For Franchise Sales Support</h2>
            <div className="divider" />
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {WHY.map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#0d2b4e', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">How FMS Fuels Expansion</span>
            <h2>Franchise Sales Services That Drive Growth</h2>
            <div className="divider" />
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {RESULTS.map((r, i) => (
              <div key={r.stat} style={{ display: 'flex', gap: '1.25rem', background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #0d1b2a, #1a3d5c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: '#38bdf8', fontSize: '1.1rem' }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{r.stat}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.65 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Services</span>
            <h2>Digital Franchise Sales & Growth Tools</h2>
            <div className="divider" />
            <p>Comprehensive end-to-end support through the entire sales funnel, from lead generation to closed deals and ongoing growth.</p>
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ background: '#fff', borderRadius: '16px', padding: '1.75rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case spotlight */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a3055)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-light" style={{ color: '#38bdf8' }}>Success Spotlight</span>
            <h2 style={{ color: '#fff', marginBottom: '1.25rem' }}>The Scoop N' Scootery</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
              We delivered high-converting digital tools that helped turn a popular Charlotte, NC ice cream chain into a fast-growing franchise sensation — with a full lead generation system, franchise recruitment site, and national digital ad strategy built from the ground up.
            </p>
            <a href="https://thescoopnscooteryfranchising.com/" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">See the Full Story →</a>
          </div>
        </div>
      </section>

      {/* FMS Digital nav bar */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">FMS Digital Suite</span>
            <h2>Explore All Digital Services</h2>
            <div className="divider" />
          </div>
          <div className="grid-3" style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
            {[
              { label: 'Branding & Marketing', href: '/fms-digital/franchise-branding-services' },
              { label: 'Website Design', href: '/fms-digital/website-design' },
              { label: 'Social Media Strategy', href: '/fms-digital/franchise-social-media-strategy' },
              { label: 'Tradeshows & Events', href: '/fms-digital/franchise-tradeshows-lead-generation' },
              { label: 'Success Stories', href: '/fms-digital/franchise-success-stories' },
              { label: 'FMS Digital Overview', href: '/fms-digital' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ display: 'block', padding: '1.25rem 1.5rem', background: '#fff', borderRadius: '12px', border: '1.5px solid #e2e8f0', fontWeight: 600, fontSize: '0.9rem', color: '#1a3d20', textDecoration: 'none', transition: 'all 0.2s' }}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Fill Your Franchise Pipeline?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Get a free franchise sales pipeline audit and see exactly where your lead generation needs to improve.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Get Free Pipeline Audit</a>
            <Link href="/about-us/contact" className="btn btn-outline-white btn-lg">Contact FMS Digital</Link>
          </div>
        </div>
      </section>
    </>
  );
}
