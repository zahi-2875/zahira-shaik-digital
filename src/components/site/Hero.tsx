import { Github, Linkedin, Mail, ArrowDown, Globe } from "lucide-react";
import { Typewriter } from "./Typewriter";

const roles = [
  "SEO Content Writer",
  "SEO / GEO Content Consultant",
  "Web Strategy & Operations",
  "Online Volunteer – SEO",
  "SEO Analyst",
  "AI-Driven Content Strategist",
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Decorative orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl animate-orb" />
        <div className="absolute top-40 right-[-120px] h-[360px] w-[360px] rounded-full bg-accent/25 blur-3xl animate-orb" style={{ animationDelay: "3s" }} />
      </div>
      <div className="grain absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        {/* Left: Text */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Globe className="h-3.5 w-3.5 text-primary" />
            Available for global, mission-driven opportunities
          </div>

          <h1 className="reveal mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-7xl" style={{ animationDelay: "80ms" }}>
            Zahira <span className="gradient-text">Shaik</span>
          </h1>

          <div className="reveal mt-5 text-lg font-medium text-foreground/80 md:text-2xl" style={{ animationDelay: "160ms" }}>
            <Typewriter words={roles} />
          </div>

          <p className="reveal mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg lg:mx-0 mx-auto" style={{ animationDelay: "240ms" }}>
            Creating search-optimized digital content that informs, educates, and creates global impact —
            at the intersection of AI, communication, and human-centered technology.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start" style={{ animationDelay: "320ms" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Explore my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Let's collaborate
            </a>
          </div>

          <div className="reveal mt-10 flex items-center justify-center gap-2 lg:justify-start" style={{ animationDelay: "400ms" }}>
            {[
              { href: "https://www.linkedin.com/in/zahira-shaik-1ab213262/", label: "LinkedIn", Icon: Linkedin },
              { href: "https://github.com/zahi-2875?tab=repositories", label: "GitHub", Icon: Github },
              { href: "https://mail.google.com/mail/?view=cm&fs=1&to=zahiraworkemail@gmail.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div className="reveal flex justify-center lg:col-span-5 lg:justify-end" style={{ animationDelay: "200ms" }}>
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-primary-gradient opacity-30 blur-2xl" />
            <div className="absolute -inset-1 rounded-full bg-primary-gradient" aria-hidden="true" />
            <div className="relative aspect-square w-48 overflow-hidden rounded-full border-4 border-card bg-card shadow-glow sm:w-56 md:w-64 lg:w-72">
              <img
                src="/zahira_shaik.jpg"
                alt="Zahira Shaik"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 text-center lg:text-left">
        <a href="#about" aria-label="Scroll to about" className="reveal inline-flex flex-col items-center gap-1 text-xs text-muted-foreground" style={{ animationDelay: "520ms" }}>
          <span>Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
