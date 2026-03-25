import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Feasibility Questionnaire — Is Your Business Franchise-Ready?',
  description: 'Take the free FMS franchise feasibility questionnaire to assess your business\'s franchise potential. Get an honest readiness evaluation in 5 minutes.',
};

export default function FeasibilityQuestionnairePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#e8b736' }}>Free Assessment</span>
          <h1>Franchise Feasibility Questionnaire</h1>
          <p>5 minutes. Honest answers. A clear picture of whether your business is ready to franchise — and what, if anything, needs to change first.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: '4rem', alignItems: 'start' }}>
            {/* Form */}
            <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Tell Us About Your Business</h2>
              <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: 1.6 }}>Complete this questionnaire and a franchise consultant will review your answers and contact you within 1 business day with an honest assessment.</p>

              <form action={`mailto:chris.conner@fmsfranchise.com`} method="POST" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Contact Info */}
                <div style={{ paddingBottom: '1rem', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3cb85e', marginBottom: '1rem' }}>Your Information</div>
                  <div className="grid-2" style={{ display: 'grid', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="fq-first">First Name *</label>
                      <input className="form-input" id="fq-first" name="first_name" type="text" required placeholder="First name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="fq-last">Last Name *</label>
                      <input className="form-input" id="fq-last" name="last_name" type="text" required placeholder="Last name" />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: '1rem' }}>
                    <label className="form-label" htmlFor="fq-email">Email Address *</label>
                    <input className="form-input" id="fq-email" name="email" type="email" required placeholder="you@yourbusiness.com" />
                  </div>
                  <div className="form-group" style={{ marginTop: '1rem' }}>
                    <label className="form-label" htmlFor="fq-phone">Phone Number *</label>
                    <input className="form-input" id="fq-phone" name="phone" type="tel" required placeholder="(555) 000-0000" />
                  </div>
                </div>

                {/* Business Info */}
                <div style={{ paddingBottom: '1rem', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3cb85e', marginBottom: '1rem' }}>About Your Business</div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fq-biz">Business Name *</label>
                    <input className="form-input" id="fq-biz" name="business_name" type="text" required />
                  </div>
                  <div className="grid-2" style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="fq-industry">Industry *</label>
                      <select className="form-input" id="fq-industry" name="industry" required>
                        <option value="">Select...</option>
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
                      <label className="form-label" htmlFor="fq-years">Years in Business *</label>
                      <select className="form-input" id="fq-years" name="years_in_business" required>
                        <option value="">Select...</option>
                        <option>Less than 1 year</option>
                        <option>1–2 years</option>
                        <option>2–5 years</option>
                        <option>5–10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid-2" style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="fq-revenue">Annual Revenue</label>
                      <select className="form-input" id="fq-revenue" name="annual_revenue">
                        <option value="">Select...</option>
                        <option>Under $300K</option>
                        <option>$300K–$600K</option>
                        <option>$600K–$1.5M</option>
                        <option>$1.5M–$5M</option>
                        <option>$5M+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="fq-locations">Current Locations</label>
                      <select className="form-input" id="fq-locations" name="locations">
                        <option value="">Select...</option>
                        <option>1 location</option>
                        <option>2–3 locations</option>
                        <option>4–10 locations</option>
                        <option>10+ locations</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: '1rem' }}>
                    <label className="form-label" htmlFor="fq-desc">Describe Your Business in 2–3 Sentences *</label>
                    <textarea className="form-input form-textarea" id="fq-desc" name="description" required placeholder="What does your business do? What makes it different?" style={{ minHeight: '90px' }} />
                  </div>
                </div>

                {/* Franchise Intent */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3cb85e', marginBottom: '1rem' }}>Franchise Plans</div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fq-timeline">What is your desired timeline to franchise?</label>
                    <select className="form-input" id="fq-timeline" name="timeline">
                      <option value="">Select...</option>
                      <option>Exploring only — no timeline</option>
                      <option>Within 12 months</option>
                      <option>12–24 months</option>
                      <option>2–3 years</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginTop: '1rem' }}>
                    <label className="form-label" htmlFor="fq-goal">What is your primary goal for franchising?</label>
                    <select className="form-input" id="fq-goal" name="primary_goal">
                      <option value="">Select...</option>
                      <option>Scale nationally / enter new markets</option>
                      <option>Create passive royalty income</option>
                      <option>Increase business valuation for exit</option>
                      <option>Reduce personal time commitment</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginTop: '1rem' }}>
                    <label className="form-label" htmlFor="fq-anything">Anything else we should know?</label>
                    <textarea className="form-input form-textarea" id="fq-anything" name="notes" placeholder="Previous franchise experience, concerns, specific questions..." style={{ minHeight: '80px' }} />
                  </div>
                </div>

                <button type="submit" className="btn btn-gold btn-lg" style={{ justifyContent: 'center' }}>
                  Submit Questionnaire →
                </button>
                <p style={{ fontSize: '0.78rem', color: '#9ca3af', textAlign: 'center', lineHeight: 1.5 }}>
                  By submitting, you agree to be contacted by FMS Franchise. A consultant will review your answers and respond within 1 business day. No pressure, no hard sell.
                </p>
              </form>
            </div>

            {/* Right sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', borderRadius: '20px', padding: '2rem' }}>
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>What Happens Next</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { num: '1', title: 'Review', desc: 'A franchise consultant reviews your submission within 1 business day.' },
                    { num: '2', title: 'Assessment Call', desc: 'We schedule a free 30-minute call to discuss your specific situation.' },
                    { num: '3', title: 'Honest Answer', desc: 'You get an honest assessment of your franchise readiness — and a clear next step.' },
                  ].map(item => (
                    <div key={item.num} style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e8b736', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem', color: '#1a3d20', flexShrink: 0 }}>{item.num}</div>
                      <div>
                        <div style={{ color: '#e8b736', fontWeight: 700, fontSize: '0.875rem' }}>{item.title}</div>
                        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#fff', borderRadius: '16px', padding: '1.75rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>Our Honest Commitment</h4>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>
                  FMS will give you an honest assessment of your franchise potential — even if that assessment is "not yet" or "not for this concept." We have turned away 200+ inquiries in the past year because the business wasn't ready. We'd rather keep your trust than collect a consulting fee.
                </p>
              </div>

              <div style={{ background: '#fff', borderRadius: '16px', padding: '1.75rem', border: '1.5px solid #e2e8f0' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>Prefer to talk first?</div>
                <p style={{ fontSize: '0.875rem', color: '#718096', marginBottom: '0.75rem' }}>Call us directly — no questionnaire required.</p>
                <a href="tel:8006100292" style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1a3d20' }}>800-610-0292</a>
              </div>

              <Link href="/franchise-readiness-assessment" style={{ background: 'rgba(60,184,94,0.07)', borderRadius: '16px', padding: '1.5rem', border: '1.5px solid rgba(60,184,94,0.25)', textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3cb85e', marginBottom: '0.4rem' }}>Alternative Tool</div>
                <div style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Prefer a Self-Service Assessment?</div>
                <div style={{ fontSize: '0.82rem', color: '#718096' }}>Take our instant Franchise Readiness Assessment — get your score immediately without speaking to anyone.</div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', fontWeight: 700, color: '#3cb85e' }}>Take Assessment →</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
