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
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Support
        </h1>
        <p className="mt-1 text-gray-500">
          Layer 1: Resources · Help, FAQs, and contact. Every interaction is logged for audit.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <a
          href="/messaging"
          className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <MessageSquare className="h-6 w-6 text-brand-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Message support</h3>
            <p className="text-sm text-gray-600">Secure in-platform messaging with full auditability</p>
          </div>
        </a>
        <a
          href="/resources"
          className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15">
            <BookOpen className="h-6 w-6 text-brand-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Guides & docs</h3>
            <p className="text-sm text-gray-600">How-to guides and documentation</p>
          </div>
        </a>
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-brand-400" />
          FAQs
        </h2>
        <ul className="mt-4 space-y-4">
          {faqs.map((faq, i) => (
            <li key={i} className="rounded-lg border border-gray-200 bg-gray-100 p-4">
              <p className="font-medium text-gray-900">{faq.q}</p>
              <p className="mt-1 text-sm text-gray-500">{faq.a}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
