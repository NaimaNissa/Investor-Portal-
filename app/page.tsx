"use client";

import Link from "next/link";
import {
  ArrowRight,
  AlertCircle,
  FileCheck,
  TrendingUp,
  Zap,
  ChevronRight,
  Clock,
  Shield,
  Sparkles,
  Brain,
  Workflow,
  Globe,
  Award,
} from "lucide-react";
import {
  actionItems,
  portfolioSummary,
  performanceData,
  aiInsights,
  recentActivity,
} from "@/lib/mockData";
import { KpiCard } from "@/components/KpiCard";
import { ActionCard } from "@/components/ActionCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { ActivityFeed } from "@/components/ActivityFeed";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function DashboardPage() {
  const highPriorityActions = actionItems.filter((a) => a.priority === "high");
  const otherActions = actionItems.filter((a) => a.priority !== "high").slice(0, 2);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      {/* Decision-first hero */}
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          What should I do next?
        </h1>
        <p className="mt-1 text-sm sm:text-base text-surface-400">
          Your next actions, portfolio health, and AI insights in one place.
        </p>
        <p className="mt-2 text-xs text-surface-500">
          Intelligence → Automation → Decisions → Trust
        </p>
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-medium text-brand-400">
            <Zap className="h-3.5 w-3.5" />
            AI scoring
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <FileCheck className="h-3.5 w-3.5" />
            Automation
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-700 px-2.5 py-1 text-xs font-medium text-surface-300">
            <ArrowRight className="h-3.5 w-3.5" />
            Decision-first
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-700 px-2.5 py-1 text-xs font-medium text-surface-300">
            <Shield className="h-3.5 w-3.5" />
            Audit trail
          </span>
        </div>
      </section>

      {/* Primary action – capital call CTA */}
      {highPriorityActions.length > 0 && (
        <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5 lg:p-6 min-w-0 overflow-hidden">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3 min-w-0">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
              </div>
              <div className="min-w-0">
                <h2 className="font-semibold text-amber-100 text-sm sm:text-base">
                  {highPriorityActions[0].title}
                </h2>
                <p className="mt-0.5 text-xs sm:text-sm text-amber-200/80 line-clamp-2 sm:line-clamp-none">
                  {highPriorityActions[0].description}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-amber-300/90">
                  <Clock className="h-3.5 w-3.5 shrink-0" />
                  Due {new Date(highPriorityActions[0].dueDate!).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 shrink-0">
              <Link
                href="/capital-calls"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-surface-900 hover:bg-amber-400 transition-colors"
              >
                Review & confirm
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/capital-calls"
                className="inline-flex items-center gap-2 rounded-lg border border-surface-600 bg-surface-800 px-4 py-2.5 text-sm font-medium text-surface-200 hover:bg-surface-700 transition-colors"
              >
                View all
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Unique Selling Points */}
      <section className="rounded-xl border border-brand-500/20 bg-brand-500/5 p-4 sm:p-6 min-w-0 overflow-hidden">
        <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
          <Award className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
          Why this platform is different
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-surface-400">
          Traditional portals stop at reports. We deliver intelligence, automation, and trust.
        </p>
        <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex gap-3 rounded-lg border border-surface-700 bg-surface-900/50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
              <Sparkles className="h-5 w-5 text-brand-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">Decision-first, not data-first</h3>
              <p className="mt-0.5 text-xs text-surface-400">Every screen answers “What should I do next?”</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-lg border border-surface-700 bg-surface-900/50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
              <Brain className="h-5 w-5 text-brand-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">AI-native intelligence</h3>
              <p className="mt-0.5 text-xs text-surface-400">Deal scoring, risk analysis, and insights built in—not bolted on.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-lg border border-surface-700 bg-surface-900/50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
              <Workflow className="h-5 w-5 text-brand-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">Automation by default</h3>
              <p className="mt-0.5 text-xs text-surface-400">Capital calls, workflows, and smart alerts—less manual work.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-lg border border-surface-700 bg-surface-900/50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
              <Shield className="h-5 w-5 text-brand-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">Trust & transparency</h3>
              <p className="mt-0.5 text-xs text-surface-400">Full audit trails, real-time updates, verifiable data.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-lg border border-surface-700 bg-surface-900/50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
              <Globe className="h-5 w-5 text-brand-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">Scalable & global</h3>
              <p className="mt-0.5 text-xs text-surface-400">Multi-region, multi-currency, time-zone aware reporting.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-lg border border-surface-700 bg-surface-900/50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
              <Zap className="h-5 w-5 text-brand-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">Intelligence → Trust</h3>
              <p className="mt-0.5 text-xs text-surface-400">Not Dashboard → Reports → Manual. We turn data into decisions.</p>
            </div>
          </div>
        </div>
        <Link
          href="/resources"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300"
        >
          View resources
          <ChevronRight className="h-4 w-4" />
        </Link>
      </section>

      {/* KPI row */}
      <section className="min-w-0">
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <KpiCard
            label="Total commitment"
            value={formatCurrency(portfolioSummary.totalCommitment)}
            sub="Current value"
            subValue={formatCurrency(portfolioSummary.currentValue)}
            icon={TrendingUp}
          />
          <KpiCard
            label="Net IRR"
            value={`${portfolioSummary.netIRR}%`}
            trend="up"
            sub="Trailing 12 months"
            icon={Zap}
          />
          <KpiCard
            label="Net TVPI"
            value={portfolioSummary.netTVPI.toFixed(2)}
            trend="neutral"
            sub="Multiple on invested capital"
            icon={FileCheck}
          />
          <KpiCard
            label="Net DPI"
            value={portfolioSummary.netDPI.toFixed(2)}
            sub="Distributions to paid-in"
            icon={Shield}
          />
        </div>
      </section>

      {/* Main grid: Actions + Chart + Activity */}
      <section className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3 min-w-0">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6 min-w-0">
          <PerformanceChart data={performanceData} />
          <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-4 sm:p-6 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white">Next actions</h3>
            <p className="mt-0.5 text-sm text-surface-400">
              Prioritized by due date and impact
            </p>
            <ul className="mt-4 space-y-3">
              {[...highPriorityActions, ...otherActions].map((item) => (
                <ActionCard key={item.id} item={item} />
              ))}
            </ul>
            <Link
              href="/capital-calls"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300"
            >
              View all actions
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6 min-w-0">
          <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-4 sm:p-6 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white">AI insights</h3>
            <p className="mt-0.5 text-sm text-surface-400">
              Real-time intelligence
            </p>
            <ul className="mt-4 space-y-4">
              {aiInsights.slice(0, 3).map((insight) => (
                <li key={insight.id} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-surface-100">
                      {insight.title}
                    </p>
                    <p className="mt-0.5 text-xs text-surface-400 line-clamp-2">
                      {insight.summary}
                    </p>
                    <p className="mt-1 text-xs text-surface-500">
                      Score: {insight.score}/100
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/intelligence"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300"
            >
              Open AI Intelligence
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <ActivityFeed items={recentActivity} />
        </div>
      </section>
    </div>
  );
}
