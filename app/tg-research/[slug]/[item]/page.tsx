import { notFound } from "next/navigation";
import { tgPanels, getTgPanel, getTgPanelItem } from "../../content";
import { Header } from "../header";

type Props = {
  params: {
    slug: string;
    item: string;
  };
};

export function generateStaticParams(): Props["params"][] {
  const params: Props["params"][] = [];

  for (const panel of tgPanels) {
    for (const item of panel.items) {
      params.push({ slug: panel.slug, item: item.slug });
    }
  }

  return params;
}

export function generateMetadata({ params }: Props) {
  const panel = getTgPanel(params.slug);
  const item = getTgPanelItem(params.slug, params.item);

  if (!panel || !item) {
    return {
      title: "TG-Research",
      description: "TG-Research panel page",
    };
  }

  return {
    title: `${item.title} | ${panel.title} | TG-Research`,
    description: item.description,
  };
}

export default function TgPanelItemPage({ params }: Props) {
  const panel = getTgPanel(params.slug);
  const item = getTgPanelItem(params.slug, params.item);

  if (!panel || !item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header
        title={item.title}
        description={item.description}
        backHref={`/tg-research/${panel.slug}`}
        panelTitle={panel.title}
        sourceUrl={item.sourceUrl}
      />

      <article className="prose prose-zinc prose-quoteless mx-auto px-4 py-12">
        <h2>Overview</h2>
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </div>
  );
}
