import { createFileRoute } from "@tanstack/react-router";
import { ScanSearch, Sparkles, SplitSquareHorizontal } from "lucide-react";
import { ProjectDetail } from "@/components/project-detail";
import enhancedImage from "@/assets/esrgan-demo.jpg.asset.json";
import lowResolutionImage from "@/assets/esrgan-input.jpg.asset.json";

export const Route = createFileRoute("/projects/esrgan")({
  head: () => ({
    meta: [
      { title: "ESRGAN Image Enhancer — Sahil Ahire" },
      { name: "description", content: "Architecture and results of an ESRGAN single-image super-resolution pipeline for detailed 4× image enhancement." },
      { property: "og:title", content: "Image Resolution Enhancer using ESRGAN" },
      { property: "og:description", content: "RRDB-based super-resolution with perceptual, adversarial, and content losses." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/esrgan" }],
  }),
  component: EsrganPage,
});

function ResultsComparison() {
  return (
    <section className="overflow-hidden rounded-md border border-border bg-card/60">
      <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-7">
        <div>
          <p className="font-mono text-xs text-primary">VISUAL RESULT</p>
          <h2 className="mt-1 font-semibold">Low resolution to restored detail</h2>
        </div>
        <SplitSquareHorizontal className="shrink-0 text-accent" size={20} />
      </div>
      <div className="grid md:grid-cols-2">
        <figure className="border-b border-border md:border-b-0 md:border-r">
          <div className="aspect-[3/2] overflow-hidden bg-background">
            <img src={lowResolutionImage.url} alt="Pixelated low-resolution architectural input demonstration" width={192} height={128} loading="lazy" className="h-full w-full object-cover [image-rendering:pixelated]" />
          </div>
          <figcaption className="flex items-center justify-between gap-3 p-4 text-xs"><span className="font-mono text-muted-foreground">INPUT / 1×</span><span className="text-muted-foreground">Soft edges, lost texture</span></figcaption>
        </figure>
        <figure>
          <div className="aspect-[3/2] overflow-hidden bg-background">
            <img src={enhancedImage.url} alt="Sharp high-resolution architectural output demonstration" width={1536} height={1024} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <figcaption className="flex items-center justify-between gap-3 p-4 text-xs"><span className="font-mono text-primary">ESRGAN / 4×</span><span className="text-muted-foreground">Recovered edges and texture</span></figcaption>
        </figure>
      </div>
      <p className="border-t border-border px-5 py-3 text-xs leading-5 text-muted-foreground">Generated demonstration example. Replace with a captured model output when final benchmark samples are available.</p>
    </section>
  );
}

function EsrganPage() {
  return (
    <ProjectDetail
      number="03"
      title="Image Resolution Enhancer using ESRGAN"
      eyebrow="Single-image super-resolution"
      summary="A deep-learning pipeline that reconstructs sharp, high-resolution images from blurry or pixelated inputs while preserving believable texture."
      stack={["Python", "PyTorch", "OpenCV", "RRDB", "VGG", "Pillow"]}
      problem="Traditional interpolation enlarges pixels without recovering missing detail. This system uses an ESRGAN generator with Residual-in-Residual Dense Blocks and a relativistic discriminator to restore edges and natural texture, while tiled inference prevents memory failures on very large images."
      results={[{ value: "4×+", label: "Resolution scale" }, { value: "PSNR", label: "Signal quality" }, { value: "SSIM", label: "Structural fidelity" }, { value: "LPIPS", label: "Perceptual quality" }]}
      architecture={[
        { label: "Prepare", detail: "Create paired low- and high-resolution samples with consistent crops and augmentation." },
        { label: "Generate", detail: "Pass the input through RRDB layers without batch normalization to reconstruct fine detail." },
        { label: "Optimize", detail: "Combine perceptual, adversarial, and content losses for fidelity and realistic texture." },
        { label: "Enhance", detail: "Run tiled inference and blend boundaries to process large images within available memory." },
      ]}
      nextTo="/projects/image-colorization"
      nextLabel="Image Colorization"
    >
      <ResultsComparison />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-border bg-card/45 p-4"><Sparkles size={17} className="text-primary" /><h3 className="mt-4 text-sm font-semibold">Natural texture</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">VGG-based perceptual loss avoids the overly smooth finish produced by pixel loss alone.</p></div>
        <div className="rounded-md border border-border bg-card/45 p-4"><ScanSearch size={17} className="text-accent" /><h3 className="mt-4 text-sm font-semibold">Memory-aware inference</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Seamless tiling supports ultra-high-resolution outputs on consumer hardware.</p></div>
      </div>
    </ProjectDetail>
  );
}