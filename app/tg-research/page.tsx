import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

export const metadata = {
  title: "TG-Research",
  description: "Tueely TG-Research: clickable, in-site article pages in the original template layout.",
};

export const revalidate = 60;

export default async function TgResearchPage() {
  const published = allProjects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.NEGATIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.NEGATIVE_INFINITY).getTime(),
    );

  const featured = published[0];
  const top2 = published[1];
  const top3 = published[2];
  const sorted = published.slice(3);

  const views = published.reduce((acc, project) => {
    acc[project.slug] = 0;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-20 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            TG-Research
          </h2>
          <p className="mt-4 text-zinc-400">
            Select an article to open it directly inside the website using the original template reading layout.
          </p>
        </div>

        <div className="h-px w-full bg-zinc-800" />

        {featured ? (
          <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card>
              <Link href={`/tg-research/${featured.slug}`}>
                <article className="relative h-full w-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      {featured.date ? (
                        <time dateTime={new Date(featured.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(featured.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Eye className="h-4 w-4" />
                      {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                        views[featured.slug] ?? 0,
                      )}
                    </span>
                  </div>

                  <h2 className="font-display mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
                    {featured.description}
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>

            <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
              {[top2, top3]
                .filter(Boolean)
                .map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} views={views[project.slug] ?? 0} />
                  </Card>
                ))}
            </div>
          </div>
        ) : (
          <Card>
            <article className="p-6 text-zinc-300">No published TG-Research articles found yet.</article>
          </Card>
        )}

        <div className="hidden h-px w-full bg-zinc-800 md:block" />

        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
