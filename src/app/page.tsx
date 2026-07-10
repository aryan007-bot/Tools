import { AlignHero } from "@/components/homepage/align-hero";
import { AlignStats } from "@/components/homepage/align-stats";
import { AlignFeatures } from "@/components/homepage/align-features";
import { AlignShowcase } from "@/components/homepage/align-showcase";
import { AlignAccordion } from "@/components/homepage/align-accordion";
import { AlignCTA } from "@/components/homepage/align-cta";

export default function Home() {
  return (
    <div className="bg-[#fafafa]">
      <AlignHero />
      <AlignStats />
      <AlignFeatures />
      <AlignShowcase />
      <AlignAccordion />
      <AlignCTA />
    </div>
  );
}
