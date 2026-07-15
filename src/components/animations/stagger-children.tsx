"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { transitions, useReducedMotion } from "./motion-config";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  blur?: boolean;
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.08,
  duration = 0.5,
  blur = true,
}: StaggerChildrenProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: blur ? "blur(6px)" : "blur(0px)",
      rotate: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      rotate: 0,
      transition: { duration, ease: transitions.smooth.ease },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
