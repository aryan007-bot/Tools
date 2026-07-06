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

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const tools = await apiClient.get<any[]>("/pricing/tools");
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
        // For now, we'll just show the unique ones by name if there are duplicates across tools
        const uniqueTiers = Array.from(new Map(mappedTiers.map(t => [t.name, t])).values());
        
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
    <div className="pt-28 bg-[#f9fafb] min-h-screen pb-32">
      {/* Hero */}
      <section className="pt-16 pb-12 relative overflow-hidden text-center">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block text-[11px] font-bold text-indigo-600 uppercase tracking-widest mb-4">
              Supahub Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Build right features,
              <br />
              with confidence!
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 font-medium">
              Supahub offers a straightforward pricing model, with plans starting at $15 per month.
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
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Compare plans & features</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="py-6 px-4 font-semibold text-gray-900 w-1/3 text-lg">Plans</th>
                  {pricingTiers.map(t => (
                    <th key={t.id} className="py-6 px-4 text-center font-bold text-lg text-gray-900">
                      {t.name}
                    </th>
                  ))}
                  {pricingTiers.length === 0 && (
                    <>
                      <th className="py-6 px-4 text-center font-bold text-lg text-gray-900">Free</th>
                      <th className="py-6 px-4 text-center font-bold text-lg text-gray-900">Starter</th>
                      <th className="py-6 px-4 text-center font-bold text-lg text-gray-900">Growth</th>
                      <th className="py-6 px-4 text-center font-bold text-lg text-gray-900">Premium</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td colSpan={5} className="py-6 px-4 font-bold text-gray-900 bg-gray-50/50">Features</td>
                </tr>
                {["Feedback Posts", "End Users", "Boards", "Admins"].map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 text-gray-600 font-medium flex items-center gap-1.5">
                      {feature}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-900 font-medium">Unlimited</td>
                    <td className="py-4 px-4 text-center text-gray-900 font-medium">Unlimited</td>
                    <td className="py-4 px-4 text-center text-gray-900 font-medium">{idx === 2 ? '10' : idx === 3 ? '3' : 'Unlimited'}</td>
                    <td className="py-4 px-4 text-center text-gray-900 font-medium">Unlimited</td>
                  </tr>
                ))}
                {["Brand Customization", "Email Customization", "Single Sign-On (SSO)", "Custom Domain"].map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 text-gray-600 font-medium flex items-center gap-1.5">
                      {feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {idx === 0 ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {idx < 2 ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Pricing Questions</h2>
          </motion.div>
          <FaqSection faqs={pricingFaq} accentColor="#a855f7" />
        </div>
      </section>
    </div>
  );
}
