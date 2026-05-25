import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { Brain, Search, HeartHandshake, Sparkles } from "lucide-react";

const pillars = [
  { Icon: Search, title: "SEO + GEO", text: "Technical SEO, GEO strategy, and AI-search optimization for measurable visibility." },
  { Icon: Brain, title: "AI & Research", text: "Applied AI/ML, NLP, and research communication across healthcare, agritech, and education." },
  { Icon: Sparkles, title: "Content Systems", text: "AI-assisted editorial workflows, topical authority, and human-centered storytelling." },
  { Icon: HeartHandshake, title: "Global Impact", text: "Mission-driven work for humanitarian, educational, and accessibility-focused initiatives." },
];

const stats = [
  { value: "5+", label: "SEO content domains" },
  { value: "100+", label: "Articles & research pieces" },
  { value: "4", label: "Applied AI/research projects" },
  { value: "1", label: "Published anthology" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineering meaningful <span className="gradient-text">global impact</span></>}
      description="A Computer Science Engineering graduate specialized in AI & ML, blending technical SEO, GEO, and AI-driven content strategy with humanitarian intent."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I'm <span className="font-medium text-foreground">Zahira Shaik</span>, a Computer Science Engineering graduate
              specialized in <span className="font-medium text-foreground">Artificial Intelligence & Machine Learning</span>,
              and a <span className="font-medium text-foreground">Senior SEO Content Writer</span> shaping
              search-optimized, research-grade content for SaaS platforms, educational initiatives, and digital growth projects.
            </p>
            <p>
              My work lives at the intersection of <span className="font-medium text-foreground">SEO, GEO, AI-driven content systems,
              research communication, digital accessibility, and human-centered technology</span>. I'm deeply interested in
              technical SEO, AI + SEO integration, humanitarian communication, web operations, and AI for healthcare & mental health.
            </p>
            <p>
              Beyond writing, I've led as a Class Representative, mentored writers, conducted KT sessions, contributed to
              AI and IoT research, and collaborated on digital initiatives — always with a bias toward clarity, accessibility,
              and impact at scale.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                <div className="font-display text-3xl font-semibold text-primary">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                  <p.Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold">{p.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
