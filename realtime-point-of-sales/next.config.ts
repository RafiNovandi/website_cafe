import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: [
      "https://hmeqctfnhnnaggnijbjg.storage.supabase.co",
      "https://hmeqctfnhnnaggnijbjg.supabase.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hmeqctfnhnnaggnijbjg.storage.supabase.co",
        port: "",
        pathname: "/**",
      },
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
