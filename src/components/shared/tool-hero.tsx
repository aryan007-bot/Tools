"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mic, FileQuestion, Film, Wallet, Mail } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Mic, FileQuestion, Film, Wallet, Mail,
};

interface ToolHeroProps {
  name: string;
  tagline: string;
  description: string;
  accentFrom: string;
  accentTo: string;
  accentColor: string;
  iconName?: string;
  icon?: string;
  mockup: React.ReactNode;
}

export function ToolHero({
  name,
  tagline,
  description,
  accentFrom,
  accentTo,
  accentColor,
  iconName,
  icon: iconProp,
  mockup,
}: ToolHeroProps) {
  const resolvedName = iconName || iconProp || "Mic";
  const Icon = iconMap[resolvedName] || Mic;
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${accentFrom}, transparent)` }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: `radial-gradient(circle, ${accentTo}, transparent)` }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: accentColor }}>
                  {tagline}
                </span>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl font-bold font-display leading-[1.05] tracking-tight mb-6"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/pricing"
                className="group px-8 py-4 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex items-center gap-2"
                style={{ backgroundColor: accentColor }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="px-8 py-4 text-gray-700 rounded-xl font-semibold text-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                See Features
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {mockup}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
