/// <reference types="vitest" />

import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "my-lib",
      fileName: "my-lib",
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src")
    }
  },
  test: {
    globals: true,
  },
  plugins: [dts({ outDir: "dist", include: ["src/"], exclude: ["**/__test__/**"] }), tsconfigPaths()],
});