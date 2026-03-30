import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log(env.VITE_BACKEND_URL);
  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/v1": {
          target: env?.VITE_BACKEND_URL,
        }
      }
    }
  }
});