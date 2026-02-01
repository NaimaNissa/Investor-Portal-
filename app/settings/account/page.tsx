"use client";

import { User, Bell, Shield } from "lucide-react";
import { user } from "@/lib/mockData";

export default function AccountPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Account
        </h1>
        <p className="mt-1 text-gray-500">
          Layer 1: User authentication & role management · Profile, security, notifications.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2">
          <User className="h-5 w-5 text-brand-400" />
          Profile
        </h2>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
            <User className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-xs text-gray-600">{user.role}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <Bell className="h-5 w-5 text-brand-400" />
          <h3 className="mt-4 font-semibold text-gray-900">Notifications</h3>
          <p className="mt-2 text-sm text-gray-500">
            Capital calls, distributions, messages. Layer 3: Smart alerts.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <Shield className="h-5 w-5 text-brand-400" />
          <h3 className="mt-4 font-semibold text-gray-900">Security</h3>
          <p className="mt-2 text-sm text-gray-500">
            Password, 2FA, session management. Trust & transparency.
          </p>
        </div>
      </section>
    </div>
  );
}
