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
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Marketing emails
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Layer 6: Engagement · Investor communications and campaign performance.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
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
        <ul className="divide-y divide-gray-200">
          {campaigns.map((c) => (
            <li key={c.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 hover:bg-gray-100 min-w-0">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
                  <Mail className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{c.name}</p>
                  <p className="text-sm text-gray-600">Sent {c.sent}</p>
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
