"use client";

import { motion } from "framer-motion";

export function AlignStats() {
  const stats = [
    { label: "75%", desc: "Manual work saved" },
    { label: "10x", desc: "Faster workflows" },
    { label: "0", desc: "Complex setups required" },
    { label: "100%", desc: "Dedicated cloud SLA" },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4 pt-6 md:pt-0"
            >
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2 font-sans tracking-tight">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
