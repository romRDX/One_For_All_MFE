import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe_content",
      filename: "remoteEntry.js",
      exposes: {
        "./Content": "./src/App.tsx",
      },
      remotes: {
        host: "http://localhost:4177/assets/remoteEntry.js",
      },
      shared: {
        // @ts-ignore
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-redux": { singleton: true },
        "@reduxjs/toolkit": { singleton: true },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
});
