import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/cumbre-bachilleres",
  assetPrefix: "/cumbre-bachilleres/",

  images: {
    unoptimized: true,
  },

  output: "export",

  trailingSlash: true,
};

export default withNextVideo(nextConfig);
