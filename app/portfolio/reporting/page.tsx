"use client";

import Link from "next/link";
import { FileText, BarChart3, ChevronRight } from "lucide-react";
import { performanceData } from "@/lib/mockData";
import { PerformanceChart } from "@/components/PerformanceChart";

const reports = [
  { id: "1", name: "Q4 2024 Fund Performance", date: "2025-01-15", type: "Quarterly" },
  { id: "2", name: "Capital Account Statement", date: "2025-01-01", type: "Monthly" },
  { id: "3", name: "Tax Package 2024", date: "2024-12-20", type: "Annual" },
];

export default function ReportingPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Reporting
        </h1>
        <p className="mt-1 text-surface-400">
          Real-time reports and performance · Time-zone aware, verifiable data.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-brand-400" />
          Performance at a glance
        </h2>
        <PerformanceChart data={performanceData} />
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
        <h2 className="font-semibold text-white flex items-center gap-2">
          <FileText className="h-5 w-5 text-brand-400" />
          Available reports
        </h2>
        <ul className="mt-4 space-y-2">
          {reports.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => toast(`Demo: Opening "${r.name}" (${r.type}). PDF download would start.`)}
                className="flex w-full items-center justify-between rounded-lg border border-surface-700 bg-surface-800/50 p-4 transition-colors hover:border-surface-600 text-left"
              >
                <div>
                  <p className="font-medium text-surface-100">{r.name}</p>
                  <p className="text-xs text-surface-500">{r.date} · {r.type}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-surface-500 shrink-0" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
