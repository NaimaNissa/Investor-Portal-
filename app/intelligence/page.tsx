"use client";

import { Brain, Zap, BarChart3, GitCompare, ChevronRight, TrendingUp } from "lucide-react";
import { aiInsights, dealsForComparison } from "@/lib/mockData";
import { useToast } from "@/components/Toast";

export default function IntelligencePage() {
  const toast = useToast();
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          AI Investment Intelligence
        </h1>
        <p className="mt-1 text-sm sm:text-base text-surface-400">
          Real-time deal scoring, risk analysis, and performance benchmarking.
        </p>
      </section>

      <section className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 min-w-0">
        <div className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 sm:p-6 min-w-0 overflow-hidden">
          <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
            <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
            AI insights
          </h3>
          <p className="mt-1 text-sm text-surface-400">
            Context-aware intelligence for your portfolio
          </p>
          <ul className="mt-6 space-y-4">
            {aiInsights.map((insight) => (
              <li
                key={insight.id}
                className="flex gap-4 rounded-lg border border-surface-700 bg-surface-900/50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
                  <Zap className="h-5 w-5 text-brand-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-surface-100">{insight.title}</p>
                  <p className="mt-0.5 text-sm text-surface-400">{insight.summary}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded-full bg-surface-700 px-2 py-0.5 text-xs font-medium text-surface-300">
                      Score: {insight.score}/100
                    </span>
                    {insight.trend === "up" && (
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-4 sm:p-6 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
            <GitCompare className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
            Deal comparison engine
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-surface-400">
            Data-driven side-by-side evaluation
          </p>
          <ul className="mt-4 sm:mt-6 space-y-3">
            {dealsForComparison.map((deal) => (
              <li
                key={deal.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-lg border border-surface-700 bg-surface-800/50 p-3 sm:p-4 min-w-0"
              >
                <div className="min-w-0">
                  <p className="font-medium text-surface-100 text-sm sm:text-base">{deal.name}</p>
                  <p className="text-xs text-surface-500">
                    {deal.sector} · {deal.stage}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  <span className="text-xs sm:text-sm font-semibold text-brand-400">
                    Score {deal.score}
                  </span>
                  <span className="text-xs sm:text-sm text-surface-400">
                    IRR {deal.irrProjected}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => toast("Demo: Deal Lab opened. Side-by-side comparison with stress testing.")}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
          >
            Compare in Deal Lab
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 min-w-0">
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-4 sm:p-6 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
            <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
            Predictive analytics
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-surface-400">
            Forecasts for returns, cash flow, and risk exposure. Phase 2.
          </p>
          <p className="mt-2 text-xs text-surface-500">
            Coming: return forecasts, cash flow projections, stress testing.
          </p>
        </div>
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-4 sm:p-6 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
            Investor AI Co-Pilot
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-surface-400">
            Natural-language queries for instant portfolio insights. Phase 2.
          </p>
          <p className="mt-2 text-xs text-surface-500">
            Ask questions in plain language; get answers with sources.
          </p>
        </div>
      </section>
    </div>
  );
}
