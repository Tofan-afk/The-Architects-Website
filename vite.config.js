import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mpa from "vite-plugin-multi-pages";

// https://vitejs.dev/config/
export default defineConfig({
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
