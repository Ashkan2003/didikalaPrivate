import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  source: '/:path*',
        destination: '',
        permanent: false,
};

export default nextConfig;
