"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "", goal: "" });

  return (
    <section className="bg-[#FAF9F5] pt-24 pb-32 flex flex-col items-center overflow-hidden relative">
      
      {/* Background Marquee Text */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-5 pointer-events-none flex flex-col justify-center select-none" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
           <div key={i} className="whitespace-nowrap font-bold text-4xl mb-4">
             {Array.from({ length: 10 }).map((_, j) => (
                <span key={j} className="mr-8">contact@toolstack.com x</span>
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

        {/* Decorative Tech Vectors */}
        <svg className="absolute -left-16 top-1/3 w-20 h-20 overflow-visible z-30 opacity-40 text-gray-500" viewBox="0 0 100 100" fill="none">
           <path d="M 0 50 L 50 50 L 70 30 L 100 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
           <path d="M 50 50 L 70 70 L 90 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
           <circle cx="100" cy="30" r="3" fill="currentColor" />
           <circle cx="90" cy="70" r="3" fill="currentColor" />
        </svg>
        <svg className="absolute -right-12 -top-12 w-24 h-24 overflow-visible z-30 opacity-40 text-gray-500" viewBox="0 0 100 100" fill="none">
           <rect x="10" y="10" width="80" height="80" rx="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
           <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1.5" />
           <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
        <svg className="absolute -right-16 bottom-4 w-20 h-20 overflow-visible z-30 opacity-40 text-gray-500" viewBox="0 0 100 100" fill="none">
           <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
           <circle cx="10" cy="10" r="2" fill="currentColor" />
           <circle cx="90" cy="10" r="2" fill="currentColor" />
           <circle cx="90" cy="90" r="2" fill="currentColor" />
           <circle cx="10" cy="90" r="2" fill="currentColor" />
           <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5" />
        </svg>
        
      </div>
    </section>
  );
}
