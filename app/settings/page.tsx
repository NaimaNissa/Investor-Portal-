"use client";

import { Settings, User, Bell, Globe, Palette } from "lucide-react";
import { user } from "@/lib/mockData";

export default function SettingsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Settings
        </h1>
        <p className="mt-1 text-surface-400">
          Profile, notifications, and platform preferences.
        </p>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden">
        <div className="flex items-center gap-3 border-b border-surface-700 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Profile</h3>
            <p className="text-sm text-surface-400">{user.name} · {user.email}</p>
          </div>
        </div>
        <div className="grid gap-0 sm:grid-cols-2">
          <div className="flex items-center gap-3 border-b border-surface-700 p-6 sm:border-b-0 sm:border-r">
            <Bell className="h-5 w-5 text-surface-500" />
            <div>
              <p className="font-medium text-surface-100">Notifications</p>
              <p className="text-sm text-surface-500">Capital calls, distributions, messages</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-b border-surface-700 p-6 sm:border-b-0">
            <Globe className="h-5 w-5 text-surface-500" />
            <div>
              <p className="font-medium text-surface-100">Language & region</p>
              <p className="text-sm text-surface-500">English · USD · Eastern Time</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-surface-700 p-6 sm:border-r">
            <Palette className="h-5 w-5 text-surface-500" />
            <div>
              <p className="font-medium text-surface-100">Appearance</p>
              <p className="text-sm text-surface-500">Dark theme</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-surface-700 p-6">
            <Settings className="h-5 w-5 text-surface-500" />
            <div>
              <p className="font-medium text-surface-100">Preferences</p>
              <p className="text-sm text-surface-500">Dashboard layout, defaults</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
