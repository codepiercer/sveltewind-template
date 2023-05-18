import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig, loadEnv } from "vite"

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), ``) }

  return defineConfig({
    plugins: [sveltekit()],
    define: {
      "import.meta.env.BUILD_TIME": JSON.stringify(new Date().toISOString()),
      "import.meta.env.BUILD_VERSION": JSON.stringify(process.env.npm_package_version)
    },
    server: {
      port: process.env.PORT || 3000
    }
  })
}
