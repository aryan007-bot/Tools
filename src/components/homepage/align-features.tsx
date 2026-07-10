"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AlignFeatures() {
  const cards = [
    {
      title: "Voice to Excel 🎙️",
      desc: "Transcribe voice instructions straight into structured spreadsheets. Automate SKU matching, totals calculations, and column formatting in real time.",
      href: "/voice-to-excel",
    },
    {
      title: "Test Generator 📝",
      desc: "Compile complete academic tests, questionnaires, and answer sheets automatically from reference textbooks or text files.",
      href: "/test-generator",
    },
    {
      title: "Email Assistant ✉️",
      desc: "Write context-aware outbound emails, customize drafts, schedule items, adjust tones, and auto-reply to incoming threads.",
      href: "/email-assistant",
    },
    {
      title: "Fee Collection 💳",
      desc: "Automatically send personalized payment reminders, track dues, and allow customers to pay instantly through secure invoice mandates.",
      href: "/fee-collection",
    },
    {
      title: "AI Core Sandbox ⚙️",
      desc: "All utility tools run on isolated sandbox environments ensuring strict data security and 99.9% uptime compute nodes.",
      href: "/tools",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Large Dark Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 md:row-span-2 bg-[#0A0A0A] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between items-start text-white shadow-xl relative overflow-hidden group min-h-[350px]"
        >
          {/* Ambient Glow */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] group-hover:bg-blue-600/25 transition-colors duration-500 pointer-events-none" />

          <div className="mt-8 z-10 w-full text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
              Everything you need
            </h2>
            <p className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-light text-gray-400">
              in one unified stack.
            </p>
          </div>

          <Link
            href="/tools"
            className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 z-10 shadow-lg shadow-blue-600/20 group"
          >
            EXPLORE TOOLS 
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Dynamic Smaller Cards */}
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
            className="rounded-[2rem] bg-white border border-gray-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-gray-200/50 transition-all duration-300 flex flex-col justify-between text-left"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight leading-snug">
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium mb-6">
                {card.desc}
              </p>
            </div>
            <Link 
              href={card.href}
              className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1 transition-colors self-start mt-auto"
            >
              Launch Tool
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
