"use client";

import { CreditCard, Receipt, Landmark } from "lucide-react";

const invoices = [
  { id: "1", date: "2025-01-01", amount: 0, status: "Paid" },
  { id: "2", date: "2024-12-01", amount: 0, status: "Paid" },
];

export default function BillingPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Billing
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 1: Banking & payments · Invoices, payment history, and billing preferences.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <CreditCard className="h-6 w-6 text-brand-400" />
          </div>
          <h3 className="mt-4 font-semibold text-white">Payment method</h3>
          <p className="mt-2 text-sm text-surface-400">
            Manage payment methods for platform and fund-related billing.
          </p>
        </div>
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <Landmark className="h-6 w-6 text-brand-400" />
          </div>
          <h3 className="mt-4 font-semibold text-white">Capital calls & distributions</h3>
          <p className="mt-2 text-sm text-surface-400">
            View remittance history and distribution receipts. Layer 3: Automation.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
        <h2 className="font-semibold text-white flex items-center gap-2">
          <Receipt className="h-5 w-5 text-brand-400" />
          Invoices
        </h2>
        <ul className="mt-4 space-y-2">
          {invoices.map((inv) => (
            <li
              key={inv.id}
              className="flex items-center justify-between rounded-lg border border-surface-700 bg-surface-800/50 p-4"
            >
              <span className="text-sm text-surface-300">{inv.date}</span>
              <span className="font-medium text-white">${inv.amount}</span>
              <span className="rounded bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-400">
                {inv.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
