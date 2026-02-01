"use client";

import Link from "next/link";
import { PieChart, TrendingUp, ChevronRight } from "lucide-react";
import { allocationByFund, portfolioSummary } from "@/lib/mockData";
import { PerformanceChart } from "@/components/PerformanceChart";
import { performanceData } from "@/lib/mockData";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function FundsOverviewPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Funds overview
        </h1>
        <p className="mt-1 text-gray-500">
          Layer 1: Resources · Commitment, deployment, and performance across your funds.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-medium text-gray-500">Total commitment</p>
          <p className="mt-2 text-xl font-semibold text-gray-900">
            {formatCurrency(portfolioSummary.totalCommitment)}
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-medium text-gray-500">Current value</p>
          <p className="mt-2 text-xl font-semibold text-gray-900">
            {formatCurrency(portfolioSummary.currentValue)}
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-medium text-gray-500">Net IRR</p>
          <p className="mt-2 text-xl font-semibold text-brand-400">{portfolioSummary.netIRR}%</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-medium text-gray-500">Net TVPI</p>
          <p className="mt-2 text-xl font-semibold text-gray-900">{portfolioSummary.netTVPI}</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <PieChart className="h-5 w-5 text-brand-400" />
          By fund
        </h2>
        <ul className="mt-4 space-y-2">
          {allocationByFund.map((fund) => (
            <li key={fund.name}>
              <Link
                href="/portfolio"
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-gray-300"
              >
                <div>
                  <p className="font-medium text-gray-900">{fund.name}</p>
                  <p className="text-sm text-gray-600">
                    {formatCurrency(fund.value)} · {fund.share}%
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-brand-400">IRR {fund.irr}%</span>
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <PerformanceChart data={performanceData} />
    </div>
  );
}
