import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default ({ mode }) => {
  return defineConfig({
    build: {
      outDir: "dist",
    },
    plugins: [
      react(),
      VitePWA({
        devOptions: {
          enabled: true,
        },
        manifest: {
          name: "Task-Tide Application",
          short_name: "Task-Tide",
          icons: [
            {
              src: "/favicon.ico",
              sizes: "64x64 32x32 24x24 16x16",
              type: "image/x-icon",
            },
            {
              src: "/favicon-16x16.png",
              type: "image/png",
              sizes: "16x16",
            },
            {
              src: "/favicon-32x32.png",
              type: "image/png",
              sizes: "32x32",
            },
            {
              src: "/android-chrome-192x192.png",
              type: "image/png",
              sizes: "192x192",
            },
            {
              src: "/android-chrome-512x512.png",
              type: "image/png",
              sizes: "512x512",
              purpose: "any maskable", // Icon format that ensures that your PWA icon looks great on all Android devices
            },
          ],
          theme_color: "#b546ff",
        },
      }),
    ],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
  });
};