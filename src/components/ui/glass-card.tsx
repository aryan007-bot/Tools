import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)]",
        hover &&
          "transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-gray-300/60 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
