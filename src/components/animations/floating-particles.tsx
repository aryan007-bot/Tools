"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./motion-config";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function FloatingParticles({ count = 20, className = "" }: FloatingParticlesProps) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 1.5 + Math.random() * 2,
      duration: 15 + Math.random() * 25,
      delay: -(Math.random() * 20),
      opacity: 0.15 + Math.random() * 0.25,
    }));
    setParticles(generated);
  }, [count]);

  if (reduced || !mounted) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gray-400"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `float-gentle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
