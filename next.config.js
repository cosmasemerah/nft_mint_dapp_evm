/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "4fabaf74f3234d87d0ffc0ffdd2956e0.ipfscdn.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
