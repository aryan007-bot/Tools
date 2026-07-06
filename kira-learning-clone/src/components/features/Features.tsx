"use client";

import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import Image from "next/image";

const alternatingFeatures = [
  {
    title: "Coherent instruction, not fragmented workflows",
    description: "Kira connects planning, teaching, assessment, and insight into one continuous loop, eliminating handoffs between tools and teams.",
    image: "https://framerusercontent.com/images/exwfIuWfvaWmcrvJ8FuR3eo2L7A.png",
    reversed: false,
  },
  {
    title: "Real-time visibility into learning",
    description: "Student work becomes evidence immediately. Mastery updates continuously, not after benchmark season.",
    image: "https://framerusercontent.com/images/exwfIuWfvaWmcrvJ8FuR3eo2L7A.png",
    reversed: true,
  },
  {
    title: "Built-in differentiation at scale",
    description: "Instruction adapts for diverse learners, IEPs, ELLs, interventions, without requiring teachers to recreate materials or manage parallel systems.",
    image: "https://framerusercontent.com/images/exwfIuWfvaWmcrvJ8FuR3eo2L7A.png",
    reversed: false,
  },
  {
    title: "Fewer tools, lower operational overhead",
    description: "Districts reduce redundant subscriptions while gaining a single source of truth for instruction and learning.",
    image: "https://framerusercontent.com/images/exwfIuWfvaWmcrvJ8FuR3eo2L7A.png",
    reversed: true,
  }
];

const gridFeatures = [
  {
    title: "Curriculum and course creation",
    description: "Generate full, standards-aligned courses for any subject or grade-level in minutes. Go beyond lesson drafts and create lessons that are ready to run."
  },
  {
    title: "Assessment and mastery",
    description: "Every student response updates a living mastery model that drives grading, feedback, and what happens next."
  },
  {
    title: "Intervention and MTSS",
    description: "Identify gaps instantly and automate targeted support inside instruction before students fall behind."
  },
  {
    title: "Multilingual and special populations",
    description: "Deliver rigorous instruction that adapts to each learner's language proficiency and unique needs, without lowering expectations."
  },
  {
    title: "Career and workforce pathways",
    description: "Open doors to modern CTE and AI pathways that prepare students for the world they're actually entering."
  },
  {
    title: "Flexible and alternative learning models",
    description: "Keep learning moving forward across virtual programs, credit recovery, and staffing gaps, so students never lose momentum."
  }
];

const complianceFeatures = [
  "Teachers review and control all instructional content",
  "Rubrics, logic, and adaptations are visible and explainable",
  "Student data remains under district control",
  "Designed to meet FERPA and COPPA requirements by default"
];

export function Features() {
  return (
    <>
      {/* Section 1: Alternating Layouts */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Kira replaces fragmentation with a single learning system.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-32">
          {alternatingFeatures.map((feature, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${feature.reversed ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <Reveal direction={feature.reversed ? "right" : "left"} delay={0.1}>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold">{feature.title}</h3>
                </Reveal>
                <Reveal direction={feature.reversed ? "right" : "left"} delay={0.2}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Reveal>
              </div>

              <div className="flex-1 w-full relative">
                <Reveal direction={feature.reversed ? "left" : "right"} delay={0.3} width="100%">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay" />
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 2: Grid Layout */}
      <Section className="bg-muted/10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              One system for every instructional reality
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kira adapts to how schools actually operate, all without the need for separate tools, products, or workflows.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridFeatures.map((feature, idx) => (
            <Reveal key={idx} direction="up" delay={0.1 * (idx % 3)} className="h-full">
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border h-full hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Section 3: Compliance */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Built for schools. Compliant by design.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl text-muted-foreground">
              Security and privacy you can trust
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {complianceFeatures.map((feature, idx) => (
            <Reveal key={idx} direction="up" delay={0.1 * idx}>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <p className="text-sm md:text-base font-medium">{feature}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
