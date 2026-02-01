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
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Landing pages
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Fundraise and investor-facing pages · Custom domains and branding (Layer 7).
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden min-w-0">
        <div className="border-b border-gray-200 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="font-semibold text-gray-900 text-sm sm:text-base">Pages</h2>
          <button
            type="button"
            onClick={() => toast("Demo: New landing page created. Edit and publish from the editor.")}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
          >
            <Plus className="h-4 w-4" />
            New page
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {pages.map((p) => (
            <li key={p.id} className="flex items-center justify-between p-4 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
                  <Layout className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{p.name}</p>
                  <p className="text-sm text-gray-600">{p.url}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">{p.views} views</span>
                <ExternalLink className="h-4 w-4 text-gray-600" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
