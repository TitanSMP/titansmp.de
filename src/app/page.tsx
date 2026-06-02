import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/section-heading";
import SiteFooter from "@/components/site-footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Flip to true when the Closed Beta ends.
const showIp = false;

// Replace these with real Minecraft screenshots in /public/assets.
const galleryImages = [
  {
    src: "/assets/titansmp-hero-01.jpg",
    alt: "TitanSMP overworld base with a sunrise",
    tilt: "rotate-2",
  },
  {
    src: "/assets/titansmp-hero-02.jpg",
    alt: "TitanSMP lobby hub with multiple portals",
    tilt: "-rotate-2",
  },
  {
    src: "/assets/titansmp-hero-03.jpg",
    alt: "TitanSMP community build on a cliffside",
    tilt: "rotate-1",
  },
];

export default function Page() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 pb-0 md:px-8 md:pb-0">
      <section className="relative mb-10 overflow-hidden rounded-base border border-border/30 bg-main p-6 text-main-foreground shadow-sm md:p-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-foreground/10 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-foreground/5 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
        </div>

        <div className="relative">
          <Badge className="mb-4" variant="neutral">
            Closed Beta
          </Badge>
          <h1 className="mb-4 text-3xl font-heading leading-tight sm:text-5xl">
            TitanSMP
          </h1>
          <h3 className="mb-6 text-lg font-heading text-foreground/80 sm:text-xl">
            For you and all your friends, everywhere you play.
          </h3>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/80">
            TitanSMP is a Minecraft SMP network where every SMP, lobby, and
            future duel arena is fully synchronized. Your hearts, hunger,
            inventory, and progress move with you across the entire world.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-base border border-border/30 bg-foreground px-4 py-2 text-sm font-heading text-background shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Join the Network
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-base border border-border/30 bg-secondary-background px-4 py-2 text-sm font-heading text-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mb-10 rounded-base border border-border/30 bg-secondary-background p-6 shadow-sm md:p-8"
      >
        <SectionHeading index="01" title="What Is TitanSMP" />
        <p className="max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base">
          TitanSMP is a synchronized Minecraft experience that connects multiple
          SMP servers, social hubs, and future duel arenas into one living
          universe. Your stats, inventory, and story stay consistent no matter
          where you travel, so every session feels continuous. The network is
          built for community-driven survival, powered by a premium
          infrastructure and careful curation.
        </p>
      </section>

      <section className="mb-10 rounded-base border border-border/30 bg-secondary-background p-6 shadow-sm md:p-8">
        <SectionHeading index="02" title="Featured Worlds" />
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-base">
          Exciting highlights from the closed beta.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-base border border-border/30 bg-background shadow-sm transition-transform duration-500 ease-out ${image.tilt} hover:-translate-y-2 hover:rotate-0`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover transition duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
            </figure>
          ))}
        </div>
      </section>

      {showIp ? (
        <section className="mb-10 rounded-base border border-border/30 bg-main p-6 text-main-foreground shadow-sm md:p-8">
          <SectionHeading index="03" title="Server IP" />
          <div className="flex flex-col gap-2 text-base">
            <span className="font-heading text-2xl">mc.titansmp.de</span>
            <p className="text-sm text-foreground/80">
              Bedrock support is planned for a future update.
            </p>
          </div>
        </section>
      ) : null}

      <SiteFooter />
    </main>
  );
}
