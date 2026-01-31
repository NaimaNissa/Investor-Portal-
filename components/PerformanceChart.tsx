"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

type DataPoint = { month: string; value: number; benchmark: number };

export function PerformanceChart({ data }: { data: DataPoint[] }) {
  return (
    <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-4 sm:p-6 min-w-0 overflow-hidden">
      <h3 className="text-base sm:text-lg font-semibold text-white">Performance vs benchmark</h3>
      <p className="mt-0.5 text-xs sm:text-sm text-surface-400">
        Monthly return (%), trailing 7 months
      </p>
      <div className="mt-4 sm:mt-6 h-48 sm:h-56 md:h-64 min-h-[12rem]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64748b" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#f1f5f9" }}
              formatter={(value: number, name: string) => [`${value}%`, name]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <ReferenceLine y={0} stroke="#475569" strokeDasharray="2 2" />
            <Area
              type="monotone"
              dataKey="benchmark"
              stroke="#64748b"
              strokeWidth={1.5}
              fill="url(#colorBenchmark)"
              name="Benchmark"
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0ea5e9"
              strokeWidth={2}
              fill="url(#colorValue)"
              name="Portfolio"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 sm:gap-6 text-xs">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-500 shrink-0" />
          Portfolio
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-surface-500 shrink-0" />
          Benchmark
        </span>
      </div>
    </div>
  );
}
