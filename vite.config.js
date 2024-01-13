import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mpa from "vite-plugin-multi-pages";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/The-Architects-Website/",
  rollupOptions: {
    input: {
      index: "src/pages/index.html",
      about: "src/pages/about.html",
      gallery: "src/pages/gallery.html",
      certifications: "src/pages/certifications.html",
      projects: "src/pages/projects.html",
    },
  },
  plugins: [
    react(),
    mpa({
      scanDir: "src/pages",
      defaultOpenPage: "src/pages/index.html",
      scanFile: "index.html",
      ignorePageNames: "",
    }),
  ],
});
