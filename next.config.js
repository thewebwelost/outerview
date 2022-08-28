/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['tailwindui.com', 'images.unsplash.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
