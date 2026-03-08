import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { DEFAULT_IB_SECTION, ibSubjects } from "./content";

type Resource = {
  title: string;
  description: string;
  href: string;
};

const resources: Resource[] = ibSubjects.map((subject) => ({
  title: subject.title,
  description: subject.intro,
  href: `/ib/${subject.slug}/${DEFAULT_IB_SECTION}`,
}));

export const metadata = {
  title: "IB-Research",
  description: "Tueely IB-Research: study workflows, templates, and past paper resources.",
};

export default function IbPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black min-h-screen">
      <Navigation />
      <div className="container px-4 py-24 mx-auto">
        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl font-bold text-zinc-100 sm:text-4xl">IB-Research</h1>
          <p className="mt-4 text-zinc-400">
            Choose a subject workspace to open dedicated tabs for syllabus, past papers, IA, EE, TOK, and more.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
          {resources.map((resource) => (
            <Card key={resource.title}>
              <Link href={resource.href} className="relative flex flex-col h-full gap-4 p-6 duration-300 md:p-8">
                <span className="text-xl font-medium text-zinc-100 font-display">{resource.title}</span>
                <span className="text-sm leading-7 text-zinc-400">{resource.description}</span>
                <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">
                  Open workspace
                </span>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
