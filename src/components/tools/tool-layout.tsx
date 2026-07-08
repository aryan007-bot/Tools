"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { CTA } from "@/components/homepage/cta";
import { Testimonials } from "@/components/homepage/testimonials";

interface ToolLayoutProps {
  children: ReactNode;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
}

export function ToolLayout({
  children,
  title,
  tagline,
  description,
  accentColor,
}: ToolLayoutProps) {
  return (
    <div className="bg-[#FAF9F5] min-h-screen font-sans flex flex-col pt-24 pb-12 overflow-hidden relative">
      {/* Background decorations matching landing page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20" 
          style={{ backgroundColor: accentColor }}
        />
        <div 
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10" 
          style={{ backgroundColor: accentColor }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 flex-grow">
        
        {/* Tool Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
              style={{ color: accentColor, backgroundColor: `${accentColor}10`, borderColor: `${accentColor}30` }}
            >
              {tagline}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1F2937] leading-tight mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B7280] text-base md:text-lg"
          >
            {description}
          </motion.p>
        </div>

        {/* Tool Content Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
          className="bg-white rounded-[32px] border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.02)] p-6 md:p-10 mb-24 min-h-[500px]"
        >
          {children}
        </motion.div>
      </div>

      <Testimonials />
      <CTA />
    </div>
  );
}
