import { cn } from "@/lib/utils";

interface GlowBadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export function GlowBadge({
  children,
  color = "#10b981",
  className = "",
}: GlowBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        className
      )}
      style={{
        backgroundColor: `${color}15`,
        color: color,
        boxShadow: `0 0 20px ${color}20`,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {children}
    </span>
  );
}
