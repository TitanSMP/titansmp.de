import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { docsConfig } from "@/lib/docs-config";
import { getDocModule, getAllDocSlugs } from "@/lib/docs-content";

export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = docsConfig.find((d) => d.slug === slug);

  if (!entry) return {};

  return {
    title: entry.title,
    description: `${entry.title} — TitanSMP Documentation`,
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = docsConfig.find((d) => d.slug === slug);

  if (!entry) notFound();

  const Content = await getDocModule(slug);

  if (!Content) notFound();

  return (
    <>
      <h1>{entry.title}</h1>
      <Content />
    </>
  );
}
