import Link from "next/link";

export default function DocsFooter() {
  return (
    <footer className="mt-10 border-t border-border/30 pt-4 text-xs text-foreground/70 md:text-sm">
      <div className="flex flex-wrap gap-4">
        <a
          href="https://henrymeyer.de/legal/imprint"
          className="underline underline-offset-2"
        >
          Imprint
        </a>
        <a
          href="https://henrymeyer.de/legal/privacy"
          className="underline underline-offset-2"
        >
          Privacy Policy
        </a>
        <Link href="/code-of-conduct" className="underline underline-offset-2">
          Code of Conduct
        </Link>
      </div>
    </footer>
  );
}
