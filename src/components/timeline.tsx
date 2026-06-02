type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-border/40 md:left-1/2" />

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <article
            key={`${item.date}-${item.title}`}
            className={`relative flex flex-col gap-4 md:flex-row ${
              isLeft ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div
              className={`flex w-full flex-col gap-3 rounded-base border border-border/30 bg-secondary-background p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-foreground/30 md:w-[calc(50%-2rem)] ${
                isLeft ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono uppercase tracking-[0.24em] text-foreground/60">
                  {item.date}
                </span>
                <h3 className="text-xl font-heading text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-foreground/75 md:text-base">
                {item.description}
              </p>
            </div>

            <span className="absolute left-4 top-6 flex size-3 -translate-x-1/2 rounded-full border border-border/50 bg-main shadow-sm md:left-1/2" />
          </article>
        );
      })}
    </div>
  );
}
