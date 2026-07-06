"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-[#f0f0f0] w-full relative pt-16 flex flex-col items-center overflow-hidden">
      {/* Faint Background Text */}
      <div className="w-full flex justify-center translate-y-8 md:translate-y-16 lg:translate-y-24 px-4">
        <h2 
          className="font-black text-black/5 leading-none select-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: 'clamp(3rem, 12vw, 12rem)' }}
        >
          Let&apos;s Connect
        </h2>
      </div>

      {/* Black Container */}
      <div className="bg-black rounded-t-[2.5rem] md:rounded-t-[4rem] w-full relative z-10 pt-16 md:pt-24 lg:pt-32 pb-0 flex flex-col border-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-32 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Ready to build<br />
              something<br />
              that pays?
            </h2>
            <p className="text-[#a1a1aa] text-sm md:text-base font-medium">
              Tell us about your software requirements.
            </p>
          </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-center w-full max-w-lg mx-auto md:ml-auto">
          <form className="flex flex-col gap-10">
            {/* Name Field */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-bold text-white uppercase tracking-[0.15em]">
                Your Name
              </label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="bg-transparent border-b border-gray-800 pb-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-[#a855f7] transition-colors"
              />
            </div>
            
            {/* Email Field */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-bold text-white uppercase tracking-[0.15em]">
                Your Email
              </label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-b border-gray-800 pb-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-[#a855f7] transition-colors"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-bold text-white uppercase tracking-[0.15em]">
                Describe Your Bottleneck / Goals
              </label>
              <input 
                type="text" 
                placeholder="Type here..." 
                className="bg-transparent border-b border-gray-800 pb-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-[#a855f7] transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="button" 
              className="mt-6 flex items-center justify-center gap-2 w-full py-5 rounded-full border border-[#3b0764] bg-[#2e1065]/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#3b0764]/60 transition-colors"
            >
              Send Now! <ArrowUpRight className="w-3 h-3 text-[#a855f7]" />
            </button>
          </form>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="w-full border-t border-b border-gray-900/60 bg-black overflow-hidden py-5 flex whitespace-nowrap">
        <motion.div 
          className="flex gap-10 items-center shrink-0 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {/* Group 1 */}
          <div className="flex gap-10 items-center shrink-0">
             {Array.from({ length: 10 }).map((_, i) => (
              <div key={`a-${i}`} className="flex items-center gap-10">
                <span className="text-gray-300 font-extrabold text-[13px] tracking-widest">contact@profitagentz.com</span>
                <span className="text-[#a855f7] font-black text-sm">x</span>
              </div>
            ))}
          </div>
          {/* Group 2 (Duplicate for seamless loop) */}
          <div className="flex gap-10 items-center shrink-0">
             {Array.from({ length: 10 }).map((_, i) => (
              <div key={`b-${i}`} className="flex items-center gap-10">
                <span className="text-gray-300 font-extrabold text-[13px] tracking-widest">contact@profitagentz.com</span>
                <span className="text-[#a855f7] font-black text-sm">x</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
