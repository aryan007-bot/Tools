'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  glowColor?: string;
  className?: string;
}

export function AnimatedIcon({
  icon: Icon,
  size = 24,
  color = 'currentColor',
  glowColor = 'rgba(99, 102, 241, 0.5)',
  className,
}: AnimatedIconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className ?? ''}`}
      whileHover={{
        scale: 1.2,
        filter: `drop-shadow(0 0 8px ${glowColor})`,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
}
