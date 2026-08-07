import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Keep the CRA output folder so existing deploy/hosting config still works.
    outDir: "build",
  },
  // Many files in this project use JSX inside `.js` files (legacy CRA convention).
  // Vite/esbuild only treats `.jsx`/`.tsx` as JSX by default, so we opt `.js` in.
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
