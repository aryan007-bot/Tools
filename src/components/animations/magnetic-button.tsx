"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "./motion-config";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.25,
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current || reduced) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: reduced ? 1 : 0.96 }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.8 }}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block relative z-10">
        {content}
      </a>
    );
  }

  return content;
}
