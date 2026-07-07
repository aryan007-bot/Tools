"use client";

const realities = [
  { 
    title: "Voice To Excel", 
    desc: "Convert spoken voice into structured Excel sheets automatically. Record, transcribe in real-time, categorize data intelligently, and export production-ready spreadsheets.",
    mockup: (
      <div className="w-full h-48 bg-[#F8F9FA] rounded-xl relative overflow-hidden flex items-center justify-center">
         {/* Background Shapes */}
         <div className="absolute left-4 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] border-b-[#8B5CF6] -rotate-12 opacity-80" />
         <div className="absolute right-4 bottom-0 w-20 h-24 bg-[#B4A5FF] rounded-tl-full opacity-80" />
         {/* Foreground UI */}
         <div className="relative w-[70%] bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div className="flex justify-between items-center mb-3">
               <div className="w-6 h-6 bg-[#A78BFA] rounded flex items-center justify-center">
                 <div className="w-3 h-3 border border-white rounded-sm" />
               </div>
               <div className="w-16 h-4 bg-purple-50 rounded-full" />
            </div>
            <h4 className="text-xs font-bold text-gray-800 mb-1">Generate with AI</h4>
            <div className="space-y-1">
              <div className="w-full h-1.5 bg-gray-100 rounded-full" />
              <div className="w-[90%] h-1.5 bg-gray-100 rounded-full" />
              <div className="w-[80%] h-1.5 bg-gray-100 rounded-full" />
              <div className="w-[40%] h-1.5 bg-gray-100 rounded-full" />
            </div>
         </div>
      </div>
    )
  },
  { 
    title: "Test Generator", 
    desc: "Create tests, quizzes, and question papers automatically. Choose subjects, set difficulty levels, generate answer keys, and export to PDF in seconds.",
    mockup: (
      <div className="w-full h-48 bg-[#F8F9FA] rounded-xl relative overflow-hidden flex items-center justify-center">
         {/* Background Shapes */}
         <div className="absolute left-0 top-0 w-16 h-32 bg-[#34D399] rounded-br-full opacity-90" />
         {/* Foreground UI */}
         <div className="relative w-[85%] h-[80%] bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex flex-col gap-2">
            <div className="w-full h-2 bg-gray-100 rounded-full mb-1" />
            <div className="w-3/4 h-2 bg-gray-100 rounded-full mb-2" />
            {/* Multiple Choice */}
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full border border-gray-300" />
               <div className="w-1/2 h-1.5 bg-gray-100 rounded-full" />
            </div>
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500" />
               <div className="w-2/3 h-1.5 bg-gray-100 rounded-full" />
            </div>
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full border border-gray-300" />
               <div className="w-1/3 h-1.5 bg-gray-100 rounded-full" />
            </div>
            {/* Bottom Gradient Boxes */}
            <div className="mt-auto flex gap-2">
               <div className="h-6 flex-1 bg-gradient-to-r from-purple-200 to-purple-100 rounded" />
               <div className="h-6 flex-1 bg-gradient-to-r from-blue-200 to-blue-100 rounded" />
            </div>
         </div>
      </div>
    )
  },
  { 
    title: "Video Editor", 
    desc: "AI-assisted video editing with timeline controls, automatic subtitles, smart trimming, professional effects, and high-quality export.",
    mockup: (
      <div className="w-full h-48 bg-[#F8F9FA] rounded-xl relative overflow-hidden flex items-center justify-center">
         {/* Background Shapes */}
         <div className="absolute right-0 top-0 w-32 h-16 bg-[#FBBF24] rounded-bl-full opacity-90" />
         {/* Foreground UI */}
         <div className="relative w-[90%] h-[85%] bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex gap-2">
            <div className="w-1/3 flex flex-col items-center">
               <div className="w-10 h-10 bg-gray-200 rounded-full mb-1 overflow-hidden">
                 <img src="https://i.pravatar.cc/150?img=47" alt="Student" className="w-full h-full object-cover" />
               </div>
               <div className="w-16 h-1.5 bg-gray-200 rounded-full mb-1" />
               <div className="w-12 h-1 bg-gray-100 rounded-full mb-2" />
               <div className="w-full h-8 bg-gray-50 rounded border border-gray-100" />
            </div>
            <div className="w-2/3 flex flex-col gap-2">
               <div className="flex gap-2 h-16">
                  <div className="flex-1 border border-gray-100 rounded flex items-center justify-center relative">
                     {/* Mini spider chart */}
                     <svg viewBox="0 0 40 40" className="w-10 h-10 opacity-50">
                        <polygon points="20,5 35,15 35,30 20,40 5,30 5,15" fill="none" stroke="#D1D5DB" />
                        <polygon points="20,10 28,18 25,32 15,32 12,18" fill="rgba(139,92,246,0.3)" stroke="#8B5CF6" />
                     </svg>
                  </div>
                  <div className="flex-1 border border-gray-100 rounded flex items-center justify-center">
                     {/* Mini doughnut */}
                     <div className="relative w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                           <circle cx="14" cy="14" r="13" fill="none" stroke="#34D399" strokeWidth="2" strokeDasharray="81" strokeDashoffset="20" />
                        </svg>
                        <span className="text-[8px] font-bold">78</span>
                     </div>
                  </div>
               </div>
               <div className="w-full h-6 bg-gray-50 rounded border border-gray-100" />
            </div>
         </div>
      </div>
    )
  },
  { 
    title: "Fee Collection", 
    desc: "Complete fee management system for schools and institutes. Track payments, send reminders, generate reports, and analyze financial data.",
    mockup: (
      <div className="w-full h-48 bg-[#F8F9FA] rounded-xl relative overflow-hidden flex items-center justify-center">
         {/* Background Shapes */}
         <div className="absolute left-0 bottom-[-20%] w-[120%] h-[120%] bg-[#F97316] rounded-t-full opacity-90" />
         {/* Foreground UI */}
         <div className="relative w-[85%] h-[90%] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col">
            <div className="p-2 border-b border-gray-100 flex gap-2 items-center">
              <div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center">
                 <div className="w-2 h-2 bg-white rounded-sm" />
              </div>
              <div className="w-20 h-2 bg-gray-200 rounded-full" />
            </div>
            <div className="p-3 flex-1 flex flex-col gap-3">
               {/* Chat bubble left */}
               <div className="flex gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded-full flex-shrink-0" />
                  <div className="bg-gray-100 rounded-r-lg rounded-bl-lg p-2 flex-1">
                     <div className="w-full h-1.5 bg-gray-300 rounded-full mb-1" />
                     <div className="w-3/4 h-1.5 bg-gray-300 rounded-full" />
                  </div>
               </div>
               {/* Chat bubble right */}
               <div className="flex gap-2 justify-end">
                  <div className="bg-purple-100 rounded-l-lg rounded-br-lg p-2 w-2/3">
                     <div className="w-full h-1.5 bg-purple-300 rounded-full mb-1" />
                     <div className="w-1/2 h-1.5 bg-purple-300 rounded-full" />
                  </div>
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0" />
               </div>
            </div>
         </div>
      </div>
    )
  },
  { 
    title: "Email Assistant", 
    desc: "Generate, improve, and automate emails. From smart drafts to tone adjustments, templates to scheduling — your complete email workflow.",
    mockup: (
      <div className="w-full h-48 bg-[#F8F9FA] rounded-xl relative overflow-hidden flex items-center justify-center">
         {/* Background Shapes */}
         <div className="absolute left-4 top-4 w-12 h-12 bg-[#60A5FA] rounded-full opacity-80 mix-blend-multiply blur-sm" />
         <div className="absolute right-8 bottom-4 w-16 h-16 bg-[#A78BFA] rounded-full opacity-80 mix-blend-multiply blur-sm" />
         {/* Foreground UI */}
         <div className="relative w-[90%] h-[70%] bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex gap-2">
            <div className="flex-1 bg-gray-50 border border-gray-100 rounded p-1 flex flex-col">
               <div className="w-full h-12 bg-pink-100 rounded mb-1 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-pink-400 opacity-50"><circle cx="12" cy="12" r="8" fill="currentColor"/></svg>
                 </div>
               </div>
               <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1" />
               <div className="w-1/2 h-1 bg-gray-200 rounded-full" />
            </div>
            <div className="flex-1 bg-gray-50 border border-gray-100 rounded p-1 flex flex-col">
               <div className="w-full h-12 bg-blue-100 rounded mb-1 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-400 opacity-50"><rect x="4" y="4" width="16" height="16" fill="currentColor"/></svg>
                 </div>
               </div>
               <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1" />
               <div className="w-2/3 h-1 bg-gray-200 rounded-full" />
            </div>
         </div>
      </div>
    )
  },
  { 
    title: "Unified Dashboard", 
    desc: "Manage all your business operations from a single unified interface. Gain insights, track metrics, and scale your business faster with our integrated suite of AI tools.",
    mockup: (
      <div className="w-full h-48 bg-[#F8F9FA] rounded-xl relative overflow-hidden flex items-center justify-center">
         {/* Background Shapes */}
         <div className="absolute right-0 top-0 w-32 h-16 bg-[#A78BFA] opacity-90 rounded-bl-full" />
         {/* Foreground UI */}
         <div className="relative w-[90%] h-[85%] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-100 p-2 flex gap-1">
               <div className="w-1/4 h-3 bg-gray-200 rounded" />
               <div className="w-1/4 h-3 bg-gray-200 rounded" />
               <div className="w-1/4 h-3 bg-white border border-gray-200 rounded shadow-sm" />
            </div>
            <div className="p-3 flex flex-col gap-2">
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-green-100" />
                 <div className="flex-1 flex flex-col gap-1">
                    <div className="w-3/4 h-1.5 bg-gray-200 rounded-full" />
                    <div className="w-1/4 h-1 bg-gray-100 rounded-full" />
                 </div>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-yellow-100" />
                 <div className="flex-1 flex flex-col gap-1">
                    <div className="w-2/3 h-1.5 bg-gray-200 rounded-full" />
                    <div className="w-1/3 h-1 bg-gray-100 rounded-full" />
                 </div>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-blue-100" />
                 <div className="flex-1 flex flex-col gap-1">
                    <div className="w-4/5 h-1.5 bg-gray-200 rounded-full" />
                    <div className="w-1/5 h-1 bg-gray-100 rounded-full" />
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

export function Workflow() {
  return (
    <section className="bg-white py-24 font-sans">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-serif text-[#1F2937] leading-[1.2] max-w-[400px]">
            One system for every <br /> business need
          </h2>
          <p className="text-[#6B7280] text-sm max-w-[350px] leading-relaxed">
            ToolStack adapts to how businesses actually operate, all without the need
            for separate tools, products, or workflows.
          </p>
        </div>

        {/* 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {realities.map((item, i) => (
            <div key={i} className="flex flex-col group cursor-default">
              {item.mockup}
              <div className="mt-6 flex flex-col gap-2">
                 <h3 className="font-serif text-[1.1rem] text-[#1F2937] leading-tight">{item.title}</h3>
                 <p className="text-[#6B7280] text-[0.85rem] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Section */}
        <div className="w-full flex flex-col items-center pt-2 border-t-0">
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

      </div>
    </section>
  );
}
