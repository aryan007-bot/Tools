"use client";

import { motion } from "framer-motion";

export function VideoEditorMockup() {
  return (
    <div className="relative rounded-2xl border border-red-100 bg-gray-950 shadow-[0_20px_60px_rgba(239,68,68,0.1)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-gray-500 ml-2 font-medium">Video Editor</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
            <div className="w-0 h-0 border-l-[14px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3">
            <div className="h-1 bg-gray-700 rounded-full">
              <motion.div className="h-full bg-red-500 rounded-full" initial={{ width: "0%" }} animate={{ width: "65%" }} transition={{ duration: 3, repeat: Infinity }} />
            </div>
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] text-gray-400 font-mono">02:34 / 03:52</div>
        </div>
        <div className="space-y-1.5">
          {[
            { color: "bg-blue-500", width: "75%", label: "Video" },
            { color: "bg-emerald-500", width: "60%", label: "Audio" },
            { color: "bg-amber-500", width: "45%", label: "Subtitles" },
          ].map((track) => (
            <div key={track.label} className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500 w-12">{track.label}</span>
              <div className="flex-1 h-4 bg-gray-800 rounded overflow-hidden">
                <div className={`h-full ${track.color} rounded opacity-70`} style={{ width: track.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
