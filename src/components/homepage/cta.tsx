"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight mb-6">
            Ready to transform
            <br />
            your workflow?
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            Join thousands of professionals who use ToolStack to work
            smarter, faster, and better every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              href="/login"
              className="group px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,255,255,0.1)] flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-white rounded-xl font-semibold text-sm border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
