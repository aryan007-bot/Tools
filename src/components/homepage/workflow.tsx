"use client";

import { motion } from "framer-motion";
import { User, Search, CreditCard, Wrench, BarChart3 } from "lucide-react";

const steps = [
  { icon: User, label: "Create Account", description: "Sign up in seconds" },
  { icon: Search, label: "Select Tool", description: "Pick what you need" },
  { icon: CreditCard, label: "Subscribe", description: "Choose your plan" },
  { icon: Wrench, label: "Use Tool", description: "Start creating" },
  { icon: BarChart3, label: "Get Results", description: "Export & grow" },
];

export function Workflow() {
  return (
    <section className="py-32 relative overflow-hidden bg-gray-50/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-5">
            From signup to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
              results
            </span>{" "}
            in minutes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No complex onboarding. No learning curve. Just powerful tools
            ready to work the moment you start.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center relative z-10"
                >
                  <step.icon className="w-6 h-6 text-gray-700" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </motion.div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {step.label}
                </h4>
                <p className="text-xs text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
