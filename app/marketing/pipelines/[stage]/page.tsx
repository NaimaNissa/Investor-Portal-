"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, Users, Link2 } from "lucide-react";
import { pipelineStages, pipelineStageItems, type PipelineStageId } from "@/lib/pipelineData";

const validStages: PipelineStageId[] = ["lead", "qualified", "commitment", "closed"];

export default function PipelineStagePage() {
  const params = useParams();
  const stageId = params.stage as string;

  if (!validStages.includes(stageId as PipelineStageId)) {
    notFound();
  }

  const stage = pipelineStages.find((s) => s.id === stageId);
  const items = pipelineStageItems[stageId as PipelineStageId] ?? [];

  if (!stage) {
    notFound();
  }

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <Link
          href="/marketing/pipelines"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-400 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Fundraise pipeline
        </Link>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 flex items-center gap-2">
          <Link2 className="h-7 w-7 text-brand-400" />
          {stage.name}
        </h1>
        <p className="mt-1 text-gray-500">
          {stage.count} items in this stage. Fundraise pipeline · Layer 3: Workflow automation.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
        <div className="border-b border-gray-200 p-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-brand-400" />
          <h2 className="font-semibold text-gray-900">Items in {stage.name}</h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between p-4 hover:bg-gray-100 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/marketing/pipelines"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Pipelines
      </Link>
    </div>
  );
}
