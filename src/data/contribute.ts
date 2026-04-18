export const contributorTracks = [
  {
    track: "Specification review",
    summary: "Read the draft, open issues, propose amendments via PR. Comments on edge cases and formal-methods review are especially welcome.",
    skills: "technical writing · formal reasoning · standards experience",
    entry: "github.com/NORA-BITSY/nora-canon",
  },
  {
    track: "Reference verifier authors",
    summary: "Implement the CANON.md §4 falsification protocol in a new language. Target: TypeScript, Rust, Go, Swift, Java. Each verifier should be runnable against the conformance test suite.",
    skills: "systems programming · cryptography · RFC implementation",
    entry: "discussions, then a new repo under NORA-BITSY",
  },
  {
    track: "Meridian-Canon internals",
    summary: "Enrichment extractors, refutation modules, adapters for additional data sources, retrieval tuning. Python, SQLite, vLLM, sentence-transformers.",
    skills: "Python · LLMs · information retrieval · SQL",
    entry: "Meridian repo (opening shortly — email to join early)",
  },
  {
    track: "Cryptography and canonicalization",
    summary: "Cross-language RFC 8785 validation. Ed25519 key lifecycle tooling. HSM and hardware-token integration. Transparency-log extensions.",
    skills: "cryptographic engineering · JSON canonicalization · transparency logs",
    entry: "nora-canon-verifier (stub forthcoming)",
  },
  {
    track: "Documentation and worked examples",
    summary: "Tutorials, onboarding material, domain-specific cookbooks. Especially for legal, journalism, and audit audiences.",
    skills: "technical writing · domain expertise · pedagogy",
    entry: "open issues labeled 'docs' in any repo",
  },
  {
    track: "Adversarial review",
    summary: "Break the spec. Break the implementation. Surface attacks on the attestation chain, the refutation harness, or the canonicalization path. Coordinated disclosure welcomed.",
    skills: "security research · LLM red-teaming · protocol analysis",
    entry: "security@norafoundation.io",
  },
] as const;
