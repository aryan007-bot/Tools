"use client";

import { PricingTier } from "@/types";
import { cn } from "@/lib/utils";
import { Check, Ghost } from "lucide-react";

interface PricingCardProps {
  tier: PricingTier;
  yearly?: boolean;
}

export function PricingCard({ tier, yearly = false }: PricingCardProps) {
  const price = yearly ? tier.price.yearly : tier.price.monthly;
  const isFree = price === 0;

  return (
    <div className="w-full h-[460px] [perspective:1000px] group cursor-pointer">
      <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
         
         {/* Front Side */}
         <div className={cn(
           "absolute inset-0 [backface-visibility:hidden] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between border transition-all duration-300 bg-white",
           tier.popular
             ? "bg-[#0f1115] text-white border-transparent shadow-xl"
             : "bg-white border-gray-200/80 text-gray-900 shadow-sm"
         )}>
           <div>
             {/* Header */}
             <div className="flex items-center gap-3 mb-6 flex-wrap">
               <h3 className={cn("text-2xl font-bold tracking-tight", tier.popular ? "text-white" : "text-gray-900")}>
                 {tier.name}
               </h3>
               {tier.popular && (
                 <div className="px-2.5 py-0.5 rounded-md bg-[#a855f7] text-[10px] font-bold text-white uppercase tracking-wider">
                   Popular
                 </div>
               )}
             </div>

             {/* Price */}
             <div className="flex items-baseline gap-1 flex-wrap">
               <span className="text-5xl lg:text-[3.25rem] font-bold leading-none tracking-tight">${price}</span>
               <span className={cn("text-sm font-medium", tier.popular ? "text-gray-400" : "text-gray-500")}>
                 / month
               </span>
             </div>
             <div className={cn("text-sm font-medium mt-2", tier.popular ? "text-gray-400" : "text-gray-500")}>
               billed {yearly ? "yearly" : "monthly"}
             </div>

             <div className="my-6 lg:my-8 w-full h-[1px] bg-gray-200/20" />

             {/* Description */}
             <p className={cn("text-sm mb-6 font-medium leading-relaxed", tier.popular ? "text-gray-300" : "text-gray-600")}>
               {tier.description || (isFree ? "Features Included:" : `Everything in previous plan, plus:`)}
             </p>
           </div>

           {/* Pulse hover prompt & CTA */}
           <div className="flex flex-col gap-5 mt-auto">
             <div className="flex items-center justify-center gap-2 select-none">
               <span className={cn("text-[9px] font-black uppercase tracking-[0.2em] animate-pulse", tier.popular ? "text-purple-400" : "text-[#8B5CF6]")}>
                 Hover to View Features
               </span>
               <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", tier.popular ? "bg-purple-400" : "bg-[#8B5CF6]")} />
             </div>

             <button
               className={cn(
                 "w-full py-3 rounded-xl font-bold text-sm transition-all duration-300",
                 tier.popular
                   ? "text-gray-900 bg-white hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                   : "text-white bg-gray-900 hover:bg-gray-800 shadow hover:shadow-lg"
               )}
             >
               {tier.cta}
             </button>
           </div>
         </div>

         {/* Back Side */}
         <div className={cn(
           "absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between border shadow-2xl",
           tier.popular
             ? "bg-gradient-to-br from-[#0F1115] via-[#1D1225] to-[#0F1115] text-white border-transparent"
             : "bg-gradient-to-br from-white via-purple-50/10 to-indigo-50/10 text-gray-900 border-purple-100"
         )}>
           <div className="flex flex-col h-full justify-between">
             <div>
               {/* Back Header */}
               <div className="flex justify-between items-center border-b border-gray-200/10 pb-3.5 mb-4">
                 <span className={cn("text-xs font-bold uppercase tracking-[0.1em]", tier.popular ? "text-purple-300" : "text-[#8B5CF6]")}>
                   {tier.name} Features
                 </span>
                 <span className={cn("text-sm font-black", tier.popular ? "text-white" : "text-gray-900")}>${price}/mo</span>
               </div>

               {/* Features list */}
               <ul className="space-y-3.5 overflow-y-auto max-h-[260px] pr-1 scrollbar-thin">
                 {tier.features.map((feature) => (
                   <li key={feature} className="flex items-start gap-2.5 text-xs font-medium leading-tight">
                     <div className="mt-0.5 rounded-full bg-emerald-500/15 p-0.5 flex-shrink-0">
                       <Check className="w-3.5 h-3.5 text-emerald-500" />
                     </div>
                     <span className={tier.popular ? "text-gray-250" : "text-slate-700"}>
                       {feature}
                     </span>
                   </li>
                 ))}
                 {tier.excludedFeatures?.map((feature) => (
                   <li key={feature} className="flex items-start gap-2.5 text-xs font-medium opacity-40 leading-tight">
                     <div className="mt-0.5 p-0.5 flex-shrink-0">
                       <Ghost className="w-3.5 h-3.5 text-gray-400" />
                     </div>
                     <span className={tier.popular ? "text-gray-400" : "text-slate-500"}>
                       {feature}
                     </span>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Back CTA */}
             <button
               className={cn(
                 "w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 mt-4",
                 tier.popular
                   ? "text-gray-900 bg-white hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                   : "text-white bg-gray-900 hover:bg-gray-800 shadow hover:shadow-lg"
               )}
             >
               {tier.cta}
             </button>
           </div>
         </div>

      </div>
    </div>
  );
}
