import { defineConfig } from "vitest/config";
import path from 'path';
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
