/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
