"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { pricingFaq } from "@/lib/constants/faq";
import { PricingCard } from "@/components/ui/pricing-card";
import { FaqSection } from "@/components/ui/faq-section";
import { Check } from "lucide-react";
import { apiClient } from "@/lib/api-client";
import { PricingTier } from "@/types";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/animations/aurora-background";
import { FloatingParticles } from "@/components/animations/floating-particles";
import { useRelativeMousePosition, useReducedMotion } from "@/components/animations/motion-config";

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const pricingRef = useRef<HTMLDivElement>(null);
  const mouse = useRelativeMousePosition(pricingRef);
  const reduced = useReducedMotion();

  // Parallax offsets based on mouse position
  const parallaxSlow = reduced ? { x: 0, y: 0 } : { x: mouse.x * 6, y: mouse.y * 4 };
  const parallaxFast = reduced ? { x: 0, y: 0 } : { x: mouse.x * 12, y: mouse.y * 10 };

  const formatValue = (val: string | number) => {
    if (val === 'Unlimited') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50/80 text-emerald-700 border border-emerald-100/30">
          Unlimited
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200/40">
        {val}
      </span>
    );
  };

  const renderCheckOrDash = (hasFeature: boolean) => {
    if (hasFeature) {
      return (
        <div className="flex justify-center">
          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/20 shadow-sm">
            <Check className="w-3.5 h-3.5" strokeWidth={3.5} />
          </div>
        </div>
      );
    }
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 border border-gray-100/50">
          <span className="text-[10px] font-bold leading-none -mt-[1px]">—</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        let tools: any[];
        try {
          tools = await apiClient.get<any[]>("/pricing/tools");
        } catch (apiError) {
          console.warn("API offline, falling back to mock data", apiError);
          tools = [
            {
              plans: [
                { id: "1", name: "Free", prices: { monthly: 0, yearly: 0 }, description: "Get started for free.", features: [] },
                { id: "2", name: "Starter", prices: { monthly: 15, yearly: 150 }, description: "Everything in Free, plus:", features: [] },
                { id: "3", name: "Growth", tier: "pro", prices: { monthly: 40, yearly: 400 }, description: "Everything in Starter, plus:", features: [] },
                { id: "4", name: "Premium", prices: { monthly: 125, yearly: 1250 }, description: "Everything in Growth, plus:", features: [] }
              ]
            }
          ];
        }
        // Flatten plans from all tools
        const allPlans = tools.flatMap(tool => tool.plans || []);

        // Map backend plans to the PricingTier interface expected by the UI
        const mappedTiers: PricingTier[] = allPlans
          .map((p: any) => ({
            id: p.id,
            name: p.name,
            price: { monthly: p.prices?.monthly || 0, yearly: p.prices?.yearly || 0 },
            description: p.description || "",
            features: typeof p.features === 'string' ? JSON.parse(p.features) : (p.features || []),
            popular: p.tier === 'pro' || p.tier === 'premium',
            cta: (p.prices?.monthly || 0) === 0 ? "Get Started Free" : "Subscribe Now",
          }));

        // Sort: Free first, then by price
        mappedTiers.sort((a, b) => a.price.monthly - b.price.monthly);
        // Only keep unique tiers if multiple tools have similar generic tiers (optional, but sorting and deduplicating by tier/name is a good idea)
        const uniqueTiers = Array.from(new Map(mappedTiers.map(t => [t.name, t])).values());

        // Mock features based EXACTLY on the Supahub design to match the example image perfectly
        uniqueTiers.forEach(tier => {
          const name = tier.name.toLowerCase();
          if (name.includes("free")) {
            tier.features = [
              "5 Voice Transcriptions / mo",
              "3 Test Compilations / mo",
              "50 Email Assistant Drafts / mo"
            ];
            tier.excludedFeatures = [
              "Automated Fee Reminders",
              "Dedicated Uptime SLA",
              "Custom CRM & Sheets Sync",
              "Custom Excel Templates",
              "Priority Email Support",
              "Single Sign-On (SSO)"
            ];
          } else if (name.includes("starter")) {
            tier.features = [
              "100 Voice Transcriptions / mo",
              "50 Test Compilations / mo",
              "1,000 Email Assistant Drafts / mo",
              "Manual Fee Reminders & Invoicing",
              "Custom Excel Templates"
            ];
            tier.excludedFeatures = [
              "Automated Reminders Sync",
              "Dedicated Computing Nodes",
              "Custom CRM & Sheets Sync",
              "Uptime SLA Guarantee",
              "Single Sign-On (SSO)"
            ];
          } else if (name.includes("growth") || name.includes("pro") || name.includes("popular")) {
            tier.features = [
              "Unlimited Voice Transcriptions",
              "500 Test Compilations / mo",
              "Unlimited Email Assistant Drafts",
              "Automated Fee Reminders (500/mo)",
              "Custom Excel Templates",
              "Dedicated Computing Nodes",
              "Priority Email Support"
            ];
            tier.excludedFeatures = [
              "Custom CRM & Sheets Sync",
              "SLA Uptime Guarantee",
              "Single Sign-On (SSO)"
            ];
          } else if (name.includes("premium") || name.includes("enterprise")) {
            tier.features = [
              "Unlimited Voice Transcriptions",
              "Unlimited Test Compilations",
              "Unlimited Email Assistant Drafts",
              "Unlimited Automated Fee Reminders",
              "Custom Excel Templates",
              "Custom CRM & Sheets Sync",
              "Dedicated Computing Nodes",
              "24/7 Phone & Email Support",
              "99.9% Uptime SLA Guarantee",
              "Single Sign-On (SSO)"
            ];
            tier.excludedFeatures = [];
          }
        });

        setPricingTiers(uniqueTiers);
      } catch (err) {
        console.error("Failed to fetch plans", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlans();
  }, []);

  return (
    <div ref={pricingRef} className="pt-24 bg-[#fafafa] min-h-screen pb-32 relative overflow-hidden">
      {/* Aurora Background FX */}
      <AuroraBackground intensity="subtle" />

      {/* Floating Ambient Particles */}
      <FloatingParticles count={20} className="z-0" />

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
        aria-hidden="true"
      />

      {/* Floating Animated Developer Utility Nodes with Parallax */}
      {/* 1. Voice To Excel Node */}
      <motion.div
        className="absolute top-[15%] left-[8%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ 
          y: reduced ? 0 : [0, -8, 0],
          rotate: reduced ? 0 : [-3, 3, -3],
          x: parallaxFast.x * 0.4
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 7.2, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 30 }
        }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2.5 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-150 flex items-center justify-center relative">
            <img src="/WhatsApp Image 2026-06-20 at 10.43.38 PM (1).jpeg" alt="Voice To Excel" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">VOICE_EXCEL</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Voice To Excel
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 2. Test Generator Node */}
      <motion.div
        className="absolute top-[24%] right-[8%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ 
          y: reduced ? 0 : [0, -6, 0],
          x: parallaxFast.x * -0.5
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: -1 },
          x: { type: "spring", stiffness: 50, damping: 30 }
        }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2.5 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-150 flex items-center justify-center relative">
            <img src="/WhatsApp Image 2026-06-20 at 10.43.38 PM.jpeg" alt="Test Generator" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">TEST_GEN</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Test Generator
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3. Email Assistant Node */}
      <motion.div
        className="absolute top-[58%] left-[6%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ 
          y: reduced ? 0 : [0, -7, 0],
          rotate: reduced ? 0 : [0, 4, -4, 0],
          x: parallaxSlow.x * 0.6
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: -2 },
          rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 30 }
        }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2.5 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-150 flex items-center justify-center relative">
            <img src="/WhatsApp Image 2026-06-20 at 10.43.39 PM (1).jpeg" alt="Email Assistant" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">EMAIL_AUTO</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Email Assistant
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 4. Fee Collector Node */}
      <motion.div
        className="absolute top-[75%] right-[6%] z-20 cursor-pointer select-none hidden lg:block"
        animate={{ 
          y: reduced ? 0 : [0, -8, 0],
          rotate: reduced ? 0 : [0, 5, -5, 0],
          x: parallaxSlow.x * -0.6
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: -0.5 },
          rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 30 }
        }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3 p-2.5 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all duration-300">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-150 flex items-center justify-center relative">
            <img src="/WhatsApp Image 2026-06-20 at 10.43.39 PM.jpeg" alt="Fee Collector" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[8px] font-black text-gray-400 font-mono leading-none tracking-wider">FEE_COLL</span>
            <span className="text-[11px] font-bold text-gray-800 mt-1 flex items-center gap-1">
              Fee Collector
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Hero */}
      <section className="pt-4 pb-12 relative overflow-hidden text-center">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: parallaxSlow.x, y: parallaxSlow.y }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-[4.6rem] font-medium tracking-tight text-[#0c1a30] leading-[1.1] mb-8 font-sans">
              Build right features with confidence
            </h1>
            <p className="text-base sm:text-lg md:text-[1.15rem] max-w-[540px] mx-auto mb-10 text-gray-500 leading-relaxed">
              ToolStack offers a straightforward pricing model, with plans starting at $15 per month.
            </p>

            <div className="flex items-center justify-center gap-2 mb-12 relative z-10">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <svg className="w-full h-full text-white fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-650 font-semibold tracking-wide">loved by 300+ customers</span>
            </div>

            {/* Toggle */}
            <div className="inline-flex items-center p-1.5 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full mb-12 shadow-sm relative z-10">
              <button
                onClick={() => setYearly(false)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative z-10",
                  !yearly ? "bg-gray-900 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 relative z-10",
                  yearly ? "bg-gray-900 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                )}
              >
                Yearly
                <span className="px-2 py-0.5 text-[10px] uppercase font-black bg-emerald-600 text-white rounded shrink-0">
                  2 Months Free
                </span>
              </button>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-[1400px] mx-auto items-stretch relative z-10">
            {isLoading ? (
              <div className="col-span-1 md:col-span-2 lg:col-span-4 py-20 text-gray-500 text-center font-medium">
                Loading plans...
              </div>
            ) : (
              pricingTiers.map((tier, i) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="h-full"
                >
                  <PricingCard tier={tier} yearly={yearly} />
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pt-12 pb-6 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-[#0c1a30] leading-[1.1] font-sans">Compare plans &amp; features</h2>
          </div>

          <div className="overflow-hidden bg-white/70 backdrop-blur-md border border-gray-200 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse table-fixed min-w-[800px]">
                <thead className="bg-[#fafafa]/40 border-b border-gray-200/60">
                  <tr>
                    <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-widest w-[32%]">
                      Plans &amp; Features
                    </th>
                    {pricingTiers.map(t => (
                      <th key={t.id} className="py-5 px-6 text-center w-[17%]">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className={cn("font-bold text-sm tracking-tight", t.popular ? "text-blue-600" : "text-gray-900")}>
                            {t.name}
                          </span>
                          {t.popular && (
                            <span className="text-[9px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100/30">
                              Popular
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                    {pricingTiers.length === 0 && (
                      <>
                        <th className="py-5 px-6 text-center font-bold text-sm text-gray-900 w-[17%]">Free</th>
                        <th className="py-5 px-6 text-center font-bold text-sm text-gray-900 w-[17%]">Starter</th>
                        <th className="py-5 px-6 text-center w-[17%]">
                          <div className="flex flex-col items-center gap-1.5">
                            <span className="font-bold text-sm text-blue-600">Growth</span>
                            <span className="text-[9px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full border border-blue-100/30">
                              Popular
                            </span>
                          </div>
                        </th>
                        <th className="py-5 px-6 text-center font-bold text-sm text-gray-900 w-[17%]">Premium</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150">
                  <tr>
                    <td colSpan={5} className="py-3 px-6 font-black text-[9px] uppercase tracking-[0.2em] text-blue-600 bg-slate-50/50">
                      Core Platform Features
                    </td>
                  </tr>
                  {[
                    { name: "Voice to Excel Dictations", values: ["5 / mo", "100 / mo", "Unlimited", "Unlimited"] },
                    { name: "Test Generator Compilation", values: ["3 / mo", "50 / mo", "500 / mo", "Unlimited"] },
                    { name: "Email Assistant Drafts", values: ["50 / mo", "1,000 / mo", "Unlimited", "Unlimited"] },
                    { name: "Fee Collector Reminders", values: ["Manual", "Manual", "Automated (500)", "Unlimited"] }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/5 transition-colors duration-200">
                      <td className="py-4 px-6 text-gray-700 font-semibold text-sm">
                        {row.name}
                      </td>
                      {row.values.map((val, cIdx) => (
                        <td key={cIdx} className="py-4 px-6 text-center">
                          {formatValue(val)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={5} className="py-3 px-6 font-black text-[9px] uppercase tracking-[0.2em] text-blue-600 bg-slate-50/50">
                      Advanced Features &amp; Infrastructure
                    </td>
                  </tr>
                  {[
                    { name: "Custom Excel Templates", values: [false, true, true, true] },
                    { name: "Dedicated Computing Nodes", values: [false, false, true, true] },
                    { name: "CRM & Google Sheets API Sync", values: [false, false, false, true] },
                    { name: "Single Sign-On (SSO)", values: [false, false, false, true] },
                    { name: "99.9% Uptime SLA", values: [false, false, false, true] }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/5 transition-colors border-b border-gray-150 last:border-0 duration-200">
                      <td className="py-4 px-6 text-gray-700 font-semibold text-sm">
                        {row.name}
                      </td>
                      {row.values.map((hasFeature, valIdx) => (
                        <td key={valIdx} className="py-4 px-6 text-center">
                          {renderCheckOrDash(hasFeature)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-12 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-medium tracking-tight text-[#0c1a30] leading-[1.1] font-sans">Pricing Questions</h2>
          </motion.div>
          <FaqSection faqs={pricingFaq} accentColor="#2563EB" />
        </div>
      </section>
    </div>
  );
}
