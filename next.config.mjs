/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    // Disable image optimization for Cloudflare Pages
    // Cloudflare Pages doesn't support Next.js image optimization
    unoptimized: true,
  },
};

// Setup for Cloudflare Pages development
if (process.env.NODE_ENV === 'development') {
  const { setupDevPlatform } = await import('@cloudflare/next-on-pages/next-dev');
  await setupDevPlatform();
}

export default nextConfig;

