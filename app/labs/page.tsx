import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

type LabArticle = {
  title: string;
  focus: string;
  summary: string;
  href: string;
};

const articles: LabArticle[] = [
  {
    title: "Attention Is All You Need",
    focus: "AI Research",
    summary:
      "The transformer paper that shaped modern LLMs and remains a core reference for sequence modeling.",
    href: "https://arxiv.org/abs/1706.03762",
  },
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
    focus: "AI Engineering",
    summary:
      "A practical starting point for grounding model responses with external knowledge.",
    href: "https://arxiv.org/abs/2005.11401",
  },
  {
    title: "LangGraph Agent Patterns",
    focus: "Coding Research",
    summary:
      "Stateful agent orchestration patterns with explicit control flow and tool execution.",
    href: "https://langchain-ai.github.io/langgraph/",
  },
  {
    title: "OpenAI Evals",
    focus: "AI Research",
    summary:
      "A reference framework for evaluating model behavior and preventing regressions over time.",
    href: "https://platform.openai.com/docs/guides/evals",
  },
  {
    title: "FastAPI Async Patterns",
    focus: "Coding Research",
    summary:
      "Production-ready async API design with validation, background tasks, and clean interfaces.",
    href: "https://fastapi.tiangolo.com/async/",
  },
  {
    title: "Designing Data-Intensive Applications",
    focus: "AI Operations",
    summary:
      "System design foundations for building reliable data and inference pipelines.",
    href: "https://dataintensive.net/",
  },
];

export const metadata = {
  title: "Labs",
  description: "Tueely Labs: AI research references and coding implementation notes.",
};

export default function LabsPage() {
  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-900/70 to-black">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-6xl lg:px-8 md:pt-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Labs
          </h1>
          <p className="mt-4 text-zinc-400">
            Curated starting points for AI and coding research. Treat these as editable references for your own long-form lab notes.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Card key={article.title}>
              <article className="relative h-full p-6 md:p-8">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  {article.focus}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-zinc-100 font-display">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{article.summary}</p>
                <div className="mt-8">
                  <Link
                    href={article.href}
                    target="_blank"
                    className="text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:text-white"
                  >
                    Open article
                  </Link>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
