// NEXT.CONFIG.JS

// Must add the hostname of the URL to the "images.domains" config
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  }
};

module.exports = nextConfig;