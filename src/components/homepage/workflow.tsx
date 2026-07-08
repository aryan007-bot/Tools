"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const realities = [
  { 
    title: "Voice To Excel", 
    tag: "AI Transcriber",
    accent: "#8B5CF6",
    link: "/tools/voice-to-excel",
    features: ["Real-time speech translation", "Smart table formatting", "One-click Excel export"],
    desc: "Convert spoken voice into structured Excel sheets automatically. Record, transcribe in real-time, categorize data intelligently, and export production-ready spreadsheets.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-purple-100/50 shadow-inner">
         <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-[#8B5CF6]/10 rounded-full blur-xl" />
         <div className="absolute -right-10 -top-10 w-36 h-36 bg-[#B4A5FF]/10 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-center mb-3">
               <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Recording...</span>
               </div>
               <div className="w-14 h-4 bg-purple-50 text-[8px] font-bold text-purple-600 rounded-full flex items-center justify-center">AI Sync</div>
            </div>
            <div className="flex items-end gap-1 justify-center h-8 mb-4 px-2">
               {[12, 24, 18, 36, 20, 28, 14, 30, 22, 16, 24, 10, 18].map((h, idx) => (
                  <div 
                    key={idx} 
                    className="w-1 bg-[#8B5CF6] rounded-full" 
                    style={{ height: `${h}px` }} 
                  />
               ))}
            </div>
            <div className="space-y-2 border-t border-gray-100 pt-3">
               <div className="flex justify-between text-[9px] font-bold text-gray-400 border-b border-gray-50 pb-1">
                  <span>A: Item</span>
                  <span>B: Qty</span>
                  <span>C: Price</span>
               </div>
               <div className="flex justify-between text-[9px] text-gray-600 font-medium">
                  <span>MacBook Air</span>
                  <span>5</span>
                  <span className="text-green-600 font-semibold">$4,995</span>
               </div>
               <div className="flex justify-between text-[9px] text-gray-600 font-medium">
                  <span>iPhone 15 Pro</span>
                  <span>12</span>
                  <span className="text-green-600 font-semibold">$11,988</span>
               </div>
            </div>
         </div>
      </div>
    )
  },
  { 
    title: "Test Generator", 
    tag: "AI Educator",
    accent: "#10B981",
    link: "/tools/text-generator",
    features: ["Custom quiz parameters", "Instant answer keys", "PDF export format"],
    desc: "Create tests, quizzes, and question papers automatically. Choose subjects, set difficulty levels, generate answer keys, and export to PDF in seconds.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-emerald-100/50 shadow-inner">
         <div className="absolute -left-10 -top-10 w-32 h-32 bg-[#34D399]/10 rounded-full blur-xl" />
         <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col gap-2.5">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
               <div className="w-20 h-3.5 bg-emerald-50 rounded flex items-center justify-center text-[8px] font-bold text-emerald-700">Quiz: Physics 101</div>
               <span className="text-[9px] text-gray-400 font-semibold">10 Qs</span>
            </div>
            <div className="flex flex-col gap-1.5">
               <div className="w-full h-2.5 bg-gray-100 rounded-full" />
               <div className="w-3/4 h-2.5 bg-gray-100 rounded-full" />
            </div>
            <div className="space-y-1.5 mt-1">
               <div className="flex items-center gap-2 p-1.5 border border-gray-100 rounded-lg bg-gray-50/50">
                  <div className="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center text-[8px] text-gray-500">A</div>
                  <div className="w-2/3 h-1.5 bg-gray-200 rounded-full" />
               </div>
               <div className="flex items-center gap-2 p-1.5 border border-emerald-200 rounded-lg bg-emerald-50/30">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-600 flex items-center justify-center text-[8px] text-white font-bold">B</div>
                  <div className="w-1/2 h-1.5 bg-emerald-200 rounded-full" />
               </div>
               <div className="flex items-center gap-2 p-1.5 border border-gray-100 rounded-lg bg-gray-50/50">
                  <div className="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center text-[8px] text-gray-500">C</div>
                  <div className="w-5/12 h-1.5 bg-gray-200 rounded-full" />
               </div>
            </div>
         </div>
      </div>
    )
  },
  { 
    title: "Fee Collection", 
    tag: "AI Finance",
    accent: "#EF4444",
    link: "/tools/fee-collector",
    features: ["Automated payment tracking", "Automatic email reminders", "Financial analytics"],
    desc: "Complete fee management system for schools and institutes. Track payments, send reminders, generate reports, and analyze financial data.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-orange-100/50 shadow-inner">
         <div className="absolute -left-10 -top-10 w-32 h-32 bg-[#F97316]/10 rounded-full blur-xl" />
         <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-red-400/10 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
               <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-gray-800">Total Outstanding</span>
                  <span className="text-sm font-black text-red-600">$12,450</span>
               </div>
               <div className="w-16 h-5 bg-red-50 text-[8px] font-bold text-red-600 rounded-full flex items-center justify-center">Due Now</div>
            </div>
            <div className="space-y-2">
               <div className="flex justify-between items-center p-1.5 border border-gray-100 rounded-lg bg-gray-50/20">
                  <div className="flex items-center gap-1.5">
                     <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">👨‍🎓</div>
                     <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-gray-700">Aarav Mehta</span>
                        <span className="text-[7px] text-gray-400">Class 10-A</span>
                     </div>
                  </div>
                  <span className="text-[8px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Pending</span>
               </div>
               <div className="flex justify-between items-center p-1.5 border border-gray-100 rounded-lg bg-gray-50/20">
                  <div className="flex items-center gap-1.5">
                     <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px]">👩‍🎓</div>
                     <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-gray-700">Riya Sharma</span>
                        <span className="text-[7px] text-gray-400">Class 12-B</span>
                     </div>
                  </div>
                  <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Received</span>
               </div>
            </div>
         </div>
      </div>
    )
  },
  { 
    title: "Email Assistant", 
    tag: "AI Assistant",
    accent: "#3B82F6",
    link: "/tools/email-assistant",
    features: ["Context-aware drafting", "Tone Adjustment settings", "Integrated scheduling tools"],
    desc: "Generate, improve, and automate emails. From smart drafts to tone adjustments, templates to scheduling — your complete email workflow.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-blue-100/50 shadow-inner">
         <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-blue-500/10 rounded-full blur-xl" />
         <div className="absolute -right-10 -top-10 w-36 h-36 bg-cyan-400/15 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
               <span className="text-[9px] font-bold text-gray-700">AI Smart Compose</span>
               <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
                  <span className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
               </div>
            </div>
            <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100/30 flex flex-col gap-1.5">
               <div className="flex items-center gap-1.5 text-[8px] font-bold text-blue-700">
                  <span>✨ Suggestions</span>
               </div>
               <div className="w-full h-1.5 bg-blue-100 rounded-full" />
               <div className="w-5/6 h-1.5 bg-blue-100 rounded-full" />
            </div>
            <div className="flex gap-2 justify-end mt-2 pt-2 border-t border-gray-50">
               <div className="h-5 px-2 bg-gray-100 text-[8px] font-semibold text-gray-500 rounded flex items-center justify-center">Tone: Casual</div>
               <div className="h-5 px-2.5 bg-blue-600 text-[8px] font-bold text-white rounded flex items-center justify-center shadow-sm">Insert Draft</div>
            </div>
         </div>
      </div>
    )
  }
];

const compliances = [
  { 
    name: "Model Isolation",
    desc: "We never train public AI models on your inputs or spreadsheet files. Your workspace database stays isolated.", 
    color: "bg-purple-500/10 text-purple-600 border border-purple-200/30",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#F3E8FF" />
        <path d="M24 8 L38 13.5 V 24 C38 33 24 40 24 40 C24 40 10 33 10 24 V 13.5 Z" fill="#8B5CF6" />
        <path d="M24 11.5 L35 15.8 V 24 C35 30.8 24 36.2 24 36.2 V 11.5 Z" fill="#7C3AED" opacity="0.85" />
        <circle cx="24" cy="21" r="5" fill="#FBBF24" />
        <rect x="22" y="24" width="4" height="6" rx="1" fill="#FBBF24" />
      </svg>
    )
  },
  { 
    name: "Enterprise Encryption",
    desc: "All audio transcribing, exports, and document creations are encrypted using banking-grade AES-256 standard.", 
    color: "bg-teal-500/10 text-teal-600 border border-teal-200/30",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#E6FFFA" />
        <rect x="13" y="13" width="22" height="22" rx="4" fill="#0D9488" />
        <rect x="16" y="16" width="16" height="16" rx="2" fill="#0F766E" />
        <circle cx="24" cy="24" r="5" fill="#F59E0B" />
        <line x1="24" y1="18" x2="24" y2="21" stroke="white" strokeWidth="2" />
        <line x1="24" y1="27" x2="24" y2="30" stroke="white" strokeWidth="2" />
        <line x1="18" y1="24" x2="21" y2="24" stroke="white" strokeWidth="2" />
        <line x1="27" y1="24" x2="30" y2="24" stroke="white" strokeWidth="2" />
      </svg>
    )
  },
  { 
    name: "100% IP Ownership",
    desc: "You retain full commercial usage rights and copyright ownership of all AI-generated spreadsheets and video files.", 
    color: "bg-amber-500/10 text-amber-600 border border-amber-200/30",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
        <path d="M16 28 L14 42 L24 37 L34 42 L32 28 Z" fill="#F59E0B" />
        <path d="M24 37 L34 42 L32 28 L24 28 Z" fill="#D97706" />
        <circle cx="24" cy="22" r="11" fill="#FBBF24" />
        <circle cx="24" cy="22" r="9" fill="#F59E0B" />
        <polygon points="24,15 26.5,20.5 32.5,21.2 28,25 29.5,31 24,28 18.5,31 20,25 15.5,21.2 21.5,20.5" fill="white" />
      </svg>
    )
  },
  { 
    name: "High-Performance SLA",
    desc: "Uptime guarantee backed by distributed server clusters for prompt compiles and rapid video rendering.", 
    color: "bg-rose-500/10 text-rose-600 border border-rose-200/30",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#FFE4E6" />
        <path d="M12 28 C12 18, 18 12, 24 12 C30 12, 36 18, 36 28" stroke="#F43F5E" strokeWidth="4" strokeLinecap="round" />
        <path d="M24 12 C30 12, 36 18, 36 28" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" />
        <polygon points="24,14 18,24 23,24 21,32 29,20 24,20" fill="#EF4444" />
        <circle cx="24" cy="28" r="4" fill="#4B5563" />
        <line x1="24" y1="28" x2="30" y2="18" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  }
];

interface WorkflowProps {
  showCompliance?: boolean;
  showHeader?: boolean;
  bgClass?: string;
  cardBgClass?: string;
  paddingClass?: string;
}

export function Workflow({ 
  showCompliance = true, 
  showHeader = true,
  bgClass = "bg-white",
  cardBgClass = "bg-[#FAF9F5]",
  paddingClass = "py-24"
}: WorkflowProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = realities.length;
  const clonedRealities = [realities[total - 1], ...realities, realities[0]];

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isAnimating]);

  const handleDotClick = (dotIdx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex(dotIdx + 1);
  };

  // Autoplay effect - resets timer when user interacts or cards transition
  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, isHovered, handleNext]);

  // Wrap-around jump after CSS transition completes
  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
    if (currentIndex === total + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(total);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
    }
  }, [currentIndex, total]);

  // Safety fallback for transition state (ensures slider never gets locked)
  useEffect(() => {
    if (!isAnimating) return;
    const safetyTimeout = setTimeout(() => {
      handleTransitionEnd();
    }, 700);
    return () => clearTimeout(safetyTimeout);
  }, [isAnimating, handleTransitionEnd]);

  // Touch Swipe handlers for mobile support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isAnimating) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  const activeDot = currentIndex === 0 ? total - 1 : currentIndex === total + 1 ? 0 : currentIndex - 1;

  return (
    <section className={`${bgClass} ${paddingClass} font-sans overflow-hidden`}>
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Header */}
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-[2.25rem] md:text-[2.75rem] font-serif text-[#1F2937] leading-[1.2] max-w-[400px]">
                One system for every <br /> business need
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <p className="text-[#6B7280] text-sm max-w-[350px] leading-relaxed">
                ToolStack adapts to how businesses actually operate, all without the need
                for separate tools, products, or workflows.
              </p>
              {/* Carousel Controls */}
              <div className="flex gap-2 flex-shrink-0">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-[#8B5CF6] transition-colors"
                  aria-label="Previous slide"
                  disabled={isAnimating}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-[#8B5CF6] transition-colors"
                  aria-label="Next slide"
                  disabled={isAnimating}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Carousel Slider */}
        <div 
          className="w-full relative mb-16 md:mb-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full overflow-hidden py-4">
            <div 
              className="flex gap-6"
              onTransitionEnd={handleTransitionEnd}
              style={{ 
                transform: `translate3d(calc(-${currentIndex} * (100% + 24px)), 0, 0)`,
                transition: isTransitioning ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }}
            >
              {clonedRealities.map((item, i) => (
                <div 
                  key={i} 
                  className="w-full flex-shrink-0 px-2 md:px-4"
                >
                  <div className={`${cardBgClass} border border-gray-100 rounded-[32px] p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)] transition-all duration-500 flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-[900px] mx-auto relative overflow-hidden`}>
                    {/* Left details */}
                    <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-4 md:gap-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span 
                          className="text-[9px] font-black uppercase tracking-[0.22em] font-sans"
                          style={{ color: item.accent }}
                        >
                          {item.tag}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                      </div>
                      <h3 className="font-serif text-[1.75rem] md:text-[2.25rem] text-[#1F2937] leading-tight font-bold">
                        {item.title}
                      </h3>
                      <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                        {item.desc}
                      </p>
                      
                      {/* Features list */}
                      <ul className="flex flex-col gap-2.5 my-2">
                        {item.features.map((feat, index) => (
                          <li key={index} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-600">
                            <span 
                              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                            >
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Action Link */}
                      <Link 
                        href={item.link}
                        className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#1F2937] hover:text-[#8B5CF6] transition-colors mt-3"
                      >
                        <span>Explore this tool</span>
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>

                    {/* Right visual mockup */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                      {item.mockup}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator & Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            {!showHeader && (
              <button 
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-[#8B5CF6] hover:border-gray-300 transition-colors"
                aria-label="Previous slide"
                disabled={isAnimating}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            <div className="flex gap-2">
              {Array.from({ length: total }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeDot === idx 
                      ? "bg-[#8B5CF6] w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>

            {!showHeader && (
              <button 
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-[#8B5CF6] hover:border-gray-300 transition-colors"
                aria-label="Next slide"
                disabled={isAnimating}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Compliance Section */}
        {showCompliance && (
          <div className="w-full flex flex-col items-center pt-2 border-t-0 mt-20">
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-[#0F172A] tracking-tight mb-4 text-center">
              Enterprise Trust. Built for Scale.
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-[600px] text-center mb-12 leading-relaxed">
              We design our AI business pipeline with enterprise isolation, zero data leaks, and guaranteed output ownership.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1000px] mb-16">
              {compliances.map((item, i) => (
                <div key={i} className="w-full h-64 [perspective:1000px] group cursor-pointer">
                  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                     {/* Front Side */}
                     <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-gray-100/90 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:border-purple-200/50 transition-all duration-300">
                        <div className="p-1">
                          {item.icon}
                        </div>
                        <h4 className="text-base font-bold text-slate-800 tracking-tight">{item.name}</h4>
                        <span className="text-[9px] font-extrabold text-[#8B5CF6] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100/40 animate-pulse mt-1">
                          Hover to Reveal
                        </span>
                     </div>

                     {/* Back Side */}
                     <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#1E293B] border border-slate-800 rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center gap-3 shadow-2xl">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 shadow-sm mb-0.5">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400">
                             <polyline points="20 6 9 17 4 12" />
                           </svg>
                        </div>
                        <h4 className="text-xs font-bold text-slate-200 tracking-tight">{item.name}</h4>
                        <p className="text-[11px] text-slate-300 leading-relaxed max-w-[210px]">
                          {item.desc}
                        </p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
