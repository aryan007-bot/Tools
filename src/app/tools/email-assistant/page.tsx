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
           Staring at a blank compose window is slow, stressful, and soul-crushing. ToolStack replaces writer&apos;s block and endless proofreading with a single AI-driven workflow that drafts, refines, and perfectly tones your emails instantly.
         </p>
         
         {/* Pencil Scribble Graphic */}
         <div className="relative w-full max-w-[600px] h-32 flex justify-center items-center">
            <svg className="w-full h-full" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M50,80 Q100,20 150,90 T250,30 T350,100 T450,40 T550,70" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
               <path d="M120,80 Q160,10 200,90 T300,20 T400,100 T500,40" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            </svg>
            <div className="absolute right-8 top-8 -rotate-12 text-5xl">✏️</div>
            <div className="absolute left-8 bottom-4 rotate-12 text-4xl opacity-80">〰️</div>
         </div>
      </section>

      {/* 3. ZIG-ZAG SECTION */}
      <section className="w-full bg-[#FFFEF9] py-20 flex flex-col items-center px-6">
         <h3 className="text-[2rem] font-serif text-[#1F2937] text-center mb-24 max-w-[600px] leading-[1.2]">
            ToolStack replaces email anxiety with a single automated drafting engine.
         </h3>

         {/* Feature 1 */}
         <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-full md:w-1/2 relative">
               <div className="w-full aspect-[4/3] bg-[#8b5cf6]/20 rounded-2xl border-2 border-[#8b5cf6] p-6 flex flex-col">
                  <div className="w-full h-8 bg-white rounded-t-md border-b border-gray-100 flex items-center px-3 gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                     <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white p-4 text-[11px] text-gray-500 overflow-hidden relative shadow-sm font-sans">
                     <div className="mb-2 text-[#8b5cf6] font-bold">Prompt: Tell the team the release is delayed to Friday.</div>
                     <div className="mt-4 p-3 bg-gray-50 border border-gray-100 rounded">
                        <span className="font-bold text-gray-800">Subject: Update on Q3 Release Timeline</span><br/><br/>
                        Hi Team,<br/><br/>
                        I wanted to provide a quick update on our Q3 release. To ensure we have adequate time for final QA, we are pushing the deployment to this Friday.<br/><br/>
                        Thanks for your hard work,<br/>
                        Alex
                     </div>
                     <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#8b5cf6] rounded-full flex items-center justify-center text-4xl text-white shadow-xl rotate-12">✨</div>
                  </div>
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
            <div className="w-full md:w-1/2 relative">
               <div className="w-full aspect-[4/3] bg-[#ec4899]/10 rounded-2xl border-2 border-[#ec4899] p-6 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="bg-white p-6 rounded-xl shadow-xl z-10 w-[80%] flex flex-col gap-4 relative">
                     <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <span className="text-sm font-bold text-gray-800">Tone Adjuster</span>
                        <span className="text-xl">🎚️</span>
                     </div>
                     <div className="flex flex-col gap-2">
                        <button className="w-full py-2 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold rounded hover:bg-gray-100 text-left px-3">😊 Friendly</button>
                        <button className="w-full py-2 bg-[#ec4899] border border-[#ec4899] text-white text-xs font-bold rounded shadow-sm text-left px-3 flex justify-between">
                           <span>👔 Professional</span> <span>✓</span>
                        </button>
                        <button className="w-full py-2 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold rounded hover:bg-gray-100 text-left px-3">🚀 Persuasive</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
               <h4 className="text-2xl font-serif font-bold text-[#1F2937]">Dynamic tone adjustment, effortless rewriting</h4>
               <p className="text-[#6B7280] text-sm leading-relaxed">
                  Too casual? Too aggressive? Select a tone and let ToolStack rewrite your draft instantly. Ensure every communication represents your professional best.
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
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-[#8b5cf6]/10 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">🤝</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Cold Outreach</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Generate highly personalized cold emails that grab attention and dramatically improve reply rates.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-[#ec4899]/10 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">📅</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Follow-ups</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Automate polite but persistent follow-ups after meetings, pitches, or ignored emails.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-orange-50 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">📢</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Newsletters</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Draft engaging weekly digests and product updates with AI-optimized subject lines.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-blue-50 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">🏢</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Internal Comms</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Communicate policy changes and project updates clearly and professionally to your team.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-green-50 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">🎧</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Support Responses</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Generate empathetic, accurate replies to customer support tickets in seconds.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-gray-100 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">⚡</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Send Scheduling</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Automatically calculate and schedule sends for the exact moment your recipient is most likely to open.</p>
            </div>

         </div>
      </section>

      {/* 5. COMPLIANCE SECTION */}
      <section className="w-full bg-[#FFFEF9] py-24 flex flex-col items-center px-6 text-center">
         <h3 className="text-[1.8rem] font-serif text-[#1F2937] mb-16">Built for business. Compliant by design.</h3>
         
         <div className="flex flex-wrap justify-center gap-12 max-w-[900px]">
            <div className="flex flex-col items-center max-w-[150px]">
               <div className="w-20 h-20 bg-[#8b5cf6] rounded-xl shadow-lg -rotate-3 flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">⚙️</span>
               </div>
               <h5 className="font-bold text-xs text-[#1F2937] mb-2">Tested by Enterprises</h5>
               <p className="text-[10px] text-gray-500">Built to handle high-volume communications for enterprise teams.</p>
            </div>
            
            <div className="flex flex-col items-center max-w-[150px]">
               <div className="w-20 h-20 bg-[#ec4899] rounded-xl shadow-lg rotate-3 flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🔍</span>
               </div>
               <h5 className="font-bold text-xs text-[#1F2937] mb-2">Data Stays Yours</h5>
               <p className="text-[10px] text-gray-500">Your email drafts and contacts are never used to train our models.</p>
            </div>
            
            <div className="flex flex-col items-center max-w-[150px]">
               <div className="w-20 h-20 bg-orange-400 rounded-xl shadow-lg -rotate-6 flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🔒</span>
               </div>
               <h5 className="font-bold text-xs text-[#1F2937] mb-2">SOC2 Compliant</h5>
               <p className="text-[10px] text-gray-500">Banking-level security ensuring your communications remain entirely private.</p>
            </div>
            
            <div className="flex flex-col items-center max-w-[150px]">
               <div className="w-20 h-20 bg-blue-500 rounded-xl shadow-lg rotate-6 flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">✅</span>
               </div>
               <h5 className="font-bold text-xs text-[#1F2937] mb-2">GDPR Ready</h5>
               <p className="text-[10px] text-gray-500">Fully compliant with international communication privacy laws.</p>
            </div>
         </div>

         <div className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-6">
            <span className="text-xs text-gray-400 font-medium">Security and privacy you can trust</span>
            <div className="flex gap-2">
               <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">🛡️</div>
               <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-[10px]">🔐</div>
               <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px]">✓</div>
            </div>
         </div>
      </section>

      {/* 6. INTEGRATIONS MARQUEE */}
      <section className="w-full bg-[#FFFEF9] py-24 overflow-hidden flex flex-col items-center text-center">
         <h3 className="text-[1.8rem] font-serif text-[#1F2937] mb-4">Works with what<br/>you already use</h3>
         <p className="text-[#6B7280] text-xs max-w-[400px] mb-16">
            ToolStack integrates directly with your existing email providers and CRM software.
         </p>

         <div className="relative w-full flex overflow-x-hidden">
            <motion.div 
               animate={{ x: ["0%", "-50%"] }} 
               transition={{ duration: 20, ease: "linear", repeat: Infinity }}
               className="flex gap-8 whitespace-nowrap min-w-max px-4"
            >
               {/* Marquee Items x2 for seamless loop */}
               {[...Array(2)].map((_, j) => (
                  <div key={j} className="flex gap-8">
                     {["Gmail", "Outlook", "HubSpot", "Salesforce", "Mailchimp", "SendGrid", "Apollo", "Slack"].map((logo, i) => (
                        <div key={i} className={`w-40 h-20 bg-white border border-gray-200 shadow-sm flex items-center justify-center transform ${i%2===0 ? 'rotate-3' : '-rotate-2'} relative overflow-hidden`}>
                           {/* Graph Paper Background */}
                           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                           <span className="font-bold text-gray-700 text-sm relative z-10 flex items-center gap-2">
                              <span className="text-[#8b5cf6]">🟪</span> {logo}
                           </span>
                        </div>
                     ))}
                  </div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* 7. PRE-FOOTER SHAPES & CTA */}
      <section className="w-full bg-[#FFFEF9] pt-24 pb-0 flex flex-col items-center text-center relative">
         <h3 className="text-[1.8rem] font-serif text-[#1F2937] mb-8">See how ToolStack works</h3>
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

      {/* 8. FOOTER */}
      <footer className="w-full bg-[#1a1130] pt-12 pb-24 px-6 flex flex-col items-center relative z-20">
         <div className="w-full max-w-[1200px] flex justify-between text-[10px] text-gray-400 mb-20 uppercase tracking-widest font-bold">
            <div className="flex gap-4">
               <span>X</span>
               <span>In</span>
               <span>Yt</span>
            </div>
            <div className="flex gap-4">
               <span>Terms</span>
               <span>Privacy</span>
               <span>Contact</span>
            </div>
         </div>
         
         <div className="w-full max-w-[1200px] flex justify-center">
            <h1 className="text-[6rem] md:text-[14rem] font-serif font-black text-[#8b5cf6] leading-none tracking-tighter mix-blend-screen opacity-90">
               ToolStack
            </h1>
         </div>
      </footer>

    </div>
  );
}
