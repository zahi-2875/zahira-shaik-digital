import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Search, FileText, Code2, Users } from "lucide-react";

const groups = [
  {
    Icon: Search,
    title: "SEO & GEO",
    items: [
      "Technical SEO", "On-Page SEO", "Keyword Research", "Keyword Clustering",
      "Competitor Analysis", "Content Optimization", "Search Intent Mapping",
      "Topical Authority", "GEO Strategy", "AI Search Optimization",
      "SERP Analysis", "SEO Audits", "Google Search Console", "Google Analytics",
    ],
  },
  {
    Icon: FileText,
    title: "Content & Strategy",
    items: [
      "SEO Content Writing", "Research Writing", "Content Strategy",
      "Digital Storytelling", "Educational Content", "SaaS Content",
      "AI-Assisted Content Systems", "Blog Optimization", "CMS Operations",
    ],
  },
  {
    Icon: Code2,
    title: "Technical",
    items: ["Python", "HTML", "CSS", "Git & GitHub", "AI/ML Basics", "NLP", "Data Analysis"],
  },
  {
    Icon: Users,
    title: "Professional",
    items: [
      "Communication", "Leadership", "Collaboration", "Training & Mentorship",
      "Documentation", "Problem Solving", "Cross-functional Coordination",
      "Public Speaking", "MS Excel",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>A multidisciplinary <span className="gradient-text">toolkit</span></>}
      description="From technical SEO and GEO to applied AI and editorial systems — built for scale, accessibility, and impact."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 90}>
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-glow md:p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <g.Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
