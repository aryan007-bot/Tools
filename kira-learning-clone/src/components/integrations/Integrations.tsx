"use client";

import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { motion } from "framer-motion";

const integrations = [
  "Canvas", "Blackboard", "Google Classroom", "Moodle", "Schoology", "Clever", "ClassLink", "Microsoft Teams"
];

export function Integrations() {
  return (
    <Section className="bg-muted/30 py-24 border-y border-border overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Reveal direction="up" delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Works with what you already use
          </h2>
          <p className="text-muted-foreground">
            Kira operates alongside existing LMSs, curriculum, and district infrastructure today, and can absorb more of the stack over time.
          </p>
        </Reveal>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        <motion.div 
          className="flex whitespace-nowrap gap-12 px-6 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Duplicate list for seamless looping */}
          {[...integrations, ...integrations, ...integrations].map((item, idx) => (
            <div key={idx} className="flex-none">
              <span className="text-2xl font-bold text-muted-foreground/40">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
