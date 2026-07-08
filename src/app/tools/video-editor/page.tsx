"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getToolBySlug } from "@/lib/constants/tools";
import { CTA } from "@/components/homepage/cta";
import { Testimonials } from "@/components/homepage/testimonials";

export default function VideoEditorPage() {
  const tool = getToolBySlug("video-editor");
  const [isUploaded, setIsUploaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isExported, setIsExported] = useState(false);
  
  if (!tool) return null;

  const handleUpload = () => {
    setIsUploaded(true);
    setTimeout(() => {
      setIsEditing(true);
    }, 1000);
  };

  const handleExport = () => {
    setIsEditing(false);
    setIsExported(true);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen font-sans">
      
      {/* Tool Header */}
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-br from-pink-200/10 to-rose-200/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-[800px] mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-[#ef4444]/10 text-[#ef4444] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-[#ef4444]/20">
              {tool.tagline}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.5rem] md:text-[4rem] font-serif text-[#1F2937] leading-[1.1] mb-6"
          >
            {tool.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#6B7280] text-base md:text-lg max-w-[600px] leading-relaxed mb-12"
          >
            {tool.description}
          </motion.p>
          
          {/* Scribble Divider */}
          <div className="relative w-full max-w-[400px] h-20 flex justify-center items-center mb-4">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 40 C 40 10, 80 50, 120 30 C 160 10, 200 60, 240 30 C 280 0, 320 50, 400 20" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
            </svg>
            <div className="absolute right-1/4 -translate-y-2 text-3xl">🎬</div>
          </div>
        </div>
      </section>

      {/* Interactive Ecosystem-Style Workflow */}
      <section className="w-full flex flex-col items-center max-w-[1100px] mx-auto px-6 pb-32">
        
        {/* Step 1: Upload */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sticky top-[100px] z-[1] mb-[20vh] bg-white">
           <div className="lg:w-1/2 bg-[#ef4444] p-8 md:p-16 relative flex items-center justify-center overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[150%] h-[150%] bg-white/10 rounded-full blur-3xl" />
              </div>
              
              <div className="relative w-full max-w-[340px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 items-center justify-center p-8">
                 {!isUploaded ? (
                    <div onClick={handleUpload} className="w-full h-48 border-2 border-dashed border-gray-200 hover:border-[#ef4444] hover:bg-red-50/50 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors">
                       <div className="w-12 h-12 bg-red-100 text-[#ef4444] rounded-full flex items-center justify-center mb-2 text-xl">📁</div>
                       <div className="font-bold text-gray-700 text-sm">Upload Video</div>
                       <div className="text-xs text-gray-400 mt-1">MP4, MOV up to 4GB</div>
                    </div>
                 ) : (
                    <div className="w-full h-48 bg-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80)' }} />
                       <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white z-10">
                          ▶
                       </div>
                    </div>
                 )}
              </div>
           </div>
           
           <div className="lg:w-1/2 bg-[#F9FAFB] p-10 md:p-16 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100 text-2xl">
                 📹
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1F2937] leading-[1.3] mb-4">
                1. Import Footage
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                Upload massive 4K files directly in your browser. Our optimized engine handles the heavy lifting instantly.
              </p>
           </div>
        </div>

        {/* Step 2: Edit & Subtitles */}
        <div className={`w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sticky top-[120px] z-[2] mb-[20vh] transition-opacity duration-500 ${!isEditing && !isExported ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
           <div className="lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1 border-t border-r border-b border-gray-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100 text-2xl">
                 ✂️
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1F2937] leading-[1.3] mb-4">
                2. Smart Editing
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                ToolStack automatically removes silences, generates pixel-perfect subtitles, and applies cinematic color grading.
              </p>
           </div>

           <div className="lg:w-1/2 bg-[#F9FAFB] p-8 md:p-16 relative flex items-center justify-center overflow-hidden min-h-[400px] order-1 lg:order-2">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[150%] h-[150%] bg-[#ef4444]/10 rounded-full blur-3xl" />
              </div>
              
              <div className="relative w-full max-w-[340px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 border border-gray-100 p-4">
                 <div className="w-full h-32 bg-gray-900 rounded-lg mb-3 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80)' }} />
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }} className="absolute bottom-2 bg-black/70 px-3 py-1 rounded text-white text-[10px] font-medium border border-white/20">
                       "Automatically generating smart subtitles..."
                    </motion.div>
                 </div>
                 
                 {/* Timeline UI */}
                 <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="flex justify-between text-[8px] font-bold text-gray-400 mb-2">
                       <span>0:00</span><span>0:15</span><span>0:30</span>
                    </div>
                    <div className="h-6 w-full bg-gray-200 rounded-md relative flex items-center px-1 overflow-hidden">
                       <motion.div initial={{ width: "20%" }} animate={{ width: "80%" }} transition={{ duration: 2 }} className="h-4 bg-[#ef4444] rounded border border-red-600 relative overflow-hidden">
                          <div className="absolute inset-0 bg-white/20 w-1/2 skew-x-12 animate-[slide_2s_infinite]" />
                       </motion.div>
                       <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-gray-800 z-10" />
                    </div>
                    <button onClick={handleExport} className="w-full mt-4 py-2 bg-[#1F2937] hover:bg-black text-white text-xs font-bold rounded shadow-md transition-colors">Apply & Export</button>
                 </div>
              </div>
           </div>
        </div>

        {/* Step 3: Export */}
        <div className={`w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sticky top-[140px] z-[3] transition-opacity duration-500 ${!isExported ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
           <div className="lg:w-1/2 bg-[#ec4899] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px]">
              <div className="absolute top-0 right-0 w-[80%] h-[70%] bg-pink-300/30 rounded-bl-[100px]" />
              
              <div className="relative w-full max-w-[340px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 p-8 items-center text-center">
                 <div className="w-20 h-20 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <h4 className="font-bold text-gray-800 text-lg mb-1">Export Complete!</h4>
                 <p className="text-xs text-gray-500 mb-6">Final_Cut_v2.mp4 • 4K • 1.2GB</p>
                 
                 <div className="flex w-full gap-2">
                    <button onClick={() => { setIsUploaded(false); setIsEditing(false); setIsExported(false); }} className="flex-1 py-2.5 bg-gray-100 text-gray-700 text-xs font-bold rounded hover:bg-gray-200">Start Over</button>
                    <button className="flex-1 py-2.5 bg-[#ec4899] text-white text-xs font-bold rounded shadow-md hover:bg-pink-600">Download 4K</button>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-1/2 bg-[#F9FAFB] p-10 md:p-16 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100 text-2xl">
                 🚀
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1F2937] leading-[1.3] mb-4">
                3. High-Quality Export
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                Render losslessly in the cloud. Get your finalized, social-ready videos in seconds, not hours.
              </p>
           </div>
        </div>

      </section>

      <Testimonials />
      <CTA />
    </div>
  );
}
