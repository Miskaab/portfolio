import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Mahdollistaa julkaisun GitHub Pagesiin
  images: {
    unoptimized: true, // GitHub Pages ei tue Next.js:n palvelinpuolen kuvanoptimointia
  },
};

export default nextConfig;