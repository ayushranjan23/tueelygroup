export type AiArticle = {
  slug: string;
  title: string;
  description: string;
  body: string[];
  sourceUrl?: string;
};

export const aiArticles: AiArticle[] = [
  {
    slug: "foundation-model-evaluation-playbook",
    title: "Foundation Model Evaluation Playbook",
    description: "A practical workflow for evaluating model quality, consistency, and failure modes before deployment.",
    body: [
      "Start with a clear benchmark matrix that maps tasks to real user outcomes instead of generic proxy metrics.",
      "Track both quantitative and qualitative signals, including hallucination rates, instruction-following drift, and response utility.",
      "Run stress tests using adversarial prompts and edge-case scenarios to surface brittle behavior early.",
      "Document every observed failure mode with reproducible prompts and mitigation strategies so the team can iterate fast.",
    ],
    sourceUrl: "https://www.youtube.com/results?search_query=foundation+model+evaluation+workflow",
  },
  {
    slug: "production-rag-architecture-notes",
    title: "Production RAG Architecture Notes",
    description: "A reference layout for retrieval pipelines, indexing strategy, and response grounding in production AI apps.",
    body: [
      "Define a retrieval contract first: what source quality, freshness, and citation behavior is required for each query type.",
      "Design chunking and metadata strategy around retrieval intent, not document format alone.",
      "Use reranking and answer-grounding checks to reduce irrelevant context leakage.",
      "Continuously monitor retrieval hit quality and answer citation validity with sampled audits.",
    ],
    sourceUrl: "https://www.youtube.com/results?search_query=production+rag+architecture",
  },
  {
    slug: "ai-agent-safety-and-observability",
    title: "AI Agent Safety and Observability",
    description: "Guardrail patterns, runtime telemetry, and intervention workflows for safer autonomous systems.",
    body: [
      "Define tool-permission boundaries and escalation paths before enabling autonomous actions.",
      "Instrument traces for every decision step so failures are explainable and debuggable.",
      "Build layered guardrails: policy filters, context constraints, and final action confirmation checks.",
      "Use post-run reviews to tune prompts, constraints, and fallback behavior with measurable safety targets.",
    ],
    sourceUrl: "https://www.youtube.com/results?search_query=ai+agent+safety+observability",
  },
];

export function getAiArticle(slug: string): AiArticle | undefined {
  return aiArticles.find((article) => article.slug === slug);
}
