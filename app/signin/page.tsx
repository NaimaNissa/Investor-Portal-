"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

export default function SignInPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputsReady, setInputsReady] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 300));
    const success = login(username, password);
    setLoading(false);
    if (success) {
      router.push("/");
      router.refresh();
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 sm:p-6 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-md min-w-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600">
            <Sparkles className="h-5 w-5 text-gray-900" />
          </div>
          <span className="text-lg font-semibold text-gray-900">Investor Portal</span>
        </Link>

        <div className="rounded-2xl border border-gray-200 bg-gray-50/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl w-full">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
            Sign in
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Enter your credentials to access the portal.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" autoComplete="off">
            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-800">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
                <input
                  id="username"
                  type="text"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setInputsReady(true)}
                  readOnly={!inputsReady}
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 read-only:bg-gray-50"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setInputsReady(true)}
                  readOnly={!inputsReady}
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 read-only:bg-gray-50"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 py-2.5 text-sm font-medium text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:pointer-events-none transition-colors"
            >
              {loading ? "Signing in…" : "Sign in"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="font-medium text-brand-400 hover:text-brand-300">
              Sign up
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-600">
          AI-powered investment intelligence · Data → Decisions · Trust
        </p>
      </div>
    </div>
  );
}
