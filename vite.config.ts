import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 || 5173 || 5174 || 3001 },
  preview: { port: 8080 },
});
