// Interim transparency disclosure.
// Update numeric values as they change; a full annual report will follow
// the first complete fiscal year.

export const reportingPeriod = {
  label: "Formation to date",
  start: "2026-04-17",
  asOf: "2026-04-18",
};

export const governance = {
  structure: "Solo founder, pre-incorporation. Advisory board and (where appropriate) formal board to be established alongside fiscal sponsorship.",
  founder: "J. Patrick White",
  fiscalSponsor: "Pending — applications in progress with 501(c)(3) fiscal hosts.",
  conflictsOfInterest: "No paid staff. No related-party transactions. No vendor relationships beyond arm's-length open-source tooling.",
};

// Dollar figures are interim and approximate; they will be replaced by
// audited numbers once fiscal sponsorship is in place and a full year
// has closed.
export const finances = {
  raised: [
    { source: "GitHub Sponsors", amount: 0, status: "channel live; payout KYC pending at Stripe" },
    { source: "Institutional grants", amount: 0, status: "outreach in progress" },
    { source: "Open Collective", amount: 0, status: "application in progress" },
  ],
  spent: [
    { category: "Domain registration (norafoundation.io)", amount: 11, note: "Annual registration via Namecheap through Cloudflare DNS." },
    { category: "Infrastructure", amount: 0, note: "Vercel free tier; GitHub public repos; no compute-spend to date." },
    { category: "GPU time (development)", amount: 0, note: "Pending; first major expense will be reference-implementation enrichment passes." },
    { category: "Labor", amount: 0, note: "All founder labor to date is uncompensated." },
  ],
  commitments: [
    { category: "Reference-implementation GPU passes (estimated)", amount: "≤ 50", note: "Cloud GPU rental for Meridian-Canon enrichment and refutation pilots over the next six months." },
    { category: "Domain renewals + infrastructure", amount: "≤ 100 / yr", note: "Recurring baseline costs." },
    { category: "Adversarial review engagements", amount: "TBD", note: "Budgeted contingent on funds raised; first engagement targeted for Q3 2026." },
  ],
};

export const activitiesToDate = [
  { date: "2026-04-17", activity: "Canon v0.1.0 (draft-rfc) specification published under CC0 1.0 Universal at github.com/NORA-BITSY/nora-canon." },
  { date: "2026-04-17", activity: "JSON Schema 2020-12 published alongside the specification." },
  { date: "2026-04-18", activity: "Meridian-Canon executive summary published. Reference-implementation architecture specified across eight phases." },
  { date: "2026-04-18", activity: "NORA Foundation website launched at norafoundation.io. Ten public routes covering mission, standard, reference implementation, funding, contribution, and governance disclosures." },
  { date: "2026-04-18", activity: "Meridian-Canon reference implementation: Phase A (Canon foundation layer) in progress." },
];

export const forwardPlan = [
  { horizon: "Q2 2026", items: [
    "Complete Meridian-Canon Phases A–H on the existing reference corpus.",
    "Publish standalone nora-canon-verifier package to npm and PyPI.",
    "Finalize fiscal sponsorship with a 501(c)(3) host.",
    "First adversarial-review engagement with an external security researcher.",
  ]},
  { horizon: "Q3 2026", items: [
    "Canon v1.0 ratification window open for public comment.",
    "Cross-language canonicalization cross-validation (Python / TypeScript / Rust).",
    "First institutional pilot with a legal or journalism partner.",
    "Publish first quarterly activity report.",
  ]},
  { horizon: "Q4 2026 / 2027", items: [
    "First full fiscal-year financial report (audited if scale warrants).",
    "Seed grants to independent verifier authors.",
    "Broader foundation governance: advisory board, documented policies.",
  ]},
];
