"use client";

import { Mail, CheckCircle, Clock } from "lucide-react";

const emails = [
  { id: "1", subject: "Capital call – Growth Equity VII", sent: "2025-01-30", status: "Delivered" },
  { id: "2", subject: "Distribution notice – Q4", sent: "2025-01-28", status: "Delivered" },
  { id: "3", subject: "Document ready: Q4 Report", sent: "2025-01-25", status: "Delivered" },
];

export default function TransactionalEmailsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Transactional emails
        </h1>
        <p className="mt-1 text-surface-400">
          Automated capital calls, distributions, and document notifications—full audit trail.
        </p>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden">
        <div className="border-b border-surface-700 p-4">
          <h2 className="font-semibold text-white">Recent sends</h2>
          <p className="text-sm text-surface-500">Layer 3: Automation · Every send is logged</p>
        </div>
        <ul className="divide-y divide-surface-700">
          {emails.map((email) => (
            <li
              key={email.id}
              className="flex items-center gap-4 p-4 transition-colors hover:bg-surface-800/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-surface-100">{email.subject}</p>
                <p className="flex items-center gap-1.5 text-xs text-surface-500">
                  <Clock className="h-3.5 w-3.5" />
                  Sent {email.sent}
                </p>
              </div>
              <span className="rounded bg-surface-700 px-2 py-1 text-xs font-medium text-surface-300">
                {email.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
