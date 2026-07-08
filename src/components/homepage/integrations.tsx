"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Model 1", tilt: "-rotate-2" },
  { name: "Model 2", tilt: "rotate-3", icon: "blue-squares" },
  { name: "Model 3", tilt: "-rotate-1" },
  { name: "Model 4", tilt: "rotate-2", icon: "green-sparkle" },
  { name: "Model 5", tilt: "-rotate-3" },
  { name: "Model 6", tilt: "rotate-1" },
  { name: "Model 7", tilt: "-rotate-2", icon: "blue-squares" },
  { name: "Model 8", tilt: "rotate-3" }
];

export function Integrations() {
  return (
    <section className="bg-white py-24 overflow-hidden flex flex-col items-center">
      
      <div className="text-center mb-16 px-6">
        <h2 className="text-[2.25rem] md:text-[2.75rem] font-serif text-[#1F2937] leading-[1.2] mb-4">
          Company logo
        </h2>
        <p className="text-[#6B7280] text-sm md:text-base max-w-[500px] mx-auto">
          ToolStack operates alongside your existing business infrastructure <br />
          today, and can absorb more of the stack over time.
        </p>
      </div>

      {/* Scattered Marquee Row */}
      <div className="relative w-full overflow-hidden mt-8 flex justify-start">
        <motion.div 
          className="flex items-center gap-12 px-4 whitespace-nowrap min-w-max"
          animate={{
            x: [0, "-50%"]
          }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity
          }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center gap-8">
              
              {/* Partner Card on Graph Paper */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
                className={`
                  bg-[#FFFEF9] border border-gray-100 shadow-sm
                  w-40 h-24 flex items-center justify-center gap-2 
                  ${partner.tilt} transition-transform duration-300
                  relative overflow-hidden
                `}
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: '12px 12px'
                }}
              >
                 <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800 text-sm tracking-tight">{partner.name}</span>
                 </div>
              </motion.div>

              {/* Floating Decorative Icons */}
              {partner.icon === "blue-squares" && (
                <div className="w-8 h-8 rotate-12 flex flex-wrap gap-0.5">
                   <div className="w-3.5 h-3.5 bg-blue-400" />
                   <div className="w-3.5 h-3.5 bg-cyan-400" />
                   <div className="w-3.5 h-3.5 bg-indigo-500" />
                   <div className="w-3.5 h-3.5 bg-blue-500" />
                </div>
              )}
              {partner.icon === "green-sparkle" && (
                <svg viewBox="0 0 100 100" className="w-10 h-10 animate-pulse text-[#0AEB9A] -rotate-12">
                   <defs>
                     <linearGradient id="green-sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                       <stop offset="0%" stopColor="#0AEB9A" />
                       <stop offset="100%" stopColor="#10B981" />
                     </linearGradient>
                   </defs>
                   <path
                     d="M 50 0 C 50 35, 65 50, 100 50 C 65 50, 50 65, 50 100 C 50 65, 35 50, 0 50 C 35 50, 50 35, 50 0 Z"
                     fill="url(#green-sparkle-grad)"
                   />
                </svg>
              )}
              
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}
