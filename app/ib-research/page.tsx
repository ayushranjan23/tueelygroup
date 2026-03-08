import Link from "next/link";
import { BookOpen, FileText, Library } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

type Resource = {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
  cta: string;
};

const resources: Resource[] = [
  {
    icon: <BookOpen size={20} />,
    title: "Content Review",
    description: "The Entire IB Physics Content Explained",
    href: "https://www.youtube.com/results?search_query=IB+content+review+playlist",
    cta: "Syllabus",
  },
  {
    icon: <FileText size={20} />,
    title: "Document Templatedsfsds",
    description: "Templates and structure guides for IA, EE, and TOK work.",
    href: "https://www.youtube.com/results?search_query=IB+IA+EE+TOK+template+playlist",
    cta: "Open templates",
  },
  {
    icon: <Library size={20} />,
    title: "Past Papers",
    description: "Past paper strategy, timed solving, and exam pattern playlists.",
    href: "https://www.youtube.com/results?search_query=IB+past+papers+playlist",
    cta: "Open paper practice",
  },
];

export const metadata = {
  title: "IB-Research",
  description: "Tueely IB-Research: study workflows, templates, and past paper resources.",
};

export default function IbPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="w-full">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-zinc-100 sm:text-4xl">IB-Research</h1>
            <p className="mt-4 text-zinc-400">
              Learn Everything
            </p>
          </div>

          <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            {resources.map((resource) => (
              <Card key={resource.title}>
                <Link
                  href={resource.href}
                  target="_blank"
                  className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16 md:py-24 lg:pb-48"
                >
                  <span
                    className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white">
                    {resource.icon}
                  </span>

                  <div className="z-10 flex flex-col items-center">
                    <span className="font-display text-xl font-medium text-zinc-200 duration-150 group-hover:text-white lg:text-2xl">
                      {resource.title}
                    </span>
                    <span className="mt-4 text-center text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
                      {resource.description}
                    </span>
                    <span className="mt-6 text-center text-xs uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">
                      {resource.cta}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
