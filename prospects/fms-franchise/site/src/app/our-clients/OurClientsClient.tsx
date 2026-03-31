'use client';

import Link from 'next/link';

const clients = [
  "Stella's Ice Cream","Chaiiwala of London","Oggi's Brewhouse",
  "Impresa Modular Home Building","Kelly's Ice Cream","Spartan Floor Coatings",
  "Culver's","Mr. Jim's Pizza","Poke House","Royal Pet Bakery and Grooming",
  "ActionCOACH","Soccer Post","MF Gyros","Bagel Hole","Green Home Solutions",
  "Anytime Fitness","Baxter Healthcare","Blimpie","Hungry Howie's Pizza",
  "Restoration 1","Smash My Trash","Two Men and a Truck",
  "Clean Air Lawn Care","Safe Splash Swim School","Quaker Steak & Lube",
  "Homewatch CareGivers","Schooley Mitchell","Tippi Toes Dance","Budget Blinds",
  "Marco's Pizza","Mad Science Group","European Wax Center","911 Restoration",
  "Smashburger","Jimmy John's","Visiting Angels","Tropical Smoothie Cafe",
  "Dogtopia","Sola Salon Studios","Pure Barre","Camp Bow Wow",
  "Orangetheory Fitness","GYMGUYZ","ComForCare","Right at Home",
  "Kumon","Mathnasium","Sylvan Learning","Goddard School",
  "The Learning Experience","Kiddie Academy",
];

export default function OurClientsClient() {
  return (
    <main>
      <section style={{
        background:'linear-gradient(135deg,#2c4a2e,#1a3a1c)',
        color:'#fff',padding:'80px 0 60px',textAlign:'center',
      }}>
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'0 24px'}}>
          <p style={{fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:'13px',
            letterSpacing:'2px',textTransform:'uppercase',color:'#c8a84b',marginBottom:'16px'}}>
            FRANCHISE SUCCESS STORIES
          </p>
          <h1 style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,
            fontSize:'clamp(28px,5vw,52px)',lineHeight:1.15,marginBottom:'24px'}}>
            Discover Our Clients and Their Franchise Success Stories
          </h1>
          <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:'19px',lineHeight:1.7,
            color:'rgba(255,255,255,0.85)',maxWidth:'700px',margin:'0 auto'}}>
            Helping over 700 businesses thrive in the franchise industry across every sector.
          </p>
        </div>
      </section>

      <section style={{background:'#f8f8f6',borderBottom:'1px solid #e8e8e8',padding:'20px 0'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px',display:'flex',gap:'32px'}}>
          {[['Our Clients','/our-clients',true],['Case Studies','/case-studies',false],
            ['Testimonials','/our-clients/testimonials',false]].map(([label,href,active])=>(
            <Link key={label as string} href={href as string} style={{
              fontFamily:'Montserrat,sans-serif',fontWeight:active?700:600,fontSize:'14px',
              color:active?'#2c4a2e':'#555',textDecoration:'none',
              borderBottom:active?'2px solid #c8a84b':'none',paddingBottom:'2px',
            }}>{label}</Link>
          ))}
        </div>
      </section>

      <section style={{padding:'72px 0',background:'#fff'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px'}}>
          <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:'17px',color:'#555',
            lineHeight:1.7,maxWidth:'900px',marginBottom:'48px'}}>
            Franchise Marketing Systems has taken over 700 businesses and helped them grow through franchising, 
            with a dedicated focus on helping emerging and established franchise brands develop and expand. 
            We work with clients in all industries — Service, Retail, Food Service, and Product Distribution.
          </p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'16px'}}>
            {clients.map((client,i)=>(
              <div key={i} style={{
                background:'#f8f8f6',border:'1px solid #e8e8e8',borderRadius:'8px',
                padding:'18px 20px',display:'flex',alignItems:'center',gap:'12px',
                transition:'background 0.2s,border-color 0.2s',
              }}
                onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.background='#f0f7f1';
                  (e.currentTarget as HTMLDivElement).style.borderColor='#4a7c59';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.background='#f8f8f6';
                  (e.currentTarget as HTMLDivElement).style.borderColor='#e8e8e8';}}
              >
                <div style={{width:'34px',height:'34px',background:'#2c4a2e',borderRadius:'6px',
                  flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',
                  color:'#c8a84b',fontFamily:'Montserrat,sans-serif',fontWeight:800,fontSize:'13px'}}>
                  {client.charAt(0)}
                </div>
                <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:'14px',fontWeight:600,color:'#333'}}>
                  {client}
                </span>
              </div>
            ))}
          </div>
          <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:'16px',color:'#888',
            textAlign:'center',marginTop:'40px',fontStyle:'italic'}}>
            And hundreds more across every industry sector
          </p>
        </div>
      </section>

      <section style={{background:'linear-gradient(135deg,#2c4a2e,#1a3a1c)',
        padding:'72px 0',color:'#fff',textAlign:'center'}}>
        <div style={{maxWidth:'700px',margin:'0 auto',padding:'0 24px'}}>
          <h2 style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,
            fontSize:'clamp(26px,3.5vw,40px)',marginBottom:'20px'}}>
            Start Your Franchise Today
          </h2>
          <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:'18px',
            color:'rgba(255,255,255,0.85)',marginBottom:'40px',lineHeight:1.7}}>
            FMS is a full-service franchise development company — the best franchise consulting firm in the US. {' '}
            <Link href="/about-us" style={{color:'#c8a84b'}}>Learn more</Link>
          </p>
          <Link href="/franchise-your-business" style={{
            display:'inline-block',background:'#c8a84b',color:'#1a3a1c',
            padding:'18px 48px',borderRadius:'6px',fontFamily:'Montserrat,sans-serif',
            fontWeight:700,fontSize:'16px',letterSpacing:'1px',
            textTransform:'uppercase',textDecoration:'none',
          }}>Get Started</Link>
        </div>
      </section>
    </main>
  );
}
