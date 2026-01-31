"use client";

import { Layout, ExternalLink, Plus } from "lucide-react";
import { useToast } from "@/components/Toast";

const pages = [
  { id: "1", name: "Fund VII Overview", url: "/fund-vii", views: 1240 },
  { id: "2", name: "Investor Onboarding", url: "/onboard", views: 890 },
];

export default function LandingPagesPage() {
  const toast = useToast();
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Landing pages
        </h1>
        <p className="mt-1 text-surface-400">
          Fundraise and investor-facing pages · Custom domains and branding (Layer 7).
        </p>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden">
        <div className="border-b border-surface-700 p-4 flex items-center justify-between">
          <h2 className="font-semibold text-white">Pages</h2>
          <button
            type="button"
            onClick={() => toast("Demo: New landing page created. Edit and publish from the editor.")}
            className="inline-flex items-center gap-2 rounded-lg border border-surface-600 bg-surface-800 px-3 py-2 text-sm font-medium text-surface-200 hover:bg-surface-700"
          >
            <Plus className="h-4 w-4" />
            New page
          </button>
        </div>
        <ul className="divide-y divide-surface-700">
          {pages.map((p) => (
            <li key={p.id} className="flex items-center justify-between p-4 hover:bg-surface-800/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
                  <Layout className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{p.name}</p>
                  <p className="text-sm text-surface-500">{p.url}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-surface-400">{p.views} views</span>
                <ExternalLink className="h-4 w-4 text-surface-500" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
