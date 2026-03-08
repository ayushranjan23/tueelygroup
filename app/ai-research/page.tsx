import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

type AiLink = {
  title: string;
  description: string;
  href: string;
};

const links: AiLink[] = [
  {
    title: "Sample Video",
    description: "A featured walkthrough video that explains the product or workflow end-to-end.",
    href: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
  },
  {
    title: "Live Demo",
    description: "A direct demo experience you can swap with your hosted app or prototype.",
    href: "https://huggingface.co/spaces",
  },
  {
    title: "Contact",
    description: "A contact action for collaborations, consulting, or project support.",
    href: "mailto:hello@tueely.com",
  },
];

export const metadata = {
  title: "AI-Research",
  description: "Tueely AI-Research: sample walkthroughs, live demos, and direct contact.",
};

export default function AiPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black min-h-screen">
      <Navigation />
      <div className="container px-4 py-24 mx-auto">
        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl font-bold text-zinc-100 sm:text-4xl">AI-Research</h1>
          <p className="mt-4 text-zinc-400">
            A focused section for AI walkthroughs, demos, and collaboration touchpoints.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
          {links.map((item) => (
            <Card key={item.title}>
              <Link
                href={item.href}
                target="_blank"
                className="relative flex flex-col h-full gap-4 p-6 duration-300 md:p-8"
              >
                <span className="text-xl font-medium text-zinc-100 font-display">{item.title}</span>
                <span className="text-sm leading-7 text-zinc-400">{item.description}</span>
                <span className="mt-auto text-sm underline text-zinc-300 underline-offset-4 decoration-zinc-700">
                  Open link
                </span>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
