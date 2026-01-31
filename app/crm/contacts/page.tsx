"use client";

import { Users, Search, Building2 } from "lucide-react";

const contacts = [
  { id: "1", name: "GP Relations Team", role: "Fund operations", email: "gp@fund.com" },
  { id: "2", name: "Compliance", role: "KYC & regulatory", email: "compliance@fund.com" },
  { id: "3", name: "Investor Services", role: "Support", email: "investors@fund.com" },
];

export default function ContactsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Contacts
        </h1>
        <p className="mt-1 text-sm sm:text-base text-surface-400">
          Layer 1: CRM · GP and investor relationship management with full auditability.
        </p>
      </section>

      <div className="relative w-full max-w-md min-w-0">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-500 shrink-0" />
        <input
          type="search"
          placeholder="Search contacts…"
          className="w-full min-w-0 rounded-lg border border-surface-700 bg-surface-800 pl-10 pr-4 py-2.5 text-sm text-surface-100 placeholder:text-surface-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
      </div>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden min-w-0">
        <ul className="divide-y divide-surface-700">
          {contacts.map((c) => (
            <li key={c.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-surface-800/50 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-white text-sm sm:text-base">{c.name}</p>
                  <p className="text-xs sm:text-sm text-surface-500">{c.role}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-surface-400 truncate pl-12 sm:pl-0 sm:ml-auto">{c.email}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
