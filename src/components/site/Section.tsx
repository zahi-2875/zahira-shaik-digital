import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
