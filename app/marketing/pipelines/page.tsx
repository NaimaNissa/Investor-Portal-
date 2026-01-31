"use client";

import Link from "next/link";
import { Zap, Link2, ChevronRight } from "lucide-react";
import { pipelineStages } from "@/lib/pipelineData";

export default function PipelinesPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
            Pipelines
          </h1>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
            NEW
          </span>
        </div>
        <p className="mt-1 text-surface-400">
          Layer 3: Workflow automation · Fundraise and investor pipelines without manual effort.
        </p>
      </section>

      <section className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <Zap className="h-5 w-5 text-brand-400 shrink-0" />
          <div>
            <h2 className="font-semibold text-white">Automation-first pipelines</h2>
            <p className="text-sm text-surface-400">
              Move investors through stages with smart reminders, document requests, and follow-ups. Context-aware notifications.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Link2 className="h-5 w-5 text-brand-400" />
          Fundraise pipeline
        </h2>
        <p className="mt-1 text-sm text-surface-500">Stages and counts. Click View to open the page for each stage.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pipelineStages.map((s) => (
            <div
              key={s.id}
              className="rounded-xl border border-surface-700 bg-surface-900/50 p-4 transition-colors hover:border-surface-600"
            >
              <p className="font-medium text-white">{s.name}</p>
              <p className="mt-1 text-2xl font-semibold text-brand-400">{s.count}</p>
              <Link
                href={`/marketing/pipelines/${s.id}`}
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-400 hover:text-brand-300"
              >
                View
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
