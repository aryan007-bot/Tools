"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "../animations/magnetic-button";
import { useReducedMotion, transitions, wordRevealContainer, wordRevealChild } from "../animations/motion-config";

export function AlignCTA() {
  const reduced = useReducedMotion();
  const ctaWords = "Ready to reclaim your workflow time?".split(" ");

  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-28 text-center">
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none select-none z-0" />

      {/* Floating Animated Developer Utility Nodes */}
      <motion.div
        className="absolute top-[25%] left-[12%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ 
          y: reduced ? 0 : [0, -8, 0],
          rotate: reduced ? 0 : [0, 8, -8, 0]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none">
            🛠️
          </div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">DEV_UTILITY</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Utility_Core
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] right-[12%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ 
          y: reduced ? 0 : [0, -8, 0],
          rotate: reduced ? 0 : [0, -6, 6, 0]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 },
          rotate: { repeat: Infinity, duration: 9, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none">
            🔗
          </div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">API_GATEWAY</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Link_Gateway
              <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Dynamic colorful blobs */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#ffedcc]/40 blur-[120px] -z-10" />
      <div className="absolute bottom-10 right-1/4 w-60 h-60 rounded-full bg-[#cce5ff]/50 blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#2563EB] font-bold tracking-wider uppercase mb-4 text-xs md:text-sm"
        >
          Free to start. No credit card required.
        </motion.p>
        
        {/* Headline Word Stagger Reveal */}
        <motion.h2 
          variants={wordRevealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900 font-sans flex flex-wrap justify-center gap-x-[0.25em]"
        >
          {ctaWords.map((word, idx) => (
            <motion.span 
              key={idx} 
              variants={wordRevealChild}
              className={idx >= 3 ? "text-[#0c1a30] font-sans font-extrabold" : "text-gray-900 font-sans"}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-10 font-medium"
        >
          Join thousands of users building customized toolsets every day.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton strength={0.2} href="/signup">
            <motion.div
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg shadow-blue-500/20 text-base"
              whileTap={{ scale: 0.97 }}
            >
              Get Started 
              <ArrowUpRight className="w-4.5 h-4.5" />
            </motion.div>
          </MagneticButton>

          <MagneticButton strength={0.2} href="/tools">
            <motion.div
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-200 text-gray-900 font-semibold rounded-full transition-colors duration-300 hover:border-gray-900 text-base"
              whileTap={{ scale: 0.97 }}
            >
              Explore Tools
            </motion.div>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
