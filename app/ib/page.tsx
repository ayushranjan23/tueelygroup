import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

type Resource = {
  title: string;
  description: string;
  href: string;
};

const resources: Resource[] = [
  {
    title: "Content Review",
    description: "Review sessions and walkthrough playlists to revise key IB concepts quickly.",
    href: "https://www.youtube.com/results?search_query=IB+content+review+playlist",
  },
  {
    title: "Document Templates",
    description: "Templates and structure guides for IA, EE, and TOK work.",
    href: "https://www.youtube.com/results?search_query=IB+IA+EE+TOK+template+playlist",
  },
  {
    title: "Past Papers",
    description: "Past paper strategy, timed solving, and exam pattern playlists.",
    href: "https://www.youtube.com/results?search_query=IB+past+papers+playlist",
  },
];

export const metadata = {
  title: "IB",
  description: "Tueely IB: study workflows, templates, and past paper resources.",
};

export default function IbPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container px-4 py-24 mx-auto">
        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl font-bold text-zinc-100 sm:text-4xl">IB</h1>
          <p className="mt-4 text-zinc-400">
            A practical IB command center. Start with these discovery links, then replace them with your final curated playlists.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
          {resources.map((resource) => (
            <Card key={resource.title}>
              <Link
                href={resource.href}
                target="_blank"
                className="relative flex flex-col h-full gap-4 p-6 duration-300 md:p-8"
              >
                <span className="text-xl font-medium text-zinc-100 font-display">{resource.title}</span>
                <span className="text-sm leading-7 text-zinc-400">{resource.description}</span>
                <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">
                  Open playlist search
                </span>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
