import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/ONG-Transformando-Vidas/' : './',

  build: {
    rollupOptions: {
      input: 'html/index.html'
    }
  },

  publicDir: 'imagens'
});