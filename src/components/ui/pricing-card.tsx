"use client";

import { useState } from "react";
import { PricingTier } from "@/types";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingCardProps {
  tier: PricingTier;
  yearly?: boolean;
  accentColor?: string;
}

export function PricingCard({ tier, yearly = false, accentColor = "#10b981" }: PricingCardProps) {
  const price = yearly ? tier.price.yearly : tier.price.monthly;

  return (
    <div
      className={cn(
        "relative rounded-2xl p-8 transition-all duration-300",
        tier.popular
          ? "bg-gray-900 text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] scale-105 border-2"
          : "bg-white border border-gray-200 text-gray-900 hover:shadow-lg"
      )}
      style={tier.popular ? { borderColor: accentColor } : undefined}
    >
      {tier.popular && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: accentColor }}
        >
          Most Popular
        </div>
      )}
      <h3 className={cn("text-xl font-bold font-display mb-1", tier.popular ? "text-white" : "text-gray-900")}>
        {tier.name}
      </h3>
      <p className={cn("text-sm mb-6", tier.popular ? "text-gray-400" : "text-gray-500")}>
        {tier.description}
      </p>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold font-display">${price}</span>
        <span className={cn("text-sm", tier.popular ? "text-gray-400" : "text-gray-500")}>
          /mo
        </span>
      </div>
      <button
        className={cn(
          "w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-8",
          tier.popular
            ? "text-gray-900 bg-white hover:bg-gray-100"
            : "text-white bg-gray-900 hover:bg-gray-800"
        )}
      >
        {tier.cta}
      </button>
      <ul className="space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              style={{ color: tier.popular ? accentColor : "#10b981" }}
            />
            <span className={tier.popular ? "text-gray-300" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
