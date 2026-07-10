"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AlignCTA() {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-28 text-center">
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
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900 font-sans"
        >
          Ready to reclaim<br />
          <span className="text-gray-900 font-serif italic font-light tracking-normal">your workflow time?</span>
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
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href="/signup"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20 text-base"
          >
            Get Started 
            <ArrowUpRight className="w-4.5 h-4.5" />
          </Link>
          <Link 
            href="/tools"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-200 text-gray-900 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:border-gray-900 text-base"
          >
            Explore Tools
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
