"use client";

import { useEffect, useState, useCallback } from "react";

// ═══════════════════════════════════════════════════
// TRANSITION PRESETS
// ═══════════════════════════════════════════════════

export const transitions = {
  /** Smooth spring — buttons, cards, interactive elements */
  spring: { type: "spring" as const, stiffness: 200, damping: 24, mass: 0.8 },
  /** Gentle spring — larger elements, page-level motion */
  springGentle: { type: "spring" as const, stiffness: 120, damping: 20, mass: 1 },
  /** Expo ease-out — fast start, slow stop. Headlines, reveals */
  easeOutExpo: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  /** Smooth ease — general purpose, elegant feel */
  smooth: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  /** Quick — micro-interactions, tooltips */
  quick: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  /** Slow — background elements, ambient motion */
  slow: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
} as const;

// ═══════════════════════════════════════════════════
// VARIANT FACTORIES
// ═══════════════════════════════════════════════════

/** Fade + slide up with optional blur */
export const fadeSlideUp = (delay = 0, blur = false) => ({
  hidden: {
    opacity: 0,
    y: 24,
    filter: blur ? "blur(8px)" : "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...transitions.easeOutExpo, delay },
  },
});

/** Fade + blur reveal (no slide) */
export const fadeBlurIn = (delay = 0) => ({
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { ...transitions.easeOutExpo, delay },
  },
});

/** Scale reveal — cards, panels */
export const scaleReveal = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { ...transitions.springGentle, delay },
  },
});

/** Stagger container — wrap children that use child variants */
export const staggerContainer = (staggerDelay = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/** Child variant for stagger containers */
export const staggerChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transitions.smooth,
  },
};

/** Word-by-word stagger reveal for headings */
export const wordRevealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const wordRevealChild = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ═══════════════════════════════════════════════════
// HOOKS
// ═══════════════════════════════════════════════════

/** Respects prefers-reduced-motion */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/** Tracks mouse position relative to viewport */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return pos;
}

/** Returns normalized mouse position (-1 to 1) relative to an element */
export function useRelativeMousePosition(ref: React.RefObject<HTMLElement | null>) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setPos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  }, [ref]);

  const handleLeave = useCallback(() => {
    setPos({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMove, { passive: true });
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, handleMove, handleLeave]);

  return pos;
}

/** Animated counter — counts from 0 to target value */
export function useCountUp(target: number, duration = 2000, startOnView = true) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);

  const start = useCallback(() => {
    setHasStarted(true);
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out-quart for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return { value, start: () => { if (!hasStarted) start(); }, hasStarted };
}
