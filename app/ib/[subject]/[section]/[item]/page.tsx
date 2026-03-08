import Link from "next/link";
import { notFound } from "next/navigation";
import { IB_TABS, getIbSectionItem, getIbSubject, ibSubjects, isIbSectionSlug } from "../../../content";
import { Header } from "./header";

type IbItemPageProps = {
  params: {
    subject: string;
    section: string;
    item: string;
  };
};

export function generateStaticParams(): IbItemPageProps["params"][] {
  const params: IbItemPageProps["params"][] = [];

  for (const subject of ibSubjects) {
    for (const tab of IB_TABS) {
      for (const item of subject.sections[tab.slug].links) {
        params.push({
          subject: subject.slug,
          section: tab.slug,
          item: item.slug,
        });
      }
    }
  }

  return params;
}

export function generateMetadata({ params }: IbItemPageProps) {
  if (!isIbSectionSlug(params.section)) {
    return {
      title: "IB",
      description: "IB subject workspace",
    };
  }

  const subject = getIbSubject(params.subject);
  const item = getIbSectionItem(params.subject, params.section, params.item);

  if (!subject || !item) {
    return {
      title: "IB",
      description: "IB subject workspace",
    };
  }

  return {
    title: `${item.title} | ${subject.title} ${params.section.toUpperCase()}`,
    description: item.description,
  };
}

export default function IbItemPage({ params }: IbItemPageProps) {
  if (!isIbSectionSlug(params.section)) {
    notFound();
  }

  const subject = getIbSubject(params.subject);
  const item = getIbSectionItem(params.subject, params.section, params.item);

  if (!subject || !item) {
    notFound();
  }

  const section = subject.sections[params.section];
  const sectionLabel = IB_TABS.find((tab) => tab.slug === params.section)?.label ?? section.title;

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header
        title={item.title}
        description={item.description}
        subjectTitle={subject.title}
        sectionTitle={sectionLabel}
        backHref={`/ib/${subject.slug}/${params.section}`}
      />

      <article className="prose prose-zinc mx-auto px-4 py-12">
        <h2>Overview</h2>
        <p>
          This page is a dedicated IB workspace for {subject.title} {sectionLabel}. It is intentionally separated from
          the card grid so each resource can grow into a full article-style page, similar to TG-Research.
        </p>
        <h3>How To Use This Page</h3>
        <p>
          Add structured notes, worked examples, checklists, and weekly milestones here. You can also embed media,
          attach practice prompts, and track revisions over time.
        </p>
        {item.sourceUrl ? (
          <p>
            <Link href={item.sourceUrl} target={item.sourceUrl.startsWith("http") ? "_blank" : undefined}>
              Open source reference
            </Link>
          </p>
        ) : null}
      </article>
    </div>
  );
}
