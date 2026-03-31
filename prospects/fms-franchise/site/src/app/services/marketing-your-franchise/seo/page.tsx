import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise SEO Services That Drive Qualified Leads | FMS Digital',
  description: 'Franchise SEO services designed to generate qualified leads, improve local rankings, and scale visibility across multiple locations. FMS blends traditional SEO with GEO to grow your franchise network.',
};

const SERVICES = [
  {
    title: 'Local SEO for Unit Growth',
    icon: '📍',
    items: [
      'Dedicated landing pages per location',
      'Google Business Profile optimization',
      'Consistent NAP data across directories',
      'Targeted keyword strategy by territory',
      'Review & reputation management',
      'Local link building campaigns',
    ],
  },
  {
    title: 'High-Performing Location Pages',
    icon: '🏆',
    items: [
      'Higher rankings for "near me" searches',
      'Structured content for Generative Engine Optimization (GEO)',
      'Mobile-first UX & Core Web Vitals',
      'E-E-A-T authority signals',
      'Unique localized content — no thin templates',
    ],
  },
  {
    title: 'Technical SEO for Franchise Websites',
    icon: '⚙️',
    items: [
      'Site architecture audits',
      'Crawlability and indexing optimization',
      'Page speed & Core Web Vitals',
      'Schema markup for every location',
      'Canonical & hreflang management',
    ],
  },
  {
    title: 'Geo-Targeted Local Content',
    icon: '🗺️',
    items: [
      'Hyper-local keyword strategy',
      'Community relevance signals',
      'Localized social proof integration',
      'Location-specific blog content',
    ],
  },
  {
    title: 'Franchise SEO Analytics & Reporting',
    icon: '📊',
    items: [
      'GEO appearances tracking',
      'Rankings by location dashboard',
      'Local traffic growth metrics',
      'Lead conversion attribution',
      'ROI tied to your franchise pipeline',
    ],
  },
];

const FAQS = [
  {
    q: 'What makes franchise SEO different?',
    a: 'Franchise SEO requires balancing national brand visibility with local dominance across multiple locations, while avoiding thin templates & duplicate content, maintaining consistency, and empowering franchisees with localized tools. FMS builds tailored strategies that strengthen both corporate authority and unit-level visibility.',
  },
  {
    q: 'Does each location really need unique content?',
    a: 'In short – yes. Google rewards unique, locally-relevant content to avoid thin/duplicate penalties. We create unique pages with hyper-local keywords, community details, and local social proof to help each unit rank higher in "near me" and local pack results.',
  },
  {
    q: 'What is GEO and why does it matter for franchises?',
    a: 'GEO (Generative Engine Optimization) optimizes content for AI-powered results (Google AI Overviews, ChatGPT citations) using E-E-A-T signals, structured formats like FAQs and lists, and clear authority markers. We blend it with traditional SEO to help your brand appear as the trusted answer in generative searches.',
  },
  {
    q: 'What does a free SEO audit cover?',
    a: 'Our no-obligation audit reviews your current visibility (national and local), identifies gaps in location pages, GBP optimization, technical issues, duplicate content risks, and GEO readiness. You\'ll receive actionable recommendations and estimated impact tailored to your franchise model.',
  },
];

const FMS_DIGITAL_LINKS = [
  { label: 'Lead Generation', href: '/fms-digital/lead-generation' },
  { label: 'Branding & Marketing', href: '/fms-digital/franchise-branding-services' },
  { label: 'Website Design', href: '/fms-digital/website-design' },
  { label: 'Social Media Strategy', href: '/fms-digital/franchise-social-media-strategy' },
  { label: 'Tradeshows & Events', href: '/fms-digital/franchise-tradeshows-lead-generation' },
  { label: 'Success Stories', href: '/fms-digital/franchise-success-stories' },
  { label: 'FMS Digital Overview', href: '/fms-digital' },
];

export default function FranchiseSEOPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 60%, #0d2b4e 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/fms-digital">FMS Digital</a><span>›</span>
            <span>SEO &amp; Digital Advertising</span>
          </div>
          <span className="eyebrow" style={{ color: '#38bdf8' }}>FMS Digital — SEO Services</span>
          <h1 style={{ color: '#fff' }}>Franchise SEO That Drives Qualified Leads</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '680px' }}>
            In today's AI-powered search landscape, ranking on search engines and appearing in generative AI results is essential for attracting motivated franchise buyers. FMS delivers franchise-specialized SEO services optimized for traditional rankings and Generative Engine Optimization (GEO).
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">
              Get Your Free Franchise SEO Audit
            </Link>
            <Link href="/fms-digital" className="btn btn-outline-white">
              Explore FMS Digital
            </Link>
          </div>
        </div>
      </div>

      {/* ── Why FMS ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Brands Choose FMS</span>
            <h2>More Visibility. More Local Leads. More Royalty Revenue.</h2>
            <p>FMS combines franchise-industry expertise with full-funnel SEO strategy — serving both the corporate brand and every unit in your network.</p>
          </div>
          <div className="grid-3" style={{ gap: '2rem' }}>
            {[
              { icon: '🔗', title: 'Full-Funnel Strategy', body: 'Blending classic SEO with GEO and local strategies to fuel franchise sales pipelines — from brand awareness through candidate inquiry.' },
              { icon: '🎯', title: 'Franchise-Specific Expertise', body: 'Franchise SEO experts who optimize for your industry, high-intent keywords, and the evolving landscape of AI-powered search.' },
              { icon: '📈', title: 'Measurable Results', body: 'Sustainable organic traffic, more qualified inquiries, reduced ad reliance, and scalable royalty growth — all tied to clear KPIs.' },
            ].map((item) => (
              <div key={item.title} className="card" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#4a5568', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What We Deliver</span>
            <h2>FMS Franchise SEO Services &amp; Growth Tools</h2>
            <p>End-to-end local, technical, and content SEO — purpose-built for multi-location franchise brands.</p>
          </div>
          <div className="grid-2" style={{ gap: '2rem' }}>
            {SERVICES.map((svc) => (
              <div key={svc.title} className="card" style={{ padding: '2rem 2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{svc.icon}</span>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#2d4135' }}>{svc.title}</h3>
                </div>
                <ul className="check-list">
                  {svc.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid-4" style={{ gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '900+', label: 'Franchise Brands Served' },
              { num: '25+', label: 'Years of Franchise Expertise' },
              { num: '67', label: 'Dedicated Team Members' },
              { num: '1,500+', label: 'Brands Trust FMS' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#eebc4a', fontFamily: 'Montserrat, sans-serif', lineHeight: 1 }}>{stat.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginTop: '0.5rem', fontFamily: 'Source Sans 3, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Expect ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Process</span>
            <h2>The FMS Franchise SEO Approach</h2>
            <p>From audit to execution, we build SEO strategies that compound over time — driving organic growth that compounds into pipeline.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', title: 'Franchise SEO Audit', body: 'We start with a deep-dive audit of your current national and local search presence, identifying your largest opportunities and most critical technical issues.' },
              { step: '02', title: 'Strategy Development', body: 'We build a custom franchise SEO roadmap addressing local pages, GBP, technical infrastructure, and GEO content — all aligned to your growth targets.' },
              { step: '03', title: 'Execution & Content', body: 'Our team executes on-page optimization, location page builds, schema markup, and localized content creation across your entire franchise network.' },
              { step: '04', title: 'Reporting & Iteration', body: 'Monthly dashboards show rankings by location, organic traffic growth, GEO appearances, and ROI tied directly to your franchise pipeline.' },
            ].map((p) => (
              <div key={p.step} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#35a84a', fontFamily: 'Montserrat, sans-serif', marginBottom: '0.75rem', lineHeight: 1 }}>{p.step}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.65rem', color: '#2d4135' }}>{p.title}</h3>
                <p style={{ color: '#4a5568', lineHeight: 1.7, margin: 0, fontSize: '0.92rem' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="eyebrow">FAQs</span>
            <h2>FAQs About Franchise SEO</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {FAQS.map((faq) => (
              <div key={faq.q} style={{ background: '#f7f7f7', borderRadius: '12px', padding: '1.5rem 1.75rem', borderLeft: '4px solid #35a84a' }}>
                <div style={{ fontWeight: 700, color: '#2d4135', marginBottom: '0.6rem', fontSize: '1rem', fontFamily: 'Montserrat, sans-serif' }}>{faq.q}</div>
                <p style={{ color: '#4a5568', lineHeight: 1.75, margin: 0, fontSize: '0.95rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FMS Digital Cross-Links ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">FMS Digital Suite</span>
            <h2>More FMS Digital Services</h2>
            <p>SEO works best alongside a full digital growth strategy. Explore all FMS Digital capabilities.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {FMS_DIGITAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-outline" style={{ minWidth: '220px', justifyContent: 'center', textAlign: 'center' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow eyebrow-gold">Ready to Rank?</span>
          <h2>Get Your Free Franchise SEO Audit Today</h2>
          <p>Find out where your brand stands nationally and locally — with a no-obligation audit from FMS franchise SEO specialists. Includes GEO readiness, technical issues, and local opportunity mapping.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">
              Get My Free SEO Audit
            </Link>
            <a href="tel:8006100292" className="btn btn-outline-white">
              Call 800-610-0292
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
