# AI & Analytics Engineer Portfolio

## Goal
Build a polished one-page portfolio for Sahil Ahire with a deep dark cyber-physical aesthetic, interactive project demonstrations, and smooth motion throughout.

## Experience
- Create a compact navigation bar with anchor links and a clear availability/status signal.
- Build a full-width first screen featuring “Sahil Ahire,” the Generative AI/LLM/Computer Vision positioning statement, “Explore AI Models” and “Download Resume” actions, and a subtle animated neural-network mesh.
- Add an About section titled “Bridging Heavy Engineering with Scalable AI,” covering the MIT ADT University degree, Prodigy InfoTech internship, and Microsoft Azure AI credential.
- Present three concise project previews in a responsive asymmetric grid, each showing its name, brief description, key technologies, and a clear link to a dedicated detail page.
- Build a full detail page for each project:
  - **LawBot:** problem, Mistral-7B/FastAPI/React/WebSockets architecture, FAISS RAG flow, implementation notes, IJARSCT research outcome, and a clickable mock chat that types a generated legal summary.
  - **Smart Contract Vulnerability Detection:** problem, PyTorch/Hugging Face/CodeBERT training architecture, methodology, evaluation metrics, and a Recharts-powered accuracy visualization highlighting the supplied 99.96% result.
  - **Advanced Computer Vision Suite:** problem, ESRGAN/Pix2Pix/CNN model pipelines, architecture stages, sample result comparisons, and key outcomes.
- Give each detail page consistent navigation back to the project index and direct movement between projects.
- Add categorized skill groups for languages/frameworks, AI/ML, and databases, plus Microsoft Generative AI and GDSC TensorFlow certification badges.
- Add a glass-styled contact form, `ahiresahil101@gmail.com`, LinkedIn and GitHub profile links, followed by a minimal footer.

## Visual Direction
- Deep slate background with cyan and electric-violet accents, translucent surfaces, fine borders, restrained glow, and layered technical details.
- Inter typography with strong hierarchy and gradient treatment reserved for the name and key data.
- Mobile-first layouts that expand into an asymmetric desktop composition without horizontal overflow.
- Framer Motion scroll reveals with staggered children, subtle card interactions, and reduced-motion fallbacks.

## Interaction Details
- “Explore AI Models” navigates to the project showcase.
- Selecting any project preview opens its own shareable page with full details, architecture, and results rather than expanding the card in place.
- “Download Resume” uses a clearly labeled placeholder download state because no resume file was supplied.
- LawBot’s prompt action produces an immediate typewriter-style legal summary and can be replayed.
- The accuracy ring and metrics resize cleanly and expose accessible labels.
- Contact fields receive accessible labels, validation, and a mail-client submission to `ahiresahil101@gmail.com`; no message storage or external service is introduced.
- Social icons link to `linkedin.com/in/sahilahire` and `github.com/sahilahire29`.

## Technical Implementation
- Replace the placeholder `/` page, add one route per project, and provide unique title, description, Open Graph, and Twitter metadata for every page.
- Install `framer-motion`; use the existing React, Tailwind CSS v4, Recharts, and Lucide packages.
- Keep styling in Tailwind class names; use the existing global stylesheet only to define semantic theme/font tokens and base document behavior, not a new custom stylesheet.
- Load Inter through the document head and preserve accessible focus states, semantic landmarks, chart labeling, and keyboard operation.
- Split the page into focused portfolio sections and interactive project components where helpful.

## Verification
- Confirm the production preview compiles without errors.
- Exercise every project preview/detail-page path, back/next navigation, LawBot typing, the accuracy visualization, social links, and form validation.
- Check desktop and mobile screenshots for spacing, legibility, visual balance, and overlap.
