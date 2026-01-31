"use client";

import { Users, Search, Building2 } from "lucide-react";

const contacts = [
  { id: "1", name: "GP Relations Team", role: "Fund operations", email: "gp@fund.com" },
  { id: "2", name: "Compliance", role: "KYC & regulatory", email: "compliance@fund.com" },
  { id: "3", name: "Investor Services", role: "Support", email: "investors@fund.com" },
];

export default function ContactsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Contacts
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 1: CRM · GP and investor relationship management with full auditability.
        </p>
      </section>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-500" />
        <input
          type="search"
          placeholder="Search contacts…"
          className="w-full rounded-lg border border-surface-700 bg-surface-800 pl-10 pr-4 py-2.5 text-sm text-surface-100 placeholder:text-surface-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
      </div>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden">
        <ul className="divide-y divide-surface-700">
          {contacts.map((c) => (
            <li key={c.id} className="flex items-center gap-4 p-4 hover:bg-surface-800/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15">
                <Users className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <p className="font-medium text-white">{c.name}</p>
                <p className="text-sm text-surface-500">{c.role}</p>
              </div>
              <p className="ml-auto text-sm text-surface-400">{c.email}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
