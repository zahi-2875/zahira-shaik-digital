import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="gradient-text">that matters</span></>}
      description="Open to opportunities in SEO, digital strategy, research communication, and global impact initiatives."
    >
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft md:p-12">
          <p className="mx-auto max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            Whether it's a humanitarian initiative, a global research collaboration, or an SEO transformation —
            I'd love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zahiraworkemail@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a
              href="https://www.linkedin.com/in/zahira-shaik-1ab213262/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/zahi-2875?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
          <div className="mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Globally available · Mission-driven
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} Zahira Shaik. All rights reserved.</div>
        <div>Crafted with intent — for global impact.</div>
      </div>
    </footer>
  );
}
