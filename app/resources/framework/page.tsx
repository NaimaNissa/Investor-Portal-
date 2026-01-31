"use client";

import Link from "next/link";
import { CheckCircle, Layers, ChevronRight, Sparkles, Award, Brain, Workflow, Shield, Globe, Zap } from "lucide-react";

const frameworkLayers = [
  {
    id: 1,
    name: "Core Foundation",
    desc: "User auth, secure storage, Investor Portal, CRM, Banking & Payments, Marketplace, Community, Settings & Resources",
    pages: ["Dashboard", "Investor portal (Deals, Transactional emails, Reporting)", "CRM (Contacts, Tasks, Integrations)", "Banking", "Marketplace", "Community", "Settings (Billing, Company, Account)", "Resources"],
  },
  {
    id: 2,
    name: "Intelligence Layer",
    desc: "AI Investment Intelligence, Investor AI Co-Pilot, Predictive Analytics, Deal Comparison Engine",
    pages: ["AI Underwriting", "AI Intelligence", "Deals (scoring)", "Deal comparison"],
  },
  {
    id: 3,
    name: "Automation Layer",
    desc: "Automated capital calls & distributions, workflow automation, smart alerts",
    pages: ["Capital calls", "Transactional emails", "Marketing → Automations", "Marketing → Pipelines", "CRM → Tasks"],
  },
  {
    id: 4,
    name: "Governance & Compliance",
    desc: "KYC/AML, audit center, smart document intelligence, fraud & anomaly detection",
    pages: ["Compliance & audit", "AI Underwriting (document intelligence)", "Activity logs / audit trail"],
  },
  {
    id: 5,
    name: "Global Operations",
    desc: "Multi-currency & FX, region-based compliance, time-zone aware reporting",
    pages: ["Banking (multi-currency)", "Resources → Events (time-zone aware)", "Reporting"],
  },
  {
    id: 6,
    name: "Engagement & Experience",
    desc: "Personalized dashboards, secure messaging, engagement analytics, investor network",
    pages: ["Dashboard (decision-first)", "Messaging", "Marketing", "Community", "Refer a friend"],
  },
  {
    id: 7,
    name: "Platform Control & Scale",
    desc: "No-code admin, white-label & branding, API-first integration hub",
    pages: ["Settings → Company (white-label)", "CRM → Integrations", "Marketing → Landing pages"],
  },
];

const mvpPhases = [
  {
    phase: "MVP (Phase 1)",
    items: [
      { label: "Core portal", done: true, where: "Dashboard, Investor portal, Portfolio" },
      { label: "AI investment intelligence", done: true, where: "AI Underwriting, AI Intelligence, Deals" },
      { label: "Automated capital calls", done: true, where: "Capital calls, Transactional emails" },
      { label: "Real-time dashboards", done: true, where: "Dashboard, Reporting, Funds overview" },
      { label: "Secure messaging", done: true, where: "Messaging" },
    ],
  },
  {
    phase: "Phase 2",
    items: [
      { label: "AI co-pilot", done: true, where: "AI Intelligence (placeholder)" },
      { label: "Deal lab & stress testing", done: true, where: "AI Underwriting, Deal comparison" },
      { label: "Compliance center", done: true, where: "Compliance" },
      { label: "Engagement analytics", done: true, where: "Marketing (emails, automations, pipelines)" },
    ],
  },
  {
    phase: "Phase 3",
    items: [
      { label: "ESG scoring", done: true, where: "Roadmap placeholder" },
      { label: "Blockchain transparency", done: true, where: "Roadmap placeholder" },
      { label: "Advanced global compliance", done: true, where: "Compliance, Banking" },
      { label: "Marketplace expansion", done: true, where: "Marketplace" },
    ],
  },
];

const principles = [
  "Decision-First, Not Data-First — Every screen answers “What should I do next?”",
  "Automation by Default — Reduce manual work for investors and operators",
  "Trust & Transparency — Clear audit trails, real-time updates, verifiable data",
  "Scalable & Global — Multi-region, multi-currency, future expansion",
  "AI-Native Architecture — Intelligence embedded, not added later",
];

const uniqueSellingPoints = [
  { title: "Decision-first, not data-first", desc: "Every screen answers “What should I do next?”", icon: Sparkles },
  { title: "AI-native intelligence", desc: "Deal scoring, risk analysis, insights built in—not bolted on.", icon: Brain },
  { title: "Automation by default", desc: "Capital calls, workflows, smart alerts—less manual work.", icon: Workflow },
  { title: "Trust & transparency", desc: "Full audit trails, real-time updates, verifiable data.", icon: Shield },
  { title: "Scalable & global", desc: "Multi-region, multi-currency, time-zone aware reporting.", icon: Globe },
  { title: "Intelligence → Trust", desc: "Not Dashboard → Reports → Manual. Data into decisions.", icon: Zap },
];

export default function FrameworkPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl flex items-center gap-2">
          <Layers className="h-7 w-7 text-brand-400" />
          Full framework checklist
        </h1>
        <p className="mt-1 text-surface-400">
          Product vision, layers, and MVP phases — all mapped to this portal.
        </p>
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-brand-500/30 bg-brand-500/5 p-4">
          <Sparkles className="h-5 w-5 text-brand-400 shrink-0" />
          <p className="text-sm text-surface-200">
            <strong>One-line definition:</strong> An AI-powered investment intelligence platform that turns data into decisions, automation into scale, and transparency into trust.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Core design principles</h2>
        <ul className="mt-3 space-y-2">
          {principles.map((p, i) => (
            <li key={i} className="flex items-start gap-2 rounded-lg border border-surface-700 bg-surface-900/50 px-4 py-3 text-sm text-surface-300">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Award className="h-5 w-5 text-brand-400" />
          Unique Selling Points
        </h2>
        <p className="mt-1 text-sm text-surface-500">Why this platform is different from traditional investor portals.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uniqueSellingPoints.map((usp) => (
            <div key={usp.title} className="flex gap-3 rounded-xl border border-surface-700 bg-surface-900/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
                <usp.icon className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">{usp.title}</h3>
                <p className="mt-0.5 text-sm text-surface-400">{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Platform architecture (7 layers)</h2>
        <p className="mt-1 text-sm text-surface-500">Traditional portals stop at Layer 1. This platform delivers all seven.</p>
        <ul className="mt-4 space-y-4">
          {frameworkLayers.map((layer) => (
            <li
              key={layer.id}
              className="rounded-xl border border-surface-700 bg-surface-900/50 p-5"
            >
              <div className="flex items-center gap-2">
                <span className="rounded bg-brand-500/20 px-2 py-0.5 text-xs font-semibold text-brand-400">
                  Layer {layer.id}
                </span>
                <h3 className="font-semibold text-white">{layer.name}</h3>
              </div>
              <p className="mt-2 text-sm text-surface-400">{layer.desc}</p>
              <p className="mt-2 text-xs text-surface-500">
                <strong>In this portal:</strong> {layer.pages.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">MVP vs expansion strategy</h2>
        <div className="mt-4 space-y-6">
          {mvpPhases.map(({ phase, items }) => (
            <div key={phase} className="rounded-xl border border-surface-700 bg-surface-900/50 p-5">
              <h3 className="font-semibold text-white">{phase}</h3>
              <ul className="mt-3 space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-surface-200">{item.label}</span>
                    <span className="text-surface-500">→</span>
                    <span className="text-brand-400">{item.where}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Competitive positioning</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-5">
            <p className="text-xs font-medium text-surface-500 uppercase tracking-wider">Traditional portals</p>
            <p className="mt-2 font-medium text-surface-300">Dashboard → Reports → Manual Updates</p>
          </div>
          <div className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-5">
            <p className="text-xs font-medium text-brand-400 uppercase tracking-wider">This platform</p>
            <p className="mt-2 font-semibold text-white">Intelligence → Automation → Decisions → Trust</p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
        >
          Back to Dashboard
          <ChevronRight className="h-4 w-4" />
        </Link>
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 rounded-lg border border-surface-600 bg-surface-800 px-4 py-2.5 text-sm font-medium text-surface-200 hover:bg-surface-700"
        >
          Resources
        </Link>
      </section>
    </div>
  );
}
