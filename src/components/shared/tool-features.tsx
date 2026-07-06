"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/dynamic-icon";

interface ToolFeaturesProps {
  features: { iconName: string; title: string; description: string }[];
  accentColor: string;
  title?: string;
  subtitle?: string;
}

export function ToolFeatures({
  features,
  accentColor,
  title = "Powerful Features",
  subtitle = "Everything you need to get work done efficiently.",
}: ToolFeaturesProps) {
  return (
    <section id="features" className="py-32 relative bg-gray-50/50">
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-xl p-8 transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-2"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${accentColor}15` }}
              >
                <DynamicIcon name={feature.iconName} className="w-5 h-5" style={{ color: accentColor }} />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
