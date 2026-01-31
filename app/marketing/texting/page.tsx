"use client";

import { useState } from "react";
import {
  MessageCircle,
  Send,
  Smartphone,
  Zap,
  Calendar,
  DollarSign,
  FileCheck,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/components/Toast";

type Message = {
  id: string;
  type: "outbound" | "inbound";
  body: string;
  time: string;
  status?: "sent" | "delivered" | "read";
};

const demoThread: Message[] = [
  {
    id: "1",
    type: "outbound",
    body: "Capital call reminder: Growth Equity VII – $125,000 due Feb 5. Confirm in portal or reply YES.",
    time: "10:30 AM",
    status: "delivered",
  },
  {
    id: "2",
    type: "inbound",
    body: "YES",
    time: "10:32 AM",
  },
  {
    id: "3",
    type: "outbound",
    body: "Thanks! Confirmation received. Remittance instructions sent to your email.",
    time: "10:32 AM",
    status: "sent",
  },
];

const contextTemplates = [
  {
    id: "capital-call",
    label: "Capital call reminder",
    icon: DollarSign,
    preview: "Capital call – [Fund] – [Amount] due [Date]. Confirm in portal.",
  },
  {
    id: "distribution",
    label: "Distribution notice",
    icon: FileCheck,
    preview: "Distribution processed – [Fund]. Details in portal.",
  },
  {
    id: "document",
    label: "Document ready",
    icon: FileCheck,
    preview: "New document: [Name]. View in portal.",
  },
  {
    id: "event",
    label: "Event reminder",
    icon: Calendar,
    preview: "Reminder: [Event] on [Date]. Join link in portal.",
  },
];

export default function TextingPage() {
  const toast = useToast();
  const [thread, setThread] = useState<Message[]>(demoThread);
  const [composeText, setComposeText] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleSend = () => {
    const text = composeText.trim() || (selectedTemplate ? contextTemplates.find((t) => t.id === selectedTemplate)?.preview : "");
    if (!text) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      type: "outbound",
      body: text,
      time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      status: "sent",
    };
    setThread((prev) => [...prev, newMsg]);
    setComposeText("");
    setSelectedTemplate(null);
    toast("SMS sent. Context-aware delivery and audit trail recorded.");
  };

  const handleUseTemplate = (id: string) => {
    const t = contextTemplates.find((x) => x.id === id);
    if (t) {
      setSelectedTemplate(id);
      setComposeText(t.preview);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0 max-w-full">
      <section className="min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white flex items-center gap-2 flex-wrap">
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-brand-400 shrink-0" />
          Texting
        </h1>
        <p className="mt-1 text-sm sm:text-base text-surface-400">
          Send context-aware SMS reminders and updates to investors. All messages are logged for compliance.
        </p>
      </section>

      <section className="rounded-xl border border-brand-500/20 bg-brand-500/5 p-4 sm:p-5 lg:p-6 min-w-0 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 min-w-0">
          <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
          <div className="min-w-0">
            <h2 className="font-semibold text-white text-sm sm:text-base">Context-aware messaging</h2>
            <p className="text-xs sm:text-sm text-surface-400">
              SMS is triggered by events (capital calls, distributions, documents, events). Recipients can reply for quick confirmation—e.g. “YES” to confirm a capital call.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3 min-w-0">
        <div className="lg:col-span-2 space-y-4 min-w-0 overflow-hidden">
          <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
            <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-brand-400 shrink-0" />
            Demo thread – Investor (demo number)
          </h2>
          <div className="rounded-xl border border-surface-700 bg-surface-900/50 overflow-hidden">
            <div className="border-b border-surface-700 p-3 bg-surface-800/50">
              <p className="text-sm font-medium text-white">+1 (555) 000-0000</p>
              <p className="text-xs text-surface-500">SMS conversation · All messages logged</p>
            </div>
            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
              {thread.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === "outbound" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-2.5 ${
                      msg.type === "outbound"
                        ? "bg-brand-500/20 text-brand-100 rounded-br-sm"
                        : "bg-surface-700 text-surface-100 rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.body}</p>
                    <div className="mt-1 flex items-center gap-2 justify-end">
                      <span className="text-xs text-surface-500">{msg.time}</span>
                      {msg.type === "outbound" && msg.status && (
                        <span className="flex items-center gap-0.5 text-xs text-surface-400">
                          <CheckCircle className="h-3 w-3" />
                          {msg.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-surface-700 p-3 sm:p-4 flex flex-col sm:flex-row gap-2 min-w-0">
              <input
                type="text"
                value={composeText}
                onChange={(e) => setComposeText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                placeholder="Type a message or use a template below…"
                className="flex-1 rounded-lg border border-surface-600 bg-surface-800 px-4 py-2.5 text-sm text-surface-100 placeholder:text-surface-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!composeText.trim()}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Context templates</h2>
          <p className="text-sm text-surface-500">
            Pre-built, context-aware messages. Edit before sending.
          </p>
          <ul className="space-y-2">
            {contextTemplates.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => handleUseTemplate(t.id)}
                  className={`w-full flex items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
                    selectedTemplate === t.id
                      ? "border-brand-500 bg-brand-500/10 text-white"
                      : "border-surface-700 bg-surface-900/50 text-surface-200 hover:border-surface-600 hover:bg-surface-800/50"
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
                    <t.icon className="h-4 w-4 text-brand-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{t.label}</p>
                    <p className="text-xs text-surface-500 truncate">{t.preview}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
        <h3 className="font-semibold text-white">How it works (demo)</h3>
        <ul className="mt-3 space-y-2 text-sm text-surface-400">
          <li>• <strong className="text-surface-200">Automated:</strong> Capital call and distribution reminders can be sent automatically with a configurable delay.</li>
          <li>• <strong className="text-surface-200">Reply handling:</strong> Replies like “YES” can confirm actions (e.g. capital call); responses are logged and can trigger workflows.</li>
          <li>• <strong className="text-surface-200">Audit trail:</strong> Every SMS sent and received is stored with timestamp and recipient for compliance.</li>
          <li>• <strong className="text-surface-200">Opt-in:</strong> Investors opt in to SMS; preferences are managed in Account settings.</li>
        </ul>
      </section>
    </div>
  );
}
