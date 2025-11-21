import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({mode}) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/App.html"),
      output: {
        entryFileNames: "index.js",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
