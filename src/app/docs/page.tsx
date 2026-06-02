import Link from "next/link";
import type { Metadata } from "next";
import { docsConfig } from "@/lib/docs-config";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to join, play, and contribute to the TitanSMP network.",
  openGraph: {
    title: "TitanSMP Documentation",
    description:
      "Everything you need to know about the TitanSMP Minecraft network.",
  },
};

export default function DocsOverview() {
  return (
    <div className="space-y-8">
      <section className="rounded-base border border-border/30 bg-main p-6 text-main-foreground shadow-sm md:p-10">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-main-foreground/70">
          Documentation
        </p>
        <h1 className="mb-4 text-3xl font-heading leading-tight sm:text-5xl">
          TitanSMP Docs
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-main-foreground/80">
          Welcome to the TitanSMP documentation. Here you will find everything
          you need to get started, from joining the server to understanding
          the rules and features.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        {docsConfig.map((entry, i) => (
          <Link
            key={entry.slug}
            href={`/docs/${entry.slug}`}
            className="group rounded-base border border-border/30 bg-secondary-background p-5 shadow-sm transition-colors hover:bg-main hover:text-main-foreground"
          >
            <p className="mb-1 text-xs font-mono uppercase tracking-[0.2em] text-foreground/50 group-hover:text-main-foreground/50">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-heading text-lg">{entry.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
