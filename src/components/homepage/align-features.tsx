"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useReducedMotion, transitions } from "../animations/motion-config";

export function AlignFeatures() {
  const reduced = useReducedMotion();

  const cards = [
    {
      title: "Voice to Excel 🎙️",
      desc: "Transcribe voice instructions straight into structured spreadsheets. Automate SKU matching, totals calculations, and column formatting in real time.",
      href: "/tools/voice-to-excel",
      glowColor: "group-hover:shadow-emerald-500/5",
    },
    {
      title: "Test Generator 📝",
      desc: "Compile complete academic tests, questionnaires, and answer sheets automatically from reference textbooks or text files.",
      href: "/tools/text-generator",
      glowColor: "group-hover:shadow-amber-500/5",
    },
    {
      title: "Email Assistant ✉️",
      desc: "Write context-aware outbound emails, customize drafts, schedule items, adjust tones, and auto-reply to incoming threads.",
      href: "/tools/email-assistant",
      glowColor: "group-hover:shadow-purple-500/5",
    },
    {
      title: "Fee Collection 💳",
      desc: "Automatically send personalized payment reminders, track dues, and allow customers to pay instantly through secure invoice mandates.",
      href: "/tools/fee-collector",
      glowColor: "group-hover:shadow-blue-500/5",
    },
    {
      title: "AI Core Sandbox ⚙️",
      desc: "All utility tools run on isolated sandbox environments ensuring strict data security and 99.9% uptime compute nodes.",
      href: "/tools",
      glowColor: "group-hover:shadow-cyan-500/5",
    },
  ];

  // Stagger variants for the container of cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { ...transitions.springGentle },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Main Large Dark Card with Ambient Glow */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 md:row-span-2 bg-[#0A0A0A] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between items-start text-white shadow-xl relative overflow-hidden group min-h-[350px] border border-white/5"
          whileHover={reduced ? {} : { y: -8, scale: 1.01 }}
          transition={transitions.spring}
        >
          {/* Ambient Glow */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-500 pointer-events-none" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none select-none" />

          <div className="mt-8 z-10 w-full text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
              Everything you need
            </h2>
            <p className="text-4xl md:text-5xl lg:text-6xl font-sans text-gray-400 font-medium">
              in one unified stack.
            </p>
          </div>

          <Link
            href="/tools"
            className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 z-10 shadow-lg shadow-blue-600/20 group hover:shadow-xl hover:shadow-blue-500/20"
          >
            EXPLORE TOOLS 
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Dynamic Smaller Cards */}
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`rounded-[2rem] bg-white border border-gray-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-500 flex flex-col justify-between text-left relative overflow-hidden group hover:border-gray-200/60 ${card.glowColor}`}
            whileHover={reduced ? {} : {
              y: -10,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0,0,0,0.04), 0 0 25px rgba(37,99,235,0.03)",
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent translate-x-[-100%] skew-x-[-15deg] group-hover:animate-[shimmer-pass_0.8s_ease-out_forwards] pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight leading-snug transition-colors duration-300 group-hover:text-blue-600">
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium mb-6">
                {card.desc}
              </p>
            </div>
            <Link 
              href={card.href}
              className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1 transition-colors self-start mt-auto relative z-10"
            >
              Launch Tool
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
