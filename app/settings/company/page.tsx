"use client";

import { Building2, Palette, Globe } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Company
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 1 & 7 · Firm details, white-label branding, and legal information.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <Building2 className="h-6 w-6 text-brand-400" />
          </div>
          <h3 className="mt-4 font-semibold text-white">Company profile</h3>
          <p className="mt-2 text-sm text-surface-400">
            Legal name, address, tax ID, and regulatory details for GPs / Fund Managers.
          </p>
        </div>
        <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <Palette className="h-6 w-6 text-brand-400" />
          </div>
          <h3 className="mt-4 font-semibold text-white">White-label & branding</h3>
          <p className="mt-2 text-sm text-surface-400">
            Layer 7: Custom domains, themes, and layouts. No-code admin control.
          </p>
        </div>
      </section>
    </div>
  );
}
