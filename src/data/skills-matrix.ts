// Skills matrix: a domain map of real, evidenced skills, grouped by
// where they show up in the work. This is not a language-fluency ranking
// (no bars, no percentages, no "expert/intermediate" labels). Each skill
// links to the showcase(s) that actually demonstrate it, so a claim here
// is 1 click away from the spec, the code, or the numbers behind it.

export interface SkillEvidence {
  /** Short label shown as a tag, usually a showcase title. */
  label: string;
  /** Link to the showcase page. Omit for evidence with no dedicated page (e.g. Cisco DevRel background). */
  href?: string;
}

export interface Skill {
  name: string;
  evidence: SkillEvidence[];
}

export interface SkillDomain {
  id: string;
  name: string;
  summary: string;
  skills: Skill[];
}

const financeAgent: SkillEvidence = { label: "Finance Agent", href: "/work/finance-agent/" };
const mtgCommander: SkillEvidence = { label: "MTG Commander AI", href: "/work/mtgcommander/" };
const novelFlame: SkillEvidence = { label: "NovelFlame", href: "/work/novelflame/" };
const familyApp: SkillEvidence = { label: "Family App", href: "/work/family-app/" };
const sierraStoryCo: SkillEvidence = { label: "Sierra Story Co", href: "/work/sierra-story-co/" };
const ciscoDevRel: SkillEvidence = { label: "14 years, Cisco DevRel" };

export const skillDomains: SkillDomain[] = [
  {
    id: "ai-agentic",
    name: "AI / Agentic",
    summary: "Multi-agent systems, retrieval, tool servers, and the guardrails that keep them honest.",
    skills: [
      {
        name: "Multi-agent orchestration (parallel personas + deterministic judge)",
        evidence: [financeAgent],
      },
      {
        name: "RAG pipeline design (chunking, embeddings, pgvector retrieval)",
        evidence: [mtgCommander],
      },
      {
        name: "MCP tool servers (FastMCP, usage-audited tool routing)",
        evidence: [mtgCommander],
      },
      {
        name: "Multi-provider LLM routing and failover (Anthropic, OpenAI, DeepSeek, Gemini, Groq, xAI)",
        evidence: [financeAgent, familyApp, novelFlame],
      },
      {
        name: "LLM-as-judge evals and hallucination detection (batch validation against ground truth)",
        evidence: [mtgCommander, financeAgent],
      },
      {
        name: "Agent memory systems (dual-scope, per-user and per-household)",
        evidence: [familyApp],
      },
      {
        name: "AI safety guardrails (defense-in-depth, static analysis + runtime allowlists)",
        evidence: [financeAgent],
      },
      {
        name: "AI content-safety filtering (moderation API + custom rules, tiered response)",
        evidence: [novelFlame],
      },
    ],
  },
  {
    id: "backend-data",
    name: "Backend / Data",
    summary: "Services, schemas, and the data-quality work that makes an AI system trustworthy.",
    skills: [
      {
        name: "Python service design (typed agent loops, systemd-supervised daemons)",
        evidence: [financeAgent],
      },
      {
        name: "Postgres + pgvector data modeling at scale (33K+ embedded records)",
        evidence: [mtgCommander],
      },
      {
        name: "Node.js / TypeScript backends with tool-calling agent loops",
        evidence: [familyApp],
      },
      {
        name: "SQLite (WAL mode) for local-first, single-writer systems",
        evidence: [financeAgent],
      },
      {
        name: "Row-level security and multi-tenant auth (Supabase Auth + RLS)",
        evidence: [familyApp, mtgCommander, novelFlame],
      },
      {
        name: "Batch data-quality pipelines (LLM-validated cleanup across tens of thousands of records)",
        evidence: [mtgCommander],
      },
      {
        name: "Schema-as-code (Drizzle ORM, version-controlled migrations)",
        evidence: [novelFlame],
      },
    ],
  },
  {
    id: "infra-devops",
    name: "Infra / DevOps",
    summary: "Infrastructure as code, CI/CD, and the observability that catches failures before a user does.",
    skills: [
      {
        name: "Infrastructure as Code (OpenTofu, encrypted state, SOPS/age-encrypted secrets)",
        evidence: [novelFlame],
      },
      {
        name: "CI/CD pipeline design (required status checks gating merges to main)",
        evidence: [novelFlame],
      },
      {
        name: "Containerization (multi-stage Docker builds, layer-cached CI, GHCR)",
        evidence: [novelFlame],
      },
      {
        name: "Cloud deployment (Railway, Vercel, Cloudflare R2/CDN/Turnstile)",
        evidence: [mtgCommander, familyApp, novelFlame],
      },
      {
        name: "Observability (structured logging, health-check crons, circuit breakers)",
        evidence: [familyApp],
      },
      {
        name: "Self-hosted operations (systemd process supervision, LAN-only home-server deployments)",
        evidence: [financeAgent, sierraStoryCo],
      },
    ],
  },
  {
    id: "frontend-mobile",
    name: "Frontend / Mobile",
    summary: "Native mobile, server-rendered web, and picking the platform the problem actually needs.",
    skills: [
      {
        name: "React Native / Expo mobile app development",
        evidence: [familyApp],
      },
      {
        name: "Native iOS integration (Swift App Intents, Siri, EventKit)",
        evidence: [familyApp],
      },
      {
        name: "SvelteKit full-stack apps (server-first routing, SSE streaming)",
        evidence: [mtgCommander, novelFlame],
      },
      {
        name: "Self-contained, accessible UI systems (no external hosts, light/dark aware)",
        evidence: [{ label: "This portfolio" }],
      },
    ],
  },
  {
    id: "product-operations",
    name: "Product / Operations",
    summary: "Payments, security, and the operator discipline of running something end to end.",
    skills: [
      {
        name: "Payments integration (Stripe, Apple IAP, a full payment-processor migration and retirement)",
        evidence: [novelFlame],
      },
      {
        name: "Security auditing and remediation (race conditions, timing-safe comparisons, webhook integrity)",
        evidence: [novelFlame],
      },
      {
        name: "Data-driven product decisions (killing a shipped feature once the evidence said to)",
        evidence: [novelFlame],
      },
      {
        name: "Small-business operations (LLC formation, service agreements, client delivery)",
        evidence: [sierraStoryCo],
      },
      {
        name: "Vendor-preflight QA automation (catching rejections before the vendor does)",
        evidence: [sierraStoryCo],
      },
    ],
  },
  {
    id: "devrel-communication",
    name: "DevRel / Communication",
    summary: "14 years of explaining complex systems to people who have to operate them, now applied to AI.",
    skills: [
      {
        name: "Spec-driven development facilitation (writing every spec, reviewing every diff, directing AI-assisted implementation across 400-plus specs)",
        evidence: [financeAgent, mtgCommander, novelFlame, familyApp, sierraStoryCo],
      },
      {
        name: "Workflow automation design (n8n pipelines, sandboxed-runtime workarounds, documented runbooks)",
        evidence: [sierraStoryCo],
      },
      {
        name: "Developer relations and technical enablement",
        evidence: [ciscoDevRel],
      },
      {
        name: "Technical writing and documentation-as-code",
        evidence: [ciscoDevRel, { label: "This portfolio" }],
      },
      {
        name: "Teaching complex systems to non-specialist audiences",
        evidence: [ciscoDevRel],
      },
    ],
  },
];
