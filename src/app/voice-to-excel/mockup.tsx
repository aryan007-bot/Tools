"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";

export function VoiceToExcelMockup() {
  return (
    <div className="relative rounded-2xl border border-emerald-100 bg-white shadow-[0_20px_60px_rgba(16,185,129,0.1)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-gray-500 ml-2 font-medium">Voice To Excel</span>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center animate-pulse">
            <Mic className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1">
            <div className="flex gap-1 items-end h-8">
              {[3, 5, 8, 4, 7, 9, 6, 3, 5, 8, 4, 6, 7, 5, 3, 8, 6, 4, 7, 5].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-emerald-400 rounded-full"
                  animate={{ height: [`${h * 3}px`, `${h * 1.5}px`, `${h * 3}px`] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                />
              ))}
            </div>
          </div>
          <span className="text-xs text-emerald-600 font-medium">Recording...</span>
        </div>
        <div className="p-3 rounded-xl bg-gray-50 text-sm text-gray-600 leading-relaxed">
          &ldquo;Revenue for Q1 was 45,000 from client Alpha Corp, 32,000 from Beta Inc, and 28,500 from Gamma Ltd...&rdquo;
        </div>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-emerald-50 text-emerald-800">
                <th className="px-3 py-2 text-left font-semibold">Client</th>
                <th className="px-3 py-2 text-left font-semibold">Q1 Revenue</th>
                <th className="px-3 py-2 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2 text-gray-700">Alpha Corp</td>
                <td className="px-3 py-2 text-gray-700">$45,000</td>
                <td className="px-3 py-2"><span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Verified</span></td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2 text-gray-700">Beta Inc</td>
                <td className="px-3 py-2 text-gray-700">$32,000</td>
                <td className="px-3 py-2"><span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Verified</span></td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2 text-gray-700">Gamma Ltd</td>
                <td className="px-3 py-2 text-gray-700">$28,500</td>
                <td className="px-3 py-2"><span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
