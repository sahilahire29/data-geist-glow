# Split the Computer Vision Suite into Two Projects

## Goal
Replace the single “Advanced CV Suite” entry with two standalone case studies—ESRGAN Image Resolution Enhancer and Deep Learning Image Colorization—using the uploaded PDF as the source of truth.

## Homepage changes
- Keep LawBot and Smart Contract Vulnerability Detection unchanged.
- Replace the existing Advanced CV Suite card with two concise, clickable project cards:
  - **Image Resolution Enhancer using ESRGAN** — 4× super-resolution for restoring sharp edges and realistic textures in degraded images.
  - **Image Colorization using Deep Learning (cGAN)** — context-aware conversion of grayscale images into vibrant color using a U-Net generator and PatchGAN discriminator.
- Renumber the portfolio to four projects and preserve the current responsive grid, visual styling, and motion.

## New case-study pages
- Add a dedicated ESRGAN page covering the use case, Python and deep-learning stack, RRDB generator, relativistic discriminator, perceptual/adversarial/content losses, tiled inference, challenges, and PSNR/SSIM/LPIPS evaluation.
- Add a dedicated Image Colorization page covering historical-photo restoration, LAB color space, U-Net generator, PatchGAN discriminator, L1/adversarial losses, skip connections, color bleeding, and PSNR/SSIM evaluation.
- Give both pages the existing case-study structure: overview, technologies, results, architecture stages, and previous/next project navigation.
- Remove the obsolete combined Computer Vision Suite page and update all links and route types through normal route generation.

## Visual results
- Generate one cohesive photographic example for each project, then derive paired presentations from it:
  - ESRGAN: intentionally pixelated/soft input beside a sharp enhanced output.
  - Colorization: grayscale input beside a realistic colorized output.
- Present each pair in a responsive before/after results section with accessible labels.
- Label these as **demonstration examples**, not measured model outputs, so the portfolio does not imply fabricated experimental evidence. The images can later be replaced directly with your actual results.

## Technical details
- Extend the shared case-study navigation types for `/projects/esrgan` and `/projects/image-colorization`.
- Give both routes unique title, description, Open Graph, Twitter, and canonical metadata.
- Use bundled project assets, existing Tailwind tokens, Framer Motion reveals, and current reusable UI patterns.
- Preserve mobile layouts and avoid horizontal overflow in image comparisons and architecture grids.

## Verification
- Confirm all four homepage cards open the correct page and the old CV Suite URL is no longer linked.
- Test the full next-project navigation loop.
- Check generated examples, labels, metadata, and layouts on mobile and desktop.
- Resolve current compilation/type issues encountered during verification and confirm a clean preview build.