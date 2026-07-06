"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Paperclip,
} from "lucide-react";
import { useMouseParallax } from "@/hooks/use-parallax";
import { tools } from "@/lib/constants/tools";

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

function formatToolList(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

export function Hero() {
  const mouse = useMouseParallax(0.03);

  const positions = useMemo(
    () => HERO_IMAGES.map((_, i) => getOrbitPosition(i, HERO_IMAGES.length)),
    []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-[#FAF9F5]">
      {/* Background gradient orbs removed to keep the solid warm cream background clean */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200/50 shadow-sm text-xs font-semibold text-gray-700 mb-8 backdrop-blur-sm select-none">
                <span
                  className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                  aria-hidden="true"
                />
                Now available — {tools.length} tools, 1 platform
              </span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-medium font-serif leading-[1.12] tracking-tight text-gray-900 mb-6 lg:max-w-xl"
            >
              The{" "}
              <span className="inline-block bg-[#B3A4FF] px-3.5 py-0.5 rounded-[4px] text-gray-900 border border-black/5 mx-1 select-none align-baseline leading-none">
                AI
              </span>{" "}
              operating
              <br />
              system for{" "}
              <span className="inline-block bg-[#48E395] px-5 py-1.5 rounded-[1.5rem] text-gray-900 border border-black/5 mx-1 select-none align-baseline leading-none">
                education
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-sans"
            >
              Kira runs instruction, assessment, and intervention as one connected
              system, replacing the tool sprawl that keeps educators from focusing on
              what actually works.
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
                className="px-8 py-4 text-gray-700 rounded-xl font-semibold text-sm border border-gray-200 hover:border-gray-300 hover:bg-white/60 hover:bg-white transition-all duration-200"
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
                      className="absolute"
                      style={{
                        left: `${pos.xPct}%`,
                        top: `${pos.yPct}%`,
                        transform: "translate(-50%, -50%)",
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
                        className="w-16 h-16 sm:w-[88px] sm:h-[88px]"
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
                            className="w-full h-full rounded-[1.5rem] sm:rounded-[1.8rem] overflow-hidden bg-white border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] cursor-pointer rotate-[12deg] transition-all duration-300 relative group"
                          >
                            <Image
                              src={imgUrl}
                              alt={`Model ${i + 1}`}
                              fill
                              sizes="(max-width: 640px) 64px, 88px"
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

              {/* Center Upload zone — fixed, never rotates, always on top */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                className="absolute left-1/2 top-1/2 z-10 flex flex-col items-center justify-center"
                style={{ x: "-50%", y: "-50%" }}
              >
                <div 
                  onClick={() => document.getElementById("hero-file-input")?.click()}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-white border border-gray-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex items-center justify-center cursor-pointer hover:border-gray-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-300 group relative"
                >
                  <Image
                    src="/Untitled_design-removebg-preview.png"
                    alt="Company logo"
                    width={48}
                    height={48}
                    priority
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Text positioned absolutely below the card to avoid shifting the card vertically */}
                 
                </div>
                <input 
                  type="file" 
                  id="hero-file-input" 
                  className="hidden" 
                  accept="image/*" 
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      alert(`Selected file: ${file.name}`);
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}