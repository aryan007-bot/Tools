import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ToolStack — Five Powerful Business Tools. One Platform.",
  description:
    "A premium multi-tool SaaS platform featuring Voice to Excel, Test Generator, Video Editor, Fee Collection, and Email Assistant.",
  keywords: [
    "SaaS",
    "business tools",
    "voice to excel",
    "test generator",
    "video editor",
    "fee collection",
    "email assistant",
  ],
  openGraph: {
    title: "ToolStack — Five Powerful Business Tools. One Platform.",
    description:
      "A premium multi-tool SaaS platform featuring Voice to Excel, Test Generator, Video Editor, Fee Collection, and Email Assistant.",
    type: "website",
  },
};

import { AuthProvider } from "@/hooks/use-auth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <AuthProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
