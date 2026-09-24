import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold"
            aria-label="Sahil Ahire home"
          >
            <span className="grid size-8 place-items-center rounded-md border border-primary/35 bg-primary/10 text-primary">
              <Sparkles size={15} />
            </span>
            <span>
              SA<span className="text-primary">.</span>
            </span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-5" aria-label="Main navigation">
            <Link
              to="/"
              hash="projects"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Projects
            </Link>
            <Link
              to="/"
              hash="contact"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Contact
            </Link>
            <a
              href="https://github.com/sahilahire29"
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-md border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/sahilahire"
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-md border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
