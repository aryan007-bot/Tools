import { Hero } from "@/components/homepage/hero";
import { Ecosystem } from "@/components/homepage/ecosystem";
import { Workflow } from "@/components/homepage/workflow";
import { Testimonials } from "@/components/homepage/testimonials";
import { CTA } from "@/components/homepage/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <Workflow />
      <Testimonials />
      <CTA />
    </>
  );
}
