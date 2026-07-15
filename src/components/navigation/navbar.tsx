"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, LifeBuoy, LogOut, LayoutDashboard } from "lucide-react";
import { mainNav, toolNav } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";
import { useAuth } from "@/hooks/use-auth";
import { MagneticButton } from "../animations/magnetic-button";
import { useReducedMotion, transitions } from "../animations/motion-config";

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl transition-all duration-500 px-6",
              scrolled
                ? "bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-gray-200/50 py-3"
                : "bg-transparent py-3"
            )}
          >
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <motion.div 
                className="w-10 h-10 flex items-center justify-center"
                animate={reduced ? {} : { scale: [1, 1.025, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.08 }}
              >
                <img src="/Untitled_design-removebg-preview.png" alt="ToolStack Logo" className="w-full h-full object-contain" />
              </motion.div>
              <span className="font-display font-bold text-xl tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                ToolStack
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg",
                      isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/60"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLink"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated && user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100/80 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
                      {(user.full_name || user.email || "U").charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-700 max-w-[120px] truncate">
                      {user.full_name || user.email}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 overflow-hidden"
                      >
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-900 truncate">{user.full_name || "User"}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>

                        <Link
                          href="/dashboard"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <LayoutDashboard className="w-4 h-4 text-gray-500" />
                          Dashboard
                        </Link>

                        <Link
                          href="/support"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <LifeBuoy className="w-4 h-4 text-gray-500" />
                          Support
                        </Link>

                        <button
                          onClick={() => { setDropdownOpen(false); logout(); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <MagneticButton strength={0.2} href="/login">
                  <motion.div
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-black transition-colors duration-300 shadow-md shadow-gray-900/10 cursor-pointer text-center"
                    whileTap={{ scale: 0.97 }}
                  >
                    Get Started
                  </motion.div>
                </MagneticButton>
              )}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            onClose={() => setMobileOpen(false)}
            mainNav={mainNav}
            toolNav={toolNav}
          />
        )}
      </AnimatePresence>
    </>
  );
}