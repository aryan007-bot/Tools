"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "", goal: "" });

  return (
    <section className="bg-white pt-24 pb-32 flex flex-col items-center overflow-hidden relative">
      
      {/* Background Marquee Text */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-5 pointer-events-none flex flex-col justify-center select-none" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
           <div key={i} className="whitespace-nowrap font-bold text-4xl mb-4">
             {Array.from({ length: 10 }).map((_, j) => (
                <span key={j} className="mr-8">contact@profitagentz.com x</span>
             ))}
           </div>
        ))}
      </div>

      {/* Text Header */}
      <div className="text-center px-6 mb-12 relative z-10 max-w-[600px] mx-auto">
        <h2 className="text-[2.25rem] md:text-[2.75rem] font-serif text-[#1F2937] leading-[1.2] mb-4">
          Ready to build <br className="hidden md:block" /> something that pays?
        </h2>
        <p className="text-[#6B7280] text-sm md:text-[15px] leading-relaxed mb-8">
          Tell us about your software requirements.
        </p>
      </div>

      {/* Form Cluster */}
      <div className="relative w-full max-w-[700px] mx-auto overflow-visible flex justify-center z-10">
        
        {/* Decorative elements behind form */}
        <div className="absolute -left-12 -top-12 w-32 h-32 bg-[#FF99E6] rounded-full blur-2xl opacity-40 z-0" />
        <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-[#4ADE80] rounded-full blur-2xl opacity-30 z-0" />
        <div className="absolute right-10 -top-8 w-16 h-16 bg-[#8B5CF6] rounded-xl rotate-12 z-0" />
        <div className="absolute left-10 -bottom-6 w-20 h-20 bg-[#FBBF24] rounded-full z-0" />

        {/* The Contact Form */}
        <div className="relative bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8 w-full z-20">
           <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-5">
                 <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#111827] focus:border-transparent outline-none transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                 </div>
                 <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#111827] focus:border-transparent outline-none transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                 </div>
              </div>
              <div>
                 <label className="block text-sm font-semibold text-gray-700 mb-1.5">Describe Your Bottleneck / Goals</label>
                 <textarea 
                   placeholder="Type here..." 
                   rows={4}
                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#111827] focus:border-transparent outline-none transition-all resize-none"
                   value={formData.goal}
                   onChange={e => setFormData({...formData, goal: e.target.value})}
                 ></textarea>
              </div>
              <button 
                className="w-full mt-2 py-4 bg-[#111827] text-white rounded-lg font-semibold hover:bg-black transition-all shadow-lg shadow-gray-900/20"
              >
                Send Now!
              </button>
           </form>
        </div>

        {/* Decorative Scribbles */}
        <svg className="absolute -left-16 top-1/2 w-16 h-16 overflow-visible z-30" viewBox="0 0 50 50">
           <path d="M 0 50 C 10 -10, 40 40, 50 0" fill="none" stroke="#111827" strokeWidth="3" />
        </svg>
        <svg className="absolute -right-8 -top-8 w-16 h-16 overflow-visible z-30" viewBox="0 0 50 50">
           <path d="M 0 30 L 15 10 L 30 40 L 45 0" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="absolute -right-16 bottom-0 w-12 h-12 overflow-visible z-30" viewBox="0 0 50 50">
           <path d="M 25 25 C 20 20, 10 30, 20 40 C 35 45, 45 30, 35 15 C 20 -5, -5 20, 10 45" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        
      </div>
    </section>
  );
}
