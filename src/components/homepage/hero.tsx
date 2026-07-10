"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMouseParallax } from "@/hooks/use-parallax";
import { 
  Settings, Sparkles, Mic, GraduationCap, Video, 
  Mail, CreditCard, Cpu, TrendingUp 
} from "lucide-react";

// Orbit geometry
const ORBIT_RADIUS_PCT = 38; // distance from center, as a % of the orbit box
const ORBIT_DURATION = 60; // seconds per full revolution

function getOrbitPosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // 0 = 12 o'clock
  return {
    xPct: 50 + ORBIT_RADIUS_PCT * Math.cos(angle),
    yPct: 50 + ORBIT_RADIUS_PCT * Math.sin(angle),
  };
}

const HERO_WIDGETS = [
  {
    title: "Voice to Excel",
    color: "border-purple-200/50 hover:border-purple-400/50 hover:shadow-purple-500/5",
    bg: "bg-gradient-to-br from-purple-50 to-indigo-50/50",
    icon: (
      <div className="flex flex-col gap-1 w-full h-full items-center justify-center rotate-[-12deg] text-purple-600">
        <Mic className="w-5 h-5 mb-0.5" />
        <div className="w-8 h-1 bg-purple-200 rounded-full" />
        <div className="w-5 h-1 bg-purple-200 rounded-full" />
      </div>
    )
  },
  {
    title: "Test Generator",
    color: "border-emerald-200/50 hover:border-emerald-400/50 hover:shadow-emerald-500/5",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50/50",
    icon: (
      <div className="flex flex-col gap-1 w-full h-full items-center justify-center rotate-[-12deg] text-emerald-600">
        <GraduationCap className="w-5 h-5 mb-0.5" />
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-sm border border-emerald-300 flex items-center justify-center text-[6px] font-black">✓</div>
          <div className="w-2.5 h-2.5 rounded-sm border border-emerald-300" />
        </div>
      </div>
    )
  },
  {
    title: "Video Editor",
    color: "border-amber-200/50 hover:border-amber-400/50 hover:shadow-amber-500/5",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50/50",
    icon: (
      <div className="flex flex-col gap-1 w-full h-full items-center justify-center rotate-[-12deg] text-amber-600">
        <Video className="w-5 h-5 mb-0.5" />
        <div className="w-10 bg-amber-100 h-1.5 rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-amber-500 rounded-full" />
        </div>
      </div>
    )
  },
  {
    title: "Email Assistant",
    color: "border-blue-200/50 hover:border-blue-400/50 hover:shadow-blue-500/5",
    bg: "bg-gradient-to-br from-blue-50 to-cyan-50/50",
    icon: (
      <div className="flex flex-col gap-1.5 w-full h-full items-center justify-center rotate-[-12deg] text-blue-600">
        <Mail className="w-5 h-5" />
        <span className="text-[7px] font-black bg-blue-100 px-1 py-0.5 rounded text-blue-700">Draft</span>
      </div>
    )
  },
  {
    title: "Fee Collection",
    color: "border-rose-200/50 hover:border-rose-400/50 hover:shadow-rose-500/5",
    bg: "bg-gradient-to-br from-rose-50 to-red-50/50",
    icon: (
      <div className="flex flex-col gap-1 w-full h-full items-center justify-center rotate-[-12deg] text-rose-600">
        <CreditCard className="w-5 h-5 mb-0.5" />
        <span className="text-[7.5px] font-bold font-mono text-emerald-600">$ due</span>
      </div>
    )
  },
  {
    title: "AI Core",
    color: "border-purple-200/50 hover:border-purple-400/50 hover:shadow-purple-500/5",
    bg: "bg-gradient-to-br from-violet-50 to-fuchsia-50/50",
    icon: (
      <div className="flex flex-col gap-0.5 w-full h-full items-center justify-center rotate-[-12deg] text-purple-600">
        <Cpu className="w-5 h-5 mb-0.5 animate-pulse" />
        <div className="text-[7px] font-extrabold uppercase tracking-wider text-[#EC4899]">AI Core</div>
      </div>
    )
  },
  {
    title: "Analytics",
    color: "border-emerald-200/50 hover:border-emerald-400/50 hover:shadow-emerald-500/5",
    bg: "bg-gradient-to-br from-emerald-50 to-cyan-50/50",
    icon: (
      <div className="flex flex-col gap-1 w-full h-full items-center justify-center rotate-[-12deg] text-emerald-600">
        <TrendingUp className="w-5 h-5 mb-0.5" />
        <span className="text-[7px] font-extrabold text-emerald-600">+14.2%</span>
      </div>
    )
  },
  {
    title: "System Config",
    color: "border-slate-200/50 hover:border-slate-400/50 hover:shadow-slate-500/5",
    bg: "bg-gradient-to-br from-slate-50 to-gray-50/50",
    icon: (
      <div className="flex flex-col gap-1 w-full h-full items-center justify-center rotate-[-12deg] text-slate-600">
        <Settings className="w-5 h-5 mb-0.5 animate-spin [animation-duration:10s]" />
        <div className="w-8 h-1 bg-slate-200 rounded-full" />
      </div>
    )
  }
];

export function Hero() {
  const mouse = useMouseParallax(0.03);

  const positions = useMemo(
    () => HERO_WIDGETS.map((_, i) => getOrbitPosition(i, HERO_WIDGETS.length)),
    []
  );

  return (
    <section className="relative overflow-hidden pt-16 lg:pt-24 pb-20 lg:pb-28 bg-[#FAF9F5]">
      {/* Background decoration lines / blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-200/10 to-cyan-200/10 rounded-full blur-3xl" />
        
        {/* Floating tech nodes / gears */}
        <motion.div
          className="absolute left-[8%] top-[18%] text-[#A78BFA]/10 w-24 h-24"
          animate={{
            rotate: 360,
            y: [0, -10, 0]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Settings className="w-full h-full stroke-[1.2]" />
        </motion.div>

        <motion.div
          className="absolute right-[5%] bottom-[12%] text-[#5EEAD4]/10 w-28 h-28"
          animate={{
            rotate: -360,
            y: [0, 12, 0]
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Settings className="w-full h-full stroke-[1]" />
        </motion.div>

        <motion.div
          className="absolute left-[45%] top-[12%] text-[#FBBF24]/10 w-12 h-12"
          animate={{
            rotate: 360,
            y: [0, 8, 0]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Settings className="w-full h-full stroke-[1.5]" />
        </motion.div>

        {/* Floating Sparkles for AI feeling */}
        <motion.div
          className="absolute left-[38%] top-[35%] text-[#B4A5FF]/30"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>

        <motion.div
          className="absolute right-[42%] bottom-[20%] text-[#5EEAD4]/30"
          animate={{
            scale: [1.1, 0.8, 1.1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="flex flex-col text-center lg:text-left lg:self-start lg:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7.5xl font-serif tracking-tight text-gray-900 mb-8"
              style={{ lineHeight: 1.35 }}
            >
              The{" "}
              <span className="relative inline-block mx-1">
                {/* SVG Texture Background for "AI" */}
                <svg className="absolute inset-0 w-full h-full text-[#A78BFA] scale-110" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                   <path d="M5,5 L95,2 L98,95 L2,98 Z" opacity="0.8" />
                </svg>
                <span className="relative z-10 px-2 text-[#1F2937]">AI</span>
              </span>{" "}
              operating <br />
              system for{" "}
              <span className="inline-block bg-[#5EEAD4] px-4 rounded-md mx-1 transform -translate-y-1">
                business
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[1.1rem] text-[#6B7280] max-w-[550px] mx-auto lg:mx-0 mb-10 leading-[1.6]"
            >
              ToolStack runs your operations as one connected
              system, replacing the tool sprawl that keeps you from focusing on
              what actually works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/signup"
                className="w-full sm:w-auto text-center px-8 py-4 bg-[#111827] text-white font-semibold text-sm hover:bg-black transition-all duration-300 rounded-sm shadow-md"
              >
                Get Started
              </Link>
              <Link
                href="#tools"
                className="w-full sm:w-auto text-center px-8 py-4 bg-white text-[#111827] font-semibold text-sm border border-gray-300 hover:border-gray-400 transition-all duration-200 rounded-sm"
              >
                Explore Tools
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Orbit */}
          <div className="relative flex items-start justify-center lg:self-start lg:pt-16 lg:-mt-12 min-h-[450px] sm:min-h-[550px] lg:min-h-[500px]">
            <motion.div
              className="relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px]"
              style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              {/* Rotating ring of SaaS widgets */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: ORBIT_DURATION,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 origin-center"
              >
                {HERO_WIDGETS.map((widget, i) => {
                  const pos = positions[i];
                  return (
                    <div
                      key={i}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${pos.xPct}%`,
                        top: `${pos.yPct}%`,
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + i * 0.08,
                          type: "spring",
                          stiffness: 150,
                        }}
                        className="w-[76px] h-[76px] sm:w-[98px] sm:h-[98px]"
                      >
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: ORBIT_DURATION,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-full h-full origin-center"
                        >
                          <motion.div
                            whileHover={{ scale: 1.12 }}
                            className={`w-full h-full rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden border ${widget.color} ${widget.bg} shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 relative group flex items-center justify-center p-3`}
                          >
                            {widget.icon}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Center Logo Card — fixed, never rotates, always on top */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                  className="flex items-center justify-center rounded-[2.2rem] sm:rounded-[2.8rem] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.08)] border border-gray-100/80"
                  style={{
                    width: 140,
                    height: 140,
                  }}
                >
                  <div className="w-[84px] h-[84px] relative">
                    <Image
                      src="/Untitled_design-removebg-preview.png"
                      alt="Company logo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}