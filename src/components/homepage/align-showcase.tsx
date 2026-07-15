"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import { TiltCard } from "../animations/tilt-card";
import { useReducedMotion, transitions } from "../animations/motion-config";

export function AlignShowcase() {
  const [method, setMethod] = useState<"excel" | "google">("excel");
  const reduced = useReducedMotion();

  const checklistItems = [
    "Secure sandbox data isolation.",
    "100% intellectual property ownership.",
    "High-performance low-latency execution.",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-32 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Column: Interactive Export Sheet Dashboard Mockup */}
        <div className="flex-1 w-full relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 blur-[100px] -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transitions.springGentle}
            className="w-full max-w-md relative z-10"
          >
            <TiltCard maxTilt={6} className="w-full">
              <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden relative group">
                
                {/* Spotlight hover overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(37,99,235,0.02)_0%,transparent_50%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Header bar */}
                <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-1.5 border-b border-gray-900">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>

                {/* Mock Card Content */}
                <div className="p-6 text-left">
                  <h4 className="font-bold text-gray-900 text-lg mb-1 tracking-tight">Export Data</h4>
                  <p className="text-xs text-gray-500 mb-6 font-semibold uppercase">
                    Active Node : <span className="font-black text-[#2563EB]">Billing Export : June Sales</span>
                  </p>

                  {/* From / To tags */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 text-xs font-semibold flex justify-between items-center border border-gray-100">
                      <span className="text-gray-400 font-bold">From:</span> 
                      <span className="text-gray-700">Voice Node</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 animate-pulse">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 text-xs font-semibold flex justify-between items-center border border-gray-100">
                      <span className="text-gray-400 font-bold">To:</span> 
                      <span className="text-gray-700">Spreadsheet</span>
                    </div>
                  </div>

                  {/* Results indicators */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Total Items</div>
                      <div className="font-extrabold text-gray-800 text-sm">
                        1,248 <span className="text-[10px] font-bold text-gray-400">rows</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">SKU Match</div>
                      <div className="font-extrabold text-[#2563EB] text-sm">99.8%</div>
                    </div>
                  </div>

                  {/* Choice Interactivity */}
                  <div className="space-y-3">
                    <h5 className="font-bold text-xs text-gray-500 uppercase tracking-wider">Choose Method</h5>
                    
                    {/* Excel Option */}
                    <motion.div 
                      onClick={() => setMethod("excel")}
                      className={`border-2 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-300 relative ${
                        method === "excel" ? "border-blue-600 bg-blue-50/10" : "border-gray-100 hover:border-gray-200"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border transition-colors ${
                        method === "excel" ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300"
                      }`}>
                        {method === "excel" && <motion.span layoutId="dot" className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Compile Excel Spreadsheet (.xlsx)</div>
                        <div className="text-[10px] text-gray-500 font-medium">Download clean structured rows immediately</div>
                      </div>
                    </motion.div>

                    {/* Google Sheets Option */}
                    <motion.div 
                      onClick={() => setMethod("google")}
                      className={`border-2 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-300 relative ${
                        method === "google" ? "border-blue-600 bg-blue-50/10" : "border-gray-100 hover:border-gray-200"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border transition-colors ${
                        method === "google" ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300"
                      }`}>
                        {method === "google" && <motion.span layoutId="dot" className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Sync to Google Sheets API</div>
                        <div className="text-[10px] text-gray-500 font-medium">Auto update direct to cloud sheet columns</div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Right Column: Copy & Checklist */}
        <div className="flex-1 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={transitions.smooth}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#0c1a30] leading-tight font-sans"
          >
            Manage all your workflows in one place
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="text-gray-500 leading-relaxed text-base font-medium mb-8"
          >
            Centralize and simplify digital operations. Eliminate app fatigue and stop switching tabs, connect your tools and start running.
          </motion.p>
          
          <ul className="space-y-4">
            {checklistItems.map((bullet, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 160, 
                  damping: 18, 
                  delay: 0.2 + idx * 0.1 
                }}
                className="flex items-center gap-3.5 text-sm md:text-base font-bold text-gray-800 group cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <CircleCheck className="w-5 h-5 text-[#2563EB] transition-colors duration-300 group-hover:text-blue-600" />
                </motion.div>
                {bullet}
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
