import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  color = "#10b981",
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-xl p-8 transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-gray-300/60 hover:-translate-y-2",
        className
      )}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${color}08, transparent 40%)`,
        }}
      />
    </div>
  );
}
