"use client";

import { useState } from "react";

export function AlignAccordion() {
  const [activeIdx, setActiveIdx] = useState(0);

  const cards = [
    {
      num: "01.",
      title: "Content Creators",
      desc: "Auto-crop video campaigns, generate caption overlay files, and transcribe speech to structured sheet rows in seconds.",
    },
    {
      num: "02.",
      title: "Financial Ops",
      desc: "Send secure payment mandates, track pending invoice dues, and compile spreadsheet tables instantly.",
    },
    {
      num: "03.",
      title: "Educators & Writers",
      desc: "Compile custom quizzes, compile structured grading sheets, and draft outbound emails or copy templates.",
    },
    {
      num: "04.",
      title: "Developers & Teams",
      desc: "Automate repetitive daily routines, parse complex text formats, and execute scripts securely in sandbox nodes.",
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-2xl leading-tight font-sans">
            <span className="font-serif italic text-gray-300 font-light">Built for teams</span> everywhere. Smarter utilities for faster growth.
          </h2>
        </div>

        {/* Dynamic sliding columns */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[350px]">
          {cards.map((card, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-2xl overflow-hidden flex flex-col bg-[#111111] cursor-pointer group border border-white/5 p-6 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive ? "flex-[3.5] md:flex-[2.5]" : "flex-1 hover:bg-[#151515]"
                }`}
              >
                {/* Number glyph */}
                <div className={`font-serif italic font-bold text-white transition-all duration-300 ${
                  isActive ? "text-4xl md:text-5xl mb-3 text-blue-400" : "text-xl md:mb-4 text-gray-500"
                }`}>
                  {card.num}
                </div>

                {/* Content wrapper */}
                <div className="relative flex-1 w-full h-full pointer-events-none">
                  {/* Expanded description (visible only when active) */}
                  <div className={`absolute inset-0 flex flex-col justify-end transition-all duration-300 text-left ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md">{card.desc}</p>
                  </div>

                  {/* Rotated vertical text on desktop / normal text on mobile (visible only when inactive) */}
                  <div className={`absolute inset-0 flex justify-start md:justify-center items-center transition-all duration-300 ${
                    !isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}>
                    <span 
                      className="text-gray-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase whitespace-nowrap hidden md:block" 
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {card.title}
                    </span>
                    <span className="text-gray-400 text-sm font-bold tracking-[0.1em] uppercase whitespace-nowrap md:hidden">
                      {card.title}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
