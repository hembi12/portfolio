import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Héctor Martil - Desarrollador Web",
        short_name: "Héctor Martil",
        description: "Portfolio de Héctor Martil, especializado en React y TypeScript.",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año
              }
            }
          },
          {
            urlPattern: /^https:\/\/api\.tu-dominio\.com\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 1 día
              }
            }
          }
        ]
      }
    }),
    sitemap({
      hostname: "https://tu-dominio.com", // ⚠️ REEMPLAZA con tu dominio real
      exclude: ["/privacy-policy", "/404"], // Excluye rutas irrelevantes del sitemap
      extensions: [".html"]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components")
    }
  }
});
