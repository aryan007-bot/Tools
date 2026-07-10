"use client";

import { motion } from "framer-motion";
import { Mic, GraduationCap, Video, Mail, CreditCard, Settings, Sparkles } from "lucide-react";

export function Ecosystem() {
  return (
    <section className="bg-[#FAF9F5] pb-0 font-sans relative">
      {/* Intro Section with Scribble Divider */}
      <div className="max-w-[800px] mx-auto px-6 pt-32 pb-8 flex flex-col items-center text-center">
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif text-[#1F2937] leading-[1.2] mb-6">
          How It Works <br />
          <span className="text-[#1F2937]">From signup to results in <span className="bg-[#B4A5FF] px-2 rounded-sm inline-block">minutes</span></span>
        </h2>
        <p className="text-[#6B7280] text-sm md:text-base max-w-[500px] leading-relaxed mb-6">
          No complex onboarding. No learning curve. Just powerful tools ready to work the moment you start.
        </p>

        {/* Connected AI Tools Pipeline */}
        <div className="relative w-full max-w-[700px] mb-16 px-4 flex flex-col">
          {/* Top row: Line and Buttons */}
          <div className="relative w-full flex justify-between items-center h-12">
            {/* Background Connecting Line */}
            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-[3px] bg-gray-200/60 rounded-full overflow-hidden pointer-events-none">
              {/* Pulsing data laser */}
              <motion.div
                className="h-full w-40 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent absolute"
                animate={{
                  left: ["-40%", "110%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Buttons */}
            {[
              { icon: Mic, color: "#8B5CF6", bg: "rgba(139, 92, 246, 0.1)" },
              { icon: GraduationCap, color: "#10B981", bg: "rgba(16, 185, 129, 0.1)" },
              { icon: Video, color: "#F59E0B", bg: "rgba(245, 158, 11, 0.1)" },
              { icon: Mail, color: "#3B82F6", bg: "rgba(59, 130, 246, 0.1)" },
              { icon: CreditCard, color: "#EF4444", bg: "rgba(239, 68, 68, 0.1)" },
            ].map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center shadow-md transition-shadow duration-300 hover:shadow-[0_0_12px_rgba(0,0,0,0.15)] cursor-pointer z-10"
                  style={{ borderColor: tool.color }}
                >
                  <div 
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: tool.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: tool.color }} />
                  </div>
                </motion.div>
              );
            })}

            {/* AI Core Destination */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#5EEAD4] p-0.5 shadow-md flex items-center justify-center z-10"
            >
              <div className="w-full h-full rounded-full bg-[#FAF9F5] flex items-center justify-center relative">
                {/* Rotating gear backing */}
                <motion.div
                  className="absolute inset-0.5 text-[#8B5CF6]/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Settings className="w-full h-full stroke-[1.2]" />
                </motion.div>
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-[#8B5CF6] relative z-10">
                  <path
                    d="M 50 0 C 50 35, 65 50, 100 50 C 65 50, 50 65, 50 100 C 50 65, 35 50, 0 50 C 35 50, 50 35, 50 0 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Bottom row: Labels */}
          <div className="w-full flex justify-between items-start mt-3">
            {[
              "Voice to Excel",
              "Test Generator",
              "Video Editor",
              "Email Assistant",
              "Fee Collection"
            ].map((name, idx) => (
              <span 
                key={idx} 
                className="w-12 text-[9px] md:text-[11px] font-semibold text-gray-500 text-center leading-tight hover:text-gray-900 transition-colors duration-200 cursor-default"
              >
                {name}
              </span>
            ))}
            <span className="w-12 text-[10px] md:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-center leading-tight">
              AI Core
            </span>
          </div>
        </div>
        <h3 className="text-[2rem] md:text-[2.5rem] font-serif text-[#1F2937] leading-[1.2] max-w-[500px]">
          Profit Agentz replaces fragmentation <br />
          with a single business system.
        </h3>
      </div>

      {/* Split Blocks Container */}
      <div className="w-full flex flex-col items-center mt-12 max-w-[1100px] mx-auto px-6 gap-6">
        
        {/* Step 1: Create Account */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.06)] sticky top-[100px] z-[1] mb-[25vh]">
           <div className="lg:w-1/2 bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#1E293B] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 bg-[#8B5CF6]/15 rounded-full blur-3xl" />
              
              <div className="relative w-full max-w-[320px] bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-white z-10 hover:border-[#8B5CF6]/50 transition-all duration-300 transform hover:scale-[1.02] cursor-default">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 bg-purple-500/10 px-2 py-1 rounded">AI Core</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-50 animate-pulse" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Email Address</label>
                  <div className="w-full h-9 bg-slate-800/80 border border-slate-700/80 rounded-lg px-3 flex items-center text-xs text-slate-300 font-mono">
                    user@profitagentz.ai
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Password</label>
                  <div className="w-full h-9 bg-slate-800/80 border border-slate-700/80 rounded-lg px-3 flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span>••••••••••••</span>
                    <span className="text-purple-400 text-[10px] font-bold flex items-center gap-1">
                      <Settings className="w-3 h-3 animate-spin [animation-duration:10s]" />
                      Secure
                    </span>
                  </div>
                </div>

                <div className="w-full h-9 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-lg mt-2">
                  Create Account
                </div>
              </div>

              {/* Glowing Shield Ring instead of Octopus */}
              <div className="absolute bottom-2 right-2 w-28 h-28 z-20 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                      <radialGradient id="shield-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#shield-glow)" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="30"
                      stroke="#8B5CF6"
                      strokeWidth="1"
                      strokeDasharray="10 15"
                      fill="none"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="22"
                      stroke="#EC4899"
                      strokeWidth="1.5"
                      strokeDasharray="40 20"
                      fill="none"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <path
                      d="M50 35 L62 40 C62 50, 57 60, 50 65 C43 60, 38 50, 38 40 Z"
                      fill="#8B5CF6"
                      className="drop-shadow-[0_0_8px_#8B5CF6]"
                    />
                    <path
                      d="M50 38 L59 42 C59 50, 55 58, 50 62 C45 58, 41 50, 41 42 Z"
                      fill="#FAF9F5"
                      opacity="0.8"
                    />
                 </svg>
              </div>
           </div>
           
           <div className="lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              {/* Radial Accent Glow Bleed */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-[0.08] pointer-events-none bg-[#8B5CF6]" />
              
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8B5CF6]">
                  Step 01
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
                Create Account
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base mb-6">
                Sign up in seconds. No complex onboarding, sales calls, or lengthy setup processes. Get instant access to our entire platform immediately.
              </p>
              
              <div className="space-y-3.5 border-t border-gray-100 pt-6">
                {[
                  { title: "Zero setup friction", desc: "No credit card required to start." },
                  { title: "Bank-grade security", desc: "Your credentials are fully encrypted." },
                  { title: "Instant active access", desc: "Deploy your workspace in one click." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-[#8B5CF6] font-bold mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-800">{item.title}</span>
                      <span className="text-[11px] text-slate-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Step 2: Select Tool */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.06)] sticky top-[120px] z-[2] mb-[25vh]">
           <div className="lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1 relative overflow-hidden">
              {/* Radial Accent Glow Bleed */}
              <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-[0.08] pointer-events-none bg-[#10B981]" />
              
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10B981]">
                  Step 02
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
                Select Tool
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base mb-6">
                Pick what you need from our suite of 5 powerful AI business tools. Build your perfect operational stack to fit your exact business needs.
              </p>
              
              <div className="space-y-3.5 border-t border-gray-100 pt-6">
                {[
                  { title: "Granular tools stack", desc: "Select only the products your business uses." },
                  { title: "One-click activation", desc: "Enable tools instantly in your dashboard." },
                  { title: "Seamless sync pipeline", desc: "All selected tools sync database records." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-[10px] text-[#10B981] font-bold mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-800">{item.title}</span>
                      <span className="text-[11px] text-slate-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           <div className="lg:w-1/2 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px] order-1 lg:order-2">
              <div className="absolute inset-0 bg-[#10B981]/5 rounded-full blur-3xl" />
              
              <div className="relative w-full max-w-[320px] bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 text-white z-10 hover:border-[#10B981]/50 transition-all duration-300 transform hover:scale-[1.02] cursor-default">
                 <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Active Stack</span>
                    <span className="text-[10px] text-slate-400 font-mono">Step 2 of 5</span>
                 </div>
                 <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-3 p-2 bg-slate-800/40 border border-slate-800/60 hover:border-purple-500/40 rounded-xl transition-all duration-200">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <Mic className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-200">Voice to Excel</span>
                        <span className="text-[8px] text-slate-400">AI Transcriber</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 bg-slate-800/40 border border-slate-800/60 hover:border-amber-500/40 rounded-xl transition-all duration-200">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <Video className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-200">Video Editor</span>
                        <span className="text-[8px] text-slate-400">AI Creative</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 bg-slate-800/40 border border-slate-800/60 hover:border-blue-500/40 rounded-xl transition-all duration-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-200">Email Assistant</span>
                        <span className="text-[8px] text-slate-400">AI Assistant</span>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Glowing CPU/Core shape instead of Octopus */}
              <div className="absolute bottom-2 right-2 w-28 h-28 z-20 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                      <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#core-glow)" />
                    <path d="M 20 50 L 50 50 M 50 20 L 50 50 M 80 50 L 50 50" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                    <rect x="38" y="38" width="24" height="24" rx="4" fill="#020617" stroke="#10B981" strokeWidth="1.5" className="drop-shadow-[0_0_8px_#10B981]" />
                    <rect x="44" y="44" width="12" height="12" rx="2" fill="#10B981" />
                    <line x1="34" y1="43" x2="38" y2="43" stroke="#10B981" strokeWidth="1" />
                    <line x1="34" y1="50" x2="38" y2="50" stroke="#10B981" strokeWidth="1" />
                    <line x1="34" y1="57" x2="38" y2="57" stroke="#10B981" strokeWidth="1" />
                    <line x1="62" y1="43" x2="66" y2="43" stroke="#10B981" strokeWidth="1" />
                    <line x1="62" y1="50" x2="66" y2="50" stroke="#10B981" strokeWidth="1" />
                    <line x1="62" y1="57" x2="66" y2="57" stroke="#10B981" strokeWidth="1" />
                 </svg>
              </div>
           </div>
        </div>

        {/* Step 3: Subscribe */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.06)] sticky top-[140px] z-[3] mb-[25vh]">
           <div className="lg:w-1/2 bg-gradient-to-br from-[#2E1065] via-[#0F172A] to-[#1E1B4B] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px]"
                style={{
                  backgroundColor: '#1E1B4B',
                  backgroundImage: `
                    radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%),
                    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: '100% 100%, 24px 24px, 24px 24px'
                }}>
              
              <div className="relative w-full max-w-[320px] bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 text-white z-10 hover:border-[#8B5CF6]/50 transition-all duration-300 transform hover:scale-[1.02] cursor-default">
                 <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded w-max">Pro Plan</span>
                      <h4 className="text-base font-black text-slate-100 mt-1">Unlimited Access</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">$29</span>
                      <span className="text-[9px] text-slate-400 block font-mono">/mo</span>
                    </div>
                 </div>
                 
                 <div className="space-y-2 border-t border-slate-800/80 pt-3">
                    {[
                      "Unlock all 5 AI tools",
                      "Unlimited spreadsheet exports",
                      "Advanced video rendering",
                      "24/7 Priority API support"
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <span className="text-purple-400 font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                 </div>
                 
                 <div className="w-full h-8 bg-purple-600/15 border border-purple-500/30 rounded-lg flex items-center justify-between px-3 text-[10px] text-purple-300 font-bold mt-1">
                    <span>Plan Selected</span>
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                 </div>
              </div>
           </div>
           
           <div className="lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              {/* Radial Accent Glow Bleed */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-[0.08] pointer-events-none bg-[#8B5CF6]" />
              
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8B5CF6]">
                  Step 03
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
                Subscribe
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base mb-6">
                Choose your plan and gain unlimited access to the tools you need to grow your business. Scale your limits as your output multiplies.
              </p>
              
              <div className="space-y-3.5 border-t border-gray-100 pt-6">
                {[
                  { title: "No hidden charges", desc: "Transparent monthly tier pricing." },
                  { title: "Cancel at any time", desc: "Full control over your billing settings." },
                  { title: "Corporate ready SLAs", desc: "Low latency server resource allocation." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-[#8B5CF6] font-bold mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-800">{item.title}</span>
                      <span className="text-[11px] text-slate-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Step 4: Use Tool */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.06)] sticky top-[160px] z-[4] mb-[25vh]">
           <div className="lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1 relative overflow-hidden">
              {/* Radial Accent Glow Bleed */}
              <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-[0.08] pointer-events-none bg-[#3B82F6]" />
              
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B82F6]">
                  Step 04
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
                Use Tool
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base mb-6">
                Start creating. No complex learning curves required. Let AI handle the computational heavy lifting while you focus on business strategy.
              </p>
              
              <div className="space-y-3.5 border-t border-gray-100 pt-6">
                {[
                  { title: "AI-driven execution", desc: "Let LLMs handle structured operations." },
                  { title: "Prompt-only interface", desc: "No coding or configuration required." },
                  { title: "Real-time logs pipeline", desc: "Watch compiler execution metrics as they load." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[10px] text-[#3B82F6] font-bold mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-800">{item.title}</span>
                      <span className="text-[11px] text-slate-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           <div className="lg:w-1/2 bg-gradient-to-br from-[#1E3A8A] via-[#0F172A] to-[#1E293B] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px] order-1 lg:order-2">
              <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-3xl" />
              
              <div className="relative w-full max-w-[320px] bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 text-white z-10 hover:border-[#3B82F6]/50 transition-all duration-300 transform hover:scale-[1.02] cursor-default">
                 <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <span className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">ai-terminal.js</span>
                 </div>
                 <div className="flex flex-col gap-2 font-mono text-[9px] text-slate-300 bg-slate-950/80 rounded-xl p-3.5 border border-slate-800/80 leading-relaxed">
                    <div className="flex gap-1.5 text-slate-400">
                      <span>&gt;</span>
                      <span>initiate_ai_model()</span>
                    </div>
                    <div className="text-cyan-400">✓ Model Loaded: Gemini-Flash</div>
                   <div className="text-emerald-400">✓ Optimization workflow compiled</div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Settings className="w-3.5 h-3.5 text-blue-400 animate-spin [animation-duration:4s]" />
                      <span className="text-blue-400 font-semibold">Running tasks...</span>
                    </div>
                  </div>
              </div>
           </div>
        </div>

        {/* Step 5: Get Results */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.06)] sticky top-[180px] z-[5] mb-[20vh]">
           <div className="lg:w-1/2 bg-gradient-to-br from-[#064E3B] via-[#0F172A] to-[#022C22] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 bg-emerald-600/10 rounded-full blur-3xl" />
              
              <div className="relative w-full max-w-[320px] bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 text-white z-10 hover:border-[#10B981]/50 transition-all duration-300 transform hover:scale-[1.02] cursor-default">
                 <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Analytics</span>
                    <span className="text-emerald-400 text-xs font-black">Export Live</span>
                 </div>
                 
                 <div className="w-full h-24 relative mt-1">
                    <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="chart-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="20" x2="200" y2="20" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
                      <line x1="0" y1="50" x2="200" y2="50" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
                      <line x1="0" y1="80" x2="200" y2="80" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
                      <path
                        d="M 0 90 Q 40 70, 80 80 T 160 30 T 200 10 L 200 100 L 0 100 Z"
                        fill="url(#chart-grad)"
                      />
                      <path
                        d="M 0 90 Q 40 70, 80 80 T 160 30 T 200 10"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="200" cy="10" r="4" fill="#FFFFFF" className="drop-shadow-[0_0_6px_#10B981]" />
                    </svg>
                 </div>
                 
                 <div className="flex gap-2 justify-between items-center text-[9px] font-bold text-slate-400 mt-1">
                    <span>Exporting:</span>
                    <div className="flex gap-1.5 font-mono">
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">.XLSX</span>
                      <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded">.MP4</span>
                      <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-1.5 py-0.5 rounded">.PDF</span>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              {/* Radial Accent Glow Bleed */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-[0.08] pointer-events-none bg-[#10B981]" />
              
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10B981]">
                  Step 05
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
                Get Results
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base mb-6">
                Export & grow. Download production-ready assets, spreadsheets, and video files in seconds. Track operational metrics automatically.
              </p>
              
              <div className="space-y-3.5 border-t border-gray-100 pt-6">
                {[
                  { title: "Multi-format outputs", desc: "Export sheets, PDFs, and video formats." },
                  { title: "No export limits", desc: "Generate unlimited files on the pro tier." },
                  { title: "Live analytics dashboard", desc: "Track growth metrics inside your workspace." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-[10px] text-[#10B981] font-bold mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-800">{item.title}</span>
                      <span className="text-[11px] text-slate-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
