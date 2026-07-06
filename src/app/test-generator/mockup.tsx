"use client";

export function TestGeneratorMockup() {
  return (
    <div className="relative rounded-2xl border border-orange-100 bg-white shadow-[0_20px_60px_rgba(249,115,22,0.1)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-gray-500 ml-2 font-medium">Test Generator</span>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-xs font-semibold">Mathematics</span>
          <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-600 text-xs font-semibold">Medium Difficulty</span>
          <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs font-semibold">10 Questions</span>
        </div>
        {[
          { q: "What is the derivative of f(x) = 3x² + 2x - 5?", options: ["6x + 2", "6x - 2", "3x + 2", "6x² + 2"] },
          { q: "Solve for x: 2x + 7 = 15", options: ["x = 3", "x = 4", "x = 5", "x = 8"] },
        ].map((item, qi) => (
          <div key={qi} className="p-4 rounded-xl border border-gray-200 space-y-3">
            <p className="text-sm font-medium text-gray-900">Q{qi + 1}. {item.q}</p>
            <div className="grid grid-cols-2 gap-2">
              {item.options.map((opt, oi) => (
                <div key={oi} className={`px-3 py-2 rounded-lg text-xs font-medium border ${oi === 0 ? "bg-orange-50 border-orange-200 text-orange-700" : "bg-gray-50 border-gray-200 text-gray-600"}`}>
                  {String.fromCharCode(65 + oi)}. {opt}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
