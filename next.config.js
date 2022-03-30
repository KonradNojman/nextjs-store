/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: [
      "fakestoreapi.com",
      "naszsklep-api.vercel.app",
      "media.graphcms.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/products/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
