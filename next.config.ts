import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plain-apac-prod-public.komododecks.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
