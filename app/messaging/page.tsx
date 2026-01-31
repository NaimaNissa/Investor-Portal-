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
    <div className="space-y-8 animate-fade-in">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Messaging
        </h1>
        <p className="mt-1 text-surface-400">
          Secure GP–Investor communication with full auditability.
        </p>
      </section>

      <section className="flex items-center gap-3 rounded-xl border border-brand-500/30 bg-brand-500/5 p-4">
        <Lock className="h-5 w-5 text-brand-400 shrink-0" />
        <p className="text-sm text-surface-200">
          All messages are encrypted and stored with a full audit trail for compliance.
        </p>
      </section>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden">
        <div className="border-b border-surface-700 p-4">
          <h3 className="font-semibold text-white">Inbox</h3>
          <p className="text-sm text-surface-500">From GP Relations & Compliance</p>
        </div>
        <ul className="divide-y divide-surface-700">
          {messages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => setSelectedId(selectedId === msg.id ? null : msg.id)}
              className="flex cursor-pointer items-center gap-4 p-4 transition-colors hover:bg-surface-800/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-700 text-surface-400">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-surface-100">{msg.from}</p>
                  {msg.unread && (
                    <span className="h-2 w-2 rounded-full bg-brand-500" />
                  )}
                </div>
                <p className="text-sm font-medium text-surface-300">{msg.subject}</p>
                <p className="mt-0.5 truncate text-sm text-surface-500">{msg.preview}</p>
              </div>
              <div className="shrink-0 text-xs text-surface-500">{msg.date}</div>
              <ArrowRight className="h-4 w-4 shrink-0 text-surface-500" />
            </li>
          ))}
        </ul>
        <div className="border-t border-surface-700 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Reply or start a new message…"
              className="flex-1 rounded-lg border border-surface-700 bg-surface-800 px-4 py-2.5 text-sm text-surface-100 placeholder:text-surface-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
            <button
              type="button"
              onClick={handleSend}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
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
