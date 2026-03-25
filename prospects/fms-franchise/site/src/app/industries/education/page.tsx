import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Education Franchise Consulting | FMS',
  description: 'FMS has franchised 45+ education brands — K-12 tutoring, test prep, corporate training, vocational education, and specialized learning programs. Growing market with durable demand.',
};

export default function EducationPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/industries">Industries</a><span>›</span>
            <span>Education</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Industry Deep Dive</span>
          <h1>Education Franchise Consulting</h1>
          <p>Education franchising spans K-12 tutoring to corporate skills training — and shares one consistent advantage: parents and employers invest in education regardless of economic conditions. FMS has franchised 45+ educational concepts.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/feasibility-questionnaire" className="btn btn-gold">See If My Concept Is Ready</Link>
            <Link href="/contact" className="btn btn-outline-white">Talk to a Consultant</Link>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>

          <div className="grid-4" style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { num: '45+', label: 'Education Brands Franchised' },
              { num: '$1.8T', label: 'Global EdTech Market' },
              { num: 'Hybrid', label: 'In-person & Online Models' },
              { num: '5–7%', label: 'Typical Royalty Rate' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1a3d20', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.6rem', color: '#e8b736' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <h2>The Education Franchise Opportunity</h2>
          <p>Two post-pandemic dynamics have permanently expanded the education franchise market:</p>
          <ul style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568', marginBottom: '1.5rem' }}>
            <li><strong>Learning gaps created real demand:</strong> Post-pandemic learning loss created sustained demand for supplemental tutoring and academic support that school systems cannot meet alone.</li>
            <li><strong>Hybrid models expanded the addressable market:</strong> Education concepts that combine in-person and online delivery can serve students regionally without requiring physical presence — dramatically expanding territory size and franchisee addressable market.</li>
          </ul>

          <h2>Education Formats We've Franchised</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0 2rem' }}>
            {['K-12 tutoring centers', 'SAT/ACT test prep', 'Math enrichment', 'Reading programs', 'STEAM education', 'Language learning', 'College prep consulting', 'Corporate training', 'Vocational skills', 'Coding academies', 'Executive coaching', 'Professional certification prep'].map(f => (
              <span key={f} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '0.3rem 0.875rem', fontSize: '0.82rem', fontWeight: 600, color: '#4a5568', boxShadow: '0 2px 8px rgba(60,184,94,0.10)' }}>{f}</span>
            ))}
          </div>

          <h2>Key Considerations for Education Franchising</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0 2.5rem' }}>
            {[
              { title: 'Curriculum is your most valuable IP', body: 'Your proprietary teaching methodology, curriculum materials, and assessment tools are the core asset franchisees are licensing. These must be formally documented, copyright-protected where applicable, and defined in the Franchise Agreement as licensed IP.' },
              { title: 'Outcomes measurement drives franchisee recruiting', body: 'Education franchise buyers increasingly demand proof of concept effectiveness — student outcome data, improvement metrics, and customer testimonials. Building this proof into your Item 19 disclosures and marketing materials is critical.' },
              { title: 'Teacher/tutor credentialing varies by state', body: 'Some states require teaching certification for certain instructional activities. Your FDD must address franchisee staffing requirements and the variation that state regulations create.' },
              { title: 'Hybrid delivery models require thoughtful territory design', body: 'If your concept delivers services online as well as in-person, your franchise agreement must clearly define how online customers are attributed to franchisee territories to prevent internal conflict.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>FMS Education Clients (Sample)</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 3rem' }}>
            {['SkillBridge', 'ProCare Therapy', 'ReadRight Academy', 'CodeFirst Learning'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a' }}>{b}</span>
            ))}
          </div>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Ready to Franchise Your Education Concept?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Education is one of the most recession-resistant franchise categories. If your teaching model is working, FMS can build the franchise system to scale it across the country.</p>
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
