"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, Send, Lock, ArrowRight } from "lucide-react";
import { messages } from "@/lib/mockData";
import { useToast } from "@/components/Toast";

export default function MessagingPage() {
  const toast = useToast();
  const [replyText, setReplyText] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSend = () => {
    if (!replyText.trim()) return;
    toast("Message sent. Full audit trail recorded.");
    setReplyText("");
    setSelectedId(null);
  };
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          Messaging
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          Secure GP–Investor communication with full auditability.
        </p>
      </section>

      <section className="flex items-start sm:items-center gap-3 rounded-xl border border-brand-500/30 bg-brand-500/5 p-3 sm:p-4 min-w-0 overflow-hidden">
        <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-xs sm:text-sm text-gray-800">
          All messages are encrypted and stored with a full audit trail for compliance.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden min-w-0">
        <div className="border-b border-gray-200 p-3 sm:p-4">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Inbox</h3>
          <p className="text-xs sm:text-sm text-gray-600">From GP Relations & Compliance</p>
        </div>
        <ul className="divide-y divide-gray-200">
          {messages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => setSelectedId(selectedId === msg.id ? null : msg.id)}
              className="flex cursor-pointer items-center gap-3 sm:gap-4 p-3 sm:p-4 transition-colors hover:bg-gray-100 min-w-0"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{msg.from}</p>
                  {msg.unread && (
                    <span className="h-2 w-2 rounded-full bg-brand-500 shrink-0" />
                  )}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 truncate">{msg.subject}</p>
                <p className="mt-0.5 truncate text-xs sm:text-sm text-gray-600">{msg.preview}</p>
              </div>
              <div className="shrink-0 text-xs text-gray-600 hidden sm:block">{msg.date}</div>
              <ArrowRight className="h-4 w-4 shrink-0 text-gray-600 hidden sm:block" />
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row gap-2 min-w-0">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Reply or start a new message…"
              className="flex-1 min-w-0 rounded-lg border border-gray-200 bg-gray-100 px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 placeholder:text-gray-600 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
            <button
              type="button"
              onClick={handleSend}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors shrink-0"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
