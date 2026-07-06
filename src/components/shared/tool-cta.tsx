"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ToolCtaProps {
  name: string;
  accentColor: string;
}

export function ToolCta({ name, accentColor }: ToolCtaProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, ${accentColor}40, transparent 70%)`,
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight mb-6">
            Ready to try {name}?
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            Start for free. No credit card required. Upgrade when you&apos;re ready.
          </p>
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
