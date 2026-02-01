"use client";

import { Grid3X3, Users2 } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Community
        </h1>
        <p className="mt-1 text-gray-500">
          Layer 1 & 6 · Investor network and co-investing with real financial value.
        </p>
      </section>
      <section className="rounded-xl border border-gray-200 bg-gray-50 p-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/15">
            <Users2 className="h-7 w-7 text-brand-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Investor network & co-investing</h2>
          <p className="max-w-md text-sm text-gray-500">
            Connect with fellow investors, discover co-investment opportunities, and participate in the community.
          </p>
          <div className="mt-4 flex gap-2 text-xs text-gray-600">
            <span className="rounded bg-gray-100 px-2 py-1">Core Foundation</span>
            <span className="rounded bg-gray-100 px-2 py-1">Engagement</span>
          </div>
        </div>
      </section>
    </div>
  );
}
