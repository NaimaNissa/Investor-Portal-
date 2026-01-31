# Investor Portal

An **AI-powered investment intelligence platform** that turns data into decisions, automation into scale, and transparency into trust.

## Overview

This portal is built around a **decision-first** experience: every screen answers *"What should I do next?"* with clear actions, real-time KPIs, and AI insights.

### MVP (Phase 1) features

- **Core portal** – Dashboard, portfolio, capital calls, messaging
- **AI investment intelligence** – Deal scoring, risk indicators, performance benchmarking
- **Automated capital calls** – Review and confirm with full audit trail
- **Real-time dashboards** – Performance vs benchmark, allocation, key multiples
- **Secure messaging** – GP–Investor communication with transparency

### Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Recharts** for performance charts
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Project structure

- `app/` – Routes and pages (dashboard, portfolio, intelligence, capital-calls, messaging, compliance, settings)
- `components/` – Reusable UI (Sidebar, Header, KpiCard, PerformanceChart, etc.)
- `lib/mockData.ts` – Demo data for client presentation

## Design principles

1. **Decision-first, not data-first** – Every screen surfaces the next action.
2. **Automation by default** – Capital calls, reminders, and confirmations are built in.
3. **Trust & transparency** – Audit trails, real-time updates, verifiable data.
4. **AI-native** – Intelligence embedded (deal scoring, insights, comparisons).

## Roadmap

- **Phase 2:** AI co-pilot, deal lab & stress testing, compliance center, engagement analytics
- **Phase 3:** ESG scoring, advanced global compliance, marketplace expansion

## Troubleshooting

### "Failed to load SWC binary" or "not a valid Win32 application"

Next.js uses a native SWC binary that can fail if it’s corrupted or from another OS/architecture. Try in order:

1. **Rebuild the SWC module** (quick fix):
   ```bash
   npm rebuild @next/swc-win32-x64-msvc
   ```
   Then run `npm run dev` again.

2. **Clean reinstall** (if the above doesn’t help):
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item -Force package-lock.json
   npm install
   npm run dev
   ```

3. **Windows:** If you use antivirus, add an exception for the project folder so the `.node` binary isn’t blocked.

4. **Node version:** Use Node 18.17+ or 20.x (LTS). Check with `node -v`.
