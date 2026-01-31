import Link from "next/link";
import { ChevronRight, FileCheck, Brain, FileText, Shield } from "lucide-react";
import { clsx } from "clsx";

type ActionItem = {
  id: string;
  title: string;
  description: string;
  priority: string;
  type: string;
  dueDate?: string;
};

const typeIcons: Record<string, typeof FileCheck> = {
  capital_call: FileCheck,
  intelligence: Brain,
  document: FileText,
  compliance: Shield,
};

export function ActionCard({ item }: { item: ActionItem }) {
  const Icon = typeIcons[item.type] ?? FileCheck;
  const href =
    item.type === "capital_call"
      ? "/capital-calls"
      : item.type === "intelligence"
        ? "/intelligence"
        : "#";

  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg border border-surface-700 bg-surface-800/50 p-3 transition-colors hover:border-surface-600 hover:bg-surface-800"
    >
      <div
        className={clsx(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
          item.priority === "high"
            ? "bg-amber-500/15 text-amber-400"
            : "bg-surface-700 text-surface-400"
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-surface-100">{item.title}</p>
        <p className="text-xs text-surface-500 truncate">{item.description}</p>
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-surface-500" />
    </Link>
  );
}
