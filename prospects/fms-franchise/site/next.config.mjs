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
      // Route aliases — redirect legacy/alternate URLs to canonical destinations
      { source: '/industries/home-based-franchises', destination: '/industries/home-based', permanent: true },
      { source: '/learn/faqs', destination: '/learn/faq', permanent: true },
      { source: '/learn/industry-facts', destination: '/learn/franchise-industry-facts', permanent: true },
      { source: '/learn/why-franchising', destination: '/learn/why-franchise', permanent: true },
      { source: '/learn/resources/state-guidelines', destination: '/learn/state-guidelines', permanent: true },
      { source: '/learn/resources/franchising-guidelines', destination: '/learn/resources', permanent: true },
      { source: '/about-us/blog', destination: '/blog', permanent: true },
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/services/marketing-your-franchise', destination: '/services', permanent: true },
      { source: '/services/franchise-business-plans', destination: '/services/franchise-business-plan', permanent: true },
    ];
  },
};
export default nextConfig;

