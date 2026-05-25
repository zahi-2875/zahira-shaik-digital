import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Briefcase, Rocket, Heart, FlaskConical, Building2 } from "lucide-react";

const items = [
  {
    Icon: Rocket,
    role: "Founder & Independent SEO Consultant",
    org: "Verity",
    bullets: [
      "Built a content & interview platform with SEO-driven publishing",
      "Designed LinkedIn growth and digital branding strategy",
      "Content consulting and web visibility strategy for partners",
    ],
  },
  {
    Icon: Briefcase,
    role: "SEO Content Writer",
    org: "Jarvis Reach",
    bullets: [
      "SEO-driven content writing across diverse client verticals",
      "Keyword research, on-page optimization, and editorial QA",
      "Collaborated with strategists to align content with search intent",
    ],
  },
  {
    Icon: Heart,
    role: "Senior Content Writer Lead",
    org: "We Are with You Charitable Trust",
    bullets: [
      "Led content strategy for a humanitarian, mission-driven organization",
      "Mentored writers and shaped the editorial voice for outreach campaigns",
      "Produced research-based content supporting social impact initiatives",
    ],
  },
  {
    Icon: Heart,
    role: "Mental Health Awareness Website",
    org: "Project Lead — Content & Strategy",
    bullets: [
      "Developed an accessible mental health awareness website",
      "Focused on outreach, accessibility, and clear information design",
      "Created informative digital experiences for diverse audiences",
    ],
  },
  {
    Icon: FlaskConical,
    role: "AI & Research Projects",
    org: "Academic & Independent Research",
    bullets: [
      "AI-driven healthcare solution prototype",
      "Smart agriculture research integrating IoT + AI",
      "Speech therapy clinical software collaboration",
      "Published research paper — NCCT 2025 Conference",
    ],
  },
  {
    Icon: Building2,
    role: "Associate Software Engineer Intern",
    org: "Accenture",
    bullets: [
      "Foundations in SAP and enterprise software workflows",
      "Built a Sales Order App using SAP",
      "Developed an auto-generated email application for employees using MS tools + SAP",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A timeline of <span className="gradient-text">impact-driven work</span></>}
      description="From editorial leadership to applied AI research and enterprise software — shaped by curiosity, communication, and care."
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
        <ol className="space-y-10">
          {items.map((it, i) => {
            const right = i % 2 === 1;
            return (
              <li key={it.role} className="relative md:grid md:grid-cols-2 md:gap-10">
                <span className="absolute left-5 top-3 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-primary ring-4 ring-background md:left-1/2" aria-hidden="true" />
                <Reveal className={`pl-12 md:pl-0 ${right ? "md:col-start-2 md:pl-10" : "md:pr-10 md:text-right"}`}>
                  <div className={`rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow`}>
                    <div className={`flex items-center gap-3 ${right ? "" : "md:flex-row-reverse"}`}>
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                        <it.Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-display text-lg font-semibold leading-tight">{it.role}</div>
                        <div className="text-sm text-muted-foreground">{it.org}</div>
                      </div>
                    </div>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${right ? "" : "md:text-right"}`}>
                      {it.bullets.map((b) => (
                        <li key={b} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
