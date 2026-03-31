import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Start a Franchise — Complete Step-by-Step Guide | FMS',
  description: 'How to start a franchise from scratch: feasibility assessment, legal documentation (FDD), operations manual, training programs, and franchise sales. A complete guide from FMS — 900+ brands franchised.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/learn/how-to-guides/how-to-start-a-franchise',
  },
  openGraph: {
    title: 'How to Start a Franchise: Complete Step-by-Step Guide | FMS',
    description: 'Everything you need to know about converting a successful business into a scalable franchise system. 8-step guide from FMS consultants with 25+ years of experience.',
    url: 'https://www.fmsfranchise.com/learn/how-to-guides/how-to-start-a-franchise',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'How to Start a Franchise — FMS Guide' }],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Start a Franchise',
  description: 'A complete 8-step guide to converting a successful business into a scalable franchise system, from feasibility through your first franchisee signing.',
  totalTime: 'P24M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assess Franchise Feasibility', text: 'Evaluate whether your business model is ready to replicate: proven profitability across 2+ locations for 2+ years, systemizable operations, differentiated brand, and sufficient capital for development.' },
    { '@type': 'HowToStep', position: 2, name: 'Design the Franchise Structure', text: 'Determine protected territory size, royalty rates (typically 4–8% of gross revenue), initial franchise fees ($25K–$50K), marketing fund contributions, and minimum performance standards.' },
    { '@type': 'HowToStep', position: 3, name: 'Prepare Legal Documentation (FDD)', text: 'Work with a franchise attorney to prepare the Franchise Disclosure Document (FDD) containing 23 standardized items. Register the FDD in all applicable states (14 registration states require registration before offering franchises).' },
    { '@type': 'HowToStep', position: 4, name: 'Build the Operations Manual', text: 'Create a comprehensive operations manual (300–500+ pages) covering every aspect of running your business — from opening procedures to customer service standards — in enough detail that a new franchisee can follow it successfully.' },
    { '@type': 'HowToStep', position: 5, name: 'Develop the Training Program', text: 'Build an initial training program combining classroom instruction, hands-on operational training, and structured on-site opening support. Plan for ongoing training through regional meetings and annual conventions.' },
    { '@type': 'HowToStep', position: 6, name: 'Launch Franchise Marketing & Sales', text: 'Set up franchise sales infrastructure: development website, franchise portal listings, broker relationships, and content marketing. The typical franchise sales cycle runs 90–150 days from inquiry to signed agreement.' },
    { '@type': 'HowToStep', position: 7, name: 'Sign Your First Franchisee', text: 'Select your first franchisee carefully — structured interviews, financial verification, and reference checks. Your first 5 franchisees establish your system reputation for the next decade.' },
    { '@type': 'HowToStep', position: 8, name: 'Build Ongoing Support Systems', text: 'Invest in franchisee support infrastructure: field operations consulting visits, performance benchmarking, franchisee advisory councils, intranet systems, and annual conventions.' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fmsfranchise.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.fmsfranchise.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'How-To Guides', item: 'https://www.fmsfranchise.com/learn/how-to-guides' },
    { '@type': 'ListItem', position: 4, name: 'How to Start a Franchise' },
  ],
};

export default function HowToStartFranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Learn</a><span>›</span>
            <a href="/learn/how-to-guides">How-To Guides</a><span>›</span>
            <span>How to Start a Franchise</span>
          </div>
          <span className="eyebrow" style={{ color: '#eebc4a' }}>Franchise Development Guide</span>
          <h1>How to Start a Franchise: The Complete Step-by-Step Guide</h1>
          <p>Everything you need to know about converting a successful business into a scalable franchise system — from initial feasibility through your first franchisee signing. Written by FMS consultants with 25+ years of experience.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">
              Get Expert Guidance — Free
            </Link>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline-white">
              Take the Feasibility Quiz
            </Link>
          </div>
        </div>
      </div>

      {/* ── Guide Overview ── */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="section-header">
            <span className="eyebrow">What You'll Learn</span>
            <h2>The Franchise Development Process, Step by Step</h2>
          </div>

          {/* Steps */}
          {[
            {
              step: '01', title: 'Assess Franchise Feasibility',
              body: 'Before investing in franchise development, you need to honestly evaluate whether your business model is ready to replicate. Core requirements include proven profitability across at least 2 locations operating for 2+ years, a systemizable operation that can be documented and taught, a differentiated brand with protectable intellectual property, and sufficient capital to fund development. A franchise feasibility study typically takes 4–6 weeks and gives you a clear go/no-go recommendation backed by market research and financial modeling.',
            },
            {
              step: '02', title: 'Design the Franchise Structure',
              body: 'Key structural decisions include: protected territory size and design (ensuring each franchisee has sufficient customer base without cannibalizing neighbors), royalty rates (typically 4–8% of gross revenue), initial franchise fees ($25K–$50K for most service concepts), marketing fund contributions (1–3% of gross revenue), and minimum performance standards. These decisions are interdependent — royalties must be high enough to fund meaningful support, yet low enough that franchisees can make money after paying them.',
            },
            {
              step: '03', title: 'Prepare Legal Documentation',
              body: 'The Franchise Disclosure Document (FDD) is the foundational legal document of any franchise system. It contains 23 standardized items covering your company history, key executives, all fees, franchisee obligations, territory rights, training obligations, and audited financial statements. In 14 "registration states" — including California, New York, Maryland, and Illinois — your FDD must be registered with the state before you can offer or sell franchises there. FDD preparation typically takes 3–5 months with experienced franchise attorneys.',
            },
            {
              step: '04', title: 'Build the Operations Manual',
              body: 'Your operations manual is what makes franchising possible. It captures every aspect of running your business in enough detail that someone without prior experience can follow it successfully. Strong operations manuals typically run 300–500+ pages and cover not just procedures ("how to do X") but principles ("why we do X this way") — enabling franchisees to make good decisions in situations the manual doesn\'t explicitly address. Operations manual development runs parallel to FDD preparation and typically takes 2–4 months.',
            },
            {
              step: '05', title: 'Develop the Training Program',
              body: 'Your initial training program is what transfers your operational knowledge to each new franchisee. Best-practice training programs combine in-person classroom instruction (at your headquarters or training location), hands-on operational training (in a live or model unit), and structured on-site opening support (typically 1–2 weeks at the franchisee\'s location during launch). Beyond initial training, plan for ongoing training through regional meetings, annual conventions, online learning modules, and field operations visits.',
            },
            {
              step: '06', title: 'Launch Franchise Marketing & Sales',
              body: 'Franchise sales begins once your FDD is registered and your infrastructure is ready. Effective franchise sales combines multiple channels: a franchise development website optimized for search (targeting "franchise your business" and industry-specific franchise opportunity searches), franchise portal listings (Franchise Direct, Franchise Gator, BusinessesForSale), franchise broker relationships, and PR/content marketing. The typical franchise sales cycle runs 90–150 days from initial inquiry to signed agreement.',
            },
            {
              step: '07', title: 'Sign Your First Franchisee',
              body: 'Your first franchisee is the most important hire of your franchise career — they set the culture, become your first validation call, and teach you what your training and operations systems actually need. Invest extra time in selection: structured interviews covering their business background, motivations, and leadership approach; a thorough review of their financial situation; and reference checks with their professional history. Your first 5 franchisees establish your system\'s reputation for the next decade.',
            },
            {
              step: '08', title: 'Build Ongoing Support Systems',
              body: 'The most successful franchisors are those who invest most heavily in franchisee support — not just at launch, but ongoing. Build field operations infrastructure (consulting visits, performance benchmarking, corrective action processes), franchisee communication platforms (intranet, CRM shared visibility), peer networking (franchisee advisory councils, annual conventions), and a technology stack that gives you visibility into franchisee-level performance across your system.',
            },
          ].map((s, i) => (
            <div key={s.step} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '2rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
              <div style={{ background: '#2d4135', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#eebc4a', fontWeight: 900, fontSize: '1.1rem', fontFamily: 'Montserrat, sans-serif' }}>{s.step}</span>
              </div>
              <div>
                <h2 style={{ fontSize: '1.3rem', color: '#2d4135', marginBottom: '0.75rem', fontFamily: 'Montserrat, sans-serif' }}>
                  Step {parseInt(s.step, 10)}: {s.title}
                </h2>
                {i < 7 && <div className="divider" style={{ marginBottom: '1rem' }} />}
                <p style={{ color: '#4a5568', lineHeight: 1.85, fontSize: '0.97rem', margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Go Deeper</span>
            <h2>More Franchise Development Guides</h2>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { icon: '📋', title: 'How to Write a Franchise Operations Manual', href: '/learn/how-to-guides/how-to-write-a-franchise-operations-manual', cta: 'Read Guide' },
              { icon: '🔢', title: 'Franchise ROI Calculator', href: '/roi-calculator', cta: 'Calculate My ROI' },
              { icon: '🙋', title: 'Franchise Readiness Assessment', href: '/franchise-readiness-assessment', cta: 'Take Assessment' },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '1.25rem', color: '#2d4135' }}>{item.title}</h3>
                <Link href={item.href} className="btn btn-outline">{item.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow eyebrow-gold">Ready to Franchise Your Business?</span>
          <h2>Talk to a Franchise Consultant — It's Free</h2>
          <p>Skip the reading and get personalized guidance for your specific business. Our consultants have franchised 900+ brands — they can tell you in 30 minutes whether and how to franchise yours.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">Get Free Consultation</Link>
            <a href="tel:8006100292" className="btn btn-outline-white">Call 800-610-0292</a>
          </div>
        </div>
      </section>
    </>
  );
}
