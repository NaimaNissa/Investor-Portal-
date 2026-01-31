import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

type KpiCardProps = {
  label: string;
  value: string;
  sub?: string;
  subValue?: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
};

export function KpiCard({ label, value, sub, subValue, trend, icon: Icon }: KpiCardProps) {
  return (
    <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-5 transition-colors hover:border-surface-600">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-surface-400">{label}</p>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
          <Icon className="h-4 w-4 text-brand-400" />
        </div>
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-white lg:text-3xl">
        {value}
        {trend === "up" && (
          <span className="ml-1.5 inline-block text-emerald-400 text-lg">↑</span>
        )}
        {trend === "down" && (
          <span className="ml-1.5 inline-block text-red-400 text-lg">↓</span>
        )}
      </p>
      {sub && (
        <p className="mt-1 text-xs text-surface-500">
          {sub}
          {subValue != null && (
            <span className={clsx("ml-1 font-medium", subValue.startsWith("$") ? "text-surface-300" : "text-surface-400")}>
              {subValue}
            </span>
          )}
        </p>
      )}
    </div>
  );
}
