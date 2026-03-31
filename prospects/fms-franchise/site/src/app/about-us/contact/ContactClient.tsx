'use client';
import { useState } from 'react';
import Link from 'next/link';

const OFFICES = [
  {
    city: 'Atlanta, GA',
    flag: '🇺🇸',
    label: 'Headquarters',
    address: '1 Glenlake Pkwy NE, Suite 650, Atlanta, GA 30328',
    phone: '800-610-0292',
    email: 'info@fmsfranchise.com',
  },
  {
    city: 'Chicago, IL',
    flag: '🇺🇸',
    label: 'Regional Office',
    address: '200 S. Wacker Drive, Suite 3100, Chicago, IL 60606',
    phone: '800-610-0292',
    email: 'info@fmsfranchise.com',
  },
  {
    city: 'Dallas, TX',
    flag: '🇺🇸',
    label: 'Regional Office',
    address: '5600 Tennyson Pkwy, Suite 355, Plano, TX 75024',
    phone: '800-610-0292',
    email: 'info@fmsfranchise.com',
  },
  {
    city: 'Toronto, Canada',
    flag: '🇨🇦',
    label: 'Canada Office',
    address: '390 Bay Street, Suite 1700, Toronto, ON M5H 2Y2',
    phone: '800-610-0292',
    email: 'info@fmsfranchise.com',
  },
];

export default function ContactClient() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #1a3a1c 0%, #2c4a2e 60%, #3a5e3c 100%)', paddingTop: '120px', paddingBottom: '5rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <nav style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/about-us" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>About</Link>
            <span>›</span>
            <span style={{ color: '#c8a84b' }}>Contact</span>
          </nav>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>
            GET IN TOUCH
          </span>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Looking for an Expert Franchise Consulting Firm?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '680px', margin: '0 auto 2rem' }}>
            FMS helps you start a franchise business in the US by turning your proven business into a structured, scalable franchise model. From the first strategy call to the final deliverables, our team helps you map out the right franchise foundation.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+18006100292" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c8a84b', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
              📞 800-610-0292
            </a>
            <a href="mailto:info@fmsfranchise.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
              ✉ info@fmsfranchise.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: '#1e2d24', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '700+', label: 'Franchise Brands Developed' },
              { num: '67', label: 'Team Members' },
              { num: '28', label: 'Franchise Consultants' },
              { num: '2009', label: 'Founded in Atlanta, GA' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#c8a84b' }}>{s.num}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.4rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section style={{ background: '#f8f8f6', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left: Contact Form */}
            <div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>
                SEND A MESSAGE
              </span>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#1a3a1c', marginBottom: '0.5rem' }}>
                Talk to a Franchise Consultant
              </h2>
              <p style={{ color: '#555', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
                All information and content shared are kept completely confidential. A member of our team will reach out within one business day.
              </p>

              {submitted ? (
                <div style={{ background: '#e8f5ed', border: '2px solid #4a7c59', borderRadius: '12px', padding: '2.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1a3a1c', marginBottom: '0.75rem' }}>Message Received!</h3>
                  <p style={{ color: '#4a5568', lineHeight: 1.7 }}>
                    Thank you for reaching out to FMS Franchise. One of our expert franchise consultants will be in touch with you within one business day.
                  </p>
                  <p style={{ color: '#555', fontSize: '0.9rem', marginTop: '1rem' }}>
                    In the meantime, you can call us directly at <a href="tel:+18006100292" style={{ color: '#4a7c59', fontWeight: 700 }}>800-610-0292</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Row: Name */}
                  <div>
                    <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#1a3a1c', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d9d3', borderRadius: '8px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#1a3a1c', background: '#fff', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.target.style.borderColor = '#4a7c59')}
                      onBlur={e => (e.target.style.borderColor = '#d1d9d3')}
                    />
                  </div>

                  {/* Row: Email + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#1a3a1c', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d9d3', borderRadius: '8px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#1a3a1c', background: '#fff', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => (e.target.style.borderColor = '#4a7c59')}
                        onBlur={e => (e.target.style.borderColor = '#d1d9d3')}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#1a3a1c', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d9d3', borderRadius: '8px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#1a3a1c', background: '#fff', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => (e.target.style.borderColor = '#4a7c59')}
                        onBlur={e => (e.target.style.borderColor = '#d1d9d3')}
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div>
                    <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#1a3a1c', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Business Name
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Your business name"
                      style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d9d3', borderRadius: '8px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#1a3a1c', background: '#fff', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => (e.target.style.borderColor = '#4a7c59')}
                      onBlur={e => (e.target.style.borderColor = '#d1d9d3')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#1a3a1c', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you're looking for..."
                      style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d9d3', borderRadius: '8px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#1a3a1c', background: '#fff', outline: 'none', boxSizing: 'border-box', resize: 'vertical', lineHeight: 1.6 }}
                      onFocus={e => (e.target.style.borderColor = '#4a7c59')}
                      onBlur={e => (e.target.style.borderColor = '#d1d9d3')}
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    style={{
                      background: hoveredBtn ? '#b8973a' : '#c8a84b',
                      color: '#fff',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '1rem 2.5rem',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'background 0.2s, transform 0.15s',
                      transform: hoveredBtn ? 'translateY(-1px)' : 'none',
                      boxShadow: hoveredBtn ? '0 6px 20px rgba(200,168,75,0.4)' : '0 3px 10px rgba(200,168,75,0.25)',
                    }}
                    onMouseEnter={() => setHoveredBtn(true)}
                    onMouseLeave={() => setHoveredBtn(false)}
                  >
                    Send Message →
                  </button>

                  <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '-0.5rem' }}>
                    By submitting this form, you agree that FMS may contact you regarding franchise consulting services.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Hours */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e0e8e2', boxShadow: '0 4px 20px rgba(44,74,46,0.08)' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1a3a1c', fontSize: '1.05rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  🕐 Hours &amp; Contact
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { label: 'Phone', val: '800-610-0292', href: 'tel:+18006100292' },
                    { label: 'Email', val: 'info@fmsfranchise.com', href: 'mailto:info@fmsfranchise.com' },
                    { label: 'Mon–Fri', val: '8:00 AM – 6:00 PM ET', href: null },
                    { label: 'Sat–Sun', val: 'By Appointment', href: null },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid #f0f0f0' }}>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href} style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#4a7c59', fontWeight: 600, textDecoration: 'none' }}>{item.val}</a>
                      ) : (
                        <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#1a3a1c', fontWeight: 500 }}>{item.val}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* FMS Is Your Solution */}
              <div style={{ background: 'linear-gradient(135deg, #1a3a1c, #2c4a2e)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                  FMS Franchise Is Your Solution
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  FMS is the only full-service and expert franchise consulting agency in the US that offers full-scale franchise development, franchise marketing, franchise consulting, franchise management, and franchise sales support to our franchisor clients.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  With over ten years of franchising experience in building and developing franchise brands, you want to work with our experts when considering a franchise expansion program.
                </p>
                <Link href="/franchise-feasibility-questionnaire" style={{ display: 'inline-block', background: '#c8a84b', color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.75rem 1.75rem', borderRadius: '6px', textDecoration: 'none' }}>
                  Franchise Feasibility Questionnaire →
                </Link>
              </div>

              {/* Quick Links */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e0e8e2' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1a3a1c', fontSize: '1rem', marginBottom: '1rem' }}>
                  Explore FMS
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {[
                    { label: 'Our Services', href: '/services' },
                    { label: 'About FMS', href: '/about-us' },
                    { label: 'Our Clients', href: '/our-clients' },
                    { label: 'Leadership', href: '/about-us/leadership' },
                    { label: 'Locations', href: '/locations' },
                    { label: 'Blog', href: '/about-us/blog' },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      style={{ padding: '0.45rem 1rem', border: '1px solid #d1d9d3', borderRadius: '20px', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: '#4a7c59', textDecoration: 'none', transition: 'all 0.2s' }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#4a7c59'; el.style.color = '#fff'; el.style.borderColor = '#4a7c59'; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = ''; el.style.color = '#4a7c59'; el.style.borderColor = '#d1d9d3'; }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Office Locations Grid ── */}
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>
              OUR REACH
            </span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c', marginBottom: '0.75rem' }}>
              FMS Works Across the US &amp; Internationally
            </h2>
            <p style={{ color: '#555', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
              FMS works with business owners across the United States and internationally to develop and grow franchise systems.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {OFFICES.map((office) => (
              <div
                key={office.city}
                style={{ background: '#f8f8f6', borderRadius: '12px', padding: '1.75rem', border: '1.5px solid #e0e8e2', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(44,74,46,0.15)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1a3a1c', fontSize: '1rem' }}>
                    {office.flag} {office.city}
                  </h3>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4a7c59', background: '#e8f5ed', padding: '0.25rem 0.6rem', borderRadius: '20px' }}>
                    {office.label}
                  </span>
                </div>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: '#555', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  {office.address}
                </p>
                <a href={`tel:${office.phone}`} style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: '#4a7c59', fontWeight: 600, textDecoration: 'none' }}>
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/locations" style={{ display: 'inline-block', background: 'transparent', color: '#2c4a2e', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.8rem 2rem', border: '2px solid #2c4a2e', borderRadius: '6px', textDecoration: 'none' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#2c4a2e'; el.style.color = '#fff'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = '#2c4a2e'; }}
            >
              View All Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #1a3a1c 0%, #2c4a2e 100%)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>
            TAKE THE FIRST STEP
          </span>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Find Out If Your Business Is Franchise-Ready
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75, fontSize: '1rem' }}>
            Our free feasibility questionnaire takes 5 minutes and gives you an objective read on whether your business model has what it takes to scale through franchising.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/franchise-feasibility-questionnaire" style={{ background: '#c8a84b', color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none' }}>
              Take the Free Questionnaire
            </Link>
            <Link href="/services/franchise-development" style={{ background: 'transparent', color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.4)', textDecoration: 'none' }}>
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
