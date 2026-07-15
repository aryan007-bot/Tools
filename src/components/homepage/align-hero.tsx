"use client";

import { useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "../animations/aurora-background";
import { FloatingParticles } from "../animations/floating-particles";
import {
  transitions,
  wordRevealContainer,
  wordRevealChild,
  fadeSlideUp,
  useRelativeMousePosition,
  useReducedMotion,
} from "../animations/motion-config";

// ═══════════════════════════════════════════════════
// ORBIT GEOMETRY
// ═══════════════════════════════════════════════════
const X_RADIUS_PCT = 42;
const Y_RADIUS_PCT = 34;
const ORBIT_DURATION = 100;

function getOrbitPosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    xPct: 50 + X_RADIUS_PCT * Math.cos(angle),
    yPct: 50 + Y_RADIUS_PCT * Math.sin(angle),
  };
}

// ═══════════════════════════════════════════════════
// INTEGRATION LOGOS
// ═══════════════════════════════════════════════════
const INTEGRATION_LOGOS = [
  { name: "Rippling", icon: <span className="text-sm md:text-lg font-black text-[#5C2D91]">R</span> },
  { name: "UKG", icon: <span className="text-sm md:text-lg font-black text-[#005A9C]">UKG</span> },
  { name: "Workday", icon: <span className="text-sm md:text-lg font-black text-[#007A87]">W</span> },
  { name: "Hubspot", icon: <span className="text-sm md:text-lg font-black text-[#FF7A59]">Hub</span> },
  { name: "Salesforce", icon: <span className="text-sm md:text-lg font-black text-[#00A1E0]">SF</span> },
  { name: "Notion", icon: <span className="text-sm md:text-lg font-black text-black">N</span> },
  { name: "Slack", icon: <span className="text-sm md:text-lg font-black text-[#4A154B]">S</span> },
  { name: "Linear", icon: <span className="text-sm md:text-lg font-black text-[#5E6AD2]">L</span> },
  { name: "Stripe", icon: <span className="text-sm md:text-lg font-black text-[#635BFF]">S</span> },
  { name: "Trello", icon: <span className="text-sm md:text-lg font-black text-[#0079BF]">T</span> },
];

// ═══════════════════════════════════════════════════
// TOOL NODE IMAGES — each with unique motion config
// ═══════════════════════════════════════════════════
const TOOL_NODES = [
  { image: "/WhatsApp Image 2026-06-20 at 10.43.38 PM (1).jpeg", label: "VOICE_EXCEL", name: "Voice To Excel", color: "#10b981", position: "top-[18%] left-[8%]", floatDuration: 5.2, floatDelay: 0, rotateRange: 3 },
  { image: "/WhatsApp Image 2026-06-20 at 10.43.38 PM.jpeg", label: "TEST_GEN", name: "Test Generator", color: "#f59e0b", position: "top-[35%] left-[5%]", floatDuration: 4.8, floatDelay: -1.5, rotateRange: 4 },
  { image: "/WhatsApp Image 2026-06-20 at 10.43.39 PM (1).jpeg", label: "EMAIL_AUTO", name: "Email Assistant", color: "#8b5cf6", position: "top-[55%] left-[3%]", floatDuration: 5.5, floatDelay: -3, rotateRange: 2 },
  { image: "/WhatsApp Image 2026-06-20 at 10.43.39 PM.jpeg", label: "FEE_COLL", name: "Fee Collector", color: "#3b82f6", position: "top-[70%] left-[8%]", floatDuration: 6, floatDelay: -0.5, rotateRange: 5 },
  { image: "/WhatsApp Image 2026-06-20 at 10.43.38 PM (1).jpeg", label: "VOICE_EXCEL", name: "Voice To Excel", color: "#10b981", position: "top-[18%] right-[8%]", floatDuration: 4.5, floatDelay: -2, rotateRange: 3 },
  { image: "/WhatsApp Image 2026-06-20 at 10.43.38 PM.jpeg", label: "TEST_GEN", name: "Test Generator", color: "#06b6d4", position: "top-[70%] right-[5%]", floatDuration: 5.8, floatDelay: -4, rotateRange: 2 },
  { image: "/WhatsApp Image 2026-06-20 at 10.43.39 PM (1).jpeg", label: "EMAIL_AUTO", name: "Email Assistant", color: "#f59e0b", position: "top-[45%] right-[3%]", floatDuration: 5, floatDelay: -1, rotateRange: 4 },
  { image: "/WhatsApp Image 2026-06-20 at 10.43.39 PM.jpeg", label: "FEE_COLL", name: "Fee Collector", color: "#f43f5e", position: "bottom-[20%] right-[10%]", floatDuration: 4.2, floatDelay: -3.5, rotateRange: 3 },
];

// ═══════════════════════════════════════════════════
// TOOL NODE FLOATING LINKS
// ═══════════════════════════════════════════════════
const TOOL_LINKS = [
  { href: "/tools/voice-to-excel", label: "Voice to Excel", image: "/WhatsApp Image 2026-06-20 at 10.43.38 PM (1).jpeg", color: "#10b981", position: "top-[26%] left-[8%]" },
  { href: "/tools/text-generator", label: "Test Generator", image: "/WhatsApp Image 2026-06-20 at 10.43.38 PM.jpeg", color: "#f59e0b", position: "top-[26%] right-[8%]" },
  { href: "/tools/email-assistant", label: "Email Assistant", image: "/WhatsApp Image 2026-06-20 at 10.43.39 PM (1).jpeg", color: "#8b5cf6", position: "bottom-[26%] left-[10%]" },
  { href: "/tools/fee-collector", label: "Fee Collector", image: "/WhatsApp Image 2026-06-20 at 10.43.39 PM.jpeg", color: "#3b82f6", position: "bottom-[22%] right-[10%]" },
];

// ═══════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════
export function AlignHero() {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mouse = useRelativeMousePosition(heroRef);
  const reduced = useReducedMotion();

  const positions = useMemo(
    () => INTEGRATION_LOGOS.map((_, i) => getOrbitPosition(i, INTEGRATION_LOGOS.length)),
    []
  );

  const headlineWords = "Grow faster with unified utility tools".split(" ");

  // Parallax offsets based on mouse position
  const parallaxSlow = reduced ? { x: 0, y: 0 } : { x: mouse.x * 8, y: mouse.y * 6 };
  const parallaxFast = reduced ? { x: 0, y: 0 } : { x: mouse.x * 15, y: mouse.y * 12 };

  return (
    <div ref={heroRef} className="relative bg-[#fafafa] overflow-hidden min-h-screen">
      {/* Aurora gradient background */}
      <AuroraBackground intensity="medium" />

      {/* Floating particles */}
      <FloatingParticles count={18} className="z-0" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Floating Developer Tool Nodes (with cursor parallax + glow) */}
      {TOOL_NODES.map((node, i) => (
        <motion.div
          key={i}
          className={`absolute ${node.position} z-20 cursor-pointer select-none hidden lg:block`}
          animate={{
            y: reduced ? 0 : [0, -8, 0],
            rotate: reduced ? 0 : [-node.rotateRange, node.rotateRange, -node.rotateRange],
            x: parallaxFast.x * (0.3 + i * 0.08),
          }}
          transition={{
            y: { repeat: Infinity, duration: node.floatDuration, ease: "easeInOut", delay: node.floatDelay },
            rotate: { repeat: Infinity, duration: node.floatDuration * 1.5, ease: "easeInOut" },
            x: { type: "spring", stiffness: 50, damping: 30 },
          }}
          whileHover={{ scale: 1.08 }}
        >
          <div className="flex items-center gap-3 p-2.5 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
            <motion.div
              className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden flex-shrink-0"
              animate={{ rotate: [-node.rotateRange, node.rotateRange, -node.rotateRange] }}
              transition={{ repeat: Infinity, duration: node.floatDuration * 1.5, ease: "easeInOut" }}
            >
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-xl animate-glow-pulse"
                style={{ boxShadow: `0 0 12px ${node.color}20` }}
              />
              <img src={node.image} alt={node.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col text-left pr-2">
              <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">{node.label}</span>
              <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1.5">
                {node.name}
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: node.color }} />
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Hero Content Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-44 pb-28 md:pt-60 md:pb-40 text-center min-h-[720px] md:min-h-[860px] flex flex-col items-center justify-center z-10">

        {/* Floating Tool Links */}
        {TOOL_LINKS.map((link, i) => (
          <Link key={i} href={link.href}>
            <motion.div
              animate={{
                y: reduced ? 0 : [0, -8, 0],
                x: parallaxSlow.x * (0.4 + i * 0.1),
              }}
              transition={{
                y: { duration: 4.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                x: { type: "spring", stiffness: 50, damping: 30 },
              }}
              className={`absolute hidden xl:flex items-center gap-2.5 px-4.5 py-2.5 bg-white border border-gray-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] z-30 ${link.position} cursor-pointer hover:border-gray-400 hover:shadow-md transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="w-5 h-5 rounded-md overflow-hidden border border-gray-150 flex items-center justify-center relative flex-shrink-0">
                <img src={link.image} alt={link.label} className="w-full h-full object-cover" />
              </div>
              <span className="text-[11px] font-bold text-gray-800 font-mono tracking-tight">
                {link.label}
              </span>
            </motion.div>
          </Link>
        ))}

        {/* Slow Rotating Orbit Ring Background */}
        <div className="absolute top-12 md:top-24 bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          {/* Orbit glow ring */}
          <div className="absolute w-[500px] h-[500px] md:w-[950px] md:h-[950px] rounded-full border border-gray-200/20 animate-glow-pulse" style={{ boxShadow: "0 0 40px rgba(37,99,235,0.03)" }} />

          <motion.div
            animate={reduced ? {} : { rotate: 360 }}
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
                    animate={reduced ? {} : { rotate: -360 }}
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

        {/* Central Core Content */}
        <motion.div
          className="relative max-w-[680px] mx-auto z-10 select-text pointer-events-auto"
          animate={{ x: parallaxSlow.x, y: parallaxSlow.y }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        >
          {/* Staggered Word Reveal Headline */}
          <motion.h1
            variants={wordRevealContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-[4.6rem] font-medium tracking-tight text-[#0c1a30] leading-[1.1] mb-8 font-sans flex flex-wrap justify-center gap-x-[0.3em]"
          >
            {headlineWords.map((word, i) => (
              <motion.span key={i} variants={wordRevealChild} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Supporting Copy — blur fade in */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...transitions.easeOutExpo, delay: 0.5 }}
            className="text-base sm:text-lg md:text-[1.15rem] max-w-[540px] mx-auto mb-10 text-gray-500 leading-relaxed"
          >
            Unlock productivity and streamline operations with the voice, spreadsheet, and billing utility integrations you need to scale.
          </motion.p>

          {/* CTA Buttons — staggered slide in */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitions.smooth, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 items-center justify-center relative z-20"
          >
            <motion.button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[#1D4ED8] shadow-md shadow-blue-500/10 group"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(37,99,235,0.25)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get started for free
            </motion.button>
            <motion.a
              href="/tools"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-gray-300 text-gray-700 text-sm font-semibold rounded-full transition-all duration-300 hover:border-gray-900"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore all tools <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>

      </section>
    </div>
  );
}
