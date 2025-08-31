import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: your repo name here
export default defineConfig({
  plugins: [react()],
  base: "/william-white-site/",
});
