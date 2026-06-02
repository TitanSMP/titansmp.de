export interface DocEntry {
  slug: string;
  title: string;
}

export const docsConfig: DocEntry[] = [
  { slug: "getting-started", title: "Getting Started" },
  { slug: "how-to-join", title: "How to Join" },
  { slug: "rules", title: "Rules" },
  { slug: "faq", title: "FAQ" },
];
