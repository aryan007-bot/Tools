"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMouseParallax } from "@/hooks/use-parallax";

const HERO_IMAGES = [
  "https://cdn.prod.website-files.com/6936c73d0da5b3bc5bb89ca4/6939a23c6723eadc91210ade_6d965782e0ccedbe7d7bd322d202488d_hero-load-04.avif",
  "https://cdn.prod.website-files.com/6936c73d0da5b3bc5bb89ca4/6939a23c04412d3f16007b22_f28274dae9c94f66d31e483913bb79d4_hero-load-07.avif",
  "https://cdn.prod.website-files.com/6936c73d0da5b3bc5bb89ca4/6939a23c4fc089b2812b9d5c_62ddd7be268edacfe9c9dc778fecafe6_hero-load-05.avif",
  "https://cdn.prod.website-files.com/6936c73d0da5b3bc5bb89ca4/6939a23cab969012e24ba09f_c04b802c31239400042e400a54d04909_hero-load-01.avif",
  "https://cdn.prod.website-files.com/6936c73d0da5b3bc5bb89ca4/6939a23c78d0b447681dd9f5_hero-load-08.avif",
  "https://cdn.prod.website-files.com/6936c73d0da5b3bc5bb89ca4/6939a23cf317e2c1522cced9_8641f04d89cd55c8eebf8497f27a1aa3_hero-load-02.avif",
  "https://cdn.prod.website-files.com/6936c73d0da5b3bc5bb89ca4/6939a23cc0f89e21b0fe7c98_795e9025f45162bfde189191421814cf_hero-load-06.avif",
  "https://cdn.prod.website-files.com/6936c73d0da5b3bc5bb89ca4/6939a23c4a9e3e28661c0ceb_38a07b3bf64cc9acf342df9a33b937e4_hero-load-03.avif",
];

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

export function Hero() {
  const mouse = useMouseParallax(0.03);

  const positions = useMemo(
    () => HERO_IMAGES.map((_, i) => getOrbitPosition(i, HERO_IMAGES.length)),
    []
  );

  return (
    <section className="relative overflow-hidden pt-16 lg:pt-24 pb-20 lg:pb-28 bg-[#FAF9F5]">
      {/* Background decoration lines / blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-200/10 to-cyan-200/10 rounded-full blur-3xl" />
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
              {/* Rotating ring of fashion models */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: ORBIT_DURATION,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 origin-center"
              >
                {HERO_IMAGES.map((imgUrl, i) => {
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
                            className="w-full h-full rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden bg-white border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] cursor-pointer rotate-[12deg] transition-all duration-300 relative group"
                          >
                            <Image
                              src={imgUrl}
                              alt={`Model ${i + 1}`}
                              fill
                              sizes="(max-width: 640px) 76px, 98px"
                              className="object-cover scale-[1.3] rotate-[-12deg] transition-transform duration-500 group-hover:scale-[1.4]"
                              priority={i < 2}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
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