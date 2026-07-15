"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Aaditya",
    role: "Founder and CEO",
    company: "ToolStack",
    description: "Drives technical vision and AI product strategy. Specializes in building autonomous systems and scalable infrastructure that deliver measurable business impact across enterprise markets.",
    imgUrl: "/aditya.jpeg"
  },
  {
    name: "Aryan Dagar",
    role: "Co-Founder and CTO",
    company: "ToolStack",
    description: "Expert in full-stack architecture, machine learning model integration, and workflow optimization. Aryan oversees core technical systems development.",
    imgUrl: "/aryan.jpeg"
  },
  {
    name: "Ansh Vashist",
    role: "Co-Founder and AI Architect",
    company: "ToolStack",
    description: "Passionate about crafting premium user interfaces, motion animations, and responsive web experiences. Ansh is dedicated to polishing client experiences.",
    imgUrl: "/ansh.jpeg"
  },
  {
    name: "Himanshu",
    role: "Marketing Head",
    company: "ToolStack",
    description: "Handles marketing and brand promotion, crafting strategies to elevate ToolStack’s presence across digital and enterprise platforms.",
    imgUrl: "/himanshu.jpeg"
  }
];

export function AboutContent() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIdx]);

  const currentMember = team[currentIdx];

  return (
    <div className="bg-[#fafafa] text-gray-900 font-sans antialiased selection:bg-purple-500/30 selection:text-gray-900 min-h-screen pt-20 relative overflow-hidden">
      {/* Background blurry blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-200/10 to-cyan-200/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Animated Developer Utility Nodes */}
      {/* 1. Rotating Gear (Settings) */}
      <motion.div
        className="absolute top-[22%] left-[6%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
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

      {/* 2. Swinging Hammer (Hammer) */}
      <motion.div
        className="absolute top-[30%] right-[6%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ rotate: [0, -30, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", repeatDelay: 1 }}
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

      {/* 3. Turning Wrench (Wrench) */}
      <motion.div
        className="absolute top-[62%] left-[8%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ rotate: [0, 25, -25, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
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

      {/* 4. Bouncing Toolbox (Briefcase) */}
      <motion.div
        className="absolute bottom-[14%] right-[8%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ scale: [1, 1.03, 0.97, 1] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          >
            🧰
          </motion.div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">STACK_CORE</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Toolbox_Live
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 1. Hero Section */}
      <section className="mx-auto mb-12 flex max-w-6xl flex-col items-center px-6 pt-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-[680px] flex-col items-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-[4.6rem] font-medium tracking-tight text-[#0c1a30] leading-[1.1] mb-8 font-sans">
            Engineering growth through AI
          </h1>
          <p className="text-base sm:text-lg md:text-[1.15rem] max-w-[540px] mx-auto mb-10 text-gray-500 leading-relaxed">
            Unifying your daily business operations. We build clean, high-performance utility nodes
            to automate voice transcription, document assessment, client communication, and payments.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 items-center justify-center"
          >
            <button
              onClick={() => document.getElementById("hello-section")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[#1D4ED8] hover:scale-105 shadow-md shadow-blue-500/10"
            >
              View Process ↓
            </button>
            <a
              href="/tools"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-gray-300 text-gray-700 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:border-gray-900"
            >
              Explore all tools
            </a>
          </motion.div>
        </motion.div>

        {/* Endless text marquee banner */}
        <div className="mt-8 sm:mt-20 w-full overflow-hidden border-t border-gray-200 pt-6 sm:pt-10">
          <div className="relative flex select-none overflow-hidden opacity-35 filter">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
              className="flex shrink-0 items-center gap-10 sm:gap-16 px-4 sm:px-8 text-lg sm:text-2xl font-bold uppercase tracking-widest font-mono"
            >
              {Array(4).fill(["Audit", "Build", "Deploy", "Refine"]).flat().map((step, idx) => (
                <span key={idx}>{step}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="hello-section" className="mx-auto flex max-w-4xl flex-col items-center border-t border-gray-200 px-6 py-24 text-center relative z-10">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#8B5CF6]">Our Mission</span>
          </div>
        </div>
        <h2 className="mb-12 max-w-3xl text-2xl font-medium leading-[1.1] tracking-tight text-[#0c1a30] sm:text-3xl md:text-4xl font-sans">
          To eliminate software bloat and app fatigue by consolidation: providing a single, unified workspace for critical business utilities with zero-latency execution.
        </h2>
        <div className="flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-4">
          {["Unified Workspace", "Voice Transcriptions", "Automated Assessments", "Secure Invoicing", "AI Mail Drafting"].map((tag) => (
            <motion.span 
              key={tag} 
              whileHover={{ y: -3, scale: 1.05 }}
              className="cursor-default select-none font-sans text-xs font-bold uppercase tracking-[0.15em] text-slate-800 border-b-2 border-slate-900 pb-1.5 px-1 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </section>

      {/* 3. Interactive Founder/Team Slider Section */}
      <section className="relative flex w-full flex-col items-center overflow-hidden border-t border-gray-200 bg-[#fafafa] py-12 sm:py-16">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />
        
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            {/* Left - Portrait image block with stamp */}
            <div className="relative mx-auto w-[65%] max-w-[25.2rem] sm:w-[90%] lg:col-span-6">
              <div 
                className="group relative aspect-[21/25] w-full cursor-pointer overflow-hidden rounded-[16px] border border-gray-200 bg-white shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      alt={`${currentMember.name} Portrait`}
                      src={currentMember.imgUrl}
                      fill
                      className="pointer-events-none select-none object-cover"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* CEO Rotate circular stamp */}
                <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex h-16 w-16 sm:h-20 sm:w-20 select-none items-center justify-center rounded-full border border-white/20 bg-black/60 p-1 backdrop-blur-md z-20">
                  <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
                    <path id="stampPath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text className="fill-white font-mono text-[9px] font-bold uppercase tracking-widest">
                      <textPath href="#stampPath">* Team Member * {currentMember.name} *</textPath>
                    </text>
                  </svg>
                  <div className="absolute flex h-5 w-5 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/20">
                    <Star className="h-2.5 w-2.5 fill-purple-400 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Profile Description copy */}
            <div className="flex flex-col justify-center space-y-4 lg:col-span-6 text-center lg:text-left relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1 select-none">
                      <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[#8B5CF6]">Intro</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                    </div>
                    <h3 className="select-none font-medium text-[#0c1a30] text-3xl sm:text-4xl lg:text-[2.5rem] tracking-tight leading-[1.1] font-sans">
                      Meet the Team
                    </h3>
                    <h4 className="font-sans bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                      {currentMember.name}
                    </h4>
                    <p className="min-h-[120px] sm:min-h-[100px] text-sm leading-relaxed text-gray-600 sm:text-base font-sans font-normal">
                      {currentMember.description}
                    </p>
                  </div>

                  <div className="font-sans space-y-4 border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-center lg:justify-start border-b border-gray-100 py-1 pb-3 text-sm">
                      <span className="font-semibold text-gray-900">
                        {currentMember.role} <span className="font-normal text-gray-400">at</span> <span className="text-purple-600">{currentMember.company}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Toggles */}
              <div className="flex select-none items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handlePrev}
                    type="button"
                    aria-label="Previous team member"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white/40 hover:bg-black hover:text-white text-zinc-800 shadow-sm transition-all hover:shadow-md active:scale-95 duration-200"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    type="button"
                    aria-label="Next team member"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white/40 hover:bg-black hover:text-white text-zinc-800 shadow-sm transition-all hover:shadow-md active:scale-95 duration-200"
                  >
                    →
                  </button>
                </div>
                <span className="font-mono text-xs font-bold tracking-widest text-zinc-500">
                  {String(currentIdx + 1).padStart(2, "0")} / {String(team.length).padStart(2, "0")}
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>


    </div>
  );
}
