"use client";

import { Plug, Building2, CreditCard, FileSpreadsheet } from "lucide-react";

const integrations = [
  { name: "Banks & payments", icon: CreditCard, status: "Available", desc: "Capital calls, distributions" },
  { name: "Accounting", icon: FileSpreadsheet, status: "Available", desc: "QuickBooks, Xero" },
  { name: "CRM", icon: Building2, status: "Coming soon", desc: "Salesforce, HubSpot" },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Integrations
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 7: API-first integration hub · Plug-and-play with banks, CRMs, accounting tools.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map(({ name, icon: Icon, status, desc }) => (
          <div
            key={name}
            className="rounded-xl border border-surface-700 bg-surface-900/50 p-6 transition-colors hover:border-surface-600"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
              <Icon className="h-6 w-6 text-brand-400" />
            </div>
            <h3 className="mt-4 font-semibold text-white">{name}</h3>
            <p className="mt-1 text-sm text-surface-500">{desc}</p>
            <span className="mt-3 inline-block rounded bg-surface-700 px-2 py-1 text-xs font-medium text-surface-300">
              {status}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
