"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, Search, User as UserIcon, LogOut } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/components/Toast";
import { user as fallbackUser } from "@/lib/mockData";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  const router = useRouter();
  const toast = useToast();
  const { user: authUser, logout, isReady } = useAuth();
  const user = authUser ?? (isReady ? null : fallbackUser);

  const handleLogout = () => {
    logout();
    router.push("/signin");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4 border-b border-surface-800 bg-surface-900/80 backdrop-blur-xl px-3 sm:px-4 lg:px-8">
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-1 min-w-0 max-w-xl">
        <MobileNav />
        <div className="relative flex-1 min-w-0">
          <Search className="absolute left-2.5 sm:left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-500 shrink-0" />
          <input
            type="search"
            placeholder="Search…"
            className="w-full min-w-0 rounded-lg border border-surface-700 bg-surface-800/50 py-2 pl-9 sm:pl-10 pr-3 sm:pr-4 text-sm text-surface-100 placeholder:text-surface-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
        <button
          type="button"
          onClick={() => toast("Demo: Notifications panel would open (capital calls, messages, alerts).")}
          className="relative rounded-lg p-2 text-surface-400 hover:bg-surface-800 hover:text-surface-100 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="absolute right-1 top-1 sm:right-1.5 sm:top-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-500" />
        </button>
        {user ? (
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-2 sm:gap-3 rounded-lg border border-surface-700 bg-surface-800/50 px-2 sm:px-3 py-1.5 sm:py-2">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brand-500/20 text-brand-400 shrink-0">
                <UserIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="hidden sm:block min-w-0">
                <p className="text-sm font-medium text-surface-100">{user.name}</p>
                <p className="text-xs text-surface-500">{user.role}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg p-2 text-surface-400 hover:bg-surface-800 hover:text-surface-100 transition-colors"
              aria-label="Sign out"
              title="Sign out"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <Link
            href="/signin"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
          >
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
