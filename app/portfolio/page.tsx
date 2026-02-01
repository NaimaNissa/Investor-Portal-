"use client";

import { PieChart, TrendingUp } from "lucide-react";
import { portfolioSummary, allocationByFund, performanceData } from "@/lib/mockData";
import { PerformanceChart } from "@/components/PerformanceChart";
import {
  PieChart as RechartsPie,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

const COLORS = ["#0ea5e9", "#8b5cf6", "#10b981", "#f59e0b"];

export default function PortfolioPage() {
  const pieData = allocationByFund.map((f, i) => ({
    name: f.name,
    value: f.value,
    share: f.share,
    color: COLORS[i % COLORS.length],
  }));

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Portfolio
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Commitment, deployment, and performance across your investments.
        </p>
      </section>

      <section className="grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-w-0">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5 min-w-0">
          <p className="text-sm font-medium text-gray-500">Total commitment</p>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-gray-900 break-words">
            {formatCurrency(portfolioSummary.totalCommitment)}
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-500">Deployed</p>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-gray-900">
            {formatCurrency(portfolioSummary.totalDeployed)}
          </p>
          <p className="mt-0.5 text-xs text-gray-600">
            {((portfolioSummary.totalDeployed / portfolioSummary.totalCommitment) * 100).toFixed(1)}% of commitment
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-500">Distributions</p>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-emerald-400">
            {formatCurrency(portfolioSummary.totalDistributions)}
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-500">Current value</p>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-gray-900 break-words">
            {formatCurrency(portfolioSummary.currentValue)}
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 min-w-0">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0 overflow-hidden">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
            <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
            Allocation by fund
          </h3>
          <div className="mt-4 sm:mt-6 h-56 sm:h-64 md:h-72 min-h-[14rem]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPie>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, share }) => `${name.split(" ")[0]} ${share}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [formatCurrency(value), ""]}
                />
                <Legend />
              </RechartsPie>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
            Key multiples
          </h3>
          <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            {allocationByFund.map((fund) => (
              <li
                key={fund.name}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-lg border border-gray-200 bg-gray-100 p-3 sm:p-4 min-w-0"
              >
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">{fund.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {formatCurrency(fund.value)} · {fund.share}%
                  </p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-brand-400 shrink-0">
                  IRR {fund.irr}%
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PerformanceChart data={performanceData} />
    </div>
  );
}
