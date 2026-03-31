import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing Your Franchise | Digital Marketing for Franchisors | FMS',
  description: 'Enhance your franchise model with expert digital marketing guidance from FMS. Strategic planning, franchise research, SEO, branding, and web design for franchise systems.',
  openGraph: {
    title: 'Franchise Marketing Services | FMS Franchise',
    description: 'FMS provides comprehensive franchise marketing services — SEO, branding, lead generation, web design, and social media — built specifically for franchisors.',
    url: 'https://www.fmsfranchise.com/services/marketing-your-franchise/',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630 }],
  },
};

const SERVICES = [
  {
    title: 'Branding & Marketing',
    icon: '🎯',
    description: 'From selling your franchise to lead generation and full management support, the FMS team assists you throughout the entire franchise development process with cohesive, high-impact brand strategy.',
    href: '/fms-digital/franchise-branding-services',
    cta: 'Explore Branding',
  },
  {
    title: 'Website Design',
    icon: '🖥️',
    description: 'The FMS team has the full creative capability to provide complete website design and development services. Need a redesign, landing page, or SEO-optimized franchise website? Our team delivers.',
    href: '/fms-digital/website-design',
    cta: 'View Web Design',
  },
  {
    title: 'SEO & Digital Advertising',
    icon: '📈',
    description: 'Our team strives to successfully rank your website on the first pages of search results — reducing dependence on paid ads and building sustainable organic visibility for your franchise brand.',
    href: '/services/marketing-your-franchise/seo',
    cta: 'Explore SEO',
  },
  {
    title: 'Lead Generation',
    icon: '⚡',
    description: 'FMS builds and manages franchise lead generation systems — from paid acquisition to inbound funnels — designed to attract qualified, motivated prospective franchisees to your pipeline.',
    href: '/fms-digital/lead-generation',
    cta: 'View Lead Generation',
  },
  {
    title: 'Social Media Strategy',
    icon: '📱',
    description: 'Franchising lives on social proof. FMS builds franchise social media strategies that build brand authority, engage candidates, and support franchisee recruitment at every stage.',
    href: '/fms-digital/franchise-social-media-strategy',
    cta: 'Explore Social Media',
  },
  {
    title: 'Tradeshows & Events',
    icon: '🎪',
    description: 'Franchise tradeshows remain one of the highest-ROI lead generation channels. FMS helps you select the right shows, design your booth strategy, and convert tradeshow leads to franchisees.',
    href: '/fms-digital/franchise-tradeshows-lead-generation',
    cta: 'View Tradeshows',
  },
];

export default function MarketingYourFranchisePage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/services">Services</a><span>›</span>
            <span>Marketing Your Franchise</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Franchise Marketing</span>
          <h1>Marketing Your Franchise</h1>
          <p>Build a more profitable and efficient franchise model with digital marketing experts from the industry. FMS helps you with every element of franchise marketing — from strategy and branding to SEO, lead generation, and tradeshow execution.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
              Get a Free Consultation
            </a>
            <Link href="/fms-digital" className="btn btn-outline-white btn-lg">
              Explore FMS Digital →
            </Link>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Our Approach</span>
              <h2>Full-Funnel Franchise Marketing Expertise</h2>
              <p style={{ color: '#4a5568', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                FMS works with franchise and license models to structure the most efficient marketing approach for your business. We conduct extensive franchise market research, develop your positioning strategy, and execute across every marketing channel that matters for franchise recruitment.
              </p>
              <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
                We know who your competition is, understand how you should take your franchise to market, and know how to differentiate your model in an increasingly crowded marketplace.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Strategic franchise market positioning',
                'Competitive franchise landscape research',
                'Lead generation system design & execution',
                'Full creative: branding, web, video, collateral',
                'Franchise-specific SEO & digital advertising',
                'Social media management & strategy',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'rgba(53,168,74,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <span style={{ color: '#35a84a', fontSize: '0.75rem', fontWeight: 900 }}>✓</span>
                  </div>
                  <span style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Marketing Services</span>
            <h2>Franchise Marketing Services For You</h2>
            <p style={{ color: '#4a5568', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              FMS provides end-to-end franchise marketing support. Choose the services that fit your stage, or engage our full-service team for a complete franchise marketing partnership.
            </p>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map((svc) => (
              <div key={svc.title} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{svc.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{svc.title}</h3>
                <p style={{ color: '#718096', fontSize: '0.875rem', lineHeight: 1.75, flex: 1, marginBottom: '1.25rem' }}>{svc.description}</p>
                <Link
                  href={svc.href}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', fontWeight: 700, color: '#1a3d20', textDecoration: 'none' }}
                >
                  {svc.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Planning section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Why FMS</span>
            <h2>We Help You Franchise Your Business with Qualified Guidance</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: 'Strategic Planning',
                body: 'We structure the most efficient business model for duplication into new markets — including franchise fee structure, territory sizing, and benchmark analysis.',
              },
              {
                title: 'Franchise Research',
                body: 'Primary and secondary research on your competitive market of existing franchise models. Understand what has worked in your market and where mistakes have been made.',
              },
              {
                title: 'Franchise Consulting',
                body: 'FMS has experience working with 300+ different franchise systems. Benefit from professionals who understand the business elements involved in growing many small businesses.',
              },
              {
                title: 'Marketing Materials',
                body: 'FMS designs and packages the marketing materials and collateral needed to present your franchise model to prospective buyers — efficiently and compellingly.',
              },
            ].map((item) => (
              <div key={item.title} style={{ background: 'linear-gradient(135deg, rgba(26,61,32,0.03), rgba(26,61,32,0.06))', border: '1.5px solid rgba(26,61,32,0.1)', borderRadius: '14px', padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#1a3d20', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ color: '#4a5568', fontSize: '0.875rem', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <span className="eyebrow">Get Started</span>
          <h2>Is Your Business Franchisable?</h2>
          <p style={{ color: '#4a5568', lineHeight: 1.8, marginBottom: '2rem' }}>
            Take our quick feasibility quiz to find out — then connect with an FMS consultant to discuss your franchise marketing strategy.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-gold btn-lg">
              Take the Feasibility Quiz
            </Link>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-outline-green btn-lg">
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
