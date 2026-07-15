"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { transitions, useReducedMotion } from "./motion-config";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  blur?: boolean;
  scale?: boolean;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  blur = false,
  scale = false,
}: FadeInProps) {
  const reduced = useReducedMotion();

  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: directions[direction].y,
        x: directions[direction].x,
        filter: blur ? "blur(8px)" : "blur(0px)",
        scale: scale ? 0.95 : 1,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: transitions.smooth.ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
