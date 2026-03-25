import type { Metadata } from 'next';
import Link from 'next/link';
import { IconTrendingUp, IconRevenue, IconLock, IconHandshake, IconAlertTriangle } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Healthcare Franchise Consulting | FMS',
  description: 'FMS has franchised 60+ healthcare brands — therapy services, senior care, healthcare staffing, and medical support concepts. Specialized expertise in regulated healthcare franchise development.',
};

export default function HealthcarePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Healthcare</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Healthcare Franchise Consulting</h1>
          <p>Healthcare franchising demands specialized compliance expertise that most franchise consultants don't have. FMS has franchised 60+ healthcare concepts — from therapy staffing to senior care — with the regulatory knowledge to do it right.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">See If My Concept Is Ready</Link>
            <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>

          <div style={{ background: '#fff8e8', borderRadius: '14px', padding: '1.5rem', margin: '0 0 2.5rem', border: '1.5px solid #e8b736' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <IconAlertTriangle size={20} color="#e8b736" />
              <strong style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>Important Note on Healthcare Franchising</strong>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: '0.5rem 0 0', lineHeight: 1.75 }}>Healthcare is one of the most heavily regulated franchise categories. FMS coordinates closely with healthcare-specialized attorneys on FDD development, HIPAA compliance language, and state-specific licensing requirements. This is not a category where generic franchise templates suffice.</p>
          </div>

          <div className="grid-4" style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { num: '60+', label: 'Healthcare Brands Franchised' },
              { num: '$4.3T', label: 'U.S. Healthcare Spend' },
              { num: 'HIPAA', label: 'Compliance Expertise' },
              { num: '5–7%', label: 'Typical Royalty Rate' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.6rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>Healthcare Franchise Categories We Serve</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2rem' }}>
            {['Physical therapy staffing', 'Occupational therapy', 'Speech therapy', 'Behavioral health', 'Senior care', 'Home health aides', 'Medical billing & coding', 'Chiropractic', 'Acupuncture', 'Dental support', 'Telemedicine', 'Addiction recovery'].map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>{f}</span>
            ))}
          </div>

          <h2>Why Healthcare Businesses Franchise Successfully</h2>
          <p>The healthcare sector's structural advantages make it one of the most compelling franchise categories despite its complexity:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2rem' }}>
            {[
              { icon: <IconTrendingUp size={22} color="#3cb85e" />, point: 'Demographic tailwinds', detail: 'The U.S. population is aging — demand for elder care, therapy services, and medical support will compound for the next 30 years.' },
              { icon: <IconRevenue size={22} color="#3cb85e" />, point: 'Insurance reimbursement models', detail: 'Many healthcare franchise concepts operate on insurance-reimbursed services, creating relatively predictable revenue versus consumer discretionary spending.' },
              { icon: <IconLock size={22} color="#3cb85e" />, point: 'High barriers to imitation', detail: 'Licensing requirements, clinical credentialing, and compliance infrastructure make healthcare concepts genuinely difficult to replicate informally — protecting franchisee territories.' },
              { icon: <IconHandshake size={22} color="#3cb85e" />, point: 'Staffing model franchises', detail: 'Healthcare staffing franchises (like ProCare Therapy) require zero clinical infrastructure — they connect licensed professionals with institutions. Relatively lean model with strong margins.' },
            ].map(p => (
              <div key={p.point} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #f0faf3, #e2f5e8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.35rem', color: '#1a1a1a' }}>{p.point}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.65 }}>{p.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Critical Compliance Considerations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2.5rem' }}>
            {[
              { title: 'HIPAA compliance language in FDD and operations manual', body: 'Any franchise concept handling patient data or health information must include HIPAA-specific provisions in both the Franchise Agreement and Operations Manual. This is not optional.' },
              { title: 'State-by-state licensure for clinical practitioners', body: 'Clinical practitioners (therapists, nurses, physicians) are licensed at the state level. Your franchise system must accommodate multi-state license variance in its staffing and training protocols.' },
              { title: 'CON laws in certain states', body: 'Certificate of Need (CON) laws in some states restrict the establishment of new healthcare facilities. Your territory strategy must account for these CON state restrictions.' },
              { title: 'Anti-kickback and fee-splitting rules', body: 'Healthcare franchise fee structures must be carefully designed to avoid running afoul of federal anti-kickback statutes and state fee-splitting prohibitions. This requires healthcare-specialized franchise attorneys.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>FMS Healthcare Clients (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {['ProCare Therapy', 'AcuPoints', 'ClearDent', 'BrightCare Senior Living'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Franchise Your Healthcare Concept?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Healthcare franchising requires a consultant who understands the regulatory environment. FMS has 60+ healthcare brands in our portfolio and direct relationships with healthcare-specialized franchise attorneys.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/feasibility-questionnaire" className="btn btn-gold">Take the Free Assessment</Link>
              <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
