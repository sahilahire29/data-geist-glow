import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite"; // <-- 1. Added Nitro import

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart({ server: { entry: "server" } }),
    nitro(), // <-- 2. Added Nitro to the plugins array
    react(),
    tailwindcss(),
  ],
});
