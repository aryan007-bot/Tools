"use client";

import { testimonials } from "@/lib/constants/testimonials";
import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-32 bg-[#FAF9F5] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#111827] mb-6 font-serif">
              Loved by <br />
              <span className="text-gray-400 font-serif">thousands</span>
            </h2>
            <p className="text-lg text-gray-500 font-sans max-w-lg mb-8">
              Join thousands of professionals who trust our platform to handle
              their most critical workflows, data, and assets securely.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-kira-dark" />
                <span className="text-sm font-medium text-gray-700">Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-kira-dark" />
                <span className="text-sm font-medium text-gray-700">Privacy First</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial preview / stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-100 flex gap-6 items-center">
              <div className="text-5xl font-semibold text-[#111827]">99%</div>
              <div className="text-sm text-gray-500 leading-snug">
                Customer <br/> satisfaction rate
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-kira-light/30 border border-kira/10 flex gap-6 items-center">
              <div className="text-5xl font-semibold text-[#111827]">10k+</div>
              <div className="text-sm text-gray-500 leading-snug">
                Active daily <br/> professionals
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="space-y-6 mt-16 relative">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF9F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF9F5] to-transparent z-10 pointer-events-none" />

        <Marquee speed={40}>
          {testimonials.slice(0, 4).map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[400px] rounded-2xl border border-gray-200 bg-white p-8 mx-3 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-base font-medium text-gray-600">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-base font-semibold text-[#111827]">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-sans">{t.content}</p>
            </div>
          ))}
        </Marquee>
        <Marquee speed={35}>
          {testimonials.slice(4).map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[400px] rounded-2xl border border-gray-200 bg-white p-8 mx-3 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-base font-medium text-gray-600">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-base font-semibold text-[#111827]">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-sans">{t.content}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
