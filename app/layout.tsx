import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "闵徐舜杰 | Creative Product Architect",
  description: "Portfolio of Minxu Shunjie - Blending Tech & Creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="scroll-smooth dark">
      <body className={cn(inter.variable, jetbrains.variable, "bg-background text-white antialiased")}>
        <div className="colorful-bg">
          <div className="colorful-blob blob-1" />
          <div className="colorful-blob blob-2" />
          <div className="colorful-blob blob-3" />
        </div>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
