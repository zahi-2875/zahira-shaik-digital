import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { TrendingUp, Activity, BarChart3, Target, Zap, Search } from "lucide-react";

function Sparkline() {
  const points = [10, 14, 12, 18, 22, 20, 28, 32, 30, 38, 44, 52];
  const max = Math.max(...points);
  const w = 220, h = 60;
  const step = w / (points.length - 1);
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * (h - 6) - 3}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-16 w-full">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.18 250)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.55 0.18 250)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L ${w} ${h} L 0 ${h} Z`} fill="url(#grad)" />
      <path d={d} fill="none" stroke="oklch(0.55 0.18 250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Bars() {
  const bars = [40, 65, 50, 80, 95, 70, 88];
  return (
    <div className="flex h-16 items-end gap-1.5">
      {bars.map((v, i) => (
        <div key={i} className="flex-1 rounded-t-md bg-primary-gradient" style={{ height: `${v}%` }} />
      ))}
    </div>
  );
}

export function SeoShowcase() {
  return (
    <Section
      id="seo"
      eyebrow="SEO Showcase"
      title={<>Search performance, <span className="gradient-text">engineered</span></>}
      description="Audit-driven strategy, GEO-ready content systems, and dashboards that translate insight into measurable impact."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-primary" /> Organic Traffic
              </div>
              <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">+184%</span>
            </div>
            <div className="mt-3 font-display text-3xl font-semibold">48,920</div>
            <p className="text-xs text-muted-foreground">Monthly sessions (illustrative)</p>
            <div className="mt-4"><Sparkline /></div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Search className="h-4 w-4 text-primary" /> Top Keywords
              </div>
              <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">Top 3</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["ai-driven content strategy", "#2"],
                ["geo seo optimization", "#1"],
                ["technical seo for nonprofits", "#3"],
                ["search intent mapping", "#2"],
              ].map(([k, r]) => (
                <li key={k} className="flex items-center justify-between rounded-lg bg-muted px-3 py-2">
                  <span className="truncate text-foreground/80">{k}</span>
                  <span className="text-xs font-semibold text-primary">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="h-4 w-4 text-primary" /> Content Performance
              </div>
              <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">7-day</span>
            </div>
            <div className="mt-3 font-display text-3xl font-semibold">94<span className="text-base text-muted-foreground">/100</span></div>
            <p className="text-xs text-muted-foreground">Quality + intent match score</p>
            <div className="mt-4"><Bars /></div>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {[
          { Icon: Target, title: "Keyword Research & Clustering", text: "Intent-led clusters that map to journeys and topical authority." },
          { Icon: BarChart3, title: "Technical SEO Audits", text: "Crawlability, schema, Core Web Vitals, and information architecture." },
          { Icon: Zap, title: "GEO & AI Search Optimization", text: "Content engineered for generative engines and AI overviews." },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                <c.Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{c.title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
