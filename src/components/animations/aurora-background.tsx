"use client";

import { useReducedMotion } from "./motion-config";

interface AuroraBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

export function AuroraBackground({ className = "", intensity = "medium" }: AuroraBackgroundProps) {
  const reduced = useReducedMotion();

  const opacityMap = { subtle: 0.4, medium: 0.6, strong: 0.8 };
  const op = opacityMap[intensity];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Primary blue blob */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(37, 99, 235, ${0.06 * op}) 0%, transparent 70%)`,
          top: "10%",
          left: "15%",
          animation: reduced ? "none" : "aurora-drift 25s ease-in-out infinite",
        }}
      />
      {/* Purple blob */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(139, 92, 246, ${0.05 * op}) 0%, transparent 70%)`,
          top: "30%",
          right: "10%",
          animation: reduced ? "none" : "aurora-drift 30s ease-in-out infinite reverse",
        }}
      />
      {/* Teal blob */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(94, 234, 212, ${0.04 * op}) 0%, transparent 70%)`,
          bottom: "15%",
          left: "40%",
          animation: reduced ? "none" : "aurora-drift 22s ease-in-out infinite",
          animationDelay: "-8s",
        }}
      />
    </div>
  );
}
