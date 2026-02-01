"use client";

import { Store, Plug, CheckCircle } from "lucide-react";

const vendors = [
  { name: "Custody & admin", category: "Fund admin", status: "Active" },
  { name: "Legal & compliance", category: "Advisory", status: "Active" },
  { name: "Audit", category: "Audit", status: "Active" },
];

export default function VendorsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Vendors
        </h1>
        <p className="mt-1 text-gray-500">
          Layer 1: Resources · Service providers and marketplace partners.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
        <div className="border-b border-gray-200 p-4">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <Store className="h-5 w-5 text-brand-400" />
            Approved vendors
          </h2>
          <p className="text-sm text-gray-600">Fund admin, legal, audit, and integrations</p>
        </div>
        <ul className="divide-y divide-gray-200">
          {vendors.map((v) => (
            <li key={v.name} className="flex items-center justify-between p-4 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
                  <Plug className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{v.name}</p>
                  <p className="text-sm text-gray-600">{v.category}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-400">
                <CheckCircle className="h-3.5 w-3.5" />
                {v.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
