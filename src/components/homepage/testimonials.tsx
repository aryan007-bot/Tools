"use client";

import { testimonials } from "@/lib/constants/testimonials";
import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium font-serif tracking-tight text-gray-900">
            Loved by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 font-serif">
              thousands
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="space-y-6">
        <Marquee speed={40}>
          {testimonials.slice(0, 4).map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[380px] rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-sm p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{t.content}</p>
            </div>
          ))}
        </Marquee>
        <Marquee speed={35}>
          {testimonials.slice(4).map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[380px] rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-sm p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{t.content}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
