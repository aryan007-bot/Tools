"use client";

import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <Section className="py-32">
      <div className="relative rounded-3xl overflow-hidden bg-primary/5 border border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 pointer-events-none" />
        
        <div className="relative z-10 px-6 py-20 md:py-32 text-center max-w-3xl mx-auto">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              See how Kira 2.0 works
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              If you're evaluating AI for real, long-term instructional impact, not experiments, this is where to start.
            </p>
          </Reveal>
          
          <Reveal direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto">
                Preview Kira 2.0
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto bg-background">
                Book a demo
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
