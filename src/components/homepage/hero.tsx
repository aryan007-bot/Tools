"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Mic,
  FileQuestion,
  Film,
  Wallet,
  Mail,
  CalendarCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useMouseParallax } from "@/hooks/use-parallax";
import { tools } from "@/lib/constants/tools";

const ICON_MAP: Record<string, LucideIcon> = {
  Mic,
  FileQuestion,
  Film,
  Wallet,
  Mail,
  CalendarCheck,
  Sparkles,
};

// Orbit geometry — every value below is derived from `tools.length`, so
// adding or removing a tool reflows the ring automatically. No coordinates
// to hand-maintain, and no risk of a node rendering with `undefined` position
// (which is what happens with a hardcoded array once the data outgrows it).
const ORBIT_RADIUS_PCT = 40; // distance from center, as a % of the orbit box
const NODE_SIZE = 64; // px, orbiting tool icon
const CENTER_SIZE = 88; // px, center logo — intentionally larger than a node
const ORBIT_DURATION = 40; // seconds per full revolution

function getOrbitPosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // 0 = 12 o'clock
  return {
    xPct: 50 + ORBIT_RADIUS_PCT * Math.cos(angle),
    yPct: 50 + ORBIT_RADIUS_PCT * Math.sin(angle),
  };
}

function formatToolList(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

export function Hero() {
  const mouse = useMouseParallax(0.03);

  const positions = useMemo(
    () => tools.map((_, i) => getOrbitPosition(i, tools.length)),
    [tools]
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background gradient orbs */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-gray-100/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-700 mb-8">
                <span
                  className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                  aria-hidden="true"
                />
                Now available — {tools.length} tools, 1 platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-6"
            >
              Multiple AI Tools.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500">
                One Platform.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              {formatToolList(tools.map((tool) => tool.name))} — unified in a
              single subscription built for modern professionals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/login"
                className="group px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex items-center gap-2"
              >
                Get Started
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/tools"
                className="px-8 py-4 text-gray-700 rounded-xl font-semibold text-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                Explore Tools
              </Link>
            </motion.div>
          </div>

          {/* Right - Orbit */}
          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[500px]">
            <motion.div
              className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
              style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              {/* Rotating ring of tools */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: ORBIT_DURATION,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 origin-center"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="orbit-line-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <motion.circle
                    cx="50"
                    cy="50"
                    r={ORBIT_RADIUS_PCT}
                    fill="none"
                    stroke="url(#orbit-line-gradient)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>

                {tools.map((tool, i) => {
                  const Icon = ICON_MAP[tool.icon] ?? Sparkles;
                  const pos = positions[i];
                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + i * 0.12,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute"
                      style={{
                        left: `calc(${pos.xPct}% - ${NODE_SIZE / 2}px)`,
                        top: `calc(${pos.yPct}% - ${NODE_SIZE / 2}px)`,
                        width: NODE_SIZE,
                        height: NODE_SIZE,
                      }}
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
                        <Link
                          href={tool.slug}
                          aria-label={tool.name}
                          className="block w-full h-full"
                        >
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              y: {
                                duration: 3 + i * 0.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }}
                            className="w-full h-full rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center cursor-pointer group relative"
                          >
                            {tool.image ? (
                              <Image
                                src={tool.image}
                                alt={tool.name}
                                width={28}
                                height={28}
                                className="w-7 h-7 object-contain transition-transform duration-300"
                              />
                            ) : (
                              <Icon
                                className="w-7 h-7 transition-transform duration-300"
                                style={{ color: tool.accentColor }}
                                aria-hidden="true"
                              />
                            )}
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                              {tool.name}
                            </span>
                            <span
                              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{
                                boxShadow: `0 0 30px ${tool.accentColor}30`,
                              }}
                              aria-hidden="true"
                            />
                          </motion.div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Center logo — fixed, never rotates, always on top */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                className="absolute z-10 flex items-center justify-center rounded-full bg-white shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
                style={{
                  width: CENTER_SIZE,
                  height: CENTER_SIZE,
                  left: `calc(50% - ${CENTER_SIZE / 2}px)`,
                  top: `calc(50% - ${CENTER_SIZE / 2}px)`,
                }}
              >
                <Image
                  src="/Untitled_design-removebg-preview.png"
                  alt="Company logo"
                  width={56}
                  height={56}
                  priority
                  className="h-14 w-14 object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}