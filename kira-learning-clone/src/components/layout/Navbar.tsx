"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-105 transition-transform">
            K
          </div>
          <span className="font-heading font-semibold text-xl tracking-tight">
            Kira
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#" className="hover:text-primary transition-colors text-muted-foreground flex items-center">
            Resources <span className="ml-1 text-xs text-blue-500">▼</span>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors text-muted-foreground flex items-center">
            Company <span className="ml-1 text-xs text-blue-500">▼</span>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors text-muted-foreground">Privacy</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-primary transition-colors text-muted-foreground">Login</Link>
          <Link href="#" className="hover:text-primary transition-colors text-muted-foreground">Teacher Sign up</Link>
          <Button className="rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 px-6 font-semibold shadow-none">
            See Kira 2.0
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  );
}
