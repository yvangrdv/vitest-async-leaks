import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig(env => mergeConfig(
  viteConfig(env),
  defineConfig({
    test: {
      pool: "forks",
      environment: 'jsdom',
      maxWorkers: 1,
      onUnhandledError (error): boolean | void {
          console.log("error", error)

          // if (error.message === '[vitest-worker]: Closing rpc while "fetch" was pending') {
          //     return false
          // }
      },
      globals: true,
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
))
