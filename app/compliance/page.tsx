"use client";

import { Shield, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { actionItems } from "@/lib/mockData";
import { useToast } from "@/components/Toast";

const complianceItem = actionItems.find((a) => a.type === "compliance");

export default function CompliancePage() {
  const toast = useToast();
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Compliance & audit
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 4: Governance & Compliance · KYC/AML tracking, regulatory readiness, and activity logs.
        </p>
      </section>

      {complianceItem && (
        <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 lg:p-6">
          <h2 className="font-semibold text-amber-100 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Action required
          </h2>
          <p className="mt-1 text-sm text-amber-200/80">{complianceItem.title}</p>
          <p className="mt-0.5 text-sm text-amber-200/80">{complianceItem.description}</p>
          <button
            type="button"
            onClick={() => toast("KYC update started. You will receive a secure link to complete the refresh.")}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-surface-900 hover:bg-amber-400 transition-colors"
          >
            Update KYC
          </button>
        </section>
      )}

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15">
            <CheckCircle className="h-5 w-5 text-emerald-400" />
          </div>
          <h3 className="mt-4 font-semibold text-white">KYC status</h3>
          <p className="mt-1 text-sm text-surface-400">
            Annual refresh due Mar 15. Complete to maintain access.
          </p>
        </div>
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
            <Shield className="h-5 w-5 text-brand-400" />
          </div>
          <h3 className="mt-4 font-semibold text-white">Audit center</h3>
          <p className="mt-1 text-sm text-surface-400">
            View activity logs, document history, and regulatory reports.
          </p>
          <button
            type="button"
            onClick={() => toast("Audit logs opened. All activity is timestamped and exportable.")}
            className="mt-4 text-sm font-medium text-brand-400 hover:text-brand-300"
          >
            View logs →
          </button>
        </div>
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-700 text-surface-400">
            <FileCheck className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-semibold text-white">Smart document intelligence</h3>
          <p className="mt-1 text-sm text-surface-400">
            AI-powered document review for risks. Phase 2.
          </p>
        </div>
      </section>
    </div>
  );
}
