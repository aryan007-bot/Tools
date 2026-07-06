"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/types";
import { cn } from "@/lib/utils";

interface FaqSectionProps {
  faqs: FAQ[];
  accentColor?: string;
  className?: string;
}

export function FaqSection({ faqs, accentColor = "#10b981", className }: FaqSectionProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className={cn("space-y-3", className)}>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="border border-gray-200/60 rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm transition-all duration-200 hover:border-gray-300/60"
        >
          <button
            onClick={() => setOpen(open === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="font-medium text-gray-900 text-[15px] pr-4">
              {faq.question}
            </span>
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              style={{ backgroundColor: open === faq.id ? `${accentColor}15` : "#f3f4f6" }}
            >
              {open === faq.id ? (
                <Minus className="w-3.5 h-3.5" style={{ color: accentColor }} />
              ) : (
                <Plus className="w-3.5 h-3.5 text-gray-500" />
              )}
            </div>
          </button>
          <AnimatePresence>
            {open === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
