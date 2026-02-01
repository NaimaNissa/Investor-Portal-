"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

type ToastMessage = { id: number; text: string; type?: "success" | "info" | "demo" };

const ToastContext = createContext<((text: string, type?: ToastMessage["type"]) => void) | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) return () => {};
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const toast = useCallback((text: string, type: ToastMessage["type"] = "demo") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        <div className="pointer-events-auto flex flex-col gap-2">
          {toasts.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-xl animate-fade-in"
            >
              <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
              <span className="flex-1">{t.text}</span>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                className="rounded p-1 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}
