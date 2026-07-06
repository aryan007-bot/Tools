"use client";

import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";

export function Problem() {
  return (
    <Section className="bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Schools do not need more AI tools. They need a system.
          </h2>
        </Reveal>
        
        <Reveal direction="up" delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Today, education runs on disconnected software. One tool plans lessons. Another grades. Another tracks interventions. Teachers do the integration manually, and leaders only see results at the end. That's not a system. It's a workaround. Kira replaces the workaround. Standards become the backbone. Student work becomes the signal. AI becomes the thing that finally makes them talk to each other.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
