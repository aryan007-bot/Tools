"use client";

import { useState } from "react";
import { PricingTier } from "@/types";
import { cn } from "@/lib/utils";
import { Check, Flame, Sparkle, Sparkles, Hexagon, Ghost } from "lucide-react";

interface PricingCardProps {
  tier: PricingTier;
  yearly?: boolean;
}

export function PricingCard({ tier, yearly = false }: PricingCardProps) {
  const price = yearly ? tier.price.yearly : tier.price.monthly;
  const isFree = price === 0;

  // Determine Icon based on plan name
  const nameLower = tier.name.toLowerCase();
  let Icon = Sparkle;
  if (nameLower.includes("starter")) Icon = Sparkles;
  if (nameLower.includes("growth") || nameLower.includes("pro")) Icon = Flame;
  if (nameLower.includes("premium") || nameLower.includes("enterprise")) Icon = Hexagon;

  const iconColor = tier.popular ? "text-[#facc15]" : "text-[#a855f7]";

  return (
    <div
      className={cn(
        "relative rounded-[2rem] p-6 lg:p-8 transition-all duration-300 w-full flex flex-col h-full",
        tier.popular
          ? "bg-[#0f1115] text-white shadow-xl"
          : "bg-white border border-gray-200/80 text-gray-900 shadow-sm hover:shadow-md"
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <Icon className={cn("w-6 h-6 flex-shrink-0", iconColor)} fill="currentColor" />
        <h3 className={cn("text-2xl font-bold tracking-tight", tier.popular ? "text-white" : "text-gray-900")}>
          {tier.name}
        </h3>
        {tier.popular && (
          <div className="px-2.5 py-0.5 rounded-md bg-[#a855f7] text-[10px] font-bold text-white uppercase tracking-wider ml-auto lg:ml-0">
            Popular
          </div>
        )}
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1 flex-wrap">
        <span className="text-5xl lg:text-[3.25rem] font-bold leading-none tracking-tight">${price}</span>
        <span className={cn("text-sm lg:text-base font-medium", tier.popular ? "text-gray-400" : "text-gray-500")}>
          / month
        </span>
      </div>
      <div className={cn("text-sm font-medium mt-2", tier.popular ? "text-gray-400" : "text-gray-500")}>
        billed {yearly ? "yearly" : "monthly"}
      </div>

      <div className="my-6 lg:my-8 w-full h-[1px] bg-gray-200/20" />

      {/* Description / Features Intro */}
      <p className={cn("text-sm mb-6 font-medium", tier.popular ? "text-gray-300" : "text-gray-600")}>
        {tier.description || (isFree ? "Features Included:" : `Everything in previous plan, plus:`)}
      </p>

      {/* Features */}
      <ul className="space-y-3.5 mb-10 flex-grow">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm font-medium leading-tight">
            <div className="mt-0.5 rounded-full bg-emerald-500/10 p-0.5 flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <span className={tier.popular ? "text-gray-200" : "text-gray-700"}>
              {feature}
            </span>
          </li>
        ))}
        {tier.excludedFeatures?.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm font-medium opacity-50 leading-tight">
            <div className="mt-0.5 p-0.5 flex-shrink-0">
              <Ghost className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <span className={tier.popular ? "text-gray-400" : "text-gray-500"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={cn(
          "w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 mt-auto",
          tier.popular
            ? "text-gray-900 bg-white hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            : "text-white bg-gray-900 hover:bg-gray-800 shadow hover:shadow-lg"
        )}
      >
        {tier.cta}
      </button>
    </div>
  );
}
