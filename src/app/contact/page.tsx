"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaqSection } from "@/components/ui/faq-section";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const faqData = [
    {
      id: 1,
      question: "What is ToolStack and how does it help my business?",
      answer: "ToolStack is a unified SaaS platform featuring utility tools like Voice to Excel, Test Generator, Fee Collection, and Email Assistant. It replaces separate, expensive subscriptions with a single high-performance workspace."
    },
    {
      id: 2,
      question: "How accurate is the Voice to Excel transcription?",
      answer: "Our dictation engine features 95%+ speech-to-text accuracy with active noise cancellation and smart categorization, automatically parsing dates, quantities, and SKUs directly into structured Excel columns."
    },
    {
      id: 3,
      question: "Is my data secure and isolated?",
      answer: "Yes, security is our top priority. All tools run on isolated sandbox environments. We strictly respect your data privacy, and none of your business data or voice recordings are used to train public models."
    },
    {
      id: 4,
      question: "Can I connect ToolStack to Google Sheets or CRMs?",
      answer: "Yes. On our Premium and Enterprise tiers, we support API integrations and webhooks to sync your Voice to Excel transcriptions directly to Google Sheets, Salesforce, HubSpot, or other internal tools."
    },
    {
      id: 5,
      question: "How do I upgrade or cancel my plan?",
      answer: "You can change your billing settings anytime directly in your customer dashboard, switching between monthly and yearly billing modes instantly."
    }
  ];

  return (
    <div className="pt-20 bg-[#fafafa] min-h-screen relative overflow-hidden">
      {/* Background blurry blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-200/10 to-cyan-200/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Animated Developer Utility Nodes */}
      {/* 1. Floating Magnet */}
      <motion.div
        className="absolute top-[28%] right-[8%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ x: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🧲
          </motion.div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">DB_PULL</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Magnet_Sync
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 2. Spin-drill Bolt (Cpu) */}
      <motion.div
        className="absolute top-[50%] left-[8%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            🔩
          </motion.div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">IO_STREAM</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Bolt_Thread
              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3. Crossed Tools (Hammer) */}
      <motion.div
        className="absolute bottom-[20%] left-[8%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            🛠️
          </motion.div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">DEV_UTILITY</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Utility_Core
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 4. Rotating Gear (Settings) */}
      <motion.div
        className="absolute bottom-[15%] right-[8%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-base select-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            ⚙️
          </motion.div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">ENGINE</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Gear_Core
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden bg-[#fafafa] pt-4 pb-0 z-10">
        {/* Large back heading */}
        <div className="relative text-center overflow-hidden select-none mb-[-15px] sm:mb-[-30px] pointer-events-none">
          <h2 className="font-serif leading-none tracking-tight text-gray-900/5 whitespace-nowrap text-[4.5rem] sm:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
            Let&apos;s Connect
          </h2>
        </div>

        {/* Light premium wrapper */}
        <div className="w-full bg-white/70 backdrop-blur-md rounded-t-[40px] border-t border-gray-200/50 relative z-10 px-4 pt-10 sm:pt-14 pb-12 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-16 items-center mb-12 sm:mb-16">
            
            {/* Left Column - Graphic/Copy */}
            <div className="lg:col-span-2 space-y-6 relative min-h-[260px] sm:min-h-[320px] flex flex-col justify-center text-center lg:text-left">
              {/* Overlay blurry photos grid */}
              <div className="absolute inset-0 grid grid-cols-3 gap-2 opacity-[0.04] blur-[2px] pointer-events-none select-none">
                {Array(9).fill(null).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg aspect-video w-full bg-gray-300"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${1500000000000 + i * 12345}?auto=format&fit=crop&w=300&q=40')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <h3
                  className="text-gray-900 font-medium mb-3 text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] tracking-tight font-serif"
                  style={{ lineHeight: "1.15" }}
                >
                  Have questions about ToolStack?
                </h3>
                <p className="text-gray-500 font-normal text-[15px] font-sans">
                  Send us a message and we will respond within 24 hours
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8 text-left">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:outline-none transition-colors duration-200 text-sm font-normal font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:outline-none transition-colors duration-200 text-sm font-normal font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Describe your requirements or questions</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Type Here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:border-[#8B5CF6] focus:outline-none transition-colors duration-200 text-sm font-normal resize-none font-sans"
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    type="submit"
                    className="group flex w-full cursor-pointer select-none items-center justify-center gap-2 rounded-full bg-gray-950 py-4 text-xs font-bold uppercase tracking-widest text-white border border-white/5 shadow-[0_4px_20px_rgba(139,92,246,0.15)] transition-all duration-300 hover:bg-black hover:shadow-[0_4px_32px_rgba(139,92,246,0.3)]"
                  >
                    {submitted ? "Sent Successfully!" : "Send Now!"}
                    <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans">→</span>
                  </motion.button>
                </div>
              </form>
            </div>

          </div>

          {/* Marquee email banner */}
          <div className="mt-16 sm:mt-24 -mx-4 w-[calc(100%+32px)] border-t border-b border-gray-200 bg-gray-50/50 overflow-hidden select-none py-5 flex">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex gap-16 whitespace-nowrap text-xl sm:text-3xl text-gray-700 font-bold shrink-0 animate-marquee"
            >
              {Array(10).fill("contact@toolstack.com").map((email, idx) => (
                <div key={idx} className="flex items-center gap-16">
                  <span className="normal-case text-gray-700 font-sans">{email}</span>
                  <span className="text-[#8B5CF6] font-sans">×</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden bg-[#fafafa] py-24 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <p className="text-center text-gray-500 mb-3 text-[11px] tracking-wider font-bold uppercase font-sans">FAQs</p>
          <div className="text-center mb-4">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
              Your Questions, Answered
            </h2>
          </div>
          <p className="text-center text-gray-500 font-normal mb-16 mx-auto text-sm sm:text-base max-w-[440px] leading-relaxed font-sans">
            Helping you understand our process and offerings at ToolStack.
          </p>

          {/* Using the pre-built FaqSection component */}
          <div className="max-w-4xl mx-auto">
            <FaqSection faqs={faqData.map(f => ({ id: String(f.id), question: f.question, answer: f.answer }))} accentColor="#8B5CF6" />
          </div>
        </div>
      </section>

    </div>
  );
}
