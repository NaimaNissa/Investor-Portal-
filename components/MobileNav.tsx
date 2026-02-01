"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  Building2,
  Users,
  Megaphone,
  Store,
  Grid3X3,
  FileSearch,
  Landmark,
  Shield,
  Settings,
  Gift,
  FolderOpen,
  ChevronDown,
  ChevronRight,
  Lock,
} from "lucide-react";
import { clsx } from "clsx";

type NavChild = { href: string; label: string; badge?: string; locked?: boolean };
type NavItem =
  | { href: string; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string; children?: never }
  | { href: string; label: string; icon: React.ComponentType<{ className?: string }>; children: NavChild[]; badge?: never };

const navConfig: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  {
    href: "/portfolio",
    label: "Investor portal",
    icon: Building2,
    children: [
      { href: "/portfolio/deals", label: "Deals" },
      { href: "/portfolio/transactional-emails", label: "Transactional emails" },
      { href: "/portfolio/reporting", label: "Reporting" },
    ],
  },
  {
    href: "/crm",
    label: "CRM",
    icon: Users,
    children: [
      { href: "/crm/contacts", label: "Contacts" },
      { href: "/crm/tasks", label: "Tasks", badge: "NEW" },
      { href: "/crm/business-card", label: "Business card" },
      { href: "/crm/integrations", label: "Integrations" },
    ],
  },
  {
    href: "/marketing",
    label: "Marketing",
    icon: Megaphone,
    children: [
      { href: "/marketing/emails", label: "Marketing emails" },
      { href: "/marketing/landing-pages", label: "Landing pages" },
      { href: "/marketing/pipelines", label: "Pipelines", badge: "NEW" },
      { href: "/marketing/automations", label: "Automations", badge: "NEW" },
      { href: "/marketing/texting", label: "Texting" },
    ],
  },
  { href: "/marketplace", label: "Marketplace", icon: Store },
  { href: "/community", label: "Community", icon: Grid3X3 },
  { href: "/ai-underwriting", label: "AI Underwriting", icon: FileSearch },
  { href: "/banking", label: "Banking", icon: Landmark },
  { href: "/compliance", label: "Compliance", icon: Shield },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    children: [
      { href: "/settings/billing", label: "Billing" },
      { href: "/settings/company", label: "Company" },
      { href: "/settings/account", label: "Account" },
    ],
  },
  { href: "/refer", label: "Refer a friend", icon: Gift, badge: "NEW" },
  {
    href: "/resources",
    label: "Resources",
    icon: FolderOpen,
    children: [
      { href: "/resources/funds-overview", label: "Funds overview" },
      { href: "/resources/vendors", label: "Vendors" },
      { href: "/resources/events", label: "Events" },
      { href: "/resources/support", label: "Support" },
    ],
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const toggle = (href: string) => {
    setExpanded((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  const drawer = open && mounted && typeof document !== "undefined" && (
    <>
      <div
        className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className="fixed left-0 top-0 z-[9999] flex h-full w-[min(18rem,90vw)] max-w-[18rem] flex-col border-r border-gray-200 bg-white shadow-2xl"
        style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))" }}
      >
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 px-4">
              <span className="font-semibold text-gray-900 text-sm sm:text-base truncate pr-2">Investor Portal</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 touch-manipulation"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 sm:px-4" style={{ WebkitOverflowScrolling: "touch" }}>
              {navConfig.map((item) => {
                const hasChildren = "children" in item && item.children?.length;
                const isExpanded = hasChildren && expanded.includes(item.href);
                const isParentActive =
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                if (hasChildren) {
                  return (
                    <div key={item.href}>
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => toggle(item.href)}
                        onKeyDown={(e) => e.key === "Enter" && toggle(item.href)}
                        className={clsx(
                          "flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium cursor-pointer touch-manipulation",
                          isParentActive ? "bg-brand-500/15 text-brand-400" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        )}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        <span className="flex-1">{item.label}</span>
                        {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                      </div>
                      {isExpanded && item.children && (
                        <div className="ml-4 mt-0.5 border-l border-gray-200 pl-3 space-y-0.5">
                          {item.children.map((child) => {
                            const isActive = pathname === child.href;
                            if (child.locked) {
                              return (
                                <div
                                  key={child.href}
                                  className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-gray-500"
                                >
                                  {child.label}
                                  <Lock className="h-3.5 w-3.5" />
                                </div>
                              );
                            }
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className={clsx(
                                  "flex min-h-[40px] items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium touch-manipulation",
                                  isActive ? "bg-brand-500/15 text-brand-400" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                )}
                              >
                                {child.label}
                                {child.badge && (
                                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
                                    {child.badge}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium touch-manipulation",
                      isActive ? "bg-brand-500/15 text-brand-400" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {"badge" in item && item.badge && (
                      <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-xs font-medium text-emerald-400">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
            <div
              className="shrink-0 border-t border-gray-200 p-4"
              style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
            >
              <p className="text-xs text-gray-500">Powered by AI investment intelligence</p>
            </div>
          </aside>
    </>
  );

  return (
    <div className="lg:hidden shrink-0">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-lg bg-gray-100 px-2.5 py-2 text-gray-900 hover:bg-gray-200 touch-manipulation sm:px-2 sm:bg-transparent sm:text-gray-600 sm:hover:bg-gray-100 sm:hover:text-gray-900"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6 shrink-0" />
        <span className="text-sm font-medium sm:hidden">Menu</span>
      </button>
      {mounted && drawer && createPortal(drawer, document.body)}
    </div>
  );
}
