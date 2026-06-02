import GettingStarted from "@/content/docs/getting-started.mdx";
import HowToJoin from "@/content/docs/how-to-join.mdx";
import Rules from "@/content/docs/rules.mdx";
import Faq from "@/content/docs/faq.mdx";

const docModules = {
  "getting-started": GettingStarted,
  "how-to-join": HowToJoin,
  "rules": Rules,
  "faq": Faq,
} as const satisfies Record<string, React.ComponentType>;

export type DocSlug = keyof typeof docModules;

export function getDocModule(slug: string): React.ComponentType | undefined {
  return docModules[slug as DocSlug];
}

export function getAllDocSlugs(): DocSlug[] {
  return Object.keys(docModules) as DocSlug[];
}
