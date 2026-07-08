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
                    <span className="relative text-[#1F2937] z-10 px-1">Schools</span>
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
                        <span>👥</span><span className="hidden md:block text-sm font-medium">Students</span>
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
                           <div className="font-bold text-gray-800 text-sm">Sarah Jenkins - Grade 10</div>
                           <div className="text-[11px] text-gray-500 mt-1">Tuition Fee Q2</div>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100 flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Paid - $1,200
                        </span>
                     </div>
                     <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
                        <div>
                           <div className="font-bold text-gray-800 text-sm">Marcus Ray - Grade 8</div>
                           <div className="text-[11px] text-gray-500 mt-1">Bus Transport Q2</div>
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
           Schools do not need more manual spreadsheets. They need a <span className="inline-block bg-[#3b82f6]/20 text-[#3b82f6] px-2">system.</span>
         </h2>
         <p className="text-[#6B7280] text-sm md:text-base max-w-[700px] leading-relaxed mb-12">
           Tracking payments manually across ledgers and Excel is slow, error-prone, and soul-crushing. ToolStack replaces tedious receipt generation, reconciliation, and chasing parents with a single automated collection workflow.
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
            ToolStack replaces financial fragmentation with a single automated ledger.
         </h3>

         {/* Feature 1 */}
         <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-full md:w-1/2 relative">
               <div className="w-full aspect-[4/3] bg-[#3b82f6]/20 rounded-2xl border-2 border-[#3b82f6] p-6 flex flex-col">
                  <div className="w-full h-8 bg-white rounded-t-md border-b border-gray-100 flex items-center px-3 gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                     <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white p-4 font-mono text-[10px] text-gray-500 overflow-hidden relative shadow-sm">
                     <div className="mb-2 text-[#3b82f6] font-bold">"Auto-reconcile Bank Deposits"</div>
                     <table className="w-full text-left mt-4">
                        <thead className="bg-gray-50 text-gray-800">
                           <tr><th>Student</th><th>Amount</th><th>Status</th></tr>
                        </thead>
                        <tbody>
                           <tr className="border-b"><td className="py-2 font-bold">Liam Smith</td><td className="py-2">$400</td><td className="py-2"><span className="bg-[#0AEB9A]/20 text-green-800 px-2 rounded">Reconciled</span></td></tr>
                           <tr className="border-b"><td className="py-2 font-bold">Emma Ray</td><td className="py-2">$850</td><td className="py-2"><span className="bg-[#0AEB9A]/20 text-green-800 px-2 rounded">Reconciled</span></td></tr>
                        </tbody>
                     </table>
                     <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3b82f6] rounded-full flex items-center justify-center text-4xl text-white shadow-xl rotate-12">🤖</div>
                  </div>
               </div>
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
            <div className="w-full md:w-1/2 relative">
               <div className="w-full aspect-[4/3] bg-[#F59E0B]/10 rounded-2xl border-2 border-[#F59E0B] p-6 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="bg-white p-6 rounded-xl shadow-xl z-10 w-[80%] flex flex-col gap-4 relative">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">✉️</div>
                        <div className="flex flex-col w-full">
                           <div className="w-3/4 h-2 bg-gray-200 rounded-full mb-2" />
                           <div className="w-1/2 h-2 bg-gray-200 rounded-full" />
                        </div>
                     </div>
                     <button className="w-full py-2 bg-[#1F2937] text-white text-xs font-bold rounded flex justify-center items-center gap-2">
                        <span>Send 450 Reminders</span>
                     </button>
                     <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#0AEB9A] rounded-full shadow-lg flex items-center justify-center text-xl">✅</div>
                  </div>
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
            One platform to handle every type of collection, from core tuition fees to one-off field trip charges.
         </p>

         <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-[#3b82f6]/10 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">🎓</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Tuition &amp; Core Fees</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Set up recurring billing, installment plans, and family discounts automatically.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-[#0AEB9A]/10 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">🚌</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Transport &amp; Add-ons</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Manage route-based transport fees, canteen charges, and uniform purchases dynamically.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-orange-50 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">🎫</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Event Collections</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Create quick payment links for field trips, annual days, and extracurricular activities.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-purple-50 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">💳</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Payment Gateways</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Accept credit cards, debit cards, UPI, and bank transfers through our unified checkout.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-pink-50 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">👨‍👩‍👧</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Parent Portal</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Give parents a dedicated app to view fee history, download receipts, and pay outstanding dues.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
               <div className="h-32 bg-gray-100 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center text-2xl border border-gray-100">📈</div>
               </div>
               <h4 className="font-bold text-[#1F2937] text-sm">Financial Reporting</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Generate instant daily collection reports, defaulter lists, and end-of-year tax statements.</p>
            </div>

         </div>
      </section>

      {/* 5. COMPLIANCE SECTION */}
      <section className="w-full bg-[#FFFEF9] py-24 flex flex-col items-center px-6 text-center">
         <h3 className="text-[1.8rem] font-serif text-[#1F2937] mb-16">Built for business. Compliant by design.</h3>
         
         <div className="flex flex-wrap justify-center gap-12 max-w-[900px]">
            <div className="flex flex-col items-center max-w-[150px]">
               <div className="w-20 h-20 bg-[#3b82f6] rounded-xl shadow-lg -rotate-3 flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">⚙️</span>
               </div>
               <h5 className="font-bold text-xs text-[#1F2937] mb-2">Tested by Schools</h5>
               <p className="text-[10px] text-gray-500">Built to handle complex fee structures of massive institutions.</p>
            </div>
            
            <div className="flex flex-col items-center max-w-[150px]">
               <div className="w-20 h-20 bg-[#0AEB9A] rounded-xl shadow-lg rotate-3 flex items-center justify-center mb-6">
                  <span className="text-3xl text-[#1F2937]">🔍</span>
               </div>
               <h5 className="font-bold text-xs text-[#1F2937] mb-2">FERPA Ready</h5>
               <p className="text-[10px] text-gray-500">Student data privacy is built into the core architecture.</p>
            </div>
            
            <div className="flex flex-col items-center max-w-[150px]">
               <div className="w-20 h-20 bg-orange-400 rounded-xl shadow-lg -rotate-6 flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🔒</span>
               </div>
               <h5 className="font-bold text-xs text-[#1F2937] mb-2">PCI Compliant</h5>
               <p className="text-[10px] text-gray-500">All payment data is tokenized and stored with banking-level security.</p>
            </div>
            
            <div className="flex flex-col items-center max-w-[150px]">
               <div className="w-20 h-20 bg-pink-500 rounded-xl shadow-lg rotate-6 flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">✅</span>
               </div>
               <h5 className="font-bold text-xs text-[#1F2937] mb-2">Automated Audits</h5>
               <p className="text-[10px] text-gray-500">Immutable ledger history for seamless end-of-year accounting audits.</p>
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
            ToolStack integrates directly with your existing ERPs, payment gateways, and accounting software.
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
                     {["Stripe", "Razorpay", "QuickBooks", "Tally", "Canvas", "Google Workspace", "Schoology", "Xero"].map((logo, i) => (
                        <div key={i} className={`w-40 h-20 bg-white border border-gray-200 shadow-sm flex items-center justify-center transform ${i%2===0 ? 'rotate-3' : '-rotate-2'} relative overflow-hidden`}>
                           {/* Graph Paper Background */}
                           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                           <span className="font-bold text-gray-700 text-sm relative z-10 flex items-center gap-2">
                              <span className="text-[#3b82f6]">🟦</span> {logo}
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
            <div className="absolute bottom-10 left-10 md:left-32 w-32 h-32 bg-[#0AEB9A] rounded-full flex items-center justify-center rotate-12 shadow-lg">
               <span className="text-[10px] font-bold text-[#1F2937]">Tuition</span>
            </div>
            
            <div className="absolute bottom-20 left-40 md:left-64 w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-orange-400 border-r-[60px] border-r-transparent -rotate-12 flex items-end justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white mb-2 ml-4">Invoices</span>
            </div>

            <div className="absolute bottom-5 right-20 md:right-40 w-40 h-20 bg-[#06b6d4] rotate-6 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white">Reporting</span>
            </div>
            
            <div className="absolute bottom-32 right-32 md:right-64 w-32 h-40 bg-pink-500 -rotate-12 flex items-center justify-center shadow-lg">
               <span className="text-[10px] font-bold text-white">Transport</span>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#3b82f6] rounded flex items-center justify-center shadow-lg rotate-2">
               <span className="text-xs font-bold text-white">Reminders</span>
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
            <h1 className="text-[6rem] md:text-[14rem] font-serif font-black text-[#3b82f6] leading-none tracking-tighter mix-blend-screen opacity-90">
               ToolStack
            </h1>
         </div>
      </footer>

    </div>
  );
}
