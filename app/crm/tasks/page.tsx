"use client";

import { CheckSquare, Zap, Clock, AlertCircle } from "lucide-react";
import { actionItems } from "@/lib/mockData";

export default function TasksPage() {
  const tasks = actionItems.filter((i) => i.type === "capital_call" || i.type === "document" || i.type === "compliance");

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
            Tasks
          </h1>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
            NEW
          </span>
        </div>
        <p className="mt-1 text-gray-500">
          Layer 3: Workflow automation · What should I do next? Prioritized by due date and impact.
        </p>
      </section>

      <section className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <Zap className="h-5 w-5 text-brand-400 shrink-0" />
          <div>
            <h2 className="font-semibold text-gray-900">Decision-first tasks</h2>
            <p className="text-sm text-gray-500">
              Approvals, document requests, and follow-ups without manual effort. Smart alerts instead of generic notifications.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900">Your tasks</h2>
        <ul className="mt-4 space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200">
                <CheckSquare className="h-5 w-5 text-gray-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900">{task.title}</p>
                <p className="text-sm text-gray-600">{task.description}</p>
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
                    : "rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-500"
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
