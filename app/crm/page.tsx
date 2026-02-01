"use client";

import { Users, Contact, Building2 } from "lucide-react";

export default function CRMPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          CRM
        </h1>
        <p className="mt-1 text-gray-500">
          Layer 1: Core Foundation · Contact and relationship management.
        </p>
      </section>
      <section className="rounded-xl border border-gray-200 bg-gray-50 p-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/15">
            <Contact className="h-7 w-7 text-brand-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Investor & GP relationships</h2>
          <p className="max-w-md text-sm text-gray-500">
            Centralized contacts, communication history, and engagement tracking for GPs and investors.
          </p>
          <div className="mt-4 flex gap-2 text-xs text-gray-600">
            <span className="rounded bg-gray-100 px-2 py-1">Core Foundation</span>
          </div>
        </div>
      </section>
    </div>
  );
}
