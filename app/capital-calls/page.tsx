"use client";

import { useState } from "react";
import { FileCheck, Calendar, DollarSign, CheckCircle, Clock } from "lucide-react";
import { capitalCalls } from "@/lib/mockData";
import { useToast } from "@/components/Toast";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CapitalCallsPage() {
  const toast = useToast();
  const [confirmedIds, setConfirmedIds] = useState<Set<string>>(new Set());
  const [viewingNotice, setViewingNotice] = useState<string | null>(null);
  const pending = capitalCalls.filter((c) => c.status === "pending" && !confirmedIds.has(c.id));

  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Capital calls
        </h1>
        <p className="mt-1 text-surface-400">
          Automated capital calls with reminders and confirmations. Review and confirm below.
        </p>
      </section>

      {pending.length > 0 && (
        <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 lg:p-6">
          <h2 className="font-semibold text-amber-100 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Pending confirmations ({pending.length})
          </h2>
          <p className="mt-1 text-sm text-amber-200/80">
            Confirm and remit by the due date to avoid late fees.
          </p>
        </section>
      )}

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Active capital calls</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {capitalCalls.map((call) => {
            const isConfirmed = confirmedIds.has(call.id);
            return (
              <div
                key={call.id}
                className="rounded-xl border border-surface-700 bg-surface-900/50 p-6"
              >
                {viewingNotice === call.id && (
                  <div className="mb-4 rounded-lg border border-brand-500/30 bg-brand-500/10 p-4 text-sm text-surface-200">
                    <p className="font-medium text-white">Capital call notice – {call.fund}</p>
                    <p className="mt-2">Amount due: {formatCurrency(call.amount)} by {new Date(call.dueDate).toLocaleDateString("en-US")}. Wire instructions will be sent upon confirmation.</p>
                    <button
                      type="button"
                      onClick={() => setViewingNotice(null)}
                      className="mt-3 text-sm font-medium text-brand-400 hover:text-brand-300"
                    >
                      Close
                    </button>
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
                      <FileCheck className="h-5 w-5 text-brand-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{call.fund}</h3>
                      <p className="mt-0.5 text-sm text-surface-400">
                        {call.percentOfCommitment}% of commitment
                      </p>
                    </div>
                  </div>
                  <span
                    className={
                      call.status === "pending" && !isConfirmed
                        ? "rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-400"
                        : "rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-400"
                    }
                  >
                    {call.status === "pending" && !isConfirmed ? "Pending" : "Confirmed"}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-surface-500" />
                    <div>
                      <p className="text-xs text-surface-500">Amount</p>
                      <p className="font-semibold text-white">
                        {formatCurrency(call.amount)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-surface-500" />
                    <div>
                      <p className="text-xs text-surface-500">Due date</p>
                      <p className="font-semibold text-white">
                        {new Date(call.dueDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                {call.status === "pending" && !isConfirmed && (
                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setConfirmedIds((prev) => new Set(prev).add(call.id));
                        toast(`Capital call confirmed – ${formatCurrency(call.amount)} for ${call.fund}`);
                      }}
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4" />
                      Confirm
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewingNotice(call.id)}
                      className="inline-flex items-center gap-2 rounded-lg border border-surface-600 bg-surface-800 px-4 py-2.5 text-sm font-medium text-surface-200 hover:bg-surface-700 transition-colors"
                    >
                      View notice
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
        <h3 className="text-lg font-semibold text-white">Automation & transparency</h3>
        <p className="mt-2 text-sm text-surface-400">
          Capital calls are issued automatically with email and in-portal reminders. All confirmations and remittances are logged for full auditability.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-surface-400">
          <li>• End-to-end automation with reminders and confirmations</li>
          <li>• Full audit trail for compliance</li>
          <li>• Multi-currency support (Phase 3)</li>
        </ul>
      </section>
    </div>
  );
}
