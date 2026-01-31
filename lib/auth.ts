// Default demo credentials (for client presentation only)
export const DEFAULT_LOGIN_EMAIL = "info@fredocloud.com";
export const DEFAULT_LOGIN_PASSWORD = "nWu6t77HW9!PsiD";

export const AUTH_STORAGE_KEY = "investor-portal-auth";

export type AuthUser = {
  email: string;
  name: string;
  role: string;
};

export function validateCredentials(email: string, password: string): boolean {
  return (
    email.trim().toLowerCase() === DEFAULT_LOGIN_EMAIL.toLowerCase() &&
    password === DEFAULT_LOGIN_PASSWORD
  );
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
