import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Layers3, SplitSquareHorizontal } from "lucide-react";
import { ProjectDetail } from "@/components/project-detail";
import colorizedImage from "@/assets/colorization-demo.jpg";

export const Route = createFileRoute("/projects/image-colorization")({
  head: () => ({
    meta: [
      { title: "AI Image Colorization — Sahil Ahire" },
      { name: "description", content: "Architecture and results of a cGAN image colorization pipeline using LAB color space, U-Net, and PatchGAN." },
      { property: "og:title", content: "Image Colorization using Deep Learning" },
      { property: "og:description", content: "Context-aware grayscale image colorization with a U-Net generator and PatchGAN discriminator." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/image-colorization" }],
  }),
  component: ImageColorizationPage,
});

function ResultsComparison() {
  return (
    <section className="overflow-hidden rounded-md border border-border bg-card/60">
      <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-7">
        <div>
          <p className="font-mono text-xs text-primary">VISUAL RESULT</p>
          <h2 className="mt-1 font-semibold">Grayscale to context-aware color</h2>
        </div>
        <SplitSquareHorizontal className="shrink-0 text-accent" size={20} />
      </div>
      <div className="grid md:grid-cols-2">
        <figure className="border-b border-border md:border-b-0 md:border-r">
          <div className="aspect-[3/2] overflow-hidden bg-background">
            <img src={colorizedImage} alt="Grayscale historic Indian street input demonstration" width={1536} height={1024} loading="lazy" className="h-full w-full object-cover grayscale" />
          </div>
          <figcaption className="flex items-center justify-between gap-3 p-4 text-xs"><span className="font-mono text-muted-foreground">INPUT / L CHANNEL</span><span className="text-muted-foreground">Structure only</span></figcaption>
        </figure>
        <figure>
          <div className="aspect-[3/2] overflow-hidden bg-background">
            <img src={colorizedImage} alt="Realistically colorized historic Indian street output demonstration" width={1536} height={1024} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <figcaption className="flex items-center justify-between gap-3 p-4 text-xs"><span className="font-mono text-primary">cGAN / AB CHANNELS</span><span className="text-muted-foreground">Predicted color</span></figcaption>
        </figure>
      </div>
      <p className="border-t border-border px-5 py-3 text-xs leading-5 text-muted-foreground">Generated demonstration example. Replace with a captured model output when final test samples are available.</p>
    </section>
  );
}

function ImageColorizationPage() {
  return (
    <ProjectDetail
      number="04"
      title="Image Colorization using Deep Learning"
      eyebrow="Conditional generative vision"
      summary="A cGAN pipeline that predicts vivid, context-aware color for grayscale photography without damaging the original image structure."
      stack={["Python", "TensorFlow", "Keras", "OpenCV", "U-Net", "PatchGAN"]}
      problem="Pixel-wise regression tends to average uncertain colors into dull sepia tones, while deep encoders can let color bleed across object boundaries. Working in LAB space separates structure from color; adversarial training encourages vivid predictions and U-Net skip connections preserve precise edges."
      results={[{ value: "LAB", label: "Color space" }, { value: "U-Net", label: "Generator" }, { value: "PatchGAN", label: "Discriminator" }, { value: "PSNR / SSIM", label: "Evaluation" }]}
      architecture={[
        { label: "Separate", detail: "Convert training images to LAB and isolate the L channel from the target a and b colors." },
        { label: "Generate", detail: "Map luminance to color channels with a U-Net and high-resolution skip connections." },
        { label: "Judge", detail: "Use a PatchGAN discriminator to score local realism and discourage washed-out averages." },
        { label: "Recombine", detail: "Merge predicted color with source luminance and evaluate structural and signal fidelity." },
      ]}
      nextTo="/projects/lawbot"
      nextLabel="LawBot"
    >
      <ResultsComparison />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-border bg-card/45 p-4"><Droplets size={17} className="text-primary" /><h3 className="mt-4 text-sm font-semibold">Vibrant prediction</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">L1 and adversarial losses balance structural accuracy with plausible, committed color.</p></div>
        <div className="rounded-md border border-border bg-card/45 p-4"><Layers3 size={17} className="text-accent" /><h3 className="mt-4 text-sm font-semibold">Clean boundaries</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">U-Net skip connections retain spatial detail so colors follow object edges.</p></div>
      </div>
    </ProjectDetail>
  );
}