"use client";

import { Grid3X3, Users2 } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Community
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 1 & 6 · Investor network and co-investing with real financial value.
        </p>
      </section>
      <section className="rounded-xl border border-surface-700 bg-surface-900/50 p-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/15">
            <Users2 className="h-7 w-7 text-brand-400" />
          </div>
          <h2 className="text-lg font-semibold text-white">Investor network & co-investing</h2>
          <p className="max-w-md text-sm text-surface-400">
            Connect with fellow investors, discover co-investment opportunities, and participate in the community.
          </p>
          <div className="mt-4 flex gap-2 text-xs text-surface-500">
            <span className="rounded bg-surface-800 px-2 py-1">Core Foundation</span>
            <span className="rounded bg-surface-800 px-2 py-1">Engagement</span>
          </div>
        </div>
      </section>
    </div>
  );
}
