"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CircleCheck } from "lucide-react";

export function AlignShowcase() {
  const [method, setMethod] = useState<"excel" | "google">("excel");

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-32">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Column: Interactive Export Sheet Dashboard Mockup */}
        <div className="flex-1 w-full relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 blur-[100px] -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
          >
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
                <div 
                  onClick={() => setMethod("excel")}
                  className={`border-2 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-200 ${
                    method === "excel" ? "border-black bg-black/5" : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border ${
                    method === "excel" ? "bg-black border-black text-white" : "border-gray-300"
                  }`}>
                    {method === "excel" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Compile Excel Spreadsheet (.xlsx)</div>
                    <div className="text-[10px] text-gray-500 font-medium">Download clean structured rows immediately</div>
                  </div>
                </div>

                {/* Google Sheets Option */}
                <div 
                  onClick={() => setMethod("google")}
                  className={`border-2 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-200 ${
                    method === "google" ? "border-black bg-black/5" : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border ${
                    method === "google" ? "bg-black border-black text-white" : "border-gray-300"
                  }`}>
                    {method === "google" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Sync to Google Sheets API</div>
                    <div className="text-[10px] text-gray-500 font-medium">Auto update direct to cloud sheet columns</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Right Column: Copy & Checklist */}
        <div className="flex-1 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 leading-tight font-sans"
          >
            Manage <span className="font-serif italic font-light text-gray-600 tracking-normal">all your workflows</span> in one place
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-500 leading-relaxed text-base font-medium mb-8"
          >
            Centralize and simplify digital operations. Eliminate app fatigue and stop switching tabs, connect your tools and start running.
          </motion.p>
          
          <ul className="space-y-4">
            {[
              "Secure sandbox data isolation.",
              "100% intellectual property ownership.",
              "High-performance low-latency execution.",
            ].map((bullet, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-3.5 text-sm md:text-base font-bold text-gray-800"
              >
                <CircleCheck className="w-5 h-5 text-[#2563EB]" />
                {bullet}
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
