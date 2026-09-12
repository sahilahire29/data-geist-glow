# AI & Analytics Engineer Portfolio

## Goal
Build a polished one-page portfolio for Sahil Ahire with a deep dark cyber-physical aesthetic, interactive project demonstrations, and smooth motion throughout.

## Experience
- Create a compact navigation bar with anchor links and a clear availability/status signal.
- Build a full-width first screen featuring “Sahil Ahire,” the Generative AI/LLM/Computer Vision positioning statement, “Explore AI Models” and “Download Resume” actions, and a subtle animated neural-network mesh.
- Add an About section titled “Bridging Heavy Engineering with Scalable AI,” covering the MIT ADT University degree, Prodigy InfoTech internship, and Microsoft Azure AI credential.
- Present three substantial project panels in a responsive asymmetric grid:
  - **LawBot:** a clickable mock chat that types a generated legal summary, alongside the Mistral-7B, FastAPI, React, WebSockets, FAISS/RAG, and IJARSCT details.
  - **Smart Contract Vulnerability Detection:** a Recharts-powered circular accuracy visualization and compact metrics dashboard highlighting the supplied 99.96% result and CodeBERT pipeline.
  - **Advanced Computer Vision Suite:** a visual model pipeline for ESRGAN super-resolution, Pix2Pix translation, and CNN colorization.
- Add categorized skill groups for languages/frameworks, AI/ML, and databases, plus Microsoft Generative AI and GDSC TensorFlow certification badges.
- Add a glass-styled contact form, `ahiresahil101@gmail.com`, LinkedIn and GitHub profile links, followed by a minimal footer.

## Visual Direction
- Deep slate background with cyan and electric-violet accents, translucent surfaces, fine borders, restrained glow, and layered technical details.
- Inter typography with strong hierarchy and gradient treatment reserved for the name and key data.
- Mobile-first layouts that expand into an asymmetric desktop composition without horizontal overflow.
- Framer Motion scroll reveals with staggered children, subtle card interactions, and reduced-motion fallbacks.

## Interaction Details
- “Explore AI Models” scrolls to projects.
- “Download Resume” uses a clearly labeled placeholder download state because no resume file was supplied.
- LawBot’s prompt action produces an immediate typewriter-style legal summary and can be replayed.
- The accuracy ring and metrics resize cleanly and expose accessible labels.
- Contact fields receive accessible labels, validation, and a mail-client submission to `ahiresahil101@gmail.com`; no message storage or external service is introduced.
- Social icons link to `linkedin.com/in/sahilahire` and `github.com/sahilahire29`.

## Technical Implementation
- Replace the placeholder `/` page and add route-specific title, description, Open Graph, and Twitter metadata.
- Install `framer-motion`; use the existing React, Tailwind CSS v4, Recharts, and Lucide packages.
- Keep styling in Tailwind class names; use the existing global stylesheet only to define semantic theme/font tokens and base document behavior, not a new custom stylesheet.
- Load Inter through the document head and preserve accessible focus states, semantic landmarks, chart labeling, and keyboard operation.
- Split the page into focused portfolio sections and interactive project components where helpful.

## Verification
- Confirm the production preview compiles without errors.
- Exercise navigation, LawBot typing, the accuracy visualization, social links, and form validation.
- Check desktop and mobile screenshots for spacing, legibility, visual balance, and overlap.
