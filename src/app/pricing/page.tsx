"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pricingFaq } from "@/lib/constants/faq";
import { PricingCard } from "@/components/ui/pricing-card";
import { FaqSection } from "@/components/ui/faq-section";
import { Check } from "lucide-react";
import { apiClient } from "@/lib/api-client";
import { PricingTier } from "@/types";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
            tier.features = ["1 Feedback Board", "1 Admin", "Unlimited End Users"];
            tier.excludedFeatures = [
              "Changelog & Feedback Widgets",
              "Email Customization",
              "No Integrations",
              "Value/Effort Prioritization Module",
              "Custom Domain",
              "Post Moderation",
              "Single Sign-On (SSO)",
              "User Segmentation",
              "API & Webhooks"
            ];
          } else if (name.includes("starter")) {
            tier.features = [
              "2 Feedback Boards",
              "2 Admins",
              "Unlimited End Users",
              "Changelog & Feedback Widgets",
              "Email Customization",
              "1 Integration"
            ];
            tier.excludedFeatures = [
              "Value/Effort Prioritization Module",
              "Custom Domain",
              "Post Moderation",
              "Single Sign-On (SSO)",
              "User Segmentation",
              "API & Webhooks"
            ];
          } else if (name.includes("growth") || name.includes("pro") || name.includes("popular")) {
            tier.features = [
              "10 Feedback Boards",
              "3 Admins, 1 CSM",
              "Unlimited End Users",
              "Changelog & Feedback Widgets",
              "Email Customization",
              "All Integrations",
              "Value/Effort Prioritization Module",
              "Custom Domain",
              "Post Moderation",
              "Single Sign-On (SSO)"
            ];
            tier.excludedFeatures = [
              "User Segmentation",
              "API & Webhooks"
            ];
          } else if (name.includes("premium") || name.includes("enterprise")) {
            tier.features = [
              "Unlimited Feedback Boards",
              "10 Admins, 5 CSM",
              "Unlimited End Users",
              "Changelog & Feedback Widgets",
              "Email Customization",
              "All Integrations",
              "Value/Effort Prioritization Module",
              "Custom Domain",
              "Post Moderation",
              "Single Sign-On (SSO)",
              "User Segmentation",
              "API & Webhooks"
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
    <div className="pt-20 bg-[#FAF9F5] min-h-screen pb-32 relative overflow-hidden">
      {/* Background blurry blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-200/10 to-cyan-200/10 rounded-full blur-3xl" />
      </div>
      {/* Hero */}
      <section className="pt-4 pb-12 relative overflow-hidden text-center">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8B5CF6]">
                ToolStack Pricing
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 leading-[1.5] font-serif">
              Build right{" "}
              <span className="relative inline-block mx-1">
                <svg className="absolute inset-0 w-full h-full text-[#B4A5FF] scale-110" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                   <path d="M5,5 L95,2 L98,95 L2,98 Z" opacity="0.8" />
                </svg>
                <span className="relative z-10 px-4 text-gray-900 font-serif">features</span>
              </span>
              <br className="hidden sm:block" />
              with{" "}
              <span className="inline-block bg-[#5EEAD4] px-4 rounded-md mx-1 transform -translate-y-1 text-gray-900 font-serif">
                confidence!
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 font-normal">
              ToolStack offers a straightforward pricing model, with plans starting at $15 per month.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 mb-16">
              <div className="flex items-center gap-1 text-[#facc15]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">loved by 300+ customers</span>
            </div>

            {/* Toggle */}
            <div className="inline-flex items-center p-1 bg-white border border-gray-200 rounded-full mb-12 shadow-sm">
              <button
                onClick={() => setYearly(false)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all",
                  !yearly ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2",
                  yearly ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
                )}
              >
                Yearly
                <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-emerald-600 text-white rounded shrink-0">
                  2 Months Free
                </span>
              </button>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-[1400px] mx-auto items-stretch">
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
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 font-serif">Compare plans &amp; features</h2>
          </div>

          <div className="overflow-hidden bg-white border border-gray-200/50 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse table-fixed min-w-[800px]">
                <thead className="bg-[#FAF9F5]/40 border-b border-gray-200/60">
                  <tr>
                    <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-widest w-[32%]">
                      Plans &amp; Features
                    </th>
                    {pricingTiers.map(t => (
                      <th key={t.id} className="py-5 px-6 text-center w-[17%]">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className={cn("font-bold text-sm tracking-tight", t.popular ? "text-[#8B5CF6]" : "text-gray-900")}>
                            {t.name}
                          </span>
                          {t.popular && (
                            <span className="text-[9px] font-black uppercase tracking-wider bg-purple-50 text-[#8B5CF6] px-2 py-0.5 rounded-full border border-purple-100/30">
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
                            <span className="font-bold text-sm text-[#8B5CF6]">Growth</span>
                            <span className="text-[9px] font-black uppercase tracking-wider bg-purple-50 text-[#8B5CF6] px-2 py-0.5 rounded-full border border-purple-100/30">
                              Popular
                            </span>
                          </div>
                        </th>
                        <th className="py-5 px-6 text-center font-bold text-sm text-gray-900 w-[17%]">Premium</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100/80">
                  <tr>
                    <td colSpan={5} className="py-3 px-6 font-black text-[9px] uppercase tracking-[0.2em] text-[#8B5CF6] bg-slate-50/50">
                      Core Platform Features
                    </td>
                  </tr>
                  {[
                    { name: "Feedback Posts", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
                    { name: "End Users", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
                    { name: "Boards", values: ["1", "2", "10", "Unlimited"] },
                    { name: "Admins", values: ["1", "2", "3", "10"] }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-purple-50/5 transition-colors">
                      <td className="py-4 px-6 text-gray-700 font-medium text-sm">
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
                    <td colSpan={5} className="py-3 px-6 font-black text-[9px] uppercase tracking-[0.2em] text-[#8B5CF6] bg-slate-50/50">
                      Advanced Administration
                    </td>
                  </tr>
                  {["Brand Customization", "Email Customization", "Single Sign-On (SSO)", "Custom Domain"].map((feature, idx) => (
                    <tr key={idx} className="hover:bg-purple-50/5 transition-colors border-b border-gray-100 last:border-0">
                      <td className="py-4 px-6 text-gray-700 font-medium text-sm">
                        {feature}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCheckOrDash(idx === 0)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCheckOrDash(idx < 2)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCheckOrDash(true)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCheckOrDash(true)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-12 pb-16 bg-[#FAF9F5] relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 font-serif">Pricing Questions</h2>
          </motion.div>
          <FaqSection faqs={pricingFaq} accentColor="#8B5CF6" />
        </div>
      </section>
    </div>
  );
}
