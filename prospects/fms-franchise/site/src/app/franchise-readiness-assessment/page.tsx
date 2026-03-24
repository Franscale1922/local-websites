'use client';
import { useState } from 'react';
import Link from 'next/link';

const QUESTIONS = [
  {
    id: 'profitability',
    question: 'What are the approximate net profit margins of your business?',
    options: [
      { label: 'Under 10%', score: 0 },
      { label: '10–15%', score: 1 },
      { label: '15–20%', score: 2 },
      { label: '20–30%+', score: 3 },
    ],
  },
  {
    id: 'revenue',
    question: 'What is your current annual revenue?',
    options: [
      { label: 'Under $300K', score: 0 },
      { label: '$300K–$600K', score: 1 },
      { label: '$600K–$1.5M', score: 2 },
      { label: '$1.5M+', score: 3 },
    ],
  },
  {
    id: 'replicability',
    question: 'Could your business be opened and run by a trained person without you present?',
    options: [
      { label: 'No — it requires my personal expertise', score: 0 },
      { label: 'Partially — some things could run without me', score: 1 },
      { label: 'Mostly — with good training, yes', score: 2 },
      { label: 'Yes — we have systems and SOPs for everything', score: 3 },
    ],
  },
  {
    id: 'documented',
    question: 'How documented are your business processes?',
    options: [
      { label: 'Mostly in my head', score: 0 },
      { label: 'Some basic documentation exists', score: 1 },
      { label: 'Most processes are written down', score: 2 },
      { label: 'Full SOPs and training materials', score: 3 },
    ],
  },
  {
    id: 'locations',
    question: 'How many locations or units have you operated?',
    options: [
      { label: '1 location (still proving concept)', score: 0 },
      { label: '1 location (proven, profitable for 2+ years)', score: 2 },
      { label: '2–3 locations', score: 3 },
      { label: '4+ locations', score: 3 },
    ],
  },
  {
    id: 'differentiation',
    question: 'How differentiated is your business from competitors?',
    options: [
      { label: 'Similar to many competitors', score: 0 },
      { label: 'Some differences but not unique', score: 1 },
      { label: 'Clearly differentiated in our market', score: 2 },
      { label: 'Unique concept with strong brand loyalty', score: 3 },
    ],
  },
  {
    id: 'capital',
    question: 'What is your estimated investment capacity for franchise development?',
    options: [
      { label: 'Under $25K (limited budget)', score: 0 },
      { label: '$25K–$50K', score: 1 },
      { label: '$50K–$100K', score: 2 },
      { label: '$100K+ (serious commitment)', score: 3 },
    ],
  },
  {
    id: 'timeline',
    question: 'What is your timeline to launch your franchise program?',
    options: [
      { label: 'I\'m just exploring — no timeline', score: 0 },
      { label: '2–3 years', score: 1 },
      { label: '12–24 months', score: 2 },
      { label: 'Within 12 months', score: 3 },
    ],
  },
  {
    id: 'commitment',
    question: 'How committed are you to being a franchisor long-term?',
    options: [
      { label: 'Unsure — still testing the idea', score: 0 },
      { label: 'Interested but cautious', score: 1 },
      { label: 'Ready to commit with the right support', score: 2 },
      { label: 'Fully committed — this is my growth plan', score: 3 },
    ],
  },
  {
    id: 'why',
    question: 'What is your primary motivation for franchising?',
    options: [
      { label: 'Passive income only', score: 1 },
      { label: 'Scale without personal capital risk', score: 2 },
      { label: 'Build a national brand', score: 3 },
      { label: 'Exit / business valuation increase', score: 3 },
    ],
  },
];

function getResult(score: number) {
  const pct = Math.round((score / 30) * 100);
  if (pct >= 80) return {
    level: 'Franchise-Ready',
    color: '#3cb85e',
    bg: 'rgba(60,184,94,0.08)',
    border: 'rgba(60,184,94,0.3)',
    headline: 'Your Business Is Franchise-Ready',
    desc: 'Based on your answers, your business has the key ingredients for a successful franchise program: strong margins, proven operations, and documented systems. FMS recommends scheduling a development consultation to map out your formal launch plan.',
    cta: 'Book a Development Consultation',
  };
  if (pct >= 60) return {
    level: 'Strong Candidate',
    color: '#e8b736',
    bg: 'rgba(232,183,54,0.08)',
    border: 'rgba(232,183,54,0.3)',
    headline: 'Strong Franchise Candidate — Some Gaps to Address',
    desc: 'Your business has significant franchise potential, but there are 2–3 areas that need attention before development begins. FMS recommends a free consultation to identify specific gaps and build a pre-launch roadmap.',
    cta: 'Get a Custom Readiness Assessment',
  };
  if (pct >= 40) return {
    level: 'Developing',
    color: '#ed8936',
    bg: 'rgba(237,137,54,0.08)',
    border: 'rgba(237,137,54,0.3)',
    headline: 'Your Business Has Potential — Focus on Foundation First',
    desc: 'You have a concept worth exploring, but your business needs to mature in a few key areas before franchising makes sense. Our consultants can help you identify exactly what needs to strengthen — and build a 12–18 month readiness plan.',
    cta: 'Talk to a Consultant About Next Steps',
  };
  return {
    level: 'Early Stage',
    color: '#718096',
    bg: 'rgba(113,128,150,0.06)',
    border: 'rgba(113,128,150,0.25)',
    headline: 'Continue Growing Your Core Business First',
    desc: 'Based on your answers, your business isn\'t quite ready for franchising yet — and that\'s completely normal. Focus on building profitability and systems for the next 12–24 months, then revisit. FMS offers free check-in consultations at every stage.',
    cta: 'Talk to a Consultant About Your Path',
  };
}

export default function FranchiseReadinessAssessment() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const pct = Math.round((score / 30) * 100);
  const answered = Object.keys(answers).length;
  const result = getResult(score);

  function handleAnswer(qId: string, score: number) {
    setAnswers(prev => ({ ...prev, [qId]: score }));
  }

  function handleSubmit() {
    if (answered < QUESTIONS.length) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Franchise Readiness Assessment</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Free Tool</span>
          <h1>Franchise Readiness Assessment</h1>
          <p>Answer 10 questions and get your personalized Franchise Readiness Score — instantly. No email required to start.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {!submitted ? (
              <>
                {/* Progress */}
                <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem 2rem', border: '1.5px solid #e2e8f0', marginBottom: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4a5568' }}>{answered} of {QUESTIONS.length} questions answered</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#3cb85e' }}>{answered === QUESTIONS.length ? 'Complete — Submit Below' : `${QUESTIONS.length - answered} remaining`}</span>
                  </div>
                  <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(answered / QUESTIONS.length) * 100}%`, background: 'linear-gradient(90deg, #3cb85e, #e8b736)', borderRadius: '999px', transition: 'width 0.4s ease' }} />
                  </div>
                </div>

                {/* Questions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {QUESTIONS.map((q, qi) => (
                    <div key={q.id} style={{ background: '#fff', borderRadius: '16px', padding: '1.75rem 2rem', border: answers[q.id] !== undefined ? '1.5px solid #3cb85e' : '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transition: 'border-color 0.2s' }}>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: answers[q.id] !== undefined ? '#3cb85e' : '#1a3d20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '0.85rem', flexShrink: 0, transition: 'background 0.2s' }}>{qi + 1}</div>
                        <h3 style={{ fontSize: '1rem', lineHeight: 1.45 }}>{q.question}</h3>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {q.options.map((opt) => (
                          <button
                            key={opt.label}
                            onClick={() => handleAnswer(q.id, opt.score)}
                            style={{ textAlign: 'left', padding: '0.85rem 1.1rem', borderRadius: '10px', border: answers[q.id] === opt.score && answers[q.id] !== undefined ? '2px solid #3cb85e' : '1.5px solid #e2e8f0', background: answers[q.id] === opt.score && answers[q.id] !== undefined ? 'rgba(60,184,94,0.08)' : '#fafafa', fontSize: '0.9rem', color: answers[q.id] === opt.score && answers[q.id] !== undefined ? '#1a3d20' : '#4a5568', fontWeight: answers[q.id] === opt.score && answers[q.id] !== undefined ? 700 : 400, cursor: 'pointer', transition: 'all 0.15s' }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit */}
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <button
                    onClick={handleSubmit}
                    disabled={answered < QUESTIONS.length}
                    className="btn btn-gold btn-lg"
                    style={{ opacity: answered < QUESTIONS.length ? 0.5 : 1, cursor: answered < QUESTIONS.length ? 'not-allowed' : 'pointer' }}
                  >
                    Get My Readiness Score →
                  </button>
                  {answered < QUESTIONS.length && (
                    <p style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: '#9ca3af' }}>
                      Answer all {QUESTIONS.length} questions to see your score
                    </p>
                  )}
                </div>
              </>
            ) : (
              /* Results */
              <div>
                {/* Score display */}
                <div style={{ background: '#fff', borderRadius: '20px', padding: '3rem', border: `1.5px solid ${result.border}`, boxShadow: '0 8px 40px rgba(0,0,0,0.08)', textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: result.color, marginBottom: '1rem' }}>Your Franchise Readiness Score</div>
                  <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 1.5rem' }}>
                    <svg viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)', width: '160px', height: '160px' }}>
                      <circle cx="80" cy="80" r="70" fill="none" stroke="#e2e8f0" strokeWidth="12" />
                      <circle
                        cx="80" cy="80" r="70" fill="none"
                        stroke={result.color}
                        strokeWidth="12"
                        strokeDasharray={`${2 * Math.PI * 70}`}
                        strokeDashoffset={`${2 * Math.PI * 70 * (1 - pct / 100)}`}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 1s ease' }}
                      />
                    </svg>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '3rem', fontWeight: 900, color: result.color, lineHeight: 1 }}>{pct}</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af' }}>/ 100</div>
                    </div>
                  </div>

                  <div style={{ display: 'inline-block', background: result.bg, color: result.color, fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.35rem 1rem', borderRadius: '999px', border: `1px solid ${result.border}`, marginBottom: '1rem' }}>
                    {result.level}
                  </div>
                  <h2 style={{ marginBottom: '1rem' }}>{result.headline}</h2>
                  <p style={{ color: '#4a5568', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto' }}>{result.desc}</p>
                </div>

                {/* Email gate for detailed report */}
                {!emailSubmitted ? (
                  <div style={{ background: 'linear-gradient(135deg, #1a3d20, #2a5530)', borderRadius: '20px', padding: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e8b736', marginBottom: '0.75rem' }}>Get Your Full Report</div>
                    <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Enter Your Email to Receive a Detailed PDF Report</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>We'll send your personalized breakdown with specific recommendations for each area we assessed.</p>
                    <form onSubmit={(e) => { e.preventDefault(); setEmailSubmitted(true); }} style={{ display: 'flex', gap: '0.75rem', maxWidth: '480px', margin: '0 auto' }}>
                      <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="form-input" style={{ flex: 1 }} />
                      <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" className="form-input" style={{ flex: 1 }} />
                      <button type="submit" className="btn btn-gold" style={{ whiteSpace: 'nowrap' }}>Send Report</button>
                    </form>
                  </div>
                ) : (
                  <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #3cb85e', textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
                    <h3 style={{ marginBottom: '0.5rem', color: '#1a3d20' }}>Report Sent!</h3>
                    <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>Your detailed franchise readiness report is on its way to {email}. Check your inbox in the next few minutes.</p>
                  </div>
                )}

                {/* Next steps */}
                <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0' }}>
                  <h3 style={{ marginBottom: '1.5rem' }}>Your Next Steps</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg" style={{ justifyContent: 'center' }}>
                      {result.cta}
                    </a>
                    <Link href="/roi-calculator" className="btn btn-outline-green btn-lg" style={{ justifyContent: 'center' }}>
                      Calculate Your Franchise ROI →
                    </Link>
                    <button onClick={() => { setSubmitted(false); setAnswers({}); }} style={{ background: 'none', border: 'none', color: '#718096', fontSize: '0.875rem', cursor: 'pointer', padding: '0.5rem', textDecoration: 'underline' }}>
                      Retake Assessment
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
