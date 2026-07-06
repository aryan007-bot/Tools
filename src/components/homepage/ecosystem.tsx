"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { tools } from "@/lib/constants/tools";
import {
  Mic,
  FileQuestion,
  Film,
  Wallet,
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Mic,
  FileQuestion,
  Film,
  Wallet,
  Mail,
};

// Triple the tools array to support infinite scrolling in both directions
const extendedTools = [...tools, ...tools, ...tools];

export function Ecosystem() {
  // Start activeIndex at the first item of the middle copy (index 5)
  const [activeIndex, setActiveIndex] = useState(5);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(580);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardWidth(w - 48); // Screen width minus margins on mobile
      } else if (w < 768) {
        setCardWidth(440);
      } else if (w < 1024) {
        setCardWidth(500);
      } else {
        setCardWidth(580);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  const resetAutoplay = useCallback(() => {
    startAutoplay();
  }, [startAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [startAutoplay]);

  // Jump reset logic for infinite loop
  useEffect(() => {
    // If we've scrolled into the third copy (index >= 10), reset to the middle copy (index 5)
    if (activeIndex >= 10) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(5);
      }, 700); // Wait for transition duration (700ms)
      return () => clearTimeout(timer);
    }
    // If we've scrolled into the first copy (index <= 4), reset to the middle copy (index 9)
    if (activeIndex <= 4) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(9);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  // Re-enable transition after jump reset has completed
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleManualSelect = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index);
    resetAutoplay();
  };

  const handlePrev = () => {
    prevSlide();
    resetAutoplay();
  };

  const handleNext = () => {
    nextSlide();
    resetAutoplay();
  };

  // Touch swiping support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  // Map activeIndex (0 to 14) to tools index (0 to 4) for pagination dots
  const activeDotIndex = activeIndex % 5;

  return (
    <section id="tools" className="py-32 relative overflow-hidden bg-[#FAF9F5]/40 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
            The Ecosystem
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-5 text-gray-900">
            Multiple tools.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B3A4FF] to-[#48E395]">
              Infinite possibilities.
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each tool is purpose-built for excellence. Together, they form
            the complete productivity stack for modern businesses.
          </p>
        </motion.div>
      </div>

      {/* Carousel Track Section */}
      <div className="relative w-full overflow-hidden py-6 group">
        
        {/* Floating Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-7xl mx-auto px-6 pointer-events-none flex justify-between z-20">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white/95 backdrop-blur-md items-center justify-center text-gray-600 hover:bg-white hover:border-gray-300 hover:shadow-lg active:scale-95 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-auto hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white/95 backdrop-blur-md items-center justify-center text-gray-600 hover:bg-white hover:border-gray-300 hover:shadow-lg active:scale-95 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-auto hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Track */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex gap-6 ${isTransitioning ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" : ""}`}
          style={{
            transform: `translateX(calc(50% - ${activeIndex * (cardWidth + 24)}px - ${cardWidth / 2}px))`,
          }}
        >
          {extendedTools.map((tool, i) => {
            const Icon = iconMap[tool.icon] || Mic;
            const isActive = i === activeIndex;
            return (
              <div
                key={`${tool.id}-${i}`}
                onClick={() => !isActive && handleManualSelect(i)}
                style={{
                  width: `${cardWidth}px`,
                  flexShrink: 0,
                }}
                className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] relative select-none ${
                  isActive 
                    ? "scale-100 opacity-100 cursor-default" 
                    : "scale-[0.88] sm:scale-[0.92] opacity-40 sm:opacity-50 blur-[0.3px] cursor-pointer hover:opacity-65"
                }`}
              >
                {/* Glowing halo behind active card */}
                {isActive && (
                  <div
                    className="absolute -inset-3 bg-gradient-to-r opacity-20 blur-2xl rounded-3xl pointer-events-none transition-all duration-700 animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, ${tool.accentFrom}, ${tool.accentTo})`,
                    }}
                  />
                )}

                <div className="h-full rounded-3xl border border-gray-200/70 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] p-8 sm:p-10 relative overflow-hidden transition-all duration-500">
                  {/* Hover radial gradient glow */}
                  {isActive && (
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at 0% 0%, ${tool.accentFrom}06, transparent 50%)`,
                      }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-8">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${tool.accentFrom}20, ${tool.accentTo}20)`,
                          }}
                        >
                          {tool.image ? (
                            <Image
                              src={tool.image}
                              alt={tool.name}
                              width={24}
                              height={24}
                              className="w-6 h-6 object-contain"
                            />
                          ) : (
                            <Icon
                              className="w-6 h-6"
                              style={{ color: tool.accentColor }}
                            />
                          )}
                        </div>
                        
                        {isActive && (
                          <Link href={tool.slug}>
                            <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300">
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </Link>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-3">
                        {tool.name}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold mb-4" style={{ color: tool.accentColor }}>
                        {tool.tagline}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                        {tool.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2.5 mt-auto">
                      {tool.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="text-xs px-3.5 py-2 rounded-xl bg-gray-50 text-gray-600 border border-gray-100 font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-10">
        {tools.map((tool, i) => {
          const isActive = i === activeDotIndex;
          return (
            <button
              key={tool.id}
              onClick={() => handleManualSelect(5 + i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive 
                  ? "w-8" 
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              style={{
                backgroundColor: isActive ? tool.accentColor : undefined
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
