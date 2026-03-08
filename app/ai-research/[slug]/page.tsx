import { notFound } from "next/navigation";
import { aiArticles, getAiArticle } from "../content";
import { Header } from "./header";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams(): Props["params"][] {
  return aiArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props) {
  const article = getAiArticle(params.slug);

  if (!article) {
    return {
      title: "AI-Research",
      description: "AI research article",
    };
  }

  return {
    title: `${article.title} | AI-Research`,
    description: article.description,
  };
}

export default function AiArticlePage({ params }: Props) {
  const article = getAiArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header
        title={article.title}
        description={article.description}
        backHref="/ai-research"
        panelTitle="AI-Research"
        sourceUrl={article.sourceUrl}
      />

      <article className="prose prose-zinc prose-quoteless mx-auto px-4 py-12">
        <h2>Overview</h2>
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </div>
  );
}
