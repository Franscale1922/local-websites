import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | FMS Franchise Marketing Systems',
  description: 'Privacy Policy for Franchise Marketing Systems (FMS). Learn how we collect, use, and protect your personal information.',
  robots: { index: false, follow: false }, // Legal pages typically noindexed
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Privacy Policy</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Legal</span>
          <h1>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)' }}>Last updated: January 2025</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '3rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>

            <p style={{ color: '#4a5568', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1rem' }}>
              Franchise Marketing Systems, Inc. ("FMS," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            {[
              {
                heading: '1. Information We Collect',
                body: `We may collect information about you in a variety of ways. The information we may collect includes: (a) Personal Data — personally identifiable information, such as your name, email address, telephone number, and business information, that you voluntarily give to us when you submit a contact form, request a consultation, or otherwise interact with our site; (b) Usage Data — information our servers automatically collect when you access our site, such as your IP address, browser type, operating system, referring URLs, and pages viewed; (c) Cookies and Tracking Data — we use cookies and similar tracking technologies to track activity on our site and hold certain information.`,
              },
              {
                heading: '2. How We Use Your Information',
                body: `We use the information we collect to: respond to your inquiries and fulfill your requests; send you marketing communications if you have opted in; improve our website and services; analyze usage patterns and optimize user experience; comply with legal obligations; and protect the rights and safety of FMS and our users. We do not sell, trade, or rent your personal information to third parties.`,
              },
              {
                heading: '3. Sharing Your Information',
                body: `We may share your information with third-party service providers who assist us in operating our website and conducting our business (such as email platforms and CRM providers), subject to confidentiality agreements. We may also disclose your information if required by law, in response to valid requests by public authorities, or to protect the rights, property, or safety of FMS, our clients, or others.`,
              },
              {
                heading: '4. Cookies',
                body: `Our website uses cookies to enhance your experience. Cookies are small data files stored on your device. You can set your browser to refuse cookies or alert you when cookies are being sent. If you do this, some parts of our site may not function properly. We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until you delete them or they expire).`,
              },
              {
                heading: '5. Data Retention',
                body: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.`,
              },
              {
                heading: '6. Your Rights',
                body: `Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal data; the right to object to or restrict certain processing; and the right to data portability. To exercise these rights, please contact us using the information below. We will respond to your request within 30 days.`,
              },
              {
                heading: '7. Third-Party Links',
                body: `Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.`,
              },
              {
                heading: '8. Children\'s Privacy',
                body: `Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to remove that information.`,
              },
              {
                heading: '9. Changes to This Policy',
                body: `We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.`,
              },
              {
                heading: '10. Contact Us',
                body: `If you have questions or concerns about this Privacy Policy, please contact us at: Franchise Marketing Systems, Inc., 6110 McFarland Station Dr, Unit 105, Alpharetta, GA 30004. Phone: 800-610-0292. Email: info@FranchiseMarketingSystems.com`,
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
