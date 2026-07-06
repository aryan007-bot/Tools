"use client";

export function FeeCollectionMockup() {
  return (
    <div className="relative rounded-2xl border border-blue-100 bg-white shadow-[0_20px_60px_rgba(59,130,246,0.1)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-gray-500 ml-2 font-medium">Fee Collection Dashboard</span>
      </div>
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Collected", value: "$284K", color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Pending", value: "$42K", color: "text-amber-600", bg: "bg-amber-50" },
            { label: "Overdue", value: "$8.5K", color: "text-red-600", bg: "bg-red-50" },
          ].map((stat) => (
            <div key={stat.label} className={`p-3 rounded-xl ${stat.bg}`}>
              <p className="text-[10px] text-gray-500 mb-1">{stat.label}</p>
              <p className={`text-lg font-bold font-display ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-blue-50 text-blue-800">
                <th className="px-3 py-2 text-left font-semibold">Student</th>
                <th className="px-3 py-2 text-left font-semibold">Amount</th>
                <th className="px-3 py-2 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Aarav Sharma", amount: "$1,200", status: "Paid", badge: "text-emerald-600 bg-emerald-50" },
                { name: "Priya Patel", amount: "$1,200", status: "Pending", badge: "text-amber-600 bg-amber-50" },
                { name: "Rohan Gupta", amount: "$1,200", status: "Overdue", badge: "text-red-600 bg-red-50" },
              ].map((row) => (
                <tr key={row.name} className="border-t border-gray-100">
                  <td className="px-3 py-2 text-gray-700">{row.name}</td>
                  <td className="px-3 py-2 text-gray-700">{row.amount}</td>
                  <td className="px-3 py-2">
                    <span className={`${row.badge} px-2 py-0.5 rounded-full`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
