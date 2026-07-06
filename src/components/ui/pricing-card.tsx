"use client";

import { useState } from "react";
import { PricingTier } from "@/types";
import { cn } from "@/lib/utils";
import { Check, Flame, Sparkle, Sparkles, Hexagon } from "lucide-react";

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
        "relative rounded-[2rem] p-8 transition-all duration-300 w-full flex flex-col h-full",
        tier.popular
          ? "bg-[#0f1115] text-white shadow-xl"
          : "bg-white border border-gray-200/80 text-gray-900 shadow-sm hover:shadow-md"
      )}
    >
      {tier.popular && (
        <div className="absolute top-6 right-6 px-3 py-1 rounded bg-[#a855f7] text-[10px] font-bold text-white uppercase tracking-wider">
          Popular
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Icon className={cn("w-6 h-6", iconColor)} fill="currentColor" />
        <h3 className={cn("text-2xl font-bold tracking-tight", tier.popular ? "text-white" : "text-gray-900")}>
          {tier.name}
        </h3>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-[3.5rem] font-bold leading-none tracking-tight">${price}</span>
        <span className={cn("text-base font-medium", tier.popular ? "text-gray-400" : "text-gray-500")}>
          / month
        </span>
      </div>
      <div className={cn("text-sm font-medium mt-2", tier.popular ? "text-gray-400" : "text-gray-500")}>
        billed {yearly ? "yearly" : "monthly"}
      </div>

      <div className="my-8 w-full h-[1px] bg-gray-200/20" />

      {/* Description / Features Intro */}
      <p className={cn("text-sm mb-6 font-medium", tier.popular ? "text-gray-300" : "text-gray-600")}>
        {tier.description || (isFree ? "Features Included:" : `Everything in previous plan, plus:`)}
      </p>

      {/* Features */}
      <ul className="space-y-4 mb-10 flex-grow">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm font-medium">
            <div className="mt-0.5 rounded-full bg-emerald-100/10 p-0.5">
              <Check className="w-4 h-4 text-emerald-500" />
            </div>
            <span className={tier.popular ? "text-gray-200" : "text-gray-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={cn(
          "w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 mt-auto",
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
