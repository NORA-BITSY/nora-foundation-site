export const faqItems = [
  {
    q: "Is NORA Foundation a 501(c)(3)?",
    a: "Not yet. We are pursuing fiscal sponsorship with a 501(c)(3) host so that institutional donors can make tax-deductible contributions. Until that status is confirmed in writing, we do not represent donations as tax-deductible. For grantmakers: please reach out and we will route through an appropriate fiscal host or provide a direct path.",
  },
  {
    q: "Is Canon ready to use in production?",
    a: "Canon is published as draft-rfc at v0.1.0. Breaking changes are possible before v1.0. Issuers and verifiers should expect to track amendments until ratification. The schema and falsification protocol are already stable enough to build against.",
  },
  {
    q: "Is Meridian-Canon an application I can install today?",
    a: "Not today. Meridian-Canon is the reference implementation under active construction. The architecture and specification are public, and an executable build is coming. Early collaborators and partners who wish to pilot against their own corpora should contact us directly.",
  },
  {
    q: "What does “verifiable reasoning” mean here?",
    a: "A reasoning artifact is verifiable when any recipient, using only the artifact plus ordinary network access, can confirm or refute its integrity without cooperation from the issuer. Canon specifies the artifact shape and the protocol that makes this possible.",
  },
  {
    q: "Is this only useful for legal cases?",
    a: "No. Legal and evidentiary review is the most demanding proving ground and our flagship use case, but Canon is domain-agnostic. It applies wherever retrieval, interpretation, or synthesis of information must be checkable by a party other than the system that produced it — journalism, research, compliance and audit, archival work, and regulatory review.",
  },
  {
    q: "Does this compete with existing AI transparency or watermarking systems?",
    a: "It addresses a different layer. Watermarking tells you a piece of content was produced by a model. Canon addresses the far harder question of whether a reasoning chain built on top of content can be independently audited — what sources it relied on, what inference types it used, what gaps it acknowledged, what adversarial challenges it survived. The two are complementary.",
  },
  {
    q: "Why a public standard rather than a product?",
    a: "Verifiability is only meaningful when recipients can verify without trusting the issuer. That requires a specification any implementer can build against without permission. If only NORA's implementation could emit NORA artifacts, the trust chain would collapse at the issuer's boundary. Canon is published CC0 so this outcome is structurally impossible.",
  },
  {
    q: "How can I be sure my donation is used well?",
    a: "Once fiscal sponsorship is in place, Open Collective will provide a public ledger of all disbursements. Until then, major funders can request line-item reporting. The categories funds support are listed on the donate page — spec drafting, reference implementations, verifier tooling, adversarial review, documentation, and ecosystem development.",
  },
];
