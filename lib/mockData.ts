// Mock data for client demo - decision-first, real-time feel

export const user = {
  name: "Alex Chen",
  role: "Investor",
  email: "alex.chen@example.com",
  avatar: null,
  lastLogin: "2025-01-31T08:30:00Z",
};

export const actionItems = [
  {
    id: "1",
    title: "Confirm capital call – Fund VII",
    description: "Due in 5 days. Amount: $125,000",
    priority: "high",
    dueDate: "2025-02-05",
    type: "capital_call",
    status: "pending",
  },
  {
    id: "2",
    title: "Review AI deal comparison",
    description: "3 opportunities match your criteria",
    priority: "medium",
    type: "intelligence",
    status: "pending",
  },
  {
    id: "3",
    title: "Sign distribution acknowledgment",
    description: "Q4 distribution from Growth Fund",
    priority: "medium",
    type: "document",
    status: "pending",
  },
  {
    id: "4",
    title: "Update KYC documentation",
    description: "Annual refresh required by Mar 15",
    priority: "low",
    dueDate: "2025-03-15",
    type: "compliance",
    status: "pending",
  },
];

export const portfolioSummary = {
  totalCommitment: 4250000,
  totalDeployed: 3820000,
  totalDistributions: 890000,
  currentValue: 4180000,
  netIRR: 18.2,
  netTVPI: 1.33,
  netDPI: 0.23,
  currency: "USD",
};

export const performanceData = [
  { month: "Jul", value: 3.2, benchmark: 2.1 },
  { month: "Aug", value: 4.1, benchmark: 2.8 },
  { month: "Sep", value: 2.9, benchmark: 2.5 },
  { month: "Oct", value: 5.2, benchmark: 3.0 },
  { month: "Nov", value: 4.8, benchmark: 3.2 },
  { month: "Dec", value: 6.1, benchmark: 3.5 },
  { month: "Jan", value: 3.5, benchmark: 2.9 },
];

export const allocationByFund = [
  { name: "Growth Equity VII", value: 1850000, share: 43.5, irr: 19.2 },
  { name: "Venture Partners IV", value: 1200000, share: 28.2, irr: 22.1 },
  { name: "Infrastructure Fund II", value: 800000, share: 18.8, irr: 12.4 },
  { name: "Credit Opportunities", value: 400000, share: 9.5, irr: 8.7 },
];

export const aiInsights = [
  {
    id: "1",
    type: "deal_score",
    title: "Deal scoring update",
    summary: "2 new opportunities scored above 85. Growth Equity VII co-invest and Venture IV follow-on.",
    score: 87,
    trend: "up",
    timestamp: "2025-01-31T10:00:00Z",
  },
  {
    id: "2",
    type: "risk",
    title: "Portfolio risk alert",
    summary: "Concentration in tech slightly above target. Consider rebalancing in next quarter.",
    score: 72,
    trend: "neutral",
    timestamp: "2025-01-30T14:00:00Z",
  },
  {
    id: "3",
    type: "benchmark",
    title: "Performance vs benchmark",
    summary: "Your portfolio is outperforming the blended benchmark by 2.4% (trailing 12 months).",
    score: 92,
    trend: "up",
    timestamp: "2025-01-30T09:00:00Z",
  },
];

export const capitalCalls = [
  {
    id: "cc1",
    fund: "Growth Equity VII",
    amount: 125000,
    dueDate: "2025-02-05",
    status: "pending",
    currency: "USD",
    percentOfCommitment: 2.5,
  },
  {
    id: "cc2",
    fund: "Venture Partners IV",
    amount: 75000,
    dueDate: "2025-02-12",
    status: "pending",
    currency: "USD",
    percentOfCommitment: 1.8,
  },
];

export const recentActivity = [
  { id: "1", action: "Distribution received", detail: "Growth Equity VII – $42,500", time: "2 hours ago" },
  { id: "2", action: "Document viewed", detail: "Q4 Report – Venture IV", time: "5 hours ago" },
  { id: "3", action: "Capital call issued", detail: "Growth Equity VII – $125,000", time: "1 day ago" },
  { id: "4", action: "AI insight generated", detail: "Deal comparison updated", time: "1 day ago" },
];

export const messages = [
  {
    id: "m1",
    from: "GP Relations",
    subject: "Fund VII Annual Meeting – Save the date",
    preview: "We invite you to the annual investor meeting on March 15…",
    date: "2025-01-30",
    unread: true,
  },
  {
    id: "m2",
    from: "Compliance",
    subject: "KYC refresh reminder",
    preview: "Your annual KYC refresh is due by March 15. Please…",
    date: "2025-01-29",
    unread: false,
  },
];

export const dealsForComparison = [
  { id: "d1", name: "Co-Invest – Growth VII", score: 87, sector: "Technology", stage: "Growth", irrProjected: 22 },
  { id: "d2", name: "Follow-on – Venture IV", score: 84, sector: "Healthcare", stage: "Series B", irrProjected: 28 },
  { id: "d3", name: "New fund commitment", score: 81, sector: "Infrastructure", stage: "Fund", irrProjected: 14 },
];
