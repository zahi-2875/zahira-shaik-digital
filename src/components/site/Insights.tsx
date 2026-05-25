import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Entrepreneurship",
    title: "Top 16 Skills to become an Entrepreneur",
    excerpt: "Essential skills and mindsets needed to launch, scale, and manage a successful modern venture.",
    href: "https://jarvisreach.io/blog/top-entrepreneurial-skills/",
    minutes: 6,
  },
  {
    tag: "Mental Health",
    title: "Mental Health Matters- A Student POV",
    excerpt: "An empathetic student perspective exploring academic pressure, self-care, and mental well-being.",
    href: "https://bronzectalks0328.blogspot.com/2023/09/student%20pov.html",
    minutes: 5,
  },
  {
    tag: "B2B SaaS",
    title: "B2B Strategies and Trends",
    excerpt: "Strategic content marketing and growth frameworks for modern B2B SaaS organizations.",
    href: "https://jarvisreach.io/blog/b2b-saas-strategies-and-trends/",
    minutes: 7,
  },
];

export function Insights() {
  return (
    <Section
      id="insights"
      eyebrow="Insights"
      title={<>Writing on <span className="gradient-text">AI, SEO & impact</span></>}
      description="Selected essays exploring the intersection of search, AI, content systems, and human-centered communication."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-primary">
                  {p.tag}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-balance">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-auto pt-5 text-xs text-muted-foreground">{p.minutes} min read</div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Click on any article to read the full publication on external platforms.
        </p>
      </Reveal>
    </Section>
  );
}
