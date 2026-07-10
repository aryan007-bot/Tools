"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Orbit geometry for horizontal ellipse
const X_RADIUS_PCT = 42; // distance from center horizontally, as a % of orbit container
const Y_RADIUS_PCT = 34; // distance from center vertically, as a % of orbit container
const ORBIT_DURATION = 100; // seconds per full revolution

function getOrbitPosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // start from top
  return {
    xPct: 50 + X_RADIUS_PCT * Math.cos(angle),
    yPct: 50 + Y_RADIUS_PCT * Math.sin(angle),
  };
}

const INTEGRATION_LOGOS = [
  {
    name: "Rippling",
    icon: <span className="text-sm md:text-lg font-black text-[#5C2D91]">R</span>
  },
  {
    name: "QuickBooks",
    icon: <span className="text-sm md:text-lg font-bold text-[#2CA01C]">qb</span>
  },
  {
    name: "Gusto",
    icon: <span className="text-xs md:text-sm font-black text-[#F05A28]">gusto</span>
  },
  {
    name: "ADP",
    icon: <span className="text-xs md:text-sm font-black text-[#D02027]">ADP</span>
  },
  {
    name: "BambooHR",
    icon: <span className="text-sm md:text-lg font-bold text-[#8BC34A]">b</span>
  },
  {
    name: "Workday",
    icon: <span className="text-sm md:text-lg font-bold text-[#E28743]">w</span>
  },
  {
    name: "Sage",
    icon: <span className="text-xs md:text-sm font-bold text-[#007E5A]">Sage</span>
  },
  {
    name: "Stripe",
    icon: <span className="text-xs md:text-sm font-black text-[#635BFF]">stripe</span>
  },
  {
    name: "PayPal",
    icon: <span className="text-sm md:text-lg font-black text-[#003087]">P</span>
  },
  {
    name: "Notion",
    icon: <span className="text-sm md:text-lg font-black text-black">N</span>
  },
  {
    name: "Slack",
    icon: <span className="text-sm md:text-lg font-black text-[#4A154B]">#</span>
  },
  {
    name: "Google Sheets",
    icon: <span className="text-sm md:text-lg font-bold text-[#0F9D58]">田</span>
  },
  {
    name: "Excel",
    icon: <span className="text-sm md:text-lg font-black text-[#107C41]">X</span>
  },
  {
    name: "Salesforce",
    icon: <span className="text-[9px] md:text-xs font-black text-[#00A1E0]">cloud</span>
  },
  {
    name: "HubSpot",
    icon: <span className="text-xs md:text-sm font-bold text-[#FF7A59]">Hub</span>
  },
  {
    name: "UKG",
    icon: <span className="text-xs md:text-sm font-black text-[#005A9C]">UKG</span>
  }
];

export function AlignHero() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const positions = useMemo(
    () => INTEGRATION_LOGOS.map((_, i) => getOrbitPosition(i, INTEGRATION_LOGOS.length)),
    []
  );

  return (
    <div className="w-full relative overflow-hidden bg-white">
      {/* Top Banner (Finch Style) */}
      <div className="w-full bg-[#0A1A2F] text-[#a5c2f4] text-[11px] md:text-xs font-medium py-2.5 text-center px-4 tracking-wide shadow-sm flex items-center justify-center gap-1.5 relative z-20">
        <span>Introducing ToolStack 2.0 — the ultimate suite of low-latency utility nodes.</span>
        <a href="/tools" className="underline text-white font-semibold hover:text-[#a5c2f4] transition-colors flex items-center gap-0.5">
          Read the docs <ArrowRight className="w-3 h-3 inline" />
        </a>
      </div>

      {/* Hero Content Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-center min-h-[700px] md:min-h-[820px] flex flex-col items-center justify-center z-10">
        
        {/* Slow Rotating Orbit Ring Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: ORBIT_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative w-[500px] h-[500px] md:w-[950px] md:h-[950px] origin-center shrink-0"
          >
            {INTEGRATION_LOGOS.map((logo, i) => {
              const pos = positions[i];
              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  style={{
                    left: `${pos.xPct}%`,
                    top: `${pos.yPct}%`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: ORBIT_DURATION,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="origin-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, y: -4 }}
                      onMouseEnter={() => setIsHovered(i)}
                      onMouseLeave={() => setIsHovered(null)}
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white border flex items-center justify-center p-2.5 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.04)] cursor-pointer hover:shadow-lg ${
                        isHovered === i ? "border-blue-500 shadow-blue-500/10" : "border-gray-100"
                      }`}
                    >
                      {logo.icon}
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Central Core Content (always on top of background logos) */}
        <div className="relative max-w-[680px] mx-auto z-10 select-text pointer-events-auto">
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-[4.6rem] font-medium tracking-tight text-[#0c1a30] leading-[1.1] mb-8 font-sans font-normal"
          >
            Grow faster with unified tool connectivity
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-[1.15rem] max-w-[540px] mx-auto mb-10 text-gray-500 leading-relaxed"
          >
            Unlock productivity and streamline operations with the voice, spreadsheet, and billing utility integrations you need to scale.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 items-center justify-center relative z-20"
          >
            <button 
              type="button" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[#1D4ED8] hover:scale-105 shadow-md shadow-blue-500/10 group"
            >
              Get started for free
            </button>
            <a 
              href="/tools"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-gray-300 text-gray-700 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:border-gray-900"
            >
              Explore all tools <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </motion.div>
        </div>

      </section>
    </div>
  );
}
