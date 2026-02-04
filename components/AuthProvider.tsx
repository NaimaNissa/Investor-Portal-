"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  validateCredentials,
  getStoredUser,
  setStoredUser,
  clearStoredUser,
  type AuthUser,
} from "@/lib/auth";

type AuthContextValue = {
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isReady: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setUser(getStoredUser());
    setIsReady(true);
  }, []);

  const login = useCallback((username: string, password: string): boolean => {
    if (!validateCredentials(username, password)) return false;
    const authUser: AuthUser = {
      email: "sinbad",
      name: "Sinbad",
      role: "Investor",
    };
    setUser(authUser);
    setStoredUser(authUser);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    clearStoredUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isReady }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
