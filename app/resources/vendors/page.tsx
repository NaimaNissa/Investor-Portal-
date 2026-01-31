"use client";

import { Store, Plug, CheckCircle } from "lucide-react";

const vendors = [
  { name: "Custody & admin", category: "Fund admin", status: "Active" },
  { name: "Legal & compliance", category: "Advisory", status: "Active" },
  { name: "Audit", category: "Audit", status: "Active" },
];

export default function VendorsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Vendors
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 1: Resources · Service providers and marketplace partners.
        </p>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden">
        <div className="border-b border-surface-700 p-4">
          <h2 className="font-semibold text-white flex items-center gap-2">
            <Store className="h-5 w-5 text-brand-400" />
            Approved vendors
          </h2>
          <p className="text-sm text-surface-500">Fund admin, legal, audit, and integrations</p>
        </div>
        <ul className="divide-y divide-surface-700">
          {vendors.map((v) => (
            <li key={v.name} className="flex items-center justify-between p-4 hover:bg-surface-800/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
                  <Plug className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{v.name}</p>
                  <p className="text-sm text-surface-500">{v.category}</p>
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
