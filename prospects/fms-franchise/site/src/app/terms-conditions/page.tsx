import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | FMS Franchise Marketing Systems',
  description: 'Terms and Conditions governing use of the Franchise Marketing Systems website and services.',
  robots: { index: false, follow: false },
};

export default function TermsConditionsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Terms &amp; Conditions</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)' }}>Last updated: January 2025</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '3rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>

            <p style={{ color: '#4a5568', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1rem' }}>
              Please read these Terms and Conditions carefully before using the Franchise Marketing Systems website. By accessing or using our site, you agree to be bound by these terms. If you do not agree with any part of the terms, please do not access the website.
            </p>

            {[
              {
                heading: '1. Acceptance of Terms',
                body: `By accessing this website, you confirm that you are at least 18 years of age, have read and understood these Terms and Conditions, and agree to be bound by them. Franchise Marketing Systems, Inc. ("FMS") reserves the right to modify these terms at any time without prior notice. Your continued use of the site following any changes constitutes your acceptance of the modified terms.`,
              },
              {
                heading: '2. Use of the Website',
                body: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You may not use this site to transmit any material that is unlawful, harmful, threatening, defamatory, or otherwise objectionable. You may not attempt to gain unauthorized access to any portion of the site or any other systems connected to the site.`,
              },
              {
                heading: '3. Intellectual Property',
                body: `All content on this website, including text, graphics, logos, images, and software, is the property of FMS or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this site without written permission from FMS.`,
              },
              {
                heading: '4. Disclaimer of Warranties',
                body: `This website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. FMS does not warrant that the site will be uninterrupted or error-free, that defects will be corrected, or that the site or the server that makes it available are free of viruses or other harmful components. FMS makes no warranties about the accuracy, reliability, completeness, or timeliness of the content.`,
              },
              {
                heading: '5. Limitation of Liability',
                body: `To the fullest extent permitted by law, FMS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of or inability to use the website or services, even if FMS has been advised of the possibility of such damages.`,
              },
              {
                heading: '6. Franchise Information Disclaimer',
                body: `Information provided on this website about franchising, franchise development costs, and potential returns is for general educational purposes only and does not constitute legal, financial, or business advice. The decision to franchise a business involves significant legal and financial complexity. We strongly recommend consulting with qualified legal counsel and financial advisors before entering any franchise agreement. Past results do not guarantee future outcomes.`,
              },
              {
                heading: '7. Third-Party Links',
                body: `Our website may contain links to third-party websites or services that are not owned or controlled by FMS. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. We reserve the right to terminate any links to or from this website at any time.`,
              },
              {
                heading: '8. Governing Law',
                body: `These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Fulton County, Georgia.`,
              },
              {
                heading: '9. Contact Information',
                body: `If you have any questions about these Terms and Conditions, please contact us at: Franchise Marketing Systems, Inc., 6110 McFarland Station Dr, Unit 105, Alpharetta, GA 30004. Phone: 800-610-0292. Email: info@FranchiseMarketingSystems.com`,
              },
            ].map((section, i, arr) => (
              <div key={i} style={{ marginBottom: i < arr.length - 1 ? '2rem' : 0 }}>
                <h2 style={{ fontSize: '1.15rem', color: '#2d4135', marginBottom: '0.75rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  {section.heading}
                </h2>
                <p style={{ color: '#4a5568', lineHeight: 1.85, margin: 0, fontSize: '0.95rem' }}>
                  {section.body}
                </p>
                {i < arr.length - 1 && <div className="divider" style={{ marginTop: '1.5rem' }} />}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/" className="btn btn-green">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
