/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.mobalytics.gg",
        port: "",
        pathname: "/assets/lol/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
