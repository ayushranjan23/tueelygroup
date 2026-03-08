"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  description: string;
  subjectTitle: string;
  sectionTitle: string;
  backHref: string;
};

export const Header: React.FC<Props> = ({
  title,
  description,
  subjectTitle,
  sectionTitle,
  backHref,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

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
            className={`duration-200 ${
              isIntersecting
                ? "text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>

          <p
            className={`text-xs uppercase tracking-[0.2em] duration-200 ${
              isIntersecting ? "text-zinc-500" : "text-zinc-600"
            }`}
          >
            {subjectTitle} / {sectionTitle}
          </p>
        </div>
      </div>

      <div className="container relative isolate mx-auto overflow-hidden py-24 sm:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{description}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
