"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden font-sans">
      
      {/* Top Half: Warm Off-White Background */}
      <div className="relative w-full bg-[#FCFBF7] pt-24 flex flex-col items-center border-b border-[#E5E7EB]">
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 pb-20">
          
          <h1 className="text-[4rem] sm:text-[5rem] lg:text-[6rem] font-serif text-[#1F2937] leading-[1.1] mb-8">
            The{" "}
            <span className="relative inline-block mx-1">
              {/* SVG Texture Background for "AI" */}
              <svg className="absolute inset-0 w-full h-full text-[#A78BFA] scale-110" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                 {/* A slightly irregular path to simulate the brush/stamp texture */}
                 <path d="M5,5 L95,2 L98,95 L2,98 Z" opacity="0.8" />
              </svg>
              <span className="relative z-10 px-2 text-[#1F2937]">AI</span>
            </span>{" "}
            operating <br />
            system for{" "}
            <span className="inline-block bg-[#5EEAD4] px-4 rounded-md mx-1 transform -translate-y-1">
              business
            </span>
          </h1>

          <p className="text-[1.1rem] text-[#6B7280] max-w-[680px] mx-auto mb-10 leading-[1.6]">
            ToolStack runs your operations as one connected
            system, replacing the tool sprawl that keeps you from focusing on
            what actually works.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-3 bg-[#111827] text-white font-medium text-[15px] hover:bg-black transition-all duration-300 rounded-sm"
            >
              Get Started
            </Link>
            <Link
              href="#tools"
              className="px-8 py-3 bg-white text-[#111827] font-medium text-[15px] border border-gray-300 hover:border-gray-400 transition-all duration-200 rounded-sm"
            >
              Explore Tools
            </Link>
          </div>
          </div>
        </div>

      {/* Bottom Half: Purple Grid Background & Dashboard */}
      <div 
        className="relative w-full pt-16 pb-32 overflow-hidden flex flex-col items-center"
        style={{
          backgroundColor: '#A78BFA',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          backgroundPosition: 'center top'
        }}
      >
        {/* Giant Yellow Pencil (Left Edge) */}
        <div className="absolute left-[-5%] top-[20%] w-[300px] h-[500px] z-10 rotate-[15deg]">
           <svg viewBox="0 0 200 600" className="w-full h-full overflow-visible">
              {/* Yellow body */}
              <polygon points="50,150 150,150 150,450 50,450" fill="#FBBF24" />
              <polygon points="50,150 100,100 150,150" fill="#FDE68A" />
              {/* Pink Eraser */}
              <path d="M 50,150 L 150,150 L 150,80 Q 150,50 100,50 Q 50,50 50,80 Z" fill="#F472B6" />
              {/* Metal Band */}
              <rect x="45" y="130" width="110" height="30" fill="#D1D5DB" />
              <rect x="45" y="140" width="110" height="5" fill="#9CA3AF" />
              {/* Wood Tip */}
              <polygon points="50,450 150,450 100,550" fill="#FCD34D" />
              {/* Lead Tip */}
              <polygon points="85,520 115,520 100,550" fill="#1F2937" />
           </svg>
        </div>

        {/* Black Scribble (Below Pencil) */}
        <svg className="absolute left-[5%] top-[80%] w-48 h-32 overflow-visible z-10 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M 10 50 Q 30 60 50 40 T 90 50" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
           <path d="M 0 60 Q 40 40 60 70 T 100 50" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
        </svg>

        {/* Massive Purple Blob with Noise Texture (Right Edge) */}
        <div 
          className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full translate-x-1/3 -translate-y-1/4 mix-blend-multiply opacity-80 z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`
          }}
        />

        {/* Floating purple blob (Bottom right) */}
        <div className="absolute bottom-[-100px] right-[10%] w-[300px] h-[300px] bg-[#8B5CF6] rounded-full opacity-60 blur-xl z-10" />

        {/* Main Dashboard Image */}
        <div className="relative z-20 w-full max-w-[1200px] px-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white flex aspect-[16/9] border-t border-l border-r border-gray-200 relative"
          >
             {/* Sidebar */}
             <div className="w-[80px] bg-[#2A1B54] h-full flex-shrink-0 flex flex-col items-center py-6 gap-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-white rounded-full" />
                </div>
                <div className="w-6 h-6 bg-white/10 rounded-sm" />
                <div className="w-6 h-6 bg-white/10 rounded-sm" />
                <div className="w-6 h-6 bg-white/10 rounded-sm" />
                <div className="w-6 h-6 bg-white/10 rounded-sm" />
                <div className="w-6 h-6 bg-white/10 rounded-sm" />
             </div>

             {/* Main Content Area */}
             <div className="flex-1 bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 overflow-hidden">
                
                {/* Left Column (Tools & Queue) */}
                <div className="flex-1 flex flex-col min-w-0">
                   
                   {/* AI Tools Section */}
                   <div className="mb-8">
                     <div className="flex justify-between items-center mb-4">
                       <h2 className="font-bold text-[#1F2937] text-lg">Active Tools</h2>
                       <button className="px-4 py-1 text-sm font-medium text-[#4B5563] border border-gray-200 rounded-full hover:bg-gray-50">View All</button>
                     </div>
                     <div className="flex items-center gap-3 overflow-hidden">
                       <div className="flex items-center gap-2 bg-[#8B5CF6] text-white px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-sm flex-shrink-0">
                         <span className="w-4 h-4 border border-white/40 rounded-sm inline-block" /> Lesson Studio
                       </div>
                       <div className="flex items-center gap-2 bg-white text-[#4B5563] border border-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0">
                         <span className="w-4 h-4 bg-pink-100 text-pink-500 rounded-sm inline-block" /> Course Studio
                       </div>
                       <div className="flex items-center gap-2 bg-white text-[#4B5563] border border-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0">
                         <span className="w-4 h-4 bg-blue-100 text-blue-500 rounded-sm inline-block" /> Assessment
                       </div>
                       <div className="flex items-center gap-2 bg-white text-[#4B5563] border border-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0">
                         <span className="w-4 h-4 bg-cyan-100 text-cyan-500 rounded-sm inline-block" /> ChatPods
                       </div>
                       <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 bg-white shadow-sm ml-auto">
                         <span className="text-gray-400 leading-none">&gt;</span>
                       </div>
                     </div>
                   </div>

                   {/* Grading Queue Section */}
                   <div className="mb-8">
                     <div className="flex justify-between items-center mb-4">
                       <div className="flex items-center gap-2">
                         <h2 className="font-bold text-[#1F2937] text-lg">Grading Queue</h2>
                         <span className="bg-[#111827] text-white text-xs px-2 py-0.5 rounded-full font-medium">54</span>
                       </div>
                       <button className="px-4 py-1 text-sm font-medium text-[#4B5563] border border-gray-200 rounded-full hover:bg-gray-50">View All</button>
                     </div>
                     <div className="border border-gray-100 rounded-xl bg-white shadow-sm flex flex-col">
                       {[
                         { title: "Reading Comprehension Quiz – To Kill a Mockingbird", subs: "18 submissions", status: "Overdue", statusColor: "text-red-600 bg-red-50 border-red-100" },
                         { title: "Argumentative Paragraph – School Uniforms", subs: "25 submissions", status: "Due Today", statusColor: "text-yellow-600 bg-yellow-50 border-yellow-100" },
                         { title: "Vocabulary Assessment – Unit 3", subs: "11 submissions", status: "Due Tomorrow", statusColor: "text-yellow-600 bg-yellow-50 border-yellow-100" },
                         { title: "Literary Analysis Essay – Theme & Evidence", subs: "32 submissions", status: "Due in 2 days", statusColor: "text-green-600 bg-green-50 border-green-100" },
                       ].map((item, i) => (
                         <div key={i} className={`flex justify-between items-center p-4 ${i !== 3 ? 'border-b border-gray-50' : ''}`}>
                           <div className="flex flex-col">
                             <span className="text-sm font-semibold text-[#374151]">{item.title}</span>
                             <span className="text-xs text-gray-400">{item.subs}</span>
                           </div>
                           <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md border flex items-center gap-1 ${item.statusColor}`}>
                             <span className="w-3 h-3 rounded-full border border-current opacity-70" /> {item.status}
                           </span>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Recent Activity Section */}
                   <div>
                     <div className="flex justify-between items-center mb-4">
                       <h2 className="font-bold text-[#1F2937] text-lg">Recent Activity</h2>
                     </div>
                     <div className="border border-gray-100 rounded-xl bg-white shadow-sm flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b border-gray-50">
                          <div className="flex items-center gap-3">
                             <span className="w-4 h-4 bg-green-100 text-green-600 rounded-sm" />
                             <span className="text-sm font-semibold text-[#374151]">9th Grade English Language Arts <span className="text-gray-400 font-normal mx-1">•</span> <span className="text-gray-400 font-normal">Rubric</span></span>
                          </div>
                          <span className="text-xs text-gray-400">just now</span>
                        </div>
                        <div className="flex justify-between items-center p-4 border-b border-gray-50">
                          <div className="flex items-center gap-3">
                             <span className="w-4 h-4 bg-purple-100 text-purple-600 rounded-sm" />
                             <span className="text-sm font-semibold text-[#374151]">Understanding How Photosynthesis Works and Why It Matter... <span className="text-gray-400 font-normal mx-1">•</span> <span className="text-gray-400 font-normal">Lesson</span></span>
                          </div>
                          <span className="text-xs text-gray-400">25 minutes ago</span>
                        </div>
                     </div>
                   </div>

                </div>

                {/* Right Column (Kira AI Panel) */}
                <div className="w-[380px] flex-shrink-0 flex flex-col border border-[#EAE6FF] rounded-xl overflow-hidden bg-white shadow-sm relative">
                  <div className="flex justify-between items-center p-4 border-b border-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md" />
                      <span className="font-bold text-[#1F2937]">Profit Agentz</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="w-4 h-4 bg-gray-200" />
                      <span className="w-4 h-4 bg-gray-200" />
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6 flex flex-col items-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 rounded-xl mb-6 flex-shrink-0 shadow-inner" style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.4), transparent)' }} />
                    <h3 className="text-2xl font-serif text-[#1F2937] mb-6">Welcome back!</h3>
                    
                    <div className="w-full flex flex-col gap-3">
                      <button className="w-full py-2.5 px-4 rounded-full bg-[#F5F3FF] text-[#6D28D9] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#EDE9FE] transition-colors">
                        <span className="w-4 h-4 border border-current rounded-sm" /> Create a lesson on photosynthesis
                      </button>
                      <button className="w-full py-2.5 px-4 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#DBEAFE] transition-colors">
                        <span className="w-4 h-4 rounded-full border border-current" /> Make a ChatPod on the theme of identity.
                      </button>
                      <button className="w-full py-2.5 px-4 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#DBEAFE] transition-colors">
                        <span className="w-4 h-4 rounded-sm border border-current" /> Build an assessment on character development
                      </button>
                    </div>
                  </div>

                  {/* Cartoon Character Overflowing */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 z-30">
                     {/* Using simple SVG shapes to approximate the purple character reading a book */}
                     <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <circle cx="50" cy="50" r="30" fill="#8B5CF6" />
                        {/* Eyes */}
                        <circle cx="40" cy="45" r="5" fill="white" />
                        <circle cx="60" cy="45" r="5" fill="white" />
                        <circle cx="40" cy="45" r="2" fill="black" />
                        <circle cx="60" cy="45" r="2" fill="black" />
                        {/* Book */}
                        <polygon points="20,80 50,70 80,80 80,100 50,90 20,100" fill="#0EA5E9" />
                        <line x1="50" y1="70" x2="50" y2="90" stroke="#0284C7" strokeWidth="2" />
                     </svg>
                  </div>
                </div>

             </div>

             {/* Black Scribble Overlapping the dashboard (right edge) */}
             <svg className="absolute top-[20%] -right-10 w-32 h-24 overflow-visible z-30 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M 0 50 Q 30 20 60 40 T 100 20" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
               <path d="M 10 70 Q 40 40 70 60 T 90 40" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
               <path d="M 20 90 Q 50 60 80 80" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
             </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}