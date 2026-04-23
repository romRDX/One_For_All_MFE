import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe_home",
      filename: "remoteEntry.js",
      exposes: {
        "./Home": "./src/App.tsx",
      },
      shared: {
        // @ts-ignore
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
  server: {
    port: 5175,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
