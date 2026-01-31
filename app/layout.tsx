import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { ToastProvider } from "@/components/Toast";
import { LayoutSwitcher } from "@/components/LayoutSwitcher";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Investor Portal | AI-Powered Investment Intelligence",
  description:
    "An AI-powered investment intelligence platform that turns data into decisions, automation into scale, and transparency into trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-surface-950 text-surface-100 bg-grid-pattern`}
      >
        <AuthProvider>
          <ToastProvider>
            <LayoutSwitcher>{children}</LayoutSwitcher>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
