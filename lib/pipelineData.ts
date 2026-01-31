export const pipelineStages = [
  { id: "lead", name: "Lead", count: 12 },
  { id: "qualified", name: "Qualified", count: 8 },
  { id: "commitment", name: "Commitment", count: 4 },
  { id: "closed", name: "Closed", count: 2 },
] as const;

export type PipelineStageId = (typeof pipelineStages)[number]["id"];

export const pipelineStageItems: Record<PipelineStageId, { name: string; detail: string }[]> = {
  lead: [
    { name: "Acme Family Office", detail: "Intro call scheduled" },
    { name: "Pacific Ventures LLC", detail: "Initial outreach sent" },
    { name: "Northern Capital Partners", detail: "Awaiting response" },
    { name: "Summit Wealth Advisors", detail: "Meeting requested" },
    { name: "Horizon Investments", detail: "Document request sent" },
  ],
  qualified: [
    { name: "Ridge Creek Capital", detail: "DD in progress" },
    { name: "Meridian Fund LP", detail: "Term sheet sent" },
    { name: "Atlas Family Office", detail: "KYC complete" },
    { name: "Cascade Investors", detail: "Legal review" },
  ],
  commitment: [
    { name: "Stellar Growth Fund", detail: "Commitment letter signed" },
    { name: "Apex Capital LLC", detail: "Wire pending" },
    { name: "Vertex Partners", detail: "Docs executed" },
  ],
  closed: [
    { name: "Pinnacle Capital", detail: "Closed · Fund VII" },
    { name: "Summit Growth LP", detail: "Closed · Fund VII" },
  ],
};
