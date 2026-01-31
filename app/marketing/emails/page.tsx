"use client";

import { Mail, Send, Megaphone } from "lucide-react";
import { useToast } from "@/components/Toast";

const campaigns = [
  { id: "1", name: "Q4 Fund Update", sent: "2025-01-20", openRate: 72 },
  { id: "2", name: "Annual Meeting Invite", sent: "2025-01-15", openRate: 68 },
];

export default function MarketingEmailsPage() {
  const showToast = useToast();
  const onNewCampaign = () => showToast("Demo: New campaign created. Draft saved.");
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Marketing emails
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 6: Engagement · Investor communications and campaign performance.
        </p>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden">
        <div className="border-b border-surface-700 p-4 flex items-center justify-between">
          <h2 className="font-semibold text-white flex items-center gap-2">
            <Megaphone className="h-5 w-5 text-brand-400" />
            Campaigns
          </h2>
          <button
            type="button"
            onClick={onNewCampaign}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
          >
            <Send className="h-4 w-4" />
            New campaign
          </button>
        </div>
        <ul className="divide-y divide-surface-700">
          {campaigns.map((c) => (
            <li key={c.id} className="flex items-center justify-between p-4 hover:bg-surface-800/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
                  <Mail className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{c.name}</p>
                  <p className="text-sm text-surface-500">Sent {c.sent}</p>
                </div>
              </div>
              <span className="rounded bg-emerald-500/20 px-2 py-1 text-sm font-medium text-emerald-400">
                {c.openRate}% open
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
