"use client";

import { motion } from "framer-motion";

export default function TextGeneratorKiraPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF9] font-sans selection:bg-[#f97316] selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full flex flex-col items-center">
         
         {/* Top Text (Cream Background area) */}
         <div className="w-full relative z-20 text-center px-6 pt-24 pb-16 bg-[#FFFEF9]">
            <div className="max-w-[800px] mx-auto">
               <h1 className="text-[3rem] md:text-[4.5rem] font-serif text-[#1F2937] leading-[1.2] mb-6">
                 The <span className="relative inline-block mx-1">
                    <span className="absolute inset-0 bg-[#f97316] rounded -rotate-2 scale-110"></span>
                    <span className="relative text-white z-10 px-1">AI</span>
                 </span> test generation <br />
                 system for <span className="relative inline-block mx-1">
                    <span className="absolute inset-0 bg-[#f59e0b] rounded rotate-1 scale-110"></span>
                    <span className="relative text-[#1F2937] z-10 px-1">Educators</span>
                 </span>
               </h1>
               <p className="text-[#6B7280] text-sm md:text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
                 Create tests, quizzes, and exams automatically. Upload your syllabus, set difficulty levels, and export formatted PDFs with perfect answer keys in seconds.
               </p>
               <div className="flex items-center justify-center gap-4">
                 <button className="bg-[#1F2937] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black transition-colors">
                   Generate a Test
                 </button>
                 <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                   Book a demo
                 </button>
               </div>
            </div>
         </div>

         {/* Orange Grid Background Area */}
         <div className="relative w-full bg-[#f97316] z-0 overflow-hidden flex flex-col items-center pt-24 pb-40">
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
            />
            
            {/* Huge Floating Blobs */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#ea580c] rounded-full mix-blend-multiply opacity-50 blur-xl" />
            <div className="absolute top-40 -right-64 w-[800px] h-[800px] bg-[#fb923c] rounded-full mix-blend-multiply opacity-60 flex items-center justify-center">
               <div className="w-full h-full rounded-full border-[40px] border-[#fdba74] border-dashed opacity-30 animate-[spin_60s_linear_infinite]" />
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
                  <div className="w-10 h-10 bg-white/10 rounded-xl mb-10 mx-auto md:ml-6 flex items-center justify-center text-white text-xl">📝</div>
                  <div className="flex flex-col w-full gap-2 px-2 md:px-4">
                     <div className="w-full py-3 px-4 bg-white/10 text-white rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>📄</span><span className="hidden md:block text-sm font-medium">My Tests</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>📚</span><span className="hidden md:block text-sm font-medium">Question Bank</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>⚙️</span><span className="hidden md:block text-sm font-medium">Rubrics</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>📥</span><span className="hidden md:block text-sm font-medium">Export</span>
                     </div>
                  </div>
               </div>
               
               {/* Main UI Area */}
               <div className="flex-1 bg-white p-6 md:p-10 flex flex-col gap-8">
                  <div className="flex justify-between items-center">
                     <h2 className="text-xl font-bold text-gray-800">Test Studio</h2>
                     <button className="text-xs font-bold border border-gray-200 rounded-full px-4 py-1.5 hover:bg-gray-50">+ New Test</button>
                  </div>
                  
                  {/* Top Cards */}
                  <div className="flex gap-4 overflow-x-auto pb-4">
                     <div className="min-w-[200px] bg-[#f97316]/10 border border-[#f97316]/30 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#f97316] text-white rounded flex items-center justify-center text-lg">💡</div>
                        <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-sm">MCQ Generator</span>
                           <span className="text-[10px] text-gray-500">From PDF notes</span>
                        </div>
                     </div>
                     <div className="min-w-[200px] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-500 rounded flex items-center justify-center text-lg">✍️</div>
                        <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-sm">Essay Prompts</span>
                           <span className="text-[10px] text-gray-500">With grading rubrics</span>
                        </div>
                     </div>
                     <div className="min-w-[200px] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 text-green-500 rounded flex items-center justify-center text-lg">🧮</div>
                        <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-sm">Math Equations</span>
                           <span className="text-[10px] text-gray-500">Auto-solved</span>
                        </div>
                     </div>
                  </div>

                  {/* Generation Queue */}
                  <div className="flex justify-between items-center mt-4">
                     <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-gray-800">Recent Generations</h2>
                        <span className="bg-[#1a1130] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
                     </div>
                  </div>

                  <div className="flex flex-col gap-3 border border-gray-100 rounded-xl p-2 bg-gray-50">
                     <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
                        <div>
                           <div className="font-bold text-gray-800 text-sm">Grade 10 Biology Midterm</div>
                           <div className="text-[11px] text-gray-500 mt-1">45 Questions • High Difficulty</div>
                        </div>
                        <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full border border-orange-100 flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" /> Generating
                        </span>
                     </div>
                     <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
                        <div>
                           <div className="font-bold text-gray-800 text-sm">AP US History Quiz 4</div>
                           <div className="text-[11px] text-gray-500 mt-1">Ready • Answer Key Available</div>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                           Export PDF
                        </span>
                     </div>
                  </div>

               </div>
               
               {/* Right Side Pane */}
               <div className="hidden lg:flex w-[350px] bg-white border-l border-gray-200 flex-col p-8">
                  <div className="w-full flex justify-between items-center mb-12">
                     <div className="w-8 h-8 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xl">T</div>
                     <div className="flex gap-2">
                        <button className="w-6 h-6 text-gray-400 hover:text-gray-600">^</button>
                        <button className="w-6 h-6 text-gray-400 hover:text-gray-600">x</button>
                     </div>
                  </div>
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 mb-8 overflow-hidden relative shadow-inner flex flex-col items-center justify-center text-white p-6 text-center">
                     <div className="absolute inset-0 bg-white/20 blur-2xl" />
                     <span className="text-5xl mb-4 relative z-10">🧠</span>
                     <span className="text-xl font-bold relative z-10 font-serif">Syllabus Analysis</span>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800 font-bold mb-6 text-center">AI Test Builder</h3>
                  <button className="w-full py-3 bg-[#f97316]/10 text-[#f97316] rounded-full font-bold text-sm mb-3 hover:bg-[#f97316]/20 transition-colors">
                     📎 Upload Textbook PDF
                  </button>
                  <button className="w-full py-3 bg-gray-50 text-gray-600 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                     📋 Paste YouTube Link
                  </button>
               </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 2. STATEMENT SECTION */}
      <section className="w-full bg-[#FFFEF9] py-32 flex flex-col items-center text-center px-6 relative z-20">
         <h2 className="text-[2rem] md:text-[3rem] font-serif text-[#1F2937] leading-[1.2] max-w-[800px] mb-8">
           Educators do not need more grading fatigue. They need a <span className="inline-block bg-[#f97316]/20 text-[#f97316] px-2">system.</span>
         </h2>
         <p className="text-[#6B7280] text-sm md:text-base max-w-[700px] leading-relaxed mb-12">
           Writing balanced, syllabus-aligned question papers takes hours of weekend time. Our Test Generator replaces the endless scrolling through textbooks and manual formatting with an instant AI generation engine that creates rigorous exams and perfect answer keys.
         </p>
         
         {/* Animated Transformation Graphic */}
         <div className="relative w-full max-w-[600px] h-32 flex justify-center items-center mt-4">
            <div className="w-full h-full flex items-center justify-between px-16 relative z-10">
               {/* Left: Document/Book */}
               <motion.div 
                  className="w-16 h-20 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col items-center py-3 gap-1.5 z-10"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                  <div className="w-10 h-1 bg-gray-200 rounded-full" />
                  <div className="w-8 h-1 bg-gray-200 rounded-full" />
                  <div className="w-10 h-1 bg-gray-200 rounded-full" />
                  <div className="text-xl mt-1">📚</div>
               </motion.div>
               
               {/* Center: Processing Arrow */}
               <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1 mb-1">
                     <motion.div className="w-2 h-2 bg-[#f97316] rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} />
                     <motion.div className="w-2 h-2 bg-[#f97316] rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} />
                     <motion.div className="w-2 h-2 bg-[#f97316] rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} />
                  </div>
                  <motion.div 
                     className="text-[#f97316] text-2xl"
                     animate={{ x: [0, 10, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                     ⟶
                  </motion.div>
               </div>
               
               {/* Right: Perfect Exam */}
               <motion.div 
                  className="w-16 h-20 bg-white rounded-lg shadow-lg border border-[#f97316]/30 flex flex-col items-center py-2 gap-1 z-10 relative overflow-hidden"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                  <div className="absolute top-0 w-full h-1 bg-[#f97316]" />
                  <div className="w-10 h-1 bg-gray-200 rounded-full mt-2" />
                  <div className="flex gap-1 mt-1 w-full px-3">
                     <div className="w-2 h-2 rounded-full border border-[#f97316] flex-shrink-0" />
                     <div className="w-full h-1.5 bg-gray-100 rounded-full mt-0.5" />
                  </div>
                  <div className="flex gap-1 w-full px-3">
                     <div className="w-2 h-2 rounded-full border border-gray-300 flex-shrink-0" />
                     <div className="w-full h-1.5 bg-gray-100 rounded-full mt-0.5" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 text-lg">A+</div>
               </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
               <motion.div 
                  className="w-[300px] h-10 bg-gradient-to-r from-transparent via-[#f97316] to-transparent blur-xl rounded-full"
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               />
            </div>
         </div>
      </section>

      {/* 3. ZIG-ZAG SECTION */}
      <section className="w-full bg-[#FFFEF9] py-20 flex flex-col items-center px-6">
         <h3 className="text-[2rem] font-serif text-[#1F2937] text-center mb-24 max-w-[600px] leading-[1.2]">
            Test Generator replaces late-night test writing with intelligent automation.
         </h3>

         {/* Feature 1 */}
         <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-full md:w-1/2 relative h-[350px] md:h-[400px]">
               {/* Background Layer */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 to-orange-50 rounded-3xl overflow-hidden shadow-2xl border border-[#f97316]/10">
                  {/* Glowing Orbs */}
                  <motion.div 
                     className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-[#f97316] rounded-full mix-blend-multiply filter blur-[80px] opacity-40" 
                     animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
                     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                     className="absolute bottom-[-20%] right-[-20%] w-[250px] h-[250px] bg-yellow-400 rounded-full mix-blend-multiply filter blur-[60px] opacity-30" 
                     animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], y: [0, -40, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />
               </div>

               {/* Main Glass Card */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                  <motion.div 
                     className="w-full max-w-[340px] bg-white/60 backdrop-blur-xl border border-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                  >
                     <div className="w-full bg-white/80 p-3 border-b border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#f97316]">Difficulty Scaling</span>
                        <div className="flex gap-1">
                           <div className="w-2 h-2 rounded-full bg-red-400" />
                           <div className="w-2 h-2 rounded-full bg-yellow-400" />
                           <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                     </div>
                     <div className="p-4 flex flex-col gap-3 relative">
                        <motion.div 
                           className="w-full p-3 bg-white rounded-lg border border-gray-100 shadow-sm relative overflow-hidden"
                           whileHover={{ scale: 1.02 }}
                        >
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400" />
                           <p className="text-[10px] font-bold text-gray-800">1. Basic Recall (Easy)</p>
                           <p className="text-[9px] text-gray-500 mt-1">What is the primary function of mitochondria?</p>
                        </motion.div>
                        <motion.div 
                           className="w-full p-3 bg-white rounded-lg border border-[#f97316]/30 shadow-md relative overflow-hidden transform scale-[1.02]"
                        >
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f97316]" />
                           <p className="text-[10px] font-bold text-gray-800">2. Application (Hard)</p>
                           <motion.p 
                              className="text-[9px] text-gray-600 mt-1"
                           >
                              If a toxin blocks the electron transport chain, how does it affect cellular respiration overall?
                           </motion.p>
                           <motion.div 
                              className="w-full h-full absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                           />
                        </motion.div>
                     </div>
                  </motion.div>
               </div>
               
               {/* Floating Icon */}
               <motion.div 
                  className="absolute -right-4 top-1/4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl z-20 border border-gray-100"
                  animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               >
                  🧠
               </motion.div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
               <h4 className="text-2xl font-serif font-bold text-[#1F2937]">Dynamic difficulty scaling, not repetitive questions</h4>
               <p className="text-[#6B7280] text-sm leading-relaxed">
                  Generate varied questions tailored to different learning levels. Our AI analyzes your source material and creates unique questions that test true comprehension rather than just rote memorization.
               </p>
            </div>
         </div>

         {/* Feature 2 */}
         <div className="w-full max-w-[1000px] flex flex-col md:flex-row-reverse items-center gap-16 mb-24">
            <div className="w-full md:w-1/2 relative h-[350px] md:h-[400px]">
               {/* Background Layer */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#1a1130] to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  {/* Glowing Orbs */}
                  <motion.div 
                     className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f97316] rounded-full mix-blend-screen filter blur-[80px] opacity-30" 
                     animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                     className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#f59e0b] rounded-full mix-blend-screen filter blur-[60px] opacity-20" 
                     animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
               </div>

               {/* Main Centered Glass Card */}
               <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
                  <motion.div 
                     className="w-full max-w-[300px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col items-center relative"
                     initial={{ scale: 0.9, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                  >
                     <div className="relative w-20 h-24 bg-white rounded-lg shadow-inner mb-6 flex flex-col items-center py-4 px-2 overflow-hidden">
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full mb-2" />
                        <div className="w-10 h-1.5 bg-gray-200 rounded-full mb-2" />
                        <div className="w-14 h-1.5 bg-gray-200 rounded-full mb-2" />
                        <div className="w-8 h-1.5 bg-gray-200 rounded-full" />
                        
                        <motion.div 
                           className="absolute inset-0 bg-[#f97316]/10 flex items-center justify-center backdrop-blur-[1px]"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ delay: 1, duration: 0.5 }}
                        >
                           <motion.div
                              initial={{ scale: 3, opacity: 0, rotate: -20 }}
                              whileInView={{ scale: 1, opacity: 1, rotate: -10 }}
                              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                              className="text-3xl font-black text-[#f97316] border-4 border-[#f97316] rounded-full w-14 h-14 flex items-center justify-center bg-white shadow-lg"
                           >
                              A+
                           </motion.div>
                        </motion.div>
                     </div>

                     <h5 className="text-white font-bold text-lg mb-1">Export Final Exam</h5>
                     <p className="text-white/60 text-xs mb-6 text-center">Perfect formatting instantly</p>

                     <div className="flex gap-2 w-full">
                        <motion.button 
                           className="flex-1 py-2.5 bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white text-[10px] font-bold rounded-lg shadow-[0_0_15px_rgba(249,115,22,0.4)] relative overflow-hidden group"
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                        >
                           <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                           PDF Format
                        </motion.button>
                        <motion.button 
                           className="flex-1 py-2.5 bg-white/10 text-white text-[10px] font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                        >
                           Canvas LMS
                        </motion.button>
                     </div>
                  </motion.div>
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
               <h4 className="text-2xl font-serif font-bold text-[#1F2937]">Instant formatting, no Word Doc struggles</h4>
               <p className="text-[#6B7280] text-sm leading-relaxed">
                  Stop fighting with numbering and margins. Test Generator instantly exports perfectly formatted PDFs, Word documents, or direct exports to your school&apos;s LMS with the answer key separated for easy grading.
               </p>
            </div>
         </div>
      </section>

      {/* 4. GRID SECTION */}
      <section className="w-full bg-[#FFFEF9] py-24 flex flex-col items-center px-6">
         <h3 className="text-[2rem] font-serif text-[#1F2937] text-center mb-4 max-w-[600px] leading-[1.2]">
            One system for every instructional reality
         </h3>
         <p className="text-[#6B7280] text-sm text-center mb-16 max-w-[500px]">
            From elementary spelling tests to university-level calculus exams, handle every subject with specialized AI workflows.
         </p>

         <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-[#f97316]/10 to-orange-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-[#f97316]/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex flex-col items-center justify-center border border-[#f97316]/30 text-[#f97316]"
                     whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                     <div className="w-6 h-1.5 bg-[#f97316]/20 rounded-full mb-1" />
                     <div className="w-8 h-1.5 bg-[#f97316] rounded-full mb-1" />
                     <div className="w-5 h-1.5 bg-[#f97316]/20 rounded-full" />
                  </motion.div>
                  <motion.div 
                     className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%]"
                     animate={{ backgroundPosition: ["-100% 0%", "200% 0%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Multiple Choice</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Generate rigorous MCQs with plausible distractors (wrong answers) to properly test student knowledge.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-[#f59e0b]/10 to-amber-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-[#f59e0b]/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex flex-col items-center justify-center border border-[#f59e0b]/30 text-[#f59e0b]"
                     animate={{ y: [-3, 3, -3] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                     <span className="text-2xl">✍️</span>
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Essay Prompts</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Create thought-provoking essay prompts complete with comprehensive grading rubrics.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-blue-500/10 to-blue-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-blue-500/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-blue-500/30 text-blue-500 font-bold font-serif text-xl"
                     animate={{ rotate: [0, 360] }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                     ∑
                  </motion.div>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Math Equations</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Generate complex mathematical and physics problems with step-by-step solution keys.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-green-500/10 to-green-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-green-500/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-green-500/30 text-green-500 text-2xl"
                     whileHover={{ scale: 1.1 }}
                  >
                     Aあ
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Language Tests</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Create reading comprehension passages and vocabulary quizzes in over 40 languages.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-purple-500/10 to-purple-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-purple-500/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex flex-col items-center justify-center border border-purple-500/30 text-purple-500"
                     animate={{ y: [0, -5, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                     <span className="text-2xl">📚</span>
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Syllabus Matching</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Upload your curriculum or textbook chapters. AI ensures all generated questions strictly adhere to your content.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-gray-300">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-gray-300 text-gray-600 text-2xl relative overflow-hidden"
                     whileHover={{ scale: 1.1 }}
                  >
                     📄
                     <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50"
                        animate={{ y: ["100%", "-100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     />
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Instant Formats</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Export immediately to beautifully formatted PDFs, Word Docs, or directly to Canvas/Google Classroom.</p>
            </div>

         </div>
      </section>

      {/* 5. PRE-FOOTER SHAPES & CTA */}
      <section className="w-full bg-[#FFFEF9] pt-24 pb-0 flex flex-col items-center text-center relative">
         <h3 className="text-[1.8rem] font-serif text-[#1F2937] mb-8">Try Test Generator today</h3>
         <div className="flex gap-4 mb-16 relative z-20">
            <button className="bg-[#1F2937] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black">Start for free</button>
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50">Book a demo</button>
         </div>

         {/* Floating Geometric Pile */}
         <div className="relative w-full max-w-[800px] h-[300px] flex justify-center items-end -mb-10 z-10 overflow-hidden md:overflow-visible">
            
            {/* Shapes */}
            <div className="absolute bottom-10 left-10 md:left-32 w-32 h-32 bg-[#f97316] rounded-full flex items-center justify-center rotate-12 shadow-lg">
               <span className="text-[10px] font-bold text-white">Exams</span>
            </div>
            
            <div className="absolute bottom-20 left-40 md:left-64 w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-blue-500 border-r-[60px] border-r-transparent -rotate-12 flex items-end justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white mb-2 ml-4">Rubrics</span>
            </div>

            <div className="absolute bottom-5 right-20 md:right-40 w-40 h-20 bg-[#0AEB9A] rotate-6 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-gray-800">Answers</span>
            </div>
            
            <div className="absolute bottom-32 right-32 md:right-64 w-32 h-40 bg-purple-500 -rotate-12 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white">Syllabus</span>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#f59e0b] rounded flex items-center justify-center shadow-lg rotate-2">
               <span className="text-xs font-bold text-white">Quizzes</span>
            </div>

            {/* Doodles */}
            <div className="absolute bottom-40 left-20 text-3xl opacity-80 -rotate-45">〰️</div>
            <div className="absolute bottom-52 right-1/4 text-4xl opacity-80">🌀</div>
         </div>
      </section>

    </div>
  );
}
