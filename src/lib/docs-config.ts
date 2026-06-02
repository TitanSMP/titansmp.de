import docs from "@/content/docs/docs.json";

export interface DocEntry {
  slug: string;
  title: string;
}

type DocJsonEntry = {
  slug: string;
  title?: string;
};

const docEntries = docs as DocJsonEntry[];

const formatTitle = (slug: string) =>
  slug
    .split("-")
    .map((word) => (word === "faq" ? "FAQ" : word))
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const docsConfig: DocEntry[] = docEntries.map((entry) => ({
  slug: entry.slug,
  title: entry.title ?? formatTitle(entry.slug),
}));
