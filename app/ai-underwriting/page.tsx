"use client";

import Link from "next/link";
import { FileSearch, Brain, ChevronRight, Zap, FileCheck } from "lucide-react";
import { aiInsights, dealsForComparison } from "@/lib/mockData";

export default function AIUnderwritingPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          AI Underwriting
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 2: Intelligence & Layer 4: Governance · Real-time deal scoring, document intelligence, and risk analysis.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Brain className="h-5 w-5 text-brand-400" />
            AI investment intelligence
          </h3>
          <p className="mt-2 text-sm text-surface-400">
            Deal scoring, risk analysis, and performance benchmarking.
          </p>
          <ul className="mt-4 space-y-3">
            {aiInsights.slice(0, 2).map((insight) => (
              <li key={insight.id} className="flex items-center justify-between rounded-lg border border-surface-700 bg-surface-900/50 p-3">
                <span className="text-sm text-surface-200">{insight.title}</span>
                <span className="text-sm font-medium text-brand-400">Score {insight.score}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/intelligence"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300"
          >
            Open full intelligence
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <FileCheck className="h-5 w-5 text-brand-400" />
            Smart document intelligence
          </h3>
          <p className="mt-2 text-sm text-surface-400">
            AI-powered document review for risks and inconsistencies. Layer 4: Governance.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-surface-400">
            <li>• KYC/AML and compliance docs</li>
            <li>• Deal memos and term sheets</li>
            <li>• Anomaly and fraud signals</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Zap className="h-5 w-5 text-brand-400" />
          Deal comparison (underwriting)
        </h3>
        <p className="mt-1 text-sm text-surface-400">
          Data-driven side-by-side evaluation of investment options.
        </p>
        <ul className="mt-4 space-y-2">
          {dealsForComparison.map((deal) => (
            <li
              key={deal.id}
              className="flex items-center justify-between rounded-lg border border-surface-700 bg-surface-800/50 p-4"
            >
              <span className="font-medium text-surface-100">{deal.name}</span>
              <span className="text-sm text-brand-400">Score {deal.score} · IRR {deal.irrProjected}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
