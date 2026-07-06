"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  range?: number;
  rotate?: number;
}

export function FloatingElement({
  children,
  className = "",
  speed = 4,
  range = 15,
  rotate = 3,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-range, range, -range],
        rotate: [-rotate, rotate, -rotate],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
