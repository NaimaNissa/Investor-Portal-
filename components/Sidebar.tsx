"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  Megaphone,
  Store,
  Grid3X3,
  FileSearch,
  Landmark,
  Settings,
  Gift,
  FolderOpen,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Lock,
  Shield,
} from "lucide-react";
import { clsx } from "clsx";

type NavChild = {
  href: string;
  label: string;
  badge?: "NEW";
  locked?: boolean;
};

type NavItem =
  | {
      href: string;
      label: string;
      icon: React.ComponentType<{ className?: string }>;
      badge?: "NEW";
      children?: never;
    }
  | {
      href: string;
      label: string;
      icon: React.ComponentType<{ className?: string }>;
      children: NavChild[];
      badge?: never;
    };

const navItems: NavItem[] = [
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

export function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string[]>(() => {
    const open: string[] = [];
    navItems.forEach((item) => {
      if ("children" in item && item.children?.length) {
        const hasActiveChild = item.children.some((c) => pathname.startsWith(c.href));
        if (hasActiveChild || pathname.startsWith(item.href)) open.push(item.href);
      }
    });
    return open.length ? open : ["/portfolio", "/resources"];
  });

  const toggle = (href: string) => {
    setExpanded((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white shadow-sm hidden lg:block">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600">
              <Sparkles className="h-5 w-5 text-gray-900" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              Investor Portal
            </span>
          </div>
        </div>
        <nav className="flex-1 space-y-0.5 p-4 overflow-y-auto bg-white">
          {navItems.map((item) => {
            const hasChildren = "children" in item && item.children?.length;
            const isExpanded = hasChildren && expanded.includes(item.href);
            const isParentActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            if (hasChildren) {
              return (
                <div key={item.href}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => toggle(item.href)}
                    onKeyDown={(e) => e.key === "Enter" && toggle(item.href)}
                    className={clsx(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors cursor-pointer",
                      isParentActive
                        ? "bg-brand-500/15 text-brand-400"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 shrink-0 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0 text-gray-500 opacity-70" />
                    )}
                  </div>
                  {isExpanded && item.children && (
                    <div className="ml-4 mt-0.5 border-l border-gray-200 pl-3 space-y-0.5">
                      {item.children.map((child) => {
                        const isActive = pathname === child.href;
                        const content = (
                          <>
                            <span className="flex-1">{child.label}</span>
                            {child.badge && (
                              <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-xs font-medium text-emerald-400">
                                {child.badge}
                              </span>
                            )}
                            {child.locked && (
                              <Lock className="h-3.5 w-3.5 shrink-0 text-gray-500" />
                            )}
                          </>
                        );
                        if (child.locked) {
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                              title="Premium or upgrade required"
                            >
                              {content}
                            </Link>
                          );
                        }
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={clsx(
                              "flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors",
                              isActive
                                ? "bg-brand-500/15 text-brand-400"
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            )}
                          >
                            {content}
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
                className={clsx(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-500/15 text-brand-400"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                <span className="flex-1">{item.label}</span>
                {"badge" in item && item.badge && (
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-xs font-medium text-emerald-400">
                    {item.badge}
                  </span>
                )}
                {isActive && <ChevronRight className="ml-1 h-4 w-4 shrink-0 text-brand-400" />}
                {!isActive && !("badge" in item && item.badge) && (
                  <ChevronRight className="ml-1 h-4 w-4 shrink-0 text-gray-500 opacity-70" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-gray-200 p-4 min-w-0">
          <p className="text-xs text-gray-500 break-words">Powered by AI investment intelligence</p>
          <p className="mt-0.5 text-xs text-gray-600 break-words">Data → Decisions · Automation → Trust</p>
        </div>
      </div>
    </aside>
  );
}
