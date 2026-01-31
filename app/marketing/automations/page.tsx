"use client";

import { Workflow, Zap, CheckCircle } from "lucide-react";

const automations = [
  { name: "Capital call reminder", trigger: "7 days before due", active: true },
  { name: "Document request follow-up", trigger: "After 3 days", active: true },
  { name: "Distribution notification", trigger: "On distribution", active: true },
];

export default function AutomationsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
            Automations
          </h1>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
            NEW
          </span>
        </div>
        <p className="mt-1 text-surface-400">
          Layer 3: Workflow automation · Smart alerts and notifications instead of generic emails.
        </p>
      </section>

      <section className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <Zap className="h-5 w-5 text-brand-400 shrink-0" />
          <div>
            <h2 className="font-semibold text-white">Context-aware automations</h2>
            <p className="text-sm text-surface-400">
              Capital calls, document requests, and follow-ups run automatically. Every action is logged for audit.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Workflow className="h-5 w-5 text-brand-400" />
          Active automations
        </h2>
        <ul className="mt-4 space-y-2">
          {automations.map((a) => (
            <li
              key={a.name}
              className="flex items-center justify-between rounded-xl border border-surface-700 bg-surface-900/50 p-4"
            >
              <div>
                <p className="font-medium text-white">{a.name}</p>
                <p className="text-sm text-surface-500">Trigger: {a.trigger}</p>
              </div>
              <span className="flex items-center gap-1.5 rounded bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-400">
                <CheckCircle className="h-3.5 w-3.5" />
                Active
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
