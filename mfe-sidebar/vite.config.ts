import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe_sidebar",
      filename: "remoteEntry.js",
      // exposes: {
      //   "./Sidebar": "./src/App.tsx",
      // },
      exposes: {
        "./Sidebar": "./src/remote.ts",
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
