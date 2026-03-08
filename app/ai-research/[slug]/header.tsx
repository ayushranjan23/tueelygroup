"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  description: string;
  backHref: string;
  panelTitle: string;
  sourceUrl?: string;
};

export const Header: React.FC<Props> = ({ title, description, backHref, panelTitle, sourceUrl }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = sourceUrl ? [{ label: "Source", href: sourceUrl }] : [];

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b duration-200 backdrop-blur lg:backdrop-blur-none lg:bg-transparent ${
          isIntersecting
            ? "border-transparent bg-zinc-900/0"
            : "border-zinc-200 bg-white/10 lg:border-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-6">
          <Link
            href={backHref}
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? "text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>

          <p className={`text-xs uppercase tracking-[0.2em] duration-200 ${isIntersecting ? "text-zinc-500" : "text-zinc-600"}`}>
            {panelTitle}
          </p>
        </div>
      </div>

      <div className="container relative isolate mx-auto overflow-hidden py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {description}
            </p>
          </div>

          {links.length > 0 ? (
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <Link target="_blank" key={link.label} href={link.href}>
                    {link.label} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
