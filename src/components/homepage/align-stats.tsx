"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useCountUp, useReducedMotion } from "../animations/motion-config";

interface StatItemProps {
  label: string;
  desc: string;
  delay: number;
}

function StatItem({ label, desc, delay }: StatItemProps) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Parse label to get numeric target, prefix, and suffix
  const numMatch = label.match(/\d+/);
  const targetNum = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = label.replace(/\d+/, "");

  const { value, start } = useCountUp(targetNum, 1800);

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return (
    <motion.div
      ref={containerRef}
      onViewportEnter={() => setInView(true)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center text-center px-4 pt-6 md:pt-0 relative group"
    >
      <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2 font-sans tracking-tight flex items-baseline">
        {reduced ? (
          label
        ) : (
          <>
            <span>{value}</span>
            {suffix && <span className="text-3xl md:text-4xl text-blue-600 font-bold ml-0.5">{suffix}</span>}
          </>
        )}
      </div>
      <div className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider transition-colors duration-300 group-hover:text-gray-900">
        {statIcon(desc)} {desc}
      </div>
    </motion.div>
  );
}

// Return emoji or visual icon prefix for each stat item
function statIcon(desc: string) {
  if (desc.includes("saved")) return "⏱️";
  if (desc.includes("Faster")) return "⚡";
  if (desc.includes("Complex")) return "🛡️";
  if (desc.includes("SLA")) return "☁️";
  return "📈";
}

export function AlignStats() {
  const stats = [
    { label: "75%", desc: "Manual work saved" },
    { label: "10x", desc: "Faster workflows" },
    { label: "0", desc: "Complex setups required" },
    { label: "100%", desc: "Dedicated cloud SLA" },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-16 relative overflow-hidden">
      {/* Decorative background horizontal rule that draws itself in */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-center"
      />
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 relative">
          {stats.map((stat, i) => (
            <div key={i} className="relative">
              <StatItem 
                label={stat.label} 
                desc={stat.desc} 
                delay={i * 0.1} 
              />
              {/* Vertical divider drawing in on desktop */}
              {i < stats.length - 1 && (
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gray-200/60 origin-center"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
