import { notFound } from "next/navigation";
import Link from "next/link";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import { getTgPanel, tgPanels } from "../content";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams(): Props["params"][] {
  return tgPanels.map((panel) => ({ slug: panel.slug }));
}

export default function TgPanelPage({ params }: Props) {
  const panel = getTgPanel(params.slug);

  if (!panel) {
    notFound();
  }

  const featured = panel.items[0];
  const top2 = panel.items[1];
  const top3 = panel.items[2];
  const sorted = panel.items.slice(3);

  return (
    <div className="relative pb-16">
      <Navigation backHref="/tg-research" />

      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-20 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">{panel.title}</h2>
          <p className="mt-4 text-zinc-400">{panel.description}</p>
        </div>

        <div className="h-px w-full bg-zinc-800" />

        {featured ? (
          <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card>
              <Link href={`/tg-research/${panel.slug}/${featured.slug}`}>
                <article className="relative h-full w-full p-4 md:p-8">
                  <p className="text-xs text-zinc-500">Featured</p>
                  <h2 className="font-display mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
                    {featured.description}
                  </p>
                </article>
              </Link>
            </Card>

            <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
              {[top2, top3]
                .filter(Boolean)
                .map((item) => (
                  <Card key={item.slug}>
                    <Link href={`/tg-research/${panel.slug}/${item.slug}`} className="relative flex h-full flex-col gap-4 p-6 duration-300 md:p-8">
                      <span className="text-xl font-medium text-zinc-100 font-display">{item.title}</span>
                      <span className="text-sm leading-7 text-zinc-400">{item.description}</span>
                      <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">Open page</span>
                    </Link>
                  </Card>
                ))}
            </div>
          </div>
        ) : (
          <Card>
            <article className="p-6 text-zinc-300">No items found in this panel yet.</article>
          </Card>
        )}

        <div className="hidden h-px w-full bg-zinc-800 md:block" />

        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((item) => (
                <Card key={item.slug}>
                  <Link href={`/tg-research/${panel.slug}/${item.slug}`} className="relative flex h-full flex-col gap-4 p-6 duration-300 md:p-8">
                    <span className="text-xl font-medium text-zinc-100 font-display">{item.title}</span>
                    <span className="text-sm leading-7 text-zinc-400">{item.description}</span>
                    <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">Open page</span>
                  </Link>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((item) => (
                <Card key={item.slug}>
                  <Link href={`/tg-research/${panel.slug}/${item.slug}`} className="relative flex h-full flex-col gap-4 p-6 duration-300 md:p-8">
                    <span className="text-xl font-medium text-zinc-100 font-display">{item.title}</span>
                    <span className="text-sm leading-7 text-zinc-400">{item.description}</span>
                    <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">Open page</span>
                  </Link>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((item) => (
                <Card key={item.slug}>
                  <Link href={`/tg-research/${panel.slug}/${item.slug}`} className="relative flex h-full flex-col gap-4 p-6 duration-300 md:p-8">
                    <span className="text-xl font-medium text-zinc-100 font-display">{item.title}</span>
                    <span className="text-sm leading-7 text-zinc-400">{item.description}</span>
                    <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">Open page</span>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
