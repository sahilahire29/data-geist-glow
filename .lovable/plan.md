# AI & Analytics Engineer Portfolio

## Goal
Build a polished one-page portfolio for Sahil Ahire with a deep dark cyber-physical aesthetic, interactive project demonstrations, and smooth motion throughout.

## Experience
- Create a compact navigation bar with anchor links and a clear availability/status signal.
- Build a full-width first screen featuring “Sahil Ahire,” the supplied positioning statement, two calls to action, and a subtle animated particle/mesh atmosphere.
- Present three substantial project panels in a responsive asymmetric grid:
  - **Algorithmic Trading Engine:** interactive Recharts equity curve rising roughly 40%, with readable axes, tooltip, metrics, and technology labels.
  - **Offline RAG & Vector Search:** live mock query input that filters/displays three convincing JSON-style vector matches with similarity scores.
  - **Computer Vision Crowd Analytics:** a visual pipeline showing camera input, anonymized demographic approximation, analysis, and ad-board output.
- Add a skills grid and an engineering journey timeline featuring the June 2026 B.Tech graduation statement.
- Add a glass-styled contact form, email link, and GitHub/LinkedIn placeholder links, followed by a minimal footer.

## Visual Direction
- Deep slate background with cyan and electric-violet accents, translucent surfaces, fine borders, restrained glow, and layered technical details.
- Inter typography with strong hierarchy and gradient treatment reserved for the name and key data.
- Mobile-first layouts that expand into an asymmetric desktop composition without horizontal overflow.
- Framer Motion scroll reveals with staggered children, subtle card interactions, and reduced-motion fallbacks.

## Interaction Details
- “Explore Systems” scrolls to projects; “Contact” scrolls to the form.
- Chart tooltip and responsive resizing work immediately.
- RAG search updates results as the visitor types, with an empty-query prompt and three seeded mock matches.
- Contact fields receive accessible labels, validation, and a mail-client submission to `hello@sahilahire.tech`; no message storage or external service is introduced.
- Social links remain clearly marked placeholders until real profile URLs are provided.

## Technical Implementation
- Replace the placeholder `/` page and add route-specific title, description, Open Graph, and Twitter metadata.
- Install `framer-motion`; use the existing React, Tailwind CSS v4, Recharts, and Lucide packages.
- Keep styling in Tailwind class names; use the existing global stylesheet only to define semantic theme/font tokens and base document behavior, not a new custom stylesheet.
- Load Inter through the document head and preserve accessible focus states, semantic landmarks, chart labeling, and keyboard operation.
- Split the page into focused portfolio sections and interactive project components where helpful.

## Verification
- Confirm the production preview compiles without errors.
- Exercise navigation, live search, chart tooltip, and form validation.
- Check desktop and mobile screenshots for spacing, legibility, visual balance, and overlap.
