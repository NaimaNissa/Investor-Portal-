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
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Capital calls
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Automated capital calls with reminders and confirmations. Review and confirm below.
        </p>
      </section>

      {pending.length > 0 && (
        <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5 lg:p-6 min-w-0">
          <h2 className="font-semibold text-amber-900 flex items-center gap-2 text-sm sm:text-base">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            Pending confirmations ({pending.length})
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-amber-800/90">
            Confirm and remit by the due date to avoid late fees.
          </p>
        </section>
      )}

      <section className="space-y-4 min-w-0">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">Active capital calls</h2>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 min-w-0">
          {capitalCalls.map((call) => {
            const isConfirmed = confirmedIds.has(call.id);
            return (
              <div
                key={call.id}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0 overflow-hidden"
              >
                {viewingNotice === call.id && (
                  <div className="mb-4 rounded-lg border border-brand-500/30 bg-brand-500/10 p-4 text-sm text-gray-800">
                    <p className="font-medium text-gray-900">Capital call notice → {call.fund}</p>
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
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex gap-3 min-w-0">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
                      <FileCheck className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{call.fund}</h3>
                      <p className="mt-0.5 text-xs sm:text-sm text-gray-500">
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
                <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-600">Amount</p>
                      <p className="font-semibold text-gray-900">
                        {formatCurrency(call.amount)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-600">Due date</p>
                      <p className="font-semibold text-gray-900">
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
                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setConfirmedIds((prev) => new Set(prev).add(call.id));
                        toast(`Capital call confirmed → ${formatCurrency(call.amount)} for ${call.fund}`);
                      }}
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4" />
                      Confirm
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewingNotice(call.id)}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200 transition-colors"
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

      <section className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Automation & transparency</h3>
        <p className="mt-2 text-sm text-gray-500">
          Capital calls are issued automatically with email and in-portal reminders. All confirmations and remittances are logged for full auditability.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500">
          <li>• End-to-end automation with reminders and confirmations</li>
          <li>• Full audit trail for compliance</li>
          <li>• Multi-currency support (Phase 3)</li>
        </ul>
      </section>
    </div>
  );
}
