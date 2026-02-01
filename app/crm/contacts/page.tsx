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
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Contacts
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Layer 1: CRM · GP and investor relationship management with full auditability.
        </p>
      </section>

      <div className="relative w-full max-w-md min-w-0">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600 shrink-0" />
        <input
          type="search"
          placeholder="Search contacts…"
          className="w-full min-w-0 rounded-lg border border-gray-200 bg-gray-100 pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-600 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
      </div>

      <section className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden min-w-0">
        <ul className="divide-y divide-gray-200">
          {contacts.map((c) => (
            <li key={c.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gray-100 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">{c.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{c.role}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 truncate pl-12 sm:pl-0 sm:ml-auto">{c.email}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
