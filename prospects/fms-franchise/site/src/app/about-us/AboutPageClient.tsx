'use client';
import Link from 'next/link';

function YTEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
      />
    </div>
  );
}

const CORE_VALUES = [
  { title: 'Hands-On', desc: 'We operate like owners, not advisors' },
  { title: 'Long-Term Partnership', desc: 'We stay with you as long as you need us, from launch through exit' },
  { title: 'Affordable Excellence', desc: 'We believe that scaling should be accessible' },
  { title: 'Legacy-Minded', desc: 'We help build brands that outlive their founders' },
];

export default function AboutPageClient() {
  return (
    <div>
      {/* ── Page Hero ── */}
      <section style={{ background: '#2d4135', paddingTop: '113px', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#eebc4a', display: 'block', marginBottom: '0.75rem' }}>
            COMPANY
          </span>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            We&apos;ve Helped Over 1,000 Brands Turn Proven Concepts into Scalable Franchise Systems
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '720px', margin: '0 auto 2rem' }}>
            In 2009, Chris Conner noticed that many talented business owners had great concepts and local success, but no way to scale without risky guesswork. As a franchise operator himself, Chris understood the issues because he lived them.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '720px', margin: '0 auto 2rem' }}>
            Seeing the opportunity gap, he envisioned a dedicated franchising partner that would stand with owners from day one. That partner is FMS.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '720px', margin: '0 auto 2rem' }}>
            We combine expert consulting, in-house franchise sales, and comprehensive marketing into a single, integrated model – providing everything you need under one roof.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/franchise-your-business" className="btn btn-gold">Schedule Free Consultation</Link>
            <Link href="/about-us/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: '#1e2d24', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '11,340+', label: 'Franchise Units Sold' },
              { num: 'Over 1,000', label: 'Brands Developed' },
              { num: '234 Brands', label: 'Successful Exits (Up To $350m+)' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#eebc4a' }}>{s.num}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.4rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM FRANCHISE OWNER TO FRANCHISE CONSULTANT — two videos side by side ── */}
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#35a84a' }}>
              RESULTS THAT MATTER
            </span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#2d4135', marginTop: '0.5rem' }}>
              FROM FRANCHISE OWNER TO FRANCHISE CONSULTANT
            </h2>
            <p style={{ color: '#555', lineHeight: 1.75, maxWidth: '640px', margin: '0.75rem auto 0', fontSize: '1rem' }}>
              End-To-End Franchising Development Since 2009
            </p>
          </div>

          {/* Two videos side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '3rem' }}>
            {/* About Video 1 — YouTube */}
            <div>
              <YTEmbed id="2JgdVcRwv18" title="Team Introduction | Franchise Marketing Systems" />
              <p style={{ textAlign: 'center', marginTop: '0.65rem', fontSize: '0.82rem', color: '#888', fontFamily: 'Source Sans 3, sans-serif' }}>
                Team Introduction | Franchise Marketing Systems
              </p>
            </div>

            {/* About Video 2 — Local MP4 */}
            <div>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', background: '#1e2d24' }}>
                <video
                  src="/about-2.mp4"
                  controls
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
                  poster=""
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p style={{ textAlign: 'center', marginTop: '0.65rem', fontSize: '0.82rem', color: '#888', fontFamily: 'Source Sans 3, sans-serif' }}>
                A personal message from our team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Built for Scale ── */}
      <section style={{ background: '#f7f7f7', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#35a84a' }}>
                BUILT FOR SCALE
              </span>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1.25rem', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Supporting Franchise Growth Across Every Industry
              </h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
                We&apos;ve supported franchise growth across a wide range of industries, from emerging concepts to established multi-location brands.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
                Behind every number is an owner who turned a local concept into a scalable franchise system.
              </p>
              <Link href="/our-clients" className="btn btn-green">View Our Clients</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                'Health & Beauty', 'Food & Beverage', 'Children', 'Retail',
                'Real Estate', 'Services', 'Automotive', 'Education',
                'Home-based', 'Healthcare',
              ].map((industry) => (
                <div key={industry} style={{ padding: '1rem', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', background: '#35a84a', borderRadius: '50%', flexShrink: 0 }} />
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section style={{ background: '#2d4135', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#eebc4a' }}>
              WHAT DRIVES US
            </span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              We Believe Franchising Is a People Business First
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '0.75rem auto 0', lineHeight: 1.75 }}>
              At FMS, we don&apos;t measure success solely by units sold or royalties earned. We measure it by the lives we&apos;ve helped change for the better. Our core values guide everything we do:
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {CORE_VALUES.map((v) => (
              <div key={v.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', background: '#35a84a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.25rem' }}>✓</div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2.5rem', color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '700px', margin: '2.5rem auto 0' }}>
            We&apos;re not a faceless agency. Our team includes real people who&apos;ve been franchise owners, salespeople, marketers, and business builders who understand what it takes to grow a brand in the real world.
          </p>
        </div>
      </section>

      {/* ── About Nav Links ── */}
      <section style={{ background: '#fff', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'Leadership', href: '/about-us/leadership' },
              { label: 'Meet the Team', href: '/meet-the-team' },
              { label: 'Our Clients', href: '/our-clients' },
              { label: 'Events', href: '/event' },
              { label: 'Blog', href: '/about-us/blog' },
              { label: 'News', href: '/news' },
              { label: 'Press & Media', href: '/insights-on-franchise-marketing-systems-press' },
              { label: 'Locations', href: '/locations' },
              { label: 'Contact', href: '/about-us/contact' },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{
                padding: '0.6rem 1.25rem', border: '1px solid #e0e0e0', borderRadius: '4px',
                fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.82rem',
                color: '#333', textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#35a84a'; el.style.color = '#fff'; el.style.borderColor = '#35a84a'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = ''; el.style.color = '#333'; el.style.borderColor = '#e0e0e0'; }}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile grid override */}
      <style jsx global>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
