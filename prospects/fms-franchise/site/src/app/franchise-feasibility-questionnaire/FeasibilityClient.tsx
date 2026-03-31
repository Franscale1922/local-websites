'use client';
import { useState } from 'react';
import Link from 'next/link';

type Step = {
  id: number;
  title: string;
  subtitle: string;
  fields: Field[];
};

type Field = {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'radio' | 'textarea';
  placeholder?: string;
  options?: string[];
  required?: boolean;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: 'About You',
    subtitle: 'Tell us a bit about yourself so we can connect you with the right consultant.',
    fields: [
      { id: 'first_name', label: 'First Name', type: 'text', placeholder: 'John', required: true },
      { id: 'last_name', label: 'Last Name', type: 'text', placeholder: 'Smith', required: true },
      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', required: true },
      { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 000-0000', required: true },
    ],
  },
  {
    id: 2,
    title: 'Your Business',
    subtitle: 'Help us understand your current business model and where you are in the process.',
    fields: [
      { id: 'business_name', label: 'Business Name', type: 'text', placeholder: 'Your business name', required: true },
      { id: 'industry', label: 'Industry / Sector', type: 'select', required: true, options: ['Select an industry...', 'Health & Beauty', 'Food & Beverage', 'Children & Education', 'Retail', 'Real Estate', 'Services', 'Automotive', 'Home-based', 'Healthcare', 'Technology', 'Other'] },
      { id: 'years_in_business', label: 'Years in Business', type: 'select', required: true, options: ['Select...', 'Less than 1 year', '1–2 years', '3–5 years', '5–10 years', '10+ years'] },
      { id: 'business_description', label: 'Briefly describe your business', type: 'textarea', placeholder: 'What do you sell or what service do you provide? Who are your customers?', required: true },
    ],
  },
  {
    id: 3,
    title: 'Franchise Readiness',
    subtitle: 'These questions help us assess whether your business model is ready for franchising.',
    fields: [
      { id: 'locations', label: 'How many locations do you currently operate?', type: 'select', required: true, options: ['Select...', '1 location', '2–3 locations', '4–10 locations', '10+ locations'] },
      { id: 'annual_revenue', label: 'Approximate Annual Revenue', type: 'select', required: true, options: ['Select...', 'Under $250k', '$250k – $500k', '$500k – $1M', '$1M – $3M', '$3M – $10M', '$10M+'] },
      {
        id: 'franchise_interest',
        label: 'What best describes your interest in franchising?',
        type: 'radio',
        required: true,
        options: [
          'I want to explore franchising as a growth option',
          'I am actively planning to franchise my business',
          'I have already started the franchising process',
          'I want to understand costs and timelines first',
        ],
      },
      {
        id: 'timeline',
        label: 'What is your timeline to launch your franchise?',
        type: 'select',
        required: true,
        options: ['Select...', 'Within 6 months', '6–12 months', '1–2 years', 'Just exploring for now'],
      },
    ],
  },
  {
    id: 4,
    title: 'Final Details',
    subtitle: 'Almost done! A few last questions to help us prepare for your consultation.',
    fields: [
      { id: 'how_heard', label: 'How did you hear about FMS?', type: 'select', options: ['Select...', 'Google Search', 'Social Media', 'Referral from a friend', 'Industry event', 'Podcast or webinar', 'Other'] },
      {
        id: 'biggest_concern',
        label: 'What is your biggest concern about franchising your business?',
        type: 'radio',
        options: [
          'Not sure if my business is ready',
          'Uncertain about the costs involved',
          'Worried about protecting my brand',
          'Don\'t know how to find franchisees',
          'Legal and compliance concerns',
          'I don\'t have many concerns — ready to go!',
        ],
      },
      { id: 'additional_info', label: 'Anything else you\'d like us to know? (Optional)', type: 'textarea', placeholder: 'Any additional context, questions, or specific areas you\'d like help with...' },
    ],
  },
];

export default function FeasibilityClient() {
  const [currentStep, setCurrentStep] = useState(0); // 0-indexed
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = STEPS.length;
  const step = STEPS[currentStep];
  const progressPct = ((currentStep) / totalSteps) * 100;

  function handleChange(id: string, value: string) {
    setFormData(prev => ({ ...prev, [id]: value }));
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleBack() {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  }

  if (submitted) {
    return (
      <div>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #1a3a1c 0%, #2c4a2e 100%)', paddingTop: '120px', paddingBottom: '5rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🎉</div>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Your Questionnaire Has Been Submitted!
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto 2rem' }}>
              Thank you for completing the FMS Franchise Feasibility Questionnaire. One of our expert franchise consultants will review your responses and reach out within one business day to schedule your complimentary consultation.
            </p>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.5rem 2rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
              <p style={{ color: '#c8a84b', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>IN THE MEANTIME</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                Call us directly at <a href="tel:+18006100292" style={{ color: '#c8a84b', fontWeight: 700 }}>800-610-0292</a> or email <a href="mailto:info@fmsfranchise.com" style={{ color: '#c8a84b', fontWeight: 700 }}>info@fmsfranchise.com</a>
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/services/franchise-development" style={{ background: '#c8a84b', color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none' }}>
                Learn About Franchise Development
              </Link>
              <Link href="/our-clients" style={{ background: 'transparent', color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', padding: '1rem 2.5rem', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.35)', textDecoration: 'none' }}>
                See Our Client Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #1a3a1c 0%, #2c4a2e 60%, #3a5e3c 100%)', paddingTop: '120px', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <nav style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <span style={{ color: '#c8a84b' }}>Franchise Feasibility Questionnaire</span>
          </nav>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>
            FREE ASSESSMENT
          </span>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Is My Business Franchiseable?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '660px', margin: '0 auto' }}>
            Franchise Marketing Systems provides a free franchise feasibility questionnaire to help business owners understand whether they can franchise their business effectively. All information shared is kept completely confidential.
          </p>
        </div>
      </section>

      {/* ── Progress Bar ── */}
      <div style={{ background: '#1e2d24', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#c8a84b' }}>
              {STEPS[currentStep].title}
            </span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
            <div style={{ background: '#c8a84b', height: '100%', width: `${((currentStep + 1) / totalSteps) * 100}%`, borderRadius: '4px', transition: 'width 0.4s ease' }} />
          </div>
          {/* Step dots */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem' }}>
            {STEPS.map((s, i) => (
              <div key={s.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: i <= currentStep ? '#c8a84b' : 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', color: i <= currentStep ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'background 0.3s' }}>
                  {i < currentStep ? '✓' : s.id}
                </div>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.65rem', color: i <= currentStep ? '#c8a84b' : 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Form ── */}
      <section style={{ background: '#f8f8f6', padding: '4rem 0 6rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {/* Step Header */}
            <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'linear-gradient(135deg, #1a3a1c, #4a7c59)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem', fontWeight: 900, color: '#fff', margin: '0 auto 1.25rem' }}>
                {step.id}
              </div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1a3a1c', marginBottom: '0.5rem' }}>
                {step.title}
              </h2>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                {step.subtitle}
              </p>
            </div>

            {/* Form Card */}
            <form onSubmit={handleNext}>
              <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 30px rgba(44,74,46,0.1)', border: '1.5px solid #e0e8e2', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {step.fields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: '#1a3a1c', display: 'block', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                    >
                      {field.label}{field.required && <span style={{ color: '#c8a84b', marginLeft: '0.25rem' }}>*</span>}
                    </label>

                    {field.type === 'text' || field.type === 'email' || field.type === 'tel' ? (
                      <input
                        id={field.id}
                        type={field.type}
                        name={field.id}
                        value={formData[field.id] || ''}
                        onChange={e => handleChange(field.id, e.target.value)}
                        required={field.required}
                        placeholder={field.placeholder}
                        style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d9d3', borderRadius: '8px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#1a3a1c', background: '#fff', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => (e.target.style.borderColor = '#4a7c59')}
                        onBlur={e => (e.target.style.borderColor = '#d1d9d3')}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        id={field.id}
                        name={field.id}
                        value={formData[field.id] || ''}
                        onChange={e => handleChange(field.id, e.target.value)}
                        required={field.required}
                        style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d9d3', borderRadius: '8px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: formData[field.id] ? '#1a3a1c' : '#888', background: '#fff', outline: 'none', boxSizing: 'border-box', cursor: 'pointer', appearance: 'none' }}
                        onFocus={e => (e.target.style.borderColor = '#4a7c59')}
                        onBlur={e => (e.target.style.borderColor = '#d1d9d3')}
                      >
                        {field.options?.map(opt => (
                          <option key={opt} value={opt.startsWith('Select') ? '' : opt} disabled={opt.startsWith('Select')}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'radio' ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {field.options?.map(opt => (
                          <label
                            key={opt}
                            style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.85rem 1rem', border: `1.5px solid ${formData[field.id] === opt ? '#4a7c59' : '#d1d9d3'}`, borderRadius: '8px', cursor: 'pointer', background: formData[field.id] === opt ? '#e8f5ed' : '#fff', transition: 'all 0.2s' }}
                          >
                            <input
                              type="radio"
                              name={field.id}
                              value={opt}
                              checked={formData[field.id] === opt}
                              onChange={() => handleChange(field.id, opt)}
                              required={field.required && !formData[field.id]}
                              style={{ marginTop: '2px', accentColor: '#4a7c59', flexShrink: 0 }}
                            />
                            <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.92rem', color: '#1a3a1c', lineHeight: 1.5 }}>
                              {opt}
                            </span>
                          </label>
                        ))}
                      </div>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        value={formData[field.id] || ''}
                        onChange={e => handleChange(field.id, e.target.value)}
                        required={field.required}
                        rows={4}
                        placeholder={field.placeholder}
                        style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d9d3', borderRadius: '8px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.95rem', color: '#1a3a1c', background: '#fff', outline: 'none', boxSizing: 'border-box', resize: 'vertical', lineHeight: 1.6 }}
                        onFocus={e => (e.target.style.borderColor = '#4a7c59')}
                        onBlur={e => (e.target.style.borderColor = '#d1d9d3')}
                      />
                    ) : null}
                  </div>
                ))}
              </div>

              {/* Nav Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  style={{ padding: '0.9rem 2rem', border: '2px solid #d1d9d3', borderRadius: '8px', background: 'transparent', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: currentStep === 0 ? '#bbb' : '#2c4a2e', cursor: currentStep === 0 ? 'default' : 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'all 0.2s' }}
                >
                  ← Back
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: '#888' }}>
                    {currentStep + 1} / {totalSteps}
                  </span>
                  <button
                    id={currentStep === totalSteps - 1 ? 'feasibility-submit' : 'feasibility-next'}
                    type="submit"
                    style={{ padding: '0.9rem 2.5rem', border: 'none', borderRadius: '8px', background: 'linear-gradient(135deg, #c8a84b, #e0c068)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#fff', cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(200,168,75,0.35)', transition: 'transform 0.15s, box-shadow 0.15s' }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-1px)'; el.style.boxShadow = '0 6px 20px rgba(200,168,75,0.5)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 4px 15px rgba(200,168,75,0.35)'; }}
                  >
                    {currentStep === totalSteps - 1 ? 'Submit Questionnaire →' : 'Continue →'}
                  </button>
                </div>
              </div>

              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#888', marginTop: '1.25rem' }}>
                🔒 All information is kept strictly confidential. An FMS consultant will review your answers personally.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section style={{ background: 'linear-gradient(135deg, #1a3a1c, #2c4a2e)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#fff', marginBottom: '2.5rem' }}>
            Why Business Owners Trust FMS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { icon: '🏆', title: '700+', label: 'Franchise Brands Developed' },
              { icon: '📅', title: 'Since 2009', label: 'Franchising Experience' },
              { icon: '👥', title: '67 Experts', label: 'On Your Team' },
              { icon: '🌎', title: 'US & International', label: 'Reach & Coverage' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '12px', padding: '1.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#c8a84b', marginBottom: '0.25rem' }}>{item.title}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}>
            Questions? Call us directly at <a href="tel:+18006100292" style={{ color: '#c8a84b', fontWeight: 700, textDecoration: 'none' }}>800-610-0292</a> or email <a href="mailto:info@fmsfranchise.com" style={{ color: '#c8a84b', fontWeight: 700, textDecoration: 'none' }}>info@fmsfranchise.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
