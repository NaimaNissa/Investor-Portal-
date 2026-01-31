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
    <div className="space-y-8 animate-fade-in">
      <section>
        <Link
          href="/marketing/pipelines"
          className="inline-flex items-center gap-2 text-sm font-medium text-surface-400 hover:text-brand-400 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Fundraise pipeline
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl flex items-center gap-2">
          <Link2 className="h-7 w-7 text-brand-400" />
          {stage.name}
        </h1>
        <p className="mt-1 text-surface-400">
          {stage.count} items in this stage. Fundraise pipeline · Layer 3: Workflow automation.
        </p>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden">
        <div className="border-b border-surface-700 p-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-brand-400" />
          <h2 className="font-semibold text-white">Items in {stage.name}</h2>
        </div>
        <ul className="divide-y divide-surface-700">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between p-4 hover:bg-surface-800/50 transition-colors"
            >
              <div>
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-surface-500">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/marketing/pipelines"
        className="inline-flex items-center gap-2 rounded-lg border border-surface-600 bg-surface-800 px-4 py-2.5 text-sm font-medium text-surface-200 hover:bg-surface-700 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Pipelines
      </Link>
    </div>
  );
}
