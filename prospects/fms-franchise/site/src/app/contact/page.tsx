import type { Metadata } from 'next';
import Link from 'next/link';
import { IconPhone, IconCalendar, IconMail } from '../components/Icons';

export const metadata: Metadata = {
  title: 'Contact FMS Franchise — 7 Global Offices | Free Consultation',
  description: 'Contact Franchise Marketing Systems for a free consultation. 7 offices across North America, Asia, Africa, and the Caribbean. Call 800-610-0292.',
};

const OFFICES = [
  { city: 'Atlanta, GA', note: 'Headquarters', address: '6110 McFarland Station Dr, Unit 105\nAlpharetta, GA 30004', phone: '(800) 610-0292' },
  { city: 'Boston, MA', address: '400 Tradecenter Drive, Suite 5900\nWoburn, MA 01801', phone: null },
  { city: 'Miami, FL', address: '713 Shotgun Road\nSunrise, FL 33326', phone: null },
  { city: 'Toronto, ON', note: 'Canada', address: '85 N Park Rd #612\nVaughan, ON L4J 0H9', phone: null },
  { city: 'Ho Chi Minh City', note: 'FMS Asia', address: '41-43 Tran Cao Van Street\nDistrict 3, Vietnam', phone: null },
  { city: 'Abuja', note: 'FMS Africa', address: '1473 Inner Block St\nCentral Business District, Abuja 900103', phone: null },
  { city: 'Barbados', note: 'FMS Caribbean', address: 'Lot 2 Lower Silver Hill\nChrist Church, Barbados 15010', phone: null },
];

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Contact</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Get in Touch</span>
          <h1>Contact Our Expert Franchise Consultants</h1>
          <p>Ready to take the first step? Our franchise consultants are available for free, no-obligation consultations. Pick the option below that works best for you.</p>
        </div>
      </div>

      {/* Contact options + form */}
      <section className="section section-alt">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: '4rem', alignItems: 'start' }}>
            {/* Left — contact info */}
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Let's Talk</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(232,183,54,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><IconPhone size={20} color="#e8b736" /></div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>Call Us</div>
                      <a href="tel:8006100292" style={{ color: '#1a3d20', fontWeight: 800, fontSize: '1.15rem' }}>800-610-0292</a>
                      <div style={{ fontSize: '0.8rem', color: '#718096', marginTop: '0.1rem' }}>Mon–Fri, 9am–6pm ET</div>
                    </div>
                  </div>
                </div>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(60,184,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><IconCalendar size={20} color="#3cb85e" /></div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>Book a Consultation</div>
                      <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.6, marginBottom: '0.75rem' }}>Schedule a free 30-minute consultation with a franchise expert. No obligation.</p>
                      <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm">Book Free Consultation</a>
                    </div>
                  </div>
                </div>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(60,184,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><IconMail size={20} color="#3cb85e" /></div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>Email</div>
                      <a href="mailto:chris.conner@fmsfranchise.com" style={{ color: '#1a3d20', fontWeight: 600, fontSize: '0.9rem' }}>chris.conner@fmsfranchise.com</a>
                    </div>
                  </div>
                </div>

                {/* Assessment CTA */}
                <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', borderRadius: '16px', padding: '1.75rem', color: '#fff' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e8b736', marginBottom: '0.75rem' }}>Not Sure Where to Start?</div>
                  <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Take the Free Feasibility Assessment</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1rem' }}>5 minutes. No obligation. Tells you exactly where your business stands.</p>
                  <Link href="/feasibility-questionnaire" className="btn btn-gold btn-sm">Start Assessment</Link>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Send Us a Message</h3>
              <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '2rem' }}>We respond to every inquiry within one business day.</p>
              <form
                action={`mailto:chris.conner@fmsfranchise.com`}
                method="POST"
                encType="text/plain"
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="first-name">First Name *</label>
                    <input className="form-input" id="first-name" name="first-name" type="text" required placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="last-name">Last Name *</label>
                    <input className="form-input" id="last-name" name="last-name" type="text" required placeholder="Smith" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input className="form-input" id="email" name="email" type="email" required placeholder="john@yourbusiness.com" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input className="form-input" id="phone" name="phone" type="tel" placeholder="(555) 000-0000" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="business">Business Name *</label>
                  <input className="form-input" id="business" name="business" type="text" required placeholder="Your Business Name" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="industry">Industry</label>
                  <select className="form-input" id="industry" name="industry">
                    <option value="">Select your industry...</option>
                    <option>Food & Beverage</option>
                    <option>Health & Beauty</option>
                    <option>Healthcare</option>
                    <option>Home Services</option>
                    <option>Children</option>
                    <option>Education</option>
                    <option>Retail</option>
                    <option>Automotive</option>
                    <option>Real Estate</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Tell Us About Your Business *</label>
                  <textarea className="form-input form-textarea" id="message" name="message" required placeholder="Briefly describe your business — what it does, how long you've been operating, and what you're hoping to achieve through franchising." style={{ minHeight: '130px' }} />
                </div>
                <button type="submit" className="btn btn-gold btn-lg" style={{ justifyContent: 'center' }}>
                  Send Message →
                </button>
                <p style={{ fontSize: '0.78rem', color: '#9ca3af', textAlign: 'center' }}>By submitting this form, you agree to be contacted by FMS. No spam, ever.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global offices */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-light">
            <span className="eyebrow eyebrow-light">Our Global Presence</span>
            <h2 style={{ color: '#fff' }}>7 Offices Across 4 Continents</h2>
            <div className="divider divider-gold" />
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>FMS is one of the only franchise consulting firms with genuine international capability — not just a claim, but physical offices and in-market teams serving clients on 4 continents.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
            {OFFICES.map(office => (
              <div key={office.city} className="location-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e8b736', flexShrink: 0 }} />
                  <div>
                    <span style={{ color: '#e8b736', fontWeight: 700, fontSize: '0.9rem' }}>{office.city}</span>
                    {office.note && <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', background: 'rgba(232,183,54,0.15)', color: '#e8b736', padding: '0.1rem 0.5rem', borderRadius: '999px', fontWeight: 700 }}>{office.note}</span>}
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{office.address}</p>
                {office.phone && <a href={`tel:${office.phone.replace(/\D/g,'')}`} style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.85rem', color: '#e8b736', fontWeight: 700 }}>{office.phone}</a>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
