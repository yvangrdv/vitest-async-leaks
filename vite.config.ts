import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        // Alias for core (OxPlatform front framework)
        "@": fileURLToPath(new URL("./javascript/src", import.meta.url)),
      },
    },
  }
})
