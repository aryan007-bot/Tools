"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, Zap, LayoutDashboard, LifeBuoy, LogOut } from "lucide-react";
import { NavItem } from "@/types";
import { useAuth } from "@/hooks/use-auth";

interface MobileMenuProps {
  onClose: () => void;
  mainNav: NavItem[];
  toolNav: NavItem[];
}

export function MobileMenu({ onClose, mainNav, toolNav }: MobileMenuProps) {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg">ToolStack</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isAuthenticated && user && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 p-4 rounded-xl bg-gray-50 border border-gray-200"
          >
            <p className="text-sm font-semibold text-gray-900 truncate">{user.full_name || "User"}</p>
            <p className="text-xs text-gray-500 truncate mb-3">{user.email}</p>
            <div className="space-y-1">
              <Link href="/dashboard" onClick={onClose} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white rounded-lg transition-colors">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <Link href="/support" onClick={onClose} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white rounded-lg transition-colors">
                <LifeBuoy className="w-4 h-4" /> Support
              </Link>
              <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-white rounded-lg transition-colors w-full text-left">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </motion.div>
        )}

        <motion.div 
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="space-y-1 mb-8"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Navigation
          </p>
          {mainNav.map((item) => (
            <motion.div key={item.label} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="space-y-1 mb-8"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Tools
          </p>
          {toolNav.map((item) => (
            <motion.div key={item.label} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href={isAuthenticated ? "/dashboard" : "/login"}
            onClick={onClose}
            className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors"
          >
            {isAuthenticated ? "Dashboard" : "Get Started"}
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}