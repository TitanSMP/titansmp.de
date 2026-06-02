import docs from "@/content/docs/docs.json";

type DocEntry = {
  slug: string;
  title?: string;
  file?: string;
};

const docEntries = docs as DocEntry[];

export type DocSlug = (typeof docEntries)[number]["slug"];

export async function getDocModule(
  slug: string,
): Promise<React.ComponentType | undefined> {
  const entry = docEntries.find((doc) => doc.slug === slug);

  if (!entry) return undefined;

  const fileName = entry.file ?? `${entry.slug}.mdx`;
  const module = await import(`@/content/docs/${fileName}`);
  return module.default as React.ComponentType;
}

export function getAllDocSlugs(): DocSlug[] {
  return docEntries.map((doc) => doc.slug) as DocSlug[];
}
