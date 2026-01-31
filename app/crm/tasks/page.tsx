"use client";

import { CheckSquare, Zap, Clock, AlertCircle } from "lucide-react";
import { actionItems } from "@/lib/mockData";

export default function TasksPage() {
  const tasks = actionItems.filter((i) => i.type === "capital_call" || i.type === "document" || i.type === "compliance");

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
            Tasks
          </h1>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
            NEW
          </span>
        </div>
        <p className="mt-1 text-surface-400">
          Layer 3: Workflow automation · What should I do next? Prioritized by due date and impact.
        </p>
      </section>

      <section className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <Zap className="h-5 w-5 text-brand-400 shrink-0" />
          <div>
            <h2 className="font-semibold text-white">Decision-first tasks</h2>
            <p className="text-sm text-surface-400">
              Approvals, document requests, and follow-ups without manual effort. Smart alerts instead of generic notifications.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Your tasks</h2>
        <ul className="mt-4 space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-4 rounded-xl border border-surface-700 bg-surface-900/50 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-700">
                <CheckSquare className="h-5 w-5 text-surface-400" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-white">{task.title}</p>
                <p className="text-sm text-surface-500">{task.description}</p>
                {task.dueDate && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-amber-400">
                    <Clock className="h-3.5 w-3.5" />
                    Due {new Date(task.dueDate).toLocaleDateString("en-US")}
                  </p>
                )}
              </div>
              <span
                className={
                  task.priority === "high"
                    ? "rounded bg-amber-500/20 px-2 py-1 text-xs font-medium text-amber-400"
                    : "rounded bg-surface-700 px-2 py-1 text-xs font-medium text-surface-400"
                }
              >
                {task.priority}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
