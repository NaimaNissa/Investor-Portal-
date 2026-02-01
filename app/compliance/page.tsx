"use client";

import { Shield, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { actionItems } from "@/lib/mockData";
import { useToast } from "@/components/Toast";

const complianceItem = actionItems.find((a) => a.type === "compliance");

export default function CompliancePage() {
  const toast = useToast();
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Compliance & audit
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Layer 4: Governance & Compliance · KYC/AML tracking, regulatory readiness, and activity logs.
        </p>
      </section>

      {complianceItem && (
        <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5 lg:p-6 min-w-0 overflow-hidden">
          <h2 className="font-semibold text-amber-900 flex items-center gap-2 text-sm sm:text-base">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            Action required
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-amber-800/90">{complianceItem.title}</p>
          <p className="mt-0.5 text-xs sm:text-sm text-amber-800/90">{complianceItem.description}</p>
          <button
            type="button"
            onClick={() => toast("KYC update started. You will receive a secure link to complete the refresh.")}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600 transition-colors min-h-[44px] touch-target"
          >
            Update KYC
          </button>
        </section>
      )}

      <section className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-w-0">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-emerald-500/15">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
          </div>
          <h3 className="mt-3 sm:mt-4 font-semibold text-gray-900 text-sm sm:text-base">KYC status</h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Annual refresh due Mar 15. Complete to maintain access.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-brand-500/15">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400" />
          </div>
          <h3 className="mt-3 sm:mt-4 font-semibold text-gray-900 text-sm sm:text-base">Audit center</h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            View activity logs, document history, and regulatory reports.
          </p>
          <button
            type="button"
            onClick={() => toast("Audit logs opened. All activity is timestamped and exportable.")}
            className="mt-4 text-xs sm:text-sm font-medium text-brand-400 hover:text-brand-300"
          >
            View logs →
          </button>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gray-200 text-gray-500">
            <FileCheck className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <h3 className="mt-3 sm:mt-4 font-semibold text-gray-900 text-sm sm:text-base">Smart document intelligence</h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            AI-powered document review for risks. Phase 2.
          </p>
        </div>
      </section>
    </div>
  );
}
