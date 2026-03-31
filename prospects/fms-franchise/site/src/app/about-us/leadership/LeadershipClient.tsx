'use client';

import Link from 'next/link';

const leaders = [
  {
    name: 'Chris Conner',
    title: 'President & Founder',
    location: 'Atlanta, GA',
    bio: `Chris Conner has been a franchise consultant working with business owners and brands to support growth through franchising since 2001. In 2009, Mr. Conner founded Franchise Marketing Systems (FMS) in Atlanta, Georgia. FMS was developed in order to provide a full-service franchise development solution to new and existing franchisors. Since 2009, FMS has developed over 400 franchise brands and has a team of over 28 franchise consultants. FMS has developed successful franchise brands including Anytime Fitness, Baxter Healthcare, Blimpie, Hungry Howie's Pizza, Restoration 1, Smash My Trash, Two Men and a Truck along with others. Mr. Conner holds a Bachelor's Degree in Marketing and Management Information Systems from Miami of Ohio University and an MBA in Finance from DePaul University in Chicago.`,
  },
  {
    name: 'Alan George',
    title: 'Co-Founder & VP of Operations',
    location: 'Atlanta, GA',
    bio: `As part of the "in the trenches" mentality at Franchise Marketing Systems, Mr. George is involved with every day aspect of the business. From Strategic Planning to sales coaching, no job is too big, and no job is too small. Part of the founding team at Franchise Marketing Systems, Mr. George has been instrumental in leading growth from a team of 3 to a staff of over 26. That growth has included Inc 1000 membership (3 years – 541% growth) and a TOP 100 Fastest Growing Private Companies in Atlanta designation.`,
  },
  {
    name: 'Laura Rozentals',
    title: 'Chief Operating Officer',
    location: '',
    bio: `Laura Rozentals is Franchise Marketing Systems' Chief Operating Officer reporting to Chris Conner. She oversees FMS's operations, customer experience and marketing. She also leads a creative group of over 20 people, including skilled designers, developers, marketers and content writers. Prior to FMS, Laura worked for Major League Baseball, National Basketball Association, Bloomberg and Intercontinental Hotel Group. She holds a B.S. in Marketing and Business Administration and an MBA.`,
  },
  {
    name: 'Tim Conner',
    title: 'Franchise Consultant & Specialist',
    location: 'Atlanta, GA',
    bio: `Tim Conner is a Franchise Consultant and Specialist with Franchise Marketing Systems. His role primarily handles qualifying candidates and determining if the franchise model is right for their line of business. Tim also works in developing operational structures for new franchise development plans and offering sales support. He attends various tradeshows throughout the year, conducting seminars and showcasing the benefits of a franchise system when implemented as a growth strategy.`,
  },
  {
    name: 'William Callaway',
    title: 'Strategic Planning Director',
    location: 'Chicago, IL',
    bio: `Mr. Callaway was formerly the director of the Strategic Planning department of the world's oldest franchise development firm, Francorp. In his role, he drafted and managed strategic business plans for franchising companies. As member of the Executive Board of Francorp International, Mr. Callaway was responsible for all strategic planning initiatives engaged by the 30-country network. He received his MBA from Northern Illinois University with a focus in Entrepreneurship and has worked with major executives such as former McDonald's CEO Ed Rensi and Founder of Gildan Activewear Greg Chamandy.`,
  },
  {
    name: 'Rebekkah Nolan',
    title: 'Financial Manager',
    location: 'Atlanta, GA',
    bio: `Mrs. Nolan brings 15+ years in finance to the Franchise Marketing Systems team. She has worked in the franchise development field since 2015 with a focus on financial management. Rebekkah holds a Bachelor's Degree in Accounting.`,
  },
  {
    name: 'Kimberly Moody',
    title: 'Franchise Consultant',
    location: 'Gloucester, VA',
    bio: `Kimberly Moody has secured an impressive track record in implementing financial goals for a business base of more than $300 million in assets covering customer service, financial planning, estate planning, banking services, and all aspects of investment management. Additionally, she worked as an Adjunct Instructor for Christopher Newport University, where she taught investment courses. Ms. Moody also has experience as the Co-Host for WVEC Channel 13's show "Investing 101."`,
  },
  {
    name: 'Paul Reisner',
    title: 'Franchise Consultant – Marketing & Sales',
    location: 'New York, NY',
    bio: `Paul has 25+ years experience in business development management and direct sales with Blue-Chip companies — CA, ADP, Pitney Bowes — and National accounts such as Deutsche Bank, PepsiCo, and Verizon. Personally responsible for generating in excess of $100M in revenue. Paul graduated from Northern Michigan University in Marketing and from Marquette with a Bachelor's Degree in Education.`,
  },
  {
    name: 'Trisha Conner',
    title: 'Franchise Consultant',
    location: '',
    bio: `Trisha Conner is a Franchise Consultant at Franchise Marketing Systems, bringing expertise in client relationship management and franchise development process coordination.`,
  },
  {
    name: 'Michelle White',
    title: 'Franchise Consultant',
    location: '',
    bio: `Michelle White is a Franchise Consultant with Franchise Marketing Systems, focused on helping business owners navigate the franchise development journey from concept to first franchisee.`,
  },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2);
}

export default function LeadershipClient() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg,#2c4a2e,#1a3a1c)',
        color: '#fff', padding: '80px 0 60px', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{
            fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px',
            letterSpacing: '2px', textTransform: 'uppercase', color: '#c8a84b', marginBottom: '16px',
          }}>OUR TEAM</p>
          <h1 style={{
            fontFamily: 'Montserrat,sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px,5vw,52px)', lineHeight: 1.15, marginBottom: '24px',
          }}>Our Leadership of Franchise Consultants</h1>
          <p style={{
            fontFamily: "'Source Sans 3',sans-serif", fontSize: '19px', lineHeight: 1.7,
            color: 'rgba(255,255,255,0.85)', maxWidth: '700px', margin: '0 auto',
          }}>
            At Franchise Marketing Systems, our leadership team brings together decades of hands-on experience in franchise development, consulting, and business growth.
          </p>
        </div>
      </section>

      {/* Intro text */}
      <section style={{ padding: '64px 0 0', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Source Sans 3',sans-serif", fontSize: '18px', color: '#555', lineHeight: 1.7,
          }}>
            From guiding emerging brands through their first franchise agreement to scaling established systems across global markets, our executives and consultants are committed to one mission — helping business owners build franchises that last. With a combined track record spanning hundreds of successful franchise brands, our team doesn&apos;t just advise from the sidelines; we work alongside you every step of the way.
          </p>
          <div style={{ marginTop: '32px' }}>
            <Link href="/franchise-feasibility-questionnaire" style={{
              display: 'inline-block', background: '#c8a84b', color: '#1a3a1c',
              padding: '16px 36px', borderRadius: '6px', fontFamily: 'Montserrat,sans-serif',
              fontWeight: 700, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase',
              textDecoration: 'none',
            }}>Franchise Feasibility Questionnaire</Link>
          </div>
        </div>
      </section>

      {/* Leadership Cards */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontFamily: 'Montserrat,sans-serif', fontWeight: 800,
            fontSize: 'clamp(22px,3vw,34px)', color: '#1a3a1c', marginBottom: '48px',
            textAlign: 'center',
          }}>Our Franchise Leadership Team</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {leaders.map((person, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: '40px',
                alignItems: 'flex-start', padding: '40px',
                background: i % 2 === 0 ? '#f8f8f6' : '#fff',
                border: '1px solid #e8e8e8', borderRadius: '12px',
              }}>
                {/* Avatar */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '100px', height: '100px', borderRadius: '50%',
                    background: 'linear-gradient(135deg,#2c4a2e,#4a7c59)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 12px',
                    color: '#fff', fontFamily: 'Montserrat,sans-serif',
                    fontWeight: 800, fontSize: '28px',
                  }}>
                    {getInitials(person.name)}
                  </div>
                  {person.location && (
                    <p style={{
                      fontFamily: "'Source Sans 3',sans-serif", fontSize: '13px',
                      color: '#888', margin: 0,
                    }}>📍 {person.location}</p>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 style={{
                    fontFamily: 'Montserrat,sans-serif', fontWeight: 800,
                    fontSize: '22px', color: '#1a3a1c', marginBottom: '4px',
                  }}>{person.name}</h3>
                  <p style={{
                    fontFamily: 'Montserrat,sans-serif', fontWeight: 600,
                    fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase',
                    color: '#c8a84b', marginBottom: '16px',
                  }}>{person.title}</p>
                  <p style={{
                    fontFamily: "'Source Sans 3',sans-serif", fontSize: '16px',
                    color: '#555', lineHeight: 1.75,
                  }}>{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg,#2c4a2e,#1a3a1c)',
        padding: '72px 0', color: '#fff', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontFamily: 'Montserrat,sans-serif', fontWeight: 800,
            fontSize: 'clamp(24px,3.5vw,38px)', marginBottom: '20px',
          }}>Start Your Franchise Today</h2>
          <p style={{
            fontFamily: "'Source Sans 3',sans-serif", fontSize: '18px',
            color: 'rgba(255,255,255,0.85)', marginBottom: '40px', lineHeight: 1.7,
          }}>
            Get access to proven franchise strategies, growth planning, and scalable systems designed to help your business expand with confidence.
          </p>
          <Link href="/franchise-your-business" style={{
            display: 'inline-block', background: '#c8a84b', color: '#1a3a1c',
            padding: '18px 48px', borderRadius: '6px', fontFamily: 'Montserrat,sans-serif',
            fontWeight: 700, fontSize: '16px', letterSpacing: '1px',
            textTransform: 'uppercase', textDecoration: 'none',
          }}>Schedule Free Consultation</Link>
        </div>
      </section>
    </main>
  );
}
