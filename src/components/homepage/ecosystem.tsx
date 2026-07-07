"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { tools } from "@/lib/constants/tools";
import {
  Mic,
  FileQuestion,
  Film,
  Wallet,
  Mail,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Mic,
  FileQuestion,
  Film,
  Wallet,
  Mail,
};

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 bg-[#FAF9F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-gray-900 tracking-tight leading-tight">
          Profit Agentz replaces fragmentation <br className="hidden md:block" />
          with a single business system.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex flex-col gap-12 md:gap-24">
          {tools.map((tool, i) => {
            const Icon = iconMap[tool.icon] || Mic;
            const isEven = i % 2 === 1;

            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`sticky grid grid-cols-1 md:grid-cols-2 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.08)] border border-gray-100 bg-white`}
                style={{ 
                  top: `calc(10vh + ${i * 24}px)`,
                  zIndex: i * 10
                }}
              >
                {/* Image Side */}
                <div 
                  className={`flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-[300px] md:min-h-[500px] relative overflow-hidden ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  style={{ backgroundColor: tool.accentFrom }}
                >
                  {tool.image ? (
                     <div className="relative w-full max-w-sm aspect-[4/3] rounded-lg shadow-2xl overflow-hidden bg-white/20">
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                  ) : null}
                </div>

                {/* Text Side */}
                <div className={`flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-[#fafafa] ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-6 md:mb-8 flex items-center justify-center shadow-sm bg-white" style={{ borderRadius: '6px' }}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: tool.accentColor }} />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif text-gray-900 mb-4 md:mb-6 leading-tight">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
