"use client";

import { Calendar, Video, MapPin, Zap } from "lucide-react";

const events = [
  { id: "1", name: "Fund VII Annual Meeting", date: "2025-03-15", type: "In-person", location: "New York" },
  { id: "2", name: "Q1 Investor Webinar", date: "2025-02-20", type: "Webinar", location: "Online" },
  { id: "3", name: "Compliance & KYC Update", date: "2025-02-10", type: "Webinar", location: "Online" },
];

export default function EventsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Events
        </h1>
        <p className="mt-1 text-surface-400">
          Layer 6: Engagement · Investor briefings, webinars, and important dates.
        </p>
      </section>

      <section className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <Zap className="h-5 w-5 text-brand-400 shrink-0" />
          <div>
            <h2 className="font-semibold text-white">Time-zone aware</h2>
            <p className="text-sm text-surface-400">
              All events are shown in your local time. Global investor-friendly experience (Layer 5).
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Calendar className="h-5 w-5 text-brand-400" />
          Upcoming events
        </h2>
        <ul className="mt-4 space-y-3">
          {events.map((e) => (
            <li
              key={e.id}
              className="flex items-center gap-4 rounded-xl border border-surface-700 bg-surface-900/50 p-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15">
                {e.type === "Webinar" ? (
                  <Video className="h-6 w-6 text-brand-400" />
                ) : (
                  <MapPin className="h-6 w-6 text-brand-400" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-white">{e.name}</p>
                <p className="text-sm text-surface-500">
                  {new Date(e.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {e.location}
                </p>
              </div>
              <span className="rounded bg-surface-700 px-2 py-1 text-xs font-medium text-surface-300">
                {e.type}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
