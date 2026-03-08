import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "../../../components/card";
import { Navigation } from "../../../components/nav";
import { IB_TABS, getIbSubject, ibSubjects, isIbSectionSlug } from "../../content";

type IbSubjectSectionPageProps = {
  params: {
    subject: string;
    section: string;
  };
};

export function generateStaticParams(): IbSubjectSectionPageProps["params"][] {
  const params: IbSubjectSectionPageProps["params"][] = [];

  for (const subject of ibSubjects) {
    for (const tab of IB_TABS) {
      params.push({ subject: subject.slug, section: tab.slug });
    }
  }

  return params;
}

export function generateMetadata({ params }: IbSubjectSectionPageProps) {
  const subject = getIbSubject(params.subject);

  if (!subject || !isIbSectionSlug(params.section)) {
    return {
      title: "IB",
      description: "IB subject workspace",
    };
  }

  const section = subject.sections[params.section];

  return {
    title: `${subject.title} ${section.title} | IB`,
    description: section.summary,
  };
}

export default function IbSubjectSectionPage({ params }: IbSubjectSectionPageProps) {
  const subject = getIbSubject(params.subject);

  if (!subject || !isIbSectionSlug(params.section)) {
    notFound();
  }

  const section = subject.sections[params.section];
  const activeTabLabel = IB_TABS.find((tab) => tab.slug === params.section)?.label ?? section.title;
  const featured = section.links[0];
  const top2 = section.links[1];
  const top3 = section.links[2];
  const sorted = section.links.slice(3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <Navigation backHref="/ib" />

      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-20 pb-16 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold text-zinc-100 sm:text-4xl">{subject.title} - {activeTabLabel}</h1>
          <p className="mt-3 text-zinc-500">{section.summary}</p>

          <nav className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            {IB_TABS.map((tab) => {
              const active = tab.slug === params.section;
              return (
                <Link
                  key={tab.slug}
                  href={`/ib/${subject.slug}/${tab.slug}`}
                  className={active ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-200"}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="h-px w-full bg-zinc-800" />

        {featured ? (
          <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card>
              <Link href={`/ib/${subject.slug}/${params.section}/${featured.slug}`}>
                <article className="relative h-full w-full p-4 md:p-8">
                  <p className="text-xs text-zinc-500">Featured Panel</p>
                  <h2 className="font-display mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
                    {featured.description}
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Open page <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>

            <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
              {[top2, top3]
                .filter(Boolean)
                .map((item) => (
                  <Card key={item.slug}>
                    <Link
                      href={`/ib/${subject.slug}/${params.section}/${item.slug}`}
                      className="relative flex h-full flex-col gap-4 p-6 duration-300 md:p-8"
                    >
                      <span className="text-xl font-medium text-zinc-100 font-display">{item.title}</span>
                      <span className="text-sm leading-7 text-zinc-400">{item.description}</span>
                      <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">
                        Open page
                      </span>
                    </Link>
                  </Card>
                ))}
            </div>
          </div>
        ) : (
          <Card>
            <article className="p-6 text-zinc-300">No panels found for this section yet.</article>
          </Card>
        )}

        <div className="hidden h-px w-full bg-zinc-800 md:block" />

        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((item) => (
                <Card key={item.slug}>
                  <Link
                    href={`/ib/${subject.slug}/${params.section}/${item.slug}`}
                    className="relative flex h-full flex-col gap-4 p-6 duration-300 md:p-8"
                  >
                    <span className="text-xl font-medium text-zinc-100 font-display">{item.title}</span>
                    <span className="text-sm leading-7 text-zinc-400">{item.description}</span>
                    <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">
                      Open page
                    </span>
                  </Link>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((item) => (
                <Card key={item.slug}>
                  <Link
                    href={`/ib/${subject.slug}/${params.section}/${item.slug}`}
                    className="relative flex h-full flex-col gap-4 p-6 duration-300 md:p-8"
                  >
                    <span className="text-xl font-medium text-zinc-100 font-display">{item.title}</span>
                    <span className="text-sm leading-7 text-zinc-400">{item.description}</span>
                    <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">
                      Open page
                    </span>
                  </Link>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((item) => (
                <Card key={item.slug}>
                  <Link
                    href={`/ib/${subject.slug}/${params.section}/${item.slug}`}
                    className="relative flex h-full flex-col gap-4 p-6 duration-300 md:p-8"
                  >
                    <span className="text-xl font-medium text-zinc-100 font-display">{item.title}</span>
                    <span className="text-sm leading-7 text-zinc-400">{item.description}</span>
                    <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">
                      Open page
                    </span>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
