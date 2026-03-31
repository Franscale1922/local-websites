/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.fmsfranchise.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  async redirects() {
    return [
      // ── Structural slug aliases (WordPress → our canonical routes) ──
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/about-us/blog', destination: '/blog', permanent: true },
      { source: '/learn/faqs', destination: '/learn/faq', permanent: true },
      { source: '/learn/faqs/:path*', destination: '/learn/faq', permanent: true },
      { source: '/learn/industry-facts', destination: '/learn/franchise-industry-facts', permanent: true },
      { source: '/learn/why-franchising', destination: '/learn/why-franchise', permanent: true },
      { source: '/learn/resources/state-guidelines', destination: '/learn/state-guidelines', permanent: true },
      { source: '/learn/resources/franchising-guidelines', destination: '/learn/resources', permanent: true },

      // ── Slug corrections (now match live site canonical) ──
      // Live canonical = plural /franchise-business-plans — redirect singular → plural
      { source: '/services/franchise-business-plan', destination: '/services/franchise-business-plans', permanent: true },
      // home-based route is now renamed to home-based-franchises — no redirect needed
      // services/marketing-your-franchise now has its own page — no redirect needed

      // ── Blog category pages ──
      { source: '/category/:cat*', destination: '/blog', permanent: true },

      // ── WordPress utility / post-conversion pages ──
      { source: '/thank-you-consultation', destination: '/', permanent: true },
      { source: '/thank-you-how-franchise-ebook', destination: '/', permanent: true },
      { source: '/quiz-landing-page', destination: '/franchise-readiness-assessment', permanent: true },
      { source: '/reviews', destination: '/our-clients/testimonials', permanent: true },
      { source: '/cookie-policy', destination: '/privacy-policy', permanent: true },
      { source: '/sitemap', destination: '/site-map', permanent: true },
      { source: '/sba-franchise-financing', destination: '/learn/resources', permanent: true },
      { source: '/senior-care-authority', destination: '/industries/health-beauty', permanent: true },

      // ── Standalone franchise profile pages (root-level blog posts) ──
      { source: '/european-wax-center-franchise-system', destination: '/our-clients', permanent: true },
      { source: '/fords-garage-franchise-system', destination: '/our-clients', permanent: true },
      { source: '/jimmy-johns-franchise-system-a-sandwich-empires-journey', destination: '/blog', permanent: true },
      { source: '/the-patch-boys-franchise-system', destination: '/our-clients', permanent: true },
      { source: '/the-rosatis-pizza-franchise-system', destination: '/our-clients', permanent: true },
      { source: '/zambrero-franchise-system', destination: '/our-clients', permanent: true },

      // ── Catch-all: ALL other root-level WordPress blog post slugs → /blog ──
      // Matches any single-segment slug like /how-to-franchise-a-restaurant/
      // Only fires when NO real Next.js page route matches first (Next.js pages take priority)
      // Must be LAST in this list.
      { source: '/:slug([a-z0-9][a-z0-9-]*)', destination: '/blog', permanent: true },
    ];
  },
};
export default nextConfig;
