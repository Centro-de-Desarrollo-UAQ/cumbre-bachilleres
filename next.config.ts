import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/cumbre-bachilleres",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "/cumbre-bachilleres/",

  images: {
    unoptimized: true,
  },

  output: "export",

  trailingSlash: true,
};

export default withNextVideo(nextConfig);
