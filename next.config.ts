import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  source: '/:path*',
        destination: '/404',
        permanent: false,
};

export default nextConfig;
