"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/pricing-card";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { PricingTier } from "@/types";

export function PricingPreview() {
  const [yearly, setYearly] = useState(false);
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const tools = await apiClient.get<any[]>("/api/v1/pricing/tools");
        // Flatten plans from all tools
        const allPlans = tools.flatMap(tool => tool.plans || []);
        
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
        
        mappedTiers.sort((a, b) => a.price.monthly - b.price.monthly);
        setPricingTiers(mappedTiers.slice(0, 3)); // Only show top 3 on homepage
      } catch (err) {
        console.error("Failed to fetch plans", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlans();
  }, []);

  return (
    <section className="py-32 relative bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-5">
            Simple,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start free, upgrade when you need more. No hidden fees.
          </p>

          <div className="inline-flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                !yearly ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                yearly ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-emerald-500 font-semibold">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {isLoading ? (
            <div className="col-span-3 py-20 text-gray-500 text-center">Loading plans...</div>
          ) : (
            pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <PricingCard tier={tier} yearly={yearly} />
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 underline underline-offset-4 transition-colors"
          >
            View full pricing details
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
