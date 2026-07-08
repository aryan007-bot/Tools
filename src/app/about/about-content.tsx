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
    <div className="bg-[#FAF9F5] text-gray-900 font-sans antialiased selection:bg-purple-500/30 selection:text-gray-900 min-h-screen pt-20 relative overflow-hidden">
      {/* Background blurry blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-200/10 to-cyan-200/10 rounded-full blur-3xl" />
      </div>

      {/* 1. Hero Section */}
      <section className="mx-auto mb-12 flex max-w-6xl flex-col items-center px-6 pt-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex max-w-5xl flex-col items-center"
        >
          <h1 className="mb-8 select-none text-center text-[2.75rem] font-medium leading-[1.4] tracking-tight text-gray-900 sm:text-[4.5rem] md:text-[5.5rem] font-serif">
            Engineering{" "}
            <span className="relative inline-block mx-1">
              <svg className="absolute inset-0 w-full h-full text-[#B4A5FF] scale-110" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                 <path d="M5,5 L95,2 L98,95 L2,98 Z" opacity="0.8" />
              </svg>
              <span className="relative z-10 px-4 text-gray-900 font-serif">Growth</span>
            </span>{" "}
            Through{" "}
            <span className="inline-block bg-[#5EEAD4] px-4 rounded-md mx-1 transform -translate-y-1 text-gray-900 font-serif">
              AI
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-normal">
            From classroom to global scale, we build tools that connect instruction, 
            assessment, and intervention. Measurable impact is the only metric that matters.
          </p>
          
          <button
            onClick={() => document.getElementById("hello-section")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex cursor-pointer select-none items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-xs font-bold text-white shadow-md transition-all duration-300 hover:bg-black font-sans"
          >
            View Process
            <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </button>
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
        <h2 className="mb-12 max-w-3xl text-2xl font-medium leading-snug tracking-tight text-gray-900 sm:text-3xl md:text-4xl font-serif">
          To empower educators and administrators with autonomous systems that eliminate repetitive labor, unlock student insights, and connect intervention 24/7.
        </h2>
        <div className="flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-4">
          {["Classroom Automation", "Bespoke AI Assistants", "FERPA & COPPA Compliant", "Outcome-Driven"].map((tag) => (
            <span key={tag} className="cursor-default select-none font-sans text-xs font-bold uppercase tracking-[0.15em] text-slate-800 border-b-2 border-slate-900 pb-1.5 px-1 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-300">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Interactive Founder/Team Slider Section */}
      <section className="relative flex w-full flex-col items-center overflow-hidden border-t border-gray-200 bg-[#FAF9F5] py-12 sm:py-16">
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
              <div className="space-y-3">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1 select-none">
                  <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[#8B5CF6]">Intro</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                </div>
                <h3 className="select-none font-medium text-gray-900 text-3xl sm:text-4xl lg:text-[2.5rem] tracking-tight font-serif">
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
