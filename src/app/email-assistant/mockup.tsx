"use client";

import { motion } from "framer-motion";

export function EmailAssistantMockup() {
  return (
    <div className="relative rounded-2xl border border-violet-100 bg-white shadow-[0_20px_60px_rgba(139,92,246,0.1)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-gray-500 ml-2 font-medium">Email Assistant</span>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400 w-12">To:</span>
            <span className="text-gray-700">sarah.chen@techcorp.com</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400 w-12">Subject:</span>
            <span className="text-gray-700">Q3 Partnership Proposal — Follow Up</span>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-violet-50/50 border border-violet-100 space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-semibold text-violet-600 bg-violet-100 px-2 py-0.5 rounded">AI Draft</span>
            <span className="text-[10px] text-gray-500">Professional tone</span>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">
            Hi Sarah,<br /><br />
            Thank you for the productive discussion last Tuesday regarding our Q3 partnership initiative. I wanted to follow up on the key points we covered...
          </p>
          <motion.div className="flex gap-2 mt-3">
            <span className="text-[10px] px-2 py-1 rounded-md bg-violet-100 text-violet-600 font-medium">More Formal</span>
            <span className="text-[10px] px-2 py-1 rounded-md bg-gray-100 text-gray-600 font-medium">More Casual</span>
            <span className="text-[10px] px-2 py-1 rounded-md bg-gray-100 text-gray-600 font-medium">Shorter</span>
          </motion.div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-violet-600 text-white text-xs font-semibold rounded-lg">Send Now</button>
          <button className="px-4 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg">Schedule</button>
          <button className="px-4 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg">Save Draft</button>
        </div>
      </div>
    </div>
  );
}
