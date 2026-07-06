"use client";

import { motion } from "framer-motion";
import { homepageFaq } from "@/lib/constants/faq";
import { FaqSection } from "@/components/ui/faq-section";

export function HomePageFaq() {
  return (
    <section className="py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl font-bold font-display tracking-tight">
            Common questions
          </h2>
        </motion.div>

        <FaqSection faqs={homepageFaq} />
      </div>
    </section>
  );
}
