"use client";

import Link from "next/link";
import { Briefcase, Zap, ChevronRight, TrendingUp } from "lucide-react";
import { dealsForComparison } from "@/lib/mockData";

export default function DealsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Deals
        </h1>
        <p className="mt-1 text-surface-400">
          AI-scored opportunities · What should you consider next?
        </p>
      </section>

      <section className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <Zap className="h-5 w-5 text-brand-400 shrink-0" />
          <div>
            <h2 className="font-semibold text-white">Decision-first deal flow</h2>
            <p className="text-sm text-surface-400">
              Every deal is scored and compared so you see what matters—risk, sector, stage, and projected IRR—at a glance.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Active opportunities</h2>
        <ul className="mt-4 space-y-3">
          {dealsForComparison.map((deal) => (
            <li
              key={deal.id}
              className="flex items-center justify-between rounded-xl border border-surface-700 bg-surface-900/50 p-4 transition-colors hover:border-surface-600"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
                  <Briefcase className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{deal.name}</p>
                  <p className="text-sm text-surface-500">
                    {deal.sector} · {deal.stage}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded bg-brand-500/20 px-2 py-1 text-sm font-medium text-brand-400">
                  Score {deal.score}
                </span>
                <span className="text-sm text-surface-400">IRR {deal.irrProjected}%</span>
                <Link
                  href="/ai-underwriting"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:text-brand-300"
                >
                  Compare
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
