// Simple demo credentials
export const DEMO_USERNAME = "Sinbad";
export const DEMO_PASSWORD = "1234";

export const AUTH_STORAGE_KEY = "investor-portal-auth";

export type AuthUser = {
  email: string;
  name: string;
  role: string;
};

export function validateCredentials(username: string, password: string): boolean {
  return username.trim() === DEMO_USERNAME && password === DEMO_PASSWORD;
}

export function getStoredUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function setStoredUser(user: AuthUser): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
