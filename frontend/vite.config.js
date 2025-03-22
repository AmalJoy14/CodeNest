import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "@uiw/react-codemirror",
        "@codemirror/view",
        "@codemirror/lang-javascript",
        "@codemirror/lang-python",
        "@codemirror/lang-cpp",
        "@codemirror/lang-java",
        "@codemirror/lang-go",
        "@codemirror/lang-rust"
      ],
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            return "vendor";
          }
        }
      }
    }
  },
  server: {
    port: 5173
  }
});
