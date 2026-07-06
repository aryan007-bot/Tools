"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png", // Flat Avatar
    label: "Create Account",
    description: "Sign up in seconds",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png", // Flat Magnifying Glass/Search
    label: "Select Tool",
    description: "Pick what you need",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/147/147258.png", // Flat Credit Card
    label: "Subscribe",
    description: "Choose your plan",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png", // Flat crossed tools
    label: "Use Tool",
    description: "Start creating",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/428/428032.png", // Flat Growth Chart
    label: "Get Results",
    description: "Export & grow",
  },
];

export function Workflow() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#FAF9F5] border-t border-gray-100">
      {/* Decorative purple background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(168,85,247,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-20%,rgba(124,58,237,0.04),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium font-serif tracking-tight mb-5 text-gray-900">
            From signup to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 font-serif">
              results
            </span>{" "}
            in minutes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            No complex onboarding. No learning curve. Just powerful tools
            ready to work the moment you start.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line centered with the icons */}
          <div className="hidden lg:block absolute top-[64px] left-12 right-12 h-[3px] bg-gradient-to-r from-purple-100 via-purple-300 to-purple-100" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center group p-6 sm:p-8 rounded-3xl border border-gray-200/50 bg-white/60 backdrop-blur-md hover:border-purple-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(168,85,247,0.06)] hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 mb-6 rounded-2xl bg-purple-50 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-100/80">
                  
                  <Image
                    src={step.iconUrl}
                    alt={step.label}
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-300"
                  />
                  
                  <div className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shadow-[0_4px_12px_rgba(124,58,237,0.3)]">
                    {i + 1}
                  </div>
                </div>
                
                {/* Description */}
                <h4 className="font-bold text-gray-900 text-base mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {step.label}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
