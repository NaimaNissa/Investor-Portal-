"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { useAuth } from "@/components/AuthProvider";

const AUTH_PATHS = ["/signin", "/signup"];

export function LayoutSwitcher({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isReady } = useAuth();
  const isAuthPage = AUTH_PATHS.includes(pathname);

  useEffect(() => {
    if (!isReady) return;
    if (!user && !isAuthPage) {
      router.replace("/signin");
      return;
    }
    if (user && isAuthPage) {
      router.replace("/");
    }
  }, [isReady, user, isAuthPage, router]);

  if (!isReady) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-surface-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-surface-600 border-t-brand-500" />
      </div>
    );
  }

  if (!user && !isAuthPage) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-surface-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-surface-600 border-t-brand-500" />
      </div>
    );
  }

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 max-w-full">{children}</main>
      </div>
    </div>
  );
}
