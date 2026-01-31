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
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Portfolio
        </h1>
        <p className="mt-1 text-surface-400">
          Commitment, deployment, and performance across your investments.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-5">
          <p className="text-sm font-medium text-surface-400">Total commitment</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(portfolioSummary.totalCommitment)}
          </p>
        </div>
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-5">
          <p className="text-sm font-medium text-surface-400">Deployed</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(portfolioSummary.totalDeployed)}
          </p>
          <p className="mt-0.5 text-xs text-surface-500">
            {((portfolioSummary.totalDeployed / portfolioSummary.totalCommitment) * 100).toFixed(1)}% of commitment
          </p>
        </div>
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-5">
          <p className="text-sm font-medium text-surface-400">Distributions</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-400">
            {formatCurrency(portfolioSummary.totalDistributions)}
          </p>
        </div>
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-5">
          <p className="text-sm font-medium text-surface-400">Current value</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(portfolioSummary.currentValue)}
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <PieChart className="h-5 w-5 text-brand-400" />
            Allocation by fund
          </h3>
          <div className="mt-6 h-72">
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
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-brand-400" />
            Key multiples
          </h3>
          <ul className="mt-6 space-y-4">
            {allocationByFund.map((fund) => (
              <li
                key={fund.name}
                className="flex items-center justify-between rounded-lg border border-surface-700 bg-surface-800/50 p-4"
              >
                <div>
                  <p className="font-medium text-surface-100">{fund.name}</p>
                  <p className="text-sm text-surface-500">
                    {formatCurrency(fund.value)} · {fund.share}%
                  </p>
                </div>
                <p className="text-lg font-semibold text-brand-400">
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
