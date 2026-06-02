import Link from "next/link";
import { docsConfig } from "@/lib/docs-config";
import SiteFooter from "@/components/site-footer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 gap-6 px-4 pt-10 md:px-8">
      <aside className="hidden w-56 shrink-0 md:block">
        <nav className="sticky top-10">
          <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-foreground/70">
            Documentation
          </h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/docs"
                className="block rounded-base px-3 py-2 text-sm transition-colors hover:bg-main hover:text-main-foreground"
              >
                Overview
              </Link>
            </li>
            {docsConfig.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={`/docs/${entry.slug}`}
                  className="block rounded-base px-3 py-2 text-sm transition-colors hover:bg-main hover:text-main-foreground"
                >
                  {entry.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="min-w-0 flex-1">
        <article className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-normal prose-a:text-main-foreground prose-code:rounded-base prose-code:bg-main/10 prose-code:px-1.5 prose-code:py-0.5">
          {children}
        </article>
        <SiteFooter />
      </main>
    </div>
  );
}
