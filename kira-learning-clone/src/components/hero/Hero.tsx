"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";

export function Hero() {
  return (
    <Section className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex items-center justify-center min-h-[80vh] bg-transparent">
      
      <div className="text-center max-w-5xl mx-auto px-4 z-10 mt-12">
        <Reveal direction="up" delay={0.2} width="100%">
          <h1 className="text-6xl md:text-8xl font-serif text-foreground tracking-tight mb-8 leading-[1.1]">
            The <span className="bg-[#AFA5FF] px-3 py-1 inline-block -rotate-1 text-foreground shadow-sm">AI</span> operating <br className="hidden md:block" />
            system for <span className="bg-[#5CECA6] px-4 py-1 rounded-2xl inline-block text-foreground shadow-sm">education</span>
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.3} width="100%">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Kira runs instruction, assessment, and intervention as one connected<br className="hidden md:block"/>
            system, replacing the tool sprawl that keeps educators from focusing on<br className="hidden md:block"/>
            what actually works.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.4} width="100%">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-sm px-8 h-12 text-base w-full sm:w-auto bg-primary text-primary-foreground font-semibold shadow-none">
              Preview Kira 2.0
            </Button>
            <Button size="lg" variant="outline" className="rounded-sm px-8 h-12 text-base w-full sm:w-auto bg-transparent border-border text-foreground font-semibold shadow-none hover:bg-muted">
              Book a demo
            </Button>
          </div>
        </Reveal>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </Section>
  );
}
