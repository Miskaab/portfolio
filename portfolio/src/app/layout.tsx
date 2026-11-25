import type { Metadata } from "next";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Miska Kirri — Portfolio",
  description: "Miska Kirrin ohjelmistokehitysportfolio ja projektit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}