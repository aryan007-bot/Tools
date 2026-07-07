import { Hero } from "@/components/homepage/hero";
import { Ecosystem } from "@/components/homepage/ecosystem";
import { Workflow } from "@/components/homepage/workflow";
import { Integrations } from "@/components/homepage/integrations";

import { CTA } from "@/components/homepage/cta";
import { Testimonials } from "@/components/homepage/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <Workflow />
      <Integrations />
      <Testimonials />
      <CTA />
    </>
  );
}
