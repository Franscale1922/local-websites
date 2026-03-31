import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FMS Events — Franchise Webinars, Discovery Days & Trade Shows | FMS Franchise',
  description: 'View upcoming FMS Franchise events including webinars, franchise discovery days, trade shows, and conferences. Stay connected with the FMS franchise community.',
};

const UPCOMING_EVENTS = [
  {
    type: 'Webinar',
    title: 'How to Franchise Your Business: From Concept to First Franchisee',
    date: 'Monthly — Register for Next Session',
    description: 'Join FMS President Chris Conner for this live, interactive webinar covering the entire franchise development process. Q&A included.',
    cta: 'Register Now',
    ctaHref: 'https://info.fmsfranchise.com/freeconsultation',
    badge: 'Free',
  },
  {
    type: 'Discovery Day',
    title: 'FMS Franchise Development Discovery Day — Atlanta, GA',
    date: 'Quarterly — Contact for Dates',
    description: 'An in-depth day at FMS headquarters for serious business owners exploring franchising. Includes 1:1 consultant sessions, an FDD overview, and unit economics analysis.',
    cta: 'Request Invitation',
    ctaHref: 'https://info.fmsfranchise.com/freeconsultation',
    badge: 'By Invitation',
  },
  {
    type: 'Trade Show',
    title: 'International Franchise Association Annual Convention',
    date: 'February 2026',
    description: 'FMS attends the IFA Annual Convention each year. Connect with our team at the show or schedule a meeting in advance.',
    cta: 'Schedule a Meeting',
    ctaHref: 'https://info.fmsfranchise.com/freeconsultation',
    badge: 'Industry Event',
  },
  {
    type: 'Trade Show',
    title: 'The Franchise Expo — Multiple Dates & Locations',
    date: 'Year-Round',
    description: 'FMS exhibits at franchise expos across the United States. Find us and meet a consultant at an expo near you.',
    cta: 'Find an Expo',
    ctaHref: 'https://info.fmsfranchise.com/freeconsultation',
    badge: 'In-Person',
  },
];

const BADGE_COLORS: Record<string, string> = {
  'Free': '#35a84a',
  'By Invitation': '#eebc4a',
  'Industry Event': '#38bdf8',
  'In-Person': '#a78bfa',
};

const TYPE_ICONS: Record<string, string> = {
  'Webinar': '🎬',
  'Discovery Day': '🏢',
  'Trade Show': '🎪',
};

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/about-us">About</a><span>›</span>
            <span>Events</span>
          </div>
          <span className="eyebrow" style={{ color: '#eebc4a' }}>Connect with FMS</span>
          <h1>FMS Franchise Events</h1>
          <p>Meet our team, learn from our consultants, and connect with the FMS franchise community. We host and attend events year-round — in-person and online.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <Link href="/webinars" className="btn btn-gold btn-lg">View Our Webinars</Link>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-outline-white">Schedule a Consultation</Link>
          </div>
        </div>
      </div>

      {/* ── Upcoming Events ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Upcoming Events</span>
            <h2>Where to Find FMS</h2>
            <p>From live webinars to in-person trade shows, FMS is active across the franchise industry calendar.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {UPCOMING_EVENTS.map((event, i) => (
              <div key={i} className="card" style={{ padding: '2rem 2.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{TYPE_ICONS[event.type] || '📅'}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ background: BADGE_COLORS[event.badge] || '#35a84a', color: '#fff', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.65rem', borderRadius: '999px' }}>
                      {event.badge}
                    </span>
                    <span style={{ color: '#718096', fontSize: '0.82rem', fontWeight: 600 }}>{event.type}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#2d4135', margin: '0 0 0.4rem' }}>{event.title}</h3>
                  <div style={{ color: '#35a84a', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.65rem' }}>📅 {event.date}</div>
                  <p style={{ color: '#4a5568', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1rem' }}>{event.description}</p>
                  <Link href={event.ctaHref} className="btn btn-gold" style={{ fontSize: '0.88rem' }}>{event.cta} →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Webinar CTA ── */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow-light">On-Demand Learning</span>
          <h2 style={{ color: '#fff', marginTop: '0.75rem' }}>Catch Up on Past Webinars</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '1rem auto 2rem' }}>
            Can't make it to a live event? Our webinar library has 6+ on-demand recordings covering franchise development, franchise sales, marketing, and more.
          </p>
          <Link href="/webinars" className="btn btn-gold btn-lg">Browse Webinar Library</Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow eyebrow-gold">Can't Wait for an Event?</span>
          <h2>Talk to a Franchise Consultant Today</h2>
          <p>Skip the event calendar and connect directly with an FMS franchise strategist. Free consultation, no obligation, real answers about your specific business.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">Get Free Consultation</Link>
            <a href="tel:8006100292" className="btn btn-outline-white">Call 800-610-0292</a>
          </div>
        </div>
      </section>
    </>
  );
}
