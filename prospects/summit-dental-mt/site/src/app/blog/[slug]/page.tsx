import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARTICLES, getArticleBySlug, getRelatedArticles } from '../articles';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://summitdentalmt.com';

export function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug);

  const dateFormatted = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorTitle,
      worksFor: {
        '@type': 'Dentist',
        name: 'Summit Dental Group',
        url: SITE_URL,
      },
    },
    publisher: {
      '@type': 'Dentist',
      name: 'Summit Dental Group',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`,
    },
    url: `${SITE_URL}/blog/${article.slug}`,
    inLanguage: 'en-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <SiteNav activePath="/blog" alwaysScrolled />

      <main>
        {/* Article Hero */}
        <div className="page-hero" style={{ paddingBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span style={{
              background: 'var(--color-accent)',
              color: '#fff',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '4px 12px',
              borderRadius: '100px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}>{article.category}</span>
            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>
              {article.readTime} min read
            </span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>{dateFormatted}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', maxWidth: '820px', margin: '0 auto 20px' }}>
            {article.title}
          </h1>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '100px',
            padding: '8px 16px',
          }}>
            <span style={{ color: 'var(--color-accent)', fontSize: '1rem' }}>★</span>
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
              {article.author}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>·</span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>
              {article.authorTitle}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <section className="section">
          <div className="container" style={{ maxWidth: '760px' }}>
            {article.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                {section.heading && (
                  <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--color-text)' }}>
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((para, j) => (
                  <p key={j} style={{
                    color: 'var(--color-neutral-mid)',
                    lineHeight: 1.8,
                    marginBottom: '14px',
                    fontSize: '0.96rem',
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}

            {/* Mid-article CTA */}
            <div style={{
              margin: '40px 0',
              padding: '28px 32px',
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <p style={{ margin: '0 0 4px', fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
                  Questions? We answer the phone.
                </p>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>
                  Summit Dental Group · Kalispell, MT · (406) 752-4545
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-primary">Book Appointment</a>
                <a href="tel:+14067524545" className="btn btn-ghost-light" style={{ fontSize: '0.85rem' }}>
                  Call Us
                </a>
              </div>
            </div>

            {/* Author bio */}
            <div style={{
              padding: '24px 28px',
              background: 'var(--color-surface)',
              border: '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              gap: '18px',
              alignItems: 'flex-start',
              marginBottom: '48px',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'var(--color-primary)', color: 'var(--color-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontSize: '1.3rem',
              }}>★</div>
              <div>
                <p style={{ margin: '0 0 2px', fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-text)' }}>
                  {article.author}
                </p>
                <p style={{ margin: '0 0 8px', fontSize: '0.78rem', color: 'var(--color-neutral-mid)' }}>
                  {article.authorTitle}
                </p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-neutral-mid)', lineHeight: 1.6 }}>
                  Dr. Vanzant is a USAF veteran with three combat deployments and an active member of the
                  Montana Army National Guard. He founded Summit Dental Group in Kalispell, MT in 2018 and
                  holds a DMD from the University of Florida College of Dentistry.
                </p>
              </div>
            </div>

            {/* Breadcrumb back */}
            <div style={{ marginBottom: '16px' }}>
              <a href="/blog" style={{
                fontSize: '0.82rem', color: 'var(--color-accent)', fontWeight: 600,
                display: 'inline-flex', alignItems: 'center', gap: '6px',
              }}>
                ← Back to All Articles
              </a>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="section section--tinted">
            <div className="container">
              <span className="eyebrow">More From Summit Dental</span>
              <h2 style={{ marginBottom: '32px' }}>Related Articles</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                {related.map(rel => (
                  <a
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    style={{
                      display: 'flex', flexDirection: 'column',
                      background: 'var(--color-surface)',
                      border: '1.5px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '20px',
                      textDecoration: 'none',
                      gap: '10px',
                    }}
                  >
                    <span style={{
                      background: 'var(--color-accent)', color: '#fff',
                      fontSize: '0.68rem', fontWeight: 700,
                      padding: '2px 8px', borderRadius: '100px',
                      textTransform: 'uppercase', letterSpacing: '0.04em',
                      alignSelf: 'flex-start', whiteSpace: 'nowrap',
                    }}>{rel.category}</span>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.4 }}>
                      {rel.title}
                    </p>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-accent)', fontWeight: 600, marginTop: 'auto' }}>
                      Read Article →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Ready to Schedule an Appointment?</h2>
              <p>New patients welcome. TRICARE and most insurance accepted. Same-day emergency care available.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-primary">Book Appointment</a>
              <a href="tel:+14067524545" className="btn btn-white">Call (406) 752-4545</a>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
