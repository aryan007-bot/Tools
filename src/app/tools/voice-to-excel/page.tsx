"use client";

import { motion } from "framer-motion";

export default function VoiceToExcelKiraPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF9] font-sans selection:bg-[#9D7BFE] selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full flex flex-col items-center">
         
         {/* Top Text (Cream Background area) */}
         <div className="w-full relative z-20 text-center px-6 pt-24 pb-16 bg-[#FFFEF9]">
            <div className="max-w-[800px] mx-auto">
               <h1 className="text-[3rem] md:text-[4.5rem] font-serif text-[#1F2937] leading-[1.2] mb-6">
                 Convert <span className="relative inline-block mx-1">
                    <span className="absolute inset-0 bg-[#9D7BFE] rounded -rotate-2 scale-110"></span>
                    <span className="relative text-white z-10 px-1">Speech</span>
                 </span> into <br />
                 structured <span className="relative inline-block mx-1">
                    <span className="absolute inset-0 bg-[#0AEB9A] rounded rotate-1 scale-110"></span>
                    <span className="relative text-[#1F2937] z-10 px-1">Excel</span>
                 </span> sheets
               </h1>
               <p className="text-[#6B7280] text-sm md:text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
                 Eliminate manual typing. Speak your inventory, meeting notes, and expenses directly into perfectly formatted Excel spreadsheets.
               </p>
               <div className="flex items-center justify-center gap-4">
                 <button className="bg-[#1F2937] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black transition-colors">
                   Start Recording
                 </button>
                 <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                   Book a demo
                 </button>
               </div>
            </div>
         </div>

         {/* Purple Grid Background Area */}
         <div className="relative w-full bg-[#9D7BFE] z-0 overflow-hidden flex flex-col items-center pt-24 pb-40">
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
            />
            
            {/* Huge Floating Purple Blobs */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8a63f7] rounded-full mix-blend-multiply opacity-50 blur-xl" />
            <div className="absolute top-40 -right-64 w-[800px] h-[800px] bg-[#8a63f7] rounded-full mix-blend-multiply opacity-60 flex items-center justify-center">
               <div className="w-full h-full rounded-full border-[40px] border-[#a88bfd] border-dashed opacity-30 animate-[spin_60s_linear_infinite]" />
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
                  <div className="w-10 h-10 bg-white/10 rounded-xl mb-10 mx-auto md:ml-6 flex items-center justify-center text-white text-xl">🎙️</div>
                  <div className="flex flex-col w-full gap-2 px-2 md:px-4">
                     <div className="w-full py-3 px-4 bg-white/10 text-white rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>📊</span><span className="hidden md:block text-sm font-medium">Data Studio</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>📝</span><span className="hidden md:block text-sm font-medium">Templates</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>⚡</span><span className="hidden md:block text-sm font-medium">Automations</span>
                     </div>
                  </div>
               </div>
               
               {/* Main UI Area */}
               <div className="flex-1 bg-white p-6 md:p-10 flex flex-col gap-8">
                  <div className="flex justify-between items-center">
                     <h2 className="text-xl font-bold text-gray-800">Voice Tools</h2>
                     <button className="text-xs font-bold border border-gray-200 rounded-full px-4 py-1.5 hover:bg-gray-50">View All</button>
                  </div>
                  
                  {/* Top Cards */}
                  <div className="flex gap-4 overflow-x-auto pb-4">
                     <div className="min-w-[200px] bg-[#9D7BFE]/10 border border-[#9D7BFE]/30 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#9D7BFE] text-white rounded flex items-center justify-center text-lg">🎤</div>
                        <span className="font-bold text-gray-800 text-sm">Inventory Dictation</span>
                     </div>
                     <div className="min-w-[200px] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-pink-100 text-pink-500 rounded flex items-center justify-center text-lg">💰</div>
                        <span className="font-bold text-gray-600 text-sm">Expense Tracking</span>
                     </div>
                     <div className="min-w-[200px] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-500 rounded flex items-center justify-center text-lg">📋</div>
                        <span className="font-bold text-gray-600 text-sm">Meeting Minutes</span>
                     </div>
                  </div>

                  {/* Processing Queue */}
                  <div className="flex justify-between items-center mt-4">
                     <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-gray-800">Processing Queue</h2>
                        <span className="bg-[#1a1130] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">12</span>
                     </div>
                  </div>

                  <div className="flex flex-col gap-3 border border-gray-100 rounded-xl p-2 bg-gray-50">
                     <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
                        <div>
                           <div className="font-bold text-gray-800 text-sm">Warehouse Stock Count - Sector 4</div>
                           <div className="text-[11px] text-gray-500 mt-1">15 items processed</div>
                        </div>
                        <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full border border-red-100 flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Processing
                        </span>
                     </div>
                     <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm opacity-60">
                        <div>
                           <div className="font-bold text-gray-800 text-sm">Monthly Expenses - Jan 2024</div>
                           <div className="text-[11px] text-gray-500 mt-1">Ready for export</div>
                        </div>
                        <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                           Pending Export
                        </span>
                     </div>
                  </div>

               </div>
               
               {/* Right Side Pane */}
               <div className="hidden lg:flex w-[350px] bg-white border-l border-gray-200 flex-col p-8">
                  <div className="w-full flex justify-between items-center mb-12">
                     <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">.</div>
                     <div className="flex gap-2">
                        <button className="w-6 h-6 text-gray-400 hover:text-gray-600">^</button>
                        <button className="w-6 h-6 text-gray-400 hover:text-gray-600">x</button>
                     </div>
                  </div>
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 mb-8 overflow-hidden relative shadow-inner">
                     <div className="absolute inset-0 bg-white/20 blur-2xl" />
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800 font-bold mb-6 text-center">Welcome back, Alex!</h3>
                  <button className="w-full py-3 bg-[#9D7BFE]/10 text-[#9D7BFE] rounded-full font-bold text-sm mb-3 hover:bg-[#9D7BFE]/20 transition-colors">
                     🎙️ Start New Dictation
                  </button>
                  <button className="w-full py-3 bg-gray-50 text-gray-600 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                     📁 Upload Audio File
                  </button>
               </div>
            </motion.div>
         </div>
         </div>
      </section>

      {/* 2. STATEMENT SECTION */}
      <section className="w-full bg-[#FFFEF9] py-32 flex flex-col items-center text-center px-6 relative z-20">
         <h2 className="text-[2rem] md:text-[3rem] font-serif text-[#1F2937] leading-[1.2] max-w-[800px] mb-8">
           Stop typing. Start <span className="inline-block bg-[#9D7BFE]/20 text-[#9D7BFE] px-2">speaking</span> to Excel.
         </h2>
         <p className="text-[#6B7280] text-sm md:text-base max-w-[700px] leading-relaxed mb-12">
           Typing data into spreadsheets is slow, error-prone, and soul-crushing. Voice to Excel replaces manual copy-pasting, tedious formatting, and endless correction cycles with a powerful speech-to-text workflow that structures your data instantly.
         </p>
         
         {/* Voice to Data Graphic */}
         <div className="relative w-full max-w-[600px] h-32 flex justify-center items-center mt-4">
            <div className="w-full h-full flex items-center justify-between px-16 relative z-10">
               {/* Left: Audio Waveform */}
               <div className="flex items-center gap-1.5 h-16">
                  {[40, 70, 40, 100, 60, 80, 30, 90, 50].map((h, i) => (
                     <motion.div 
                        key={i} 
                        className="w-2 rounded-full bg-[#9D7BFE]" 
                        animate={{ height: [`${h}%`, `${Math.max(20, h - 30)}%`, `${Math.min(100, h + 30)}%`, `${h}%`] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                     />
                  ))}
               </div>

               {/* Center: Processing Arrow */}
               <div className="flex items-center gap-2 opacity-60">
                  {[0, 1, 2].map((i) => (
                     <motion.div 
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-[#0AEB9A]' : 'bg-gray-300'}`}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                     />
                  ))}
                  <motion.div
                     animate={{ x: [0, 5, 0] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0AEB9A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                     </svg>
                  </motion.div>
               </div>

               {/* Right: Excel Grid */}
               <div className="grid grid-cols-3 gap-1.5">
                  {[...Array(9)].map((_, i) => (
                     <motion.div 
                        key={i} 
                        className={`w-8 h-4 rounded-sm border ${i === 4 ? 'bg-[#0AEB9A] border-[#0AEB9A]' : 'bg-[#0AEB9A]/10 border-[#0AEB9A]/30'}`}
                        animate={i === 4 ? { opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] } : {}}
                        transition={i === 4 ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                     />
                  ))}
               </div>
            </div>

            <motion.div 
               className="absolute left-6 top-2 -rotate-12 text-4xl drop-shadow-sm"
               animate={{ y: [0, -4, 0], rotate: [-12, -8, -12] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
               🎙️
            </motion.div>
            <motion.div 
               className="absolute right-6 bottom-0 rotate-12 text-4xl drop-shadow-sm"
               animate={{ y: [0, 4, 0], rotate: [12, 16, 12] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
               📊
            </motion.div>
         </div>
      </section>

      {/* 3. ZIG-ZAG SECTION */}
      <section className="w-full bg-[#FFFEF9] py-20 flex flex-col items-center px-6">
         <h3 className="text-[2rem] font-serif text-[#1F2937] text-center mb-24 max-w-[600px] leading-[1.2]">
            Turn your voice into organized Excel data seamlessly.
         </h3>

         {/* Feature 1 */}
         <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-full md:w-1/2 relative h-[350px] md:h-[400px]">
               {/* Background Layer */}
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-blue-50 rounded-3xl border border-white shadow-inner overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  <motion.div 
                     className="absolute top-0 right-0 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" 
                     animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                     className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" 
                     animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
               </div>

               {/* Main Glass Window */}
               <motion.div 
                  className="absolute inset-4 sm:inset-8 bg-white/70 backdrop-blur-xl rounded-2xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col z-10"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
               >
                  <div className="h-10 bg-white/50 border-b border-white/60 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                     <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                     <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                     <div className="ml-auto w-24 h-4 bg-gray-200/50 rounded-full" />
                  </div>
                  
                  <div className="p-4 sm:p-5 flex-1 flex flex-col gap-4 relative">
                     {/* Voice Input Chat Bubble */}
                     <motion.div 
                        className="self-start bg-emerald-500 text-white text-[10px] sm:text-xs font-medium px-4 py-2 rounded-2xl rounded-tl-sm shadow-md flex items-center gap-2 max-w-[85%]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                     >
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>🎙️</motion.div>
                        "Add 5 laptops to the inventory..."
                     </motion.div>

                     {/* Processing Indicator */}
                     <motion.div 
                        className="self-center flex items-center gap-1.5 opacity-50 my-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.5 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                     >
                        <motion.div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                        <motion.div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                        <motion.div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                     </motion.div>

                     {/* Structured Data Table */}
                     <motion.div 
                        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mt-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        viewport={{ once: true }}
                     >
                        <table className="w-full text-left text-[9px] sm:text-[10px]">
                           <thead className="bg-gray-50 text-gray-500 font-medium">
                              <tr>
                                 <th className="px-2 py-1.5 sm:px-3 sm:py-2">Item</th>
                                 <th className="px-2 py-1.5 sm:px-3 sm:py-2">Qty</th>
                                 <th className="px-2 py-1.5 sm:px-3 sm:py-2">Dept</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr className="border-b border-gray-50">
                                 <td className="px-2 py-1.5 sm:px-3 sm:py-2 text-gray-800">Monitor</td>
                                 <td className="px-2 py-1.5 sm:px-3 sm:py-2 text-gray-800">2</td>
                                 <td className="px-2 py-1.5 sm:px-3 sm:py-2"><span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">IT</span></td>
                              </tr>
                              <motion.tr 
                                 className="bg-emerald-50/50"
                                 initial={{ backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                                 animate={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                                 transition={{ delay: 1.5, duration: 2 }}
                              >
                                 <td className="px-2 py-1.5 sm:px-3 sm:py-2 text-gray-800 font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                    Laptop
                                 </td>
                                 <td className="px-2 py-1.5 sm:px-3 sm:py-2 text-gray-800 font-medium">5</td>
                                 <td className="px-2 py-1.5 sm:px-3 sm:py-2"><span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-medium">Electronics</span></td>
                              </motion.tr>
                           </tbody>
                        </table>
                     </motion.div>
                  </div>
               </motion.div>

               {/* Floating Elements for Depth */}
               <motion.div 
                  className="absolute -right-2 sm:-right-6 top-20 bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center text-lg sm:text-xl">✨</div>
                  <div className="hidden sm:block">
                     <p className="text-[10px] font-bold text-gray-800">Auto-Categorized</p>
                     <p className="text-[9px] text-gray-500">100% Accuracy</p>
                  </div>
               </motion.div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
               <h4 className="text-2xl font-serif font-bold text-[#1F2937]">Intelligent transcription to structured tables</h4>
               <p className="text-[#6B7280] text-sm leading-relaxed">
                  Automate categorization, formatting, and data entry in one step. Our AI understands context, eliminating the need to manually move between spreadsheets, notes apps, and formatting tools.
               </p>
            </div>
         </div>

         {/* Feature 2 */}
         <div className="w-full max-w-[1000px] flex flex-col md:flex-row-reverse items-center gap-16 mb-24">
            <div className="w-full md:w-1/2 relative h-[350px] md:h-[400px]">
               {/* Background Layer */}
               <div className="absolute inset-0 bg-[#1a1130] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  {/* Glowing Orbs */}
                  <motion.div 
                     className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#9D7BFE] rounded-full mix-blend-screen filter blur-[80px] opacity-40" 
                     animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                     className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500 rounded-full mix-blend-screen filter blur-[60px] opacity-30" 
                     animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  
                  {/* Dot Grid */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
               </div>

               {/* Main Centered Glass Card */}
               <div className="absolute inset-0 flex items-center justify-center p-6">
                  <motion.div 
                     className="w-full max-w-[320px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col items-center relative z-10"
                     initial={{ scale: 0.9, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                  >
                     {/* Circular Progress/Transform Animation */}
                     <div className="relative w-24 h-24 mb-6">
                        {/* Outer Ring */}
                        <svg className="w-full h-full transform -rotate-90">
                           <circle cx="48" cy="48" r="46" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
                           <motion.circle 
                              cx="48" cy="48" r="46" 
                              stroke="#0AEB9A" 
                              strokeWidth="4" 
                              fill="none" 
                              strokeLinecap="round"
                              initial={{ strokeDasharray: "289", strokeDashoffset: "289" }}
                              whileInView={{ strokeDashoffset: "0" }}
                              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                              viewport={{ once: true }}
                           />
                        </svg>
                        {/* Inner Icon morphing */}
                        <div className="absolute inset-0 flex items-center justify-center text-3xl">
                           <motion.div
                              initial={{ opacity: 1, scale: 1 }}
                              whileInView={{ opacity: 0, scale: 0.5 }}
                              transition={{ duration: 0.5, delay: 2.2 }}
                              viewport={{ once: true }}
                              className="absolute"
                           >
                              🎙️
                           </motion.div>
                           <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 2.2 }}
                              viewport={{ once: true }}
                              className="absolute flex items-center justify-center bg-[#0AEB9A] w-12 h-12 rounded-full shadow-[0_0_15px_rgba(10,235,154,0.5)]"
                           >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                           </motion.div>
                        </div>
                     </div>

                     <h5 className="text-white font-medium text-lg mb-1">Transcription Ready</h5>
                     <p className="text-white/60 text-xs mb-8">Data structured perfectly</p>

                     {/* Big Export Button */}
                     <motion.button 
                        className="w-full py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 group overflow-hidden relative"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(16,185,129,0.5)" }}
                        whileTap={{ scale: 0.98 }}
                     >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                           <polyline points="7 10 12 15 17 10" />
                           <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Export to .XLSX
                     </motion.button>
                  </motion.div>
               </div>

               {/* Floating Badge */}
               <motion.div 
                  className="absolute left-2 sm:left-10 bottom-8 bg-white p-2 sm:p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-gray-100"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-xl flex items-center justify-center text-[#9D7BFE]">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                  </div>
                  <div className="hidden sm:block">
                     <p className="text-[10px] font-bold text-gray-800">Ready in seconds</p>
                     <p className="text-[9px] text-gray-500">Zero data cleanup</p>
                  </div>
               </motion.div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
               <h4 className="text-2xl font-serif font-bold text-[#1F2937]">From spoken word to .XLSX in seconds</h4>
               <p className="text-[#6B7280] text-sm leading-relaxed">
                  Our Voice to Excel tool consolidates transcription, data cleaning, and Excel export into a single workflow, freeing up hours of administrative work and removing the need for dedicated data entry.
               </p>
            </div>
         </div>

      </section>

      {/* 4. GRID SECTION */}
      <section className="w-full bg-[#FFFEF9] py-24 flex flex-col items-center px-6">
         <h3 className="text-[2rem] font-serif text-[#1F2937] text-center mb-4 max-w-[600px] leading-[1.2]">
            One system for every data reality
         </h3>
         <p className="text-[#6B7280] text-sm text-center mb-16 max-w-[500px]">
            One platform to handle voice data capture across all your departments, without the need for specialized manual workflows.
         </p>

         <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2">
               <div className="h-32 bg-gradient-to-br from-[#9D7BFE]/20 to-purple-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-[#9D7BFE]/10 group-hover:border-[#9D7BFE]/30 transition-colors">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTU3LCAxMjMsIDI1NCwgMC4yKSIvPjwvc3ZnPg==')] opacity-50" />
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-purple-100 flex items-center justify-center text-3xl z-10"
                     animate={{ y: [0, -5, 0] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                     📦
                  </motion.div>
                  <motion.div 
                     className="absolute w-full h-1 bg-[#0AEB9A]/80 shadow-[0_0_10px_#0AEB9A]"
                     animate={{ top: ['20%', '80%', '20%'] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Inventory & Stock</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Walk through your warehouse and speak your stock counts. Automatically organize by SKU, quantity, and location.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2">
               <div className="h-32 bg-gradient-to-br from-[#0AEB9A]/20 to-emerald-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-[#0AEB9A]/10 group-hover:border-[#0AEB9A]/30 transition-colors">
                  <motion.div 
                     className="w-14 bg-white shadow-md border border-gray-100 rounded-sm overflow-hidden flex flex-col items-center py-2 gap-1 z-10"
                     animate={{ height: [40, 80, 40] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                     <div className="w-8 h-1 bg-gray-200 rounded-full" />
                     <div className="w-6 h-1 bg-gray-200 rounded-full" />
                     <div className="w-10 h-1 bg-[#0AEB9A] rounded-full mt-2" />
                  </motion.div>
                  <motion.div 
                     className="absolute text-2xl"
                     animate={{ opacity: [0, 1, 0], y: [10, -30] }}
                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                     💸
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Expenses & Receipts</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Dictate receipt totals, vendors, and tax amounts. Let AI structure them into a perfect monthly expense report.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2">
               <div className="h-32 bg-gradient-to-br from-amber-100 to-orange-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-amber-200/50 group-hover:border-amber-300/50 transition-colors">
                  <div className="flex gap-1 mr-4">
                     {[1, 2, 3].map(i => (
                        <motion.div 
                           key={i}
                           className="w-1.5 bg-amber-400 rounded-full"
                           animate={{ height: [10, 30, 10] }}
                           transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                     ))}
                  </div>
                  <div className="text-amber-300 mx-2">→</div>
                  <div className="bg-white p-3 rounded-xl shadow-md border border-orange-100 flex flex-col gap-2">
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-emerald-400" />
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-gray-200" />
                        <div className="w-10 h-1.5 bg-gray-200 rounded-full" />
                     </div>
                  </div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Meeting Minutes</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Record your meetings and let Voice to Excel extract action items, owners, and deadlines into a structured tracker.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2">
               <div className="h-32 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-blue-200/50 group-hover:border-blue-300/50 transition-colors">
                  <motion.div 
                     className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl z-10 border border-blue-100"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                     🌍
                  </motion.div>
                  <motion.div 
                     className="absolute bg-white text-[10px] font-bold text-blue-600 px-2 py-1 rounded-lg shadow-sm border border-blue-100 top-4 left-4"
                     animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                     transition={{ duration: 3, repeat: Infinity }}
                  >
                     Hola
                  </motion.div>
                  <motion.div 
                     className="absolute bg-white text-[10px] font-bold text-indigo-600 px-2 py-1 rounded-lg shadow-sm border border-indigo-100 bottom-4 right-4"
                     animate={{ y: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
                     transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                     Hello
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Multilingual Support</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Speak in over 40 languages. Our AI instantly translates and structures data into English (or your preferred language) spreadsheets.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2">
               <div className="h-32 bg-gradient-to-br from-rose-100 to-pink-50 rounded-xl mb-4 relative overflow-hidden flex items-end justify-center pb-4 border border-rose-200/50 group-hover:border-rose-300/50 transition-colors gap-2">
                  {[40, 60, 80].map((h, i) => (
                     <motion.div 
                        key={i}
                        className="w-8 bg-gradient-to-t from-rose-400 to-pink-300 rounded-t-lg shadow-md"
                        initial={{ height: 10 }}
                        animate={{ height: h }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.2 }}
                     />
                  ))}
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">CRM Data Entry</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Update sales pipelines and customer logs verbally after calls. Export the structured CSV directly into Salesforce or HubSpot.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2">
               <div className="h-32 bg-gradient-to-br from-gray-100 to-slate-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-gray-200 group-hover:border-gray-300 transition-colors">
                  <div className="w-20 h-10 bg-white rounded-xl shadow-md border border-gray-200 z-10 flex items-center justify-center relative">
                     <div className="w-10 h-1 bg-gray-300 rounded-full" />
                  </div>
                  <motion.div 
                     className="absolute bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm"
                     animate={{ y: [0, -30, -30, 0], opacity: [0, 1, 1, 0], x: -20 }}
                     transition={{ duration: 3, repeat: Infinity }}
                  >
                     .XLSX
                  </motion.div>
                  <motion.div 
                     className="absolute bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm"
                     animate={{ y: [0, -35, -35, 0], opacity: [0, 1, 1, 0], x: 20 }}
                     transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                     .CSV
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Flexible Exporting</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Download as .XLSX, .CSV, or connect directly to Google Sheets via our API to keep your data flowing seamlessly.</p>
            </div>

         </div>
      </section>


      {/* 7. PRE-FOOTER SHAPES & CTA */}
      <section className="w-full bg-[#FFFEF9] pt-24 pb-0 flex flex-col items-center text-center relative">
         <h3 className="text-[1.8rem] font-serif text-[#1F2937] mb-8">Try Voice to Excel today</h3>
         <div className="flex gap-4 mb-16 relative z-20">
            <button className="bg-[#1F2937] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black">Start for free</button>
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50">Book a demo</button>
         </div>

         {/* Floating Geometric Pile */}
         <div className="relative w-full max-w-[800px] h-[300px] flex justify-center items-end -mb-10 z-10 overflow-hidden md:overflow-visible">
            
            {/* Shapes */}
            <div className="absolute bottom-10 left-10 md:left-32 w-32 h-32 bg-[#0AEB9A] rounded-full flex items-center justify-center rotate-12 shadow-lg">
               <span className="text-[10px] font-bold text-[#1F2937]">Inventory</span>
            </div>
            
            <div className="absolute bottom-20 left-40 md:left-64 w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-orange-400 border-r-[60px] border-r-transparent -rotate-12 flex items-end justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white mb-2 ml-4">CRM</span>
            </div>

            <div className="absolute bottom-5 right-20 md:right-40 w-40 h-20 bg-[#06b6d4] rotate-6 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white">Meetings</span>
            </div>
            
            <div className="absolute bottom-32 right-32 md:right-64 w-32 h-40 bg-pink-500 -rotate-12 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white">Expenses</span>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-12 bg-yellow-300 rounded flex items-center justify-center shadow-lg rotate-2">
               <span className="text-xs font-bold text-gray-800">Data Entry</span>
            </div>

            {/* Doodles */}
            <div className="absolute bottom-40 left-20 text-3xl opacity-80 -rotate-45">〰️</div>
            <div className="absolute bottom-52 right-1/4 text-4xl opacity-80">🌀</div>
         </div>
      </section>

    </div>
  );
}
