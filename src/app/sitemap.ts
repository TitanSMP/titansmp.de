import type { MetadataRoute } from "next";
import docs from "@/content/docs/docs.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://titansmp.de";
  const docEntries = docs as { slug: string }[];
  const docsRoutes = docEntries.map((entry) => ({
    url: `${baseUrl}/docs/${entry.slug}`,
    lastModified: new Date("2026-06-02"),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/code-of-conduct`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/links`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...docsRoutes,
  ];

  return routes;
}
