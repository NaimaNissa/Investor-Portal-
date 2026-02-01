"use client";

import { Landmark, CreditCard, ArrowLeftRight } from "lucide-react";

export default function BankingPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Banking
        </h1>
        <p className="mt-1 text-gray-500">
          Layer 1: Core Foundation · Banking & payments, capital calls, distributions.
        </p>
      </section>
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <CreditCard className="h-6 w-6 text-brand-400" />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900">Payments</h3>
          <p className="mt-2 text-sm text-gray-500">
            Capital call remittances, distribution receipts, and payment history.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <ArrowLeftRight className="h-6 w-6 text-brand-400" />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900">Multi-currency & FX</h3>
          <p className="mt-2 text-sm text-gray-500">
            Layer 5: Real-time conversion and international reporting. Phase 3.
          </p>
        </div>
      </section>
      <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <div className="flex items-center gap-3">
          <Landmark className="h-5 w-5 text-gray-600" />
          <p className="text-sm text-gray-500">
            API-first integration with banks and accounting tools (Layer 7). Automated capital calls and distributions (Layer 3).
          </p>
        </div>
      </section>
    </div>
  );
}
