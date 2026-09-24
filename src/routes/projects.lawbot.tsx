import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Bot, RotateCcw, Send, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectDetail } from "@/components/project-detail";

export const Route = createFileRoute("/projects/lawbot")({
  head: () => ({
    meta: [
      { title: "LawBot Case Study — Sahil Ahire" },
      {
        name: "description",
        content:
          "Architecture and results of LawBot, a Mistral-7B legal RAG assistant built with FAISS and FastAPI.",
      },
      { property: "og:title", content: "LawBot: AI-Powered Law Consultant" },
      {
        property: "og:description",
        content:
          "A detailed look at a low-latency legal AI assistant and its retrieval architecture.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/lawbot" }],
  }),
  component: LawBotPage,
});

const answer =
  "Based on the retrieved contract clauses, the termination provision requires 30 days’ written notice. The indemnity obligation survives termination, while confidential materials must be returned within 10 business days. This summary is informational and should be reviewed by qualified counsel.";

function LawBotDemo() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    if (!active || text.length >= answer.length) return;
    const timer = window.setTimeout(() => setText(answer.slice(0, text.length + 1)), 12);
    return () => window.clearTimeout(timer);
  }, [active, text]);
  const start = () => {
    setText("");
    setActive(true);
  };
  return (
    <section className="rounded-md border border-border bg-card/60 p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="font-mono text-xs text-primary">LIVE INFERENCE MOCK</p>
          <h2 className="mt-1 font-semibold">Legal context synthesis</h2>
        </div>
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" /> Local model
        </span>
      </div>
      <div className="min-h-[280px] space-y-4 rounded-md border border-border bg-background/70 p-4">
        <div className="flex gap-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-sm bg-secondary">
            <UserRound size={15} />
          </span>
          <p className="rounded-md bg-secondary p-3 text-sm leading-6">
            Summarize the termination and indemnity obligations in this agreement.
          </p>
        </div>
        {active && (
          <div className="flex gap-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-sm bg-primary/15 text-primary">
              <Bot size={15} />
            </span>
            <p className="min-h-24 flex-1 rounded-md border border-primary/15 bg-primary/5 p-3 text-sm leading-6 text-muted-foreground">
              {text}
              <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-primary" />
            </p>
          </div>
        )}
      </div>
      <Button onClick={start} className="mt-4 w-full bg-primary text-primary-foreground">
        {active ? <RotateCcw /> : <Send />}
        {active ? "Replay summary" : "Generate legal summary"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Demonstration only — not legal advice.
      </p>
    </section>
  );
}

function LawBotPage() {
  return (
    <ProjectDetail
      number="01"
      title="LawBot: AI-Powered Law Consultant"
      eyebrow="Legal intelligence"
      summary="A private, context-aware legal assistant that retrieves relevant passages before generating clear, grounded answers in real time."
      stack={["Mistral-7B", "FastAPI", "React", "WebSockets", "FAISS", "RAG"]}
      problem="Legal documents are dense, high-stakes, and difficult to navigate with keyword search alone. LawBot couples semantic retrieval with a locally deployable language model so each answer can be grounded in the most relevant source passages while preserving responsive conversational interaction."
      results={[
        { value: "Mistral-7B", label: "Foundation model" },
        { value: "FAISS", label: "Vector retrieval" },
        { value: "WebSockets", label: "Streaming delivery" },
        { value: "IJARSCT", label: "Research published" },
      ]}
      architecture={[
        {
          label: "Ingest",
          detail: "Parse and clean legal documents while preserving clause and section boundaries.",
        },
        {
          label: "Embed",
          detail: "Convert chunked passages into dense semantic vectors for local indexing.",
        },
        {
          label: "Retrieve",
          detail: "Search FAISS for the highest-similarity context related to each question.",
        },
        {
          label: "Generate",
          detail: "Prompt Mistral-7B with retrieved evidence and stream the grounded response.",
        },
      ]}
      nextTo="/projects/smart-contract-detection"
      nextLabel="Smart Contract Detection"
    >
      <LawBotDemo />
    </ProjectDetail>
  );
}
