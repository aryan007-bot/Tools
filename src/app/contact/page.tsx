"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      question: "Why choose ToolStack over hiring in-house developers?",
      answer: "Hiring full-time developers is slow, expensive, and risky. With ToolStack, you get a full team of elite software engineers, designers, and project managers ready to deploy custom software in days, not months—at a fraction of the cost of a single in-house hire."
    },
    {
      id: 2,
      question: "How fast can you deploy an AI agent?",
      answer: "Basic AI assistants and workflows can be deployed in as little as 3 to 7 days. For fully custom enterprise software and deep integrations, our development cycles typically range from 2 to 4 weeks."
    },
    {
      id: 3,
      question: "What is your development process like?",
      answer: "We follow a structured, speed-focused process: first, we audit your manual bottlenecks; second, we draft a custom architecture; third, we build and test the software; and finally, we deploy and optimize for token costs and security."
    },
    {
      id: 4,
      question: "Do you build custom software or just use templates?",
      answer: "We build fully custom, proprietary software tailored specifically to your business operations. While we leverage optimized pre-built modules for standard functions to save you time and cost, every client receives a unique codebase they own completely."
    },
    {
      id: 5,
      question: "How do we get started on a project?",
      answer: "Simply fill out our contact form or send an email to contact@profitagentz.com. We will schedule a brief 15-minute discovery call to understand your operational bottlenecks and provide a fixed-price proposal within 24 hours."
    },
    {
      id: 6,
      question: "Are your AI systems secure and compliant?",
      answer: "Yes, security is our top priority. We build using isolated enterprise-grade cloud environments, fully compliant with SOC 2 and HIPAA standards. Your proprietary business data is never used to train public LLM models."
    }
  ];

  return (
    <div className="pt-12 bg-[#e8e8e8] min-h-screen">
      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden bg-[#e8e8e8] pt-24 pb-0">
        {/* Large back heading */}
        <div className="relative text-center overflow-hidden select-none mb-[-15px] sm:mb-[-30px] pointer-events-none">
          <h2 className="font-black leading-none tracking-tighter uppercase text-[rgba(0,0,0,0.06)] whitespace-nowrap text-[4.5rem] sm:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
            Let&apos;s Connect
          </h2>
        </div>

        {/* Dark overlay wrapper */}
        <div className="w-full bg-[#0a0a0a] rounded-t-[40px] border-t border-white/5 relative z-10 px-4 pt-10 sm:pt-28 pb-12 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-16 items-center mb-12 sm:mb-16">
            
            {/* Left Column - Graphic/Copy */}
            <div className="lg:col-span-2 space-y-6 relative min-h-[260px] sm:min-h-[320px] flex flex-col justify-center text-center lg:text-left">
              {/* Overlay blurry photos grid */}
              <div className="absolute inset-0 grid grid-cols-3 gap-2 opacity-[0.06] blur-[2px] pointer-events-none select-none">
                {Array(9).fill(null).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg aspect-video w-full bg-zinc-800"
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
                  className="text-white font-black mb-3 text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] tracking-tight font-display"
                  style={{ lineHeight: "1.15" }}
                >
                  Ready to build something that pays?
                </h3>
                <p className="text-zinc-400 font-light text-[15px] font-sans">
                  Tell us about your software requirements
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8 text-left">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white uppercase tracking-wider block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-zinc-650 focus:border-white focus:outline-none transition-colors duration-200 text-sm font-light font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white uppercase tracking-wider block">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-zinc-650 focus:border-white focus:outline-none transition-colors duration-200 text-sm font-light font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white uppercase tracking-wider block">Describe your bottlenecks / goals</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Type Here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-zinc-650 focus:border-white focus:outline-none transition-colors duration-200 text-sm font-light resize-none font-sans"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group flex w-full cursor-pointer select-none items-center justify-center gap-2 rounded-full bg-[#111111] py-4 text-xs font-extrabold uppercase tracking-widest text-white border border-white/5 shadow-[0_0_20px_rgba(139,92,246,0.32)] transition-all duration-300 hover:bg-black hover:shadow-[0_0_32px_rgba(139,92,246,0.55)]"
                  >
                    {submitted ? "Sent Successfully!" : "Send Now!"}
                    <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans">→</span>
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Marquee email banner */}
          <div className="mt-16 sm:mt-24 -mx-4 w-[calc(100%+32px)] border-t border-b border-white/5 bg-black overflow-hidden select-none py-5 flex">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex gap-16 whitespace-nowrap text-xl sm:text-3xl text-gray-300 font-bold shrink-0 animate-marquee"
            >
              {Array(10).fill("contact@profitagentz.com").map((email, idx) => (
                <div key={idx} className="flex items-center gap-16">
                  <span className="normal-case text-zinc-300 font-mono">{email}</span>
                  <span className="text-purple-500 font-sans">×</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden bg-[#e8e8e8] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <p className="text-center text-zinc-500 mb-3 text-[11px] tracking-[0.08em] font-semibold uppercase font-sans">FAQs</p>
          <div className="text-center mb-4">
            <h2 className="font-black leading-none tracking-tight text-zinc-900 font-sans text-3xl sm:text-4xl lg:text-5xl uppercase">
              Your Questions, Answered
            </h2>
          </div>
          <p className="text-center text-zinc-500 font-light mb-16 mx-auto text-sm max-w-[440px] leading-relaxed font-sans">
            Helping you understand our process and offerings at ToolStack.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              {faqData.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                  className="bg-[#f0f0f0] hover:bg-[#ebebeb] border border-black/5 rounded-3xl p-6 sm:p-8 cursor-pointer select-none transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-bold text-zinc-900 leading-snug text-sm sm:text-base font-sans">
                      {item.question}
                    </h4>
                    <div className="flex items-center justify-center rounded-full shrink-0 text-white w-6 h-6 bg-black text-xs font-bold transition-transform duration-200">
                      {openFaq === item.id ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {openFaq === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              {faqData.slice(3, 6).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                  className="bg-[#f0f0f0] hover:bg-[#ebebeb] border border-black/5 rounded-3xl p-6 sm:p-8 cursor-pointer select-none transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-bold text-zinc-900 leading-snug text-sm sm:text-base font-sans">
                      {item.question}
                    </h4>
                    <div className="flex items-center justify-center rounded-full shrink-0 text-white w-6 h-6 bg-black text-xs font-bold transition-transform duration-200">
                      {openFaq === item.id ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {openFaq === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
