import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import SiteFooter from "@/components/site-footer";
import Timeline from "@/components/timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the history of TitanSMP and how the network evolved into a synchronized Minecraft universe.",
  openGraph: {
    title: "About TitanSMP",
    description:
      "Explore the milestones that shaped TitanSMP, from its first idea to today’s synchronized network.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_URL || "https://titansmp.de"}/about`,
  },
};

const timelineItems = [
  {
    date: "Jan 24, 2025",
    title: "The DMH Network idea",
    description:
      "Daniel, Matti, and Henry decide to build a shared Minecraft network. The first working name is DMH Network, focused on a connected survival experience.",
  },
  {
    date: "Mar 2025",
    title: "Official launch",
    description:
      "Two months later the first public release goes live, bringing the initial community together across the network.",
  },
  {
    date: "May 26, 2025",
    title: "Team change",
    description:
      "Daniel leaves the team, and the remaining founders begin shaping the next phase of the project.",
  },
  {
    date: "Jun 2025",
    title: "HMT Network",
    description:
      "The network is renamed to HMT Network as Matti and Henry refine the vision and the roadmap.",
  },
  {
    date: "Nov 2025",
    title: "Hoster downtime",
    description:
      "Severel hoster issues cause a longer outage, pausing the momentum and forcing a hard reset in planning.",
  },
  {
    date: "Early Apr 2026",
    title: "The rebuild decision",
    description:
      "Matti and Henry commit to a full rebuild: new world, new hoster, and a clean foundation for the future.",
  },
  {
    date: "May 2026",
    title: "Joel joins",
    description:
      "Joel joins the team and helps push the infrastructure and gameplay systems forward.",
  },
  {
    date: "Jun 2026",
    title: "Closed Beta ahead",
    description:
      "The rebuild is in full swing and a Closed Beta for selected players outside the team is about to start.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 pb-0 md:px-8 md:pb-0">
      <section className="mb-10 rounded-base border border-border/30 bg-main p-6 text-main-foreground shadow-sm md:p-10">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-foreground/70">
          About Us
        </p>
        <h1 className="mb-4 text-3xl font-heading leading-tight sm:text-5xl">
          The TitanSMP Journey
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-foreground/80">
          TitanSMP is a synchronized Minecraft network built by a small team
          with a big vision: one continuous adventure across SMPs, hubs, and
          future duel arenas. Here is how the story unfolded.
        </p>
      </section>

      <section className="mb-10 rounded-base border border-border/30 bg-secondary-background p-6 shadow-sm md:p-8">
        <SectionHeading index="01" title="Timeline" />
        <Timeline items={timelineItems} />
      </section>

      <section className="mb-10 rounded-base border border-border/30 bg-secondary-background p-6 shadow-sm md:p-8">
        <SectionHeading index="02" title="What Comes Next" />
        <p className="max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base">
          TitanSMP is entering its most ambitious phase yet. With a fresh world,
          new infrastructure, and a growing team, we are preparing the network
          for a premium Closed Beta and the next era of synchronized gameplay.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
