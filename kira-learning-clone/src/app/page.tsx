import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/problem/Problem";
import { Features } from "@/components/features/Features";
import { Integrations } from "@/components/integrations/Integrations";
import { CTA } from "@/components/cta/CTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <Hero />
        <Problem />
        <Features />
        <Integrations />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
