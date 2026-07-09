"use client";

import { motion } from "framer-motion";

export default function EmailAssistantKiraPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF9] font-sans selection:bg-[#8b5cf6] selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full flex flex-col items-center">
         
         {/* Top Text (Cream Background area) */}
         <div className="w-full relative z-20 text-center px-6 pt-24 pb-16 bg-[#FFFEF9]">
            <div className="max-w-[800px] mx-auto">
               <h1 className="text-[3rem] md:text-[4.5rem] font-serif text-[#1F2937] leading-[1.2] mb-6">
                 The <span className="relative inline-block mx-1">
                    <span className="absolute inset-0 bg-[#8b5cf6] rounded -rotate-2 scale-110"></span>
                    <span className="relative text-white z-10 px-1">AI</span>
                 </span> email generation <br />
                 system for <span className="relative inline-block mx-1">
                    <span className="absolute inset-0 bg-[#ec4899] rounded rotate-1 scale-110"></span>
                    <span className="relative text-white z-10 px-1">Professionals</span>
                 </span>
               </h1>
               <p className="text-[#6B7280] text-sm md:text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
                 Generate, improve, and automate emails. From smart drafts to tone adjustments, templates to scheduling — your complete email workflow.
               </p>
               <div className="flex items-center justify-center gap-4">
                 <button className="bg-[#1F2937] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black transition-colors">
                   Start Drafting
                 </button>
                 <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                   Book a demo
                 </button>
               </div>
            </div>
         </div>

         {/* Purple Grid Background Area */}
         <div className="relative w-full bg-[#8b5cf6] z-0 overflow-hidden flex flex-col items-center pt-24 pb-40">
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
            />
            
            {/* Huge Floating Blobs */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#7c3aed] rounded-full mix-blend-multiply opacity-50 blur-xl" />
            <div className="absolute top-40 -right-64 w-[800px] h-[800px] bg-[#a855f7] rounded-full mix-blend-multiply opacity-60 flex items-center justify-center">
               <div className="w-full h-full rounded-full border-[40px] border-[#c084fc] border-dashed opacity-30 animate-[spin_60s_linear_infinite]" />
            </div>

            {/* Black Scribble on the right */}
            <div className="absolute top-12 right-12 md:right-32 z-20 w-48 h-48 pointer-events-none opacity-90">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10,100 Q50,60 90,110 T180,90 M20,130 Q60,90 100,140 T190,120 M30,160 Q70,120 110,170 T170,150" stroke="#1F2937" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>

            {/* Large Mockup overlapping the grid */}
            <div className="relative z-10 w-full max-w-[1200px] px-6">
               <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full bg-white rounded-t-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex overflow-hidden min-h-[700px] border-b-0 border border-gray-200"
               >
               {/* Sidebar */}
               <div className="w-[80px] md:w-[240px] bg-[#1a1130] flex flex-col items-center md:items-start py-6 text-gray-400">
                  <div className="w-10 h-10 bg-white/10 rounded-xl mb-10 mx-auto md:ml-6 flex items-center justify-center text-white text-xl">✉️</div>
                  <div className="flex flex-col w-full gap-2 px-2 md:px-4">
                     <div className="w-full py-3 px-4 bg-white/10 text-white rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>📥</span><span className="hidden md:block text-sm font-medium">Inbox</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>✨</span><span className="hidden md:block text-sm font-medium">AI Drafts</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>📝</span><span className="hidden md:block text-sm font-medium">Templates</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>📅</span><span className="hidden md:block text-sm font-medium">Scheduled</span>
                     </div>
                  </div>
               </div>
               
               {/* Main UI Area */}
               <div className="flex-1 bg-white p-6 md:p-10 flex flex-col gap-8">
                  <div className="flex justify-between items-center">
                     <h2 className="text-xl font-bold text-gray-800">Email Studio</h2>
                     <button className="text-xs font-bold border border-gray-200 rounded-full px-4 py-1.5 hover:bg-gray-50">Compose</button>
                  </div>
                  
                  {/* Top Cards */}
                  <div className="flex gap-4 overflow-x-auto pb-4">
                     <div className="min-w-[200px] bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#8b5cf6] text-white rounded flex items-center justify-center text-lg">✍️</div>
                        <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-sm">Cold Outreach</span>
                           <span className="text-[10px] text-gray-500">Sales sequence</span>
                        </div>
                     </div>
                     <div className="min-w-[200px] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-pink-100 text-pink-500 rounded flex items-center justify-center text-lg">🤝</div>
                        <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-sm">Follow Up</span>
                           <span className="text-[10px] text-gray-500">Post-meeting</span>
                        </div>
                     </div>
                     <div className="min-w-[200px] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded flex items-center justify-center text-lg">📢</div>
                        <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-sm">Newsletter</span>
                           <span className="text-[10px] text-gray-500">Weekly digest</span>
                        </div>
                     </div>
                  </div>

                  {/* Processing Queue */}
                  <div className="flex justify-between items-center mt-4">
                     <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-gray-800">Active Drafts</h2>
                        <span className="bg-[#1a1130] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
                     </div>
                  </div>

                  <div className="flex flex-col gap-3 border border-gray-100 rounded-xl p-2 bg-gray-50">
                     <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
                        <div>
                           <div className="font-bold text-gray-800 text-sm">Project Timeline Update</div>
                           <div className="text-[11px] text-gray-500 mt-1">To: Dev Team • Tone: Professional</div>
                        </div>
                        <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full border border-purple-100 flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" /> Refining
                        </span>
                     </div>
                     <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
                        <div>
                           <div className="font-bold text-gray-800 text-sm">Client Onboarding Welcome</div>
                           <div className="text-[11px] text-gray-500 mt-1">To: Sarah Jenkins • Tone: Friendly</div>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                           Ready to Send
                        </span>
                     </div>
                  </div>

               </div>
               
               {/* Right Side Pane */}
               <div className="hidden lg:flex w-[350px] bg-white border-l border-gray-200 flex-col p-8">
                  <div className="w-full flex justify-between items-center mb-12">
                     <div className="w-8 h-8 bg-[#ec4899] rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
                     <div className="flex gap-2">
                        <button className="w-6 h-6 text-gray-400 hover:text-gray-600">^</button>
                        <button className="w-6 h-6 text-gray-400 hover:text-gray-600">x</button>
                     </div>
                  </div>
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-400 via-fuchsia-500 to-pink-500 mb-8 overflow-hidden relative shadow-inner">
                     <div className="absolute inset-0 bg-white/20 blur-2xl" />
                     <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">✨</div>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800 font-bold mb-6 text-center">AI Copilot</h3>
                  <button className="w-full py-3 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full font-bold text-sm mb-3 hover:bg-[#8b5cf6]/20 transition-colors">
                     🪄 Generate from Prompt
                  </button>
                  <button className="w-full py-3 bg-gray-50 text-gray-600 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                     🔄 Adjust Tone
                  </button>
               </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 2. STATEMENT SECTION */}
      <section className="w-full bg-[#FFFEF9] py-32 flex flex-col items-center text-center px-6 relative z-20">
         <h2 className="text-[2rem] md:text-[3rem] font-serif text-[#1F2937] leading-[1.2] max-w-[800px] mb-8">
           Professionals do not need more typing. They need a <span className="inline-block bg-[#8b5cf6]/20 text-[#8b5cf6] px-2">system.</span>
         </h2>
         <p className="text-[#6B7280] text-sm md:text-base max-w-[700px] leading-relaxed mb-12">
           Staring at a blank compose window is slow, stressful, and soul-crushing. Email Assistant replaces writer&apos;s block and endless proofreading with a single AI-driven workflow that drafts, refines, and perfectly tones your emails instantly.
         </p>
         
         {/* Animated Transformation Graphic */}
         <div className="relative w-full max-w-[500px] mt-10">
            <div className="w-full bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-4 md:p-6 flex flex-col gap-4">
               
               {/* Incoming Mail */}
               <motion.div 
                  className="w-[90%] md:w-[85%] bg-gray-50 border border-gray-200 rounded-2xl rounded-tl-sm p-4 text-left"
                  animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                  transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
               >
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">👤</div>
                     <span className="text-xs font-bold text-gray-700">Important Client</span>
                     <span className="text-[10px] text-gray-400 ml-auto">10:42 AM</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                     Hi Team, we need to push the launch to next Thursday. Can you let me know if that works for your schedule?
                  </p>
               </motion.div>

               {/* AI Processing Magic */}
               <div className="relative h-10 w-full flex justify-end pr-[45%]">
                  <motion.div 
                     className="w-0.5 h-full bg-gradient-to-b from-gray-200 to-[#8b5cf6]"
                     animate={{ opacity: [0, 1, 1, 0] }}
                     transition={{ duration: 8, repeat: Infinity, times: [0, 0.2, 0.9, 1] }}
                  />
                  <motion.div 
                     className="absolute top-1/2 -translate-y-1/2 right-[calc(45%-14px)] w-7 h-7 bg-white border border-[#8b5cf6]/30 shadow-md rounded-full flex items-center justify-center text-xs z-10"
                     animate={{ 
                        rotate: 360, 
                        scale: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0]
                     }}
                     transition={{ duration: 8, repeat: Infinity, times: [0, 0.2, 0.9, 1] }}
                  >
                     ✨
                  </motion.div>
                  <motion.div 
                     className="absolute top-1/2 -translate-y-1/2 right-[calc(45%+24px)] bg-[#8b5cf6]/10 text-[#8b5cf6] text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap"
                     animate={{ opacity: [0, 0, 1, 0, 0] }}
                     transition={{ duration: 8, repeat: Infinity, times: [0, 0.2, 0.3, 0.45, 1] }}
                  >
                     AI Drafting Reply...
                  </motion.div>
               </div>

               {/* AI Reply Draft */}
               <motion.div 
                  className="w-[90%] md:w-[85%] self-end bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] text-white rounded-2xl rounded-tr-sm p-4 text-left shadow-[0_10px_30px_rgba(139,92,246,0.3)] relative"
                  animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [10, 10, 10, 0, 0, -10] }}
                  transition={{ duration: 8, repeat: Infinity, times: [0, 0.4, 0.45, 0.55, 0.9, 1] }}
               >
                  <div className="flex items-center gap-2 mb-2 border-b border-white/20 pb-2">
                     <div className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-white/20">🪄</div>
                     <span className="text-xs font-bold tracking-wide">AI Auto-Draft</span>
                     <div className="ml-auto flex gap-1.5">
                        <button className="bg-white/20 hover:bg-white/30 text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-wider">Edit</button>
                        <button className="bg-white text-[#8b5cf6] text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-wider shadow-sm">Send</button>
                     </div>
                  </div>
                  <p className="text-sm text-white/95 leading-relaxed">
                     Absolutely! Next Thursday works perfectly for our team. I have updated our timeline accordingly. Let us know if you need anything else before then.
                  </p>
               </motion.div>
               
            </div>
         </div>
      </section>

      {/* 3. ZIG-ZAG SECTION */}
      <section className="w-full bg-[#FFFEF9] py-20 flex flex-col items-center px-6">
         <h3 className="text-[2rem] font-serif text-[#1F2937] text-center mb-24 max-w-[600px] leading-[1.2]">
            Email Assistant replaces email anxiety with a single automated drafting engine.
         </h3>

         {/* Feature 1 */}
         <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-full md:w-1/2 relative h-[350px] md:h-[400px]">
               <div className="absolute inset-0 bg-gradient-to-br from-[#1a1130] to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <motion.div 
                     className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[80px] opacity-30" 
                     animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
               </div>
               
               <div className="absolute inset-0 flex flex-col p-6 z-10 justify-center">
                  <motion.div 
                     className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                  >
                     <div className="w-full h-8 bg-black/40 flex items-center px-3 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                     </div>
                     <div className="p-4 flex flex-col gap-3">
                        <div className="text-purple-300 text-xs font-mono mb-2 flex items-center gap-2">
                           <span className="animate-pulse">▶</span> Prompt: Tell the team the release is delayed to Friday.
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-xs text-gray-300 leading-relaxed font-sans">
                           <span className="font-bold text-white mb-2 block">Subject: Update on Q3 Release Timeline</span>
                           Hi Team,<br/><br/>
                           I wanted to provide a quick update on our Q3 release. To ensure we have adequate time for final QA, we are pushing the deployment to this Friday.<br/><br/>
                           Thanks for your hard work,<br/>
                           Alex
                        </div>
                     </div>
                  </motion.div>
                  <motion.div 
                     className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center text-3xl text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] border-2 border-white/20"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                     ✨
                  </motion.div>
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
               <h4 className="text-2xl font-serif font-bold text-[#1F2937]">Context-aware generation, not blank screens</h4>
               <p className="text-[#6B7280] text-sm leading-relaxed">
                  Turn a five-word thought into a polished, professional email in seconds. Our AI understands context and relationships, ensuring your message always strikes the right chord.
               </p>
            </div>
         </div>

         {/* Feature 2 */}
         <div className="w-full max-w-[1000px] flex flex-col md:flex-row-reverse items-center gap-16 mb-24">
            <div className="w-full md:w-1/2 relative h-[350px] md:h-[400px]">
               <div className="absolute inset-0 bg-gradient-to-br from-[#ec4899]/10 to-transparent rounded-3xl overflow-hidden border border-[#ec4899]/20 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  
                  <motion.div 
                     className="bg-white p-6 rounded-2xl shadow-xl z-10 w-[80%] flex flex-col gap-4 relative border border-gray-100"
                     initial={{ scale: 0.9, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                  >
                     <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <span className="text-sm font-bold text-gray-800 flex items-center gap-2"><span className="text-xl">🎚️</span> Tone Adjuster</span>
                     </div>
                     <div className="flex flex-col gap-3">
                        <div className="w-full py-3 bg-gray-50 border border-gray-100 text-gray-500 text-xs font-bold rounded-xl text-left px-4 hover:bg-gray-100 transition-colors cursor-pointer">😊 Friendly</div>
                        <motion.div 
                           className="w-full py-3 bg-gradient-to-r from-[#ec4899] to-pink-500 text-white text-xs font-bold rounded-xl shadow-md text-left px-4 flex justify-between items-center relative overflow-hidden group cursor-pointer"
                           whileHover={{ scale: 1.02 }}
                        >
                           <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                           <span className="relative z-10">👔 Professional</span> 
                           <motion.span className="relative z-10 bg-white/20 w-5 h-5 rounded-full flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>✓</motion.span>
                        </motion.div>
                        <div className="w-full py-3 bg-gray-50 border border-gray-100 text-gray-500 text-xs font-bold rounded-xl text-left px-4 hover:bg-gray-100 transition-colors cursor-pointer">🚀 Persuasive</div>
                     </div>
                  </motion.div>
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
               <h4 className="text-2xl font-serif font-bold text-[#1F2937]">Dynamic tone adjustment, effortless rewriting</h4>
               <p className="text-[#6B7280] text-sm leading-relaxed">
                  Too casual? Too aggressive? Select a tone and let Email Assistant rewrite your draft instantly. Ensure every communication represents your professional best.
               </p>
            </div>
         </div>
      </section>

      {/* 4. GRID SECTION */}
      <section className="w-full bg-[#FFFEF9] py-24 flex flex-col items-center px-6">
         <h3 className="text-[2rem] font-serif text-[#1F2937] text-center mb-4 max-w-[600px] leading-[1.2]">
            One system for every communication reality
         </h3>
         <p className="text-[#6B7280] text-sm text-center mb-16 max-w-[500px]">
            From cold outreach to team updates, handle every type of email with specialized AI workflows.
         </p>

         <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-[#8b5cf6]/10 to-purple-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-[#8b5cf6]/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-[#8b5cf6]/30 text-[#8b5cf6] text-2xl"
                     whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                     🤝
                  </motion.div>
                  <motion.div 
                     className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%]"
                     animate={{ backgroundPosition: ["-100% 0%", "200% 0%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Cold Outreach</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Generate highly personalized cold emails that grab attention and dramatically improve reply rates.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#ec4899]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-[#ec4899]/10 to-pink-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-[#ec4899]/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-[#ec4899]/30 text-[#ec4899] text-2xl"
                     animate={{ y: [-5, 5, -5] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                     📅
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Follow-ups</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Automate polite but persistent follow-ups after meetings, pitches, or ignored emails.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-orange-500/10 to-orange-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-orange-500/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-orange-500/30 text-orange-500 text-2xl"
                     whileHover={{ scale: 1.1 }}
                  >
                     📢
                  </motion.div>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Newsletters</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Draft engaging weekly digests and product updates with AI-optimized subject lines.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-blue-500/10 to-blue-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-blue-500/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-blue-500/30 text-blue-500 text-2xl"
                     animate={{ rotate: [0, 10, -10, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                  >
                     🏢
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Internal Comms</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Communicate policy changes and project updates clearly and professionally to your team.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-green-500/10 to-green-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-green-500/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-green-500/30 text-green-500 text-2xl"
                     animate={{ scale: [1, 1.05, 1] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                     🎧
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Support Responses</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Generate empathetic, accurate replies to customer support tickets in seconds.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-gray-300">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-gray-300 text-gray-600 text-2xl relative overflow-hidden"
                     whileHover={{ scale: 1.1 }}
                  >
                     ⚡
                     <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50"
                        animate={{ y: ["100%", "-100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     />
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Send Scheduling</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Automatically calculate and schedule sends for the exact moment your recipient is most likely to open.</p>
            </div>

         </div>
      </section>

      {/* 5. PRE-FOOTER SHAPES & CTA */}
      <section className="w-full bg-[#FFFEF9] pt-24 pb-0 flex flex-col items-center text-center relative">
         <h3 className="text-[1.8rem] font-serif text-[#1F2937] mb-8">Try Email Assistant today</h3>
         <div className="flex gap-4 mb-16 relative z-20">
            <button className="bg-[#1F2937] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black">Start for free</button>
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50">Book a demo</button>
         </div>

         {/* Floating Geometric Pile */}
         <div className="relative w-full max-w-[800px] h-[300px] flex justify-center items-end -mb-10 z-10 overflow-hidden md:overflow-visible">
            
            {/* Shapes */}
            <div className="absolute bottom-10 left-10 md:left-32 w-32 h-32 bg-[#8b5cf6] rounded-full flex items-center justify-center rotate-12 shadow-lg">
               <span className="text-[10px] font-bold text-white">Outreach</span>
            </div>
            
            <div className="absolute bottom-20 left-40 md:left-64 w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-[#ec4899] border-r-[60px] border-r-transparent -rotate-12 flex items-end justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white mb-2 ml-4">Tone</span>
            </div>

            <div className="absolute bottom-5 right-20 md:right-40 w-40 h-20 bg-[#06b6d4] rotate-6 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white">Templates</span>
            </div>
            
            <div className="absolute bottom-32 right-32 md:right-64 w-32 h-40 bg-orange-500 -rotate-12 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white">Follow-ups</span>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#8b5cf6] rounded flex items-center justify-center shadow-lg rotate-2">
               <span className="text-xs font-bold text-white">Smart Drafts</span>
            </div>

            {/* Doodles */}
            <div className="absolute bottom-40 left-20 text-3xl opacity-80 -rotate-45">〰️</div>
            <div className="absolute bottom-52 right-1/4 text-4xl opacity-80">🌀</div>
         </div>
      </section>

    </div>
  );
}
