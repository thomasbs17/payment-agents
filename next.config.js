/** @type {import('next').NextConfig} */
const nextConfig = {
    // Required for static exports (replaces 'next export')
    output: 'export',
  
    // Optional: Configure output directory (default: 'out')
    distDir: 'out',
  
    // Required if using dynamic routes/SSG with App Router
    experimental: {
      appDir: true,
    },
  
    // Optional: Handle SPA routing (prevents 404s on page refresh)
    trailingSlash: true,
  
    // Required for static image exports
    images: {
      unoptimized: true,
    },
  
    // Optional: Enable React strict mode
    reactStrictMode: true,
  
    // Optional: Add asset prefix for CDN (CloudFront URL)
    // assetPrefix: process.env.NODE_ENV === 'production' 
    //   ? 'https://your-cloudfront-id.cloudfront.net' 
    //   : undefined,
  }
  
  module.exports = nextConfig