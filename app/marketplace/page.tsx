"use client";

import { Store, LayoutGrid } from "lucide-react";

export default function MarketplacePage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Marketplace
        </h1>
        <p className="mt-1 text-gray-500">
          Layer 1: Core Foundation · Investment opportunities and co-investing.
        </p>
      </section>
      <section className="rounded-xl border border-gray-200 bg-gray-50 p-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/15">
            <Store className="h-7 w-7 text-brand-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Deal flow & opportunities</h2>
          <p className="max-w-md text-sm text-gray-500">
            Browse and access investment opportunities, co-investments, and marketplace expansion (Phase 3).
          </p>
          <div className="mt-4 flex gap-2 text-xs text-gray-600">
            <span className="rounded bg-gray-100 px-2 py-1">Core Foundation</span>
            <span className="rounded bg-gray-100 px-2 py-1">Phase 3</span>
          </div>
        </div>
      </section>
    </div>
  );
}
