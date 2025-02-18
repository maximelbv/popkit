import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@content": path.resolve(__dirname, "src/content"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
});
