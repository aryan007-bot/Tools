"use client";

import { motion } from "framer-motion";

export function Ecosystem() {
  return (
    <section className="bg-white pb-0 font-sans relative">
      {/* Intro Section with Scribble Divider */}
      <div className="max-w-[800px] mx-auto px-6 pt-32 pb-8 flex flex-col items-center text-center">
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif text-[#1F2937] leading-[1.2] mb-6">
          How It Works <br />
          <span className="text-[#1F2937]">From signup to results in <span className="bg-[#B4A5FF] px-2 rounded-sm inline-block">minutes</span></span>
        </h2>
        <p className="text-[#6B7280] text-sm md:text-base max-w-[500px] leading-relaxed mb-6">
          No complex onboarding. No learning curve. Just powerful tools ready to work the moment you start.
        </p>

        {/* Scribble Divider */}
        <div className="relative w-full max-w-[600px] h-32 flex justify-center items-center mb-16">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 600 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 70 C 40 20, 60 120, 90 70 C 120 20, 140 20, 170 70 C 200 120, 230 20, 260 70 C 290 120, 320 20, 350 70 C 400 120, 480 90, 550 60" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            <path d="M 170 30 L 180 60 M 230 40 L 210 70 M 320 30 L 310 60" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            {/* Sparkles */}
            <path d="M 120 25 L 125 35 M 130 30 L 120 30" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            <path d="M 380 25 L 385 35 M 390 30 L 380 30" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            {/* Dashes */}
            <path d="M 570 65 L 575 70 M 585 60 L 590 55" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
          </svg>
          {/* Yellow Pencil Graphic */}
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-4 rotate-[45deg]">
            <svg viewBox="0 0 100 100" className="w-20 h-20 overflow-visible">
              <polygon points="20,80 40,40 60,50 40,90" fill="#FBBF24" />
              <polygon points="40,90 60,50 55,95" fill="#FDE68A" />
              <polygon points="55,95 60,105 62,90" fill="#111827" />
              {/* Pink Eraser */}
              <polygon points="20,80 40,40 30,20 10,60" fill="#F472B6" />
            </svg>
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
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sticky top-[100px] z-[1] mb-[25vh]">
           <div className="lg:w-1/2 bg-[#0AEB9A] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[150%] h-[150%] bg-purple-600/20 rounded-full blur-3xl" />
              </div>
              
              <div className="relative w-full max-w-[340px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-[#A78BFA] p-3 flex justify-between items-center text-white">
                   <div className="flex items-center gap-2">
                     <span className="w-5 h-5 bg-white/20 rounded flex items-center justify-center text-xs">AI</span>
                     <span className="font-semibold text-sm">Create Account</span>
                   </div>
                   <div className="flex gap-1">
                     <span className="w-3 h-3 bg-white/30 rounded-sm" />
                     <span className="w-3 h-3 bg-white/30 rounded-sm" />
                   </div>
                </div>
                <div className="p-5 flex flex-col gap-4 text-xs text-gray-600">
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5 flex items-center gap-2 w-max">
                     <span className="w-6 h-6 bg-green-100 text-green-600 rounded flex items-center justify-center">👤</span>
                     <span className="font-medium">Account Setup</span>
                     <span className="text-gray-400 ml-2">&gt;</span>
                  </div>
                  <p>Welcome! Let's get your account created:</p>
                  <ol className="list-decimal pl-4 flex flex-col gap-3">
                    <li>Enter your email address and choose a secure password.</li>
                    <li>Verify your email address.</li>
                    <li>You are in!</li>
                  </ol>
                </div>
              </div>

              {/* Octopus Character */}
              <div className="absolute bottom-4 right-8 w-24 h-24 z-20">
                 <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <circle cx="50" cy="50" r="25" fill="#8B5CF6" />
                    <rect x="25" y="50" width="50" height="20" fill="#8B5CF6" />
                    <circle cx="35" cy="70" r="10" fill="#8B5CF6" />
                    <circle cx="50" cy="70" r="10" fill="#8B5CF6" />
                    <circle cx="65" cy="70" r="10" fill="#8B5CF6" />
                    <circle cx="42" cy="45" r="4" fill="white" />
                    <circle cx="58" cy="45" r="4" fill="white" />
                    <circle cx="42" cy="45" r="2" fill="black" />
                    <circle cx="58" cy="45" r="2" fill="black" />
                    <polygon points="30,80 50,75 70,80 70,95 50,90 30,95" fill="#EF4444" />
                    <line x1="50" y1="75" x2="50" y2="90" stroke="#B91C1C" strokeWidth="2" />
                 </svg>
              </div>
           </div>
           
           <div className="lg:w-1/2 bg-[#F9FAFB] p-10 md:p-16 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="14" width="8" height="8" fill="#F472B6" />
                    <rect x="12" y="10" width="8" height="8" fill="#FBBF24" />
                    <rect x="8" y="4" width="8" height="8" fill="#60A5FA" />
                 </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1F2937] leading-[1.3] mb-4">
                1. Create Account
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                Sign up in seconds. No complex onboarding or lengthy setup processes. Get instant access.
              </p>
           </div>
        </div>

        {/* Step 2: Select Tool */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sticky top-[120px] z-[2] mb-[25vh]">
           <div className="lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="7" height="7" fill="#60A5FA" />
                    <rect x="13" y="4" width="7" height="7" fill="#FBBF24" />
                    <rect x="4" y="13" width="7" height="7" fill="#34D399" />
                    <rect x="13" y="13" width="7" height="7" fill="#8B5CF6" />
                 </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1F2937] leading-[1.3] mb-4">
                2. Select Tool
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                Pick what you need from our suite of 5 powerful AI business tools. Build your perfect stack.
              </p>
           </div>

           <div className="lg:w-1/2 bg-[#F9FAFB] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px] order-1 lg:order-2">
              <div className="absolute top-0 right-0 w-[80%] h-[70%] bg-[#FFD7F4] rounded-bl-[100px]" />
              
              <div className="relative w-full max-w-[440px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 border border-gray-100">
                 <div className="p-4 flex gap-4 h-[280px]">
                    <div className="w-1/3 flex flex-col items-center">
                       <div className="w-20 h-20 bg-gray-200 rounded-full mb-3 overflow-hidden flex items-center justify-center text-3xl">🛠️</div>
                       <h4 className="font-semibold text-xs text-center text-gray-800">Tool Selection</h4>
                       <div className="mt-4 w-full h-8 bg-purple-50 rounded-md border border-purple-100" />
                    </div>
                    <div className="w-2/3 flex flex-col gap-4">
                       <div className="flex gap-4">
                          <div className="flex-1 bg-white border border-gray-100 rounded-lg shadow-sm p-3 flex flex-col items-center">
                             <div className="text-[9px] font-semibold text-gray-600 mb-2">Voice to Excel</div>
                             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-xl">📊</div>
                          </div>
                          <div className="flex-1 bg-white border border-gray-100 rounded-lg shadow-sm p-3 flex flex-col items-center">
                             <div className="text-[9px] font-semibold text-gray-600 mb-2">Video Editor</div>
                             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">🎬</div>
                          </div>
                       </div>
                       <div className="bg-gray-50 rounded-lg flex-1 border border-gray-100 p-2" />
                    </div>
                 </div>
              </div>

              <div className="absolute bottom-2 right-12 w-28 h-28 z-20">
                 <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <circle cx="50" cy="50" r="25" fill="#8B5CF6" />
                    <rect x="25" y="50" width="50" height="20" fill="#8B5CF6" />
                    <circle cx="35" cy="70" r="10" fill="#8B5CF6" />
                    <circle cx="50" cy="70" r="10" fill="#8B5CF6" />
                    <circle cx="65" cy="70" r="10" fill="#8B5CF6" />
                    <circle cx="42" cy="45" r="5" fill="white" />
                    <circle cx="58" cy="45" r="5" fill="white" />
                    <circle cx="42" cy="45" r="2.5" fill="black" />
                    <circle cx="58" cy="45" r="2.5" fill="black" />
                    <rect x="25" y="75" width="50" height="5" fill="#1F2937" rx="2" />
                    <polygon points="30,75 40,60 60,60 70,75" fill="#374151" />
                    <rect x="45" y="65" width="10" height="10" fill="#4B5563" />
                 </svg>
              </div>
           </div>
        </div>

        {/* Step 3: Subscribe */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sticky top-[140px] z-[3] mb-[25vh]">
           <div className="lg:w-1/2 bg-[#B4A5FF] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px'
                }}>
              
              <div className="relative w-full max-w-[380px] h-[220px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 border border-gray-100">
                 <div className="p-3 border-b border-gray-100 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                    <span className="ml-2 text-xs font-semibold text-gray-700">Subscription Plan</span>
                 </div>
                 <div className="p-4 flex-1 bg-gray-50 flex flex-col gap-3 relative">
                    <div className="w-full h-16 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-lg mt-2 flex items-center justify-center">
                      <span className="font-bold text-purple-700">Pro Plan Selected</span>
                    </div>
                    <div className="w-2/3 h-3 bg-gray-200 rounded-full mt-2" />
                    <div className="w-1/2 h-3 bg-gray-200 rounded-full" />
                    <div className="absolute right-2 top-4 bottom-4 w-1.5 bg-gray-200 rounded-full overflow-hidden">
                       <div className="w-full h-1/3 bg-gray-400 rounded-full mt-4" />
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-1/2 bg-[#F9FAFB] p-10 md:p-16 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="#8B5CF6" strokeWidth="3" />
                    <circle cx="12" cy="12" r="3" fill="#F472B6" />
                 </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1F2937] leading-[1.3] mb-4">
                3. Subscribe
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                Choose your plan and gain unlimited access to the tools you need to grow your business.
              </p>
           </div>
        </div>

        {/* Step 4: Use Tool */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sticky top-[160px] z-[4] mb-[25vh]">
           <div className="lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 22h20L12 2z" fill="#60A5FA" />
                 </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1F2937] leading-[1.3] mb-4">
                4. Use Tool
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                Start creating. No learning curve required. Let AI handle the heavy lifting while you focus on strategy.
              </p>
           </div>

           <div className="lg:w-1/2 bg-[#F9FAFB] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px] order-1 lg:order-2">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[150%] h-[150%] bg-blue-600/20 rounded-full blur-3xl" />
              </div>
              <div className="relative w-full max-w-[340px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10">
                <div className="bg-[#3B82F6] p-3 flex justify-between items-center text-white">
                   <div className="flex items-center gap-2">
                     <span className="font-semibold text-sm">Dashboard</span>
                   </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <div className="w-full h-24 bg-gray-100 rounded flex items-center justify-center text-4xl">⚡</div>
                  <div className="w-full h-4 bg-gray-200 rounded" />
                  <div className="w-2/3 h-4 bg-gray-200 rounded" />
                </div>
              </div>
           </div>
        </div>

        {/* Step 5: Get Results */}
        <div className="w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sticky top-[180px] z-[5] mb-[20vh]">
           <div className="lg:w-1/2 bg-[#34D399] p-8 md:p-12 relative flex items-center justify-center overflow-hidden min-h-[400px]">
              <div className="absolute top-0 right-0 w-[80%] h-[70%] bg-[#A7F3D0] rounded-bl-[100px]" />
              <div className="relative w-full max-w-[380px] h-[220px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 border border-gray-100">
                 <div className="p-3 border-b border-gray-100 flex items-center gap-2">
                    <span className="ml-2 text-xs font-semibold text-gray-700">Results Export</span>
                 </div>
                 <div className="p-4 flex-1 bg-gray-50 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">✅</div>
                    <span className="font-bold text-green-700">Export Complete!</span>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-1/2 bg-[#F9FAFB] p-10 md:p-16 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
                 <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1F2937] leading-[1.3] mb-4">
                5. Get Results
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                Export & grow. Download production-ready assets, spreadsheets, and videos in seconds.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
