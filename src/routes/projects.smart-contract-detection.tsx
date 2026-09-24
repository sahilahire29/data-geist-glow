import { createFileRoute } from "@tanstack/react-router";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Activity, Binary, Braces, Target } from "lucide-react";
import { ProjectDetail } from "@/components/project-detail";

export const Route = createFileRoute("/projects/smart-contract-detection")({
  head: () => ({
    meta: [
      { title: "Smart Contract Detection — Sahil Ahire" },
      {
        name: "description",
        content:
          "CodeBERT smart contract vulnerability detection architecture and 99.96% training result.",
      },
      { property: "og:title", content: "Smart Contract Vulnerability Detection" },
      {
        property: "og:description",
        content: "Deep learning for Solidity security analysis using PyTorch and CodeBERT.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/smart-contract-detection" }],
  }),
  component: SmartContractPage,
});

const ring = [
  { name: "Accuracy", value: 99.96 },
  { name: "Error", value: 0.04 },
];
function MetricsDemo() {
  return (
    <section className="rounded-md border border-border bg-card/60 p-5 sm:p-7">
      <div className="mb-5">
        <p className="font-mono text-xs text-primary">MODEL EVALUATION</p>
        <h2 className="mt-1 font-semibold">Training performance</h2>
      </div>
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div className="relative h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ring}
                dataKey="value"
                innerRadius={76}
                outerRadius={95}
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {" "}
                <Cell fill="var(--primary)" />
                <Cell fill="var(--secondary)" />
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
            <div>
              <div className="text-4xl font-semibold text-primary">99.96%</div>
              <div className="mt-1 text-xs text-muted-foreground">TRAINING ACCURACY</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { v: "CodeBERT", l: "ENCODER", I: Binary },
            { v: "Solidity", l: "SOURCE", I: Braces },
            { v: "Multi-class", l: "OBJECTIVE", I: Target },
            { v: "PyTorch", l: "RUNTIME", I: Activity },
          ].map(({ v, l, I }) => (
            <div key={l} className="rounded-md border border-border bg-background/55 p-4">
              <I size={16} className="text-accent" />
              <div className="mt-5 text-sm font-semibold">{v}</div>
              <div className="mt-1 font-mono text-[10px] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5 text-xs leading-5 text-muted-foreground">
        The displayed accuracy is the supplied training result; production assessment would
        additionally report held-out precision, recall, F1, and class-level error analysis.
      </p>
    </section>
  );
}
function SmartContractPage() {
  return (
    <ProjectDetail
      number="02"
      title="Smart Contract Vulnerability Detection"
      eyebrow="Applied security ML"
      summary="A transformer-based static analysis system designed to classify vulnerability patterns directly from Solidity source code."
      stack={["PyTorch", "Hugging Face", "CodeBERT", "Solidity", "Transformers"]}
      problem="Manual smart contract audits are expensive and difficult to scale. This pipeline learns contextual code representations to flag likely vulnerabilities earlier in development, prioritizing contracts and code regions for expert review rather than replacing security auditors."
      results={[
        { value: "99.96%", label: "Training accuracy" },
        { value: "CodeBERT", label: "Pretrained encoder" },
        { value: "Multi-class", label: "Classification" },
        { value: "Solidity", label: "Target language" },
      ]}
      architecture={[
        {
          label: "Normalize",
          detail:
            "Clean Solidity source while retaining security-relevant syntax and structural cues.",
        },
        {
          label: "Tokenize",
          detail: "Encode contracts with CodeBERT’s code-aware tokenizer and bounded sequences.",
        },
        {
          label: "Fine-tune",
          detail: "Train a classification head in PyTorch over contextual transformer embeddings.",
        },
        {
          label: "Evaluate",
          detail:
            "Track accuracy and class-level behavior to surface likely vulnerability families.",
        },
      ]}
      nextTo="/projects/esrgan"
      nextLabel="ESRGAN Image Enhancer"
    >
      <MetricsDemo />
    </ProjectDetail>
  );
}
