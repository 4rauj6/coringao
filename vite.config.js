import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    // Substiua NOME_DO_REPO pelo nome do repositório no novo projeto
    base: command === "serve" ? "/" : "/repo-name/",
  };
});
