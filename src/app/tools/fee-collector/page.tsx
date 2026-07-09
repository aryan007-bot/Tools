"use client";

import { motion } from "framer-motion";

export default function FeeCollectorKiraPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF9] font-sans selection:bg-[#3b82f6] selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full flex flex-col items-center">
         
         {/* Top Text (Cream Background area) */}
         <div className="w-full relative z-20 text-center px-6 pt-24 pb-16 bg-[#FFFEF9]">
            <div className="max-w-[800px] mx-auto">
               <h1 className="text-[3rem] md:text-[4.5rem] font-serif text-[#1F2937] leading-[1.2] mb-6">
                 The <span className="relative inline-block mx-1">
                    <span className="absolute inset-0 bg-[#3b82f6] rounded -rotate-2 scale-110"></span>
                    <span className="relative text-white z-10 px-1">AI</span>
                 </span> fee management <br />
                 system for <span className="relative inline-block mx-1">
                    <span className="absolute inset-0 bg-[#F59E0B] rounded rotate-1 scale-110"></span>
                    <span className="relative text-[#1F2937] z-10 px-1">Businesses</span>
                 </span>
               </h1>
               <p className="text-[#6B7280] text-sm md:text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
                 Complete fee management system. Track payments, send automated reminders, generate instant receipts, and analyze financial data in one unified dashboard.
               </p>
               <div className="flex items-center justify-center gap-4">
                 <button className="bg-[#1F2937] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black transition-colors">
                   Start Collecting
                 </button>
                 <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                   Book a demo
                 </button>
               </div>
            </div>
         </div>

         {/* Blue Grid Background Area */}
         <div className="relative w-full bg-[#3b82f6] z-0 overflow-hidden flex flex-col items-center pt-24 pb-40">
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
            />
            
            {/* Huge Floating Blobs */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#2563eb] rounded-full mix-blend-multiply opacity-50 blur-xl" />
            <div className="absolute top-40 -right-64 w-[800px] h-[800px] bg-[#60a5fa] rounded-full mix-blend-multiply opacity-60 flex items-center justify-center">
               <div className="w-full h-full rounded-full border-[40px] border-[#93c5fd] border-dashed opacity-30 animate-[spin_60s_linear_infinite]" />
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
                  <div className="w-10 h-10 bg-white/10 rounded-xl mb-10 mx-auto md:ml-6 flex items-center justify-center text-white text-xl">💳</div>
                  <div className="flex flex-col w-full gap-2 px-2 md:px-4">
                     <div className="w-full py-3 px-4 bg-white/10 text-white rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>📊</span><span className="hidden md:block text-sm font-medium">Overview</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>👥</span><span className="hidden md:block text-sm font-medium">Clients</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>🧾</span><span className="hidden md:block text-sm font-medium">Invoices</span>
                     </div>
                     <div className="w-full py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer">
                        <span>⚡</span><span className="hidden md:block text-sm font-medium">Automations</span>
                     </div>
                  </div>
               </div>
               
               {/* Main UI Area */}
               <div className="flex-1 bg-white p-6 md:p-10 flex flex-col gap-8">
                  <div className="flex justify-between items-center">
                     <h2 className="text-xl font-bold text-gray-800">Fee Dashboard</h2>
                     <button className="text-xs font-bold border border-gray-200 rounded-full px-4 py-1.5 hover:bg-gray-50">Generate Report</button>
                  </div>
                  
                  {/* Top Cards */}
                  <div className="flex gap-4 overflow-x-auto pb-4">
                     <div className="min-w-[200px] bg-[#3b82f6]/10 border border-[#3b82f6]/30 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#3b82f6] text-white rounded flex items-center justify-center text-lg">💰</div>
                        <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-sm">$45,200</span>
                           <span className="text-[10px] text-gray-500">Collected this month</span>
                        </div>
                     </div>
                     <div className="min-w-[200px] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded flex items-center justify-center text-lg">⏳</div>
                        <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-sm">$12,400</span>
                           <span className="text-[10px] text-gray-500">Pending Dues</span>
                        </div>
                     </div>
                     <div className="min-w-[200px] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 text-green-500 rounded flex items-center justify-center text-lg">✉️</div>
                        <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-sm">342</span>
                           <span className="text-[10px] text-gray-500">Reminders Sent</span>
                        </div>
                     </div>
                  </div>

                  {/* Processing Queue */}
                  <div className="flex justify-between items-center mt-4">
                     <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
                        <span className="bg-[#1a1130] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">New</span>
                     </div>
                  </div>

                  <div className="flex flex-col gap-3 border border-gray-100 rounded-xl p-2 bg-gray-50">
                     <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
                        <div>
                           <div className="font-bold text-gray-800 text-sm">Sarah Jenkins - Pro Plan</div>
                           <div className="text-[11px] text-gray-500 mt-1">Membership Q2</div>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100 flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Paid - $1,200
                        </span>
                     </div>
                     <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
                        <div>
                           <div className="font-bold text-gray-800 text-sm">Marcus Ray - Basic Plan</div>
                           <div className="text-[11px] text-gray-500 mt-1">Add-on Service Q2</div>
                        </div>
                        <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                           Pending - $350
                        </span>
                     </div>
                  </div>

               </div>
               
               {/* Right Side Pane */}
               <div className="hidden lg:flex w-[350px] bg-white border-l border-gray-200 flex-col p-8">
                  <div className="w-full flex justify-between items-center mb-12">
                     <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">F</div>
                     <div className="flex gap-2">
                        <button className="w-6 h-6 text-gray-400 hover:text-gray-600">^</button>
                        <button className="w-6 h-6 text-gray-400 hover:text-gray-600">x</button>
                     </div>
                  </div>
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-600 mb-8 overflow-hidden relative shadow-inner">
                     <div className="absolute inset-0 bg-white/20 blur-2xl" />
                     <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">📈</div>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800 font-bold mb-6 text-center">Collection Status</h3>
                  <button className="w-full py-3 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full font-bold text-sm mb-3 hover:bg-[#3b82f6]/20 transition-colors">
                     📧 Send Bulk Reminders
                  </button>
                  <button className="w-full py-3 bg-gray-50 text-gray-600 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                     ➕ Create Manual Invoice
                  </button>
               </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 2. STATEMENT SECTION */}
      <section className="w-full bg-[#FFFEF9] py-32 flex flex-col items-center text-center px-6 relative z-20">
         <h2 className="text-[2rem] md:text-[3rem] font-serif text-[#1F2937] leading-[1.2] max-w-[800px] mb-8">
           Businesses do not need more manual spreadsheets. They need a <span className="inline-block bg-[#3b82f6]/20 text-[#3b82f6] px-2">system.</span>
         </h2>
         <p className="text-[#6B7280] text-sm md:text-base max-w-[700px] leading-relaxed mb-12">
           Tracking payments manually across ledgers and Excel is slow, error-prone, and soul-crushing. Fee Collector replaces tedious receipt generation, reconciliation, and chasing clients with a single automated collection workflow.
         </p>
         
         {/* Animated Transformation Graphic */}
         <div className="relative w-full max-w-[600px] h-32 flex justify-center items-center mt-4">
            <div className="w-full h-full flex items-center justify-between px-16 relative z-10">
               {/* Left: Messy Ledger */}
               <motion.div 
                  className="w-16 h-20 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col items-center py-3 gap-1.5 z-10"
                  animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                  <div className="w-10 h-1 bg-red-400 rounded-full rotate-3" />
                  <div className="w-8 h-1 bg-yellow-400 rounded-full -rotate-6" />
                  <div className="w-10 h-1 bg-gray-200 rounded-full" />
                  <div className="text-xl mt-1">📉</div>
               </motion.div>
               
               {/* Center: Processing Arrow */}
               <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1 mb-1">
                     <motion.div className="w-2 h-2 bg-[#3b82f6] rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} />
                     <motion.div className="w-2 h-2 bg-[#3b82f6] rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} />
                     <motion.div className="w-2 h-2 bg-[#3b82f6] rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} />
                  </div>
                  <motion.div 
                     className="text-[#3b82f6] text-2xl"
                     animate={{ x: [0, 10, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                     ⟶
                  </motion.div>
               </div>
               
               {/* Right: Perfect Dashboard */}
               <motion.div 
                  className="w-16 h-20 bg-white rounded-lg shadow-lg border border-[#3b82f6]/30 flex flex-col items-center py-2 gap-1 z-10 relative overflow-hidden"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                  <div className="absolute top-0 w-full h-1 bg-[#3b82f6]" />
                  <div className="w-10 h-1 bg-gray-200 rounded-full mt-2" />
                  <div className="flex gap-1 mt-1 w-full px-3">
                     <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                     <div className="w-full h-1.5 bg-gray-100 rounded-full mt-0.5" />
                  </div>
                  <div className="flex gap-1 w-full px-3">
                     <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                     <div className="w-full h-1.5 bg-gray-100 rounded-full mt-0.5" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 text-lg">💰</div>
               </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
               <motion.div 
                  className="w-[300px] h-10 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent blur-xl rounded-full"
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               />
            </div>
         </div>
      </section>

      {/* 3. ZIG-ZAG SECTION */}
      <section className="w-full bg-[#FFFEF9] py-20 flex flex-col items-center px-6">
         <h3 className="text-[2rem] font-serif text-[#1F2937] text-center mb-24 max-w-[600px] leading-[1.2]">
            Fee Collector replaces financial fragmentation with a single automated ledger.
         </h3>

         {/* Feature 1 */}
         <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-full md:w-1/2 relative h-[350px] md:h-[400px]">
               {/* Background Layer */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-blue-50 rounded-3xl overflow-hidden shadow-2xl border border-[#3b82f6]/10">
                  {/* Glowing Orbs */}
                  <motion.div 
                     className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-[80px] opacity-40" 
                     animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
                     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                     className="absolute bottom-[-20%] right-[-20%] w-[250px] h-[250px] bg-green-400 rounded-full mix-blend-multiply filter blur-[60px] opacity-30" 
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
                        <span className="text-xs font-bold text-[#3b82f6]">Auto-reconcile Deposits</span>
                        <div className="flex gap-1">
                           <div className="w-2 h-2 rounded-full bg-red-400" />
                           <div className="w-2 h-2 rounded-full bg-yellow-400" />
                           <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                     </div>
                     <div className="p-4 flex flex-col gap-3 relative">
                        <table className="w-full text-left">
                           <thead className="bg-gray-50/50 text-gray-800 text-[10px]">
                              <tr><th className="pb-2">Client</th><th className="pb-2">Amount</th><th className="pb-2">Status</th></tr>
                           </thead>
                           <tbody className="text-[10px]">
                              <tr className="border-b border-gray-100/50">
                                 <td className="py-2 font-bold text-gray-800">Liam Smith</td>
                                 <td className="py-2 text-gray-600">$400</td>
                                 <td className="py-2"><span className="bg-[#0AEB9A]/20 text-green-800 px-2 py-0.5 rounded font-medium">Reconciled</span></td>
                              </tr>
                              <tr>
                                 <td className="py-2 font-bold text-gray-800">Emma Ray</td>
                                 <td className="py-2 text-gray-600">$850</td>
                                 <td className="py-2">
                                    <motion.span 
                                       className="bg-[#0AEB9A]/20 text-green-800 px-2 py-0.5 rounded font-medium inline-block"
                                       initial={{ opacity: 0.5, scale: 0.9 }}
                                       animate={{ opacity: 1, scale: 1 }}
                                       transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                                    >
                                       Reconciled
                                    </motion.span>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </motion.div>
               </div>
               
               {/* Floating Icon */}
               <motion.div 
                  className="absolute -right-4 top-1/4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl z-20 border border-gray-100"
                  animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               >
                  🤖
               </motion.div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
               <h4 className="text-2xl font-serif font-bold text-[#1F2937]">Automated Reconciliation, not manual ledger entries</h4>
               <p className="text-[#6B7280] text-sm leading-relaxed">
                  Automatically match bank transfers and payment gateway deposits against pending invoices. Our system instantly marks dues as paid and generates digital receipts, eliminating end-of-day tallying.
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
                     className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F59E0B] rounded-full mix-blend-screen filter blur-[80px] opacity-30" 
                     animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                     className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-red-400 rounded-full mix-blend-screen filter blur-[60px] opacity-20" 
                     animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
               </div>

               {/* Main Centered Glass Card */}
               <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
                  <motion.div 
                     className="w-full max-w-[300px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col relative"
                     initial={{ scale: 0.9, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                  >
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-2xl border border-orange-500/30">✉️</div>
                        <div className="flex flex-col w-full gap-2">
                           <motion.div className="w-3/4 h-2 bg-white/40 rounded-full" animate={{ width: ["75%", "85%", "75%"] }} transition={{ duration: 3, repeat: Infinity }} />
                           <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                        </div>
                     </div>
                     
                     <motion.button 
                        className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.4)] relative overflow-hidden group flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                        <span>Send 450 Reminders</span>
                        <motion.span
                           animate={{ x: [0, 5, 0] }}
                           transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                           →
                        </motion.span>
                     </motion.button>
                     
                     <motion.div 
                        className="absolute -top-4 -right-4 w-12 h-12 bg-[#0AEB9A] rounded-full shadow-lg flex items-center justify-center text-xl border-2 border-white/20"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                     >
                        ✅
                     </motion.div>
                  </motion.div>
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
               <h4 className="text-2xl font-serif font-bold text-[#1F2937]">Proactive collections, fewer late fees</h4>
               <p className="text-[#6B7280] text-sm leading-relaxed">
                  Set up automated email, SMS, and WhatsApp reminders for upcoming or overdue fees. Collect payments faster without the awkward phone calls or manual tracking.
               </p>
            </div>
         </div>
      </section>

      {/* 4. GRID SECTION */}
      <section className="w-full bg-[#FFFEF9] py-24 flex flex-col items-center px-6">
         <h3 className="text-[2rem] font-serif text-[#1F2937] text-center mb-4 max-w-[600px] leading-[1.2]">
            One system for every financial reality
         </h3>
         <p className="text-[#6B7280] text-sm text-center mb-16 max-w-[500px]">
            One platform to handle every type of collection, from core subscription fees to one-off event charges.
         </p>

         <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-[#3b82f6]/10 to-blue-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-[#3b82f6]/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex flex-col items-center justify-center border border-[#3b82f6]/30 text-[#3b82f6] text-2xl"
                     whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                     🎓
                  </motion.div>
                  <motion.div 
                     className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%]"
                     animate={{ backgroundPosition: ["-100% 0%", "200% 0%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Memberships &amp; Core Fees</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Set up recurring billing, installment plans, and group discounts automatically.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#0AEB9A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-[#0AEB9A]/10 to-green-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-[#0AEB9A]/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-[#0AEB9A]/30 text-green-500 text-2xl"
                     animate={{ x: [-5, 5, -5] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                     🚌
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Services &amp; Add-ons</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Manage consultation fees, equipment rentals, and merchandise purchases dynamically.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-orange-500/10 to-orange-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-orange-500/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-orange-500/30 text-orange-500 text-2xl"
                     whileHover={{ scale: 1.1 }}
                  >
                     🎫
                  </motion.div>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Event Collections</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Create quick payment links for workshops, webinars, and special training sessions.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-purple-500/10 to-purple-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-purple-500/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-purple-500/30 text-purple-500 text-2xl"
                     animate={{ rotate: [0, 10, -10, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                  >
                     💳
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Payment Gateways</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Accept credit cards, debit cards, UPI, and bank transfers through our unified checkout.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-pink-500/10 to-pink-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-pink-500/20">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex flex-col items-center justify-center border border-pink-500/30 text-pink-500"
                     animate={{ scale: [1, 1.05, 1] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                     <span className="text-2xl">👨‍👩‍👧</span>
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Client Portal</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Give clients a dedicated app to view payment history, download receipts, and pay outstanding dues.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-gray-300">
                  <motion.div 
                     className="w-16 h-16 bg-white rounded-full shadow-lg z-10 flex items-center justify-center border border-gray-300 text-gray-600 text-2xl relative overflow-hidden"
                     whileHover={{ scale: 1.1 }}
                  >
                     📈
                     <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50"
                        animate={{ y: ["100%", "-100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     />
                  </motion.div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm relative z-10">Financial Reporting</h4>
               <p className="text-xs text-gray-500 leading-relaxed relative z-10">Generate instant daily collection reports, defaulter lists, and end-of-year tax statements.</p>
            </div>

         </div>
      </section>

      {/* 5. PRE-FOOTER SHAPES & CTA */}
      <section className="w-full bg-[#FFFEF9] pt-24 pb-0 flex flex-col items-center text-center relative">
         <h3 className="text-[1.8rem] font-serif text-[#1F2937] mb-8">Try Fee Collector today</h3>
         <div className="flex gap-4 mb-16 relative z-20">
            <button className="bg-[#1F2937] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black">Start for free</button>
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50">Book a demo</button>
         </div>

         {/* Floating Geometric Pile */}
         <div className="relative w-full max-w-[800px] h-[300px] flex justify-center items-end -mb-10 z-10 overflow-hidden md:overflow-visible">
            
            {/* Shapes */}
            <div className="absolute bottom-10 left-10 md:left-32 w-32 h-32 bg-[#0AEB9A] rounded-full flex items-center justify-center rotate-12 shadow-lg">
               <span className="text-[10px] font-bold text-[#1F2937]">Subscriptions</span>
            </div>
            
            <div className="absolute bottom-20 left-40 md:left-64 w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-orange-400 border-r-[60px] border-r-transparent -rotate-12 flex items-end justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white mb-2 ml-4">Invoices</span>
            </div>

            <div className="absolute bottom-5 right-20 md:right-40 w-40 h-20 bg-[#06b6d4] rotate-6 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white">Reporting</span>
            </div>
            
            <div className="absolute bottom-32 right-32 md:right-64 w-32 h-40 bg-pink-500 -rotate-12 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white">Add-ons</span>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#3b82f6] rounded flex items-center justify-center shadow-lg rotate-2">
               <span className="text-xs font-bold text-white">Reminders</span>
            </div>

            {/* Doodles */}
            <div className="absolute bottom-40 left-20 text-3xl opacity-80 -rotate-45">〰️</div>
            <div className="absolute bottom-52 right-1/4 text-4xl opacity-80">🌀</div>
         </div>
      </section>

    </div>
  );
}
