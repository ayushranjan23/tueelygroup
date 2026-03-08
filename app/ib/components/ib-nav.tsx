import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { IB_TABS, IbSectionSlug } from "../content";

type IbNavProps = {
  subjectSlug: string;
  activeSection: IbSectionSlug;
};

export function IbNav({ subjectSlug, activeSection }: IbNavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-zinc-900/0">
      <div className="container mx-auto flex items-center justify-between gap-6 p-4 sm:p-6">
        <Link
          href="/ib"
          className="flex items-center gap-2 text-sm text-zinc-300 duration-200 hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to IB
        </Link>

        <nav className="flex max-w-[65%] items-center gap-4 overflow-x-auto whitespace-nowrap text-sm">
          {IB_TABS.map((tab) => {
            const isActive = tab.slug === activeSection;

            return (
              <Link
                key={tab.slug}
                href={`/ib/${subjectSlug}/${tab.slug}`}
                className={`duration-200 ${
                  isActive ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
