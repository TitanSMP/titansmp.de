import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
  },
  async redirects() {
    return [
      {
        source: "/legal/imprint",
        destination: "https://henrymeyer.de/legal/imprint",
        permanent: true,
      },
      {
        source: "/legal/privacy",
        destination: "https://henrymeyer.de/legal/privacy",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
