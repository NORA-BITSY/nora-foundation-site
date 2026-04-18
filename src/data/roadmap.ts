export type RoadmapTag = "shipped" | "in progress" | "next" | "future";

export const roadmap: {
  tag: RoadmapTag;
  date: string;
  title: string;
  note: string;
}[] = [
  {
    tag: "shipped",
    date: "April 2026",
    title: "Canon v0.1.0 draft-rfc",
    note: "Specification, JSON schema, and CC0 licence published. Open for public comment and pull-request amendments at github.com/NORA-BITSY/nora-canon.",
  },
  {
    tag: "in progress",
    date: "Q2 2026",
    title: "Meridian-Canon reference implementation",
    note: "Phases A–H: foundation, witness wrapping, findings extractors, refutation harness, indexing, search and brief emission, standalone verifier. Built against a demanding real-world archival and evidentiary workload as its first proving ground.",
  },
  {
    tag: "next",
    date: "Q3 2026",
    title: "Canon v1.0 ratification",
    note: "Stable specification. Reference verifiers published as npm and PyPI packages. Multi-language canonicalization cross-validation complete.",
  },
  {
    tag: "next",
    date: "Q3–Q4 2026",
    title: "Ecosystem tooling",
    note: "Browser-based Attestation walker. Domain-specific challenge vocabularies for legal, journalism, and audit. Editor integrations and CLI helpers for issuer authors.",
  },
  {
    tag: "future",
    date: "2027",
    title: "Federation, hardware keys, institutional adopters",
    note: "Multi-issuer registries with revocation transparency. HSM / YubiKey signing paths. Early institutional adopters across legal, academic, and civic-tech contexts.",
  },
];
