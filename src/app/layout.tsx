import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Foundry",
  description: "Modular AI agents for crypto research and intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased">
        <nav className="border-b border-slate-800 px-6 py-4">
          <div className="mx-auto max-w-7xl flex items-center gap-3">
            <span className="text-2xl">⚗️</span>
            <span className="text-xl font-bold text-white">Agent Foundry</span>
            <span className="ml-auto text-sm text-slate-500">v0.1.0</span>
          </div>
        </nav>
        <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
        <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Agent Foundry — Modular AI Research Agents
        </footer>
      </body>
    </html>
  );
}
