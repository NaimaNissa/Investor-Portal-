"use client";

import { Store, LayoutGrid } from "lucide-react";

export default function MarketplacePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Marketplace
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 1: Core Foundation · Investment opportunities and co-investing.
        </p>
      </section>
      <section className="rounded-xl border border-surface-700 bg-surface-900/50 p-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/15">
            <Store className="h-7 w-7 text-brand-400" />
          </div>
          <h2 className="text-lg font-semibold text-white">Deal flow & opportunities</h2>
          <p className="max-w-md text-sm text-surface-400">
            Browse and access investment opportunities, co-investments, and marketplace expansion (Phase 3).
          </p>
          <div className="mt-4 flex gap-2 text-xs text-surface-500">
            <span className="rounded bg-surface-800 px-2 py-1">Core Foundation</span>
            <span className="rounded bg-surface-800 px-2 py-1">Phase 3</span>
          </div>
        </div>
      </section>
    </div>
  );
}
