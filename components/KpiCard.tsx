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
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5 transition-colors hover:border-gray-300 min-w-0">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs sm:text-sm font-medium text-gray-500 truncate min-w-0">{label}</p>
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-400" />
        </div>
      </div>
      <p className="mt-2 sm:mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 break-words min-w-0">
        {value}
        {trend === "up" && (
          <span className="ml-1.5 inline-block text-emerald-500 text-lg">↑</span>
        )}
        {trend === "down" && (
          <span className="ml-1.5 inline-block text-red-500 text-lg">↓</span>
        )}
      </p>
      {sub && (
        <p className="mt-1 text-xs sm:text-sm text-gray-600 break-words min-w-0">
          {sub}
          {subValue != null && (
            <span className={clsx("ml-1 font-medium", subValue.startsWith("$") ? "text-gray-700" : "text-gray-500")}>
              {subValue}
            </span>
          )}
        </p>
      )}
    </div>
  );
}
