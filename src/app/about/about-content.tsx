"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Aaditya",
    role: "Founder and CEO",
    company: "ToolStack",
    description: "Drives technical vision and AI product strategy. Specializes in building autonomous systems and scalable infrastructure that deliver measurable business impact across enterprise markets.",
    imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Aryan Dagar",
    role: "Co-Founder and CTO",
    company: "ToolStack",
    description: "Expert in full-stack architecture, machine learning model integration, and workflow optimization. Aryan oversees core technical systems development.",
    imgUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Ansh Vashist",
    role: "Lead Frontend Engineer",
    company: "ToolStack",
    description: "Passionate about crafting premium user interfaces, motion animations, and responsive web experiences. Ansh is dedicated to polishing client experiences.",
    imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Kaushal Kishor",
    role: "Core Backend Engineer",
    company: "ToolStack",
    description: "Architect of high-throughput database endpoints, cloud security infrastructure, and AI agent token optimizations.",
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Rahul Bajaj",
    role: "AI Research Engineer",
    company: "ToolStack",
    description: "Focuses on fine-tuning large language models, prompt engineering, and agent reasoning behaviors.",
    imgUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Priyanshu",
    role: "Product Designer",
    company: "ToolStack",
    description: "Visual designer crafting stunning UI/UX, brand design, and interactive design systems across our products.",
    imgUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sukesh",
    role: "Operations Director",
    company: "ToolStack",
    description: "Manages delivery schedules, client communications, and coordinates implementation pipelines globally.",
    imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
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

  const currentMember = team[currentIdx];

  return (
    <div className="bg-[#eaeaea] text-[#131313] font-sans antialiased selection:bg-purple-500/30 selection:text-[#131313] min-h-screen pt-28">
      
      {/* 1. Hero Section */}
      <section className="mx-auto mb-20 flex max-w-6xl flex-col items-center px-6 pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex max-w-5xl flex-col items-center"
        >
          <h1 className="font-outfit mb-8 select-none text-center text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-[#131313] sm:text-[4.5rem] md:text-[5.8rem] uppercase font-display">
            Engineering{" "}
            <span className="relative top-[-3px] mx-1 inline-block h-8 w-12 overflow-hidden rounded-full border border-zinc-300 bg-zinc-200 align-middle sm:h-12 sm:w-20 md:h-[3.4rem] md:w-[5.4rem]">
              <Image
                alt="Growth-image"
                src="https://plus.unsplash.com/premium_photo-1714618812303-f6a703492541?w=900&auto=format&fit=crop&q=60"
                fill
                className="scale-110 object-cover"
                unoptimized
              />
            </span>{" "}
            <span className="text-purple-600">Growth</span>
            <br />
            Through{" "}
            <span className="relative top-[-3px] mx-1 inline-block h-8 w-12 overflow-hidden rounded-full border border-zinc-300 bg-zinc-200 align-middle sm:h-12 sm:w-20 md:h-[3.4rem] md:w-[5.4rem]">
              <Image
                alt="ai-image"
                src="https://plus.unsplash.com/premium_photo-1682309553075-c84ea8d9d49a?w=900&auto=format&fit=crop&q=60"
                fill
                className="object-cover"
                unoptimized
              />
            </span>{" "}
            AI
          </h1>
          <p className="mb-10 max-w-2xl text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-light">
            From classroom to global scale, we build tools that connect instruction, 
            assessment, and intervention. Measurable impact is the only metric that matters.
          </p>
          
          <button
            onClick={() => document.getElementById("hello-section")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex cursor-pointer select-none items-center gap-2 rounded-full bg-[#2d2d2d] px-7 py-3 text-xs font-bold text-white shadow-md transition-all duration-300 hover:bg-black font-sans"
          >
            View Process
            <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </button>
        </motion.div>

        {/* Endless text marquee banner */}
        <div className="mt-8 sm:mt-20 w-full overflow-hidden border-t border-zinc-300 pt-6 sm:pt-10">
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

      {/* 2. Mission Section */}
      <section id="hello-section" className="mx-auto flex max-w-4xl flex-col items-center border-t border-zinc-200 px-6 py-24 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.18em] text-zinc-900">Our Mission</span>
          </div>
        </div>
        <h2 className="mb-12 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-[#131313] sm:text-3xl md:text-4xl font-display">
          To empower educators and administrators with autonomous systems that eliminate repetitive labor, unlock student insights, and connect intervention 24/7.
        </h2>
        <div className="flex max-w-xl flex-wrap justify-center gap-2.5">
          {["Classroom Automation", "Bespoke AI Assistantz", "FERPA & COPPA Compliant", "Outcome-Driven"].map((tag) => (
            <span key={tag} className="cursor-default select-none rounded-full bg-zinc-800 px-5 py-2.5 font-sans text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Interactive Founder/Team Slider Section */}
      <section className="relative flex w-full flex-col items-center overflow-hidden border-t border-zinc-200 bg-[#eaeaea] py-16 sm:py-24">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[100px]" />
        
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            {/* Left - Portrait image block with stamp */}
            <div className="relative mx-auto w-[65%] max-w-[25.2rem] sm:w-[90%] lg:col-span-6">
              <div 
                className="group relative aspect-[21/25] w-full cursor-pointer overflow-hidden rounded-[16px] border border-zinc-250 bg-zinc-200 shadow-lg"
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
            <div className="flex flex-col justify-center space-y-4 lg:col-span-6 text-center lg:text-left">
              <div className="space-y-3">
                <span className="block select-none font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600">Intro</span>
                <h3 className="font-outfit select-none font-extrabold text-[#131313] text-3xl sm:text-4xl lg:text-[2.5rem] tracking-tight uppercase">
                  Meet the Team
                </h3>
                <h4 className="font-outfit bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
                  {currentMember.name}
                </h4>
                <p className="min-h-[120px] sm:min-h-[100px] text-sm font-normal leading-relaxed text-zinc-650 sm:text-base font-sans font-light">
                  {currentMember.description}
                </p>
              </div>

              <div className="font-outfit space-y-4 border-t border-zinc-300 pt-4">
                <div className="flex items-center justify-center lg:justify-start border-b border-zinc-200/50 py-1 pb-3 text-sm">
                  <span className="font-bold text-[#131313]">
                    {currentMember.role} <span className="font-light text-zinc-400">at</span> <span className="text-purple-600">{currentMember.company}</span>
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
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-zinc-350 bg-white/40 hover:bg-black hover:text-white text-zinc-800 shadow-sm transition-all hover:shadow-md active:scale-95 duration-200"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    type="button"
                    aria-label="Next team member"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-zinc-350 bg-white/40 hover:bg-black hover:text-white text-zinc-800 shadow-sm transition-all hover:shadow-md active:scale-95 duration-200"
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

      {/* 4. Cross Double Sliding Banners */}
      <section className="relative my-0 sm:my-16 flex h-[120px] sm:h-[220px] w-full select-none items-center justify-center overflow-hidden bg-[#eaeaea]">
        {/* Ribbon 1: Purple diagonal */}
        <div className="absolute left-[-15%] top-1/2 z-10 flex w-[130%] -translate-y-1/2 rotate-[-5deg] items-center overflow-hidden bg-purple-600 py-3.5 text-white shadow-[0_12px_36px_rgba(0,0,0,0.18)]">
          <div className="flex w-full select-none overflow-hidden py-1">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex shrink-0 justify-around gap-16 text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider text-white"
            >
              {Array(6).fill(["Enterprise AI", "Autonomous Systems", "Token Optimization"]).flat().map((item, idx) => (
                <div key={idx} className="flex items-center gap-16 whitespace-nowrap">
                  <span>{item}</span>
                  <span className="text-white/40">×</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Ribbon 2: Dark diagonal */}
        <div className="absolute left-[-15%] top-1/2 z-0 flex w-[130%] -translate-y-1/2 rotate-[5deg] items-center overflow-hidden bg-zinc-950 py-3.5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
          <div className="flex w-full select-none overflow-hidden py-1">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex shrink-0 justify-around gap-16 text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider text-white"
            >
              {Array(6).fill(["Measurable ROI", "ISO Compliant Architecture", "Multi-Agentz Orchestration"]).flat().map((item, idx) => (
                <div key={idx} className="flex items-center gap-16 whitespace-nowrap">
                  <span>{item}</span>
                  <span className="text-white/20">×</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Process / Methodology Grid Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 border-t border-zinc-200">
        <div className="mb-16 text-center">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300 bg-white/80 px-3.5 py-2 shadow-sm backdrop-blur-sm">
              <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.18em] text-zinc-900">Our Process</span>
            </div>
          </div>
          <h2 className="font-black text-[#131313] text-3xl sm:text-4xl lg:text-5xl uppercase font-display">
            From Blueprint to Production
          </h2>
          <p className="mx-auto mt-3 text-lg font-light text-zinc-650 max-w-xl font-sans">
            Our step-by-step methodology for building production-grade autonomous engines.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Steps */}
          <div className="flex flex-col gap-4 lg:col-span-6">
            {[
              { num: "01", title: "Audit", desc: "Analysis of workflows, costs & tasks" },
              { num: "02", title: "Build", desc: "Bespoke agent architectures" },
              { num: "03", title: "Deploy", desc: "Deep CRM & API integrations" },
              { num: "04", title: "Refine", desc: "Continuous monitoring & optimization" }
            ].map((step) => (
              <div 
                key={step.num}
                className="flex items-center justify-between rounded-2xl border border-zinc-250 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all hover:border-purple-500/25 duration-200 group cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 font-mono font-black text-white group-hover:bg-purple-600 transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#131313] text-sm font-sans">{step.title}</h4>
                    <p className="mt-0.5 text-xs text-zinc-400 font-sans">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Callout gradient box */}
          <div className="lg:col-span-6">
            <div 
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-zinc-900 bg-zinc-950 p-8 text-white shadow-xl sm:p-10"
              style={{
                background: "radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.45) 0%, transparent 65%), #0c0c0c"
              }}
            >
              <div className="relative z-10 space-y-4">
                <h3 className="text-white font-black leading-tight tracking-tight text-3xl sm:text-4xl uppercase font-display">
                  Project in Mind?<br />
                  <span className="text-purple-400">Get in Touch</span>
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-zinc-400 font-sans font-light">
                  Tell us about your project—we'll bring the tools, vision, and energy to make it real.
                </p>
              </div>
              <div className="relative z-10 mt-10">
                <button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex w-full cursor-pointer select-none items-center justify-center gap-2 rounded-full border border-zinc-800 bg-[#1b1b1b]/80 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-900/30 font-sans"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Form at the bottom */}
      <section className="relative flex w-full flex-col items-center bg-[#eaeaea] pb-24 pt-10 sm:pb-32 sm:pt-14 border-t border-zinc-200" style={{ backgroundImage: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 1.2px, transparent 1.2px)", backgroundSize: "30px 30px" }}>
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6">
          <div className="relative mb-16 flex flex-col items-center text-center">
            <div className="pointer-events-none absolute -top-10 h-28 w-80 rounded-full bg-purple-500/5 blur-[80px]" />
            <h2 className="mb-4 select-none font-black leading-tight text-zinc-900 text-3xl sm:text-4xl lg:text-5xl uppercase font-display">
              Let's build something bold
            </h2>
            <p className="text-lg leading-relaxed text-zinc-500 font-sans font-light max-w-xl">
              Have a project or idea? Tell us about it below and let's start creating.
            </p>
            <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          <div 
            id="contact-form" 
            className="relative flex w-full flex-col items-stretch justify-between gap-12 overflow-hidden rounded-[32px] border border-zinc-900 bg-zinc-950 p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:p-12 md:p-16 lg:flex-row scroll-mt-24 w-full"
          >
            <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[100px]" />
            
            <div className="z-10 flex flex-col justify-between space-y-8 lg:w-[45%]">
              <div className="space-y-4 text-left">
                <h2 className="font-black leading-tight text-white text-3xl sm:text-4xl lg:text-5xl uppercase font-display">
                  Got a project<br /> in mind?
                </h2>
                <p className="max-w-sm text-sm leading-relaxed text-zinc-400 font-sans font-light">
                  Let's make something happen together
                </p>
              </div>
              <div className="hidden lg:block text-left">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-550">ToolStack Studio - 2026</span>
              </div>
            </div>

            <div className="z-10 flex flex-col justify-between space-y-6 lg:w-[50%]">
              <form onSubmit={handleSubmit} className="space-y-6 text-left w-full">
                <div className="space-y-1">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-zinc-800 bg-transparent py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-purple-400 focus:outline-none font-sans font-light"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-zinc-800 bg-transparent py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-purple-400 focus:outline-none font-sans font-light"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400">Project Description</label>
                  <textarea
                    required
                    placeholder="Type Here..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none border-b border-zinc-800 bg-transparent py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-purple-400 focus:outline-none font-sans font-light"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full cursor-pointer select-none items-center justify-center gap-2 rounded-full bg-[#111111] py-4 text-xs font-extrabold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(139,92,246,0.32)] transition-all duration-300 hover:bg-black hover:shadow-[0_0_32px_rgba(139,92,246,0.55)] font-sans border border-white/5"
                >
                  {submitted ? "Message Sent!" : "Send Now!"}
                  <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans">→</span>
                </button>
              </form>
            </div>

          </div>

          {/* Marquee email banner */}
          <div className="mt-8 w-screen max-w-none overflow-hidden rounded-none border-y border-white/5 bg-black shadow-lg py-4 flex -mx-6 sm:-mx-12">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex gap-16 whitespace-nowrap text-xl sm:text-3xl text-gray-300 font-bold shrink-0 animate-marquee"
            >
              {Array(10).fill("contact@profitagentz.com").map((email, idx) => (
                <div key={idx} className="flex items-center gap-16">
                  <span className="normal-case text-zinc-300 font-mono">{email}</span>
                  <span className="text-purple-500 font-sans">×</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
