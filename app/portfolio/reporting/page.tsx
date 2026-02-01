"use client";

import Link from "next/link";
import { FileText, BarChart3, ChevronRight } from "lucide-react";
import { performanceData } from "@/lib/mockData";
import { PerformanceChart } from "@/components/PerformanceChart";
import { useToast } from "@/components/Toast";

const reports = [
  { id: "1", name: "Q4 2024 Fund Performance", date: "2025-01-15", type: "Quarterly" },
  { id: "2", name: "Capital Account Statement", date: "2025-01-01", type: "Monthly" },
  { id: "3", name: "Tax Package 2024", date: "2024-12-20", type: "Annual" },
];

export default function ReportingPage() {
  const showToast = useToast();
  const onOpenReport = (r: (typeof reports)[number]) =>
    showToast(`Demo: Opening "${r.name}" (${r.type}). PDF download would start.`);
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Reporting
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Real-time reports and performance · Time-zone aware, verifiable data.
        </p>
      </section>

      <section className="min-w-0 overflow-hidden">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
          Performance at a glance
        </h2>
        <PerformanceChart data={performanceData} />
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0 overflow-hidden">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2 text-sm sm:text-base">
          <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
          Available reports
        </h2>
        <ul className="mt-3 sm:mt-4 space-y-2">
          {reports.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => onOpenReport(r)}
                className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-100 p-4 transition-colors hover:border-gray-300 text-left"
              >
                <div>
                  <p className="font-medium text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-600">{r.date} · {r.type}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-600 shrink-0" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
