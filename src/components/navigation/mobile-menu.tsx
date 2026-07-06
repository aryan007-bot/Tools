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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
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
          <div className="mb-6 p-4 rounded-xl bg-gray-50 border border-gray-200">
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
          </div>
        )}

        <div className="space-y-1 mb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Navigation
          </p>
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="space-y-1 mb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Tools
          </p>
          {toolNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={isAuthenticated ? "/dashboard" : "/login"}
          onClick={onClose}
          className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors"
        >
          {isAuthenticated ? "Dashboard" : "Get Started"}
        </Link>
      </motion.div>
    </motion.div>
  );
}