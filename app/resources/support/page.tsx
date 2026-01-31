"use client";

import { HelpCircle, MessageSquare, BookOpen, FileText } from "lucide-react";

const faqs = [
  { q: "How do I confirm a capital call?", a: "Go to Capital Calls, review the notice, and click Confirm. Remittance instructions are in the notice." },
  { q: "Where are my tax documents?", a: "Resources → Documents, or Reporting. Tax packages are available after year-end." },
  { q: "How do I update my KYC?", a: "Compliance → Update KYC. You'll get reminders before documents expire." },
];

export default function SupportPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Support
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 1: Resources · Help, FAQs, and contact. Every interaction is logged for audit.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <a
          href="/messaging"
          className="flex items-center gap-4 rounded-xl border border-surface-700 bg-surface-900/50 p-6 transition-colors hover:border-surface-600 hover:bg-surface-800/50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <MessageSquare className="h-6 w-6 text-brand-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Message support</h3>
            <p className="text-sm text-surface-500">Secure in-platform messaging with full auditability</p>
          </div>
        </a>
        <a
          href="/resources"
          className="flex items-center gap-4 rounded-xl border border-surface-700 bg-surface-900/50 p-6 transition-colors hover:border-surface-600 hover:bg-surface-800/50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <BookOpen className="h-6 w-6 text-brand-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Guides & docs</h3>
            <p className="text-sm text-surface-500">How-to guides and documentation</p>
          </div>
        </a>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
        <h2 className="font-semibold text-white flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-brand-400" />
          FAQs
        </h2>
        <ul className="mt-4 space-y-4">
          {faqs.map((faq, i) => (
            <li key={i} className="rounded-lg border border-surface-700 bg-surface-800/50 p-4">
              <p className="font-medium text-white">{faq.q}</p>
              <p className="mt-1 text-sm text-surface-400">{faq.a}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
