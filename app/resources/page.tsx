"use client";

import Link from "next/link";
import { FolderOpen, FileText, BookOpen, Video } from "lucide-react";
import { useToast } from "@/components/Toast";

export default function ResourcesPage() {
  const toast = useToast();
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Resources
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 1: Settings & Resources · Documents, guides, and support.
        </p>
      </section>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/portfolio/reporting"
          className="flex items-center gap-4 rounded-xl border border-surface-700 bg-surface-900/50 p-6 transition-colors hover:border-surface-600 hover:bg-surface-800/50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <FileText className="h-6 w-6 text-brand-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Documents</h3>
            <p className="text-sm text-surface-500">Reports, KYC, agreements</p>
          </div>
        </Link>
        <Link
          href="/resources/support"
          className="flex items-center gap-4 rounded-xl border border-surface-700 bg-surface-900/50 p-6 transition-colors hover:border-surface-600 hover:bg-surface-800/50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <BookOpen className="h-6 w-6 text-brand-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Guides & FAQs</h3>
            <p className="text-sm text-surface-500">How to use the portal</p>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => toast("Demo: Videos & webinars library opened.")}
          className="flex items-center gap-4 rounded-xl border border-surface-700 bg-surface-900/50 p-6 transition-colors hover:border-surface-600 hover:bg-surface-800/50 text-left w-full"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <Video className="h-6 w-6 text-brand-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Videos & webinars</h3>
            <p className="text-sm text-surface-500">Training and updates</p>
          </div>
        </button>
      </section>
      <section className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
        <div className="flex items-center gap-3">
          <FolderOpen className="h-5 w-5 text-surface-500" />
          <p className="text-sm text-surface-400">
            All documents are stored securely with full audit trails. Access is role-based and time-zone aware for global investors.
          </p>
        </div>
      </section>
    </div>
  );
}
