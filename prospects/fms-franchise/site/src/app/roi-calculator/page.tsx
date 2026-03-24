'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState({
    franchiseFee: 35000,
    royaltyRate: 6,
    avgUnitRevenue: 500000,
    unitsYear1: 3,
    unitsYear2: 8,
    unitsYear3: 15,
    unitsYear4: 25,
    unitsYear5: 40,
  });
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  function update(key: string, val: number) {
    setInputs(prev => ({ ...prev, [key]: val }));
    setShowResults(false);
  }

  function calc() {
    const { franchiseFee, royaltyRate, avgUnitRevenue, unitsYear1, unitsYear2, unitsYear3, unitsYear4, unitsYear5 } = inputs;
    const years = [unitsYear1, unitsYear2, unitsYear3, unitsYear4, unitsYear5];
    return years.map((units, i) => {
      const franchiseFees = units * franchiseFee;
      const royalties = units * avgUnitRevenue * (royaltyRate / 100);
      return {
        year: i + 1,
        units,
        franchiseFees,
        royalties,
        total: franchiseFees + royalties,
      };
    });
  }

  const results = calc();
  const cumulative5yr = results.reduce((sum, r) => sum + r.total, 0);
  const royaltiesYear5 = results[4].royalties;

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>ROI Calculator</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Free Tool</span>
          <h1>Franchise ROI Calculator</h1>
          <p>Estimate your 5-year franchisor revenue based on your fee structure and growth projections. Adjust the inputs below to model different scenarios.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
            {/* Inputs panel */}
            <div style={{ background: '#fff', borderRadius: '20px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Your Franchise Model</h2>
              <p style={{ fontSize: '0.875rem', color: '#718096', marginBottom: '2rem' }}>Adjust inputs to model different scenarios.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { key: 'franchiseFee', label: 'Initial Franchise Fee', min: 10000, max: 75000, step: 1000, prefix: '$', note: `$${inputs.franchiseFee.toLocaleString()}` },
                  { key: 'royaltyRate', label: 'Royalty Rate', min: 3, max: 10, step: 0.5, suffix: '%', note: `${inputs.royaltyRate}%` },
                  { key: 'avgUnitRevenue', label: 'Avg. Franchisee Revenue / Year', min: 100000, max: 2000000, step: 25000, prefix: '$', note: `$${inputs.avgUnitRevenue.toLocaleString()}` },
                ].map(field => (
                  <div key={field.key}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1a1a1a' }}>{field.label}</label>
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1a3d20' }}>{field.note}</span>
                    </div>
                    <input
                      type="range"
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={inputs[field.key as keyof typeof inputs]}
                      onChange={e => update(field.key, Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#3cb85e' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#9ca3af', marginTop: '0.2rem' }}>
                      <span>{field.prefix}{field.min.toLocaleString()}{field.suffix}</span>
                      <span>{field.prefix}{field.max.toLocaleString()}{field.suffix}</span>
                    </div>
                  </div>
                ))}

                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>Projected Franchisee Count by Year</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {[
                      { key: 'unitsYear1', label: 'Year 1' },
                      { key: 'unitsYear2', label: 'Year 2' },
                      { key: 'unitsYear3', label: 'Year 3' },
                      { key: 'unitsYear4', label: 'Year 4' },
                      { key: 'unitsYear5', label: 'Year 5' },
                    ].map(yr => (
                      <div key={yr.key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '0.82rem', color: '#718096', width: '45px', flexShrink: 0 }}>{yr.label}</span>
                        <input
                          type="range" min={0} max={100} step={1}
                          value={inputs[yr.key as keyof typeof inputs]}
                          onChange={e => update(yr.key, Number(e.target.value))}
                          style={{ flex: 1, accentColor: '#3cb85e' }}
                        />
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1a3d20', width: '35px', textAlign: 'right' }}>{inputs[yr.key as keyof typeof inputs]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowResults(true)}
                className="btn btn-gold btn-lg"
                style={{ width: '100%', justifyContent: 'center', marginTop: '2rem' }}
              >
                Calculate My ROI →
              </button>
            </div>

            {/* Results panel */}
            <div>
              {!showResults ? (
                <div style={{ background: '#fff', borderRadius: '20px', padding: '3rem', border: '1.5px solid #e2e8f0', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
                  <h3 style={{ marginBottom: '0.75rem', color: '#4a5568' }}>Adjust Your Inputs</h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.65 }}>Set your franchise fee, royalty rate, and growth projections on the left, then hit "Calculate My ROI" to see your 5-year projection.</p>
                </div>
              ) : (
                <div>
                  {/* 5-year summary cards */}
                  <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', borderRadius: '16px', padding: '1.75rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', marginBottom: '0.5rem' }}>5-Year Total Revenue</div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', fontWeight: 900, color: '#e8b736', lineHeight: 1 }}>${(cumulative5yr / 1000000).toFixed(1)}M</div>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', borderRadius: '16px', padding: '1.75rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', marginBottom: '0.5rem' }}>Year 5 Annual Royalties</div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', fontWeight: 900, color: '#e8b736', lineHeight: 1 }}>${(royaltiesYear5 / 1000).toFixed(0)}K</div>
                    </div>
                  </div>

                  {/* Year-by-year table */}
                  <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
                    <div style={{ background: '#f7f9f7', padding: '1rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#718096' }}>
                      <span>Year</span>
                      <span>Franchise Fees</span>
                      <span>Royalties</span>
                      <span>Total</span>
                    </div>
                    {results.map((r, i) => (
                      <div key={r.year} style={{ padding: '1rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', fontSize: '0.9rem', borderTop: '1px solid #e2e8f0', background: i % 2 === 0 ? '#fff' : '#f7f9f7' }}>
                        <span style={{ fontWeight: 700, color: '#1a3d20' }}>Year {r.year} ({r.units} units)</span>
                        <span style={{ color: '#4a5568' }}>${r.franchiseFees.toLocaleString()}</span>
                        <span style={{ color: '#4a5568' }}>${Math.round(r.royalties).toLocaleString()}</span>
                        <span style={{ fontWeight: 800, color: '#1a3d20' }}>${Math.round(r.total).toLocaleString()}</span>
                      </div>
                    ))}
                    <div style={{ padding: '1.1rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', borderTop: '2px solid #1a3d20', background: '#f7f9f7', fontWeight: 800, fontSize: '0.9rem' }}>
                      <span style={{ color: '#1a3d20' }}>5-Year Total</span>
                      <span style={{ color: '#718096' }}>${results.reduce((s,r)=>s+r.franchiseFees,0).toLocaleString()}</span>
                      <span style={{ color: '#718096' }}>${Math.round(results.reduce((s,r)=>s+r.royalties,0)).toLocaleString()}</span>
                      <span style={{ color: '#1a3d20' }}>${Math.round(cumulative5yr).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    * These projections are for illustrative purposes only and are not guaranteed. Actual results depend on many factors including market conditions, franchisee performance, and your specific business model. FMS consultants can help you build a more detailed, vetted financial model.
                  </p>

                  {/* Email gate */}
                  {!emailSubmitted ? (
                    <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', borderRadius: '16px', padding: '1.75rem', textAlign: 'center' }}>
                      <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Get a Detailed FMS Projection PDF</h3>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>Our consultants will build a fully customized financial model for your specific concept — free.</p>
                      <form onSubmit={e => { e.preventDefault(); setEmailSubmitted(true); }} style={{ display: 'flex', gap: '0.75rem' }}>
                        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="form-input" style={{ flex: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
                        <button type="submit" className="btn btn-gold">Send PDF</button>
                      </form>
                    </div>
                  ) : (
                    <div style={{ background: '#fff', borderRadius: '16px', padding: '1.75rem', border: '1.5px solid #3cb85e', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✅</div>
                      <p style={{ fontWeight: 700, color: '#1a3d20', marginBottom: '0.25rem' }}>PDF Sent!</p>
                      <p style={{ fontSize: '0.875rem', color: '#718096' }}>Check your inbox at {email}. A consultant will also follow up with a customized model.</p>
                    </div>
                  )}

                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                    <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg" style={{ flex: 1, justifyContent: 'center' }}>Book Free Consultation</a>
                    <Link href="/franchise-readiness-assessment" className="btn btn-outline-green btn-lg" style={{ flex: 1, justifyContent: 'center' }}>Take Readiness Quiz</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
