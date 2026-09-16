import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://pitchayut-ariyachansil.web.app",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
