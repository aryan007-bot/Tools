"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const realities = [
  { 
    title: "Voice To Excel", 
    tag: "AI Transcriber",
    accent: "#8B5CF6",
    link: "/voice-to-excel",
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
    link: "#",
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
    title: "Video Editor", 
    tag: "AI Creative",
    accent: "#F59E0B",
    link: "/video-editor",
    features: ["Timeline timeline controls", "Smart subtitles auto-generator", "Lossless video exporting"],
    desc: "AI-assisted video editing with timeline controls, automatic subtitles, smart trimming, professional effects, and high-quality export.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-amber-100/50 shadow-inner">
         <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-[#FBBF24]/15 rounded-full blur-xl" />
         <div className="absolute -right-10 -top-10 w-36 h-36 bg-orange-400/10 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
            <div className="w-full h-28 bg-gray-900 flex items-center justify-center relative">
               <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=300&q=80" alt="Video frame" className="w-full h-full object-cover opacity-70" />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30">▶</div>
               </div>
               <div className="absolute bottom-2 left-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[8px] py-1 px-2 rounded text-center font-medium">
                  &quot;AI automatically generates subtitles...&quot;
               </div>
            </div>
            <div className="p-2.5 flex flex-col gap-1.5 bg-gray-50">
               <div className="flex justify-between items-center text-[7px] text-gray-400 font-bold">
                  <span>0:00</span>
                  <span>0:15</span>
                  <span>0:30</span>
               </div>
               <div className="w-full h-6 bg-amber-100 rounded-md border border-amber-200 relative overflow-hidden flex items-center px-1 gap-0.5">
                  <div className="w-20 h-4 bg-amber-500 rounded border border-amber-600 flex-shrink-0" />
                  <div className="w-16 h-4 bg-orange-500 rounded border border-orange-600 flex-shrink-0" />
                  <div className="w-24 h-4 bg-yellow-500 rounded border border-yellow-600 flex-shrink-0" />
                  <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-red-500 z-10" />
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
    link: "#",
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
    link: "#",
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
  },
  { 
    title: "Unified Dashboard", 
    tag: "AI Integrator",
    accent: "#8B5CF6",
    link: "#",
    features: ["Centralized control panel", "Real-time statistics & graphs", "Multi-tool data syncing"],
    desc: "Manage all your business operations from a single unified interface. Gain insights, track metrics, and scale your business faster with our integrated suite of AI tools.",
    mockup: (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-violet-100/50 shadow-inner">
         <div className="absolute -left-10 -top-10 w-36 h-36 bg-violet-500/10 rounded-full blur-xl" />
         <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-[#8B5CF6]/10 rounded-full blur-xl" />
         <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col gap-2.5">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
               <span className="text-[10px] font-bold text-gray-800">Unified Operations</span>
               <div className="w-2.5 h-2.5 bg-[#8B5CF6] rounded-full flex items-center justify-center text-[6px] text-white">★</div>
            </div>
            <div className="flex items-center gap-4">
               <div className="relative w-16 h-16 rounded-full border-4 border-gray-100 flex items-center justify-center flex-shrink-0">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                     <circle cx="28" cy="28" r="26" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeDasharray="163" strokeDashoffset="41" />
                  </svg>
                  <span className="text-[10px] font-black text-gray-800">75%</span>
               </div>
               <div className="flex flex-col gap-1 w-full">
                  <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Workspace Sync</div>
                  <div className="text-xs font-black text-gray-800">5/6 Tools Active</div>
                  <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                     <div className="w-5/6 h-full bg-[#8B5CF6]" />
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
  }
];

const compliances = [
  { 
    title: "Teachers review and control all instructional content", 
    color: "bg-[#8B5CF6]",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
         {/* Sliders */}
         <rect x="8" y="10" width="6" height="20" fill="white" rx="1" />
         <rect x="17" y="5" width="6" height="25" fill="white" rx="1" opacity="0.7" />
         <rect x="26" y="15" width="6" height="20" fill="white" rx="1" />
         {/* Knobs */}
         <circle cx="11" cy="22" r="5" fill="white" />
         <circle cx="20" cy="12" r="5" fill="white" opacity="0.9" />
         <circle cx="29" cy="27" r="5" fill="white" />
      </svg>
    )
  },
  { 
    title: "Rubrics, logic, and adaptations are visible and explainable", 
    color: "bg-[#14B8A6]",
    icon: (
      <div className="relative w-[40px] h-[40px] flex items-center justify-center">
         <div className="absolute inset-0 bg-[#A78BFA] opacity-50 rounded-full scale-125 translate-x-2 -translate-y-1" />
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="relative z-10 text-white">
            <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="4" />
            <line x1="21" y1="21" x2="28" y2="28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3" />
         </svg>
      </div>
    )
  },
  { 
    title: "Student data remains under district control", 
    color: "bg-[#FBBF24]",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
         {/* Lock Body */}
         <rect x="8" y="18" width="24" height="18" fill="#EF4444" rx="2" />
         {/* Lock Shackle */}
         <path d="M 12 18 V 12 A 8 8 0 0 1 28 12 V 18" stroke="#F97316" strokeWidth="4" />
         {/* Keyhole */}
         <circle cx="20" cy="25" r="3" fill="#FCA5A5" />
         <rect x="19" y="27" width="2" height="4" fill="#FCA5A5" />
      </svg>
    )
  },
  { 
    title: "Designed to meet FERPA and COPPA requirements by default", 
    color: "bg-[#F97316]",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
         {/* Shield */}
         <path d="M 5 5 L 20 0 L 35 5 V 20 Q 35 35 20 40 Q 5 35 5 20 Z" fill="#EF4444" />
         {/* Inner Shield */}
         <path d="M 10 9 L 20 5 L 30 9 V 20 Q 30 30 20 34 Q 10 30 10 20 Z" fill="#F87171" />
         {/* Checkmark */}
         <path d="M 13 20 L 18 25 L 27 14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

interface WorkflowProps {
  showCompliance?: boolean;
  showHeader?: boolean;
  bgClass?: string;
  cardBgClass?: string;
}

export function Workflow({ 
  showCompliance = true, 
  showHeader = true,
  bgClass = "bg-white",
  cardBgClass = "bg-[#FAF9F5]"
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
    <section className={`${bgClass} py-24 font-sans overflow-hidden`}>
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
          className="w-full relative mb-32"
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
                      <span 
                        className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
                        style={{ color: item.accent, backgroundColor: `${item.accent}15` }}
                      >
                        {item.tag}
                      </span>
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
          <div className="w-full flex flex-col items-center pt-2 border-t-0 mt-8">
            <h2 className="text-[2rem] md:text-[2.5rem] font-serif text-[#1F2937] mb-12 text-center">
              Built for business. Secure by design.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-[900px] mb-16">
              {compliances.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4">
                  <div className={`w-[90px] h-[90px] rounded-[16px] ${item.color} flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform`}>
                     {item.icon}
                  </div>
                  <p className="text-[#4B5563] text-[11px] font-medium leading-relaxed px-2 mt-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[900px] bg-[#F9FAFB] rounded-xl px-8 py-5 border-none">
               <span className="text-sm font-semibold text-[#4B5563] mb-4 md:mb-0">Security and privacy you can trust</span>
               <div className="flex items-center gap-4">
                  {/* Simulated Seals */}
                  {[
                    { outer: "#2563EB", inner: "#60A5FA", tick: true },
                    { outer: "#10B981", inner: "#A7F3D0", tick: true },
                    { outer: "#0284C7", inner: "#7DD3FC", tick: false, text: "SOC 2" },
                    { outer: "#EAB308", inner: "#FDE047", tick: false, star: true },
                    { outer: "#8B5CF6", inner: "#C4B5FD", tick: false, star: true },
                    { outer: "#4338CA", inner: "#818CF8", tick: false }
                  ].map((seal, j) => (
                    <div key={j} className="relative w-8 h-8 rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: seal.outer }}>
                       <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: seal.inner }}>
                          {seal.tick && <svg viewBox="0 0 24 24" className="w-3 h-3 text-white"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                          {seal.text && <span className="text-[5px] font-bold text-white">{seal.text}</span>}
                          {seal.star && <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" /></svg>}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
