import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Newspaper, Stethoscope, Sprout, Brain, FileText, Share2 } from "lucide-react";

const projects = [
  {
    Icon: Newspaper,
    name: "Verity",
    summary: "A digital platform for interviews, insights, SEO-driven publishing, professional storytelling, and event documentation.",
    tech: ["SEO", "GEO", "CMS Ops", "Editorial Systems"],
    seo: "Topical authority, content calendars, interview-led link equity.",
    impact: "Amplifies voices and builds trust through editorial-grade discovery.",
  },
  {
    Icon: FileText,
    name: "SEO Blogs for Jarvis Reach",
    summary: "Search-optimized blogs and long-form articles crafted for Jarvis Reach across SaaS, marketing, and growth-focused topics.",
    tech: ["SEO", "Keyword Research", "On-Page", "Editorial QA"],
    seo: "Intent-mapped briefs, on-page optimization, and topical clusters for organic growth.",
    impact: "Drives qualified traffic and strengthens domain authority through research-backed content.",
  },
  {
    Icon: Share2,
    name: "Social Media Content for We Are with You Charitable Trust",
    summary: "Mission-driven social media content for a humanitarian non-profit — campaigns, awareness posts, and storytelling that mobilize action.",
    tech: ["Content Strategy", "Storytelling", "Campaigns", "Community"],
    seo: "Discoverable, hashtag-aware copy aligned to humanitarian search and social intent.",
    impact: "Amplifies humanitarian causes, builds community, and inspires meaningful engagement.",
  },
  {
    Icon: Stethoscope,
    name: "Speech-Language Therapy Clinical Software",
    summary: "A healthcare-focused collaborative platform with AI-assisted therapy support for clinicians and learners.",
    tech: ["AI/ML", "NLP", "Healthcare UX", "Research"],
    seo: "Accessibility-first content & schema for clinical discoverability.",
    impact: "Improves access to therapy resources and clinical workflows.",
  },
  {
    Icon: Sprout,
    name: "AI-Driven Smart Agriculture Research",
    summary: "Research integrating IoT, AI, and predictive analytics for sustainable, data-informed agriculture.",
    tech: ["IoT", "Python", "Predictive Analytics", "Research"],
    seo: "Research dissemination via structured publishing and knowledge SEO.",
    impact: "Supports climate-resilient practices and rural livelihoods.",
  },
  {
    Icon: Brain,
    name: "Mental Health Awareness Website",
    summary: "A modern awareness and outreach website focused on mental health accessibility and education.",
    tech: ["Accessibility", "Content Strategy", "SEO"],
    seo: "Information architecture optimized for empathetic, intent-led search.",
    impact: "Reduces stigma and expands access to mental health resources.",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Work where <span className="gradient-text">strategy meets purpose</span></>}
      description="Selected projects spanning editorial systems, healthcare, agritech research, and human-centered awareness platforms."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100" aria-hidden="true" />
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-gradient text-primary-foreground shadow-soft">
                  <p.Icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-primary">SEO / Strategy</dt>
                  <dd className="mt-1 text-muted-foreground">{p.seo}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-primary">Impact focus</dt>
                  <dd className="mt-1 text-muted-foreground">{p.impact}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
