'use client';

import Link from 'next/link';

const services = [
  {
    title: 'Franchise Development',
    icon: '🏗️',
    description: 'From franchising your business, to lead generation, to full franchise management and support, the FMS team is here to assist you throughout the whole franchise development process.',
    href: '/services/franchise-development',
  },
  {
    title: 'Franchise Sales',
    icon: '📈',
    description: 'Our in-house franchise sales team works alongside your brand to identify and qualify the right franchisee candidates, guiding them through the sales process from first inquiry to signing.',
    href: '/services/franchise-sales',
  },
  {
    title: 'Management & Support',
    icon: '🎯',
    description: 'From the beginning, the FMS team is ready and available to help the franchisor with a variety of franchise services including Research, Conversion, Metric Tracking, and more.',
    href: '/services/management-support',
  },
  {
    title: 'Marketing Your Franchise',
    icon: '📣',
    description: 'Build a more profitable and efficient franchise model with expertise from the industry. FMS will help you with every element of building and managing a successful franchise in the US.',
    href: '/services/marketing-your-franchise',
  },
  {
    title: 'Franchise Business Plan',
    icon: '📋',
    description: 'A comprehensive franchise business plan is the foundation of every successful franchise system. Our consultants craft detailed, investor-ready plans tailored to your specific business model.',
    href: '/services/franchise-business-plans',
  },
  {
    title: 'Efficiency Audit',
    icon: '🔍',
    description: 'Our proprietary efficiency audit process evaluates your current operations, identifies inefficiencies, and creates a roadmap to streamline your systems for franchise scalability.',
    href: '/services/efficiency-audit',
  },
  {
    title: 'Franchise Territory Mapping',
    icon: '🗺️',
    description: 'Strategic territory mapping ensures your franchise system has the right geographic structure to maximize growth potential while protecting franchisee investment.',
    href: '/services/franchise-territory-mapping',
  },
  {
    title: 'Franchise Bookkeeping Support',
    icon: '📊',
    description: 'Our bookkeeping support services give franchisors and franchisees the financial infrastructure they need to operate efficiently and maintain compliance.',
    href: '/services/franchise-bookkeeping-support',
  },
  {
    title: 'Outsourced Franchise Support',
    icon: '🤝',
    description: 'Leverage the full FMS team as your outsourced franchise support engine — from operations and training to marketing and sales, we become an extension of your brand.',
    href: '/outsourced-franchise-support-services',
  },
];

export default function ServicesClient() {
  return (
    <main>
      {/* Page Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #2c4a2e 0%, #1a3a1c 100%)',
        color: '#fff',
        padding: '80px 0 60px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#c8a84b',
            marginBottom: '16px',
          }}>COMPREHENSIVE FRANCHISE SOLUTIONS</p>
          <h1 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: 1.15,
            marginBottom: '24px',
          }}>
            Customized Franchise Services for Success
          </h1>
          <p style={{
            fontFamily: '\'Source Sans 3\', sans-serif',
            fontSize: '19px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            FMS is focused and committed to providing only the most customized and effective franchise development programs and full-scale franchise services to our clients.
          </p>
        </div>
      </section>

      {/* Services Intro */}
      <section style={{ padding: '64px 0 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            color: '#1a3a1c',
            marginBottom: '20px',
          }}>Services to Help Your Business Succeed</h2>
          <p style={{
            fontFamily: '\'Source Sans 3\', sans-serif',
            fontSize: '18px',
            color: '#555',
            lineHeight: 1.7,
            maxWidth: '800px',
            margin: '0 auto 16px',
          }}>
            These franchise services are designed to meet the specific needs of all the business owners and our franchisor clients. Through years of experience in the franchising industry, the FMS team is able to deliver productive and value-added programs for franchisors that will ultimately achieve better, bigger, and faster results.
          </p>
        </div>
      </section>

      {/* Questions Banner */}
      <section style={{
        background: '#f0f7f1',
        padding: '32px 0',
        borderTop: '2px solid #c8a84b',
        borderBottom: '2px solid #c8a84b',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <h3 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            color: '#1a3a1c',
          }}>HAVE FRANCHISING QUESTIONS YOU NEED ANSWERED?</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" style={{
              background: '#2c4a2e',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '6px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}>Contact Us</Link>
            <Link href="/franchise-feasibility-questionnaire" style={{
              background: '#c8a84b',
              color: '#1a3a1c',
              padding: '14px 28px',
              borderRadius: '6px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}>Take Our Free Franchise Feasibility Questionnaire</Link>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {services.map((service, i) => (
              <div key={i} style={{
                border: '1px solid #e8e8e8',
                borderRadius: '12px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(44,74,46,0.12)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.transform = 'none';
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: '#f0f7f1',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '19px',
                  color: '#1a3a1c',
                }}>{service.title}</h3>
                <p style={{
                  fontFamily: '\'Source Sans 3\', sans-serif',
                  fontSize: '16px',
                  color: '#555',
                  lineHeight: 1.65,
                  flex: 1,
                }}>{service.description}</p>
                <Link href={service.href} style={{
                  color: '#4a7c59',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #2c4a2e 0%, #1a3a1c 100%)',
        padding: '72px 0',
        color: '#fff',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            marginBottom: '12px',
          }}>Get Your Free Consultation</h2>
          <p style={{
            fontFamily: '\'Source Sans 3\', sans-serif',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '8px',
          }}>We&apos;re Here to Help Right Away</p>
          <p style={{
            fontFamily: '\'Source Sans 3\', sans-serif',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '40px',
          }}>
            Call us at{' '}
            <a href="tel:+18006100292" style={{ color: '#c8a84b', fontWeight: 700 }}>(800) 610-0292</a>
            {' '}or{' '}
            <a href="mailto:info@fmsfranchise.com" style={{ color: '#c8a84b', fontWeight: 700 }}>info@fmsfranchise.com</a>
            {' '}for a FREE consultation
          </p>
          <Link href="/franchise-your-business" style={{
            display: 'inline-block',
            background: '#c8a84b',
            color: '#1a3a1c',
            padding: '18px 48px',
            borderRadius: '6px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}>
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
