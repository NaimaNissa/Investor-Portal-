"use client";

import { useState } from "react";
import { CreditCard, Share2, Copy, Sparkles, User, Mail, Building2 } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/components/Toast";

export default function BusinessCardPage() {
  const toast = useToast();
  const { user } = useAuth();
  const [name, setName] = useState(user?.name ?? "Fredo Cloud");
  const [title, setTitle] = useState(user?.role ?? "Investor");
  const [email, setEmail] = useState(user?.email ?? "info@fredocloud.com");
  const [company, setCompany] = useState("Investor Portal");

  const cardLink = typeof window !== "undefined" ? `${window.location.origin}/card/${encodeURIComponent(email)}` : "#";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(cardLink);
      toast("Business card link copied to clipboard");
    } catch {
      toast("Link: " + cardLink);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${name} – Digital business card`,
        text: `Connect with ${name} (${title})`,
        url: cardLink,
      }).then(() => toast("Shared successfully")).catch(() => handleCopyLink());
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 flex items-center gap-2 flex-wrap">
          <CreditCard className="h-6 w-6 sm:h-7 sm:w-7 text-brand-400 shrink-0" />
          Business card
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Share a branded, digital card with investors and partners. Layer 6: Engagement.
        </p>
      </section>

      <section className="rounded-xl border border-brand-500/20 bg-brand-500/5 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-3 min-w-0 overflow-hidden">
        <Sparkles className="h-5 w-5 text-brand-400 shrink-0" />
        <p className="text-sm text-gray-800">
          Your digital business card is always up to date. Share the link or QR so contacts can view your profile and reach you.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Preview</h2>
          <div className="rounded-xl border-2 border-gray-300 bg-gray-100 p-6 max-w-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                <User className="h-7 w-7" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 text-lg truncate">{name}</p>
                <p className="text-sm text-brand-400 truncate">{title}</p>
                <p className="text-sm text-gray-500 truncate">{company}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-300 space-y-2">
              <p className="flex items-center gap-2 text-sm text-gray-700">
                <Mail className="h-4 w-4 text-gray-600" />
                {email}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-700">
                <Building2 className="h-4 w-4 text-gray-600" />
                {company}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Edit card</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              Share card
            </button>
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200 transition-colors"
            >
              <Copy className="h-4 w-4" />
              Copy link
            </button>
          </div>
        </div>
      </div>

      <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-semibold text-gray-900">How it works</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-500">
          <li>• Your card link stays the same; edits here update what others see.</li>
          <li>• Recipients can view your profile, save your contact, or reach out—all without sharing your email publicly until you choose.</li>
          <li>• Optional: add a QR code for in-person events; same link, scannable from the portal.</li>
        </ul>
      </section>
    </div>
  );
}
