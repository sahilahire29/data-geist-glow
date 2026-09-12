import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, BrainCircuit, Code2, Database, Download, Github, Linkedin, Mail, Send, ShieldCheck, Sparkles, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NeuralMesh } from "@/components/neural-mesh";
import { PortfolioShell } from "@/components/portfolio-shell";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahil Ahire — AI & Analytics Engineer" },
      { name: "description", content: "Portfolio of Sahil Ahire, an AI and Analytics Engineer specializing in generative AI, LLMs, and computer vision." },
      { property: "og:title", content: "Sahil Ahire — AI & Analytics Engineer" },
      { property: "og:description", content: "Generative AI, LLM, RAG, and computer vision systems engineered for real-world outcomes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const projects = [
  { number: "01", title: "LawBot", subtitle: "AI-Powered Law Consultant", description: "A low-latency legal assistant combining Mistral-7B with retrieval-augmented generation and semantic case search.", tags: ["Mistral-7B", "FAISS", "FastAPI"], to: "/projects/lawbot" as const, icon: BrainCircuit },
  { number: "02", title: "Smart Contract", subtitle: "Vulnerability Detection", description: "A CodeBERT deep learning pipeline trained to identify security vulnerabilities in Solidity contracts with 99.96% accuracy.", tags: ["PyTorch", "CodeBERT", "Solidity"], to: "/projects/smart-contract-detection" as const, icon: ShieldCheck },
  { number: "03", title: "Advanced CV Suite", subtitle: "Generative Vision Systems", description: "A unified research suite spanning super-resolution, image translation, and intelligent grayscale colorization.", tags: ["ESRGAN", "Pix2Pix", "OpenCV"], to: "/projects/computer-vision-suite" as const, icon: Sparkles },
];

const skillGroups = [
  { title: "Languages & Frameworks", icon: Code2, skills: ["Python", "C++", "Java", "React", "FastAPI"] },
  { title: "AI / Machine Learning", icon: BrainCircuit, skills: ["PyTorch", "TensorFlow", "Hugging Face", "PEFT (LoRA)", "OpenCV"] },
  { title: "Data & Retrieval", icon: Database, skills: ["PostgreSQL", "FAISS", "Vector Search", "RAG Pipelines"] },
];

function Index() {
  return (
    <PortfolioShell>
      <main>
        <section className="relative flex min-h-[92svh] items-center border-b border-border pt-16">
          <NeuralMesh />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="max-w-5xl">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 font-mono text-xs text-primary">
                <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" /> AI & ANALYTICS ENGINEER
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08 }} className="text-6xl font-semibold leading-[.95] sm:text-8xl lg:text-[7.5rem]">
                Sahil <span className="text-gradient">Ahire</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }} className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Specializing in <span className="text-foreground">Generative AI</span>, <span className="text-foreground">LLMs</span>, and <span className="text-foreground">Computer Vision</span> — translating ambitious models into reliable systems.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .3 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 bg-primary px-6 text-primary-foreground shadow-[0_0_28px_var(--primary-muted)] hover:bg-primary/90"><Link to="/" hash="projects">Explore AI Models <ArrowRight /></Link></Button>
                <Button variant="outline" size="lg" disabled title="Resume file coming soon" className="h-12 border-border bg-card/40 px-6 text-muted-foreground"><Download /> Download Resume</Button>
              </motion.div>
            </div>
            <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              <span>Pune, India</span><span>Available for collaboration</span><span>Graduated 2026</span>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:py-32">
          <Reveal><p className="section-kicker">01 / About</p></Reveal>
          <Reveal delay={.08}>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">Bridging Heavy Engineering with <span className="text-gradient">Scalable AI.</span></h2>
            <div className="mt-8 grid gap-6 text-base leading-8 text-muted-foreground sm:grid-cols-2">
              <p>I recently completed my B.Tech in Computer Engineering with a specialization in Artificial Intelligence & Analytics from MIT ADT University in Pune.</p>
              <p>As a former Generative AI Intern at Prodigy InfoTech, I engineered ML workflows and experimented with modern AI infrastructure. I am a Microsoft Certified Azure AI Apps and Agents Developer Associate.</p>
            </div>
          </Reveal>
        </section>

        <section id="projects" className="border-y border-border bg-surface/35 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="section-kicker">02 / Selected systems</p><h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Engineering in practice.</h2></div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">Open a case study to inspect the challenge, architecture, implementation, and measured outcomes.</p>
            </Reveal>
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project, i) => {
                const Icon = project.icon;
                return <Reveal key={project.title} delay={i * .08} className={i === 0 ? "lg:col-span-2" : ""}>
                  <Link to={project.to} className="group block min-h-[320px] rounded-md border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card sm:p-8">
                    <div className="flex items-start justify-between"><span className="font-mono text-xs text-primary">{project.number}</span><span className="grid size-11 place-items-center rounded-md border border-border bg-background/60 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary"><Icon size={21}/></span></div>
                    <div className="mt-16 max-w-2xl"><p className="mb-2 text-sm text-accent">{project.subtitle}</p><h3 className="text-3xl font-semibold sm:text-4xl">{project.title}</h3><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{project.description}</p></div>
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-sm bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{tag}</span>)}</div><span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">View case study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></span></div>
                  </Link>
                </Reveal>;
              })}
            </div>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <Reveal><p className="section-kicker">03 / Capabilities</p><h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Tools I build with.</h2></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {skillGroups.map((group, i) => { const Icon=group.icon; return <Reveal key={group.title} delay={i*.08}><div className="h-full rounded-md border border-border bg-card/50 p-6"><Icon className="text-primary"/><h3 className="mt-8 font-semibold">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.skills.map(s=><span key={s} className="rounded-sm border border-border bg-background/50 px-3 py-1.5 text-sm text-muted-foreground">{s}</span>)}</div></div></Reveal>})}
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[{name:"Microsoft Generative AI",sub:"Azure AI Apps & Agents",icon:Award},{name:"GDSC TensorFlow",sub:"Machine Learning Certification",icon:TerminalSquare}].map((cert,i)=>{const Icon=cert.icon;return <Reveal key={cert.name} delay={i*.08}><div className="flex items-center gap-5 rounded-md border border-accent/25 bg-accent/5 p-5"><span className="grid size-12 place-items-center rounded-md bg-accent/10 text-accent"><Icon/></span><div><p className="text-xs uppercase tracking-[.14em] text-accent">Certified</p><h3 className="mt-1 font-semibold">{cert.name}</h3><p className="mt-1 text-sm text-muted-foreground">{cert.sub}</p></div></div></Reveal>})}
          </div>
        </section>

        <section id="contact" className="border-t border-border bg-surface/35 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal><p className="section-kicker">04 / Contact</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Let’s build something intelligent.</h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">Have a model, research idea, or engineering problem worth solving? I’d like to hear about it.</p><a href="mailto:ahiresahil101@gmail.com" className="mt-8 inline-flex items-center gap-3 text-sm text-primary hover:underline"><Mail size={17}/> ahiresahil101@gmail.com</a><div className="mt-8 flex gap-3"><a href="https://linkedin.com/in/sahilahire" target="_blank" rel="noreferrer" className="social-link"><Linkedin size={17}/> LinkedIn</a><a href="https://github.com/sahilahire29" target="_blank" rel="noreferrer" className="social-link"><Github size={17}/> GitHub</a></div></Reveal>
            <Reveal delay={.1}>
              <form action="mailto:ahiresahil101@gmail.com" method="post" encType="text/plain" className="rounded-md border border-border bg-card/60 p-6 backdrop-blur-xl sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Name<Input name="name" required placeholder="Your name" className="mt-2 h-12 bg-background/50"/></label><label className="form-label">Email<Input name="email" type="email" required placeholder="you@company.com" className="mt-2 h-12 bg-background/50"/></label></div>
                <label className="form-label mt-5 block">Message<Textarea name="message" required placeholder="Tell me about the problem you’re solving..." className="mt-2 min-h-36 bg-background/50"/></label>
                <Button type="submit" size="lg" className="mt-6 h-12 w-full bg-primary text-primary-foreground sm:w-auto">Send message <Send/></Button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-xs text-muted-foreground sm:flex-row sm:px-8"><span>© 2026 Sahil Ahire</span><span className="font-mono">ENGINEERED WITH CURIOSITY</span></div></footer>
    </PortfolioShell>
  );
}
