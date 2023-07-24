import { defineConfig } from "vite";
import preact from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
});
