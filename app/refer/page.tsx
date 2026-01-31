"use client";

import { Gift, Share2, UserPlus } from "lucide-react";
import { useToast } from "@/components/Toast";

export default function ReferPage() {
  const toast = useToast();
  const referralLink = typeof window !== "undefined" ? `${window.location.origin}/signup?ref=demo` : "https://portal.example.com/signup?ref=demo";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      toast("Referral link copied to clipboard");
    } catch {
      toast("Link: " + referralLink);
    }
  };

  const handleInviteEmail = () => {
    window.location.href = `mailto:?subject=Join the Investor Portal&body=Sign up using my referral link: ${referralLink}`;
    toast("Email client opened to invite a friend");
  };
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
            Refer a friend
          </h1>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
            NEW
          </span>
        </div>
        <p className="mt-1 text-surface-400">
          Layer 6: Engagement · Grow the investor network and earn rewards.
        </p>
      </section>
      <section className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/15">
            <Gift className="h-7 w-7 text-emerald-400" />
          </div>
          <h2 className="text-lg font-semibold text-white">Invite fellow investors</h2>
          <p className="max-w-md text-sm text-surface-400">
            Share your unique referral link. When they join the platform, you both benefit from the expanded network and co-investing opportunities.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              Copy referral link
            </button>
            <button
              type="button"
              onClick={handleInviteEmail}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-600 bg-surface-800 px-4 py-2.5 text-sm font-medium text-surface-200 hover:bg-surface-700 transition-colors"
            >
              <UserPlus className="h-4 w-4" />
              Invite via email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
