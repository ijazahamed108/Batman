import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "udemy-certificate.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.microlink.io",
      },
      {
        protocol: "https",
        hostname: "microlink.io",
      },
      {
        protocol: "https",
        hostname: "iad.microlink.io",
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        pathname: "/coursera_assets/**",
      },
      {
        protocol: "https",
        hostname: "d3njjcbhbojbot.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "*.coursera.org",
      },
      {
        protocol: "https",
        hostname: "www.coursera.org",
      },
      {
        protocol: "https",
        hostname: "coursera-course-photos.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
