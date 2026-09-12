import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Boxes, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { PortfolioShell } from "./portfolio-shell";
import { Reveal } from "./reveal";

export type ProjectDetailProps = {
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  stack: string[];
  problem: string;
  architecture: { label: string; detail: string }[];
  results: { value: string; label: string }[];
  children: ReactNode;
  nextTo: "/projects/lawbot" | "/projects/smart-contract-detection" | "/projects/esrgan" | "/projects/image-colorization";
  nextLabel: string;
};

export function ProjectDetail({ number, title, eyebrow, summary, stack, problem, architecture, results, children, nextTo, nextLabel }: ProjectDetailProps) {
  return (
    <PortfolioShell>
      <main className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36">
        <Link to="/" hash="projects" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><ArrowLeft size={16}/> All projects</Link>
        <Reveal>
          <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">{number} / {eyebrow}</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">{title}</h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{summary}</p>
          </div>
        </Reveal>

        <div className="grid gap-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result, i) => <Reveal key={result.label} delay={i * 0.06}><div className="border-l border-primary/50 pl-4"><div className="text-2xl font-semibold text-foreground">{result.value}</div><div className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{result.label}</div></div></Reveal>)}
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <section>
              <p className="section-kicker">The challenge</p>
              <h2 className="mt-3 text-2xl font-semibold">Problem & approach</h2>
              <p className="mt-5 leading-7 text-muted-foreground">{problem}</p>
              <div className="mt-7 flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-sm border border-border bg-card/70 px-3 py-1.5 font-mono text-xs text-muted-foreground">{item}</span>)}</div>
            </section>
          </Reveal>
          <Reveal delay={0.1}>{children}</Reveal>
        </div>

        <Reveal>
          <section className="border-y border-border py-12">
            <div className="mb-8 flex items-center gap-3"><Boxes className="text-accent"/><h2 className="text-2xl font-semibold">System architecture</h2></div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {architecture.map((step, i) => <div key={step.label} className="group relative overflow-hidden rounded-md border border-border bg-card/55 p-5">
                <div className="mb-8 flex items-center justify-between"><span className="font-mono text-xs text-primary">0{i+1}</span><CheckCircle2 size={16} className="text-muted-foreground"/></div>
                <h3 className="font-semibold">{step.label}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{step.detail}</p>
              </div>)}
            </div>
          </section>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-b border-border pb-12 sm:flex-row sm:items-end">
          <div><p className="section-kicker">Next case study</p><h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{nextLabel}</h2></div>
          <Link to={nextTo} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:translate-x-1">View project <ArrowRight size={16}/></Link>
        </div>
      </main>
    </PortfolioShell>
  );
}
