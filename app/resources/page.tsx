"use client";

import Link from "next/link";
import { FolderOpen, FileText, BookOpen, Video } from "lucide-react";
import { useToast } from "@/components/Toast";

export default function ResourcesPage() {
  const toast = useToast();
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Resources
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Layer 1: Settings & Resources · Documents, guides, and support.
        </p>
      </section>
      <section className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-w-0">
        <Link
          href="/portfolio/reporting"
          className="flex items-center gap-3 sm:gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 min-w-0"
        >
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15">
            <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-brand-400" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Documents</h3>
            <p className="text-xs sm:text-sm text-gray-600">Reports, KYC, agreements</p>
          </div>
        </Link>
        <Link
          href="/resources/support"
          className="flex items-center gap-3 sm:gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 min-w-0"
        >
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-brand-400" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Guides & FAQs</h3>
            <p className="text-xs sm:text-sm text-gray-600">How to use the portal</p>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => toast("Demo: Videos & webinars library opened.")}
          className="flex items-center gap-3 sm:gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 text-left w-full min-w-0"
        >
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15">
            <Video className="h-5 w-5 sm:h-6 sm:w-6 text-brand-400" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Videos & webinars</h3>
            <p className="text-xs sm:text-sm text-gray-600">Training and updates</p>
          </div>
        </button>
      </section>
      <section className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0 overflow-hidden">
        <div className="flex items-start sm:items-center gap-3 min-w-0">
          <FolderOpen className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-gray-500">
            All documents are stored securely with full audit trails. Access is role-based and time-zone aware for global investors.
          </p>
        </div>
      </section>
    </div>
  );
}
