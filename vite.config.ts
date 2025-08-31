import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇 important for Pages
export default defineConfig({
  plugins: [react()],
  base: "/william-white-site/",
});
