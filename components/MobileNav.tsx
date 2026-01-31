"use client";

import { useState } from "react";
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
      { href: "/resources/framework", label: "Framework" },
    ],
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]);
  const pathname = usePathname();

  const toggle = (href: string) => {
    setExpanded((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 text-surface-400 hover:bg-surface-800 hover:text-surface-100"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-surface-950/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className="fixed left-0 top-0 z-50 h-full w-72 border-r border-surface-800 bg-surface-900 shadow-xl overflow-y-auto">
            <div className="flex h-16 items-center justify-between border-b border-surface-800 px-4">
              <span className="font-semibold text-white">Investor Portal</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-surface-400 hover:bg-surface-800 hover:text-surface-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-0.5 p-4">
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
                          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium cursor-pointer",
                          isParentActive ? "bg-brand-500/15 text-brand-400" : "text-surface-400 hover:bg-surface-800 hover:text-surface-100"
                        )}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        <span className="flex-1">{item.label}</span>
                        {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                      </div>
                      {isExpanded && item.children && (
                        <div className="ml-4 mt-0.5 border-l border-surface-700 pl-3 space-y-0.5">
                          {item.children.map((child) => {
                            const isActive = pathname === child.href;
                            if (child.locked) {
                              return (
                                <div
                                  key={child.href}
                                  className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-surface-500"
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
                                  "flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium",
                                  isActive ? "bg-brand-500/15 text-brand-400" : "text-surface-400 hover:bg-surface-800 hover:text-surface-100"
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
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
                      isActive ? "bg-brand-500/15 text-brand-400" : "text-surface-400 hover:bg-surface-800 hover:text-surface-100"
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
            <div className="border-t border-surface-800 p-4">
              <p className="text-xs text-surface-500">Powered by AI investment intelligence</p>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
