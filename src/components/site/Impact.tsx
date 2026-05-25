import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Globe2, GraduationCap, HeartPulse, Cpu, Accessibility, Languages, Quote } from "lucide-react";

const items = [
  { Icon: Globe2, title: "UN & Global Development", text: "Aligned with UN, UNICEF, UNDP, and UNV missions." },
  { Icon: Accessibility, title: "Digital Accessibility", text: "Building inclusive, accessibility-first digital experiences." },
  { Icon: GraduationCap, title: "Educational Equity", text: "Content & strategy for equitable access to learning." },
  { Icon: HeartPulse, title: "Mental Health Awareness", text: "Outreach and information design with empathy." },
  { Icon: Cpu, title: "AI for Social Impact", text: "Applied AI for healthcare, mental health, and research." },
  { Icon: Languages, title: "Cross-Cultural Communication", text: "Storytelling that travels across geographies and contexts." },
];

export function Impact() {
  return (
    <Section
      id="impact"
      eyebrow="Volunteering & Global Impact"
      title={<>Technology with a <span className="gradient-text">humanitarian compass</span></>}
      description="A commitment to global development, accessibility, education, and impact-driven AI."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 70}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <it.Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{it.title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <figure className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-border bg-primary-gradient p-8 text-center text-primary-foreground shadow-glow md:p-12">
          <Quote className="mx-auto h-8 w-8 opacity-80" aria-hidden="true" />
          <blockquote className="mt-4 font-display text-xl leading-snug text-balance md:text-3xl">
            "Keep Everything Platonic"
          </blockquote>
          <figcaption className="mt-4 text-sm uppercase tracking-[0.2em] opacity-80">— Zahira Shaik</figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
