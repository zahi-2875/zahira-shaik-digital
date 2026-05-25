import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Award, BookOpen, Code, Users, FileBadge, Cpu, Feather, Mic, Heart } from "lucide-react";

const items = [
  { Icon: Mic, title: "TEDx VVIT Host 2023", note: "Event hosting, public speaking & coordination" },
  { Icon: Heart, title: "Student Volunteer", note: "National Service Scheme (NSS) outreach" },
  { Icon: Award, title: "Google Cloud Innovators", note: "Innovator Badge" },
  { Icon: FileBadge, title: "IAENG Membership", note: "International Association of Engineers" },
  { Icon: Code, title: "Certified Python Problem Solver", note: "Algorithmic & analytical thinking" },
  { Icon: Users, title: "Class Representative", note: "Leadership & cross-team coordination" },
  { Icon: BookOpen, title: "Research Paper Contributions", note: "NCCT 2025 & academic publications" },
  { Icon: Cpu, title: "AI/ML Academic Projects", note: "Healthcare, agritech, NLP" },
  { Icon: Feather, title: "Published Author", note: "Featured in 1 anthology" },
  { Icon: BookOpen, title: "College Magazine Writer", note: "Published 4 editions" },
  { Icon: FileBadge, title: "Technical SEO Certification", note: "Semrush" },
  { Icon: FileBadge, title: "SEO Certification", note: "HubSpot" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications & Achievements"
      title={<>Recognized <span className="gradient-text">credentials & contributions</span></>}
      description="A record of continuous learning, leadership, and contribution across academia and industry."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 70}>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <it.Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-base font-semibold leading-tight">{it.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{it.note}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
