# Sahil's Cybernetic Portfolio

Act as a Senior Frontend Engineer and UI/UX Designer. Build a premium, highly interactive portfolio for an AI & Analytics Engineer. The application must be built using React, Tailwind CSS, and Framer Motion for animations.

Design System & Theme:

- Theme: Deep dark mode (slate-950 background) with neon cyan and electric violet accents.
- Aesthetic: Modern, "cyber-physical", glassmorphism (translucent cards with subtle borders).
- Typography: Clean, sans-serif (Inter or similar).
- Animations: Use Framer Motion for smooth, staggered scroll-reveals on all sections.

Website Structure & Content:

1. Hero Section:

- Headline: "Sahil Ahire" (Large, gradient text).
- Sub-headline: "AI & Analytics Engineer | Building multi-agent workflows, data-driven trading strategies, and localized LLM architectures."
- CTA Buttons: "Explore Systems" (Primary) and "Contact" (Secondary).
- Visual: Include a subtle, looping animated background effect (like floating particles or a glowing mesh).

2. Interactive Project Showcase (Crucial):
   Display these 3 projects in a masonry or grid layout. Make them interactive using Lucide React icons and Recharts:

- Project A: "Algorithmic Trading Engine" (Python, Pine Script). Detail the conversion of Pine Script indicators to Python and backtesting data pipelines.
  - Interactive Element: Embed a mock line chart using Recharts simulating an equity curve showing a 40% gain over time.
- Project B: "Offline RAG & Vector Search" (FAISS, RAG, Local LLMs). Detail the architecture of building offline search using semantic embeddings.
  - Interactive Element: A mock search input bar that, when typed into, instantly displays 3 fake "vector matched" JSON snippets below it.
- Project C: "Computer Vision Crowd Analytics". Detail the ML pipeline analyzing camera feeds for targeted digital advertising boards based on demographic approximations.

3. Tech Stack & Engineering Journey:

- Render a sleek grid of skills: Python, Next.js, Azure AI, FAISS, Retrieval-Augmented Generation, TradingView API.
- Include a timeline card: "B.Tech in Computer Engineering (AI & Analytics) - Graduated June 2026. Focus on bridging heavy engineering with scalable venture building."

4. Contact & Footer:

- A clean contact form (Name, Email, Message) styled with glassmorphism.
- Display email: hello@sahilahire.tech
- Include placeholder icon links for GitHub and LinkedIn.

Technical Constraints:

- Ensure all components are fully responsive (mobile-first).
- Use Tailwind for all styling. Do not use custom CSS files.
- Ensure the interactive elements (Recharts and the mock RAG search) function immediately in the preview.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
