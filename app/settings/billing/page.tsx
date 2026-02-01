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
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Billing
        </h1>
        <p className="mt-1 text-gray-500">
          Layer 1: Banking & payments · Invoices, payment history, and billing preferences.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <CreditCard className="h-6 w-6 text-brand-400" />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900">Payment method</h3>
          <p className="mt-2 text-sm text-gray-500">
            Manage payment methods for platform and fund-related billing.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <Landmark className="h-6 w-6 text-brand-400" />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900">Capital calls & distributions</h3>
          <p className="mt-2 text-sm text-gray-500">
            View remittance history and distribution receipts. Layer 3: Automation.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2">
          <Receipt className="h-5 w-5 text-brand-400" />
          Invoices
        </h2>
        <ul className="mt-4 space-y-2">
          {invoices.map((inv) => (
            <li
              key={inv.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-100 p-4"
            >
              <span className="text-sm text-gray-700">{inv.date}</span>
              <span className="font-medium text-gray-900">${inv.amount}</span>
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
