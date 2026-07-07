"use client";

import { motion } from "framer-motion";
import { Workflow } from "@/components/homepage/workflow";

export default function ToolsPage() {
  return (
    <div className="pt-20 bg-[#FAF9F5] min-h-screen">
      {/* Hero Section of Tools Page */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-[#FAF9F5] text-center flex flex-col items-center">
        {/* Background blurry blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-emerald-200/10 to-cyan-200/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 w-full z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B5CF6] bg-[#8B5CF6]/10 px-3.5 py-1.5 rounded-full">
              Explore Our Suite
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-gray-900 mb-6 max-w-3xl leading-[1.3]"
          >
            One system for <br />
            every{" "}
            <span className="relative inline-block mx-1">
              <svg className="absolute inset-0 w-full h-full text-[#A78BFA] scale-110" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                 <path d="M5,5 L95,2 L98,95 L2,98 Z" opacity="0.8" />
              </svg>
              <span className="relative z-10 px-2 text-[#1F2937]">business</span>
            </span>{" "}
            need
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-[#6B7280] max-w-[600px] mb-8 leading-[1.6]"
          >
            ToolStack runs your operations as one connected system, replacing the tool sprawl that keeps you from focusing on what actually works.
          </motion.p>
        </div>
      </section>

      {/* Workflow Section containing the Slider, without header & compliance */}
      <Workflow 
        showCompliance={false} 
        showHeader={false} 
        bgClass="bg-[#FAF9F5]" 
        cardBgClass="bg-white" 
      />
    </div>
  );
}
