"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pricingFaq } from "@/lib/constants/faq";
import { PricingCard } from "@/components/ui/pricing-card";
import { FaqSection } from "@/components/ui/faq-section";
import { Check } from "lucide-react";
import { apiClient } from "@/lib/api-client";
import { PricingTier } from "@/types";

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
    <div className="pt-28">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-700 mb-8">
              Pricing
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold font-display tracking-tight mb-6">
              Simple pricing.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
                Powerful tools.
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Start free with one tool. Upgrade to unlock all five. No hidden fees,
              no long-term contracts.
            </p>

            <div className="inline-flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-1.5 mb-16">
              <button
                onClick={() => setYearly(false)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${!yearly ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${yearly ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"}`}
              >
                Yearly
                <span className="ml-1.5 text-xs text-emerald-500 font-semibold">Save 20%</span>
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {isLoading ? (
              <div className="col-span-3 py-20 text-gray-500 text-center">Loading plans...</div>
            ) : (
              pricingTiers.map((tier, i) => (
                <motion.div key={tier.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}>
                  <PricingCard tier={tier} yearly={yearly} accentColor="#3b82f6" />
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display tracking-tight">All plans include</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "SOC 2 compliant infrastructure",
              "256-bit SSL encryption",
              "99.9% uptime guarantee",
              "Regular feature updates",
              "Mobile-responsive design",
              "Community support",
              "Data export anytime",
              "Cancel anytime",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-3">
                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display tracking-tight">Pricing Questions</h2>
          </motion.div>
          <FaqSection faqs={pricingFaq} accentColor="#3b82f6" />
        </div>
      </section>
    </div>
  );
}
