import { defineConfig } from 'vite';

export default defineConfig({
  base: './',

  build: {
    rollupOptions: {
      input: 'html/index.html'
    }
  },

  publicDir: 'imagens'
});