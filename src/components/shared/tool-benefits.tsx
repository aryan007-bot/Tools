"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/dynamic-icon";

interface ToolBenefitsProps {
  benefits: { iconName: string; title: string; description: string }[];
  accentColor: string;
  title?: string;
}

export function ToolBenefits({
  benefits,
  accentColor,
  title = "Why Choose This Tool",
}: ToolBenefitsProps) {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-5">
            {title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${accentColor}15` }}
              >
                <DynamicIcon name={benefit.iconName} className="w-5 h-5" style={{ color: accentColor }} />
              </div>
              <div>
                <h3 className="font-semibold font-display text-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
