// Support options. Only ship a channel once it is actually live.
// Placeholders are intentionally omitted from the UI until accounts exist.

export const supportChannels = [
  {
    key: "github_sponsors",
    live: true,
    label: "GitHub Sponsors",
    href: "https://github.com/sponsors/NORA-BITSY",
    cadence: "recurring or one-time",
    summary: "The simplest way to support the work on a monthly basis. Funds the standard, the implementation, and verifier tooling.",
  },
  {
    key: "open_collective",
    live: false,
    label: "Open Collective",
    cadence: "transparent ledger",
    summary: "Fiscal hosting with public ledger and granular disbursement tracking. Coming soon — we are pursuing fiscal sponsorship.",
  },
  {
    key: "stripe",
    live: false,
    label: "Card or ACH",
    cadence: "one-time or recurring",
    summary: "Direct card and bank support via Stripe. Coming soon once our payments entity is finalized.",
  },
  {
    key: "institutional",
    live: true,
    label: "Institutional funding",
    href: "mailto:grants@norafoundation.io?subject=NORA%20Foundation%20%E2%80%94%20Institutional%20funding",
    cadence: "grants, sponsorships, partnerships",
    summary: "For foundations, university labs, civic-tech funders, and corporate philanthropy programs. We welcome structured conversations about multi-year support.",
  },
] as const;

export const fundingAreas = [
  {
    area: "Specification drafting",
    detail: "Drafting, refinement, and stewardship of the Canon standard toward a stable v1.0 ratification.",
  },
  {
    area: "Reference implementations",
    detail: "Meridian-Canon — the first end-to-end implementation — and cross-language reference verifiers (TypeScript, Rust, Go).",
  },
  {
    area: "Verifier tooling",
    detail: "Standalone falsification tools, a browser-based attestation walker, and developer libraries for issuing and verifying Canon artifacts.",
  },
  {
    area: "Adversarial review",
    detail: "External security and reasoning audits. Paid engagements with researchers who stress-test specification edge cases and cryptographic soundness.",
  },
  {
    area: "Documentation and education",
    detail: "Tutorials, walkthroughs, worked examples for legal, journalism, research, and audit audiences; onboarding materials for verifier authors.",
  },
  {
    area: "Ecosystem development",
    detail: "Grants to third-party implementers. Travel and publication costs for conferences where adoption is shaped (standards bodies, legal-tech venues, information-retrieval conferences).",
  },
] as const;
