import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://hmeqctfnhnnaggnijbjg.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hmeqctfnhnnaggnijbjg.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
