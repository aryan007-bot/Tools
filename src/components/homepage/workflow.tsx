"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const realities = [
  {
    title: "Voice To Excel",
    tag: "AI Transcriber",
    accent: "#8B5CF6",
    link: "/tools/voice-to-excel",
    features: ["Speech-to-text formatting", "Automatic SKU sorting", "Real-time sheets download"],
    desc: "Transcribe voice instructions straight into structured Excel spreadsheets. Real-time categorisation, automated SKU matching, and clean spreadsheet schema layouts.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-purple-100/50 shadow-inner">
         <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-purple-500/10 rounded-full blur-xl" />
         <div className="absolute -right-10 -top-10 w-36 h-36 bg-indigo-400/15 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col gap-2.5">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
               <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Listening...</span>
               </div>
               <span className="text-[8px] font-black text-purple-600 bg-purple-50 px-2 py-0.5 rounded flex items-center gap-1">
                 <Settings className="w-2.5 h-2.5 animate-spin [animation-duration:12s]" />
                 Voice Node
               </span>
            </div>
            
            <div className="flex items-end gap-1 justify-center h-10 px-2 my-1">
               {[12, 24, 18, 30, 20, 28, 14, 26, 22, 16, 24, 10, 18, 8, 14].map((h, idx) => (
                 <motion.div 
                   key={idx} 
                   className="w-1 bg-purple-500 rounded-full" 
                   animate={{ height: [`${h/2}px`, `${h}px`, `${h/2}px`] }}
                   transition={{ duration: 1.2, repeat: Infinity, delay: idx * 0.05 }}
                 />
               ))}
            </div>

            <div className="space-y-1.5 border-t border-gray-100 pt-2 font-mono text-[8px] text-gray-500">
               <div className="flex justify-between font-bold text-gray-400 border-b border-gray-50 pb-1">
                 <span>Product SKU</span>
                 <span>Qty</span>
                 <span>Cost</span>
               </div>
               <div className="flex justify-between font-bold text-gray-800">
                 <span>Logitech G502</span>
                 <span>12</span>
                 <span className="text-emerald-600">$599</span>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    title: "Test Generator",
    tag: "AI Educator",
    accent: "#10B981",
    link: "/tools/text-generator",
    features: ["Instant quiz compilation", "Dynamic complexity rules", "Structured answers keys"],
    desc: "Generate academic tests and worksheets instantly. Supply reference text files, configure question quantities, set grade levels, and download structured answer keys.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-emerald-100/50 shadow-inner">
         <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-emerald-500/10 rounded-full blur-xl" />
         <div className="absolute -right-10 -top-10 w-36 h-36 bg-teal-400/15 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col gap-2.5">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
               <div className="w-20 h-3.5 bg-emerald-50 rounded flex items-center justify-center text-[8px] font-bold text-emerald-700">Quiz: Physics 101</div>
               <span className="text-[9px] text-gray-400 font-semibold flex items-center gap-1">
                 <Settings className="w-2.5 h-2.5 text-emerald-600 animate-spin [animation-duration:8s]" />
                 10 Qs
               </span>
            </div>
            <div className="flex flex-col gap-1.5">
               <div className="w-full h-2.5 bg-gray-100 rounded-full" />
               <div className="w-3/4 h-2.5 bg-gray-100 rounded-full" />
            </div>
            <div className="space-y-1.5 mt-1">
               <div className="flex items-center gap-2 p-1.5 border border-gray-100 rounded-lg bg-gray-50/50">
                  <div className="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center text-[8px] text-gray-500">A</div>
                  <div className="w-2/3 h-1.5 bg-gray-200 rounded-full" />
               </div>
               <div className="flex items-center gap-2 p-1.5 border border-emerald-200 rounded-lg bg-emerald-50/30">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-600 flex items-center justify-center text-[8px] text-white font-bold">B</div>
                  <div className="w-1/2 h-1.5 bg-emerald-200 rounded-full" />
               </div>
               <div className="flex items-center gap-2 p-1.5 border border-gray-100 rounded-lg bg-gray-50/50">
                  <div className="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center text-[8px] text-gray-500">C</div>
                  <div className="w-5/12 h-1.5 bg-gray-200 rounded-full" />
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    title: "Video Editor",
    tag: "AI Creative",
    accent: "#F59E0B",
    link: "/tools/video-editor",
    features: ["Autonomous clipping node", "Overlay generation", "Fast campaigns render"],
    desc: "Scale media production. Auto-crop horizontal frames to vertical, slice long content into highlight campaigns, generate custom caption styling, and render in cloud servers.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-amber-100/50 shadow-inner">
         <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-amber-500/10 rounded-full blur-xl" />
         <div className="absolute -right-10 -top-10 w-36 h-36 bg-orange-400/15 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center border-b border-gray-100 pb-1.5">
               <span className="text-[9px] font-bold text-gray-700">Video Compiler</span>
               <span className="text-[8px] bg-amber-50 text-amber-700 font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                 <Settings className="w-2.5 h-2.5 animate-spin [animation-duration:6s]" />
                 Render Active
               </span>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-amber-500 flex items-center justify-center text-white">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-gray-800 leading-tight">reel_cut_1.mp4</span>
                    <span className="text-[7px] text-gray-400">1080x1920 · 24fps</span>
                  </div>
               </div>
               <span className="text-[8.5px] font-bold text-amber-600">72%</span>
            </div>

            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-amber-500" 
                 animate={{ width: ["0%", "100%", "100%"] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
            </div>
         </div>
      </div>
    )
  },
  {
    title: "Email Assistant", 
    tag: "AI Assistant",
    accent: "#3B82F6",
    link: "/tools/email-assistant",
    features: ["Context-aware drafting", "Tone Adjustment settings", "Integrated scheduling tools"],
    desc: "Generate, improve, and automate emails. From smart drafts to tone adjustments, templates to scheduling — your complete email workflow.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-blue-100/50 shadow-inner">
         <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-blue-500/10 rounded-full blur-xl" />
         <div className="absolute -right-10 -top-10 w-36 h-36 bg-cyan-400/15 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center border-b border-gray-100 pb-1.5">
               <span className="text-[9px] font-bold text-gray-700">Drafting Response...</span>
               <span className="text-[8px] bg-blue-50 text-blue-600 font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1">
                 <Settings className="w-2.5 h-2.5 animate-spin [animation-duration:5s]" />
                 AI Active
               </span>
            </div>
            <div className="p-2 bg-gray-50 rounded-lg space-y-1.5">
               <div className="w-full h-1.5 bg-gray-200 rounded-full" />
               <div className="w-11/12 h-1.5 bg-gray-200 rounded-full" />
               <div className="w-4/5 h-1.5 bg-gray-200 rounded-full" />
            </div>
            <div className="flex gap-2 justify-end mt-1">
               <span className="text-[8px] font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded-full">Re-write</span>
               <span className="text-[8px] font-bold text-white bg-blue-600 px-2 py-1 rounded-full">Send Draft</span>
            </div>
         </div>
      </div>
    )
  }
];

const compliances = [
  {
    name: "Enterprise Isolation",
    desc: "Strict sandbox execution models that fully isolate user actions and data variables.",
    color: "bg-purple-500/10 text-purple-600 border border-purple-200/30",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#F3E8FF" />
        <rect x="14" y="14" width="20" height="20" rx="4" fill="#A78BFA" />
        <line x1="24" y1="18" x2="24" y2="21" stroke="white" strokeWidth="2" />
        <line x1="24" y1="27" x2="24" y2="30" stroke="white" strokeWidth="2" />
        <line x1="18" y1="24" x2="21" y2="24" stroke="white" strokeWidth="2" />
        <line x1="27" y1="24" x2="30" y2="24" stroke="white" strokeWidth="2" />
      </svg>
    )
  },
  { 
    name: "100% IP Ownership", 
    desc: "Every asset generated—spreadsheets, quiz databases, media cuts—belongs to you.", 
    color: "bg-amber-500/10 text-amber-700 border border-amber-200/30", 
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
        <rect x="15" y="15" width="18" height="18" rx="2" fill="#F59E0B" />
        <path d="M21 24 L23 26 L27 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "High-Performance SLA", 
    desc: "Dedicated computing nodes ensure 99.9% uptime and low-latency API call structures.", 
    color: "bg-rose-500/10 text-rose-600 border border-rose-200/30", 
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#FFE4E6" />
        <path d="M25 15 L17 26 L24 26 L23 33 L31 22 L24 22 Z" fill="#F43F5E" />
      </svg>
    )
  }
];

interface WorkflowProps {
  showCompliance?: boolean;
  showHeader?: boolean;
  bgClass?: string;
  cardBgClass?: string;
  paddingClass?: string;
}

export function Workflow({
  showCompliance = true,
  showHeader = true,
  bgClass = "bg-white",
  cardBgClass = "bg-[#FFFEF9]",
  paddingClass = "py-24 sm:py-32"
}: WorkflowProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeTool = realities[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % realities.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + realities.length) % realities.length);
  };

  return (
    <section className={cn("font-sans relative border-t border-gray-100", bgClass, paddingClass)}>
      
      {/* Visual background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-50/40 to-transparent rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-50/20 to-transparent rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        {showHeader && (
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8B5CF6] bg-purple-50 border border-purple-100/50 px-3 py-1 rounded">
                Feature Highlights
              </span>
            </div>
            <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl font-serif text-[#1F2937] leading-[1.2] mb-4">
              Custom SaaS workflows
            </h2>
            <p className="text-[#6B7280] text-sm font-medium">
              Deploy advanced tools designed around your business realities.
            </p>
          </div>
        )}

        {/* Dynamic Showcase Slider */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-center mb-24 min-h-[420px]">
          
          {/* Left Column: Copy */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded">
                {activeTool.tag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeTool.accent }} />
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif text-[#1F2937] mb-5">
              {activeTool.title}
            </h3>

            <p className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-8 font-medium">
              {activeTool.desc}
            </p>

            {/* Feature bullets */}
            <div className="space-y-3.5 mb-8">
              {activeTool.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold" style={{ backgroundColor: activeTool.accent }}>
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700">{feat}</span>
                </div>
              ))}
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrev}
                className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-2">
                {realities.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    style={{ 
                      backgroundColor: idx === activeIdx ? activeTool.accent : '#E5E7EB',
                      width: idx === activeIdx ? 24 : 10
                    }}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Mockup Canvas */}
          <div className="w-full relative flex items-center justify-center min-h-[260px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full"
              >
                {activeTool.mockup}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Compliance / Security Cards Panel */}
        {showCompliance && (
          <div className="border-t border-gray-100 pt-20">
            <div className="text-center max-w-md mx-auto mb-12">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Security & Isolation</h4>
              <p className="text-xs text-gray-400 font-medium">Enterprise grade protocols built into the software architecture.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compliances.map((item, idx) => (
                <div 
                  key={idx}
                  className={cn("border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden flex flex-col justify-between", cardBgClass)}
                >
                  <div className="flex justify-between items-start mb-6">
                    {item.icon}
                    <span className={`badge ${item.color} font-bold text-[9px] uppercase tracking-wider`}>
                      Verified SLA
                    </span>
                  </div>

                  <div>
                    <h5 className="text-base font-bold text-slate-800 mb-2">{item.name}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
