"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import { tools } from "@/lib/constants/tools";
import { Workflow } from "@/components/homepage/workflow";

export default function ToolsPage() {
  return (
    <div className="pt-24 bg-[#fafafa] min-h-screen pb-16 relative overflow-hidden">
      {/* Background blurry blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/15 to-cyan-200/10 rounded-full blur-[120px]" />
      </div>

      {/* Floating Animated Developer Utility Nodes */}
      {/* 1. Turning Wrench (🔧) */}
      <motion.div
        className="absolute top-[28%] left-[4%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          >
            🔧
          </motion.div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">SYS_CONFIG</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Setup_Node
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 2. Swinging Hammer (🔨) */}
      <motion.div
        className="absolute top-[48%] right-[4%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ rotate: [0, -35, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", repeatDelay: 0.8 }}
          >
            🔨
          </motion.div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">COMPILER</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Build_Node
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3. Floating Magnet (🧲) */}
      <motion.div
        className="absolute bottom-[32%] left-[5%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ x: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🧲
          </motion.div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">DB_PULL</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Magnet_Sync
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 4. Rotating Gear (⚙️) */}
      <motion.div
        className="absolute bottom-[22%] right-[5%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            ⚙️
          </motion.div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">ENGINE</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Gear_Core
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-6 pt-8 pb-16 text-center flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <div className="flex items-center justify-center gap-1.5 bg-white border border-gray-200/50 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB]">
              Explore Our Suite
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 max-w-3xl leading-[1.2] font-sans"
        >
          A powerful stack of <br />
          <span className="font-serif italic font-light text-gray-600">business utilities</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-500 max-w-[620px] mb-8 leading-relaxed"
        >
          Increase operational efficiency, eliminate manual entry, and automate client communications with our suite of specialized low-latency nodes.
        </motion.p>
      </section>

      {/* Grid of Tools */}
      <section className="max-w-6xl mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, idx) => {
            const IconComponent = (Icons as any)[tool.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover="hover"
                variants={{
                  hover: {
                    y: -8,
                    transition: { duration: 0.3 }
                  }
                }}
                className="bg-white border border-gray-200/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Tool Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      variants={{
                        hover: {
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                          transition: { duration: 0.5 }
                        }
                      }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ 
                        backgroundColor: `${tool.accentColor}15`,
                        color: tool.accentColor
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{tool.name}</h3>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">{tool.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {tool.description}
                  </p>

                  {/* Features List */}
                  <div className="border-t border-gray-100 pt-6 mb-8">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Functions</h4>
                    <ul className="space-y-3">
                      {tool.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                          <span 
                            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white shrink-0 mt-0.5"
                            style={{ backgroundColor: tool.accentColor }}
                          >
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Launch Button */}
                <Link
                  href={tool.slug}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-widest rounded-2xl transition-all duration-300 group shadow-md hover:shadow-lg"
                >
                  Launch Tool Node
                  <Icons.ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sandbox Demo Header */}
      <div className="border-t border-gray-200/60 max-w-6xl mx-auto my-12" />

      {/* Interactive Workflow Slider */}
      <Workflow 
        showCompliance={true} 
        showHeader={true} 
        bgClass="bg-transparent" 
        cardBgClass="bg-white" 
        paddingClass="py-12"
      />
    </div>
  );
}
