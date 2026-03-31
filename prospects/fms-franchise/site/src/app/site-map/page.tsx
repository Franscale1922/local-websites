import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap | FMS Franchise Marketing Systems',
  description: 'Full sitemap of the FMS Franchise Marketing Systems website — all pages listed for easy navigation.',
};

// Pure server component — no client-side interactivity needed for a sitemap

const SITE_SECTIONS = [
  {
    heading: 'Core Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Franchise Your Business', href: '/franchise-your-business' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Locations', href: '/locations' },
      { label: 'Refer a Client', href: '/refer-a-client' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Franchise Development', href: '/services/franchise-development' },
      { label: 'Franchise Sales', href: '/services/franchise-sales' },
      { label: 'Management & Support', href: '/services/management-support' },
      { label: 'Franchise Business Plan', href: '/services/franchise-business-plans' },
      { label: 'Efficiency Audit', href: '/services/efficiency-audit' },
      { label: 'Territory Mapping', href: '/services/franchise-territory-mapping' },
      { label: 'Bookkeeping Support', href: '/services/franchise-bookkeeping-support' },
      { label: 'SEO Services', href: '/services/marketing-your-franchise/seo' },
      { label: 'Outsourced Support Services', href: '/outsourced-franchise-support-services' },
    ],
  },
  {
    heading: 'FMS Digital',
    links: [
      { label: 'FMS Digital Overview', href: '/fms-digital' },
      { label: 'Lead Generation', href: '/fms-digital/lead-generation' },
      { label: 'Branding & Marketing', href: '/fms-digital/franchise-branding-services' },
      { label: 'Website Design', href: '/fms-digital/website-design' },
      { label: 'Social Media Strategy', href: '/fms-digital/franchise-social-media-strategy' },
      { label: 'Tradeshows & Lead Gen', href: '/fms-digital/franchise-tradeshows-lead-generation' },
      { label: 'Success Stories', href: '/fms-digital/franchise-success-stories' },
      { label: 'FMS Digital Portfolio', href: '/our-clients/fmsdigital-portfolio' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'All Industries', href: '/industries' },
      { label: 'Health & Beauty', href: '/industries/health-beauty' },
      { label: 'Children', href: '/industries/children' },
      { label: 'Food & Beverage', href: '/industries/food-beverage' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Services', href: '/industries/services' },
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Home-Based', href: '/industries/home-based-franchises' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Home Services', href: '/industries/home-services' },
    ],
  },
  {
    heading: 'Learn Hub',
    links: [
      { label: 'Learn Overview', href: '/learn' },
      { label: 'What is Franchising?', href: '/learn/what-is-franchising' },
      { label: 'Why Franchise?', href: '/learn/why-franchise' },
      { label: 'Industry Facts', href: '/learn/franchise-industry-facts' },
      { label: 'How-To Guides', href: '/learn/how-to-guides' },
      { label: 'How to Start a Franchise', href: '/learn/how-to-guides/how-to-start-a-franchise' },
      { label: 'How to Write an Ops Manual', href: '/learn/how-to-guides/how-to-write-a-franchise-operations-manual' },
      { label: 'How to Franchise Your Business', href: '/learn/how-to-franchise-your-business' },
      { label: 'State Guidelines', href: '/learn/state-guidelines' },
      { label: 'FAQ', href: '/learn/faq' },
      { label: 'Resources', href: '/learn/resources' },
      { label: 'Webinars', href: '/webinars' },
    ],
  },
  {
    heading: 'Tools',
    links: [
      { label: 'ROI Calculator', href: '/roi-calculator' },
      { label: 'Franchise Readiness Assessment', href: '/franchise-readiness-assessment' },
      { label: 'Franchise Feasibility Questionnaire', href: '/franchise-feasibility-questionnaire' },
    ],
  },
  {
    heading: 'Clients & Social Proof',
    links: [
      { label: 'Our Clients', href: '/our-clients' },
      { label: 'Client Testimonials', href: '/our-clients/testimonials' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    heading: 'About FMS',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Leadership', href: '/about-us/leadership' },
      { label: 'Meet the Team', href: '/meet-the-team' },
      { label: 'Locations', href: '/locations' },
      { label: 'Events', href: '/event' },
      { label: 'News', href: '/news' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press & Media', href: '/insights-on-franchise-marketing-systems-press' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Sitemap</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Navigation</span>
          <h1>Site Map</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '600px' }}>
            A complete index of every page on the FMS Franchise Marketing Systems website.
          </p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {SITE_SECTIONS.map((section) => (
              <div key={section.heading} style={{ background: '#fff', borderRadius: '14px', padding: '1.75rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#35a84a', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '2px solid #f0f0f0' }}>
                  {section.heading}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{ fontSize: '0.9rem', color: '#2d4135', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.2rem 0' }}
                      >
                        <span style={{ color: '#35a84a', fontSize: '0.65rem', fontWeight: 900, flexShrink: 0 }}>▸</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
