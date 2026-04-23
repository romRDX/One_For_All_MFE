import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        mfe_home: "http://localhost:4174/assets/remoteEntry.js",
        mfe_dashboard: "http://localhost:4175/assets/remoteEntry.js",
        mfe_sidebar: "http://localhost:4176/assets/remoteEntry.js",
        mfe_content: "http://localhost:4177/assets/remoteEntry.js",
      },
      exposes: {
        "./storeApi": "./src/store/storeApi.ts",
      },
      // shared: ["react", "react-dom", "@reduxjs/toolkit", "react-redux"],
      shared: {
        // @ts-ignore
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-redux": { singleton: true },
        "@reduxjs/toolkit": { singleton: true },
      },
    }),
  ],
  server: {
    port: 5174,
    cors: true,
  },
});
