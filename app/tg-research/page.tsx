import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { tgPanels } from "./content";

export const metadata = {
  title: "TG-Research",
  description: "Tueely TG-Research: panel-based research areas with in-site detail pages.",
};

export default function TgResearchPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black min-h-screen">
      <Navigation />
      <div className="container px-4 py-24 mx-auto">
        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl font-bold text-zinc-100 sm:text-4xl">TG-Research</h1>
          <p className="mt-4 text-zinc-400">
            Select a panel to open its own TG-Research workspace with article-style pages and richer content.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
          {tgPanels.map((panel) => (
            <Card key={panel.slug}>
              <Link href={`/tg-research/${panel.slug}`} className="relative flex flex-col h-full gap-4 p-6 duration-300 md:p-8">
                <span className="text-xl font-medium text-zinc-100 font-display">{panel.title}</span>
                <span className="text-sm leading-7 text-zinc-400">{panel.intro}</span>
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
