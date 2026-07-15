"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "./motion-config";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = "", maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Set 3D rotation angles
    setRotateX((y - 0.5) * -maxTilt);
    setRotateY((x - 0.5) * maxTilt);
    
    // Set absolute spotlight mouse position inside element
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleEnter = () => setHovered(true);
  
  const handleLeave = () => {
    setHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      style={{ 
        perspective: 1000,
        transformStyle: "preserve-3d" 
      }}
      className={`relative ${className}`}
    >
      {/* 3D Content wrapper */}
      <div style={{ transform: "translateZ(0px)" }} className="relative z-10">
        {children}
      </div>

      {/* Spotlighting glare overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(37, 99, 235, 0.04), transparent 80%)`,
        }}
      />
      
      {/* Ambient shadow that responds to tilt */}
      <div 
        className="pointer-events-none absolute inset-4 -z-10 bg-black/5 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100"
        style={{
          transform: `translate3d(${rotateY * -1}px, ${rotateX * 1}px, -20px)`,
        }}
      />
    </motion.div>
  );
}
