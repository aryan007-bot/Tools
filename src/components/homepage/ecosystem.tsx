"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { tools } from "@/lib/constants/tools";
import {
  Mic,
  FileQuestion,
  Film,
  Wallet,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Mic,
  FileQuestion,
  Film,
  Wallet,
  Mail,
};

export function Ecosystem() {
  return (
    <section id="tools" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
            The Ecosystem
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-5">
            Multiple tools.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500">
              Infinite possibilities.
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each tool is purpose-built for excellence. Together, they form
            the complete productivity stack for modern businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => {
            const Icon = iconMap[tool.icon] || Mic;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={i === 0 ? "lg:col-span-2" : ""}
              >
                <Link href={tool.slug}>
                  <div className="group relative h-full rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-xl p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-gray-300/60 hover:-translate-y-2 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(800px circle at 0% 0%, ${tool.accentFrom}08, transparent 50%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                          style={{
                            background: `linear-gradient(135deg, ${tool.accentFrom}20, ${tool.accentTo}20)`,
                          }}
                        >
                          {tool.image ? (
                            <Image
                              src={tool.image}
                              alt={tool.name}
                              width={24}
                              height={24}
                              className="w-6 h-6 object-contain"
                            />
                          ) : (
                            <Icon
                              className="w-6 h-6"
                              style={{ color: tool.accentColor }}
                            />
                          )}
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>

                      <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium mb-4" style={{ color: tool.accentColor }}>
                        {tool.tagline}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {tool.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {tool.features.slice(0, 3).map((f) => (
                          <span
                            key={f}
                            className="text-xs px-3 py-1.5 rounded-lg bg-gray-100/85 text-gray-600 font-medium"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
