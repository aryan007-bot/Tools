import type { Metadata } from "next";
import { Inter, Jost, Lora } from "next/font/google";
import { LenisProvider } from "@/providers/lenis-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Kira",
  description: "Kira is the first AI platform that delivers personalized education at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jost.variable} ${lora.variable} antialiased bg-background text-foreground`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
