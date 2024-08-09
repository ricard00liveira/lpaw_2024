import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // Define a pasta src como a raiz do projeto
  build: {
    outDir: "../dist", // Pasta de saída para build
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": "/src", // Alias para o diretório src
    },
  },
});
